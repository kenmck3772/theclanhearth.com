// app.js – render founding clans on the Clans page

const CLAN_DATA = [
  {
    id: "macgregor",
    name: "Clan Gregor",
    gaelicName: "Clann Griogair",
    motto: "'S Rioghal Mo Dhream – Royal is my race",
    region: "Glen Orchy, Glenstrae & Glenlochy",
    sigil: "Lion's head erased, crowned",
    images: [
      "/assets/images/emblems/macgregor-emblem.jpg",
      "/assets/images/tartans/macgregor-tartan.jpg",
    ],
    tartanPalette: ["#7b1414", "#111827", "#1f2937", "#f97316"],
    established: "14th century",
    status: "founding",
  },
  {
    id: "mackenzie",
    name: "Clan MacKenzie",
    gaelicName: "Clann MhicCoinnich",
    motto: "Luceo Non Uro – I shine, not burn",
    region: "Ross-shire & Wester Ross",
    sigil: "Cabalistic stag's head",
    images: [
      "/assets/images/emblems/mackenzie-emblem.jpg",
      "/assets/images/tartans/mackenzie-tartan.jpg",
    ],
    tartanPalette: ["#064e3b", "#0f172a", "#1e293b", "#facc15"],
    established: "12th century",
    status: "founding",
  },
  {
    id: "campbell",
    name: "Clan Campbell",
    gaelicName: "Clann Cailein",
    motto: "Ne Obliviscaris – Forget not",
    region: "Argyll",
    sigil: "Boar's head erased",
    images: [
      "/assets/images/emblems/campbell-emblem.jpg",
      "/assets/images/tartans/campbell-tartan.jpg",
    ],
    tartanPalette: ["#022c22", "#020617", "#111827", "#f97316"],
    established: "13th century",
    status: "founding",
  },
  {
    id: "fraser",
    name: "Clan Fraser",
    gaelicName: "Clann Friseal",
    motto: "Je Suis Prest – I am ready",
    region: "Inverness-shire",
    sigil: "Strawberry plant",
    images: [
      "/assets/images/emblems/fraser-emblem.jpg",
      "/assets/images/tartans/fraser-tartan.jpg",
    ],
    tartanPalette: ["#dc2626", "#1e3a8a", "#065f46", "#fef3c7"],
    established: "12th century",
    status: "member",
  },
  {
    id: "macdonald",
    name: "Clan Donald",
    gaelicName: "Clann Dòmhnaill",
    motto: "Per Mare Per Terras – By sea and by land",
    region: "Isle of Skye & Western Isles",
    sigil: "Hand holding a cross crosslet",
    images: [
      "/assets/images/emblems/donald-emblem.jpg",
      "/assets/images/tartans/donald-tartan.jpg",
    ],
    tartanPalette: ["#065f46", "#dc2626", "#1e3a8a", "#fef3c7"],
    established: "12th century",
    status: "member",
  },
  {
    id: "stewart",
    name: "Clan Stewart",
    gaelicName: "Clann Stiùbhairt",
    motto: "Virescit Vulnere Virtus – Courage grows strong at a wound",
    region: "Renfrewshire & Highlands",
    sigil: "Pelican vulning herself",
    images: [
      "/assets/images/emblems/stewart-emblem.jpg",
      "/assets/images/tartans/stewart-tartan.jpg",
    ],
    tartanPalette: ["#dc2626", "#1e3a8a", "#fef3c7", "#065f46"],
    established: "11th century",
    status: "member",
  },
  {
    id: "murray",
    name: "Clan Murray",
    gaelicName: "Clann Moireach",
    motto: "Furth Fortune and Fill the Fetters",
    region: "Perthshire",
    sigil: "Demi-savage holding a sword",
    images: [
      "/assets/images/emblems/murray-emblem.jpg",
      "/assets/images/tartans/murray-tartan.jpg",
    ],
    tartanPalette: ["#065f46", "#1e3a8a", "#dc2626", "#d4d4d4"],
    established: "12th century",
    status: "member",
  },
  {
    id: "sinclair",
    name: "Clan Sinclair",
    gaelicName: "Clann na Ceàrda",
    motto: "Commit thy work to God",
    region: "Caithness",
    sigil: "Cock proper",
    images: [
      "/assets/images/emblems/sinclair-emblem.jpg",
      "/assets/images/tartans/sinclair-tartan.jpg",
    ],
    tartanPalette: ["#dc2626", "#065f46", "#1e3a8a", "#d4d4d4"],
    established: "11th century",
    status: "member",
  },
  {
    id: "gordon",
    name: "Clan Gordon",
    gaelicName: "Clann Ghòrdain",
    motto: "Bydand – Remaining",
    region: "Aberdeenshire",
    sigil: "Stag's head",
    images: [
      "/assets/images/emblems/gordon-emblem.jpg",
      "/assets/images/tartans/gordon-tartan.jpg",
    ],
    tartanPalette: ["#1e3a8a", "#065f46", "#facc15", "#000000"],
    established: "12th century",
    status: "member",
  },
];

