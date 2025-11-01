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
export const IMAGE_MAP = {
                "armstrong-emblem.jpg": "uploaded:armstrong-emblem.jpg-3a5a42ef-ecdd-41a9-8862-0caa0e693610",
                "armstrong-tartan.jpg": "uploaded:armstrong-tartan.jpg-1c2fb1e9-a387-4828-acc5-87f7937656a6",
                "cameron-emblem.jpg": "uploaded:cameron-emblem.jpg-92122649-9408-44bd-a215-15aab0eb172e",
                "cameron-tartan.jpg": "uploaded:cameron-tartan.jpg-0f1e2510-9bcb-4463-81c2-30cb7b0e7235",
                "campbell-emblem.jpg": "uploaded:campbell-emblem.jpg-07cad8b2-94e9-4fe1-adfd-e6af235a9ed7",
                "campbell-tartan.jpg": "uploaded:campbell-tartan.jpg-9c776973-102b-4574-883d-311a36463710",
                "carnegie-emblem.jpg": "uploaded:carnegie-emblem.jpg-90564bfd-b3be-49ff-b388-146ad4a7874e",
                "carnegie-tartan.jpg": "uploaded:carnegie-tartan.jpg-2b8b4627-097a-4998-9583-fdcdcdb67196",
                "chattan-emblem.jpg": "uploaded:chattan-emblem.jpg-fafd758d-1cb5-46dc-92af-cce10eefd925",
                "chattan-tartan.jpg": "uploaded:chattan-tartan.jpg-83bba47f-f298-4bc7-80e1-f837b575b0d2",
                "cunningham-emblem.jpg": "uploaded:cunningham-emblem.jpg-e47e4ec4-f947-43e9-b521-4982cf376e9f",
                "cunningham-tartan.jpg": "uploaded:cunningham-tartan.jpg-1471a72e-d755-42e6-85fd-a8b35be7eefa",
                "donald-emblem.jpg": "uploaded:donald-emblem.jpg-b9acfe72-be61-45e4-a40d-56ac276d1b0c",
                "donald-tartan.jpg": "uploaded:donald-tartan.jpg-4b18f731-45ea-44a0-9503-be17ad980b15",
                "douglas-emblem.jpg": "uploaded:douglas-emblem.jpg-325443c0-e76c-4fed-9ad4-6e67af4cb501",
                "douglas-tartan.jpg": "uploaded:douglas-tartan.jpg-06e1ceb9-dcb2-4f47-a5a7-5e25c6c674f6",
                "eliott-emblem.jpg": "uploaded:eliott-emblem.jpg-395e2140-5929-4779-90f7-93abf89e238a",
                "elliot-tartan.jpg": "uploaded:elliot-tartan.jpg-e055ada5-e832-4e6d-a47d-c181fc6cbea0",
                "erskine-emblem.jpg": "uploaded:erskine-emblem.jpg-6ee4cf28-5369-4b82-a062-ee392fa616e5",
                "leslie-emblem.jpg": "uploaded:leslie-emblem.jpg-07df394e-17f3-4849-b590-679aa8e5345e", 
                "leslie-tartan.jpg": "uploaded:leslie-tartan.jpg-fe483ad9-433f-4a14-8244-7c7f6e9c2553", 
                "lindsay-emblem.jpg": "uploaded:lindsay-emblem.jpg-da28e7fb-d938-4693-a75d-3303b15d0a8d", 
                "lindsay-tartan.jpg": "uploaded:lindsay-tartan.jpg-c08ad01a-c05e-4586-accf-fc3d0280d37d", 
                "macdonald-emblem.jpg": "uploaded:donald-emblem.jpg-b9acfe72-be61-45e4-a40d-56ac276d1b0c", 
                "mackenzie-tartan1.jpg": "uploaded:mackenzie-tartan1.jpg-52c356b2-54e6-4eb9-b09f-5d75be11e1bd",
                "mackintosh-emblem.jpg": "uploaded:mackintosh-emblem.jpg-1b30ded5-28ac-4bad-8177-12bd0af77db2",
                "mackintosh-tartan.jpg": "uploaded:mackintosh-tartan.jpg-4f750e50-fc0a-480d-ba67-427ea0499c4f",
                "macleod-emblem.jpg": "uploaded:macleod-emblem.jpg-95c73ca0-6dfe-4a1f-9169-6377d8d9f791",
                "macleod-tartan.jpg": "uploaded:macleod-tartan.jpg-20e1af1a-1928-466d-8eb0-cb2600faced7",
                "macpherson-emblem.jpg": "uploaded:macpherson-emblem.jpg-f866bcfc-1ad4-46f9-a832-8892c0eabf68",
                "macpherson-tartan.jpg": "uploaded:macpherson-tartan.jpg-2730fadd-5313-4623-a382-d60856170b10",
                "murray-emblem.jpg": "uploaded:murray-emblem.jpg-e9c977c6-c6f3-4887-8d2b-b46fc724c812",
                "murray-tartan.jpg": "uploaded:murray-tartan.jpg-e091a478-5780-423a-b251-7c7136eab837",
                "ramsay-emblem.jpg": "uploaded:ramsay-emblem.jpg-3e5e3fa6-ac17-4bc3-924c-a01b09a5db14",
                "scott-emblem.jpg": "uploaded:scott-emblem.jpg-2f4b60e4-0956-4d4e-89f3-7a4af4a79071",
                "scott-tartan.jpg": "uploaded:scott-tartan.jpg-e6142a03-4a82-44ae-8535-9f18a31e2ad6",
                "sinclair-emblem.jpg": "uploaded:sinclair-emblem.jpg-815a1c5e-a3f4-43ee-aa08-06270e56e01f",
                "sinclair-tartan.jpg": "uploaded:sinclair-tartan.jpg-da46b46f-ecbd-4cc3-88cb-c49ca327c18b",
                "stewart-emblem.jpg": "uploaded:stewart-emblem.jpg-26022985-2d93-44ee-90e0-f0b0ebe3711f",
                "stewart-tartan.jpg": "uploaded:stewart-tartan.jpg-38815f7f-ba71-439f-9893-7017b19086bc",
                "wallace-emblem.jpg": "uploaded:wallace-emblem.jpg-49bd8c52-0edf-45cf-91e0-48f6881691b7",
                "wallace-tartan.jpg": "uploaded:wallace-tartan.jpg-09f59d4c-ebde-439d-aa84-6c8bbec7bb56",
                
                // Fallback for Fraser/MacKenzie (these are placeholders since no files were provided for them)
                "Fraser-emblem.jpg": `${IMAGE_BASE_URL}64x64/A52A2A/ffffff?text=FRA`,
                "Fraser-tartan.jpg": `${IMAGE_BASE_URL}200x80/A52A2A/f4f1e8?text=Fraser+Tartan`,
                "MacKenzie-emblem.jpg": `${IMAGE_BASE_URL}64x64/000080/ffffff?text=MCK`,
                "Erskine-tartan-placeholder.jpg": `${IMAGE_BASE_URL}200x80/000080/FFD700?text=Erskine+Tartan`,
                "Ramsay-tartan.jpg": `${IMAGE_BASE_URL}200x80/B22222/000080?text=Ramsay+Tartan`, 
                
            };

export function getImagePath(fileName) {
    const filePath = IMAGE_MAP[fileName] || fileName;
    if (filePath.startsWith('uploaded:') || filePath.startsWith('https://')) {
        return filePath;
    }
    if (filePath.startsWith('http://')) {
        return filePath;
    }
    return `uploaded:${filePath}`;
}
