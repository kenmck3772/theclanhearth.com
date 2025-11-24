import { APP_DATA } from './data/appData.js';
import { getImagePath } from './utils/assets.js';

const appState = {
  currentSection: 'home',
  clanMap: null,
  clanMarkers: new Map(),
  plannerMap: null,
  plannerMarkers: [],
  itinerary: [],
  activeTimelineId: null,
  customClanTartan: { colors: [], counts: [] },
  quizAnswers: {},
  quizStep: 0,
};

const FALLBACK_SELECTORS = {
  fallbackClass: 'img-fallback',
  fallbackAttr: 'fallback',
  firstAvailableClass: 'first-available',
  firstAvailableImageClass: 'first-available-img',
};

let fallbackObserver = null;

function initFirstAvailableImages(root = document) {
  const scope = root ?? document;
  const containers = scope.querySelectorAll(`.${FALLBACK_SELECTORS.firstAvailableClass}`);
  containers.forEach((container) => {
    if (container.dataset.initialized === '1') return;
    const images = Array.from(
      container.querySelectorAll(`img.${FALLBACK_SELECTORS.firstAvailableImageClass}`),
    );
    if (!images.length) return;
    images.forEach((img, index) => {
      img.style.display = index === 0 ? '' : 'none';
      img.addEventListener('error', function handleError() {
        img.removeEventListener('error', handleError);
        const next = images[index + 1];
        if (next) {
          img.remove();
          next.style.display = '';
        } else {
          img.style.display = 'none';
        }
      });
    });
    container.dataset.initialized = '1';
  });
}

function initFallbackImages(root = document) {
  const scope = root ?? document;
  const images = scope.querySelectorAll(`img.${FALLBACK_SELECTORS.fallbackClass}`);
  images.forEach((img) => {
    if (img.dataset.fallbackInit === '1') return;
    const fallback = img.dataset.fallback;
    const handleError = () => {
      if (!fallback || img.dataset.fallbackApplied === '1') return;
      img.dataset.fallbackApplied = '1';
      img.src = fallback;
      if (!img.alt) {
        img.alt = 'Image not available';
      }
    };
    img.addEventListener('error', handleError, { once: true });
    img.dataset.fallbackInit = '1';
  });
}

function watchImageFallbacks() {
  if (fallbackObserver || typeof MutationObserver === 'undefined') return;
  if (!document.body) return;
  fallbackObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof HTMLElement)) return;
        initFallbackImages(node);
        initFirstAvailableImages(node);
      });
    });
  });
  fallbackObserver.observe(document.body, { childList: true, subtree: true });
}

window.APP_DATA = APP_DATA;

document.addEventListener('DOMContentLoaded', () => {
  initFallbackImages(document);
  initFirstAvailableImages(document);
  watchImageFallbacks();
  setupNavigation();
  const phraseOfDay = displayGaelicPhrase();
  hydrateHomeHero(phraseOfDay);
  initializeThreadOfAges();
  populateClanList();
  setupClanSearch();
  initClanMap();
  initTripBuilder();
  initFinderCreator();
  setupOghamCaster();
  populateRecipesList();
  populateLegendsList();
  initTartanDesigner();
  initChatAssistant();
  setupModalControls();
  loadClanManifest();
});

function setupNavigation() {
  const sections = Array.from(document.querySelectorAll('.page-section'));
  const navLinks = Array.from(document.querySelectorAll('.nav-link[data-target]'));
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileBtn = document.getElementById('mobile-menu-btn');

  const showSection = (target) => {
    if (!target) return;
    appState.currentSection = target;
    sections.forEach((section) => {
      const isActive = section.id === `${target}-section`;
      section.classList.toggle('hidden', !isActive);
      section.classList.toggle('active', isActive);
    });
    navLinks.forEach((link) => {
      const isActive = link.dataset.target === target;
      link.classList.toggle('active', isActive);
      link.setAttribute('aria-current', isActive ? 'page' : 'false');
    });
    if (target === 'clans' && appState.clanMap) {
      setTimeout(() => appState.clanMap.invalidateSize(), 150);
    }
    if (target === 'trip-builder' && appState.plannerMap) {
      setTimeout(() => appState.plannerMap.invalidateSize(), 150);
    }
  };

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = link.dataset.target;
      showSection(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (mobileMenu) {
        mobileMenu.classList.add('hidden');
      }
    });
  });

  if (mobileMenu && mobileMenu.children.length === 0 && navLinks.length) {
    mobileMenu.innerHTML = navLinks
      .map((link) => {
        const icon = link.querySelector('i')?.outerHTML ?? '';
        const text = link.textContent?.trim() ?? '';
        return `<button class="nav-link block w-full text-left px-4 py-3 border-b" data-target="${link.dataset.target}">${icon} ${text}</button>`;
      })
      .join('');

    Array.from(mobileMenu.querySelectorAll('.nav-link')).forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = link.dataset.target;
        showSection(target);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        mobileMenu.classList.add('hidden');
      });
    });
  }

  mobileBtn?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
  });

  showSection(appState.currentSection);
}

function displayGaelicPhrase() {
  const phraseEl = document.getElementById('gaelic-phrase');
  const pronunciationEl = document.getElementById('gaelic-pronunciation');
  const translationEl = document.getElementById('gaelic-translation');
  if (!phraseEl || !pronunciationEl || !translationEl) return null;

  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const dayIndex = Math.floor((now - startOfYear) / (1000 * 60 * 60 * 24));
  const phrases = APP_DATA.gaelicPhrases ?? [];
  if (!phrases.length) return null;
  const phrase = phrases[dayIndex % phrases.length];
  phraseEl.textContent = phrase.gaelic;
  pronunciationEl.textContent = `(${phrase.pronunciation})`;
  translationEl.textContent = phrase.translation;
  return phrase;
}