function createTartanStripe(colors) {
  const stripe = document.createElement("div");
  stripe.className = "tartan-stripe";

  colors.forEach((color) => {
    const cell = document.createElement("div");
    cell.className = "tartan-stripe-cell";
    cell.style.backgroundColor = color;
    stripe.appendChild(cell);
  });

  return stripe;
}

function renderClans(clansToRender = CLAN_DATA) {
  const container = document.getElementById("clan-list");
  if (!container) return;

  // Show loading state
  container.innerHTML = '<div class="loading">Loading clans...</div>';

  // Use setTimeout to allow UI to render loading state
  setTimeout(() => {
    container.innerHTML = "";

    clansToRender.forEach((clan) => {
      const card = document.createElement("article");
      card.className = "clan-card";
      card.setAttribute("role", "article");
      card.setAttribute("aria-label", `${clan.name} clan information`);
      card.dataset.clanId = clan.id;
      card.dataset.clanRegion = clan.region.toLowerCase();
      card.dataset.clanStatus = clan.status;

      const title = document.createElement("h2");
      title.textContent = clan.name;

      const subtitle = document.createElement("p");
      subtitle.className = "clan-subtitle";
      subtitle.textContent = clan.status === "founding"
        ? "Founding clan of The Clan Hearth"
        : "Member of The Clan Hearth";

      const imagesWrapper = document.createElement("div");
      imagesWrapper.className = "clan-images";

      clan.images.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.loading = "lazy"; // Lazy loading for performance

        // Better accessibility with descriptive alt text
        img.alt = index === 0
          ? `${clan.name} emblem featuring ${clan.sigil}`
          : `${clan.name} tartan pattern`;

        // Error handling for missing images
        img.onerror = () => {
          img.src = '/assets/images/tartans/tartan-placeholder.png';
          img.alt = `${clan.name} placeholder image`;
        };

        imagesWrapper.appendChild(img);
      });

      const meta = document.createElement("div");
      meta.className = "clan-meta";
      meta.innerHTML = `
        <p><strong>Motto:</strong> ${clan.motto}</p>
        <p><strong>Region:</strong> ${clan.region}</p>
        <p><strong>Sigil:</strong> ${clan.sigil}</p>
        <p><strong>Established:</strong> ${clan.established}</p>
      `;

      const badge = document.createElement("div");
      badge.className = "badge";
      badge.textContent = clan.gaelicName;

      card.appendChild(title);
      card.appendChild(subtitle);
      card.appendChild(imagesWrapper);
      card.appendChild(meta);
      card.appendChild(badge);
      card.appendChild(createTartanStripe(clan.tartanPalette));

      container.appendChild(card);
    });
  }, 0);
}

// Search and filter functionality
function setupSearch() {
  const searchInput = document.getElementById("clan-search");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();

    if (searchTerm === "") {
      renderClans(CLAN_DATA);
      return;
    }

    const filteredClans = CLAN_DATA.filter((clan) => {
      return (
        clan.name.toLowerCase().includes(searchTerm) ||
        clan.gaelicName.toLowerCase().includes(searchTerm) ||
        clan.region.toLowerCase().includes(searchTerm) ||
        clan.motto.toLowerCase().includes(searchTerm) ||
        clan.sigil.toLowerCase().includes(searchTerm)
      );
    });

    renderClans(filteredClans);
  });
}

// Filter by status (founding vs member)
function setupStatusFilter() {
  const statusFilter = document.getElementById("status-filter");
  if (!statusFilter) return;

  statusFilter.addEventListener("change", (e) => {
    const selectedStatus = e.target.value;

    if (selectedStatus === "all") {
      renderClans(CLAN_DATA);
      return;
    }

    const filteredClans = CLAN_DATA.filter(
      (clan) => clan.status === selectedStatus
    );
    renderClans(filteredClans);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderClans();
  setupSearch();
  setupStatusFilter();
});
