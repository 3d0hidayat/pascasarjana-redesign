// =========================================================================
// OBJEK KONTEN UNTUK MULTI-BAHASA
// =========================================================================
const languageContent = {
    id: {
        // Navigasi & Judul Halaman
        pascasarjana_brand: "PASCA<br>SARJANA",
        nav_beranda: "Beranda",
        nav_tentang: "Tentang Kami",
        nav_prodi: "Program Studi",
        nav_akademik: "Akademik",
        nav_berita: "Berita",
        nav_kerjasama: "Kerjasama",
        nav_kegiatan: "Kegiatan",
        nav_media: "Media",
        nav_pengumuman: "Pengumuman",
        nav_sambutan_rektor: "Sambutan Rektor",
        nav_sejarah: "Sejarah",
        nav_visi_misi: "Visi & Misi",
        nav_struktur: "Struktur Organisasi",
        nav_dosen: "Direktori Dosen",
        nav_sambutan_direktur: "Sambutan Direktur",
        nav_profil_prodi: "Profil Prodi S2",
        nav_kalender_akademik: "Kalender Akademik",
        nav_kurikulum: "Kurikulum",
        
        // Halaman Hero
        hero_program: "PROGRAM PASCASARJANA",
        hero_title: "MAGISTER KOMPUTER",
        hero_prodi: "PROGRAM STUDI (S2) SISTEM INFORMASI",
        hero_kampus: "Institut Teknologi & Bisnis (ITB) STIKOM Bali",
        hero_akreditasi_status: 'Akreditasi "BAIK SEKALI"',
        hero_akreditasi_nomor: "Nomor Akreditasi: 027/SK/LAM-INFOKOM/Ak.P/M/V/2025",
        hero_btn_daftar: "Daftar Sekarang",
        hero_btn_brosur: "Unduh Brosur",
        
        // Halaman Beranda
        profil_title: "Profil Kampus Pascasarjana",
        profil_subtitle: "Lihat lebih dekat lingkungan, fasilitas, dan atmosfer akademik di Program Pascasarjana ITB STIKOM Bali.",
        keunggulan_title: "Mengapa Memilih ITB STIKOM Bali?",
        keunggulan_subtitle: "Kami menawarkan kombinasi unik antara keunggulan akademis, fleksibilitas, dan nilai investasi terbaik untuk masa depan karier Anda.",
        tab1_title: "Pendidikan Efisien & Berkualitas",
        tab2_title: "Akses Fleksibel & Terakreditasi",
        tab3_title: "Investasi Pendidikan Terjangkau",
        tab4_title: "Kampus Strategis & Modern",
        tab1_content_title: "Pendidikan Efisien & Berkualitas",
        tab1_content_desc: "Kurikulum relevan industri yang dirancang oleh dosen ahli memungkinkan Anda menyelesaikan studi hanya dalam 1,5 tahun*.",
        tab2_content_title: "Akses Fleksibel & Terakreditasi",
        tab2_content_desc: 'Terbuka untuk semua lulusan S1 dari berbagai jurusan dan telah terakreditasi "BAIK SEKALI" sebagai jaminan mutu pendidikan.',
        tab3_content_title: "Investasi Pendidikan Terjangkau",
        tab3_content_desc: "Biaya studi yang kompetitif dengan tambahan potongan harga khusus untuk alumni ITB STIKOM Bali.",
        tab4_content_title: "Kampus Strategis & Modern",
        tab4_content_desc: "Lokasi kampus yang mudah diakses di pusat kota Denpasar, didukung oleh fasilitas modern untuk menunjang perkuliahan.",
        jaminan_title: "Jaminan Kualitas Pendidikan Unggul",
        jaminan_subtitle: "Program kami telah diakui dan divalidasi oleh lembaga akreditasi nasional (LAM-INFOKOM), memastikan Anda menerima pendidikan dengan standar tertinggi yang relevan dengan industri.",
        jaminan_link: "Lihat Detail Sertifikat <i class='bx bx-right-arrow-alt'></i>",
        testi_title: "Testimoni Alumni",
        testi_subtitle: "Dengarkan pengalaman langsung dari alumni kami yang telah meraih kesuksesan setelah menyelesaikan studi di Program Pascasarjana ITB STIKOM Bali.",
        testi1_content: "Program Magister Sistem Informasi di ITB STIKOM Bali memberikan saya perspektif baru dalam mengelola sistem informasi di perusahaan. Kurikulumnya sangat relevan dengan kebutuhan industri dan dosen-dosennya sangat kompeten.",
        testi2_content: "Pengalaman belajar yang luar biasa! Dengan jadwal kuliah yang fleksibel, saya bisa tetap bekerja sambil menyelesaikan studi. Fasilitasnya lengkap dan lingkungan belajarnya sangat mendukung.",
        testi3_content: "Investasi terbaik untuk karir saya. Ilmu yang didapat sangat aplikatif dan langsung bisa diterapkan di dunia kerja. Networking dengan teman-teman dari berbagai background juga sangat berharga.",
        testi4_content: "Saya sangat merekomendasikan program ini untuk profesional yang ingin meningkatkan kompetensi. Proses pembelajaran yang interaktif dan dukungan dari kampus sangat membantu saya berkembang.",
        info_title: "Informasi Terkini",
        info_subtitle: "Ikuti terus kabar terbaru dan pengumuman penting seputar program pascasarjana ITB STIKOM Bali.",
        info_tab_media: "Media",
        info_tab_pengumuman: "Pengumuman",
        media1_title: "Yudisium XXVI, Bukti Komitmen Pascasarjana",
        media2_title: "Sarasehan Program Pascasarjana T.A Ganjil 2023/2024",
        media3_title: "Diskusi dengan Dinas Pertanian Buleleng",
        info_btn_media: "Lihat Semua Media",
        pengumuman1_title: "Pengumuman Wisuda XXXIV",
        pengumuman2_title: "Pengumuman Yudisium & Wisuda XXXVIII",
        pengumuman3_title: "KALENDER PASCASARJANA SEMESTER GANJIL 2025-2026",
        pengumuman4_title: "JADWAL UJIAN PROPOSAL TESIS & SEMINAR HASIL SEMESTER GENAP 2024-2025",
        info_btn_pengumuman: "Lihat Semua Pengumuman",
        modal_akreditasi_tag: "Akreditasi Resmi LAM-INFOKOM",
        modal_akreditasi_title: "Program Studi S2 Sistem Informasi",
        modal_akreditasi_desc: 'Program Magister kami berkomitmen menyediakan pendidikan unggul yang dibuktikan dengan perolehan akreditasi peringkat <strong>"Baik Sekali"</strong>.',
        modal_akreditasi_poin1: "Diakui secara Nasional",
        modal_akreditasi_poin2: "Kurikulum Berstandar Tinggi",
        modal_akreditasi_poin3: "Lulusan Kompeten & Siap Bersaing",
        modal_akreditasi_btn: "Lihat Sertifikat Penuh",
        
        // Halaman Tentang Kami
        tentang_title: "Tentang Kami",
        tentang_subtitle: "Mengenal lebih dekat terkait Pascasarjana ITB STIKOM Bali",
        sambutan_title: "Sambutan Rektor",
        sambutan_rektor_nama: "Dr. Dadang Hermawan, M.Kom.",
        sambutan_rektor_jabatan: "Rektor ITB STIKOM Bali",
        sambutan_p1: "<strong>Salam STIKOM Bali,</strong><br>Selamat datang di Program Magister Komputer Prodi S2 Sistem Informasi, ITB STIKOM Bali. Kami sangat bangga memperkenalkan program Strata Dua (S2), yaitu Magister Komputer Sistem Informasi, yang merupakan Prodi S2 Sistem Informasi satu-satunya di Bali, dan saat ini memiliki akreditasi Baik oleh Ban-PT. Sesuai visi Institut Teknologi dan Bisnis (ITB) STIKOM Bali yaitu menjadi perguruan tinggi unggulan dan berkualitas Internasional di bidang ilmu pengetahuan, teknologi dan seni...",
        sambutan_p2: "Kurikulum Program Studi S2 Sistem Informasi dirancang khusus untuk memenuhi kebutuhan dunia industri dan akademik yang terus berkembang, dengan empat konsentrasi utama: Cyber Security, Data Science, Enterprise System, dan Medical Informatic, sehingga mampu mewujudkan kualitas lulusan yang memiliki daya saing global secara nasional dan internasional.",
        sambutan_p3: "ITB STIKOM Bali berkomitmen untuk menyediakan pendidikan berkualitas tinggi yang mampu menghasilkan lulusan-lulusan yang kompeten, inovatif, dan siap menghadapi tantangan global. Melalui kurikulum yang relevan dan dosen-dosen berpengalaman, kami berusaha menciptakan lingkungan belajar yang kondusif untuk penelitian dan pengembangan ilmu pengetahuan.",
        sambutan_p4: "Kami percaya bahwa dengan dukungan fasilitas modern dan kolaborasi dengan berbagai industri serta institusi penelitian, mahasiswa akan mendapatkan pengalaman belajar yang komprehensif dan aplikatif. Selain itu, program kami juga menawarkan berbagai potongan biaya dan beasiswa untuk mendukung para mahasiswa dalam meraih cita-cita akademis mereka.",
        sambutan_p5: "Kami mengundang Anda untuk bergabung dengan sivitas akademik kami dan menjadi bagian dari perjalanan transformasi digital di era revolusi industri 5.0. Bersama-sama, mari kita ciptakan inovasi-inovasi baru yang bermanfaat bagi masyarakat dan memajukan ilmu pengetahuan serta teknologi.",
        sambutan_p6: "Terima kasih atas perhatian dan kepercayaan Anda kepada ITB STIKOM Bali. Kami berharap dapat bertemu dan bekerja sama dengan Anda semua di masa mendatang.<br><strong>Salam STIKOM Bali,</strong>",
        btn_read_more: "Baca Selengkapnya",
        btn_read_less: "Baca Lebih Sedikit",
        sejarah_title: "Sejarah Singkat",
        sejarah_subtitle: "Perjalanan dari sebuah gagasan hingga menjadi institusi terdepan di Bali.",
        visi_title: "Visi",
        visi_text: "Menjadi Program Studi Magister Komputer yang unggul dan berdaya saing global dalam bidang teknologi informasi dan bisnis pada tahun 2035.",
        misi_title: "Misi",
        misi_li1: "Menyelenggarakan pendidikan magister yang berkualitas tinggi dan relevan dengan perkembangan industri.",
        misi_li2: "Melaksanakan penelitian inovatif yang memberikan kontribusi pada ilmu pengetahuan dan solusi teknologi.",
        misi_li3: "Mengembangkan kegiatan pengabdian kepada masyarakat berbasis teknologi informasi.",
        misi_li4: "Membangun jaringan kerjasama yang luas dengan industri, pemerintah, dan institusi pendidikan lainnya.",
        struktur_title: "Struktur Organisasi",
        struktur_subtitle: "Dikelola oleh tim yang profesional dan berdedikasi untuk memberikan pelayanan akademik terbaik.",
        dosen_title: "Direktori Dosen",
        dosen_subtitle: "Didukung oleh para akademisi dan praktisi ahli di bidangnya.",


        prodi_title: "Program Studi",
    prodi_subtitle: "Detail Program Magister Sistem Informasi di ITB STIKOM Bali.",
    sambutan_direktur_title: "Sambutan Direktur Pascasarjana",
    sambutan_direktur_nama: "Dr. Dandy Pramana Hostiadi, S.Kom., M.T.",
    sambutan_direktur_jabatan: "Direktur Pascasarjana",
    sambutan_direktur_p1: "<strong>Salam ITB STIKOM Bali, Always The First</strong><br>Program Magister Sistem Informasi ITB STIKOM Bali didirikan dengan tujuan untuk membekali mahasiswa dengan keterampilan dan pengetahuan yang relevan dalam menghadapi tantangan di era digital. Kami menawarkan kurikulum yang komprehensif, mencakup empat konsentrasi utama: Cyber Security, Data Science, Enterprise System, dan Medical Informatics. Setiap konsentrasi dirancang untuk memberikan keahlian yang mendalam dan pemikiran kritis berdasarkan daya analisis yang kuat sesuai dengan kebutuhan industri saat ini dengan pemecahan yang ilmiah logis sesuai methodology yang logis.",
sambutan_direktur_p2: "Kami bangga dengan capaian akreditasi yang telah dicapai, yang mencerminkan komitmen kami dalam menyediakan pendidikan berkualitas tinggi. Program kami tidak hanya fokus pada penguasaan teori, tetapi juga pada pengembangan kemampuan melalui kurikulum yang tepat selaras dengan visi keilmuan pada program studi, melalui pembelajaran berbasis project, penguasaan metodologi penelitian, yang berkolaborasi dengan industri skala nasional dan internasional.",
sambutan_direktur_p3: "Pelaksanaan Tri Darma Perguruan Tinggi dilaksanakan dengan menerapkan 5 pilar seperti kredibel, transparan, akuntabel, tanggung jawab dan adil. Dosen pengajar memiliki spesifikasi keilmuan sesuai bidang ilmu yang didalami dengan fokus penelitian terbagi menjadi empat, yaitu Cyber Security, Medical Informatin, Data Science dan Enterprise System untuk menunjang kegiatan akademik dan menciptakan lulusan yang berkualitas dan kompeten memenuhi KKNI level 8. Kami percaya bahwa setiap lulusan dari Pascasarjana ITB STIKOM Bali akan menjadi profesional yang siap berkontribusi dalam berbagai sektor, baik di tingkat nasional maupun internasional. Dengan semangat inovasi dan dedikasi yang tinggi, kami terus berupaya untuk memberikan pendidikan yang relevan dan berkualitas tinggi.",
sambutan_direktur_p4: "Terima kasih telah mengunjungi laman kami. Kami mengundang Anda untuk mengeksplorasi lebih lanjut tentang program-program kami dan menemukan bagaimana Pascasarjana ITB STIKOM Bali dapat membantu Anda mencapai tujuan karier Anda.<br><strong>Salam ITB STIKOM Bali, Always The First</strong>",

    gelar_lulusan_title: "Gelar Lulusan",
    gelar_lulusan_text: "Magister Komputer (M.Kom)",
    visi_prodi_title: "Visi",
    visi_prodi_text: "Menjadi Program Studi Magister Komputer yang unggul dan berdaya saing global dalam bidang teknologi informasi dan bisnis pada tahun 2035.",
    misi_prodi_title: "Misi",
    tujuan_prodi_title: "Tujuan",
    profil_lulusan_title: "Profil Lulusan",

    // Halaman Beranda (Media & Pengumuman)
        media1_title: "Yudisium XXVI, Bukti Komitmen Pascasarjana",
        media2_title: "Sarasehan Program Pascasarjana T.A Ganjil 2023/2024",
        media3_title: "Diskusi dengan Dinas Pertanian Buleleng",
        pengumuman1_title: "Pengumuman Wisuda XXXIV",
        pengumuman2_title: "Pengumuman Yudisium & Wisuda XXXVIII",
        pengumuman3_title: "KALENDER PASCASARJANA SEMESTER GANJIL 2025-2026",
        pengumuman4_title: "JADWAL UJIAN PROPOSAL TESIS & SEMINAR HASIL SEMESTER GENAP 2024-2025",

        // =========================================================================
        // HALAMAN BERITA (REVISI LENGKAP)
        // =========================================================================
        berita_title: "Berita & Informasi",
        berita_subtitle: "Ikuti perkembangan terbaru dari kegiatan, liputan media, dan pengumuman resmi Program Pascasarjana ITB STIKOM Bali.",
        info_tab_kegiatan: "Kegiatan",
        kegiatan1_title: "Guest Lecture: Network Intrusion & Honeypots",
        kegiatan2_title: "Sarasehan Program Pascasarjana Ganjil 2024/2025",
        kegiatan3_title: "MoA dengan Rajamangala University Thailand",
        kegiatan4_title: "Pengabdian Masyarakat di Desa Binaan",
        kegiatan5_title: "Yudisium Angkatan XXVII",
        kegiatan6_title: "Studi Banding ke Universitas Gadjah Mada",
        
        media1_desc: "ITB STIKOM Bali kembali melahirkan ratusan wisudawan yang siap bersaing di era digital, termasuk lulusan dari program Pascasarjana.",
        media2_desc: "Sebuah pencapaian membanggakan bagi Program Magister Sistem Informasi yang berhasil meningkatkan status akreditasinya.",
        media3_desc: "Mengundang pakar dari Jerman, seminar ini membahas ancaman siber terkini dan strategi pertahanan menggunakan honeypots.",
        btn_read_article: "Baca Selengkapnya",
        btn_load_more: "Muat Lebih Banyak",

        // Halaman Admisi (Revisi Lengkap)
admisi_title: "Admisi Mahasiswa Baru",
admisi_subtitle: "Informasi lengkap mengenai prosedur pendaftaran, biaya studi, dan program beasiswa yang tersedia.",
syarat_title: "Syarat Pendaftaran",
syarat1_text: "Lulus S1/D4 semua Prodi",
syarat2_text: "Mengisi Form Pendaftaran",
syarat3_text: "Membayar Biaya Pendaftaran",
syarat4_text: "Mengisi Dokumen Registrasi",
syarat5_text: "Ijazah S1",
syarat6_text: "KTP",
alur_title: "Alur Pendaftaran Pascasarjana",
alur_start: "Calon Mahasiswa",
alur_path1_title: "Website Pascasarjana",
alur_path1_desc: "Program Magister Program Studi Sistem Informasi ITB STIKOM Bali",
alur_path2_title: "Front Office",
alur_merge: "Pengelola Pasca",
alur_step1_title: "Ujian Masuk",
alur_step1_desc: "Test Potensi Akademik, Tes TOEFL, Tes Wawancara",
alur_step2_title: "Penetapan CaMa Lulus Seleksi",
alur_step3_title: "SK Mahasiswa & Penetapan NIM",
biaya_title: "Biaya & Skema Pendaftaran",
biaya_subtitle: "Kami menyediakan skema pembiayaan yang fleksibel dan berbagai potongan untuk meringankan investasi pendidikan Anda.",
biaya_pendaftaran_title: "Biaya Pendaftaran",
biaya_pendaftaran_jenis: "Biaya Pendaftaran Awal",
potongan_pendaftaran_title: "Potongan Biaya Pendaftaran",
potongan1_title: "Diskon Gelombang I",
potongan1_desc: "Dapatkan Potongan Biaya Pendaftaran sebesar Rp 200.000",
potongan2_title: "Diskon Gelombang II",
potongan2_desc: "Dapatkan Potongan Biaya Pendaftaran sebesar Rp 100.000",
potongan3_title: "Potongan Alumni",
potongan3_desc: "Alumni ITB STIKOM BALI berhak mendapat potongan biaya sebesar Rp 200.000",
skema_title: "Skema Biaya Kuliah",
skema_jenis: "Jenis Biaya",
skema_diawal: "Pembayaran di Muka",
skema_angsur: "Pembayaran Per Semester",
skema_spp: "Biaya Kuliah (4 Semester)",
skema_semester5: "Semester 5 dan selanjutnya <br><small>(Hanya untuk penyusunan Tesis)</small>",
skema_potongan_title: "Skema dan Potongan Tambahan",
skema1_title: "Biaya Inklusif",
skema1_desc: "Biaya sudah termasuk matrikulasi, ujian, dan bimbingan. (Tidak termasuk biaya wisuda)",
skema2_title: "Potongan Pembayaran di Muka (Alumni)",
skema2_desc: "Dapatkan potongan biaya sebesar Rp 2.000.000 untuk pembayaran di muka.",
skema3_title: "Potongan Per Semester (Alumni)",
skema3_desc: "Dapatkan potongan khusus Rp 500.000 untuk setiap pembayaran per semester.",

        // Halaman Kerjasama
        kerjasama_title: "Jaringan Kemitraan Strategis",
        kerjasama_subtitle: "Kami percaya kolaborasi adalah kunci inovasi. Berikut adalah daftar institusi, perusahaan, dan organisasi yang telah bekerjasama dengan kami untuk memajukan pendidikan dan teknologi.",
        featured_title: "Mitra Unggulan & Afiliasi Program",
        featured_inibis: "Inkubator Bisnis (INIBIS)",
        all_partners_title: "Seluruh Mitra Kerjasama",
        filter_all: "Semua (78)",
        filter_pt_int: "PT Internasional",
        filter_pt_nas: "PT Nasional",
        filter_gov: "Pemerintah & Yayasan",
        filter_bumn: "BUMN",
        filter_corp: "Korporat Swasta",
        filter_bank: "Bank",
        filter_school: "SMA/SMK & LPK",
        filter_media: "Media",
        
        // Footer
        footer_cta_title: "Siap Memulai Perjalanan Akademik Anda?",
        footer_cta_desc: "Jadilah bagian dari komunitas intelektual kami dan raih masa depan gemilang.",
        footer_cta_btn: "Daftar Sekarang",
        pascasarjana_brand_footer: "PASCA<br>SARJANA",
        footer_alamat_title: "Alamat Kampus",
        footer_social_title: "Terhubung Dengan Kami"

        
    },
    en: {
        // Navigation & Page Titles
        pascasarjana_brand: "POST<br>GRADUATE",
        nav_beranda: "Home",
        nav_tentang: "About Us",
        nav_prodi: "Study Program",
        nav_akademik: "Academic",
        nav_berita: "News",
        nav_kerjasama: "Partnership",
        nav_kegiatan: "Activities",
        nav_media: "Media",
        nav_pengumuman: "Announcements",
        nav_sambutan_rektor: "Rector's Welcome",
        nav_sejarah: "History",
        nav_visi_misi: "Vision & Mission",
        nav_struktur: "Organizational Structure",
        nav_dosen: "Lecturer Directory",
        nav_sambutan_direktur: "Director's Welcome",
        nav_profil_prodi: "Master's Profile",
        nav_kalender_akademik: "Academic Calendar",
        nav_kurikulum: "Curriculum",

        // Hero Page
        hero_program: "POSTGRADUATE PROGRAM",
        hero_title: "MASTER OF COMPUTER SCIENCE",
        hero_prodi: "MASTER'S (S2) IN INFORMATION SYSTEMS STUDY PROGRAM",
        hero_kampus: "Institute of Technology & Business (ITB) STIKOM Bali",
        hero_akreditasi_status: 'Accredited "EXCELLENT"',
        hero_akreditasi_nomor: "Accreditation Number: 027/SK/LAM-INFOKOM/Ak.P/M/V/2025",
        hero_btn_daftar: "Register Now",
        hero_btn_brosur: "Download Brochure",
        
        // Home Page
        profil_title: "Postgraduate Campus Profile",
        profil_subtitle: "Take a closer look at the environment, facilities, and academic atmosphere at the ITB STIKOM Bali Postgraduate Program.",
        keunggulan_title: "Why Choose ITB STIKOM Bali?",
        keunggulan_subtitle: "We offer a unique combination of academic excellence, flexibility, and the best investment value for your future career.",
        tab1_title: "Efficient & Quality Education",
        tab2_title: "Flexible Access & Accreditation",
        tab3_title: "Affordable Education Investment",
        tab4_title: "Strategic & Modern Campus",
        tab1_content_title: "Efficient & Quality Education",
        tab1_content_desc: "An industry-relevant curriculum designed by expert lecturers allows you to complete your studies in just 1.5 years*.",
        tab2_content_title: "Flexible Access & Accreditation",
        tab2_content_desc: 'Open to all Bachelor\'s degree graduates from various majors and accredited "EXCELLENT" as a guarantee of educational quality.',
        tab3_content_title: "Affordable Education Investment",
        tab3_content_desc: "Competitive tuition fees with special discounts for ITB STIKOM Bali alumni.",
        tab4_content_title: "Strategic & Modern Campus",
        tab4_content_desc: "An easily accessible campus location in the center of Denpasar, supported by modern facilities to support lectures.",
        jaminan_title: "Guarantee of Superior Education Quality",
        jaminan_subtitle: "Our program has been recognized and validated by the national accreditation body (LAM-INFOKOM), ensuring you receive an education with the highest standards relevant to the industry.",
        jaminan_link: "View Certificate Details <i class='bx bx-right-arrow-alt'></i>",
        testi_title: "Alumni Testimonials",
        testi_subtitle: "Hear directly from our alumni who have achieved success after completing their studies at the ITB STIKOM Bali Postgraduate Program.",
        testi1_content: "The Master of Information Systems program at ITB STIKOM Bali gave me a new perspective on managing information systems in the company. The curriculum is very relevant to industry needs and the lecturers are very competent.",
        testi2_content: "An amazing learning experience! With a flexible lecture schedule, I could keep working while completing my studies. The facilities are complete and the learning environment is very supportive.",
        testi3_content: "The best investment for my career. The knowledge gained is very applicable and can be directly implemented in the professional world. Networking with friends from various backgrounds is also very valuable.",
        testi4_content: "I highly recommend this program for professionals who want to improve their competence. The interactive learning process and support from the campus really helped me develop.",
        info_title: "Latest Information",
        info_subtitle: "Stay updated with the latest news and important announcements about the ITB STIKOM Bali postgraduate program.",
        info_tab_media: "Media",
        info_tab_pengumuman: "Announcements",
        media1_title: "Yudisium XXVI, Proof of Postgraduate Commitment",
        media2_title: "Postgraduate Program Seminar for Odd Semester 2023/2024",
        media3_title: "Discussion with the Buleleng Agriculture Agency",
        info_btn_media: "See All Media",
        pengumuman1_title: "Graduation Announcement XXXIV",
        pengumuman2_title: "Yudisium & Graduation Announcement XXXVIII",
        pengumuman3_title: "POSTGRADUATE CALENDAR ODD SEMESTER 2025-2026",
        pengumuman4_title: "THESIS PROPOSAL & SEMINAR EXAM SCHEDULE EVEN SEMESTER 2024-2025",
        info_btn_pengumuman: "See All Announcements",
        modal_akreditasi_tag: "Official Accreditation by LAM-INFOKOM",
        modal_akreditasi_title: "Master's in Information Systems Study Program",
        modal_akreditasi_desc: 'Our Master\'s program is committed to providing superior education, proven by achieving an <strong>"Excellent"</strong> accreditation rating.',
        modal_akreditasi_poin1: "Nationally Recognized",
        modal_akreditasi_poin2: "High-Standard Curriculum",
        modal_akreditasi_poin3: "Competent & Competitive Graduates",
        modal_akreditasi_btn: "View Full Certificate",

        // About Us Page
        tentang_title: "About Us",
        tentang_subtitle: "Get to know more about the Postgraduate Program at ITB STIKOM Bali",
        sambutan_title: "Rector's Welcome",
        sambutan_rektor_nama: "Dr. Dadang Hermawan, M.Kom.",
        sambutan_rektor_jabatan: "Rector of ITB STIKOM Bali",
        sambutan_p1: "<strong>Greetings from STIKOM Bali,</strong><br>Welcome to the Master of Computer Science Program in Information Systems at ITB STIKOM Bali. We are very proud to introduce our Master's (S2) program, the only Master's in Information Systems in Bali, currently accredited 'Good' by BAN-PT. In line with the vision of the Institute of Technology and Business (ITB) STIKOM Bali to become a leading and internationally qualified higher education institution in science, technology, and arts...",
        sambutan_p2: "The curriculum of the Master of Information Systems Program is specifically designed to meet the evolving needs of industry and academia, with four main concentrations: Cyber Security, Data Science, Enterprise System, and Medical Informatics, thus realizing graduate quality that has global competitiveness both nationally and internationally.",
        sambutan_p3: "ITB STIKOM Bali is committed to providing high-quality education that produces competent, innovative, and globally-ready graduates. Through a relevant curriculum and experienced lecturers, we strive to create a conducive learning environment for research and scientific development.",
        sambutan_p4: "We believe that with the support of modern facilities and collaboration with various industries and research institutions, students will gain a comprehensive and applicable learning experience. In addition, our program also offers various tuition fee discounts and scholarships to support students in achieving their academic goals.",
        sambutan_p5: "We invite you to join our academic community and be part of the digital transformation journey in the era of industrial revolution 5.0. Together, let's create new innovations that benefit society and advance science and technology.",
        sambutan_p6: "Thank you for your attention and trust in ITB STIKOM Bali. We look forward to meeting and collaborating with all of you in the future.<br><strong>Greetings from STIKOM Bali,</strong>",
        btn_read_more: "Read More",
        btn_read_less: "Read Less",
        sejarah_title: "Brief History",
        sejarah_subtitle: "The journey from an idea to becoming the leading institution in Bali.",
        visi_title: "Vision",
        visi_text: "To become a superior and globally competitive Master of Computer Science Program in the field of information technology and business by 2035.",
        misi_title: "Mission",
        misi_li1: "Organizing high-quality and industry-relevant master's education.",
        misi_li2: "Conducting innovative research that contributes to science and technological solutions.",
        misi_li3: "Developing community service activities based on information technology.",
        misi_li4: "Building extensive cooperation networks with industry, government, and other educational institutions.",
        struktur_title: "Organizational Structure",
        struktur_subtitle: "Managed by a professional and dedicated team to provide the best academic services.",
        dosen_title: "Lecturer Directory",
        dosen_subtitle: "Supported by expert academics and practitioners in their fields.",

        prodi_title: "Study Program",
    prodi_subtitle: "Details of the Master's Program in Information Systems at ITB STIKOM Bali.",
    sambutan_direktur_title: "Welcome from the Director of Postgraduate Program",
    sambutan_direktur_nama: "Dr. Dandy Pramana Hostiadi, S.Kom., M.T.",
    sambutan_direktur_jabatan: "Director of Postgraduate Program",
    sambutan_direktur_p1: "<strong>Greetings from ITB STIKOM Bali, Always The First</strong><br>The Master of Information Systems Program at ITB STIKOM Bali was established to equip students with relevant skills and knowledge to face the challenges of the digital era. We offer a comprehensive curriculum covering four main concentrations: Cyber Security, Data Science, Enterprise System, and Medical Informatics. Each concentration is designed to provide in-depth expertise and critical thinking based on strong analytical power in line with current industry needs, with logical scientific solutions according to sound methodologies.",
sambutan_direktur_p2: "We are proud of the accreditation we have achieved, which reflects our commitment to providing high-quality education. Our program focuses not only on mastering theory but also on developing skills through a curriculum that is aligned with the scientific vision of the study program, through project-based learning, mastery of research methodologies, and collaboration with national and international industries.",
sambutan_direktur_p3: "The implementation of the Tri Darma of Higher Education is carried out by applying 5 pillars: credible, transparent, accountable, responsible, and fair. The teaching faculty have scientific specializations in their respective fields with research focuses divided into four areas: Cyber Security, Medical Informatics, Data Science, and Enterprise Systems to support academic activities and produce qualified and competent graduates who meet the KKNI level 8 standards. We believe that every graduate from the ITB STIKOM Bali Postgraduate Program will become a professional ready to contribute to various sectors, both nationally and internationally. With a high spirit of innovation and dedication, we continuously strive to provide relevant and high-quality education.",
sambutan_direktur_p4: "Thank you for visiting our page. We invite you to explore more about our programs and discover how the ITB STIKOM Bali Postgraduate Program can help you achieve your career goals.<br><strong>Greetings from ITB STIKOM Bali, Always The First</strong>",
    gelar_lulusan_title: "Graduate Degree",
    gelar_lulusan_text: "Master of Computer Science (M.Kom)",
    visi_prodi_title: "Vision",
    visi_prodi_text: "To become a superior and globally competitive Master of Computer Science Program in the field of information technology and business by 2035.",
    misi_prodi_title: "Mission",
    tujuan_prodi_title: "Objectives",
    profil_lulusan_title: "Graduate Profile",

    // Home Page (Media & Announcements)
        media1_title: "Yudisium XXVI, Proof of Postgraduate Commitment",
        media2_title: "Postgraduate Program Seminar for Odd Semester 2023/2024",
        media3_title: "Discussion with the Buleleng Agriculture Agency",
        pengumuman1_title: "Graduation Announcement XXXIV",
        pengumuman2_title: "Yudisium & Graduation Announcement XXXVIII",
        pengumuman3_title: "POSTGRADUATE CALENDAR ODD SEMESTER 2025-2026",
        pengumuman4_title: "THESIS PROPOSAL & SEMINAR EXAM SCHEDULE EVEN SEMESTER 2024-2025",

        // =========================================================================
        // NEWS PAGE (COMPLETE REVISION)
        // =========================================================================
        berita_title: "News & Information",
        berita_subtitle: "Stay updated with the latest developments from activities, media coverage, and official announcements of the ITB STIKOM Bali Postgraduate Program.",
        info_tab_kegiatan: "Activities",
        kegiatan1_title: "Guest Lecture: Network Intrusion & Honeypots",
        kegiatan2_title: "Postgraduate Program Seminar for Odd Semester 2024/2025",
        kegiatan3_title: "MoA with Rajamangala University Thailand",
        kegiatan4_title: "Community Service in Mentored Village",
        kegiatan5_title: "Graduation Ceremony Batch XXVII",
        kegiatan6_title: "Comparative Study to Gadjah Mada University",

        media1_desc: "ITB STIKOM Bali once again graduates hundreds of alumni ready to compete in the digital era, including those from the Postgraduate program.",
        media2_desc: "A proud achievement for the Master of Information Systems Program, which has successfully upgraded its accreditation status.",
        media3_desc: "Inviting an expert from Germany, this seminar discussed the latest cyber threats and defense strategies using honeypots.",
        btn_read_article: "Read More",
        btn_load_more: "Load More",

        // Admissions Page (Full Revision)
admisi_title: "New Student Admissions",
admisi_subtitle: "Complete information regarding registration procedures, tuition fees, and available scholarship programs.",
syarat_title: "Registration Requirements",
syarat1_title: "Bachelor's Degree Graduate",
syarat2_title: "Fill Registration Form",
syarat3_title: "Attach Registration Documents",
syarat4_title: "Follow Selection Test",
syarat5_title: "Make Payment",
alur_title: "Postgraduate Registration Flow",
alur_start: "Prospective Student",
alur_path1_title: "Postgraduate Website",
alur_path1_desc: "Master's Program in Information Systems ITB STIKOM Bali",
alur_path2_title: "Front Office",
alur_merge: "Postgraduate Admin",
alur_step1_title: "Entrance Exam",
alur_step1_desc: "Academic Potential Test, TOEFL Test, Interview Test",
alur_step2_title: "Selection Result Announcement",
alur_step3_title: "Student Decree & NIM Assignment",
biaya_title: "Fees & Registration Schemes",
biaya_subtitle: "We provide flexible financing schemes and various discounts to ease your educational investment.",
biaya_pendaftaran_title: "Registration Fee",
biaya_pendaftaran_jenis: "Initial Registration Fee",
potongan_pendaftaran_title: "Registration Fee Discounts",
potongan1_title: "First Wave Discount",
potongan1_desc: "Get a Registration Fee discount of IDR 200,000",
potongan2_title: "Second Wave Discount",
potongan2_desc: "Get a Registration Fee discount of IDR 100,000",
potongan3_title: "Alumni Discount",
potongan3_desc: "ITB STIKOM BALI Alumni are entitled to a fee discount of IDR 200,000",
skema_title: "Tuition Fee Scheme",
skema_jenis: "Fee Type",
skema_diawal: "Upfront Payment",
skema_angsur: "Per Semester Payment",
skema_spp: "Tuition Fee (4 Semesters)",
skema_semester5: "5th Semester and beyond <br><small>(For Thesis writing only)</small>",
skema_potongan_title: "Additional Schemes and Discounts",
skema1_title: "Inclusive Fee",
skema1_desc: "The fee includes matriculation, exams, and supervision. (Excludes graduation ceremony fee)",
skema2_title: "Upfront Payment Discount (Alumni)",
skema2_desc: "Get a discount of IDR 2,000,000 for upfront payment.",
skema3_title: "Per Semester Discount (Alumni)",
skema3_desc: "Get a special discount of IDR 500,000 for each per-semester payment.",
        
        // Partnership Page
        kerjasama_title: "Strategic Partnership Network",
        kerjasama_subtitle: "We believe collaboration is the key to innovation. Here is a list of institutions, companies, and organizations that have partnered with us to advance education and technology.",
        featured_title: "Featured Partners & Program Affiliations",
        featured_inibis: "Business Incubator (INIBIS)",
        all_partners_title: "All Partners",
        filter_all: "All (78)",
        filter_pt_int: "Int'l Universities",
        filter_pt_nas: "National Universities",
        filter_gov: "Government & Foundations",
        filter_bumn: "State-Owned Enterprises",
        filter_corp: "Private Corporations",
        filter_bank: "Banking",
        filter_school: "Schools & Institutes",
        filter_media: "Media",

        // Footer
        footer_cta_title: "Ready to Start Your Academic Journey?",
        footer_cta_desc: "Be a part of our intellectual community and achieve a brilliant future.",
        footer_cta_btn: "Register Now",
        pascasarjana_brand_footer: "POST<br>GRADUATE",
        footer_alamat_title: "Campus Address",
        footer_social_title: "Connect With Us"
    }
};

