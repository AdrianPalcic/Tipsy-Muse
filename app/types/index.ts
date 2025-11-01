interface Radionice {
  id: number;
  kategorija: string;
  naslov: string;
  opis: string;
  datum: string;
  vrijeme: string;
  kapacitet: number;
  rezervirano: number;
  cijena: number;
  opisRada: string;
  ukljuceno: string;
  image: string;
  slug: string;
  lokacija: string;
  trajanje: number;
}
interface kategorije {
  id: string;
  ime: string;
}
