import { Mail, MapPin, Phone } from "lucide-react";

export const links = [
  {
    text: "O nama",
    slug: "/onama",
  },
  {
    text: "Radionice",
    slug: "/radionice",
  },
  {
    text: "Galerija",
    slug: "/galerija",
  },
  {
    text: "Kontaktiraj nas",
    slug: "/kontakt",
  },
];

export const kategorije = [
  {
    name: "Wine & Paint",
    description:
      "Na ovim opuštenim radionicama spajamo umjetnost i zabavu! Uz čašu vina i smijeh u dobrom društvu, vodimo vas korak po korak kroz proces slikanja dok stvarate vlastito umjetničko djelo — bez ikakvog prethodnog iskustva.",
    img: "/glass.png",
  },
  {
    name: "Sip & Sparkle",
    description:
      "Na ovim opuštenim radionicama spajamo umjetnost i zabavu! Uz čašu vina i smijeh u dobrom društvu, vodimo vas korak po korak kroz proces slikanja dok stvarate vlastito umjetničko djelo — bez ikakvog prethodnog iskustva.",
    img: "/note.png",
  },
  {
    name: "Cocktails & Paint",
    description:
      "Na ovim opuštenim radionicama spajamo umjetnost i zabavu! Uz čašu vina i smijeh u dobrom društvu, vodimo vas korak po korak kroz proces slikanja dok stvarate vlastito umjetničko djelo — bez ikakvog prethodnog iskustva.",
    img: "/paint.png",
  },
];

export const months = [
  "Siječanj",
  "Veljača",
  "Ožujak",
  "Travanj",
  "Svibanj",
  "Lipanj",
  "Srpanj",
  "Kolovoz",
  "Rujan",
  "Listopad",
  "Studeni",
  "Prosinac",
];

export const howWeWork = [
  {
    id: 1,
    text: "Odaberi",
    description:
      "Ova sekcija jednostavno prikazuje cijeli proces — od odabira radionice do sudjelovanja.",
  },
  {
    id: 2,
    text: "Rezerviraj",
    description:
      "Ova sekcija jednostavno prikazuje cijeli proces — od odabira radionice do sudjelovanja.",
  },
  {
    id: 3,
    text: "Dođi!",
    description:
      "Ova sekcija jednostavno prikazuje cijeli proces — od odabira radionice do sudjelovanja.",
  },
];

export const screenshots = [
  "/screenshot_0006s.jpg",
  "/screenshot_0008s.jpg",
  "/screenshot_0010s.jpg",
  "/screenshot_0012s.jpg",
  "/screenshot_0014s.jpg",
  "/screenshot_0016s.jpg",
  "/screenshot_0018s.jpg",
  "/screenshot_0020s.jpg",
  "/screenshot_0022s.jpg",
  "/screenshot_0026s.jpg",
  "/screenshot_0028s.jpg",
  "/screenshot_0030s.jpg",
  "/screenshot_0032s.jpg",
  "/screenshot_0034s.jpg",
  "/screenshot_0036s.jpg",
  "/screenshot_0038s.jpg",
  "/screenshot_0040s.jpg",
  "/screenshot_0042s.jpg",
  "/screenshot_0044s.jpg",
  "/screenshot_0046s.jpg",
  "/screenshot_0048s.jpg",
  "/screenshot_0050s.jpg",
  "/screenshot_0052s.jpg",
  "/screenshot_0054s.jpg",
];

export const info = [
  {
    icon: <MapPin color="#00ba95" size={40} />,
    label: "Adresa",
    value: "Maksimirska 141A",
  },
  {
    icon: <Phone color="#00ba95" size={40} />,
    label: "Telefon",
    value: "+385 XX XXX XXXX",
  },
  {
    icon: <Mail color="#00ba95" size={40} />,
    label: "Email",
    value: "tipsymusezagreb@gmail.com",
  },
];

export const stats = [
  {
    number: "5+",
    text: "Godina Iskustva",
  },
  {
    number: "1000+",
    text: "Zadovoljnih Umjetnika",
  },
  {
    number: "200+",
    text: "Održanih Radionica",
  },
  {
    number: "15+",
    text: "Različitih Tehnika",
  },
];

