import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radionice",
  description:
    "Pregledajte sve naše wine & paint radionice u Zagrebu. Rezervirajte radionicu slikanja uz vino, koktele ili prosecca. Filtrirate po kategoriji, datumu i cijeni. Savršeno za druženje, team building i kreativno izražavanje.",
  keywords: [
    "wine & paint radionice",
    "radionice slikanja zagreb",
    "wine paint radionice",
    "rezervacija radionica",
    "paint and sip zagreb",
    "kreativne radionice zagreb",
    "wine art radionice",
    "slikanje uz vino",
  ],
  openGraph: {
    title: "Radionice | Tipsy Muse",
    description:
      "Pregledajte i rezervirajte wine & paint radionice u Zagrebu. Slikanje uz čašu vina u opuštenoj atmosferi.",
    url: "https://tipsymuse.hr/radionice",
  },
  alternates: {
    canonical: "https://tipsymuse.hr/radionice",
  },
};

export default function RadioniceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

