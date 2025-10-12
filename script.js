// --- Objek Konten Bahasa ---
const languageContent = {
    id: {
        // Navigasi
        pascasarjana_brand: "PASCA<br>SARJANA",
        nav_beranda: "Beranda",
        nav_tentang: "Tentang Kami",
        nav_prodi: "Program Studi",
        nav_akademik: "Akademik",
        nav_berita: "Berita",
        nav_kerjasama: "Kerjasama",
        // Hero
        hero_program: "PROGRAM PASCASARJANA",
        hero_title: "MAGISTER KOMPUTER",
        hero_prodi: "PROGRAM STUDI (S2) SISTEM INFORMASI",
        hero_kampus: "Institut Teknologi & Bisnis (ITB) STIKOM Bali",
        hero_akreditasi_status: 'Akreditasi "BAIK SEKALI"',
        hero_akreditasi_nomor: "Nomor Akreditasi: 027/SK/LAM-INFOKOM/Ak.P/M/V/2025",
        hero_btn_daftar: "Daftar Sekarang",
        hero_btn_brosur: "Unduh Brosur",
        // Profil Kampus
        profil_title: "Profil Kampus Pascasarjana",
        profil_subtitle: "Lihat lebih dekat lingkungan, fasilitas, dan atmosfer akademik di Program Pascasarjana ITB STIKOM Bali.",
        // Keunggulan
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
        // Jaminan Kualitas
        jaminan_title: "Jaminan Kualitas Pendidikan Unggul",
        jaminan_subtitle: "Program kami telah diakui dan divalidasi oleh lembaga akreditasi nasional (LAM-INFOKOM), memastikan Anda menerima pendidikan dengan standar tertinggi yang relevan dengan industri.",
        jaminan_link: "Lihat Detail Sertifikat <i class='bx bx-right-arrow-alt'></i>",
        // Testimoni
        testi_title: "Testimoni Alumni",
        testi_subtitle: "Dengarkan pengalaman langsung dari alumni kami yang telah meraih kesuksesan setelah menyelesaikan studi di Program Pascasarjana ITB STIKOM Bali.",
        testi1_content: "Program Magister Sistem Informasi di ITB STIKOM Bali memberikan saya perspektif baru dalam mengelola sistem informasi di perusahaan. Kurikulumnya sangat relevan dengan kebutuhan industri dan dosen-dosennya sangat kompeten.",
        testi2_content: "Pengalaman belajar yang luar biasa! Dengan jadwal kuliah yang fleksibel, saya bisa tetap bekerja sambil menyelesaikan studi. Fasilitasnya lengkap dan lingkungan belajarnya sangat mendukung.",
        testi3_content: "Investasi terbaik untuk karir saya. Ilmu yang didapat sangat aplikatif dan langsung bisa diterapkan di dunia kerja. Networking dengan teman-teman dari berbagai background juga sangat berharga.",
        testi4_content: "Saya sangat merekomendasikan program ini untuk profesional yang ingin meningkatkan kompetensi. Proses pembelajaran yang interaktif dan dukungan dari kampus sangat membantu saya berkembang.",
        // Info Terkini
        info_title: "Informasi Terkini",
        info_subtitle: "Ikuti terus kabar terbaru dan pengumuman penting seputar program pascasarjana ITB STIKOM Bali.",
        info_tab_media: "Media",
        info_tab_pengumuman: "Pengumuman",
        media1_title: "Yudisium XXVI, Bukti Komitmen Pascasarjana",
        media1_desc: "Yudisium bukan akhir, tapi awal dari perjalanan baru. Selamat untuk 14 mahasiswa...",
        media2_title: "Sarasehan Program Pascasarjana T.A Ganjil 2023/2024",
        media2_desc: "Throwback ke momen seru sarasehan kemarin. Diskusi hangat, ide-ide segar...",
        media3_title: "Diskusi dengan Dinas Pertanian Buleleng",
        media3_desc: "Kolaborasi Riset Teknologi untuk Pertanian Berkelanjutan...",
        info_btn_media: "Lihat Semua Media",
        pengumuman1_title: "Pengumuman Wisuda XXXIV",
        pengumuman2_title: "Pengumuman Yudisium & Wisuda XXXVIII",
        pengumuman3_title: "KALENDER PASCASARJANA SEMESTER GANJIL 2025-2026",
        pengumuman4_title: "JADWAL UJIAN PROPOSAL TESIS & SEMINAR HASIL SEMESTER GENAP 2024-2025",
        info_btn_pengumuman: "Lihat Semua Pengumuman",
        // Modal Akreditasi
        modal_akreditasi_tag: "Akreditasi Resmi LAM-INFOKOM",
        modal_akreditasi_title: "Program Studi S2 Sistem Informasi",
        modal_akreditasi_desc: 'Program Magister kami berkomitmen menyediakan pendidikan unggul yang dibuktikan dengan perolehan akreditasi peringkat <strong>"Baik Sekali"</strong>.',
        modal_akreditasi_poin1: "Diakui secara Nasional",
        modal_akreditasi_poin2: "Kurikulum Berstandar Tinggi",
        modal_akreditasi_poin3: "Lulusan Kompeten & Siap Bersaing",
        modal_akreditasi_btn: "Lihat Sertifikat Penuh",
        // Footer
        footer_cta_title: "Siap Memulai Perjalanan Akademik Anda?",
        footer_cta_desc: "Jadilah bagian dari komunitas intelektual kami dan raih masa depan gemilang.",
        footer_cta_btn: "Daftar Sekarang",
        pascasarjana_brand_footer: "PASCA<br>SARJANA",
        footer_alamat_title: "Alamat Kampus",
        footer_social_title: "Terhubung Dengan Kami"
    },
    en: {
        // Navigation
        pascasarjana_brand: "POST<br>GRADUATE",
        nav_beranda: "Home",
        nav_tentang: "About Us",
        nav_prodi: "Study Program",
        nav_akademik: "Academic",
        nav_berita: "News",
        nav_kerjasama: "Partnership",
        // Hero
        hero_program: "POSTGRADUATE PROGRAM",
        hero_title: "MASTER OF COMPUTER SCIENCE",
        hero_prodi: "MASTER'S (S2) IN INFORMATION SYSTEMS STUDY PROGRAM",
        hero_kampus: "Institute of Technology & Business (ITB) STIKOM Bali",
        hero_akreditasi_status: 'Accredited "EXCELLENT"',
        hero_akreditasi_nomor: "Accreditation Number: 027/SK/LAM-INFOKOM/Ak.P/M/V/2025",
        hero_btn_daftar: "Register Now",
        hero_btn_brosur: "Download Brochure",
        // Campus Profile
        profil_title: "Postgraduate Campus Profile",
        profil_subtitle: "Take a closer look at the environment, facilities, and academic atmosphere at the ITB STIKOM Bali Postgraduate Program.",
        // Advantages
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
        // Quality Assurance
        jaminan_title: "Guarantee of Superior Education Quality",
        jaminan_subtitle: "Our program has been recognized and validated by the national accreditation body (LAM-INFOKOM), ensuring you receive an education with the highest standards relevant to the industry.",
        jaminan_link: "View Certificate Details <i class='bx bx-right-arrow-alt'></i>",
        // Testimonials
        testi_title: "Alumni Testimonials",
        testi_subtitle: "Hear directly from our alumni who have achieved success after completing their studies at the ITB STIKOM Bali Postgraduate Program.",
        testi1_content: "The Master of Information Systems program at ITB STIKOM Bali gave me a new perspective on managing information systems in the company. The curriculum is very relevant to industry needs and the lecturers are very competent.",
        testi2_content: "An amazing learning experience! With a flexible lecture schedule, I could keep working while completing my studies. The facilities are complete and the learning environment is very supportive.",
        testi3_content: "The best investment for my career. The knowledge gained is very applicable and can be directly implemented in the professional world. Networking with friends from various backgrounds is also very valuable.",
        testi4_content: "I highly recommend this program for professionals who want to improve their competence. The interactive learning process and support from the campus really helped me develop.",
        // Latest Info
        info_title: "Latest Information",
        info_subtitle: "Stay updated with the latest news and important announcements about the ITB STIKOM Bali postgraduate program.",
        info_tab_media: "Media",
        info_tab_pengumuman: "Announcements",
        media1_title: "Yudisium XXVI, Proof of Postgraduate Commitment",
        media1_desc: "Yudisium is not the end, but the beginning of a new journey. Congratulations to the 14 students...",
        media2_title: "Postgraduate Program Seminar for Odd Semester 2023/2024",
        media2_desc: "Throwback to the exciting moments of yesterday's seminar. Warm discussions, fresh ideas...",
        media3_title: "Discussion with the Buleleng Agriculture Agency",
        media3_desc: "Research and Technology Collaboration for Sustainable Agriculture...",
        info_btn_media: "See All Media",
        pengumuman1_title: "Graduation Announcement XXXIV",
        pengumuman2_title: "Yudisium & Graduation Announcement XXXVIII",
        pengumuman3_title: "POSTGRADUATE CALENDAR ODD SEMESTER 2025-2026",
        pengumuman4_title: "THESIS PROPOSAL & SEMINAR EXAM SCHEDULE EVEN SEMESTER 2024-2025",
        info_btn_pengumuman: "See All Announcements",
        // Accreditation Modal
        modal_akreditasi_tag: "Official Accreditation by LAM-INFOKOM",
        modal_akreditasi_title: "Master's in Information Systems Study Program",
        modal_akreditasi_desc: 'Our Master\'s program is committed to providing superior education, proven by achieving an <strong>"Excellent"</strong> accreditation rating.',
        modal_akreditasi_poin1: "Nationally Recognized",
        modal_akreditasi_poin2: "High-Standard Curriculum",
        modal_akreditasi_poin3: "Competent & Competitive Graduates",
        modal_akreditasi_btn: "View Full Certificate",
        // Footer
        footer_cta_title: "Ready to Start Your Academic Journey?",
        footer_cta_desc: "Be a part of our intellectual community and achieve a brilliant future.",
        footer_cta_btn: "Register Now",
        pascasarjana_brand_footer: "POST<br>GRADUATE",
        footer_alamat_title: "Campus Address",
        footer_social_title: "Connect With Us"
    }
};


