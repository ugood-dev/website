export interface LegalBlock {
  h3?: string;
  p?: string;
  items?: string[];
  email?: string;
  privacyLink?: boolean;
}

export interface LegalSection {
  id: string;
  h: string;
  blocks: LegalBlock[];
}

export interface TocEntry {
  href: string;
  label: string;
}

export function buildToc(sections: LegalSection[], contactLabel: string): TocEntry[] {
  const toc = sections.map((s) => ({ href: `#${s.id}`, label: s.h }));
  toc.push({ href: '#contact', label: contactLabel });
  return toc;
}
