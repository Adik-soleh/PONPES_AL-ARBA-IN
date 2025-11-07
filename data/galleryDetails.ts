export type GalleryDetail = {
  slug: string;
  title: string;
  category: string;
  description: string;
  heroImage: string;
  date: string;
  stats: { label: string; value: string }[];
  highlights: string[];
  paragraphs: string[];
  images: { src: string; alt: string }[];
};

export const galleryDetails: Record<string, GalleryDetail> = {
  'wisuda-tahfidz': {
    slug: 'wisuda-tahfidz',
    title: 'Wisuda Tahfidz 30 Juz Angkatan 2024',
    category: 'Prestasi Santri',
    description: 'Momentum khidmat saat 72 santri dinyatakan tuntas hafalan 30 juz dengan sanad bacaan yang terverifikasi.',
    heroImage: '/images/gallery-1.svg',
    date: 'Mei 2024',
    stats: [
      { label: 'Santri lulus', value: '72' },
      { label: 'Penguji bersanad', value: '8' },
      { label: 'Durasi wisuda', value: '3 hari' }
    ],
    highlights: [
      'Sidang terbuka bersama wali santri',
      'Sesi tashih bersama masyayikh tamu',
      'Pawai syukur dan penobatan duta tahfidz'
    ],
    paragraphs: [
      'Wisuda tahfidz Al Arba\'in dibuka dengan khatmil Qur\'an bil ghaib, dilanjutkan tasji\' sakral oleh dewan masyayikh. Setiap santri memperlihatkan hafalan terbaiknya di hadapan wali santri dan tamu undangan.',
      'Selain seremoni, rangkaian acara juga menampilkan pameran riset Qur\'ani, launching buku ringkas metode muraja\'ah, dan sharing perjuangan para musyrif tahfidz. Dokumentasi lengkap tersedia dalam bentuk video highlight berdurasi 10 menit.'
    ],
    images: [
      { src: '/images/gallery-1.svg', alt: 'Prosesi pengalungan medali wisuda tahfidz' },
      { src: '/images/gallery-4.svg', alt: 'Sesi tashih bersama masyayikh' }
    ]
  },
  'latihan-robotik': {
    slug: 'latihan-robotik',
    title: 'Latihan Robotik & STEAM Camp',
    category: 'STEAM Lab',
    description: 'Bootcamp intensif integrasi sains dan tauhid; santri membangun robot pencari arah kiblat otomatis.',
    heroImage: '/images/gallery-2.svg',
    date: 'Agustus 2024',
    stats: [
      { label: 'Tim peserta', value: '12' },
      { label: 'Mentor industri', value: '4' },
      { label: 'Produk prototipe', value: '9' }
    ],
    highlights: [
      'Workshop IoT dan kompas digital',
      'Syarah konsep qiblat & falak kontemporer',
      'Demo robot di depan pengasuh'
    ],
    paragraphs: [
      'Santri diajak mendesain algoritma sederhana berbasis mikrokontroler untuk mendeteksi arah kiblat di ruangan tertutup. Kegiatan ini menggabungkan materi falakiyyah dengan coding.',
      'Di akhir sesi, tiap tim mempresentasikan inovasinya kepada dewan penguji dan mendapatkan umpan balik untuk pengembangan ke kompetisi nasional.'
    ],
    images: [
      { src: '/images/gallery-2.svg', alt: 'Demo robotik santri' },
      { src: '/images/gallery-3.svg', alt: 'Sesi mentoring IoT' }
    ]
  },
  'rihlah-dakwah': {
    slug: 'rihlah-dakwah',
    title: 'Rihlah Dakwah & Pengabdian Masyarakat',
    category: 'Outdoor Class',
    description: 'Safari dakwah lintas desa yang melatih kemandirian, leadership, dan kekuatan komunikasi santri.',
    heroImage: '/images/gallery-3.svg',
    date: 'Januari 2024',
    stats: [
      { label: 'Desa tujuan', value: '5' },
      { label: 'Durasi pengabdian', value: '10 hari' },
      { label: 'Program dakwah', value: '18 agenda' }
    ],
    highlights: [
      'Khutbah & kultum di masjid setempat',
      'Bakti sosial dan pelayanan kesehatan',
      'Kelas literasi Qur\'an untuk anak-anak'
    ],
    paragraphs: [
      'Setiap rombongan santri ditemani seorang musyrif dan alumni lokal. Mereka diberi mandat untuk mengisi majelis taklim, mengajar TPQ, serta membantu UMKM desa melalui workshop branding sederhana.',
      'Rihlah ini juga menjadi ladang training leadership: santri bergantian menjadi koordinator logistik, humas, dan pencatat laporan akhir.'
    ],
    images: [
      { src: '/images/gallery-3.svg', alt: 'Santri mengisi kajian di desa' },
      { src: '/images/gallery-1.svg', alt: 'Bakti sosial bersama warga' }
    ]
  },
  'studio-media': {
    slug: 'studio-media',
    title: 'Produksi Konten Studio Media Center',
    category: 'Konten Kreatif',
    description: 'Proses di balik pembuatan podcast, konten reels, dan dokumentasi visual Pondok Pesantren Al Arba\'in.',
    heroImage: '/images/gallery-4.svg',
    date: 'September 2024',
    stats: [
      { label: 'Episode direkam', value: '15' },
      { label: 'Crew santri', value: '28' },
      { label: 'View sosmed', value: '1.2M' }
    ],
    highlights: [
      'Penulisan naskah dakwah kreatif',
      'Latihan lighting & color grading',
      'Distribusi otomatis ke multi-platform'
    ],
    paragraphs: [
      'Studio Al Arba\'in Media Center dilengkapi set podcast, teleprompter, dan ruang editing. Santri bertugas sebagai host, kameramen, hingga editor final.',
      'Konten yang dihasilkan mencakup seri motivasi, liputan kegiatan, serta tips belajar. Semua materi melewati proses kurasi agar selaras dengan visi dakwah pesantren.'
    ],
    images: [
      { src: '/images/gallery-4.svg', alt: 'Proses syuting studio media' },
      { src: '/images/gallery-2.svg', alt: 'Tim editing santri' }
    ]
  },
  'karya-batik': {
    slug: 'karya-batik',
    title: 'Ekshibisi Batik Santri Kreatif',
    category: 'Ekskul Kreatif',
    description: 'Pameran batik khas Al Arba\'in dengan motif kaligrafi dan ornamen arsitektur pesantren.',
    heroImage: '/images/gallery-1.svg',
    date: 'April 2024',
    stats: [
      { label: 'Motif dipamerkan', value: '40' },
      { label: 'Santri desainer', value: '55' },
      { label: 'Hari pameran', value: '4' }
    ],
    highlights: [
      'Workshop membatik untuk wali santri',
      'Kolaborasi dengan pengrajin lokal',
      'Penjualan karya untuk beasiswa'
    ],
    paragraphs: [
      'Ekskul batik menanamkan kecintaan budaya melalui proses research motif Islami. Setiap karya dikurasi dewan seni dan dilelang untuk dana beasiswa.',
      'Santri juga belajar membuat katalog digital dan kampanye media sosial guna memperkenalkan batik pesantren ke publik.'
    ],
    images: [
      { src: '/images/gallery-1.svg', alt: 'Display batik santri' },
      { src: '/images/gallery-4.svg', alt: 'Workshop membatik' }
    ]
  },
  'simulasi-astronomi': {
    slug: 'simulasi-astronomi',
    title: 'Simulasi Astronomi & Observatorium Mini',
    category: 'Lab Penelitian',
    description: 'Kegiatan pengamatan hilal, eksperimen spektroskopi sederhana, dan pembuatan peta langit santri.',
    heroImage: '/images/gallery-2.svg',
    date: 'Maret 2024',
    stats: [
      { label: 'Malam observasi', value: '6' },
      { label: 'Instruktur falak', value: '3' },
      { label: 'Makalah ilmiah', value: '10' }
    ],
    highlights: [
      'Kalibrasi teleskop dan kompas digital',
      'Simulasi hilal menggunakan software astronomi',
      'Penulisan makalah falak modern'
    ],
    paragraphs: [
      'Program ini mempertemukan kurikulum falakiyyah klasik dengan perangkat modern. Santri mencatat data pengamatan dan menghubungkannya dengan penentuan awal bulan.',
      'Di akhir kegiatan, mereka mempresentasikan makalah ilmiah sederhana untuk melatih komunikasi sains islami.'
    ],
    images: [
      { src: '/images/gallery-2.svg', alt: 'Observasi hilal' },
      { src: '/images/gallery-3.svg', alt: 'Diskusi hasil pengamatan' }
    ]
  }
};