// --- 1. Script untuk Navbar Scroll Effect ---
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if(header) {
        header.classList.toggle('scrolled', window.scrollY > 50);
    }
});

// --- 2. Script untuk Animasi Neuron di Hero Section ---
const heroCanvas = document.getElementById('neuron-canvas');
if (heroCanvas) {
    const ctx = heroCanvas.getContext('2d');
    let particlesArray;
    heroCanvas.width = heroCanvas.parentElement.clientWidth;
    heroCanvas.height = heroCanvas.parentElement.clientHeight;
    const mouse = { x: null, y: null, radius: (heroCanvas.height / 80) * (heroCanvas.width / 80) };
    window.addEventListener('mousemove', function(event) {
        let rect = heroCanvas.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
    });
    class Particle {
        constructor(x, y, directionX, directionY, size, color) { this.x = x; this.y = y; this.directionX = directionX; this.directionY = directionY; this.size = size; this.color = color; }
        draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false); ctx.fillStyle = '#8C9EFF'; ctx.fill(); }
        update() { if (this.x > heroCanvas.width || this.x < 0) { this.directionX = -this.directionX; } if (this.y > heroCanvas.height || this.y < 0) { this.directionY = -this.directionY; } let dx = mouse.x - this.x; let dy = mouse.y - this.y; let distance = Math.sqrt(dx * dx + dy * dy); if (distance < mouse.radius + this.size) { if (mouse.x < this.x && this.x < heroCanvas.width - this.size * 10) { this.x += 5; } if (mouse.x > this.x && this.x > this.size * 10) { this.x -= 5; } if (mouse.y < this.y && this.y < heroCanvas.height - this.size * 10) { this.y += 5; } if (mouse.y > this.y && this.y > this.size * 10) { this.y -= 5; } } this.x += this.directionX; this.y += this.directionY; this.draw(); }
    }
    function init() { particlesArray = []; let numberOfParticles = (heroCanvas.height * heroCanvas.width) / 9000; for (let i = 0; i < numberOfParticles; i++) { let size = (Math.random() * 2) + 1; let x = (Math.random() * ((heroCanvas.width - size * 2) - (size * 2)) + size * 2); let y = (Math.random() * ((heroCanvas.height - size * 2) - (size * 2)) + size * 2); let directionX = (Math.random() * 0.4) - 0.2; let directionY = (Math.random() * 0.4) - 0.2; particlesArray.push(new Particle(x, y, directionX, directionY, size, '#8C9EFF')); } }
    function connect() { let opacityValue = 1; for (let a = 0; a < particlesArray.length; a++) { for (let b = a; b < particlesArray.length; b++) { let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y)); if (distance < (heroCanvas.width / 7) * (heroCanvas.height / 7)) { opacityValue = 1 - (distance / 20000); ctx.strokeStyle = 'rgba(140, 158, 255,' + opacityValue + ')'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(particlesArray[a].x, particlesArray[a].y); ctx.lineTo(particlesArray[b].x, particlesArray[b].y); ctx.stroke(); } } } }
    function animate() { requestAnimationFrame(animate); ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height); for (let i = 0; i < particlesArray.length; i++) { particlesArray[i].update(); } connect(); }
    window.addEventListener('resize', function() { heroCanvas.width = heroCanvas.parentElement.clientWidth; heroCanvas.height = heroCanvas.parentElement.clientHeight; mouse.radius = (heroCanvas.height / 80) * (heroCanvas.width / 80); init(); });
    window.addEventListener('mouseout', function() { mouse.x = undefined; mouse.y = undefined; })
    init();
    animate();
}

