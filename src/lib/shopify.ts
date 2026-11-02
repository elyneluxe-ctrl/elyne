export interface ProductVariant {
  id: string;
  title: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  availableForSale: boolean;
}

export interface ProductImage {
  url: string;
  altText?: string;
  width?: number;
  height?: number;
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  compareAtPrice?: {
    amount: string;
    currencyCode: string;
  };
  featuredImage: ProductImage;
  images: ProductImage[];
  variants: ProductVariant[];
  availableForSale: boolean;
  category?: 'men' | 'boys' | 'bestsellers' | 'kids';
  availableSizes?: string[];
}

export interface CartLine {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    product: {
      title: string;
      handle: string;
      featuredImage: ProductImage;
    };
    price: {
      amount: string;
      currencyCode: string;
    };
  };
}

export interface Cart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  lines: CartLine[];
  cost: {
    subtotalAmount: {
      amount: string;
      currencyCode: string;
    };
    totalAmount: {
      amount: string;
      currencyCode: string;
    };
  };
}

// Default luxury Men's Kandura collection matching the homepage reference
export const MOCK_PRODUCTS: Product[] = [
  {
    id: "elyne-prod-01",
    handle: "classic-white-kandura",
    title: "Classic White Kandura",
    description: "Tailored to immaculate standards from crisp breathable Japanese crepe fabric. Features traditional Emirati single-stitch placket and signature understated drape.",
    price: {
      amount: "599",
      currencyCode: "AED"
    },
    featuredImage: {
      url: "/images/product-classic-white.webp",
      altText: "Classic White Kandura - Emirati Menswear",
      width: 600,
      height: 750
    },
    images: [
      { url: "/images/product-classic-white.webp", altText: "Classic White Kandura - Front Studio View" },
      { url: "/images/story-philosophy-collar-hq.jpg", altText: "Collar & Single-Needle Precision Stitching Detail" },
      { url: "/images/craft-fabric.webp", altText: "Japanese Toyobo Crepe Textile Weave" },
      { url: "/images/story-hero-model-hq.jpg", altText: "Editorial Campaign Drape & Silhouette" }
    ],
    availableForSale: true,
    category: "bestsellers",
    availableSizes: ["52", "54", "56", "58", "60", "62"],
    variants: [
      { id: "var-cw-52", title: "Size 52", price: { amount: "599", currencyCode: "AED" }, availableForSale: true },
      { id: "var-cw-54", title: "Size 54", price: { amount: "599", currencyCode: "AED" }, availableForSale: true },
      { id: "var-cw-56", title: "Size 56", price: { amount: "599", currencyCode: "AED" }, availableForSale: true },
      { id: "var-cw-58", title: "Size 58", price: { amount: "599", currencyCode: "AED" }, availableForSale: true },
      { id: "var-cw-60", title: "Size 60", price: { amount: "599", currencyCode: "AED" }, availableForSale: true },
      { id: "var-cw-62", title: "Size 62", price: { amount: "599", currencyCode: "AED" }, availableForSale: true }
    ]
  },
  {
    id: "elyne-prod-02",
    handle: "sand-beige-kandura",
    title: "Sand Beige Kandura",
    description: "Evoking the warm tones of the Arabian desert dunes. Crafted from lightweight premium textured poly-wool blend with hand-finished collar detailing.",
    price: {
      amount: "649",
      currencyCode: "AED"
    },
    featuredImage: {
      url: "/images/product-sand-beige.webp",
      altText: "Sand Beige Kandura - Emirati Menswear",
      width: 600,
      height: 750
    },
    images: [
      { url: "/images/product-sand-beige.webp", altText: "Sand Beige Kandura - Front View" },
      { url: "/images/kids-beige-collar-detail.jpg", altText: "Desert Sand Braided Tassel & Collar Detail" },
      { url: "/images/campaign-banner-hq.jpg", altText: "Desert Dune Architectural Lighting" }
    ],
    availableForSale: true,
    category: "bestsellers",
    availableSizes: ["52", "54", "56", "58", "60", "62"],
    variants: [
      { id: "var-sb-52", title: "Size 52", price: { amount: "649", currencyCode: "AED" }, availableForSale: true },
      { id: "var-sb-54", title: "Size 54", price: { amount: "649", currencyCode: "AED" }, availableForSale: true },
      { id: "var-sb-56", title: "Size 56", price: { amount: "649", currencyCode: "AED" }, availableForSale: true },
      { id: "var-sb-58", title: "Size 58", price: { amount: "649", currencyCode: "AED" }, availableForSale: true },
      { id: "var-sb-60", title: "Size 60", price: { amount: "649", currencyCode: "AED" }, availableForSale: true },
      { id: "var-sb-62", title: "Size 62", price: { amount: "649", currencyCode: "AED" }, availableForSale: true }
    ]
  },
  {
    id: "elyne-prod-03",
    handle: "forest-green-kandura",
    title: "Forest Green Kandura",
    description: "The signature ELYNE LUXE hue. A deep, distinguished forest green woven from high-twist luxury Japanese yarns with immaculate French seam finishing.",
    price: {
      amount: "649",
      currencyCode: "AED"
    },
    featuredImage: {
      url: "/images/product-forest-green.webp",
      altText: "Forest Green Kandura - Signature ELYNE LUXE Collection",
      width: 600,
      height: 750
    },
    images: [
      { url: "/images/product-forest-green.webp", altText: "Forest Green Kandura - Front View" },
      { url: "/images/kids-forest-green.jpg", altText: "Signature Forest Green Hue in Natural Light" },
      { url: "/images/craft-stitching.webp", altText: "French Seam Craftsmanship Detail" }
    ],
    availableForSale: true,
    category: "bestsellers",
    availableSizes: ["52", "54", "56", "58", "60", "62"],
    variants: [
      { id: "var-fg-52", title: "Size 52", price: { amount: "649", currencyCode: "AED" }, availableForSale: true },
      { id: "var-fg-54", title: "Size 54", price: { amount: "649", currencyCode: "AED" }, availableForSale: true },
      { id: "var-fg-56", title: "Size 56", price: { amount: "649", currencyCode: "AED" }, availableForSale: true },
      { id: "var-fg-58", title: "Size 58", price: { amount: "649", currencyCode: "AED" }, availableForSale: true },
      { id: "var-fg-60", title: "Size 60", price: { amount: "649", currencyCode: "AED" }, availableForSale: true },
      { id: "var-fg-62", title: "Size 62", price: { amount: "649", currencyCode: "AED" }, availableForSale: true }
    ]
  },
  {
    id: "elyne-prod-04",
    handle: "premium-white-kandura",
    title: "Premium White Kandura",
    description: "The pinnacle of Emirati bespoke elegance. Ultra-fine Japanese twill weave, subtle hand-pressed cuffs, and mother-of-pearl buttons.",
    price: {
      amount: "699",
      currencyCode: "AED"
    },
    featuredImage: {
      url: "/images/product-premium-white.webp",
      altText: "Premium White Kandura - Bespoke Craftsmanship",
      width: 600,
      height: 750
    },
    images: [
      { url: "/images/product-premium-white.webp", altText: "Premium White Kandura Front View" },
      { url: "/images/story-philosophy-collar-hq.jpg", altText: "Master Tailored Stand Collar Detail" },
      { url: "/images/craft-cuff.webp", altText: "Mother-of-Pearl Cuff Finish" },
      { url: "/images/craft-fabric.webp", altText: "Toyobo Twill Texture" }
    ],
    availableForSale: true,
    category: "bestsellers",
    availableSizes: ["52", "54", "56", "58", "60", "62"],
    variants: [
      { id: "var-pw-52", title: "Size 52", price: { amount: "699", currencyCode: "AED" }, availableForSale: true },
      { id: "var-pw-54", title: "Size 54", price: { amount: "699", currencyCode: "AED" }, availableForSale: true },
      { id: "var-pw-56", title: "Size 56", price: { amount: "699", currencyCode: "AED" }, availableForSale: true },
      { id: "var-pw-58", title: "Size 58", price: { amount: "699", currencyCode: "AED" }, availableForSale: true },
      { id: "var-pw-60", title: "Size 60", price: { amount: "699", currencyCode: "AED" }, availableForSale: true },
      { id: "var-pw-62", title: "Size 62", price: { amount: "699", currencyCode: "AED" }, availableForSale: true }
    ]
  }
];

