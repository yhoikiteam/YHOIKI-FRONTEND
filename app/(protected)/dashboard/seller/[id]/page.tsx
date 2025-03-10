import { notFound } from "next/navigation";

export default async function DashboadSeller({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  if (!id) return notFound();

  return <div>DashboadSeller</div>;
}
