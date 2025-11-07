import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { featureDetails } from '../../../data/featureDetails';

type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return Object.keys(featureDetails).map((slug) => ({ slug }));
}

export default function FeatureDetailPage({ params }: Params) {
  const detail = featureDetails[params.slug];

  if (!detail) {
    notFound();
  }

  return (
    <div className="bg-[#f7f8fb] text-dark">
      <section className="relative overflow-hidden bg-dark text-white">
        <div className="absolute inset-0 opacity-30">
          <Image src={detail.heroImage} alt={detail.title} fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/40" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-24 md:flex-row md:items-center">
          <div className="md:w-2/3">
            <p className="text-xs uppercase tracking-[0.4em] text-primary-200">Fitur unggulan</p>
            <h1 className="mt-3 text-4xl font-semibold md:text-5xl">{detail.title}</h1>
            <p className="mt-4 text-lg text-white/80">{detail.subtitle}</p>
            <p className="mt-4 text-sm text-white/70">{detail.description}</p>
            <div className="mt-8 flex flex-wrap gap-6">
              {detail.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-primary-200">Aksi cepat</p>
              <h3 className="mt-3 text-xl font-semibold">{detail.cta.description}</h3>
              <Link
                href={detail.cta.href}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-400"
              >
                {detail.cta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {detail.sections.map((section) => (
            <div key={section.title} className="rounded-[32px] border border-dark/5 bg-white p-8 shadow-[0_20px_60px_rgba(12,18,34,0.08)]">
              <p className="text-xs uppercase tracking-[0.3em] text-primary-500">Insight</p>
              <h3 className="mt-2 text-2xl font-semibold text-dark">{section.title}</h3>
              <p className="mt-3 text-sm text-dark/70">{section.content}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-[32px] border border-dark/5 bg-gradient-to-r from-primary-50 via-white to-accent/10 p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-primary-600">Kenapa penting</p>
          <h3 className="mt-2 text-2xl font-semibold text-dark">Nilai tambah fitur</h3>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {detail.highlights.map((item) => (
              <li key={item} className="rounded-2xl border border-dark/5 bg-white/80 p-4 text-sm text-dark/80">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600">
            ← Kembali ke beranda
          </Link>
        </div>
      </section>
    </div>
  );
}
