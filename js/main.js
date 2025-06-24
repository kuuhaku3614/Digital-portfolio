// --- Global Variables ---
let particlesAnimation;

// --- Primary Initializer ---

// Waits for the entire page to load before starting animations and initializations
window.addEventListener('load', function() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    const loadingProgress = document.getElementById('loadingProgress');

    if (loadingOverlay && loadingProgress) {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress > 100) progress = 100;

            loadingProgress.style.width = progress + '%';

            if (progress === 100) {
                clearInterval(interval);
                setTimeout(() => {
                    loadingOverlay.style.opacity = '0';
                    setTimeout(() => {
                        loadingOverlay.style.display = 'none';
                        if (typeof initializePage === 'function') {
                            initializePage();
                        }
                    }, 500);
                }, 500);
            }
        }, 100);
    } else {
        if (typeof initializePage === 'function') {
            initializePage();
        }
    }
});

// Calls all the individual initialization functions for the page
function initializePage() {
    initTypingAnimation();
    initParticleAnimation();
    initSmoothScrolling();
    initScrollAnimations();
    initThemeToggle();
    initCustomModalsAndAlerts();
    initExpandableCards();
}


// --- Feature Initializations ---

/**
 * Initializes the typing animation in the hero section.
 */
function initTypingAnimation() {
    const typingElement = document.getElementById('typingText');
    if (!typingElement) return;

    const texts = [
        "Full-Stack Developer",
        "Advanced in Database Management",
        "Prompt Engineer Specialist",
        "Problem Solver",
        "Proficient Software Engineer"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        let speed = isDeleting ? 50 : 100;
        if (!isDeleting && charIndex === currentText.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            speed = 500;
        }
        setTimeout(type, speed);
    }
    type();
}

/**
 * Creates and animates the particle background.
 */
function initParticleAnimation() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = Math.max(10, Math.min(100, Math.floor(window.innerWidth / 15)));

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-primary').trim() || '0, 255, 136';
            ctx.fillStyle = `rgba(${accentColor}, ${this.opacity})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        const accentColorStroke = getComputedStyle(document.documentElement).getPropertyValue('--accent-primary').trim() || '0, 255, 136';
        particles.forEach((p, i) => {
            particles.slice(i + 1).forEach(otherP => {
                const dx = p.x - otherP.x;
                const dy = p.y - otherP.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(otherP.x, otherP.y);
                    ctx.strokeStyle = `rgba(${accentColorStroke}, ${Math.max(0, 0.1 - dist / 1000)})`;
                    ctx.stroke();
                }
            });
        });
        particlesAnimation = requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

/**
 * Handles smooth scrolling for anchor links and closes the mobile nav.
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) bsCollapse.hide();
            }

            if (targetId === "#") {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            try {
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } catch (error) {
                console.warn("Smooth scroll target not found or invalid:", targetId);
            }
        });
    });
}

/**
 * Uses Intersection Observer to trigger animations on scroll.
 */
function initScrollAnimations() {
    const elementsToObserve = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .skill-card');
    if (elementsToObserve.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('skill-card')) {
                    const progressBar = entry.target.querySelector('.skill-progress-bar');
                    if (progressBar && !progressBar.style.width) {
                        const width = progressBar.getAttribute('data-width');
                        setTimeout(() => progressBar.style.width = width + '%', 200);
                    }
                }
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    elementsToObserve.forEach(el => observer.observe(el));
}

/**
 * Initializes the light/dark theme toggle functionality.
 */
function initThemeToggle() {
    const themeToggleButton = document.getElementById('themeToggle');
    if (!themeToggleButton) return;

    const bodyClassList = document.body.classList;

    function applyTheme(theme) {
        if (theme === "dark") {
            bodyClassList.add("dark-theme");
            themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            bodyClassList.remove("dark-theme");
            themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>';
        }
        localStorage.setItem("theme", theme);
    }

    const currentTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (currentTheme) {
        applyTheme(currentTheme);
    } else {
        applyTheme(prefersDark ? "dark" : "light");
    }

    themeToggleButton.addEventListener('click', () => {
        const newTheme = bodyClassList.contains("dark-theme") ? "light" : "dark";
        applyTheme(newTheme);
    });
}

/**
 * Initializes custom modals and alert popups.
 */
function initCustomModalsAndAlerts() {
    document.querySelectorAll('.no-link-popup').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const message = this.getAttribute('data-message');
            showCustomAlert(message);
        });
    });
}

function showCustomAlert(message) {
    let alertBox = document.getElementById('custom-alert');
    if (!alertBox) {
        alertBox = document.createElement('div');
        alertBox.id = 'custom-alert';
        alertBox.className = 'custom-alert';
        document.body.appendChild(alertBox);
    }
    alertBox.textContent = message;
    alertBox.classList.add('show');
    setTimeout(() => alertBox.classList.remove('show'), 3000);
}

/**
 * NEW: Initializes "Show More" / "Show Less" functionality for cards.
 */
function initExpandableCards() {
    const contentElements = document.querySelectorAll('.expandable-content');
    const MAX_HEIGHT = 500;

    contentElements.forEach(contentEl => {
        // Use a small timeout to ensure content is fully rendered and scrollHeight is accurate
        setTimeout(() => {
            // Check if the content's total height exceeds its visible height (and the max-height)
            if (contentEl.scrollHeight > contentEl.clientHeight && contentEl.scrollHeight > MAX_HEIGHT) {
                
                // Add a class to show the gradient overlay
                contentEl.classList.add('overflows');

                // Find the parent card to append the button to
                const card = contentEl.closest('.project-card, .gallery-card');
                if (!card) return;

                // Create and append the "Show More" button
                const showMoreBtn = document.createElement('button');
                showMoreBtn.innerText = 'Show More';
                showMoreBtn.className = 'show-more-btn';
                card.appendChild(showMoreBtn);

                // Add click listener to the button
                showMoreBtn.addEventListener('click', (e) => {
                    e.stopPropagation(); // Stop click from bubbling up to the card/image

                    const isExpanded = contentEl.classList.contains('expanded');

                    contentEl.classList.toggle('expanded');
                    
                    if (isExpanded) {
                        showMoreBtn.innerText = 'Show More';
                    } else {
                        showMoreBtn.innerText = 'Show Less';
                    }
                });
            }
        }, 300); 
    });
}


// --- Standalone Logic ---
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formStatus = document.createElement('div');
        formStatus.textContent = 'Form submitted (Placeholder)! This would send data to a server in a real app.';
        formStatus.style.color = 'var(--accent-primary)';
        formStatus.style.marginTop = '1rem';
        formStatus.style.textAlign = 'center';
        this.parentNode.insertBefore(formStatus, this.nextSibling);

        this.reset();
        setTimeout(() => formStatus.remove(), 5000);
    });
}