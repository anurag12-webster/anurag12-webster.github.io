
document.addEventListener('DOMContentLoaded', function () {
    // --- Navigation System ---
    const nav = document.querySelector('.nav-container');
    const navWrapper = document.querySelector('.nav-wrapper');
    const navLinks = document.querySelectorAll('.nav-link');
    const highlight = document.querySelector('.nav-highlight');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    let activeLink = document.querySelector('.nav-link.active');

    // Navigation highlight functionality (Desktop only)
    function moveHighlight(element) {
        if (element && window.innerWidth > 768 && highlight) {
            const wrapperRect = navWrapper.getBoundingClientRect();
            const elementRect = element.getBoundingClientRect();

            highlight.style.width = `${element.offsetWidth}px`;
            highlight.style.height = `${element.offsetHeight}px`;
            highlight.style.transform = `translateX(${elementRect.left - wrapperRect.left}px)`;
        }
    }

    // Initialize highlight position and colors
    if (activeLink && highlight) {
        activeLink.style.color = 'var(--bg-primary)';
        moveHighlight(activeLink);
    }

    // Recalculate highlight position on resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (activeLink) {
                // Reset all colors and set active link color
                navLinks.forEach(l => l.style.color = '');
                activeLink.style.color = 'var(--bg-primary)';
                moveHighlight(activeLink);
            }
        }, 100);
    });

    // Navigation link interactions
    navLinks.forEach(link => {
        // Hover effect for desktop
        link.addEventListener('mouseover', () => {
            if (window.innerWidth > 768) {
                // Reset all links to default color
                navLinks.forEach(l => l.style.color = '');
                // Set hovered link to dark color (visible on white highlight)
                link.style.color = 'var(--bg-primary)';
                moveHighlight(link);
            }
        });

        // Click handling - don't prevent default for actual navigation
        link.addEventListener('click', (e) => {
            // Only prevent default if it's a hash link or same page
            const href = link.getAttribute('href');
            if (href.startsWith('#') || href === window.location.pathname) {
                e.preventDefault();
            }

            // Update active state
            if (activeLink) {
                activeLink.classList.remove('active');
                activeLink.style.color = '';
            }
            link.classList.add('active');
            link.style.color = 'var(--bg-primary)';
            activeLink = link;
            moveHighlight(activeLink);

            // Close mobile menu if open
            if (window.innerWidth <= 768 && navWrapper) {
                navWrapper.classList.remove('active');
                if (mobileMenuToggle) {
                    mobileMenuToggle.classList.remove('active');
                }
            }
        });
    });

    // Reset highlight on mouse leave
    if (navWrapper) {
        navWrapper.addEventListener('mouseleave', () => {
            if (window.innerWidth > 768 && activeLink) {
                // Reset all links to default color
                navLinks.forEach(l => l.style.color = '');
                // Set active link to proper color
                activeLink.style.color = 'var(--bg-primary)';
                moveHighlight(activeLink);
            }
        });
    }

    // --- Mobile Menu Toggle ---
    if (mobileMenuToggle && navWrapper) {
        mobileMenuToggle.addEventListener('click', () => {
            navWrapper.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (nav && !nav.contains(e.target) && navWrapper.classList.contains('active')) {
                navWrapper.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }

    // --- Theme System ---
    const themeToggleBtn = document.querySelector('.theme-toggle');
    const body = document.body;

    function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        if (themeName === 'light') {
            body.classList.add('light-theme');
        } else {
            body.classList.remove('light-theme');
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (body.classList.contains('light-theme')) {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        });
    }

    // Load saved theme or detect system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            setTheme('light');
        }
    }

    // Listen for system theme changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'light' : 'dark');
            }
        });
    }

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- Loading Animation ---
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    // --- Scroll to Top Button ---
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'fixed bottom-6 right-6 w-12 h-12 bg-[var(--accent-primary)] text-white rounded-full shadow-lg opacity-0 pointer-events-none transition-all duration-300 z-50 flex items-center justify-center hover:bg-[var(--accent-secondary)] hover:scale-110';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollToTopBtn);

    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.pointerEvents = 'auto';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.pointerEvents = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
