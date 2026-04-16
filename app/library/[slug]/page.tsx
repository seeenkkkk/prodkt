import { notFound } from "next/navigation";
import Link from "next/link";
import { getTechniqueById, getRelatedTechniques, techniques } from "@/lib/techniques";
import TechniqueClient from "./TechniqueClient";

export function generateStaticParams() {
  return techniques.map((t) => ({ slug: t.id }));
}

export default async function TechniquePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const technique = getTechniqueById(slug);
  if (!technique) notFound();

  const related = technique.relatedIds ? getRelatedTechniques(technique.relatedIds) : [];

  return <TechniqueClient technique={technique} related={related} />;
}
