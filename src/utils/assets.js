import { IMAGE_BASE_URL } from '../data/appData.js';

const LOCAL_DIR_HINTS = [
  { token: 'emblem', prefix: '/images/emblem/' },
  { token: 'tartan', prefix: '/images/tartan/' },
  { token: 'crest', prefix: '/images/emblem/' },
];

const DEFAULT_PLACEHOLDER = `${IMAGE_BASE_URL}128x128/2d5016/f4f1e8?text=Clan`;

function normaliseAssetPath(rawValue) {
  if (!rawValue) {
    return null;
  }

  const trimmed = `${rawValue}`.replace(/^uploaded:/, '').trim();
  if (!trimmed) {
    return null;
  }

  if (/^(?:https?:)?\/\//.test(trimmed) || trimmed.startsWith('data:')) {
    return trimmed;
  }

  if (trimmed.startsWith('/')) {
    return trimmed;
  }

  if (trimmed.includes('/')) {
    return `/${trimmed.replace(/^\/+/u, '')}`;
  }

  const match = trimmed.match(/(\.(?:png|jpe?g|webp|svg|gif)).*$/i);
  let baseName = trimmed;
  if (match) {
    const extension = match[1];
    const cutIndex = trimmed.indexOf(extension) + extension.length;
    baseName = trimmed.slice(0, cutIndex);
  }

  const lower = baseName.toLowerCase();
  for (const { token, prefix } of LOCAL_DIR_HINTS) {
    if (lower.includes(token)) {
      return `${prefix}${baseName}`;
    }
  }

  return `/images/${baseName}`;
}

export function getImagePath(fileName, fallback = DEFAULT_PLACEHOLDER) {
  const resolved = normaliseAssetPath(fileName);
  return resolved ?? fallback;
}

export function getFallbackImage(label = 'Clan') {
  const safeLabel = encodeURIComponent(label);
  return `${IMAGE_BASE_URL}128x128/2d5016/f4f1e8?text=${safeLabel}`;
}
