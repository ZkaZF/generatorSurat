import { notFound } from 'next/navigation';
import { getTemplate } from '@/lib/templates/registry';
import EditorClient from './EditorClient';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ templateId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { templateId } = await params;
  try {
    const template = getTemplate(templateId);
    return {
      title: `${template.name} — SuratOtomatis`,
      description: template.description,
    };
  } catch {
    return { title: 'Template tidak ditemukan — SuratOtomatis' };
  }
}

export default async function EditorPage({ params }: Props) {
  const { templateId } = await params;

  let template;
  try {
    template = getTemplate(templateId);
  } catch {
    notFound();
  }

  return <EditorClient template={template} />;
}
