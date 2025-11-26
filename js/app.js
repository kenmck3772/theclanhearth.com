// app.js – render founding clans on the Clans page

const CLAN_DATA = [
  {
    id: "macgregor",
    name: "Clan Gregor",
    gaelicName: "Clann Griogair",
    motto: "‘S Rioghal Mo Dhream – Royal is my race",
    region: "Glen Orchy, Glenstrae & Glenlochy",
    sigil: "Lion’s head erased, crowned",
    images: [
      "/assets/images/emblems/macgregor-emblem.jpg",
      "/assets/images/tartans/macgregor-tartan.jpg",
    ],
    tartanPalette: ["#7b1414", "#111827", "#1f2937", "#f97316"],
  },
  {
    id: "mackenzie",
    name: "Clan MacKenzie",
    gaelicName: "Clann MhicCoinnich",
    motto: "Luceo Non Uro – I shine, not burn",
    region: "Ross-shire & Wester Ross",
    sigil: "Cabalistic stag’s head",
    images: [
      "/assets/images/emblems/mackenzie-emblem.jpg",
      "/assets/images/tartans/mackenzie-tartan.jpg",
    ],
    tartanPalette: ["#064e3b", "#0f172a", "#1e293b", "#facc15"],
  },
  {
    id: "campbell",
    name: "Clan Campbell",
    gaelicName: "Clann Cailein",
    motto: "Ne Obliviscaris – Forget not",
    region: "Argyll",
    sigil: "Boar’s head erased",
    images: [
      "/assets/images/emblems/campbell-emblem.jpg",
      "/assets/images/tartans/campbell-tartan.jpg",
    ],
    tartanPalette: ["#022c22", "#020617", "#111827", "#f97316"],
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

function renderClans() {
  const container = document.getElementById("clan-list");
  if (!container) return;

  container.innerHTML = "";

  CLAN_DATA.forEach((clan) => {
    const card = document.createElement("article");
    card.className = "clan-card";

    const title = document.createElement("h2");
    title.textContent = clan.name;

    const subtitle = document.createElement("p");
    subtitle.className = "clan-subtitle";
    subtitle.textContent = "Founding clans of The Clan Hearth";

    const imagesWrapper = document.createElement("div");
    imagesWrapper.className = "clan-images";

    clan.images.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `${clan.name} image ${index + 1}`;
      imagesWrapper.appendChild(img);
    });

    const meta = document.createElement("div");
    meta.className = "clan-meta";
    meta.innerHTML = `
      <p><strong>Motto:</strong> ${clan.motto}</p>
      <p><strong>Region:</strong> ${clan.region}</p>
      <p><strong>Sigil:</strong> ${clan.sigil}</p>
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
}

document.addEventListener("DOMContentLoaded", renderClans);