function hydrateHomeHero(phraseOfDay) {
  const clans = APP_DATA.clanData ?? [];
  const events = APP_DATA.timelineEvents ?? [];
  const mapPoints = APP_DATA.mapPoints ?? [];
  const recipes = APP_DATA.recipesData ?? [];
  const heroBackdrops = APP_DATA.heroBackdrops ?? [];
  const heroElement = document.querySelector('.home-hero');
  const heroCredit = document.querySelector('[data-hero-credit]');
  const heroCreditTitle = document.querySelector('[data-hero-credit-title]');
  const heroCreditLocation = document.querySelector('[data-hero-credit-location]');
  const heroCreditLink = document.querySelector('[data-hero-credit-link]');
  const heroCreditSeparator = document.querySelector('[data-hero-credit-separator]');

  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const dayIndex = Math.floor((now - startOfYear) / (1000 * 60 * 60 * 24));

  if (heroElement && heroBackdrops.length) {
    const selectedBackdrop = heroBackdrops[dayIndex % heroBackdrops.length];
    const resolvedImage = getImagePath(selectedBackdrop.image);
    heroElement.style.setProperty('--hero-backdrop-image', `url('${resolvedImage}')`);
    if (selectedBackdrop.overlay) {
      heroElement.style.setProperty('--hero-backdrop-overlay', selectedBackdrop.overlay);
    } else {
      heroElement.style.removeProperty('--hero-backdrop-overlay');
    }
    if (selectedBackdrop.position) {
      heroElement.style.setProperty('--hero-backdrop-position', selectedBackdrop.position);
    } else {
      heroElement.style.removeProperty('--hero-backdrop-position');
    }
    heroElement.dataset.heroBackdrop = selectedBackdrop.id ?? 'scottish-backdrop';

    setText(heroCreditTitle, selectedBackdrop.title, 'Highland twilight over Loch Awe');
    setText(heroCreditLocation, selectedBackdrop.location, 'Scotland');
    if (heroCredit) {
      heroCredit.setAttribute('aria-label', `Backdrop: ${selectedBackdrop.title} — ${selectedBackdrop.location}`);
    }
    if (heroCreditLink) {
      const creditLabel = selectedBackdrop.creditLabel ?? 'Illustration by Clan Hearth Studio';
      heroCreditLink.textContent = creditLabel;
      if (selectedBackdrop.creditUrl) {
        heroCreditLink.href = selectedBackdrop.creditUrl;
        heroCreditLink.target = '_blank';
        heroCreditLink.rel = 'noopener';
        heroCreditLink.removeAttribute('aria-disabled');
        heroCreditLink.removeAttribute('tabindex');
        heroCreditSeparator?.removeAttribute('hidden');
      } else {
        heroCreditLink.removeAttribute('href');
        heroCreditLink.removeAttribute('target');
        heroCreditLink.removeAttribute('rel');
        heroCreditLink.setAttribute('aria-disabled', 'true');
        heroCreditLink.setAttribute('tabindex', '-1');
        heroCreditSeparator?.setAttribute('hidden', 'true');
      }
    }
  }

  const formatNumber = (value) => {
    if (typeof value === 'number' && Number.isFinite(value)) {
      return value.toLocaleString('en-GB');
    }
    return '0';
  };

  const setText = (selector, value, fallback = '—') => {
    const element = typeof selector === 'string' ? document.querySelector(selector) : selector;
    if (!element) return;
    const resolved = value ?? fallback;
    element.textContent = typeof resolved === 'number' ? resolved.toString() : String(resolved);
  };

  const uniqueTerritories = new Set();
  clans.forEach((clan) => {
    (clan.territories ?? '')
      .split(/[,/]|·/g)
      .map((segment) => segment.replace(/\(.*?\)/g, '').trim())
      .filter(Boolean)
      .forEach((territory) => uniqueTerritories.add(territory));
  });

  setText('[data-stat="clans"]', formatNumber(clans.length), '0');
  setText('[data-stat="territories"]', formatNumber(uniqueTerritories.size), '0');
  setText('[data-stat="timeline"]', formatNumber(events.length), '0');
  setText('[data-stat="recipes"]', formatNumber(recipes.length), '0');

  setText('[data-highlight="timeline-count"]', formatNumber(events.length), '0');
  const firstEvent = events[0];
  const lastEvent = events[events.length - 1];
  setText('[data-highlight="timeline-first"]', firstEvent?.year ?? '—');
  setText('[data-highlight="timeline-last"]', lastEvent?.year ?? '—');
  setText('[data-highlight="timeline-detail"]', lastEvent?.title ?? '—');

  const clanSample = clans
    .slice(0, 3)
    .map((clan) => clan.name?.replace(/^Clan\s+/i, '').trim())
    .filter(Boolean);
  setText('[data-highlight="clan-sample"]', clanSample.length ? clanSample.join(' · ') : '—');

  const surnameSet = new Map();
  Object.values(APP_DATA.surnameVariants ?? {}).forEach((variants = []) => {
    if (!Array.isArray(variants)) return;
    variants.forEach((variant) => {
      const value = String(variant ?? '').trim();
      if (!value) return;
      const key = value.toLowerCase();
      if (!surnameSet.has(key)) {
        surnameSet.set(key, value);
      }
    });
  });
  const surnameSample = Array.from(surnameSet.values()).slice(0, 3);
  setText('[data-highlight="surname-count"]', formatNumber(surnameSet.size), '0');
  setText('[data-highlight="surname-sample"]', surnameSample.length ? surnameSample.join(' · ') : '—');

  const mapCategories = new Set(mapPoints.map((point) => point.category).filter(Boolean));
  setText('[data-highlight="map-count"]', formatNumber(mapPoints.length), '0');
  setText('[data-highlight="map-categories"]', formatNumber(mapCategories.size), '0');

  const featuredRecipe = recipes[0];
  setText('[data-highlight="recipe-name"]', featuredRecipe?.name ?? 'Cullen Skink');

  if (phraseOfDay) {
    setText('[data-highlight="gaelic-detail"]', `${phraseOfDay.gaelic} — ${phraseOfDay.translation}`);
  }
}

function initializeThreadOfAges() {
  const track = document.getElementById('thread-track');
  const storyContainer = document.getElementById('thread-story');
  const backdrop = document.getElementById('thread-backdrop');
  const wrapper = document.querySelector('#thread-of-ages .thread-track-wrapper');
  const scrollNextButton = document.getElementById('thread-scroll-next');
  if (!track || !storyContainer) return;

  const events = APP_DATA.timelineEvents ?? [];
  if (!events.length) return;

  track.innerHTML = events
    .map(
      (event) => `
        <button class="timeline-node" data-event-id="${event.id}" role="listitem" aria-label="${event.year} ${event.title}">
          <span class="node-year">${event.year}</span>
          <span class="node-title">${event.title}</span>
          <span class="node-era">${event.era}</span>
        </button>
      `,
    )
    .join('');

  const nodes = Array.from(track.querySelectorAll('.timeline-node'));
  const selectEvent = (eventId) => {
    if (appState.activeTimelineId === eventId) return;
    const event = events.find((entry) => entry.id === eventId) ?? events[0];
    appState.activeTimelineId = event.id;
    nodes.forEach((node) => {
      node.classList.toggle('active', node.dataset.eventId === event.id);
      node.setAttribute('aria-pressed', node.dataset.eventId === event.id ? 'true' : 'false');
    });
    renderTimelineStory(event, storyContainer);
    if (backdrop) {
      if (window.gsap && window.ScrollTrigger) {
        window.gsap.to(backdrop, { backgroundImage: event.background, duration: 0.8, ease: 'power2.out' });
      } else {
        backdrop.style.backgroundImage = event.background;
      }
    }
  };

  nodes.forEach((node) => {
    node.addEventListener('click', () => selectEvent(node.dataset.eventId));
    node.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        selectEvent(node.dataset.eventId);
      }
    });
  });

  scrollNextButton?.addEventListener('click', () => {
    const lastEvent = events[events.length - 1];
    selectEvent(lastEvent.id);
    wrapper?.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
  });

  selectEvent(events[0].id);
}