// --- 3. Memisahkan fungsi-fungsi agar lebih rapi ---
function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('nav ul');
    const icon = hamburger.querySelector('i');
    if (!hamburger || !navMenu) return;
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('bx-menu');
            icon.classList.add('bx-x');
        } else {
            icon.classList.remove('bx-x');
            icon.classList.add('bx-menu');
        }
    });
}

// --- BARU: Fungsi untuk Mengatur Bahasa ---
function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (languageContent[lang] && languageContent[lang][key]) {
            el.innerHTML = languageContent[lang][key];
        }
    });
     // Ganti atribut lang pada tag html
    document.documentElement.lang = lang;
}

// --- BARU: Fungsi Setup untuk Pilihan Bahasa ---
function setupLanguageSwitcher() {
    const langIdBtn = document.getElementById('lang-id');
    const langEnBtn = document.getElementById('lang-en');

    langIdBtn.addEventListener('click', () => {
        setLanguage('id');
        localStorage.setItem('language', 'id');
        langIdBtn.classList.add('active');
        langEnBtn.classList.remove('active');
    });

    langEnBtn.addEventListener('click', () => {
        setLanguage('en');
        localStorage.setItem('language', 'en');
        langEnBtn.classList.add('active');
        langIdBtn.classList.remove('active');
    });

    // Cek bahasa yang tersimpan di localStorage saat halaman dimuat
    const savedLanguage = localStorage.getItem('language') || 'id'; // Default ke 'id'
    setLanguage(savedLanguage);
    if (savedLanguage === 'en') {
        langEnBtn.classList.add('active');
        langIdBtn.classList.remove('active');
    } else {
        langIdBtn.classList.add('active');
        langEnBtn.classList.remove('active');
    }
}