// =========================================================================
// BAGIAN 2: FUNGSI-FUNGSI GLOBAL
// =========================================================================

function setupNavbarScroll() {
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }
}

function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('nav ul');
    if (!hamburger || !navMenu) return;
    const icon = hamburger.querySelector('i');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        icon.classList.toggle('bx-menu');
        icon.classList.toggle('bx-x');
    });
}

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (languageContent[lang] && languageContent[lang][key]) {
            el.innerHTML = languageContent[lang][key];
        }
    });
    document.documentElement.lang = lang;
    
    document.dispatchEvent(new CustomEvent('languageChange', { detail: { lang: lang } }));
}

function setupLanguageSwitcher() {
    const idButtons = document.querySelectorAll('.lang-btn-id');
    const enButtons = document.querySelectorAll('.lang-btn-en');

    function updateActiveButtons(lang) {
        idButtons.forEach(btn => btn.classList.toggle('active', lang === 'id'));
        enButtons.forEach(btn => btn.classList.toggle('active', lang === 'en'));
    }

    function switchLanguage(lang) {
        setLanguage(lang);
        localStorage.setItem('language', lang);
        updateActiveButtons(lang);
    }

    idButtons.forEach(button => button.addEventListener('click', () => switchLanguage('id')));
    enButtons.forEach(button => button.addEventListener('click', () => switchLanguage('en')));

    const savedLanguage = localStorage.getItem('language') || 'id';
    setLanguage(savedLanguage);
    updateActiveButtons(savedLanguage);
}