function renderTimelineStory(event, container) {
  if (!container || !event) return;
  const buildHighlights = () => {
    if (!event.highlights?.length) return '';
    return `
      <div class="thread-highlights">
        ${event.highlights
          .map(
            (item) => `
              <div class="thread-highlight">
                <i class="fas ${item.icon}" aria-hidden="true"></i>
                <p>${item.text}</p>
              </div>
            `,
          )
          .join('')}
      </div>
    `;
  };

  const buildRelated = () => {
    const sections = [];
    if (event.relatedClans?.length) {
      const clanNames = event.relatedClans
        .map((clanId) => APP_DATA.clanData.find((clan) => clan.id === clanId)?.name ?? clanId)
        .join(', ');
      sections.push(`<p class="text-sm">Connected clans: <span class="font-semibold">${clanNames}</span></p>`);
    }
    if (event.timelineLinks?.length) {
      const links = event.timelineLinks
        .map((link) => `<button class="timeline-cta-btn" data-target="${link}">${formatSectionName(link)}</button>`)
        .join('');
      sections.push(`<div class="flex flex-wrap gap-2 mt-4">${links}</div>`);
    }
    if (event.itineraryHook) {
      sections.push(
        `<button class="timeline-cta-btn" data-target="${event.itineraryHook.target}"><i class="fas fa-route"></i> ${event.itineraryHook.label}</button>`,
      );
    }
    if (!sections.length) return '';
    return `<div class="thread-cta">${sections.join('')}</div>`;
  };

  container.innerHTML = `
    <article>
      <p class="thread-era">${event.era}</p>
      <h3 class="thread-title">${event.title}</h3>
      <p class="thread-summary">${event.summary}</p>
      ${buildHighlights()}
      ${event.media?.type === 'image'
        ? `<div class="thread-media"><img src="${event.media.src}" alt="${event.media.alt}"></div>`
        : ''}
      ${buildRelated()}
    </article>
  `;

  container.querySelectorAll('.timeline-cta-btn').forEach((button) => {
    button.addEventListener('click', (eventClick) => {
      const target = button.dataset.target;
      if (!target) return;
      const nav = document.querySelector(`.nav-link[data-target="${target}"]`);
      nav?.dispatchEvent(new Event('click'));
      eventClick.preventDefault();
    });
  });
}

function formatSectionName(id) {
  const names = {
    clans: 'Clan & Map Explorer',
    'trip-builder': 'Heritage Trip Planner',
    'ogham-reading': 'Ogham Reading',
    'finder-creator': 'Spirit Clan Finder',
    'clan-finder': 'Spirit Clan Finder',
    legends: 'Whispers from the Glens',
    'ai-assistant': 'Och-I Assistant',
    'tartan-designer': 'Tartan Forge',
  };
  return names[id] ?? id.replace(/-/g, ' ');
}

function getClanSurnames(clanId) {
  return (APP_DATA.surnameVariants?.[clanId] ?? []).slice();
}

function populateClanList(searchTerm = '') {
  const listContainer = document.getElementById('clan-list-container');
  if (!listContainer) return;
  const normalized = searchTerm.trim().toLowerCase();
  const surnameMap = APP_DATA.surnameVariants ?? {};
  const fallbackMap = APP_DATA.imageFallbacks ?? {};
  const crestFallback = getImagePath(fallbackMap.crest);
  const formatVariantPreview = (variants) => {
    if (!variants.length) return '';
    if (variants.length <= 3) {
      return variants.join(', ');
    }
    return `${variants.slice(0, 3).join(', ')}…`;
  };

  const clans = (APP_DATA.clanData ?? [])
    .map((clan) => {
      const variants = Array.isArray(surnameMap[clan.id]) ? surnameMap[clan.id] : [];
      const match = normalized
        ? {
            name: clan.name.toLowerCase().includes(normalized),
            gaelic: clan.gaelicName?.toLowerCase().includes(normalized) ?? false,
            surname: variants.find((variant) => variant.toLowerCase().includes(normalized)) ?? null,
          }
        : { name: false, gaelic: false, surname: null };
      return { clan, variants, match };
    })
    .filter(({ clan, match }) => {
      if (!normalized) return true;
      return match.name || match.gaelic || Boolean(match.surname);
    })
    .sort((a, b) => a.clan.name.localeCompare(b.clan.name));

  if (!clans.length) {
    listContainer.innerHTML = '<p class="text-sm text-gray-600">No clans match your search.</p>';
    return;
  }

  listContainer.innerHTML = clans
    .map(
      ({ clan, variants, match }) => `
        <button class="item-card w-full text-left p-4 rounded-lg bg-white/80 shadow hover:shadow-md transition border-2 border-transparent hover:border-clan-gold" data-clan-id="${clan.id}">
          <div class="flex items-center gap-4">
            <img src="${getImagePath(clan.emblemImage, fallbackMap.crest)}" alt="${clan.name} crest" class="w-14 h-14 rounded-full border-4 border-yellow-700 object-cover img-fallback" data-fallback="${crestFallback}">
            <div>
              <h3 class="font-title text-lg font-semibold text-gray-800">${clan.name}</h3>
              <p class="text-xs text-gray-500 italic">${clan.gaelicName}</p>
              ${normalized && match.surname ? `<p class="text-xs text-yellow-700 font-medium mt-1">Matches surname variant “${match.surname}”</p>` : ''}
              ${variants.length ? `<p class="text-xs text-gray-500 mt-1">Linked surnames: ${formatVariantPreview(variants)}</p>` : ''}
            </div>
          </div>
        </button>
      `,
    )
    .join('');

  initFallbackImages(listContainer);

  Array.from(listContainer.querySelectorAll('.item-card')).forEach((button, index) => {
    button.addEventListener('click', () => {
      listContainer.querySelectorAll('.item-card').forEach((item) => item.classList.remove('active-item'));
      button.classList.add('active-item');
      showClanDetails(button.dataset.clanId);
    });
    if (index === 0) {
      button.classList.add('active-item');
      showClanDetails(button.dataset.clanId);
    }
  });
}

function setupClanSearch() {
  const searchInput = document.getElementById('clan-search-input');
  if (!searchInput) return;
  searchInput.addEventListener('input', (event) => {
    populateClanList(event.target.value);
  });
}