export const radioniceStats = [
  {
    img: "/paint.png",
    title: "Kreativnost Nema Pravila",
    description:
      "Nema pritiska ni ocjenjivanja — sve je u zabavi i izražavanju.",
  },
  {
    img: "/glass.png",
    title: "Vino uključeno, naravno",
    description:
      "Svaka radionica dolazi uz čašu (ili dvije) vina, jer inspiracija bolje teče uz Merlot.",
  },
  {
    img: "/panel.png",
    title: "Atmosfera koja opušta",
    description:
      "Glazba i dobra energija — stvorili smo ambijent koji potiče kreativnost.",
  },
  {
    img: "/tata.png",
    title: "Za svakoga, bez iznimke",
    description:
      "Nikada nisi slikao? Savršeno. Naši voditelji su tu da te provedu kroz svaku fazu uz osmijeh.",
  },
];

export const radionice = [
  {
    id: 1,
    slug: "wine-art",
    kategorija: "Wine & Paint",
    title: "Wine & Paint",
    description:
      "Explore wines from different regions and learn brush techniques.",
    date: "27.10.2025",
    time: "18:00",
    kapacitet: 20,
    rezervirano: 12,
    cijena: 45,
    doing: ["Ovo", "Ono", "To", "Tamo"],
    ukljuceno: ["Vino", "Boje", "Kist", "Zabava"],
    image: "/screenshot_0006s.jpg",
    lokacija: " Maksimirska 141A",
  },
  {
    id: 2,
    slug: "wine-arteee",
    kategorija: "Sip & Sparkle",
    title: "Sip & Sparkle",
    description:
      "A fun evening of painting and sipping prosecco — let your creativity shine as you create your own sparkling masterpiece.",
    date: "10.11.2025",
    time: "19:00",
    kapacitet: 25,
    rezervirano: 18,
    cijena: 40,
    doing: ["Slikanje", "Upoznavanje", "Smijeh", "Mjehurići"],
    ukljuceno: ["Prosecco", "Platno", "Boje", "Kistovi"],
    image: "/screenshot_0008s.jpg",
    lokacija: " Maksimirska 141A",
  },
  {
    id: 3,
    slug: "wine-kachow",
    kategorija: "Cocktails & Paint",
    title: "Cocktails & Paint",
    description:
      "Sip your favorite cocktail while painting vibrant art — perfect for groups and special occasions.",
    date: "24.11.2025",
    time: "20:00",
    kapacitet: 30,
    rezervirano: 22,
    cijena: 50,
    doing: ["Miješanje koktela", "Slikanje", "Zabava", "Opustanje"],
    ukljuceno: ["Kokteli", "Boje", "Platno", "Instruktor"],
    image: "/screenshot_0010s.jpg",
    lokacija: " Maksimirska 141A",
  },
  {
    id: 4,
    slug: "wine-cock",
    kategorija: "Wine & Paint",
    title: "Vino i Zvjezdani Sjaj",
    description:
      "Opusti se uz čašu vina dok oslikavaš noćno nebo — večer kreativnosti i mira.",
    date: "02.12.2025",
    time: "18:30",
    kapacitet: 20,
    rezervirano: 10,
    cijena: 45,
    doing: ["Slikanje", "Opustanje", "Druženje", "Učenje tehnike"],
    ukljuceno: ["Čaša vina", "Platno", "Boje", "Instruktor"],
    image: "/screenshot_0012s.jpg",
    lokacija: " Maksimirska 141A",
  },
  {
    id: 5,
    slug: "wine-robots",
    kategorija: "Cocktails & Paint",
    title: "Tropical Art Night",
    description:
      "Stir, sip, and paint tropical vibes — a night full of colors, laughter, and cocktails!",
    date: "15.12.2025",
    time: "19:30",
    kapacitet: 28,
    rezervirano: 16,
    cijena: 55,
    doing: ["Miješanje koktela", "Slikanje", "Smijeh", "Druženje"],
    ukljuceno: ["Kokteli", "Boje", "Platno", "Dobra atmosfera"],
    image: "/screenshot_0014s.jpg",
    lokacija: " Maksimirska 141A",
  },
];

export const cats = [
  "Sve",
  "Wine & Paint",
  "Sip & Sparkle",
  "Cocktails & Paint",
];
