interface Radionice {
  _id: string;
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
  image: {
    asset: {
      url: string;
      _id: string;
      _ref: string;
    };
  };
  slug: {
    current: string;
    _type: string;
  };
  lokacija: string;
  trajanje: number;
}
interface kategorije {
  id: string;
  ime: string;
}