function setupBrosurModal() {
    const modalOverlay = document.getElementById('brosur-modal');
    const brosurBtn = document.getElementById('brosur-btn');
    const closeBtn = document.querySelector('.close-button');
    if (!brosurBtn || !modalOverlay || !closeBtn) return;
    brosurBtn.addEventListener('click', e => { e.preventDefault(); modalOverlay.classList.add('active'); });
    closeBtn.addEventListener('click', () => modalOverlay.classList.remove('active'));
    modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) { modalOverlay.classList.remove('active'); } });
}

function setupKeunggulanTabs() {
    const tabs = document.querySelectorAll('.tab-button');
    if (tabs.length === 0) return;
    const contentPanels = document.querySelectorAll('.konten-panel');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabNumber = tab.getAttribute('data-tab');
            const targetPanel = document.getElementById(`tab-${tabNumber}-content`);
            tabs.forEach(item => item.classList.remove('active'));
            contentPanels.forEach(item => item.classList.remove('active'));
            tab.classList.add('active');
            if(targetPanel) targetPanel.classList.add('active');
        });
    });
}

function setupInfoTerkiniTabs() {
    const tabButtons = document.querySelectorAll('.info-tab-button');
    const contentPanels = document.querySelectorAll('.info-panel');
    if (tabButtons.length === 0) return;
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            tabButtons.forEach(btn => btn.classList.remove('active'));
            contentPanels.forEach(panel => panel.classList.remove('active'));
            button.classList.add('active');
            const targetPanel = document.getElementById(`${targetTab}-panel`);
            if (targetPanel) targetPanel.classList.add('active');
        });
    });
}

