import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { galleryDetails } from '../../../data/galleryDetails';

type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return Object.keys(galleryDetails).map((slug) => ({ slug }));
}

export default function GalleryDetailPage({ params }: Params) {
  const detail = galleryDetails[params.slug];

  if (!detail) {
    notFound();
  }

  return (
    <div className="bg-[#f4f6ff] text-dark">
      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 lg:flex-row lg:items-center">
          <div className="lg:w-1/2">
            <Image src={detail.heroImage} alt={detail.title} width={640} height={480} className="w-full rounded-[32px] border border-dark/5 bg-dark/5 object-cover" />
          </div>
          <div className="lg:w-1/2">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-500">{detail.category}</p>
            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">{detail.title}</h1>
            <p className="mt-2 text-sm text-dark/60">{detail.date}</p>
            <p className="mt-4 text-sm text-dark/70">{detail.description}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {detail.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-dark/5 bg-white/80 p-4 text-center">
                  <p className="text-xl font-semibold text-dark">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-dark/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-8 px-6 py-16">
        {detail.paragraphs.map((paragraph, idx) => (
          <p key={idx} className="text-base text-dark/80">
            {paragraph}
          </p>
        ))}
        <div className="grid gap-4 sm:grid-cols-2">
          {detail.images.map((img) => (
            <div key={img.alt} className="overflow-hidden rounded-3xl border border-dark/5 bg-white">
              <Image src={img.src} alt={img.alt} width={640} height={420} className="w-full object-cover" />
              <p className="p-4 text-sm text-dark/70">{img.alt}</p>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-dark/5 bg-white/80 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">Highlight</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-dark/80">
            {detail.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600">
          ← Kembali ke beranda
        </Link>
      </section>
    </div>
  );
}
