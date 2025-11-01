# Sanity Setup Guide

## 1. Environment Variables

Create a `.env.local` file in the root of your project with the following:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=8krlpl3k
NEXT_PUBLIC_SANITY_DATASET=production
```

These values match your Sanity configuration from `sanity.cli.ts`.

## 2. Install Image URL Package (Optional but Recommended)

For better image handling, install the Sanity image URL package:

```bash
npm install @sanity/image-url
```

Then update `lib/sanity.queries.ts` to use it properly.

## 3. Using the Queries

### Fetch All Radionice

```typescript
import { getAllRadionice } from "@/lib/sanity.queries";

// In a Server Component
export default async function RadionicePage() {
  const radionice = await getAllRadionice();
  // Transform data to match your interface
  return <div>{/* render radionice */}</div>;
}

// In a Client Component with useEffect
"use client";
import { useEffect, useState } from "react";

export default function RadionicePage() {
  const [radionice, setRadionice] = useState([]);
  
  useEffect(() => {
    getAllRadionice().then(setRadionice);
  }, []);
  
  return <div>{/* render radionice */}</div>;
}
```

### Fetch Single Radionica by Slug

```typescript
import { getRadionicaBySlug } from "@/lib/sanity.queries";

export default async function RadionicaPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const radionica = await getRadionicaBySlug(slug);
  
  if (!radionica) {
    return <div>Not found</div>;
  }
  
  return <div>{/* render radionica */}</div>;
}
```

### Fetch Partners

```typescript
import { getAllWinePartners, getAllFestivalPartners } from "@/lib/sanity.queries";

const winePartners = await getAllWinePartners();
const festivalPartners = await getAllFestivalPartners();
```

### Fetch Categories

```typescript
import { getAllKategorije } from "@/lib/sanity.queries";

const kategorije = await getAllKategorije();
```

## 4. Data Transformation

The data from Sanity may need to be transformed to match your existing `Radionice` interface. Here's a helper function:

```typescript
function transformRadionica(sanityRadionica: any): Radionice {
  return {
    id: sanityRadionica._id,
    slug: sanityRadionica.slug.current,
    kategorija: sanityRadionica.kategorija || "",
    naslov: sanityRadionica.naslov,
    opis: sanityRadionica.opis,
    datum: sanityRadionica.datum,
    vrijeme: sanityRadionica.vrijeme,
    kapacitet: sanityRadionica.kapacitet,
    rezervirano: 0, // You may need to track this separately
    cijena: sanityRadionica.cijena,
    opisRada: sanityRadionica.opisRada,
    ukljuceno: sanityRadionica.ukljuceno,
    image: getSanityImageUrl(sanityRadionica.image) || "/placeholder.jpg",
    lokacija: sanityRadionica.lokacija,
    trajanje: sanityRadionica.trajanje,
  };
}
```

## 5. Next Steps

1. Set up your `.env.local` file with the environment variables
2. Test fetching data using the helper functions
3. Replace static data imports with Sanity queries
4. Update your components to use the fetched data
5. Handle loading and error states appropriately

