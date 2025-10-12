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
function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('nav ul');
    const icon = hamburger.querySelector('i');

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Ganti ikon dari menu ke 'x' dan sebaliknya
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('bx-menu');
            icon.classList.add('bx-x');
        } else {
            icon.classList.remove('bx-x');
            icon.classList.add('bx-menu');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({ duration: 800, once: true });

    // Panggil semua fungsi setup di sini
    setupBrosurModal();
    setupKeunggulanTabs();
    setupInfoTerkiniTabs();
    setupAkreditasiModal();
    setupTestimonialSlider();
    setupHamburgerMenu(); // <-- TAMBAHKAN PANGGILAN FUNGSI INI
});

// --- 4. Memisahkan fungsi-fungsi agar lebih rapi ---
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
    // 1. Select all the necessary elements.
    const sliderWrapper = document.querySelector('.testimonial-wrapper');
    const track = document.querySelector('.testimonial-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('testimonialDots');

    // Safety check
    if (!track || cards.length === 0 || !prevButton || !nextButton || !dotsContainer) {
        console.warn('Testimonial slider elements not found. Setup cancelled.');
        return;
    }

    const totalCards = cards.length;
    let cardWidth = track.parentElement.getBoundingClientRect().width;
    let currentIndex = 1; // Start on the first "real" slide
    let isTransitioning = false; // Flag to prevent rapid clicks during animation

    // --- INFINITE LOOP SETUP: CLONING ---
    // 1. Clone the first and last cards for the infinite effect.
    const firstClone = cards[0].cloneNode(true);
    const lastClone = cards[totalCards - 1].cloneNode(true);

    // Add data-attributes to identify clones (optional, but good for debugging)
    firstClone.setAttribute('data-clone', 'true');
    lastClone.setAttribute('data-clone', 'true');

    // Add clones to the track
    track.appendChild(firstClone);
    track.insertBefore(lastClone, cards[0]);

    // --- INITIAL POSITION ---
    // 2. Set the initial position to the first "real" card, not the cloned one.
    track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;


    // --- DOTS CREATION ---
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalCards; i++) {
        const dot = document.createElement('button');
        dot.classList.add('testimonial-dot');
        dot.addEventListener('click', () => {
            if (isTransitioning) return;
            // Move to the corresponding "real" slide (index + 1)
            moveToSlide(i + 1);
        });
        dotsContainer.appendChild(dot);
    }
    const dots = Array.from(dotsContainer.children);
    
    function updateDots() {
        dots.forEach(dot => dot.classList.remove('active'));
        // Calculate dot index based on the "real" slides
        let dotIndex = (currentIndex - 1 + totalCards) % totalCards;
        dots[dotIndex].classList.add('active');
    }
    updateDots();

    // --- CORE SLIDER FUNCTION ---
    function moveToSlide(newIndex) {
        if (isTransitioning) return;
        isTransitioning = true;
        
        track.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        currentIndex = newIndex;
        track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
        updateDots();
    }

    // --- THE "MAGIC JUMP" ---
    // 3. Listen for the end of the transition to handle the jump.
    track.addEventListener('transitionend', () => {
        // If we landed on the first clone (after the last real slide)
        if (currentIndex === totalCards + 1) {
            track.style.transition = 'none'; // Disable transition for the jump
            currentIndex = 1; // Jump back to the first real slide
            track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
        }
        
        // If we landed on the last clone (before the first real slide)
        if (currentIndex === 0) {
            track.style.transition = 'none'; // Disable transition for the jump
            currentIndex = totalCards; // Jump back to the last real slide
            track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
        }
        
        isTransitioning = false; // Re-enable clicking
    });

    // --- EVENT LISTENERS ---
    nextButton.addEventListener('click', () => {
        moveToSlide(currentIndex + 1);
    });

    prevButton.addEventListener('click', () => {
        moveToSlide(currentIndex - 1);
    });

    // --- RESPONSIVENESS ---
    window.addEventListener('resize', () => {
        cardWidth = track.parentElement.getBoundingClientRect().width;
        // Instantly update position without animation on resize
        track.style.transition = 'none';
        track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
    });
}