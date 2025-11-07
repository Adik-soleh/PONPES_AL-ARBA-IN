export type FeatureDetail = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  stats: { label: string; value: string }[];
  highlights: string[];
  sections: { title: string; content: string }[];
  cta: { label: string; href: string; description: string };
};

export const featureDetails: Record<string, FeatureDetail> = {
  'portal-berita': {
    slug: 'portal-berita',
    title: 'Portal Berita Al Arba\'in',
    subtitle: 'Liputan resmi kegiatan santri dan pengasuh setiap hari',
    description:
      'Divisi media pondok mengelola newsroom internal untuk mendokumentasikan kegiatan keislaman, akademik, dan sosial santri dalam format artikel, foto, dan video.',
    heroImage: '/images/gallery-1.svg',
    stats: [
      { label: 'Reporter santri', value: '25' },
      { label: 'Rilis per bulan', value: '40+' },
      { label: 'Kanal distribusi', value: '4 platform' }
    ],
    highlights: [
      'Peliputan real-time acara pondok',
      'Studio foto/video internal',
      'Editorial bilingual (ID & EN)'
    ],
    sections: [
      {
        title: 'Redaksi santri',
        content:
          'Santri dilatih menjadi jurnalis muda: menyusun naskah berita, melakukan wawancara, hingga mengedit konten multimedia.'
      },
      {
        title: 'Integrasi kanal digital',
        content:
          'Konten portal otomatis tersinkron ke Instagram, YouTube, dan TikTok untuk menjangkau wali santri dan alumni.'
      }
    ],
    cta: {
      label: 'Kunjungi newsroom',
      href: '#',
      description: 'Live update kegiatan Pesantren Al Arba\'in'
    }
  },
  ppdb: {
    slug: 'ppdb',
    title: 'Portal PPDB Online',
    subtitle: 'Penerimaan santri baru serba digital',
    description:
      'Mulai dari pendaftaran, unggah berkas, hingga pemilihan jadwal tes dilakukan lewat portal resmi yang terintegrasi dengan WhatsApp admin.',
    heroImage: '/images/gallery-2.svg',
    stats: [
      { label: 'Gelombang penerimaan', value: '3 / tahun' },
      { label: 'Waktu respon admin', value: '< 4 jam' },
      { label: 'Slot santri baru', value: '400' }
    ],
    highlights: [
      'Formulir dinamis sesuai jenjang',
      'Notifikasi status via email & WA',
      'Dashboard riwayat pembayaran'
    ],
    sections: [
      {
        title: 'Seleksi terpadu',
        content:
          'Tes lisan (Qur\'an, ibadah), tes tulis (bahasa & logika), dan wawancara wali disusun dalam satu perjalanan pendaftaran sehingga progres mudah dipantau.'
      },
      {
        title: 'Layanan konsultasi',
        content:
          'Kalender kunjungan pondok, trial class, dan sharing session dengan alumni tersedia untuk membantu wali menentukan program terbaik.'
      }
    ],
    cta: {
      label: 'Mulai daftar sekarang',
      href: '#',
      description: 'Portal PPDB 2024/2025'
    }
  },
  koperasi: {
    slug: 'koperasi',
    title: 'Koperasi Santri & Bazaar',
    subtitle: 'Wahana kewirausahaan dan literasi finansial',
    description:
      'Koperasi menyediakan kebutuhan harian santri sekaligus memasarkan produk buatan mereka, mulai dari kuliner sehat hingga merchandise dakwah.',
    heroImage: '/images/gallery-3.svg',
    stats: [
      { label: 'Unit usaha', value: '12' },
      { label: 'Santri pelaku usaha', value: '180' },
      { label: 'Transaksi non-tunai', value: '100%' }
    ],
    highlights: [
      'Pembayaran pakai kartu santri',
      'Kelas bisnis mingguan',
      'Program bundling wali santri'
    ],
    sections: [
      {
        title: 'Lab entrepreneurship',
        content:
          'Setiap pekan santri mempresentasikan ide usaha, menghitung HPP, dan belajar pemasaran digital dengan pendampingan mentor profesional.'
      },
      {
        title: 'Distribusi produk',
        content:
          'Produk unggulan didistribusikan ke gerai alumni serta marketplace mitra untuk menumbuhkan jaringan ekonomi pesantren.'
      }
    ],
    cta: {
      label: 'Lihat katalog bazaar',
      href: '#',
      description: 'Pesan paket hampers atau kebutuhan santri'
    }
  },
  'usaha-alumni': {
    slug: 'usaha-alumni',
    title: 'Direktori Usaha Alumni',
    subtitle: 'Menghubungkan potensi alumni di seluruh nusantara',
    description:
      'Program ini mendata perusahaan alumni, membuka kolaborasi bisnis, dan menyalurkan beasiswa bagi adik kelasnya.',
    heroImage: '/images/gallery-4.svg',
    stats: [
      { label: 'Alumni terdaftar', value: '2.400+' },
      { label: 'Bidang usaha', value: '25 sektor' },
      { label: 'Skema beasiswa', value: '120 santri' }
    ],
    highlights: [
      'Mentorship bisnis tematik',
      'Forum investasi syariah',
      'CSR untuk pesantren cabang'
    ],
    sections: [
      {
        title: 'Jejaring profesional',
        content:
          'Alumni dapat mempublikasikan profil perusahaan, membuka lowongan magang untuk santri, dan mengadakan webinar karier.'
      },
      {
        title: 'Dana abadi alumni',
        content:
          'Sebagian keuntungan usaha dialokasikan untuk dana abadi pesantren guna membiayai santri yatim/piatu.'
      }
    ],
    cta: {
      label: 'Gabung direktori',
      href: '#',
      description: 'Registrasi usaha alumni Al Arba\'in'
    }
  },
  'tentang-pondok': {
    slug: 'tentang-pondok',
    title: 'Tentang Pondok Pesantren Al Arba\'in',
    subtitle: 'Sejarah, visi misi, dan struktur pengasuhan',
    description:
      'Didirikan oleh para masyayikh alumni Timur Tengah dengan misi memadukan pendidikan Qur\'an, sains, dan kepemimpinan global.',
    heroImage: '/images/hero-illustration.svg',
    stats: [
      { label: 'Tahun berdiri', value: '1998' },
      { label: 'Santri aktif', value: '1.200+' },
      { label: 'Cabang', value: '4 lokasi' }
    ],
    highlights: [
      'Sistem boarding modern',
      'Bahasa Arab-Inggris wajib',
      'Kurikulum muadalah setara MA'
    ],
    sections: [
      {
        title: 'Visi & misi',
        content:
          'Mewujudkan generasi Qur\'ani yang unggul dalam ilmu pengetahuan, berakhlak mulia, dan siap memimpin peradaban.'
      },
      {
        title: 'Struktur kepengasuhan',
        content:
          'Pengasuh utama dibantu dewan masyayikh, kepala madrasah, dan musyrif yang tinggal bersama santri 24 jam.'
      }
    ],
    cta: {
      label: 'Unduh profil pondok',
      href: '#',
      description: 'Buku profil resmi Al Arba\'in'
    }
  },
  'tahfidz-center': {
    slug: 'tahfidz-center',
    title: 'Tahfidz Center',
    subtitle: 'Program hafalan 30 juz dengan monitoring digital',
    description:
      'Setoran harian, jadwal talaqqi, hingga evaluasi makhraj tercatat dalam sistem sehingga progres hafalan santri terpantau transparan.',
    heroImage: '/images/slide-1.svg',
    stats: [
      { label: 'Target 30 juz', value: '3 tahun' },
      { label: 'Penguji bersanad', value: '15' },
      { label: 'Setoran/minggu', value: '4 kali' }
    ],
    highlights: [
      'Pembagian halaqah sesuai level',
      'Modul tahsin intensif',
      'Program sab\'ah qira\'at lanjutan'
    ],
    sections: [
      {
        title: 'Sistem mentoring',
        content:
          'Setiap santri memiliki musyrif tahfidz yang memantau kedisiplinan tidur, nutrisi, dan target muraja\'ah.'
      },
      {
        title: 'Ujian publik',
        content:
          'Wisuda tahfidz digelar terbuka dengan standar pengujian tingkat nasional dan sertifikat resmi.'
      }
    ],
    cta: {
      label: 'Lihat silabus tahfidz',
      href: '#',
      description: 'Panduan hafalan bertahap'
    }
  },
  'media-center': {
    slug: 'media-center',
    title: 'Al Arba\'in Media Center',
    subtitle: 'Tim kreator konten sosial media pesantren',
    description:
      'Santri memproduksi konten pendek untuk Instagram, TikTok, dan YouTube Shorts—mulai dari script, shooting, editing, hingga copywriting caption.',
    heroImage: '/images/slide-2.svg',
    stats: [
      { label: 'Program kreatif', value: '9 seri' },
      { label: 'Platform publikasi', value: '5' },
      { label: 'Tim santri', value: '60' }
    ],
    highlights: [
      'Riset tren dan kalender konten sosmed',
      'Template caption bilingual & desain thumbnail',
      'Distribusi otomatis ke semua platform'
    ],
    sections: [
      {
        title: 'Divisi konten harian',
        content:
          'Tiap pekan santri menyusun ide Reels/TikTok, melakukan shooting vertical, dan mengedit langsung di mobile/desktop dengan panduan mentor.'
      },
      {
        title: 'Pipeline distribusi multi-platform',
        content:
          'Asset final dipublikasikan serentak ke Instagram, TikTok, YouTube Shorts, serta ditautkan ke website berita pondok untuk meningkatkan jangkauan.'
      }
    ],
    cta: {
      label: 'Booking studio',
      href: '#',
      description: 'Jadwalkan produksi konten'
    }
  },
  'radio-santri': {
    slug: 'radio-santri',
    title: 'Radio Santri Live',
    subtitle: 'Streaming kajian dan salam antar santri',
    description:
      'Radio internal yang menyiarkan kajian kitab, qira\'ah, dan ruang interaksi bagi alumni serta wali santri dari mana saja.',
    heroImage: '/images/slide-3.svg',
    stats: [
      { label: 'Jam siaran', value: '18 jam/hari' },
      { label: 'Program unggulan', value: '12' },
      { label: 'Pendengar aktif', value: '5.000+' }
    ],
    highlights: [
      'Live request salam',
      'Podcast tanya jawab',
      'Arsip rekaman siap unduh'
    ],
    sections: [
      {
        title: 'Studio audio profesional',
        content:
          'Menggunakan perlengkapan broadcast kelas industri dengan sistem mixing digital sehingga suara tetap jernih.'
      },
      {
        title: 'Akses multiplatform',
        content:
          'Streaming dapat diakses via web, aplikasi mobile, dan integrasi ke smart speaker.'
      }
    ],
    cta: {
      label: 'Dengarkan radio',
      href: '#',
      description: 'Live streaming 24/7'
    }
  }
};