function showClanDetails(clanId) {
  const detailContainer = document.getElementById('clan-detail-container');
  if (!detailContainer) return;
  const clan = (APP_DATA.clanData ?? []).find((entry) => entry.id === clanId);
  if (!clan) {
    detailContainer.innerHTML = '<p class="text-sm text-gray-600">Clan details unavailable.</p>';
    return;
  }

  const fallbackMap = APP_DATA.imageFallbacks ?? {};
  const crestFallback = getImagePath(fallbackMap.crest);
  const tartanFallback = getImagePath(fallbackMap.tartan);
  const monumentFallback = getImagePath(fallbackMap.monument);

  const surnames = getClanSurnames(clan.id);
  const surnameSection = surnames.length
    ? `<div class="bg-white/80 p-4 rounded-lg shadow-inner">
        <h4 class="font-semibold text-yellow-800 mb-1">Associated Surnames</h4>
        <p>${surnames.join(', ')}</p>
      </div>`
    : '';

  detailContainer.innerHTML = `
    <div class="space-y-6 animate-fade-in">
      <div class="text-center">
        <img src="${getImagePath(clan.emblemImage, fallbackMap.crest)}" alt="${clan.name} crest" class="h-24 w-24 rounded-full mx-auto mb-4 border-4 border-yellow-800 p-1 bg-white img-fallback" data-fallback="${crestFallback}">
        <h3 class="font-title text-2xl font-bold text-gray-900">${clan.name}</h3>
        <p class="text-sm italic text-gray-500">${clan.gaelicName}</p>
      </div>
      <div class="grid grid-cols-1 gap-4 text-sm">
        <div class="bg-white/80 p-4 rounded-lg shadow-inner">
          <h4 class="font-semibold text-yellow-800 mb-1">Motto</h4>
          <p>${clan.motto}</p>
        </div>
        <div class="bg-white/80 p-4 rounded-lg shadow-inner">
          <h4 class="font-semibold text-yellow-800 mb-1">Territories</h4>
          <p>${clan.territories}</p>
        </div>
        <div class="bg-white/80 p-4 rounded-lg shadow-inner">
          <h4 class="font-semibold text-yellow-800 mb-1">Historic Seats</h4>
          <p>${clan.historicSeats}</p>
        </div>
        ${surnameSection}
      </div>
      <div class="space-y-3">
        <img src="${getImagePath(clan.tartanImage, fallbackMap.tartan)}" alt="${clan.name} tartan" class="w-full h-32 object-cover rounded-lg border-2 border-clan-gold img-fallback" data-fallback="${tartanFallback}">
        <img src="${getImagePath(clan.monumentImage, fallbackMap.monument)}" alt="${clan.name} monument" class="w-full h-32 object-cover rounded-lg border-2 border-clan-gold img-fallback" data-fallback="${monumentFallback}">
      </div>
      <p class="text-gray-700 leading-relaxed">${clan.lore}</p>
      ${clan.recipe ? `<button class="btn-primary px-4 py-2 rounded-lg font-semibold" data-recipe-link="${clan.recipe.id}"><i class="fas fa-utensils mr-2"></i> Taste ${clan.recipe.name}</button>` : ''}
    </div>
  `;

  initFallbackImages(detailContainer);

  detailContainer.querySelector('[data-recipe-link]')?.addEventListener('click', (event) => {
    document.querySelector('.nav-link[data-target="recipes"]').dispatchEvent(new Event('click'));
    displayRecipeDetails(event.currentTarget.dataset.recipeLink);
  });

  focusClanOnMap(clan);
}

function initClanMap() {
  const mapElement = document.getElementById('clanMap');
  if (!mapElement || typeof window.L === 'undefined') return;
  appState.clanMap = window.L.map(mapElement, {
    center: [56.4907, -4.2026],
    zoom: 6,
    scrollWheelZoom: false,
  });
  window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(appState.clanMap);

  const clanMarkers = (APP_DATA.mapPoints ?? []).filter((point) => point.category === 'clans');
  clanMarkers.forEach((point) => {
    const marker = window.L.marker([point.lat, point.lng]).addTo(appState.clanMap);
    marker.bindPopup(`<strong>${point.name}</strong><p class="text-sm">${point.description}</p>`);
    marker.on('click', () => {
      const clan = (APP_DATA.clanData ?? []).find((entry) => point.name.toLowerCase().includes(entry.name.split(' ')[1]?.toLowerCase() ?? ''));
      if (clan) {
        const button = document.querySelector(`[data-clan-id="${clan.id}"]`);
        button?.click();
      }
    });
    appState.clanMarkers.set(point.id, marker);
  });
}

function focusClanOnMap(clan) {
  if (!appState.clanMap) return;
  const markerEntry = Array.from(appState.clanMarkers.values()).find((marker) => marker.getPopup()?.getContent()?.includes(clan.name.split(' ')[1] ?? clan.name));
  if (markerEntry) {
    markerEntry.openPopup();
    appState.clanMap.panTo(markerEntry.getLatLng());
  }
}

function initTripBuilder() {
  const mapElement = document.getElementById('tripBuilderMap');
  if (!mapElement || typeof window.L === 'undefined') return;

  appState.plannerMap = window.L.map(mapElement, {
    center: [56.4907, -4.2026],
    zoom: 6,
  });

  window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(appState.plannerMap);

  const filterContainer = document.getElementById('tourism-filter-buttons');
  if (filterContainer) {
    const categories = ['all', ...new Set((APP_DATA.mapPoints ?? []).map((point) => point.category))];
    filterContainer.innerHTML = categories
      .map(
        (category, index) => `
          <button class="w-full text-left px-3 py-2 rounded-lg border transition ${index === 0 ? 'bg-yellow-700 text-white' : 'bg-white text-gray-700'}" data-category="${category}">
            ${category === 'all' ? 'Show Everything' : category.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
          </button>
        `,
      )
      .join('');

    Array.from(filterContainer.querySelectorAll('button')).forEach((button) => {
      button.addEventListener('click', () => {
        filterContainer.querySelectorAll('button').forEach((item) => item.classList.remove('bg-yellow-700', 'text-white'));
        button.classList.add('bg-yellow-700', 'text-white');
        renderTripMarkers(button.dataset.category);
      });
    });
  }

  const itineraryHeader = document.getElementById('itinerary-header');
  const itineraryPanel = document.getElementById('itinerary-panel');
  itineraryHeader?.addEventListener('click', () => {
    itineraryPanel?.classList.toggle('open');
    const expanded = itineraryPanel?.classList.contains('open');
    itineraryHeader?.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    document.getElementById('itinerary-toggle-text').textContent = expanded ? 'Collapse' : 'Expand';
  });

  document.getElementById('clear-trip-btn')?.addEventListener('click', () => {
    appState.itinerary = [];
    renderItinerary();
    showToast('Itinerary cleared.', 'info');
  });

  document.getElementById('save-trip-btn')?.addEventListener('click', () => {
    if (!appState.itinerary.length) {
      showToast('Add at least one location before saving.', 'error');
      return;
    }
    localStorage.setItem('clan-hearth-itinerary', JSON.stringify(appState.itinerary));
    showToast('Your journey is saved to this browser!', 'success');
  });

  const stored = localStorage.getItem('clan-hearth-itinerary');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        appState.itinerary = parsed;
        renderItinerary();
      }
    } catch (error) {
      console.warn('Unable to parse stored itinerary', error);
    }
  }

  renderTripMarkers('all');
}