// Dedicated Kids Thobes Collection matching Shopify 'kids-thobes' collection
export const MOCK_KIDS_PRODUCTS: Product[] = [
  {
    id: "elyne-kids-01",
    handle: "junior-classic-white-kandura",
    title: "Junior Classic White Kandura",
    description: "Designed for young gentlemen with the same artisanal craftsmanship as our adult bespoke thobes. Breathable Japanese cotton-crepe with reinforced seams for easy movement and lasting elegance.",
    price: {
      amount: "399",
      currencyCode: "AED"
    },
    featuredImage: {
      url: "/images/kids-classic-white.jpg",
      altText: "Junior Classic White Kandura for Boys",
      width: 600,
      height: 800
    },
    images: [
      { url: "/images/kids-classic-white.jpg", altText: "Junior Classic White Kandura - Front Full Portrait" },
      { url: "/images/kids-white-collar-detail.jpg", altText: "Hand-Braided Tarboosh Tassel & Collar Placket" },
      { url: "/images/kids-white-side-lifestyle.jpg", altText: "Architectural Boutique Lifestyle Angle" },
      { url: "/images/kids-white-fabric-texture.jpg", altText: "Ultra-Soft Japanese Toyobo Weave & Hemming" }
    ],
    availableForSale: true,
    category: "kids",
    availableSizes: ["34", "36", "38", "40", "42", "44", "46", "48"],
    variants: [
      { id: "var-kw-34", title: "Size 34", price: { amount: "399", currencyCode: "AED" }, availableForSale: true },
      { id: "var-kw-36", title: "Size 36", price: { amount: "399", currencyCode: "AED" }, availableForSale: true },
      { id: "var-kw-38", title: "Size 38", price: { amount: "399", currencyCode: "AED" }, availableForSale: true },
      { id: "var-kw-40", title: "Size 40", price: { amount: "399", currencyCode: "AED" }, availableForSale: true },
      { id: "var-kw-42", title: "Size 42", price: { amount: "399", currencyCode: "AED" }, availableForSale: true },
      { id: "var-kw-44", title: "Size 44", price: { amount: "399", currencyCode: "AED" }, availableForSale: true },
      { id: "var-kw-46", title: "Size 46", price: { amount: "399", currencyCode: "AED" }, availableForSale: true },
      { id: "var-kw-48", title: "Size 48", price: { amount: "399", currencyCode: "AED" }, availableForSale: true }
    ]
  },
  {
    id: "elyne-kids-02",
    handle: "junior-sand-beige-kandura",
    title: "Junior Sand Beige Kandura",
    description: "A refined desert sand tone tailored for everyday prestige and festive occasions. Soft touch finish, hand-pressed collar, and signature tassel detailing.",
    price: {
      amount: "449",
      currencyCode: "AED"
    },
    featuredImage: {
      url: "/images/kids-sand-beige.jpg",
      altText: "Junior Sand Beige Kandura for Boys",
      width: 600,
      height: 800
    },
    images: [
      { url: "/images/kids-sand-beige.jpg", altText: "Junior Sand Beige Kandura - Front Full Portrait" },
      { url: "/images/kids-beige-collar-detail.jpg", altText: "Desert Sand Braided Tarboosh & Collar Placket" },
      { url: "/images/collection-boys-luxury.jpg", altText: "Boys Luxury Collection Lifestyle" }
    ],
    availableForSale: true,
    category: "kids",
    availableSizes: ["34", "36", "38", "40", "42", "44", "46", "48"],
    variants: [
      { id: "var-kb-34", title: "Size 34", price: { amount: "449", currencyCode: "AED" }, availableForSale: true },
      { id: "var-kb-36", title: "Size 36", price: { amount: "449", currencyCode: "AED" }, availableForSale: true },
      { id: "var-kb-38", title: "Size 38", price: { amount: "449", currencyCode: "AED" }, availableForSale: true },
      { id: "var-kb-40", title: "Size 40", price: { amount: "449", currencyCode: "AED" }, availableForSale: true },
      { id: "var-kb-42", title: "Size 42", price: { amount: "449", currencyCode: "AED" }, availableForSale: true },
      { id: "var-kb-44", title: "Size 44", price: { amount: "449", currencyCode: "AED" }, availableForSale: true },
      { id: "var-kb-46", title: "Size 46", price: { amount: "449", currencyCode: "AED" }, availableForSale: true },
      { id: "var-kb-48", title: "Size 48", price: { amount: "449", currencyCode: "AED" }, availableForSale: true }
    ]
  },
  {
    id: "elyne-kids-03",
    handle: "junior-forest-green-kandura",
    title: "Junior Forest Green Kandura",
    description: "ELYNE LUXE's iconic forest green hue, scaled for the next generation. Superior drape, wrinkle-resistant luxury weave, and elegant minimalist finishing.",
    price: {
      amount: "449",
      currencyCode: "AED"
    },
    featuredImage: {
      url: "/images/kids-forest-green.jpg",
      altText: "Junior Forest Green Kandura for Boys",
      width: 600,
      height: 800
    },
    images: [
      { url: "/images/kids-forest-green.jpg", altText: "Junior Forest Green Kandura - Front Full Portrait" },
      { url: "/images/craft-stitching.webp", altText: "French Seam Craftsmanship Detail" },
      { url: "/images/craft-fabric.webp", altText: "Silky Japanese Breathable Weave" }
    ],
    availableForSale: true,
    category: "kids",
    availableSizes: ["34", "36", "38", "40", "42", "44", "46", "48"],
    variants: [
      { id: "var-kg-34", title: "Size 34", price: { amount: "449", currencyCode: "AED" }, availableForSale: true },
      { id: "var-kg-36", title: "Size 36", price: { amount: "449", currencyCode: "AED" }, availableForSale: true },
      { id: "var-kg-38", title: "Size 38", price: { amount: "449", currencyCode: "AED" }, availableForSale: true },
      { id: "var-kg-40", title: "Size 40", price: { amount: "449", currencyCode: "AED" }, availableForSale: true },
      { id: "var-kg-42", title: "Size 42", price: { amount: "449", currencyCode: "AED" }, availableForSale: true },
      { id: "var-kg-44", title: "Size 44", price: { amount: "449", currencyCode: "AED" }, availableForSale: true },
      { id: "var-kg-46", title: "Size 46", price: { amount: "449", currencyCode: "AED" }, availableForSale: true },
      { id: "var-kg-48", title: "Size 48", price: { amount: "449", currencyCode: "AED" }, availableForSale: true }
    ]
  }
];

