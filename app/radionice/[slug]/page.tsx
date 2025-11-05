import { getRadionicaBySlug } from "@/lib/sanity.queries";
import Body from "./components/Body";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const radionica = await getRadionicaBySlug(slug);

  if (!radionica) {
    return {
      title: "Radionica nije pronađena",
      description: "Tražena radionica ne postoji.",
    };
  }

  return {
    title: radionica.naslov || "Radionica",
    description:
      radionica.opis ||
      `Rezervirajte radionicu ${radionica.naslov} u Tipsy Muse studiju. ${radionica.kategorija} radionica u Zagrebu.`,
    keywords: [
      radionica.kategorija?.toLowerCase() || "",
      "wine & paint",
      "radionice zagreb",
      radionica.naslov?.toLowerCase() || "",
      "slikanje uz vino",
    ],
    openGraph: {
      title: `${radionica.naslov} | Tipsy Muse`,
      description:
        radionica.opis ||
        `Rezervirajte radionicu ${radionica.naslov} u Tipsy Muse studiju.`,
      url: `https://tipsymuse.hr/radionice/${slug}`,
      images: radionica.image?.asset?.url
        ? [
            {
              url: radionica.image.asset.url,
              width: 1200,
              height: 630,
              alt: radionica.naslov || "Radionica",
            },
          ]
        : [],
    },
    alternates: {
      canonical: `https://tipsymuse.hr/radionice/${slug}`,
    },
  };
}

export default async function RadionicaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const radionica = await getRadionicaBySlug(slug);

  const jsonLd = radionica
    ? {
        "@context": "https://schema.org",
        "@type": "Event",
        name: radionica.naslov,
        description: radionica.opis,
        startDate: radionica.datum
          ? `${radionica.datum}T${radionica.vrijeme || "18:00"}:00`
          : undefined,
        location: {
          "@type": "Place",
          name: "Tipsy Muse",
          address: {
            "@type": "PostalAddress",
            streetAddress: radionica.lokacija || "Maksimirska 141A",
            addressLocality: "Zagreb",
            addressCountry: "HR",
          },
        },
        offers: {
          "@type": "Offer",
          price: radionica.cijena,
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
        },
        image: radionica.image?.asset?.url,
        organizer: {
          "@type": "Organization",
          name: "Tipsy Muse",
          url: "https://tipsymuse.hr",
        },
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <Body radionica={radionica} />
    </>
  );
}