function renderTripMarkers(category = 'all') {
  if (!appState.plannerMap) return;
  appState.plannerMarkers.forEach((marker) => marker.remove());
  appState.plannerMarkers = [];

  const points = (APP_DATA.mapPoints ?? []).filter((point) => category === 'all' || point.category === category);
  points.forEach((point) => {
    const marker = window.L.marker([point.lat, point.lng]).addTo(appState.plannerMap);
    marker.bindPopup(`<strong>${point.name}</strong><p class="text-sm">${point.description}</p>`);
    marker.on('click', () => {
      addLocationToItinerary(point);
    });
    appState.plannerMarkers.push(marker);
  });
}

function addLocationToItinerary(point) {
  if (appState.itinerary.some((entry) => entry.id === point.id)) {
    showToast('This location is already in your plan.', 'info');
    return;
  }
  appState.itinerary.push({ id: point.id, name: point.name, category: point.category });
  renderItinerary();
  showToast(`${point.name} added to your journey.`, 'success');
}

function renderItinerary() {
  const list = document.getElementById('trip-list');
  const count = document.getElementById('trip-count');
  const emptyMessage = document.getElementById('empty-trip-message');
  if (!list || !count || !emptyMessage) return;

  count.textContent = String(appState.itinerary.length);
  if (!appState.itinerary.length) {
    list.innerHTML = '';
    emptyMessage.classList.remove('hidden');
    return;
  }

  emptyMessage.classList.add('hidden');
  list.innerHTML = appState.itinerary
    .map(
      (entry) => `
        <li class="flex items-center justify-between bg-white/80 rounded-lg px-3 py-2 text-sm shadow">
          <div>
            <p class="font-semibold text-gray-800">${entry.name}</p>
            <p class="text-xs text-gray-500">${entry.category.replace(/-/g, ' ')}</p>
          </div>
          <button class="text-red-600 hover:text-red-800" data-remove="${entry.id}" aria-label="Remove ${entry.name}"><i class="fas fa-times"></i></button>
        </li>
      `,
    )
    .join('');

  list.querySelectorAll('[data-remove]').forEach((button) => {
    button.addEventListener('click', () => {
      appState.itinerary = appState.itinerary.filter((item) => item.id !== button.dataset.remove);
      renderItinerary();
    });
  });
}

function initFinderCreator() {
  const finderTab = document.getElementById('tab-finder-btn');
  const creatorTab = document.getElementById('tab-creator-btn');
  const finderContent = document.getElementById('finder-content');
  const creatorContent = document.getElementById('creator-content');
  const quizContainer = document.getElementById('quiz-container');
  const quizResult = document.getElementById('quiz-result');
  const restartQuizBtn = document.getElementById('restart-quiz-btn');
  if (!finderTab || !creatorTab || !finderContent || !creatorContent || !quizContainer || !quizResult) return;

  finderTab.addEventListener('click', () => switchFinderTab('finder'));
  creatorTab.addEventListener('click', () => switchFinderTab('creator'));

  const nameInput = document.getElementById('create-clan-name');
  const mottoInput = document.getElementById('create-clan-motto');
  nameInput?.addEventListener('input', updateClanPreview);
  mottoInput?.addEventListener('input', updateClanPreview);

  document.getElementById('go-to-tartan-designer')?.addEventListener('click', () => {
    document.querySelector('.nav-link[data-target="tartan-designer"]').dispatchEvent(new Event('click'));
    showToast('Design your tartan, then return to finalize your clan.', 'info');
  });

  document.getElementById('finalize-clan-btn')?.addEventListener('click', () => {
    const clanName = nameInput?.value.trim();
    const clanMotto = mottoInput?.value.trim();
    if (!clanName || !clanMotto) {
      showToast('Please provide a clan name and motto.', 'error');
      return;
    }
    showClanCharterModal({ clanName, clanMotto });
  });

  restartQuizBtn?.addEventListener('click', () => {
    appState.quizAnswers = {};
    appState.quizStep = 0;
    quizResult.classList.add('hidden');
    quizContainer.innerHTML = '';
    renderQuizQuestion();
  });

  renderQuizQuestion();

  function switchFinderTab(target) {
    if (target === 'finder') {
      finderTab.classList.add('active');
      creatorTab.classList.remove('active');
      finderContent.classList.add('active');
      finderContent.classList.remove('hidden');
      creatorContent.classList.add('hidden');
      creatorContent.classList.remove('active');
    } else {
      creatorTab.classList.add('active');
      finderTab.classList.remove('active');
      creatorContent.classList.add('active');
      creatorContent.classList.remove('hidden');
      finderContent.classList.add('hidden');
      finderContent.classList.remove('active');
    }
  }

  function renderQuizQuestion() {
    const questions = APP_DATA.quizQuestions ?? [];
    if (appState.quizStep >= questions.length) {
      displayQuizResult();
      return;
    }

    const question = questions[appState.quizStep];
    quizContainer.innerHTML = `
      <div class="bg-white/90 rounded-2xl shadow-xl p-6 space-y-4">
        <div class="flex items-center justify-between text-sm text-gray-500">
          <span>Question ${appState.quizStep + 1} of ${questions.length}</span>
          <span>${Math.round(((appState.quizStep) / questions.length) * 100)}% complete</span>
        </div>
        <h3 class="text-2xl font-title text-gray-900">${question.question}</h3>
        <div class="grid gap-3">
          ${question.options
            .map(
              (option) => `
                <button class="w-full text-left px-4 py-3 rounded-xl border border-yellow-200 hover:border-yellow-600 hover:shadow-md transition" data-value="${option.value}">
                  ${option.text}
                </button>
              `,
            )
            .join('')}
        </div>
      </div>
    `;

    quizContainer.querySelectorAll('button[data-value]').forEach((button) => {
      button.addEventListener('click', () => {
        appState.quizAnswers[appState.quizStep] = button.dataset.value;
        appState.quizStep += 1;
        renderQuizQuestion();
      });
    });
  }

  function displayQuizResult() {
    const recommendations = scoreQuizAnswers(Object.values(appState.quizAnswers));
    const clan = (APP_DATA.clanData ?? []).find((entry) => entry.id === recommendations.clanId);
    if (!clan) {
      quizContainer.innerHTML = '<p class="text-sm text-gray-600">We could not determine a clan match.</p>';
      return;
    }

    const fallbackMap = APP_DATA.imageFallbacks ?? {};
    const crestFallback = getImagePath(fallbackMap.crest);

    quizContainer.innerHTML = '';
    quizResult.classList.remove('hidden');
    quizResult.querySelector('#result-content').innerHTML = `
      <div class="space-y-6">
        <div class="text-center">
          <img src="${getImagePath(clan.emblemImage, fallbackMap.crest)}" alt="${clan.name} crest" class="h-24 w-24 mx-auto rounded-full border-4 border-yellow-800 p-1 bg-white img-fallback" data-fallback="${crestFallback}">
          <h3 class="font-title text-3xl font-bold text-gray-900">${clan.name}</h3>
          <p class="text-sm italic text-gray-500">${clan.gaelicName}</p>
        </div>
        <p class="text-lg text-gray-700 leading-relaxed">${recommendations.message}</p>
        <button class="btn-primary px-4 py-2 rounded-lg font-semibold" data-view-clan="${clan.id}">Explore Clan Profile</button>
      </div>
    `;

    initFallbackImages(quizResult);

    quizResult.querySelector('[data-view-clan]')?.addEventListener('click', (event) => {
      document.querySelector('.nav-link[data-target="clans"]').dispatchEvent(new Event('click'));
      const button = document.querySelector(`[data-clan-id="${event.currentTarget.dataset.viewClan}"]`);
      button?.click();
    });
  }

  function scoreQuizAnswers(values) {
    const traitToClan = {
      mountain: 'cameron',
      coast: 'macleod',
      forest: 'mackenzie',
      lowland: 'douglas',
      warrior: 'armstrong',
      chieftain: 'campbell',
      diplomat: 'erskine',
      artisan: 'macpherson',
      loyalty: 'fraser',
      resilience: 'mackenzie',
      innovation: 'carnegie',
      tradition: 'stewart',
      strength: 'cameron',
      wisdom: 'campbell',
      freedom: 'macdonald',
      magic: 'chattan',
    };

    const scores = new Map();
    values.forEach((value) => {
      const clanId = traitToClan[value];
      if (!clanId) return;
      scores.set(clanId, (scores.get(clanId) ?? 0) + 1);
    });

    let topClanId = 'campbell';
    let topScore = -1;
    scores.forEach((score, clanId) => {
      if (score > topScore) {
        topClanId = clanId;
        topScore = score;
      }
    });

    const clan = (APP_DATA.clanData ?? []).find((entry) => entry.id === topClanId);
    const message = clan
      ? `Your spirit aligns with <strong>${clan.name}</strong>. Their motto, “${clan.motto}”, mirrors the qualities you hold dear.`
      : 'We sense a unique blend of traits—explore the clans to find your closest kinship.';

    return { clanId: topClanId, message };
  }

  function updateClanPreview() {
    const namePreview = document.getElementById('charter-clan-name');
    const mottoPreview = document.getElementById('charter-clan-motto');
    namePreview.textContent = nameInput?.value.trim() || 'Your Clan Name';
    mottoPreview.textContent = `"${mottoInput?.value.trim() || 'Your Motto'}"`;
  }
}