function setupBackToTopButton() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', () => {
        backToTopBtn.classList.toggle('show', window.scrollY > 300);
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}



// =========================================================================
// FUNGSI UNTUK NAVBAR MAGIC LINE
// =========================================================================
function setupMagicLine() {
    const navList = document.querySelector('.nav-right > ul');
    if (!navList) return;

    const magicLine = navList.querySelector('.magic-line');
    const navItems = navList.querySelectorAll('li:not(.li-language-switcher)');
    if (!magicLine || navItems.length === 0) return;
    
    let activeItem = null;
    if (document.body.classList.contains('beranda-page')) {
        activeItem = navList.querySelector('.nav-beranda');
    } else if (document.body.classList.contains('tentang-page')) {
        activeItem = navList.querySelector('.nav-tentang');
    } else if (document.body.classList.contains('prodi-page')) {
        activeItem = navList.querySelector('.nav-prodi');
    } else if (document.body.classList.contains('akademik-page')) {
        activeItem = navList.querySelector('.nav-akademik');
    } else if (document.body.classList.contains('berita-page')) {
        activeItem = navList.querySelector('.nav-berita');
    } else if (document.body.classList.contains('kerjasama-page')) {
        activeItem = navList.querySelector('.nav-kerjasama');
    }

    function positionLine(target) {
        if (target) {
            magicLine.style.width = `${target.offsetWidth}px`;
            magicLine.style.left = `${target.offsetLeft}px`;
        }
    }

    setTimeout(() => {
        positionLine(activeItem);
    }, 100);

    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            positionLine(item);
        });
    });

    navList.addEventListener('mouseleave', () => {
        positionLine(activeItem);
    });

    window.addEventListener('resize', () => {
        setTimeout(() => {
            positionLine(activeItem);
        }, 100);
    });
}


