import Body from "./components/Body";

export default async function RadionicaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <Body slug={slug} />;
}
