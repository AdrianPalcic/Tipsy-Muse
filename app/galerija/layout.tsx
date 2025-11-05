import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerija",
  description:
    "Pogledajte galeriju fotografija iz naših wine & paint radionica u Tipsy Muse studiju. Inspirirajte se radovima sudionika i atmosferom naših kreativnih radionica u Zagrebu.",
  keywords: [
    "galerija tipsy muse",
    "fotografije radionica",
    "wine paint galerija",
    "slikanje uz vino fotografije",
    "kreativne radionice galerija",
  ],
  openGraph: {
    title: "Galerija | Tipsy Muse",
    description:
      "Pogledajte galeriju fotografija iz naših wine & paint radionica u Zagrebu.",
    url: "https://tipsymuse.hr/galerija",
  },
  alternates: {
    canonical: "https://tipsymuse.hr/galerija",
  },
};

export default function GalerijaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

