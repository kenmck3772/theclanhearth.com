// --------- Seed data ---------

const clans = [
  {
    id: "macgregor",
    name: "Clan Gregor",
    motto: "‘S rioghal mo dhream (Royal is my race)",
    region: "Central Highlands",
    tartanImage: "macgregor.jpg",
    emblemImage: "macgregor-emblem.jpg",
    monumentImage: "macgregor-monument.jpg", // optional, can be null
    tartanPalette: ["0b0b0b", "5a0000", "00334d", "f4f1e8"],
  },
  {
    id: "mackenzie",
    name: "Clan MacKenzie",
    motto: "Luceo non uro (I shine, not burn)",
    region: "Ross-shire",
    tartanImage: "mackenzie.jpg",
    emblemImage: "mackenzie-emblem.jpg",
    monumentImage: null,
    tartanPalette: ["020617", "0f172a", "15803d", "f4f1e8"],
  },
  {
    id: "campbell",
    name: "Clan Campbell",
    motto: "Ne obliviscaris (Forget not)",
    region: "Argyll",
    tartanImage: "campbell.jpg",
    emblemImage: "campbell-emblem.jpg",
    monumentImage: null,
    tartanPalette: ["020617", "1e293b", "0369a1", "e5e7eb"],
  },
];

// --------- Helpers ---------

function getImagePath(fileName) {
  if (!fileName) return ""; // will give an empty src (no request)
  // Adjust this if your folder is different:
  return `assets/clans/${fileName}`;
}

function createImg(src, alt) {
  const img = document.createElement("img");
  img.alt = alt;
  img.loading = "lazy";
  img.decoding = "async";
  img.src = src;
  return img;
}

function createTartanStripe(palette) {
  const stripe = document.createElement("div");
  stripe.className = "tartan-stripe";

  (palette || []).forEach((hex) => {
    const cell = document.createElement("div");
    cell.className = "tartan-stripe-cell";

    const cleaned = String(hex).replace("#", "");
    cell.style.backgroundColor = `#${cleaned}`;

    stripe.appendChild(cell);
  });

  return stripe;
}

// --------- Render logic ---------

function renderClanList() {
  const container = document.getElementById("clan-list");
  if (!container) return;

  container.innerHTML = ""; // clear

  clans.forEach((clan) => {
    const card = document.createElement("article");
    card.className = "clan-card";

    // Title
    const title = document.createElement("h2");
    title.textContent = clan.name;
    card.appendChild(title);

    // Subtitle / motto
    const subtitle = document.createElement("p");
    subtitle.className = "clan-subtitle";
    subtitle.textContent = clan.motto;
    card.appendChild(subtitle);

    // Images row
    const imagesRow = document.createElement("div");
    imagesRow.className = "clan-images";

    const tartanSrc = getImagePath(clan.tartanImage);
    const emblemSrc = getImagePath(clan.emblemImage);
    const monumentSrc = getImagePath(clan.monumentImage);

    if (tartanSrc) {
      imagesRow.appendChild(createImg(tartanSrc, `${clan.name} tartan`));
    }
    if (emblemSrc) {
      imagesRow.appendChild(createImg(emblemSrc, `${clan.name} emblem`));
    }
    if (monumentSrc) {
      imagesRow.appendChild(createImg(monumentSrc, `${clan.name} monument`));
    }

    card.appendChild(imagesRow);

    // Meta
    const meta = document.createElement("div");
    meta.className = "clan-meta";
    meta.innerHTML = `
      <div>Region: ${clan.region}</div>
    `;
    card.appendChild(meta);

    // Badge
    const badge = document.createElement("div");
    badge.className = "badge";
    badge.innerHTML = `<span>☼ Soul Clan Seed</span>`;
    card.appendChild(badge);

    // Tartan palette stripe
    if (clan.tartanPalette && clan.tartanPalette.length) {
      card.appendChild(createTartanStripe(clan.tartanPalette));
    }

    container.appendChild(card);
  });
}

// --------- Bootstrap ---------

document.addEventListener("DOMContentLoaded", () => {
  renderClanList();
});
