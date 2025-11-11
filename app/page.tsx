import type { Metadata } from 'next';
import Image from 'next/image';
import CircularMenu from '../components/CircularMenu';
import FaqAccordion from '../components/FaqAccordion';
import GalleryCarousel from '../components/GalleryCarousel';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import HighlightTabs from '../components/HighlightTabs';

export const metadata: Metadata = {
  title: 'Portal Pondok Pesantren Al Arba\'in',
  description:
    'Portal resmi Pondok Pesantren Al Arba\'in yang menghadirkan informasi PPDB, fasilitas, program tahfidz, STEAM, dan kegiatan santri terkini.',
  keywords: [
    'Pondok Pesantren Al Arba\'in',
    'Pesantren modern',
    'PPDB pesantren',
    'Tahfidz Quran',
    'Boarding school Tangerang Selatan',
    'Pesantren STEAM',
    'Santri Al Arba\'in'
  ],
  authors: [{ name: 'Al Arba\'in Media Center' }],
  creator: 'Al Arba\'in Media Center',
  publisher: 'Pondok Pesantren Al Arba\'in',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'Pondok Pesantren Al Arba\'in',
    title: 'Portal Pondok Pesantren Al Arba\'in',
    description:
      'Kenali fasilitas, program unggulan, dan kegiatan santri Pondok Pesantren Al Arba\'in melalui portal resmi kami.',
    images: [
      {
        url: '/images/slide-1.svg',
        width: 1200,
        height: 630,
        alt: 'Pondok Pesantren Al Arba\'in'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pondok Pesantren Al Arba\'in | Portal Resmi',
    description:
      'Informasi PPDB, fasilitas, dan aktivitas santri Pondok Pesantren Al Arba\'in dalam satu portal.',
    images: ['/images/slide-1.svg']
  },
  alternates: {
    canonical: '/'
  }
};

const navItems: { label: string; href: string }[] = [
  { label: 'Beranda', href: '#bg' },
  { label: 'Profil', href: '#fitur' },
  { label: 'Fitur', href: '#aplikasi' },
  { label: 'Sarana', href: '#sarana' },
  { label: 'Berita', href: '#news' },
  { label: 'Galleri', href: '#galleri' },
  { label: 'FAQ', href: '#faq' }
];

const heroSlides = [
  {
    image: '/images/slide-1.svg',
    heading: 'Pondok Pesantren Al Arba\'in',
    subheading:
      'Sentra pendidikan Islam modern yang memadukan manhaj salaf, kurikulum sains, dan kepemimpinan global.',
    badge: 'Modern Boarding School',
    ctaLabel: 'Informasi PPDB 2024/2025',
    ctaHref: 'https://wa.me/6281295564522'
  },
  {
    image: '/images/slide-2.svg',
    heading: 'Lingkungan Pembelajaran Futuristik',
    subheading: 'Asrama nyaman, laboratorium terintegrasi, dan studio media dakwah untuk karya santri.',
    badge: 'Fasilitas Lengkap',
    ctaLabel: 'Jadwalkan Kunjungan',
    ctaHref: 'https://wa.me/6281295564522'
  },
  {
    image: '/images/slide-3.svg',
    heading: 'Pengasuhan 24 Jam Berbasis Akhlak',
    subheading: 'Pendampingan musyrif dan program kemandirian membentuk karakter mulia dan siap berkhidmah.',
    badge: 'Pembinaan Karakter',
    ctaLabel: 'Hubungi Admin',
    ctaHref: 'https://wa.me/6281295564522'
  }
];

const featureCards = [
  {
    title: 'Santripage Al Arba\'in',
    description: 'Aplikasi dashboard rekap tahfidz, adab, dan akademik santri secara real-time.',
    cta: 'Segera hadir',
    href: '#',
    image: '/images/gallery-1.svg',
    comingSoon: true
  },
  {
    title: 'PPDB Online',
    description: 'Platform pendaftaran daring dengan monitoring berkas dan jadwal wawancara.',
    cta: 'Segera hadir',
    href: '#',
    image: '/images/gallery-2.svg',
    comingSoon: true
  },
  {
    title: 'Maktabah Digital',
    description: 'Koleksi kitab turats dan referensi sains yang bisa diakses santri dan asatidz.',
    cta: 'Segera hadir',
    href: '#',
    image: '/images/gallery-3.svg',
    comingSoon: true
  }
];

const menuItems = [
  {
    label: 'Portal Berita',
    description: 'Laporan kegiatan santri',
    href: '/fitur/portal-berita',
    emoji: '📰'
  },
  {
    label: 'PPDB',
    description: 'Pendaftaran santri baru',
    href: '#',
    emoji: '🎓',
    comingSoon: true
  },
  {
    label: 'Koperasi',
    description: 'Produk karya santri',
    href: '#',
    emoji: '🛍️',
    comingSoon: true
  },
  {
    label: 'Usaha Alumni',
    description: 'Jejaring bisnis',
    href: '/fitur/usaha-alumni',
    emoji: '🤝'
  },
  {
    label: 'Tentang Pondok',
    description: 'Profil lengkap',
    href: '/fitur/tentang-pondok',
    emoji: '🕌'
  },
  {
    label: 'Tahfidz Center',
    description: 'Target hafalan',
    href: '#',
    emoji: '📖',
    comingSoon: true
  },
  {
    label: 'Media Center',
    description: 'Produksi konten',
    href: '/fitur/media-center',
    emoji: '🎬'
  },
  {
    label: 'Radio Santri',
    description: 'Streaming kajian',
    href: '#',
    emoji: '📻',
    comingSoon: true
  }
];

const highlights = [
  {
    pill: 'Sertifikasi Muadalah',
    title: 'Lulusan Diakui Perguruan Tinggi Dunia',
    content:
      'Program muadalah memadukan kurikulum turats dengan sistem evaluasi modern sehingga ijazah santri diakui kampus dalam dan luar negeri.'
  },
  {
    pill: 'Modern Salafiyah',
    title: 'Perpaduan Disiplin Bahasa & Kitab Kuning',
    content:
      'Kegiatan harian disusun seperti Gontor dengan pembiasaan bahasa Arab-Inggris namun tetap menjaga kedalaman kajian kitab klasik.'
  },
  {
    pill: 'Sistem Rolling',
    title: 'Pendampingan Menyeluruh Setiap Tiga Bulan',
    content:
      'Rotasi kelas dan pengasuhan membuat santri terpapar metode belajar berbeda sekaligus memonitor perkembangan adab dan prestasi.'
  }
];

const facilityFeatures = [
  {
    title: 'Perpustakaan Digital',
    description: 'Ribuan kitab turats, e-book sains, dan akses jurnal terkurasi.',
    icon: '📚'
  },
  {
    title: 'Laboratorium STEAM',
    description: 'Eksperimen robotik, biologi, dan desain produk dakwah.',
    icon: '🧪'
  },
  {
    title: 'Ekstrakurikuler',
    description: 'Hadroh, bela diri, broadcasting, hingga technopreneurship.',
    icon: '⚡'
  },
  {
    title: 'Kajian Qur\'an',
    description: 'Pembinaan qira\'ah sab\'ah dengan talaqqi intensif.',
    icon: '🕋'
  }
];

const saranaGallery = [
  { image: '/images/gallery-1.svg', caption: 'Gerbang utama & plaza santri' },
  { image: '/images/gallery-2.svg', caption: 'Kamar kepala asrama' },
  { image: '/images/gallery-3.svg', caption: 'Masjid jami\' Al Arba\'in' },
  { image: '/images/gallery-4.svg', caption: 'Laboratorium multimedia' }
];

const newsPosts = [
  {
    title: 'Akreditasi A Program Tahfidz & STEAM',
    category: 'Agenda Pondok',
    date: '28 Okt 2025',
    author: 'Alfatih Media',
    excerpt:
      'Visitasi asesor Majelis Masyayikh menilai integrasi kurikulum diniyah dan sains yang dijalankan selama dua hari penuh.',
    image: '/images/gallery-4.svg'
  },
  {
    title: 'Tahajjud Nasional Bersama Masyayikh',
    category: 'Acara Pondok',
    date: '23 Okt 2025',
    author: 'Tim Dokumentasi',
    excerpt:
      'Ribuan santri berkumpul di masjid utama melaksanakan tahajjud berjamaah sekaligus dzikir kebangsaan.',
    image: '/images/gallery-2.svg'
  },
  {
    title: 'Hari Santri Nusantara',
    category: 'Event Khusus',
    date: '22 Okt 2025',
    author: 'Humas PP Al Arba\'in',
    excerpt:
      'Rangkaian pawai, seminar, dan launching karya literasi mewarnai peringatan Hari Santri tahun ini.',
    image: '/images/gallery-3.svg'
  }
];

const galleryCarouselItems = [
  { image: '/images/gallery-1.svg', title: 'Wisuda Tahfidz', caption: 'Prestasi Santri', slug: 'wisuda-tahfidz' },
  { image: '/images/gallery-2.svg', title: 'Latihan Robotik', caption: 'STEAM Lab', slug: 'latihan-robotik' },
  { image: '/images/gallery-3.svg', title: 'Rihlah Dakwah', caption: 'Outdoor Class', slug: 'rihlah-dakwah' },
  { image: '/images/gallery-4.svg', title: 'Studio Media', caption: 'Konten Kreatif', slug: 'studio-media' },
  { image: '/images/gallery-1.svg', title: 'Karya Batik Santri', caption: 'Ekskul Kreatif', slug: 'karya-batik' },
  { image: '/images/gallery-2.svg', title: 'Simulasi Astronomi', caption: 'Lab Penelitian', slug: 'simulasi-astronomi' }
];

const faqItems = [
  {
    question: 'Berapa biaya pendidikan per bulan?',
    answer: 'SPP sudah termasuk makan 3x sehari serta layanan laundry dengan nilai estimasi Rp850.000 per bulan.'
  },
  {
    question: 'Apakah ada tes masuk?',
    answer: 'Tes mencakup baca Qur\'an, praktik ibadah, serta tes tulis dasar bahasa Arab dan wawancara wali.'
  },
  {
    question: 'Kurikulum apa yang digunakan?',
    answer: 'Kurikulum terpadu Modern-Salafiyah dengan fokus bahasa Arab-Inggris dan kajian kitab sepanjang hari.'
  },
  {
    question: 'Bagaimana sistem pengasuhan?',
    answer: 'Musyrif tinggal bersama santri, menerapkan jadwal tahajjud, kajian, olahraga, hingga mentoring bakat.'
  }
];

const infoCards = [
  {
    title: 'Seputar Al Arba\'in',
    description: 'Sejarah berdiri, visi misi, dan struktur kepengasuhan yang telah berjalan lebih dari 25 tahun.',
    href: '#',
    label: 'Lihat Profil'
  },
  {
    title: 'Daftar Pengajar',
    description: 'Asatidz lulusan pesantren besar dan kampus Timur Tengah siap mendampingi hafalan dan akademik.',
    href: '#',
    label: 'Cek Tenaga Pendidik'
  },
  {
    title: 'Program Unggulan',
    description: 'Tahfidz 30 juz, STEAM research, leadership camp, serta entrepreneur market mingguan.',
    href: '#',
    label: 'Jelajahi Program'
  }
];

const socialLinks = [
  { label: 'WhatsApp', value: '+62 812-9556-4522', href: 'https://wa.me/6281295564522' },
  { label: 'Instagram', value: '@pp.alarbain_official', href: 'https://www.instagram.com/pp.alarbain_official' },
  { label: 'YouTube', value: '@AlarbainAlmukhtariyyah_Media', href: 'https://www.youtube.com/@AlarbainAlmukhtariyyah_Media' },
  { label: 'TikTok', value: 'alarbain.official', href: 'https://www.tiktok.com/@alarbain.official' }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f8fb] text-dark">
      <Header navItems={navItems} />

      <section id="bg" className="mx-auto max-w-6xl px-6 py-10">
        <HeroCarousel slides={heroSlides} />
      </section>

      <section id="fitur" className="mx-auto max-w-4xl px-6 text-center">
        <h3 className="text-4xl font-semibold text-dark md:text-5xl">معهد الأربعين</h3>
        <p className="mt-4 text-lg text-dark/70">
          PONDOK PESANTREN AL ARBA&apos;IN •  Gg. Nurul Ikhlas I, Kedaung, Kec. Pamulang, Kota Tangerang Selatan, Banten 15415
        </p>
        <p className="mt-2 text-sm text-dark/60">
          Pusat pendidikan Islam yang menumbuhkan kecintaan Qur&apos;an, kecakapan global, dan kepemimpinan beradab.
        </p>
      </section>

      <section id="aplikasi" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {featureCards.map((feature) => (
            <div key={feature.title} className="relative overflow-hidden rounded-[32px] border border-dark/5 bg-white">
              <div className="relative h-64">
                <Image src={feature.image} alt={feature.title} fill className={`object-cover ${feature.comingSoon ? 'opacity-60 grayscale' : ''}`} sizes="400px" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  <p className="text-sm text-white/80">{feature.description}</p>
                  {feature.comingSoon ? (
                    <span className="mt-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                      Akan datang
                    </span>
                  ) : (
                    <a href={feature.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                      {feature.cta} <span>→</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="tentang" className="bg-white/80 py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row">
          <div className="lg:w-1/3">
            <p className="section-tag">Fitur aplikasi</p>
            <h2 className="section-title">Ekosistem digital Al Arba&apos;in</h2>
            <p className="mt-3 text-sm text-dark/70">
              Seluruh layanan pesantren terhubung lewat aplikasi sehingga wali santri bisa memantau perkembangan putra-putri dari mana saja.
            </p>
          </div>
          <div className="lg:w-2/3">
            <CircularMenu items={menuItems} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.6fr,1.4fr]">
          <div>
            <p className="section-tag">Tiga fokus utama</p>
            <h2 className="section-title">Hal penting yang wajib diketahui calon wali santri</h2>
            <p className="mt-4 text-sm text-dark/70">
              Pengasuhan modern, sanad keilmuan kuat, dan budaya disiplin menjadi identitas Pondok Pesantren Al Arba&apos;in.
            </p>
          </div>
          <HighlightTabs highlights={highlights} />
        </div>
      </section>

      <section id="sarana" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="section-tag">Sarana dan prasarana</p>
            <h2 className="section-title">Lingkungan nyaman untuk belajar dan beribadah</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {facilityFeatures.map((facility) => (
              <div key={facility.title} className="rounded-3xl border border-dark/5 bg-white p-6 text-center shadow-sm">
                <p className="text-4xl" aria-hidden>
                  {facility.icon}
                </p>
                <h3 className="mt-4 text-lg font-semibold">{facility.title}</h3>
                <p className="text-sm text-dark/70">{facility.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold">Potret Pesantren</h3>
            <p className="text-sm text-dark/70">Cuplikan fasilitas terfavorit di kalangan santri.</p>
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {saranaGallery.map((item) => (
                <div key={item.caption} className="rounded-2xl border border-dark/5 bg-white/80 p-3">
                  <div className="relative h-40 w-full overflow-hidden rounded-xl bg-dark/10">
                    <Image src={item.image} alt={item.caption} fill className="object-cover" sizes="250px" />
                  </div>
                  <p className="mt-3 text-xs font-semibold text-dark">{item.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <p className="section-tag">Berita terbaru</p>
          <h2 className="section-title">Al Arba'in News</h2>
          <p className="mt-3 text-sm text-dark/70">Liputan resmi kegiatan santri, pengasuh, dan jaringan alumni.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {newsPosts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-[28px] border border-dark/5 bg-white shadow-[0_25px_70px_rgba(12,18,34,0.08)]">
              <div className="relative h-56">
                <Image src={post.image} alt={post.title} fill className="object-cover" sizes="400px" />
              </div>
              <div className="space-y-3 p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">{post.category}</div>
                <h3 className="text-lg font-semibold text-dark">{post.title}</h3>
                <p className="text-xs text-dark/60">{post.date} • {post.author}</p>
                <p className="text-sm text-dark/70">{post.excerpt}</p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600">
                  Baca selengkapnya <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="galleri" className="bg-[#f5f6fb] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="section-tag text-primary-500">Galleri unggulan</p>
            <h2 className="section-title text-dark">360° pengalaman santri Al Arba&apos;in</h2>
          </div>
          <div className="mt-20">
            <GalleryCarousel items={galleryCarouselItems} />
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div>
            <p className="section-tag">FAQ</p>
            <h2 className="section-title">Seputar pertanyaan wali santri</h2>
            <FaqAccordion items={faqItems} />
          </div>
          <div className="space-y-6">
            {infoCards.map((card) => (
              <div key={card.title} className="rounded-3xl border border-dark/5 bg-gradient-to-br from-primary-50 to-white p-6">
                <h3 className="text-lg font-semibold text-dark">{card.title}</h3>
                <p className="text-sm text-dark/70">{card.description}</p>
                <a href={card.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-600">
                  {card.label} <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl grid gap-8 px-6 md:grid-cols-2">
          <div className="rounded-[32px] border border-dark/5 bg-gradient-to-br from-primary-50 via-white to-accent/10 p-10">
            <p className="section-tag text-primary-600">Info Pesantren</p>
            <h2 className="text-3xl font-semibold text-dark">Siap mendaftar atau butuh tur kampus?</h2>
            <p className="mt-4 text-sm text-dark/70">
              Tim Admisi Al Arba&apos;in siap membantu konsultasi program, jadwal kunjungan, hingga layanan antar-jemput bandara bagi calon santri luar kota.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://wa.me/6281295564522"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-400"
              >
                Hubungi WhatsApp
              </a>
              <a
                href="mailto:info@pp-alarbain.org"
                className="rounded-full border border-primary-500 px-6 py-3 text-sm font-semibold text-primary-600"
              >
                Kirim Email
              </a>
            </div>
          </div>
          <div className="rounded-[32px] border border-dark/5 bg-white p-10 shadow-sm">
            <h3 className="text-lg font-semibold text-dark">Kontak resmi & media sosial</h3>
            <div className="mt-6 space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-dark/5 bg-white px-5 py-3 text-sm text-dark transition hover:border-primary-500"
                >
                  <div>
                    <p className="font-semibold">{social.label}</p>
                    <p className="text-dark/60">{social.value}</p>
                  </div>
                  <span className="text-primary-500">→</span>
                </a>
              ))}
            </div>
            <div className="mt-6 text-sm text-dark/70">
              <p> Gg. Nurul Ikhlas I, Kedaung, Kec. Pamulang,</p>
              <p> Kota Tangerang Selatan, banten</p>
            </div>
          </div>
        </div>
      </section>

  <footer className="bg-dark text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 lg:flex-row lg:justify-between">
          <div className="space-y-4 lg:w-1/3">
            <div className="flex items-center gap-3">
              <Image src="/images/logo-symbol.svg" width={48} height={48} alt="Logo Pondok Pesantren Al Arba'in" />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary-200">Al Arba&apos;in</p>
                <p className="text-base font-semibold">Pesantren unggulan nusantara</p>
              </div>
            </div>
            <p className="text-sm text-white/70">
              Dirancang oleh Al Arba&apos;in Media • Platform resmi informasi pondok.
            </p>
          </div>
          <div className="grid flex-1 gap-8 md:grid-cols-2">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-200">Al Arba&apos;in Site</h4>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>
                  <a href="#">Santripage</a>
                </li>
                <li>
                  <a href="#">PPDB Online</a>
                </li>
                <li>
                  <a href="#">Maktabah Digital</a>
                </li>
                <li>
                  <a href="#">Al Arba'in News</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-200">Social Media</h4>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      {social.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:w-1/4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-200">Contact Media Center</h4>
            <p className="mt-3 text-lg font-semibold text-white">0877-8613-2379</p>
            <p className="text-sm text-white/70">Tim dokumentasi & publikasi Pondok Pesantren Al Arba&apos;in.</p>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Pondok Pesantren Al Arba&apos;in Media. All rights reserved.
        </div>
  </footer>

      <a
        href="https://wa.me/6281295564522"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_15px_35px_rgba(12,18,34,0.25)] ring-1 ring-dark/5 transition hover:scale-105 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
        aria-label="Chat WhatsApp Admin Al Arba'in"
      >
        <Image
          src="/images/logo_wa.png"
          alt="WhatsApp"
          width={32}
          height={32}
          className="h-6 w-6 object-contain sm:h-8 sm:w-8"
        />
      </a>
    </main>
  );
}
