export type Category = "fraternity" | "sorority" | "coed" | "apparel";

export interface Product {
  slug: string;
  name: string;
  org: string;
  /** Greek-letter monogram for the org (e.g. "ΛΘΑ") */
  letters: string;
  category: Category;
  price: number;
  images: string[];
  /** Live checkout URL on the Shopify store */
  url: string;
}

export const products: Product[] = [
  {
    slug: "alpha-kappa-psi-lanyard",
    letters: "ΑΚΨ",
    name: "Alpha Kappa Psi Woven Lanyard",
    org: "Alpha Kappa Psi",
    category: "coed",
    price: 18,
    images: [
      "/products/alpha-kappa-psi-1.png",
      "/products/alpha-kappa-psi-2.png",
    ],
    url: "https://shearthreads.com/products/alpha-kappa-psi-lanyard",
  },
  {
    slug: "alpha-psi-lambda-lanyard",
    letters: "ΑΨΛ",
    name: "Alpha Psi Lambda Woven Lanyard",
    org: "Alpha Psi Lambda National, Inc.",
    category: "coed",
    price: 18,
    images: [
      "/products/alpha-psi-lambda-1-v2.png",
      "/products/alpha-psi-lambda-2-v2.png",
    ],
    url: "https://shearthreads.com/products/alpha-psi-lambda-national-inc-woven-lanyards",
  },
  {
    slug: "beta-kappa-sigma-lanyard",
    letters: "ΒΚΣ",
    name: "Beta Kappa Sigma Woven Lanyard",
    org: "Beta Kappa Sigma",
    category: "sorority",
    price: 18,
    images: [
      "/products/beta-kappa-sigma-1-v2.png",
      "/products/beta-kappa-sigma-2-v2.png",
    ],
    url: "https://shearthreads.com/products/beta-kappa-sigma-woven-lanyards",
  },
  {
    slug: "chi-upsilon-sigma-lanyard",
    letters: "ΧΥΣ",
    name: "Chi Upsilon Sigma Woven Lanyard",
    org: "Chi Upsilon Sigma",
    category: "sorority",
    price: 18,
    images: [
      "/products/chi-upsilon-sigma-1.png",
      "/products/chi-upsilon-sigma-2.png",
    ],
    url: "https://shearthreads.com/products/chi-upsilon-sigma-lanyard",
  },
  {
    slug: "sigma-iota-alpha-lanyard",
    letters: "ΣΙΑ",
    name: "Sigma Iota Alpha Woven Lanyard",
    org: "Hermandad de Sigma Iota Alpha, Inc.",
    category: "sorority",
    price: 22,
    images: [
      "/products/sigma-iota-alpha-1.png",
      "/products/sigma-iota-alpha-2.png",
    ],
    url: "https://shearthreads.com/products/hermandad-de-sigma-iota-alpha-inc-woven-lanyard",
  },
  {
    slug: "lambda-sigma-upsilon-lanyard",
    letters: "ΛΣΥ",
    name: "Lambda Sigma Upsilon Woven Lanyard",
    org: "Lambda Sigma Upsilon",
    category: "fraternity",
    price: 18,
    images: [
      "/products/lambda-sigma-upsilon-1-v2.png",
      "/products/lambda-sigma-upsilon-2-v2.jpg",
    ],
    url: "https://shearthreads.com/products/lamba-sigma-upsilon-woven-lanyard",
  },
  {
    slug: "lambda-pi-upsilon-lanyard",
    letters: "ΛΠΥ",
    name: "Lambda Pi Upsilon Woven Lanyard",
    org: "Lambda Pi Upsilon Sorority",
    category: "sorority",
    price: 18,
    images: [
      "/products/lambda-pi-upsilon-1-v2.png",
      "/products/lambda-pi-upsilon-2-v2.png",
    ],
    url: "https://shearthreads.com/products/lambda-pi-upsilon-woven-lanyards",
  },
  {
    slug: "lambda-theta-alpha-lanyard",
    letters: "ΛΘΑ",
    name: "Lambda Theta Alpha Woven Lanyard",
    org: "Lambda Theta Alpha",
    category: "sorority",
    price: 18,
    images: [
      "/products/lambda-theta-alpha-1-v2.png",
      "/products/lambda-theta-alpha-2-v2.png",
    ],
    url: "https://shearthreads.com/products/lta-woven-lanyard",
  },
  {
    slug: "lambda-upsilon-lambda-lanyard",
    letters: "ΛΥΛ",
    name: "Lambda Upsilon Lambda Woven Lanyard",
    org: "Lambda Upsilon Lambda",
    category: "fraternity",
    price: 18,
    images: [
      "/products/lambda-upsilon-lambda-1-v2.png",
      "/products/lambda-upsilon-lambda-2-v2.png",
    ],
    url: "https://shearthreads.com/products/lambda-upsilon-lambda-woven-lanyard",
  },
  {
    slug: "mothers-day-crew-neck",
    letters: "ST",
    name: "Mother's Day Crew Neck",
    org: "Limited Drop",
    category: "apparel",
    price: 39,
    images: [
      "/products/mothers-day-crew-neck-1-v2.png",
      "/products/mothers-day-crew-neck-2-v2.png",
    ],
    url: "https://shearthreads.com/products/mothers-day-crew-neck",
  },
  {
    slug: "mu-sigma-upsilon-lanyard",
    letters: "ΜΣΥ",
    name: "Mu Sigma Upsilon Woven Lanyard",
    org: "Mu Sigma Upsilon",
    category: "sorority",
    price: 18,
    images: [
      "/products/mu-sigma-upsilon-1-v2.png",
      "/products/mu-sigma-upsilon-2-v2.png",
    ],
    url: "https://shearthreads.com/products/lamba-sigma-upsilon-woven-lanyard-copy",
  },
  {
    slug: "omega-phi-chi-lanyard",
    letters: "ΩΦΧ",
    name: "Omega Phi Chi Woven Lanyard",
    org: "Omega Phi Chi",
    category: "sorority",
    price: 18,
    images: [
      "/products/omega-phi-chi-1-v2.png",
      "/products/omega-phi-chi-2-v2.jpg",
    ],
    url: "https://shearthreads.com/products/omega-phi-chi-woven-lanyard",
  },
  {
    slug: "sigma-beta-rho-lanyard",
    letters: "ΣΒΡ",
    name: "Sigma Beta Rho Woven Lanyard",
    org: "Sigma Beta Rho",
    category: "fraternity",
    price: 18,
    images: [
      "/products/sigma-beta-rho-1-v3.png",
      "/products/sigma-beta-rho-2-v2.png",
    ],
    url: "https://shearthreads.com/products/sigma-beta-rho-woven-lanyard",
  },
  {
    slug: "sigma-lambda-beta-lanyard",
    letters: "ΣΛΒ",
    name: "Sigma Lambda Beta Woven Lanyard",
    org: "Sigma Lambda Beta",
    category: "fraternity",
    price: 18,
    images: [
      "/products/sigma-lambda-beta-1-v2.png",
      "/products/sigma-lambda-beta-2.jpg",
    ],
    url: "https://shearthreads.com/products/sigma-lambda-beta-woven-lanyard",
  },
];

export const categoryLabels: Record<Category, string> = {
  fraternity: "Fraternities",
  sorority: "Sororities",
  coed: "Co-ed Orgs",
  apparel: "Apparel",
};

export const INSTAGRAM_URL = "https://www.instagram.com/shearthreads_";
export const STORE_URL = "https://shearthreads.com";
export const CONTACT_URL = "https://shearthreads.com/pages/contact";