const SHOPIFY_GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
  ? `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`
  : "";

const SHOPIFY_ACCESS_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || "";

/**
 * Execute a GraphQL query against the Shopify Storefront API
 */
export async function shopifyFetch<T>({
  query,
  variables
}: {
  query: string;
  variables?: Record<string, unknown>;
}): Promise<T | null> {
  if (!SHOPIFY_GRAPHQL_ENDPOINT || !SHOPIFY_ACCESS_TOKEN) {
    return null;
  }

  try {
    const res = await fetch(SHOPIFY_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_ACCESS_TOKEN
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      console.warn(`Shopify fetch failed: ${res.statusText}`);
      return null;
    }

    const json = await res.json();
    if (json.errors) {
      console.warn("Shopify GraphQL errors:", json.errors);
      return null;
    }

    return json.data as T;
  } catch (error) {
    console.warn("Shopify request error:", error);
    return null;
  }
}

/**
 * Fetch products dynamically from Shopify collection by handle with fallback
 */
export async function getCollectionProducts(collectionHandle: string): Promise<Product[]> {
  const query = `
    query GetCollectionProducts($handle: String!) {
      collection(handle: $handle) {
        id
        title
        handle
        products(first: 12) {
          edges {
            node {
              id
              handle
              title
              description
              availableForSale
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 2) {
                edges {
                  node {
                    url
                    altText
                    width
                    height
                  }
                }
              }
              variants(first: 12) {
                edges {
                  node {
                    id
                    title
                    availableForSale
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  interface CollectionResponse {
    collection: {
      id: string;
      title: string;
      handle: string;
      products: {
        edges: Array<{
          node: {
            id: string;
            handle: string;
            title: string;
            description: string;
            availableForSale: boolean;
            priceRange: {
              minVariantPrice: {
                amount: string;
                currencyCode: string;
              };
            };
            images: {
              edges: Array<{
                node: {
                  url: string;
                  altText: string;
                  width: number;
                  height: number;
                };
              }>;
            };
            variants: {
              edges: Array<{
                node: {
                  id: string;
                  title: string;
                  availableForSale: boolean;
                  price: {
                    amount: string;
                    currencyCode: string;
                  };
                };
              }>;
            };
          };
        }>;
      };
    } | null;
  }

  const data = await shopifyFetch<CollectionResponse>({
    query,
    variables: { handle: collectionHandle }
  });

  if (data?.collection?.products?.edges && data.collection.products.edges.length > 0) {
    return data.collection.products.edges.map(({ node }) => ({
      id: node.id,
      handle: node.handle,
      title: node.title,
      description: node.description,
      availableForSale: node.availableForSale,
      price: {
        amount: Math.round(parseFloat(node.priceRange.minVariantPrice.amount)).toString(),
        currencyCode: node.priceRange.minVariantPrice.currencyCode || "AED"
      },
      featuredImage: {
        url: node.images.edges[0]?.node.url || "/images/product-classic-white.webp",
        altText: node.images.edges[0]?.node.altText || node.title,
        width: node.images.edges[0]?.node.width || 600,
        height: node.images.edges[0]?.node.height || 750
      },
      images: node.images.edges.map(img => ({
        url: img.node.url,
        altText: img.node.altText
      })),
      variants: node.variants.edges.map(v => ({
        id: v.node.id,
        title: v.node.title,
        availableForSale: v.node.availableForSale,
        price: {
          amount: Math.round(parseFloat(v.node.price.amount)).toString(),
          currencyCode: v.node.price.currencyCode || "AED"
        }
      })),
      availableSizes: node.variants.edges.map(v => v.node.title.replace("Size ", ""))
    }));
  }

  // Fallback routing by collection handle
  if (collectionHandle === "kids-thobes" || collectionHandle === "boys") {
    return MOCK_KIDS_PRODUCTS;
  }

  return MOCK_PRODUCTS;
}

/**
 * Fetch Kids Collection products (for the dedicated Kids homepage section)
 */
export async function getKidsProducts(): Promise<Product[]> {
  return getCollectionProducts("kids-thobes");
}

/**
 * Fetch a single product by handle from Shopify or fallback mock catalog
 */
export async function getProductByHandle(handle: string): Promise<Product | null> {
  const query = `
    query GetProductByHandle($handle: String!) {
      product(handle: $handle) {
        id
        handle
        title
        description
        availableForSale
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 6) {
          edges {
            node {
              url
              altText
              width
              height
            }
          }
        }
        variants(first: 20) {
          edges {
            node {
              id
              title
              availableForSale
              price {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `;

  interface ProductResponse {
    product: {
      id: string;
      handle: string;
      title: string;
      description: string;
      availableForSale: boolean;
      priceRange: {
        minVariantPrice: {
          amount: string;
          currencyCode: string;
        };
      };
      images: {
        edges: Array<{
          node: {
            url: string;
            altText: string;
            width: number;
            height: number;
          };
        }>;
      };
      variants: {
        edges: Array<{
          node: {
            id: string;
            title: string;
            availableForSale: boolean;
            price: {
              amount: string;
              currencyCode: string;
            };
          };
        }>;
      };
    } | null;
  }

  const data = await shopifyFetch<ProductResponse>({
    query,
    variables: { handle }
  });

  if (data?.product) {
    const p = data.product;
    return {
      id: p.id,
      handle: p.handle,
      title: p.title,
      description: p.description,
      availableForSale: p.availableForSale,
      price: {
        amount: Math.round(parseFloat(p.priceRange.minVariantPrice.amount)).toString(),
        currencyCode: p.priceRange.minVariantPrice.currencyCode || "AED"
      },
      featuredImage: {
        url: p.images.edges[0]?.node.url || "/images/product-classic-white.webp",
        altText: p.images.edges[0]?.node.altText || p.title,
        width: p.images.edges[0]?.node.width || 600,
        height: p.images.edges[0]?.node.height || 750
      },
      images: p.images.edges.map(img => ({
        url: img.node.url,
        altText: img.node.altText
      })),
      variants: p.variants.edges.map(v => ({
        id: v.node.id,
        title: v.node.title,
        availableForSale: v.node.availableForSale,
        price: {
          amount: Math.round(parseFloat(v.node.price.amount)).toString(),
          currencyCode: v.node.price.currencyCode || "AED"
        }
      })),
      availableSizes: p.variants.edges.map(v => v.node.title.replace("Size ", ""))
    };
  }

  // Fallback to local mock products
  const allMocks = [...MOCK_PRODUCTS, ...MOCK_KIDS_PRODUCTS];
  const found = allMocks.find(p => p.handle === handle);
  return found || allMocks[0] || null;
}

/**
 * Fetch Best Seller products dynamically from Shopify
 */
export async function getBestSellerProducts(): Promise<Product[]> {
  return getCollectionProducts("best-sellers");
}

/**
 * Cart operations against Shopify Storefront API
 */
export async function createShopifyCart(merchandiseId?: string, quantity: number = 1): Promise<Cart | null> {
  const query = `
    mutation cartCreate($input: CartInput) {
      cartCreate(input: $input) {
        cart {
          id
          checkoutUrl
          totalQuantity
          cost {
            subtotalAmount {
              amount
              currencyCode
            }
            totalAmount {
              amount
              currencyCode
            }
          }
          lines(first: 50) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    price {
                      amount
                      currencyCode
                    }
                    product {
                      title
                      handle
                      featuredImage {
                        url
                        altText
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const variables = merchandiseId
    ? { input: { lines: [{ merchandiseId, quantity }] } }
    : { input: {} };

  interface CreateCartResponse {
    cartCreate: {
      cart: {
        id: string;
        checkoutUrl: string;
        totalQuantity: number;
        cost: {
          subtotalAmount: { amount: string; currencyCode: string };
          totalAmount: { amount: string; currencyCode: string };
        };
        lines: {
          edges: Array<{
            node: CartLine;
          }>;
        };
      };
    };
  }

  const res = await shopifyFetch<CreateCartResponse>({ query, variables });
  if (res?.cartCreate?.cart) {
    const c = res.cartCreate.cart;
    return {
      id: c.id,
      checkoutUrl: c.checkoutUrl,
      totalQuantity: c.totalQuantity,
      cost: c.cost,
      lines: c.lines.edges.map(e => e.node)
    };
  }
  return null;
}
