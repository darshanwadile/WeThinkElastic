// ================================
// GSAP INITIALIZATION
// ================================
gsap.registerPlugin(ScrollTrigger);

// Initialize Splitting.js for text animations
Splitting();

// ================================
// PRELOADER / PAGE LOAD ANIMATION
// ================================
window.addEventListener('load', () => {
    // Create timeline for hero animations
    const heroTimeline = gsap.timeline();

    // Animate individual characters in "hello" - DRAMATIC ENTRANCE
    const helloChars = document.querySelectorAll('#container-hello h2 .char');
    
    heroTimeline.from(helloChars, {
        opacity: 0,
        y: 150,
        rotateX: -90,
        rotateZ: 15,
        skewY: 10,
        stagger: {
            amount: 0.6,
            ease: 'power2.inOut'
        },
        duration: 1.2,
        ease: 'elastic.out(1.2, 0.8)'
    }, 0.2);

    // Animate hero subtitle lines - slide in from left
    heroTimeline.from('.text-hello p', {
        x: -80,
        opacity: 0,
        stagger: 0.12,
        duration: 1.9,
        ease: 'power3.out'
    }, 0.4);

    // Optional: Add a scale effect to the whole hello section
    gsap.from('#container-hello', {
        opacity: 0,
        scale: 0.95,
        duration: 1.5,
        delay: 0.1,
        ease: 'power2.out'
    });
});

// ================================
// SMOOTH SCROLL
// ================================
gsap.to(window, {
    scrollTo: 0,
    duration: 0
});

// ================================
// HERO PARALLAX EFFECT
// ================================
gsap.to('#container-hello', {
    scrollTrigger: {
        trigger: '#container-hello',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    },
    y: -150,
    opacity: 0.5,
    ease: 'none'
});

// ================================
// VIDEO SECTION ANIMATIONS
// ================================
gsap.from('#container-video-start', {
    scrollTrigger: {
        trigger: '#container-video-start',
        start: 'top 80%',
        end: 'top 30%',
        scrub: 1
    },
    scale: 0.8,
    opacity: 0,
    ease: 'power2.out'
});

// ================================
// TYPOGRAPHY TITLE ANIMATIONS
// ================================
// Animate main title lines
const titleLines = document.querySelectorAll('.typoTitle h3 p');
gsap.from(titleLines, {
    scrollTrigger: {
        trigger: '.typoTitle',
        start: 'top 70%',
        end: 'top 30%',
        toggleActions: 'play none none reverse'
    },
    x: -100,
    opacity: 0,
    stagger: 0.15,
    duration: 1,
    ease: 'power3.out'
});

// Animate content lines
const contentLines = document.querySelectorAll('.content-typo-title p');
gsap.from(contentLines, {
    scrollTrigger: {
        trigger: '.content-typo-title',
        start: 'top 75%',
        end: 'top 40%',
        toggleActions: 'play none none reverse'
    },
    x: 50,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    ease: 'power2.out'
});

// ================================
// PROJECTS GRID ANIMATIONS
// ================================
const projectItems = document.querySelectorAll('.grid-project figure');
projectItems.forEach((item, index) => {
    // Stagger animation for each project
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            end: 'top 50%',
            toggleActions: 'play none none reverse'
        },
        y: 80,
        opacity: 0,
        duration: 1.6,
        delay: index * 0.1,
        ease: 'power3.out'
    });

    // Image scale animation on hover (additional GSAP control)
    item.addEventListener('mouseenter', () => {
        gsap.to(item.querySelector('.container-scale-image'), {
            scale: 1.15,
            duration: 0.6,
            ease: 'power2.out'
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item.querySelector('.container-scale-image'), {
            scale: 1,
            duration: 0.6,
            ease: 'power2.out'
        });
    });
});

