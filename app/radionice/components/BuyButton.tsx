"use client";

export default function BuyButton({
  price,
  name,
  description,
  location, // dodano
  imageUrl,
  id,
  tickets,
}: {
  price: number;
  name: string;
  description: string;
  location: string;
  imageUrl: string;
  id: string;
  tickets: number;
}) {
  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        price,
        description,
        location,
        image: imageUrl,
        id,
        tickets,
      }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <button onClick={handleCheckout} className="button red w-full">
      Kupi ulaznice
    </button>
  );
}
