import { sanityClient } from '../lib/sanityClient'

export const getRadionice = async () => {
  const query = `*[_type == "radionica"] | order(datum asc){
    _id,
    naslov,
    podnaslov,
    datum,
    cijena,
    slobodnaMjesta,
    lokacija,
    vrijeme,
    "slika": slika.asset->url,
    slug
  }`

  return await sanityClient.fetch(query)
}