function setupAkreditasiModal() {
    const modalOverlay = document.getElementById('akreditasi-modal-overlay');
    const openBtn = document.getElementById('open-akreditasi-modal-text'); 
    const closeBtn = document.querySelector('.akreditasi-close-button');
    if (!modalOverlay || !openBtn || !closeBtn) return;
    const openModal = (e) => { e.preventDefault(); modalOverlay.classList.add('active'); };
    const closeModal = () => { modalOverlay.classList.remove('active'); };
    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) { closeModal(); } });
}

function setupTestimonialSlider() {
    const sliderWrapper = document.querySelector('.testimonial-wrapper');
    const track = document.querySelector('.testimonial-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('testimonialDots');

    if (!track || cards.length === 0 || !prevButton || !nextButton || !dotsContainer) {
        return;
    }

    const totalCards = cards.length;
    let cardWidth = track.parentElement.getBoundingClientRect().width;
    let currentIndex = 1; 
    let isTransitioning = false; 

    const firstClone = cards[0].cloneNode(true);
    const lastClone = cards[totalCards - 1].cloneNode(true);
    firstClone.setAttribute('data-clone', 'true');
    lastClone.setAttribute('data-clone', 'true');
    track.appendChild(firstClone);
    track.insertBefore(lastClone, cards[0]);

    track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;

    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalCards; i++) {
        const dot = document.createElement('button');
        dot.classList.add('testimonial-dot');
        dot.addEventListener('click', () => {
            if (isTransitioning) return;
            moveToSlide(i + 1);
        });
        dotsContainer.appendChild(dot);
    }
    const dots = Array.from(dotsContainer.children);
    
    function updateDots() {
        dots.forEach(dot => dot.classList.remove('active'));
        let dotIndex = (currentIndex - 1 + totalCards) % totalCards;
        dots[dotIndex].classList.add('active');
    }
    updateDots();

    function moveToSlide(newIndex) {
        if (isTransitioning) return;
        isTransitioning = true;
        
        track.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        currentIndex = newIndex;
        track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
        updateDots();
    }

    track.addEventListener('transitionend', () => {
        if (currentIndex === totalCards + 1) {
            track.style.transition = 'none';
            currentIndex = 1;
            track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
        }
        
        if (currentIndex === 0) {
            track.style.transition = 'none';
            currentIndex = totalCards;
            track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
        }
        
        isTransitioning = false;
    });

    nextButton.addEventListener('click', () => {
        moveToSlide(currentIndex + 1);
    });

    prevButton.addEventListener('click', () => {
        moveToSlide(currentIndex - 1);
    });

    window.addEventListener('resize', () => {
        cardWidth = track.parentElement.getBoundingClientRect().width;
        track.style.transition = 'none';
        track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
    });
}

// --- Event Listener Utama ---
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({ duration: 800, once: true });

    // Panggil semua fungsi setup di sini
    setupLanguageSwitcher(); // <-- PANGGIL FUNGSI BAHASA
    setupBrosurModal();
    setupKeunggulanTabs();
    setupInfoTerkiniTabs();
    setupAkreditasiModal();
    setupTestimonialSlider();
    setupHamburgerMenu();
});