// CTA Button Animation
gsap.from('.cta', {
    scrollTrigger: {
        trigger: '.cta',
        start: 'top 90%',
        toggleActions: 'play none none reverse'
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out(1.7)'
});

// ================================
// RIBBON ROTATION (Enhanced)
// ================================
gsap.to('#ribbon', {
    scrollTrigger: {
        trigger: '#our-projects',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5
    },
    rotation: 360,
    ease: 'none'
});

// ================================
// HORIZONTAL SCROLL SECTION
// ================================
// Animate the scrolling text
const horizontalText = document.querySelector('.horizontal-text-scroll .text');
if (horizontalText) {
    // Clone the text for seamless loop
    horizontalText.innerHTML += horizontalText.innerHTML;
}

// Animate expertise cards
const expertiseCards = document.querySelectorAll('.list-horizontal-text li');
gsap.from(expertiseCards, {
    scrollTrigger: {
        trigger: '.list-horizontal-text',
        start: 'top 80%',
        end: 'top 40%',
        toggleActions: 'play none none reverse'
    },
    x: 100,
    opacity: 0,
    stagger: 0.15,
    duration: 1,
    ease: 'power3.out'
});

// ================================
// LOGOS SECTION ANIMATIONS
// ================================
const logoItems = document.querySelectorAll('.logo-item');
gsap.from(logoItems, {
    scrollTrigger: {
        trigger: '#logos',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    scale: 0.5,
    opacity: 0,
    stagger: 0.05,
    duration: 0.6,
    ease: 'back.out(1.7)'
});

// ================================
// CONTACT SECTION ANIMATIONS
// ================================
gsap.from('.container-contact-text p', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 70%',
        end: 'top 30%',
        toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    stagger: 0.15,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.coffee-placeholder', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    scale: 0,
    rotation: -180,
    opacity: 0,
    duration: 1.2,
    ease: 'elastic.out(1, 0.5)'
});

// ================================
// FOOTER ANIMATION
// ================================
gsap.from('footer ul li', {
    scrollTrigger: {
        trigger: 'footer',
        start: 'top 90%',
        toggleActions: 'play none none reverse'
    },
    y: 30,
    opacity: 0,
    stagger: 0.08,
    duration: 0.6,
    ease: 'power2.out'
});

// ================================
// MOBILE MENU TOGGLE
// ================================
const menuButton = document.getElementById('button-nav');
const nav = document.querySelector('nav');

if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
        nav.classList.toggle('active');
        
        // Animate menu items when opening
        if (nav.classList.contains('active')) {
            gsap.from('nav ul li', {
                x: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 0.5,
                ease: 'power2.out'
            });
        }
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
}

// ================================
// CURSOR EFFECT (Optional Enhancement)
// ================================
let cursor = document.createElement('div');
cursor.className = 'custom-cursor';
cursor.style.cssText = `
    width: 20px;
    height: 20px;
    border: 2px solid #f2e2c2;
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
    transition: transform 0.2s ease;
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.3,
        ease: 'power2.out'
    });
});

// Expand cursor on hover over interactive elements
const interactiveElements = document.querySelectorAll('a, button, figure');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 2,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    el.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ================================
// SCROLL INDICATOR
// ================================
ScrollTrigger.create({
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (self) => {
        // You can add a progress indicator here if needed
        console.log('Scroll progress:', (self.progress * 100).toFixed(2) + '%');
    }
});

// ================================
// PERFORMANCE: Refresh ScrollTrigger on resize
// ================================
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

// ================================
// CUSTOM CURSOR FOR PROJECTS SECTION
// ================================
const customCursor = document.querySelector('.custom-cursor');
const diagonalProjects = document.querySelector('.diagonal-projects');

if (customCursor && diagonalProjects) {
    // Hide custom cursor initially
    customCursor.style.opacity = '0';
    
    // Show custom cursor when entering projects section
    diagonalProjects.addEventListener('mouseenter', () => {
        customCursor.style.opacity = '1';
    });
    
    diagonalProjects.addEventListener('mouseleave', () => {
        customCursor.style.opacity = '0';
    });
    
    // Track mouse movement
    diagonalProjects.addEventListener('mousemove', (e) => {
        gsap.to(customCursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
}

// ================================
// PROJECTS DIAGONAL FALL-IN ANIMATION
// ================================
gsap.utils.toArray('.diagonal-projects .project').forEach((project, i) => {
    gsap.from(project, {
        scrollTrigger: {
            trigger: project,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
        },
        y: -200,
        opacity: 0,
        rotate: gsap.getProperty(project, 'rotate') || 0,
        duration: 1.1,
        ease: 'bounce.out',
        delay: i * 0.15
    });
});


// ================================
// EXPERTISE SECTION ANIMATION
// ================================
window.addEventListener('load', () => {
    const horizontalScroll = document.querySelector('.horizontal-text-scroll');
    if (horizontalScroll) {
        const text = horizontalScroll.querySelector('.text');
        const spans = text.querySelectorAll('span');
        
        // Wait a moment for layout to settle
        setTimeout(() => {
            // Main horizontal scroll animation
            gsap.to(text, {
                x: () => -(text.offsetWidth - window.innerWidth),
                ease: 'sine.inOut',
                scrollTrigger: {
                    trigger: horizontalScroll,
                    pin: horizontalScroll,
                    scrub: 1,
                    start: 'top top',
                    end: 'bottom top-=300%',
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    onUpdate: (self) => {
                        // Refresh on update to ensure smooth animation
                    }
                }
            });
            
            // Parallax effect for images
            gsap.to(spans, {
                xPercent: -50,
                ease: 'none',
                scrollTrigger: {
                    trigger: horizontalScroll,
                    start: 'top top',
                    end: 'bottom top-=300%',
                    scrub: 1,
                }
            });
        }, 300);
    }
});
console.log('✨ We Think Elastic Clone - GSAP Animations Loaded!');