function showClanCharterModal({ clanName, clanMotto }) {
  const modal = document.getElementById('generic-modal');
  const title = document.getElementById('modal-title');
  const body = document.getElementById('modal-body');
  if (!modal || !title || !body) return;

  const tartanCanvas = document.getElementById('tartan-canvas');
  let tartanImage = '';
  if (tartanCanvas) {
    tartanImage = tartanCanvas.toDataURL('image/png');
  }

  title.textContent = 'Your Clan Charter';
  body.innerHTML = `
    <div id="clan-charter" class="p-6 bg-white space-y-6" style="background-color: var(--parchment, #f4f1e8);">
      <div class="text-center space-y-4">
        <h3 class="font-title text-3xl text-yellow-800">${clanName}</h3>
        <p class="text-lg italic text-gray-600">“${clanMotto}”</p>
        <div class="w-40 h-40 mx-auto rounded-full border-4 border-yellow-800 overflow-hidden shadow-lg">
          <img src="https://placehold.co/200x200/2d5016/d4af37?text=Emblem" alt="Custom clan emblem" class="w-full h-full object-cover">
        </div>
      </div>
      <div class="space-y-3">
        <h4 class="font-title text-xl text-gray-800">Clan Tartan</h4>
        ${tartanImage ? `<img src="${tartanImage}" alt="Clan tartan" class="w-full rounded-lg border-2 border-yellow-800">` : '<p class="text-sm text-gray-600">Design a tartan to include it in your charter.</p>'}
      </div>
      <p class="text-sm text-gray-600 text-center">Charter generated on ${new Date().toLocaleDateString()}</p>
      <button id="download-charter" class="btn-primary px-4 py-2 rounded-lg font-semibold"><i class="fas fa-download mr-2"></i>Download Charter</button>
    </div>
  `;

  document.getElementById('download-charter')?.addEventListener('click', async () => {
    const charter = document.getElementById('clan-charter');
    if (!charter || typeof window.html2canvas === 'undefined') {
      showToast('Downloading requires html2canvas.', 'error');
      return;
    }
    const canvas = await window.html2canvas(charter, { scale: 2, backgroundColor: '#f4f1e8' });
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = `${clanName.replace(/\s+/g, '_')}_Charter.png`;
    link.click();
    closeModal();
  });

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function setupModalControls() {
  const modal = document.getElementById('generic-modal');
  const closeBtn = document.getElementById('close-modal');
  if (!modal || !closeBtn) return;
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}

function closeModal() {
  const modal = document.getElementById('generic-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

function setupOghamCaster() {
  const castBtn = document.getElementById('cast-rune-btn');
  const startView = document.getElementById('ogham-start');
  const castingView = document.getElementById('ogham-casting');
  const resultView = document.getElementById('ogham-result');
  if (!castBtn || !startView || !castingView || !resultView) return;

  castBtn.addEventListener('click', () => {
    startView.classList.add('hidden');
    castingView.classList.remove('hidden');
    setTimeout(() => {
      const rune = (APP_DATA.oghamData ?? [])[Math.floor(Math.random() * (APP_DATA.oghamData.length || 1))];
      if (!rune) return;
      document.getElementById('ogham-result-symbol').innerHTML = `<svg class="ogham-symbol-svg" viewBox="0 0 100 100"><g stroke="currentColor" fill="none" stroke-linecap="round">${rune.svgPath}</g></svg>`;
      document.getElementById('ogham-result-name').textContent = `${rune.name} (${rune.letter})`;
      document.getElementById('ogham-result-tree').textContent = `The ${rune.tree} Tree`;
      document.getElementById('ogham-result-meaning').textContent = rune.meaning;
      castingView.classList.add('hidden');
      resultView.classList.remove('hidden');
    }, 1400);
  });

  document.getElementById('cast-again-btn')?.addEventListener('click', () => {
    resultView.classList.add('hidden');
    startView.classList.remove('hidden');
  });
}

function populateRecipesList() {
  const listContainer = document.getElementById('recipe-list-container');
  if (!listContainer) return;
  const recipes = APP_DATA.recipesData ?? [];
  if (!recipes.length) {
    listContainer.innerHTML = '<p class="text-sm text-gray-600">Recipes will arrive soon.</p>';
    return;
  }

  listContainer.innerHTML = recipes
    .map(
      (recipe) => `
        <button class="item-card block w-full text-left p-4 bg-white/80 rounded-lg shadow hover:shadow-md transition border-2 border-transparent hover:border-clan-gold" data-recipe-id="${recipe.id}">
          <h3 class="font-title text-lg font-semibold text-gray-800">${recipe.name}</h3>
          <p class="text-sm text-gray-500">${recipe.description}</p>
        </button>
      `,
    )
    .join('');

  listContainer.querySelectorAll('[data-recipe-id]').forEach((button, index) => {
    button.addEventListener('click', () => {
      listContainer.querySelectorAll('.item-card').forEach((card) => card.classList.remove('active-item'));
      button.classList.add('active-item');
      displayRecipeDetails(button.dataset.recipeId);
    });
    if (index === 0) {
      button.classList.add('active-item');
      displayRecipeDetails(button.dataset.recipeId);
    }
  });
}

function displayRecipeDetails(recipeId) {
  const detailContainer = document.getElementById('recipe-detail-container');
  if (!detailContainer) return;
  const recipe = (APP_DATA.recipesData ?? []).find((entry) => entry.id === recipeId);
  if (!recipe) {
    detailContainer.innerHTML = '<p class="text-sm text-gray-600">Recipe not found.</p>';
    return;
  }

  const fallbackMap = APP_DATA.imageFallbacks ?? {};
  const recipeFallback = getImagePath(fallbackMap.recipe);

  detailContainer.innerHTML = `
    <div class="space-y-6 animate-fade-in">
      <div class="flex flex-col md:flex-row gap-6">
        <img src="${getImagePath(recipe.image, fallbackMap.recipe)}" alt="${recipe.name}" class="w-full md:w-1/3 h-48 object-cover rounded-lg border-4 border-clan-gold img-fallback" data-fallback="${recipeFallback}">
        <div class="space-y-3">
          <h2 class="font-title text-3xl font-bold text-gray-900">${recipe.name}</h2>
          <p class="text-gray-700">${recipe.description}</p>
          <div class="flex gap-4 text-sm text-gray-600">
            <span><i class="fas fa-hourglass-start mr-1"></i> Prep: ${recipe.prepTime}</span>
            <span><i class="fas fa-fire mr-1"></i> Cook: ${recipe.cookTime}</span>
            <span><i class="fas fa-users mr-1"></i> Serves: ${recipe.servings}</span>
          </div>
        </div>
      </div>
      <div class="grid gap-6 md:grid-cols-2">
        <div class="bg-white/80 p-4 rounded-lg shadow-inner">
          <h3 class="font-title text-xl text-yellow-800 mb-2"><i class="fas fa-shopping-basket mr-2"></i>Ingredients</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            ${recipe.ingredients.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        <div class="bg-white/80 p-4 rounded-lg shadow-inner">
          <h3 class="font-title text-xl text-yellow-800 mb-2"><i class="fas fa-clipboard-list mr-2"></i>Instructions</h3>
          <ol class="list-decimal list-inside space-y-2 text-gray-700">
            ${recipe.instructions.map((item) => `<li>${item}</li>`).join('')}
          </ol>
        </div>
      </div>
    </div>
  `;

  initFallbackImages(detailContainer);
}

function populateLegendsList() {
  const listContainer = document.getElementById('legends-list-container');
  if (!listContainer) return;
  const legends = APP_DATA.legendsData ?? [];
  if (!legends.length) {
    listContainer.innerHTML = '<p class="text-sm text-gray-600">Legends are being transcribed.</p>';
    return;
  }

  const fallbackMap = APP_DATA.imageFallbacks ?? {};
  const legendFallback = getImagePath(fallbackMap.legend);

  listContainer.innerHTML = legends
    .map(
      (legend) => `
        <button class="item-card w-full text-left p-4 bg-white/80 rounded-lg shadow hover:shadow-md transition border-2 border-transparent hover:border-clan-gold" data-legend-id="${legend.id}">
          <div class="flex items-center gap-4">
            <img src="${getImagePath(legend.image, fallbackMap.legend)}" alt="${legend.name}" class="w-16 h-16 rounded-full object-cover border border-amber-500 p-[2px] img-fallback" data-fallback="${legendFallback}">
            <div>
              <h3 class="font-title text-lg font-semibold text-gray-800">${legend.name}</h3>
              <p class="text-sm text-gray-500">${legend.shortDesc}</p>
            </div>
          </div>
        </button>
      `,
    )
    .join('');

  initFallbackImages(listContainer);

  listContainer.querySelectorAll('[data-legend-id]').forEach((button, index) => {
    button.addEventListener('click', () => {
      listContainer.querySelectorAll('.item-card').forEach((item) => item.classList.remove('active-item'));
      button.classList.add('active-item');
      displayLegendDetails(button.dataset.legendId);
    });
    if (index === 0) {
      button.classList.add('active-item');
      displayLegendDetails(button.dataset.legendId);
    }
  });
}

function displayLegendDetails(legendId) {
  const detailContainer = document.getElementById('legend-detail-container');
  if (!detailContainer) return;
  const legend = (APP_DATA.legendsData ?? []).find((entry) => entry.id === legendId);
  if (!legend) {
    detailContainer.innerHTML = '<p class="text-sm text-gray-600">Legend not found.</p>';
    return;
  }

  const fallbackMap = APP_DATA.imageFallbacks ?? {};
  const legendFallback = getImagePath(fallbackMap.legend);

  detailContainer.innerHTML = `
    <div class="space-y-6 text-center animate-fade-in">
      <img src="${getImagePath(legend.image, fallbackMap.legend)}" alt="${legend.name}" class="w-40 h-40 mx-auto rounded-full border-4 border-yellow-800 p-1 bg-white object-cover img-fallback" data-fallback="${legendFallback}">
      <h2 class="font-title text-4xl font-bold text-gray-900">${legend.name}</h2>
      <p class="text-xl text-gray-600 italic">${legend.shortDesc}</p>
      <div class="text-left bg-white/80 p-6 rounded-lg shadow-inner">
        <p class="text-gray-700 leading-relaxed">${legend.details}</p>
      </div>
      <button class="btn-primary px-4 py-2 rounded-lg font-semibold" data-share-legend="${legend.id}">
        <i class="fas fa-share-alt mr-2"></i> Share Legend
      </button>
    </div>
  `;

  initFallbackImages(detailContainer);

  detailContainer.querySelector('[data-share-legend]')?.addEventListener('click', async () => {
    const shareData = {
      title: legend.name,
      text: legend.shortDesc,
      url: `${window.location.origin}${window.location.pathname}#legends`,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        if (error?.name !== 'AbortError') {
          showToast('Sharing was not completed.', 'info');
        }
      }
    } else {
      showToast('Sharing is supported on modern mobile browsers.', 'info');
    }
  });
}

function initTartanDesigner() {
  const canvas = document.getElementById('tartan-canvas');
  const palette = document.getElementById('color-palette');
  const selectedContainer = document.querySelector('#selected-colors .flex');
  const threadInput = document.getElementById('thread-counts');
  const generateBtn = document.getElementById('generate-tartan-btn');
  const downloadBtn = document.getElementById('download-tartan-btn');
  const status = document.getElementById('tartan-status');
  if (!canvas || !palette || !selectedContainer || !threadInput || !generateBtn || !status) return;

  const ctx = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 800;

  palette.innerHTML = Object.entries(APP_DATA.colors ?? {})
    .map(([, hex]) => `<div class="color-box w-8 h-8 rounded-full border cursor-pointer" style="background-color: ${hex};" data-color="${hex}"></div>`)
    .join('');

  palette.addEventListener('click', (event) => {
    const box = event.target.closest('.color-box');
    if (!box) return;
    const color = box.dataset.color;
    const index = appState.customClanTartan.colors.indexOf(color);
    if (index >= 0) {
      appState.customClanTartan.colors.splice(index, 1);
      box.classList.remove('selected');
    } else if (appState.customClanTartan.colors.length < 5) {
      appState.customClanTartan.colors.push(color);
      box.classList.add('selected');
    } else {
      showToast('You can choose up to five colours.', 'error');
    }
    renderSelectedColors();
  });

  generateBtn.addEventListener('click', () => {
    const counts = threadInput.value
      .split(/\s+/)
      .map((value) => Number.parseInt(value, 10))
      .filter((value) => Number.isFinite(value) && value > 0);

    if (!appState.customClanTartan.colors.length) {
      showToast('Select at least one colour for your tartan.', 'error');
      return;
    }

    if (counts.length !== appState.customClanTartan.colors.length) {
      showToast('Provide a thread count for each selected colour.', 'error');
      return;
    }

    appState.customClanTartan.counts = counts;
    drawTartan(ctx, appState.customClanTartan.colors, appState.customClanTartan.counts, canvas);
    status.textContent = 'Your tartan is woven! Save or share it proudly.';
    downloadBtn.classList.remove('hidden');
  });

  downloadBtn?.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'custom_tartan.png';
    link.click();
  });

  function renderSelectedColors() {
    selectedContainer.innerHTML = appState.customClanTartan.colors
      .map((color) => `<div class="w-8 h-8 rounded-full border-2 border-yellow-800" style="background-color: ${color};"></div>`)
      .join('');
  }
}

