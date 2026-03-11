type ParsedSourceLink = {
  label: string;
  href: string | null;
};

const hadithCollectionPatterns: Array<{ pattern: RegExp; slug: string }> = [
  { pattern: /^(?:Jami[`'’]?\s+at-Tirmidhi)\s+([0-9]+[a-z]?)$/i, slug: "tirmidhi" },
  { pattern: /^(?:Sunan\s+al-Tirmidhi)\s+([0-9]+[a-z]?)$/i, slug: "tirmidhi" },
  { pattern: /^(?:Sunan\s+Abi\s+Dawud)\s+([0-9]+[a-z]?)$/i, slug: "abudawud" },
  { pattern: /^(?:Sunan\s+Ibn\s+Majah)\s+([0-9]+[a-z]?)$/i, slug: "ibnmajah" },
  { pattern: /^(?:Sahih\s+Muslim)\s+([0-9]+[a-z]?)$/i, slug: "muslim" },
  { pattern: /^(?:Sahih\s+al-Bukhari)\s+([0-9]+[a-z]?)$/i, slug: "bukhari" },
  { pattern: /^(?:Musnad\s+Ahmad)\s+([0-9]+[a-z]?)$/i, slug: "ahmad" },
  { pattern: /^(?:Riyad\s+as-Salihin)\s+([0-9]+[a-z]?)$/i, slug: "riyadussalihin" },
  { pattern: /^(?:Hisn\s+al-Muslim)\s+([0-9]+[a-z]?)$/i, slug: "hisn" },
];

function parseQuranLink(reference: string): string | null {
  const match = reference.match(/(\d+):(\d+[a-z]?)/i);

  if (!match) {
    return null;
  }

  return `https://quran.com/${match[1]}/${match[2]}`;
}

function parseHadithLink(reference: string): string | null {
  const normalized = reference
    .replace(/^origin in\s+/i, "")
    .replace(/^Reference:\s*/i, "")
    .trim();

  for (const collection of hadithCollectionPatterns) {
    const match = normalized.match(collection.pattern);

    if (match) {
      return `https://sunnah.com/${collection.slug}:${match[1]}`;
    }
  }

  return null;
}

export function buildSourceLinks(sourceReference: string): ParsedSourceLink[] {
  return sourceReference.split(";").map((segment) => {
    const label = segment.trim();

    if (!label) {
      return { label, href: null };
    }

    const href =
      parseQuranLink(label) ??
      parseHadithLink(label);

    return { label, href };
  });
}
