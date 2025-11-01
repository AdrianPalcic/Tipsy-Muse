import { getRadionicaBySlug } from "@/lib/sanity.queries";
import Body from "./components/Body";

export default async function RadionicaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const radionica = await getRadionicaBySlug(slug);

  return <Body radionica={radionica} />;
}