function drawTartan(ctx, colors, counts, canvas) {
  const total = counts.reduce((sum, value) => sum + value, 0);
  const patternCanvas = document.createElement('canvas');
  patternCanvas.width = total;
  patternCanvas.height = total;
  const patternCtx = patternCanvas.getContext('2d');

  let offset = 0;
  counts.forEach((count, index) => {
    patternCtx.fillStyle = colors[index];
    patternCtx.fillRect(offset, 0, count, total);
    offset += count;
  });

  offset = 0;
  counts.forEach((count, index) => {
    patternCtx.fillStyle = `${colors[index]}AA`;
    patternCtx.fillRect(0, offset, total, count);
    offset += count;
  });

  const pattern = ctx.createPattern(patternCanvas, 'repeat');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (pattern) {
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

function initChatAssistant() {
  const messageContainer = document.getElementById('chat-messages');
  const input = document.getElementById('chat-input');
  const sendButton = document.getElementById('send-chat-btn');
  if (!messageContainer || !input || !sendButton) return;

  const quickButtons = document.querySelectorAll('.quick-chat-btn');
  quickButtons.forEach((button) => {
    button.addEventListener('click', () => {
      input.value = button.dataset.message;
      input.focus();
    });
  });

  sendButton.addEventListener('click', sendMessage);
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  });

  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;
    appendChatMessage('user', text);
    input.value = '';
    setTimeout(() => {
      const reply = generateAssistantReply(text);
      appendChatMessage('assistant', reply);
    }, 400);
  }

  function appendChatMessage(role, text) {
    const bubble = document.createElement('div');
    bubble.className = `chat-message ${role} max-w-[80%] my-3 p-3 rounded-xl ${role === 'assistant' ? 'self-start bg-gradient-to-r from-emerald-900 to-amber-700 text-white' : 'self-end bg-white text-gray-700 shadow'}`;
    bubble.innerHTML = `<p>${text}</p>`;
    messageContainer.appendChild(bubble);
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
}

