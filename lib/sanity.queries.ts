import { client } from "./sanity";

// Helper function to get image URL from Sanity
// For better image handling (resizing, cropping, etc.), install @sanity/image-url:
// npm install @sanity/image-url
export function getSanityImageUrl(image: any): string {
  if (!image || !image.asset) return "";

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

  // Sanity image reference format: image-{id}-{width}x{height}-{format}
  const ref = image.asset._ref || image.asset._id;

  if (typeof ref === "string" && ref.startsWith("image-")) {
    // Extract parts from reference
    const parts = ref.replace("image-", "").split("-");
    const id = parts[0];
    const dimensions = parts[1]; // format: widthxheight
    const format = parts[2] || "jpg";

    return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}`;
  }

  // Fallback: if asset has url property (from API response)
  if (image.asset.url) {
    return image.asset.url;
  }

  return "";
}

// GROQ queries for fetching data
export const queries = {
  // Fetch all radionice (workshops)
  getAllRadionice: `*[_type == "radionice"] | order(datum asc) {
    _id,
    naslov,
    slug,
    "kategorija": coalesce(kategorija->ime, ""),
    opis,
    datum,
    vrijeme,
    kapacitet,
    rezervirano,
    cijena,
    opisRada,
    ukljuceno,
    image {
      asset-> {
        _id,
        _ref,
        url
      }
    },
    lokacija,
    trajanje,
    publishedAt
  }`,

  // Fetch a single radionica by slug
  getRadionicaBySlug: `*[_type == "radionice" && slug.current == $slug][0] {
    _id,
    naslov,
    slug,
    "kategorija": coalesce(kategorija->ime, ""),
    opis,
    datum,
    vrijeme,
    kapacitet,
    rezervirano,
    cijena,
    opisRada,
    ukljuceno,
    image {
      asset-> {
        _id,
        _ref,
        url
      }
    },
    lokacija,
    trajanje,
    publishedAt
  }`,

  // Fetch all kategorije (categories)
  getAllKategorije: `*[_type == "kategorijaRadionica"] | order(ime asc) {
    _id,
    ime
  }`,

  // Fetch all wine partners
  getAllWinePartners: `*[_type == "vinski-partneri"] | order(ime asc) {
    _id,
    ime,
    opis,
    image {
      asset-> {
        _id,
        _ref,
        url
      }
    },
    url
  }`,

  // Fetch all festival partners
  getAllFestivalPartners: `*[_type == "festivalski-partneri"] | order(ime asc) {
    _id,
    ime,
    opis,
    image {
      asset-> {
        _id,
        _ref,
        url
      }
    },
    url
  }`,
};

// Helper functions to fetch data
export async function getAllRadionice() {
  return await client.fetch(queries.getAllRadionice);
}

export async function getRadionicaBySlug(slug: string) {
  return await client.fetch(queries.getRadionicaBySlug, { slug });
}

export async function getAllKategorije() {
  return await client.fetch(queries.getAllKategorije);
}

export async function getAllWinePartners() {
  return await client.fetch(queries.getAllWinePartners);
}

export async function getAllFestivalPartners() {
  return await client.fetch(queries.getAllFestivalPartners);
}
