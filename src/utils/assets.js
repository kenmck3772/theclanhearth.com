const LOCAL_DIR_HINTS = [
  { token: 'emblem', prefix: '/images/emblem/' },
  { token: 'tartan', prefix: '/images/tartan/' },
  { token: 'crest', prefix: '/images/emblem/' },
];

export const IMAGE_MAP = {
  'ramsay-tartan.jpg': '/images/placeholders/clan-tartan-placeholder.svg',
};

const DEFAULT_PLACEHOLDER = '/images/placeholders/generic-image-placeholder.svg';

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
  if (!fileName && !fallback) {
    return DEFAULT_PLACEHOLDER;
  }

  const mapped = IMAGE_MAP[fileName] ?? fileName;
  const resolved = normaliseAssetPath(mapped);
  return resolved ?? fallback ?? DEFAULT_PLACEHOLDER;
}

export function getFallbackImage(label = 'Clan') {
  void label; // descriptive labels are captured via alt text; placeholder is decorative
  return DEFAULT_PLACEHOLDER;
}