function generateAssistantReply(message) {
  const lower = message.toLowerCase();
  if (lower.includes('clan')) {
    return 'To find your clan, explore the Finder tab or browse the Clan & Map Explorer for histories, mottos, and tartans.';
  }
  if (lower.includes('tour') || lower.includes('trip')) {
    return 'The Heritage Trip Planner map highlights castles, battlefields, and whisky trails. Add locations to craft your bespoke journey.';
  }
  if (lower.includes('tartan')) {
    return 'The Tartan Forge lets you weave colours and thread counts into a unique sett. Share it in your clan charter when you are ready!';
  }
  if (lower.includes('legend') || lower.includes('myth')) {
    return 'The Whispers from the Glens section breathes life into Highland legends with immersive storytelling—choose a tale and begin scrolling.';
  }
  return "Och-I is listening! Explore the timeline, cast an Ogham rune, or ask about clans, legends, and the Scottish homeland.";
}

function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const icon = document.getElementById('toast-icon');
  const text = document.getElementById('toast-message');
  if (!toast || !icon || !text) return;

  text.textContent = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translate(-50%, 0)';

  const styles = {
    success: { color: '#10b981', icon: 'fa-check-circle' },
    error: { color: '#ef4444', icon: 'fa-exclamation-circle' },
    info: { color: '#3b82f6', icon: 'fa-info-circle' },
  };
  const config = styles[type] ?? styles.success;
  toast.style.backgroundColor = config.color;
  icon.className = `fas ${config.icon} mr-2`;

  setTimeout(() => {
    toast.style.opacity = '0';
  }, 2600);
}

async function loadClanManifest() {
  try {
    const response = await fetch('assets/clan_image_manifest.json');
    if (!response.ok) return;
    const manifest = await response.json();
    const byId = new Map();
    manifest.forEach((entry) => {
      byId.set(entry.clan_id, entry);
    });
    APP_DATA.clanData = (APP_DATA.clanData ?? []).map((clan) => {
      const key = (clan.id ?? clan.name ?? '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      const match = byId.get(key);
      if (!match) return clan;
      return {
        ...clan,
        emblemImage: match.emblem_path || clan.emblemImage,
        tartanImage: match.tartan_path || clan.tartanImage,
      };
    });
    populateClanList(document.getElementById('clan-search-input')?.value ?? '');
  } catch (error) {
    console.warn('Could not enhance clan imagery manifest', error);
  }
}
