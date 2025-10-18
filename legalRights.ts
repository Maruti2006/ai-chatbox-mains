export interface LegalRight {
  id: number;
  title: string;
  description: string;
}

export const legalRights: LegalRight[] = [
  {
    id: 1,
    title: "Right to Equality",
    description: "Article 14 of the Constitution of India guarantees equality before the law.",
  },
  {
    id: 2,
    title: "Right to Freedom of Speech",
    description: "Article 19 provides the freedom of speech and expression, subject to reasonable restrictions.",
  },
  // ... add up to 100 rights similarly
];
