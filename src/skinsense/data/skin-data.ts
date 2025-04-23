export interface SkinConcern {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface SkinAnalysisResult {
  concerns: string[];
  tone: "warm" | "cool" | "neutral";
  confidence: number;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  currency: string;
  activeIngredients: string[];
  benefits: string[];
  matchScore: number;
  concerns: string[];
  description: string;
  link: string;
}

export const SKIN_CONCERNS: SkinConcern[] = [
  {
    id: "dryness",
    name: "Dryness",
    description: "Skin that lacks moisture and feels tight or flaky",
    icon: "droplet",
  },
  {
    id: "oiliness",
    name: "Oiliness",
    description:
      "Excess sebum production leading to shine and potential breakouts",
    icon: "droplets",
  },
  {
    id: "acne",
    name: "Acne",
    description: "Inflamed breakouts including pimples, blackheads, and cysts",
    icon: "circle-dot",
  },
  {
    id: "fine-lines",
    name: "Fine Lines",
    description: "Early signs of aging including small wrinkles and creases",
    icon: "minus",
  },
  {
    id: "dark-spots",
    name: "Dark Spots",
    description: "Hyperpigmentation and uneven skin tone",
    icon: "circle",
  },
  {
    id: "redness",
    name: "Redness",
    description: "Inflammation, sensitivity, or rosacea symptoms",
    icon: "heart",
  },
  {
    id: "dullness",
    name: "Dullness",
    description: "Lack of radiance and natural glow",
    icon: "sun",
  },
  {
    id: "large-pores",
    name: "Large Pores",
    description: "Visibly enlarged pores, typically on nose and cheeks",
    icon: "circle-dot",
  },
];

export const MOCK_ANALYSIS_RESULT: SkinAnalysisResult = {
  concerns: ["dryness", "fine-lines"],
  tone: "neutral",
  confidence: 0.92,
};

export const RECOMMENDED_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Hydra Boost Serum",
    brand: "DermaCare",
    image: "https://picsum.photos/seed/hydra1/300/300",
    price: 48.99,
    currency: "USD",
    activeIngredients: ["Hyaluronic Acid", "Ceramides", "Peptides"],
    benefits: [
      "Deep hydration",
      "Plumps fine lines",
      "Strengthens skin barrier",
    ],

    matchScore: 0.95,
    concerns: ["dryness", "fine-lines"],
    description:
      "This intensive hydrating serum delivers multi-level moisture while helping to reduce the appearance of fine lines.",
    link: "/product/p1",
  },
  {
    id: "p2",
    name: "Retinol Renewal Night Cream",
    brand: "AgeLess",
    image: "https://picsum.photos/seed/retinol2/300/300",
    price: 65.0,
    currency: "USD",
    activeIngredients: ["Retinol", "Niacinamide", "Shea Butter"],
    benefits: [
      "Reduces fine lines",
      "Improves skin texture",
      "Hydrates while you sleep",
    ],

    matchScore: 0.89,
    concerns: ["fine-lines", "dryness", "dullness"],
    description:
      "This gentle yet effective retinol formula works overnight to smooth fine lines while providing essential moisture.",
    link: "/product/p2",
  },
  {
    id: "p3",
    name: "Moisture Lock Day Cream",
    brand: "HydraFresh",
    image: "https://picsum.photos/seed/moisture3/300/300",
    price: 38.5,
    currency: "USD",
    activeIngredients: ["Squalane", "Glycerin", "Vitamin E"],
    benefits: [
      "All-day hydration",
      "Protects against environmental damage",
      "Non-greasy formula",
    ],

    matchScore: 0.87,
    concerns: ["dryness"],
    description:
      "A lightweight but deeply hydrating day cream that keeps skin moisturized for up to 24 hours.",
    link: "/product/p3",
  },
  {
    id: "p4",
    name: "Peptide Firming Mask",
    brand: "SkinScience",
    image: "https://picsum.photos/seed/peptide4/300/300",
    price: 55.0,
    currency: "USD",
    activeIngredients: ["Collagen Peptides", "Adenosine", "Hyaluronic Acid"],
    benefits: [
      "Firms skin",
      "Reduces appearance of wrinkles",
      "Intense hydration",
    ],

    matchScore: 0.82,
    concerns: ["fine-lines", "dryness"],
    description:
      "This weekly treatment mask uses advanced peptide technology to visibly firm skin and reduce the appearance of fine lines.",
    link: "/product/p4",
  },
  {
    id: "p5",
    name: "Hydrating Facial Mist",
    brand: "DermaCare",
    image: "https://picsum.photos/seed/mist5/300/300",
    price: 28.0,
    currency: "USD",
    activeIngredients: ["Rose Water", "Glycerin", "Aloe Vera"],
    benefits: [
      "Instant hydration",
      "Refreshes throughout the day",
      "Sets makeup",
    ],

    matchScore: 0.78,
    concerns: ["dryness", "dullness"],
    description:
      "A refreshing facial mist that can be used throughout the day to boost hydration and revitalize tired skin.",
    link: "/product/p5",
  },
];