// =========================================================================
// BAGIAN 3: FUNGSI-FUNGSI SPESIFIK UNTUK SETIAP HALAMAN
// =========================================================================

function setupHeroCanvas() {
    const heroCanvas = document.getElementById('neuron-canvas');
    if (!heroCanvas) return;
    const ctx = heroCanvas.getContext('2d');
    heroCanvas.width = heroCanvas.parentElement.clientWidth;
    heroCanvas.height = heroCanvas.parentElement.clientHeight;
    let particlesArray;
    const mouse = { x: null, y: null, radius: (heroCanvas.height / 80) * (heroCanvas.width / 80) };
    window.addEventListener('mousemove', (event) => {
        let rect = heroCanvas.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
    });
    class Particle {
        constructor(x, y, dirX, dirY, size, color) {
            this.x = x; this.y = y; this.directionX = dirX; this.directionY = dirY;
            this.size = size; this.color = color;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = '#8C9EFF';
            ctx.fill();
        }
        update() {
            if (this.x > heroCanvas.width || this.x < 0) this.directionX = -this.directionX;
            if (this.y > heroCanvas.height || this.y < 0) this.directionY = -this.directionY;
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius + this.size) {
                if (mouse.x < this.x && this.x < heroCanvas.width - this.size * 10) this.x += 5;
                if (mouse.x > this.x && this.x > this.size * 10) this.x -= 5;
                if (mouse.y < this.y && this.y < heroCanvas.height - this.size * 10) this.y += 5;
                if (mouse.y > this.y && this.y > this.size * 10) this.y -= 5;
            }
            this.x += this.directionX;
            this.y += this.directionY;
            this.draw();
        }
    }
    function init() {
        particlesArray = [];
        let numParticles = (heroCanvas.height * heroCanvas.width) / 9000;
        for (let i = 0; i < numParticles; i++) {
            let size = (Math.random() * 2) + 1;
            let x = (Math.random() * ((heroCanvas.width - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((heroCanvas.height - size * 2) - (size * 2)) + size * 2);
            let dirX = (Math.random() * 0.4) - 0.2;
            let dirY = (Math.random() * 0.4) - 0.2;
            particlesArray.push(new Particle(x, y, dirX, dirY, size, '#8C9EFF'));
        }
    }
    function connect() {
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + 
                               ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                if (distance < (heroCanvas.width / 7) * (heroCanvas.height / 7)) {
                    let opacity = 1 - (distance / 20000);
                    ctx.strokeStyle = `rgba(140, 158, 255, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
        particlesArray.forEach(p => p.update());
        connect();
    }
    window.addEventListener('resize', () => {
        heroCanvas.width = heroCanvas.parentElement.clientWidth;
        heroCanvas.height = heroCanvas.parentElement.clientHeight;
        mouse.radius = (heroCanvas.height / 80) * (heroCanvas.width / 80);
        init();
    });
    window.addEventListener('mouseout', () => { mouse.x = undefined; mouse.y = undefined; });
    init();
    animate();
}

function setupModal(buttonId, modalId, closeClass) {
    const openBtn = document.getElementById(buttonId);
    const modalOverlay = document.getElementById(modalId);
    if (!openBtn || !modalOverlay) return;
    const closeBtn = modalOverlay.querySelector(closeClass);
    const openModal = (e) => { e.preventDefault(); modalOverlay.classList.add('active'); };
    const closeModal = () => modalOverlay.classList.remove('active');
    openBtn.addEventListener('click', openModal);
    if(closeBtn) closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
}

function setupTabs(tabButtonsClass, tabPanelsClass, activeClass) {
    const tabs = document.querySelectorAll(tabButtonsClass);
    const panels = document.querySelectorAll(tabPanelsClass);
    if (tabs.length === 0) return;
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(item => item.classList.remove(activeClass));
            tab.classList.add(activeClass);
            const targetId = tab.getAttribute('data-tab');
            panels.forEach(panel => {
                panel.classList.toggle(activeClass, panel.id === `${targetId}-panel` || panel.id === `tab-${targetId}-content`);
            });
        });
    });
}

function setupTestimonialSlider() {
    const track = document.querySelector('.testimonial-track');
    if (!track) return;
    const cards = Array.from(track.children);
    const nextButton = document.getElementById('nextBtn');
    const prevButton = document.getElementById('prevBtn');
    const dotsContainer = document.getElementById('testimonialDots');
    const totalCards = cards.length;
    if (totalCards === 0) return;

    const firstClone = cards[0].cloneNode(true);
    const lastClone = cards[totalCards - 1].cloneNode(true);
    track.appendChild(firstClone);
    track.insertBefore(lastClone, cards[0]);
    let currentIndex = 1;
    let cardWidth = track.parentElement.getBoundingClientRect().width;
    track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;

    for (let i = 0; i < totalCards; i++) {
        const dot = document.createElement('button');
        dot.classList.add('testimonial-dot');
        dot.addEventListener('click', () => moveToSlide(i + 1));
        dotsContainer.appendChild(dot);
    }
    const dots = Array.from(dotsContainer.children);
    const updateDots = () => {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[(currentIndex - 1 + totalCards) % totalCards].classList.add('active');
    };
    updateDots();

    const moveToSlide = (index) => {
        track.style.transition = 'transform 0.5s ease-in-out';
        currentIndex = index;
        track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
        updateDots();
    };

    track.addEventListener('transitionend', () => {
        if (currentIndex === 0) {
            track.style.transition = 'none';
            currentIndex = totalCards;
            track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
        }
        if (currentIndex === totalCards + 1) {
            track.style.transition = 'none';
            currentIndex = 1;
            track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
        }
    });

    nextButton.addEventListener('click', () => moveToSlide(currentIndex + 1));
    prevButton.addEventListener('click', () => moveToSlide(currentIndex - 1));

    window.addEventListener('resize', () => {
        cardWidth = track.parentElement.getBoundingClientRect().width;
        track.style.transition = 'none';
        track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
    });
}


function setupPartnerFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const logoCards = document.querySelectorAll('.logo-card');
    if (filterButtons.length === 0 || logoCards.length === 0) return;
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filterValue = button.getAttribute('data-filter');
            logoCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                const shouldShow = (filterValue === 'semua' || filterValue === cardCategory);
                card.style.display = shouldShow ? 'flex' : 'none';
            });
            AOS.refresh();
        });
    });
}

// =========================================================================
// [REVISI FINAL] FUNGSI ADAPTIF UNTUK TIMELINE DESKTOP & MOBILE
// =========================================================================
function setupInteractiveTimeline() {
    const sejarahSection = document.getElementById('sejarah');
    if (!sejarahSection) return;

    const timelineEvents = [
        { 
            year: "2010", 
            title: "Pendirian Program", 
            description: "Program Pascasarjana Magister Komputer di ITB STIKOM Bali resmi didirikan sebagai jawaban atas meningkatnya kebutuhan tenaga ahli IT tingkat lanjut di era digital.",
            imageUrl: "url('https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071')"
        },
        { 
            year: "2015", 
            title: "Akreditasi Pertama", 
            description: "Meraih akreditasi 'Baik' dari BAN-PT untuk pertama kalinya, membuktikan komitmen kami terhadap kualitas pendidikan yang unggul dan terstandar.",
            imageUrl: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070')"
        },
        { 
            year: "2018", 
            title: "Pengembangan Kurikulum", 
            description: "Melakukan pembaruan kurikulum yang signifikan untuk menyesuaikan dengan tren industri seperti Data Science dan Cyber Security, memastikan relevansi lulusan.",
            imageUrl: "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2069')"
        },
        { 
            year: "2022", 
            title: "Kolaborasi Internasional", 
            description: "Menjalin kerjasama strategis dengan beberapa universitas di Asia Tenggara untuk program pertukaran pelajar dan riset bersama.",
            imageUrl: "url('https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071')"
        },
        { 
            year: "2025", 
            title: "Peringkat Akreditasi 'Baik Sekali'", 
            description: "Berhasil meningkatkan status akreditasi menjadi 'Baik Sekali' dari LAM-INFOKOM, sebuah pencapaian yang mengukuhkan posisi kami sebagai program S2 IT terdepan di Bali.",
            imageUrl: "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2069')"
        }
    ];
    
    // === FUNGSI UNTUK MEMBUAT TIMELINE HORIZONTAL (DESKTOP) ===
    function createHorizontalTimeline() {
        const line = document.getElementById('line');
        const initialText = document.getElementById('initial-text');
        const eventTextContainer = document.getElementById('event-text');
        
        // Cek apakah elemen-elemen penting ada
        if (!line || !initialText || !eventTextContainer) return;

        const eventTitle = eventTextContainer.querySelector('h3');
        const eventDescription = eventTextContainer.querySelector('p');
        const allCircles = [];

        // Kosongkan line dari circle sebelumnya untuk mencegah duplikasi
        line.innerHTML = ''; 

        timelineEvents.forEach((event, i) => {
            const circle = document.createElement('div');
            circle.className = 'circle';
            circle.style.left = `calc(${(i / (timelineEvents.length - 1)) * 100}% - 10px)`;
            
            circle.dataset.title = event.title;
            circle.dataset.description = event.description;
            circle.dataset.year = event.year;
            circle.dataset.imageUrl = event.imageUrl;

            circle.addEventListener('mouseover', () => circle.classList.add('hover'));
            circle.addEventListener('mouseout', () => circle.classList.remove('hover'));

            circle.addEventListener('click', () => {
                if (circle.classList.contains('active')) return;
                document.querySelectorAll('.circle.active').forEach(c => c.classList.remove('active'));
                circle.classList.add('active');
                sejarahSection.style.backgroundImage = circle.dataset.imageUrl;
                initialText.classList.add('hidden');
                eventTextContainer.classList.add('hidden');
                setTimeout(() => {
                    eventTitle.innerHTML = `<span class="timeline-year">${event.year}:</span> ${event.title}`;
                    eventDescription.textContent = event.description;
                    eventTextContainer.classList.remove('hidden');
                }, 250);
            });

            line.appendChild(circle);
            allCircles.push(circle);
        });

        if (allCircles.length > 0) {
            sejarahSection.style.backgroundImage = "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2069')";
            eventTextContainer.classList.add('hidden');
            initialText.classList.remove('hidden');
        }
    }

    // === FUNGSI UNTUK MEMBUAT TIMELINE VERTIKAL (MOBILE) ===
    function createVerticalTimeline() {
        const verticalContainer = document.getElementById('vertical-timeline-container');
        if (!verticalContainer) return;

        // Kosongkan kontainer untuk mencegah duplikasi konten
        verticalContainer.innerHTML = ''; 

        // Tambahkan judul "Sejarah Singkat" untuk mobile
        verticalContainer.innerHTML += `
            <h2 class="section-title" data-aos="fade-up">Sejarah Singkat</h2>
            <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">Perjalanan dari sebuah gagasan hingga menjadi institusi terdepan di Bali.</p>
        `;

        // Tambahkan setiap event sejarah
        timelineEvents.forEach((event, i) => {
            const item = document.createElement('div');
            item.className = 'vertical-timeline-item';
            item.setAttribute('data-aos', 'fade-up');
            item.setAttribute('data-aos-delay', i * 100);

            item.innerHTML = `
                <div class="timeline-item-dot"></div>
                <div class="timeline-item-content">
                    <h3><span class="timeline-year">${event.year}</span> - ${event.title}</h3>
                    <p>${event.description}</p>
                </div>
            `;
            verticalContainer.appendChild(item);
        });
    }

    // === KONTROL UTAMA ===
    // Buat konten untuk KEDUA versi timeline. 
    // CSS akan secara otomatis menampilkan yang benar berdasarkan ukuran layar.
    createHorizontalTimeline();
    createVerticalTimeline();
}

// =========================================================================
// FUNGSI UNTUK VISI & MISI INTERAKTIF
// =========================================================================
function setupVisiMisiTabs() {
    const tabContainer = document.querySelector('.vm-tabs');
    if (!tabContainer) return;

    const tabButtons = tabContainer.querySelectorAll('.vm-tab-button');
    const contentArea = document.querySelector('.vm-content-area');

    // Set background awal
    const initialActiveTab = tabContainer.querySelector('.vm-tab-button.active');
    if(initialActiveTab) {
        contentArea.style.backgroundImage = `url('${initialActiveTab.dataset.bg}')`;
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Hentikan jika tab sudah aktif
            if (button.classList.contains('active')) return;

            // Update tombol tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Update background
            const newBg = button.dataset.bg;
            contentArea.style.backgroundImage = `url('${newBg}')`;

            // Update panel konten
            const targetPanelId = button.dataset.tab + '-panel';
            const allPanels = document.querySelectorAll('.vm-panel');
            allPanels.forEach(panel => panel.classList.remove('active'));
            document.getElementById(targetPanelId).classList.add('active');
        });
    });
}

// =========================================================================
// FUNGSI UNTUK VISI & MISI (KLIK-REVEAL)
// =========================================================================
function setupVisiMisiReveal() {
    const cards = document.querySelectorAll('.vm-card');
    if (!cards) return;

    cards.forEach(card => {
        card.addEventListener('click', function() {
            // "this" merujuk pada elemen kartu yang diklik
            this.classList.toggle('active');
        });
    });
}

// =========================================================================
// FUNGSI UNTUK MEMBUAT DIREKTORI DOSEN SECARA DINAMIS
// =========================================================================
function populateLecturerDirectory() {
    // Anda bisa mengganti data ini dengan mudah di masa depan
    const lecturersData = [
        {
            name: "Prof. Dr. I Made Bandem",
            imageUrl: "img/2.jpg",
            scholarUrl: "https://scholar.google.com/citations?user=xxxxxx"
        },
        {
            name: "Dr. Dadang Hermawan",
            imageUrl: "img/rektor.jpg",
            scholarUrl: "https://scholar.google.com/citations?hl=id&user=o5p089MAAAAJ"
        },
        {
            name: "Dr. Roy Rudolf Huizen, S.T., M.T.",
            imageUrl: "img/wk1.jpg",
            scholarUrl: "https://scholar.google.com/citations?user=HGeM9xwAAAAJ&hl=id&oi=ao"
        },
        {
            name: "Dr. Dandy Pramana Hostiadi, S.Kom., M.T.",
            imageUrl: "img/direktur.jpg",
            scholarUrl: "https://scholar.google.com/citations?user=igzQmigAAAAJ&hl=id&oi=ao"
        },
        {
            name: "Dr. Evi Triandini, S.P., M.Eng.",
            imageUrl: "img/4.jpg",
            scholarUrl: "https://scholar.google.com/citations?user=cSku1GYAAAAJ&hl=id&oi=ao"
        },
        {
            name: "Dr. Gede Angga Pradipta, S.T., M.Eng.",
            imageUrl: "img/5.jpg",
            scholarUrl: "https://scholar.google.com/citations?user=0icLc7QAAAAJ&hl=id&oi=ao"
        },
        {
            name: "Dr. Putri Srinadi, S.E, M.M.Kom.",
            imageUrl: "img/7.jpg",
            scholarUrl: "https://scholar.google.com/citations?user=98py7mQAAAAJ&hl=id&oi=ao"
        }
    ];

    const dosenGrid = document.querySelector('.dosen-grid');
    if (!dosenGrid) return; // Hentikan jika grid tidak ditemukan

    dosenGrid.innerHTML = ''; // Kosongkan grid sebelum diisi

    lecturersData.forEach(lecturer => {
        const card = document.createElement('a');
        card.href = lecturer.scholarUrl;
        card.target = "_blank"; // Buka di tab baru
        card.rel = "noopener noreferrer";
        card.className = "dosen-card";
        card.setAttribute('data-aos', 'fade-up');

        card.innerHTML = `
            <img src="${lecturer.imageUrl}" alt="Foto ${lecturer.name}" class="dosen-img">
            <div class="dosen-overlay">
                <h4 class="dosen-name">${lecturer.name}</h4>
            </div>
        `;

        dosenGrid.appendChild(card);
    });
}

// Tambahkan di dalam event listener DOMContentLoaded di paling bawah file script.js
document.addEventListener('DOMContentLoaded', function() {
    // ... (kode Anda yang sudah ada seperti AOS.init(), setupNavbarScroll(), dll.)

    // TAMBAHKAN FUNGSI BARU INI
    function setupInteractiveStruktur() {
        const persons = document.querySelectorAll('.person-container');
        if (!persons.length) return;

        persons.forEach(person => {
            person.addEventListener('click', () => {
                // Cek apakah yang diklik sudah aktif
                const isAlreadyActive = person.classList.contains('active');

                // Hapus class 'active' dari semua elemen dulu
                persons.forEach(p => p.classList.remove('active'));

                // Jika yang diklik tadi belum aktif, tambahkan class 'active'
                if (!isAlreadyActive) {
                    person.classList.add('active');
                }
            });
        });
    }

    // PANGGIL FUNGSI BARU INI
    setupInteractiveStruktur();
});


// GANTI FUNGSI setupSambutanReadMore() YANG LAMA DENGAN INI:
function setupAllReadMores() {
    // Cari semua tombol dengan kelas .read-more-btn
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    if (!readMoreButtons.length) return;

    readMoreButtons.forEach(button => {
        // Cari elemen .sambutan-full-text yang merupakan "saudara" dari tombol ini
        const parent = button.parentElement;
        const fullText = parent.querySelector('.sambutan-full-text');

        if (!fullText) return;

        const updateButtonText = () => {
            const lang = localStorage.getItem('language') || 'id';
            const isOpen = fullText.classList.contains('open');
            const text = isOpen ? languageContent[lang]['btn_read_less'] : languageContent[lang]['btn_read_more'];
            const icon = isOpen ? "<i class='bx bx-chevron-up'></i>" : "<i class='bx bx-chevron-down'></i>";
            button.innerHTML = `${text} ${icon}`;
        };

        button.addEventListener('click', () => {
            fullText.classList.toggle('open');
            button.classList.toggle('open');
            updateButtonText();
        });

        // Pastikan teks tombol di-update saat bahasa berubah
        document.addEventListener('languageChange', updateButtonText);
        // Set teks awal saat halaman dimuat
        updateButtonText();
    });
}

// GANTI FUNGSI setupMovingTab() YANG LAMA DENGAN INI
function setupMovingTab() {
    const tabContainer = document.querySelector('.prodi-vertical-tabs');
    if (!tabContainer) return;

    const tabs = tabContainer.querySelectorAll('.prodi-tab-button');
    const indicator = tabContainer.querySelector('.active-tab-indicator');
    const isMobile = () => window.innerWidth <= 992;

    function moveIndicator(target) {
        if (!indicator || !target) return;
        
        if (isMobile()) {
            // Logika untuk Tampilan Horizontal (Mobile)
            const containerRect = tabContainer.getBoundingClientRect();
            const targetRect = target.getBoundingClientRect();
            const scrollLeft = tabContainer.scrollLeft;
            indicator.style.width = `${targetRect.width}px`;
            indicator.style.transform = `translateX(${targetRect.left - containerRect.left + scrollLeft}px)`;
        } else {
            // Logika untuk Tampilan Vertikal (Desktop)
            indicator.style.width = `calc(100% - 30px)`; // Reset lebar jika dari mobile
            indicator.style.transform = `translateY(${target.offsetTop - tabContainer.firstElementChild.offsetTop}px)`;
        }
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            if (tab.classList.contains('active')) return;

            tabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.prodi-panel').forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const targetPanel = document.getElementById(`${tab.dataset.tab}-panel`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
            moveIndicator(tab);
        });
    });

    function initializeIndicator() {
        const activeTab = tabContainer.querySelector('.prodi-tab-button.active');
        moveIndicator(activeTab);
    }
    
    // Inisialisasi setelah sedikit delay agar layout stabil
    setTimeout(initializeIndicator, 200);

    // Atur ulang posisi saat ukuran window berubah
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(initializeIndicator, 250);
    });
}

// =========================================================================
// FUNGSI UNTUK PROFIL PRODI AKORDEON (DESAIN BARU)
// =========================================================================
function setupProdiAccordion() {
    const accordionItems = document.querySelectorAll('.prodi-accordion .accordion-item');
    if (!accordionItems.length) return;

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Tutup semua item lain
            accordionItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Jika item yang diklik tidak aktif sebelumnya, buka item tersebut
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// =========================================================================
// FUNGSI UNTUK TOMBOL "MUAT LEBIH BANYAK"
// =========================================================================
function setupLoadMore(panelId, itemSelector, initialCount, loadCount) {
    const panel = document.querySelector(panelId);
    if (!panel) return;

    const items = panel.querySelectorAll(itemSelector);
    const loadMoreBtn = panel.querySelector('.load-more-btn');
    let currentlyShown = initialCount;

    if (items.length <= initialCount) {
        if (loadMoreBtn) loadMoreBtn.style.display = 'none';
        return;
    }
    
    // Sembunyikan item yang berlebih di awal
    items.forEach((item, index) => {
        if (index >= initialCount) {
            item.style.display = 'none';
        }
    });

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            const nextShown = currentlyShown + loadCount;
            
            for (let i = currentlyShown; i < nextShown && i < items.length; i++) {
                items[i].style.display = 'block'; // atau 'flex' tergantung itemnya
                // Menambahkan AOS-init secara manual agar animasi fade-up tetap berjalan
                items[i].classList.add('aos-init', 'aos-animate'); 
            }
            
            currentlyShown = nextShown;

            if (currentlyShown >= items.length) {
                loadMoreBtn.style.display = 'none';
            }
        });
    }
}

// Terakhir, pastikan fungsi baru ini dipanggil di bagian paling bawah file
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({ duration: 800, once: true });

    // Panggil semua fungsi setup global
    setupNavbarScroll();
    setupHamburgerMenu();
    setupLanguageSwitcher();
    setupBackToTopButton();
    setupMagicLine();

    // Panggil fungsi setup spesifik halaman
    setupHeroCanvas();
    setupModal('brosur-btn', 'brosur-modal', '.close-button');
    setupModal('open-akreditasi-modal-text', 'akreditasi-modal-overlay', '.akreditasi-close-button');
    setupTabs('.tab-button', '.konten-panel', 'active');
    setupTabs('.info-tab-button', '.info-panel', 'active');
    setupTestimonialSlider();
    setupAllReadMores(); // Panggil fungsi baru di sini, ganti yang lama
    setupPartnerFilter();
    setupInteractiveTimeline();
    setupVisiMisiTabs();
    setupVisiMisiReveal();
    populateLecturerDirectory();
    setupProdiAccordion(); // Panggil fungsi baru di sini
    setupLoadMore('#kegiatan-panel', '.kegiatan-card', 6, 3); // Tampilkan 6, muat 3 per klik
    setupLoadMore('#media-panel', '.media-card', 3, 3);       // Tampilkan 3, muat 3 per klik
    setupLoadMore('#pengumuman-panel', '.pengumuman-item', 4, 4); // Tampilkan 4, muat 4 per klik
});
