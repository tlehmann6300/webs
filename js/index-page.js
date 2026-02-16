
(function() {
    'use strict';
    const initCompetenciesAccordion = () => {
        const accordionGroup = document.getElementById('competenciesAccordionGroup');
        if (!accordionGroup) return;
        const triggers = accordionGroup.querySelectorAll('.competency-card__trigger');
        const cards = accordionGroup.querySelectorAll('.competency-card');
        const toggleCard = (card, trigger) => {
            const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
            cards.forEach(c => {
                if (c !== card) {
                    c.classList.remove('is-active');
                    const btn = c.querySelector('.competency-card__trigger');
                    if (btn) {
                        btn.setAttribute('aria-expanded', 'false');
                    }
                }
            });
            if (isExpanded) {
                card.classList.remove('is-active');
                trigger.setAttribute('aria-expanded', 'false');
            } else {
                card.classList.add('is-active');
                trigger.setAttribute('aria-expanded', 'true');
            }
        };
        triggers.forEach((trigger, index) => {
            trigger.addEventListener('click', () => {
                const card = trigger.closest('.competency-card');
                toggleCard(card, trigger);
            });
            trigger.addEventListener('keydown', (e) => {
                const key = e.key;
                const length = triggers.length;
                let targetIndex = index;
                if (key === 'ArrowDown') {
                    e.preventDefault();
                    targetIndex = (index + 1) % length;
                    triggers[targetIndex].focus();
                } else if (key === 'ArrowUp') {
                    e.preventDefault();
                    targetIndex = (index - 1 + length) % length;
                    triggers[targetIndex].focus();
                } else if (key === 'Home') {
                    e.preventDefault();
                    triggers[0].focus();
                } else if (key === 'End') {
                    e.preventDefault();
                    triggers[length - 1].focus();
                }
            });
        });
        cards.forEach(card => {
            const imageWrapper = card.querySelector('.competency-card__image-wrapper');
            const trigger = card.querySelector('.competency-card__trigger');
            if (imageWrapper && trigger) {
                imageWrapper.addEventListener('click', () => {
                    toggleCard(card, trigger);
                });
            }
        });
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.competency-card')) {
                cards.forEach(c => {
                    c.classList.remove('is-active');
                    const btn = c.querySelector('.competency-card__trigger');
                    if (btn) {
                        btn.setAttribute('aria-expanded', 'false');
                    }
                });
            }
        });
    };
    const initInfoCardsAnimation = () => {
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const infoObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        infoObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
            document.querySelectorAll('.info-stagger-in').forEach(el => infoObserver.observe(el));
        } else {
            document.querySelectorAll('.info-stagger-in').forEach(el => el.classList.add('is-visible'));
        }
    };
    const initPhysicsCardsTilt = () => {
        return;
    };
    const initFooterUtilities = () => {
        const yearSpan = document.getElementById('current-year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
        const copyBanner = document.getElementById('copy-banner');
        const emailLinks = document.querySelectorAll('.copy-email-link');
        emailLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const email = this.textContent.trim();
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(email).then(() => {
                        if(copyBanner) {
                            copyBanner.classList.add('show');
                            setTimeout(() => {
                                copyBanner.classList.remove('show');
                            }, 4000);
                        }
                    }).catch(err => {
                        console.error('Fehler beim Kopieren: ', err);
                        alert(`Kopieren fehlgeschlagen. Bitte manuell kopieren: ${email}`);
                    });
                } else {
                    alert(`Kopieren nicht unterstützt. Bitte manuell kopieren: ${email}`);
                }
            });
        });
    };
    const initStatsSection = () => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isMobile = window.innerWidth < 768;
        const COUNTER_DURATION_MS = 500;
        const STAGGER_DELAY_MS = 150;
        const popoverTriggerList = document.querySelectorAll('#stats-section [data-bs-toggle="popover"]');
        const popoverInstances = [];
        popoverTriggerList.forEach(el => {
            if (typeof bootstrap !== 'undefined' && bootstrap.Popover) {
                const popover = new bootstrap.Popover(el, {
                    trigger: isMobile ? 'click' : 'hover focus',
                    html: true,
                    animation: !prefersReducedMotion,
                    offset: [0, 12]
                });
                popoverInstances.push({ element: el, popover: popover });
                el.addEventListener('shown.bs.popover', () => el.setAttribute('aria-expanded', 'true'));
                el.addEventListener('hidden.bs.popover', () => el.setAttribute('aria-expanded', 'false'));
            }
        });
        if (isMobile && popoverInstances.length > 0) {
            window.addEventListener('scroll', () => {
                popoverInstances.forEach(({ popover }) => {
                    popover.hide();
                });
            }, { passive: true });
            document.addEventListener('click', (e) => {
                popoverInstances.forEach(({ element, popover }) => {
                    const isClickInside = element.contains(e.target);
                    const popoverElement = document.querySelector('.popover');
                    const isClickOnPopover = popoverElement && popoverElement.contains(e.target);
                    if (!isClickInside && !isClickOnPopover) {
                        popover.hide();
                    }
                });
            }, { passive: true });
        }
        const animateCounter = (element) => {
            const target = +element.getAttribute('data-target');
            const suffix = element.getAttribute('data-suffix') || '';
            const animatedSpan = element.querySelector('.counter-animated');
            if (!animatedSpan) return;
            if (prefersReducedMotion) {
                animatedSpan.textContent = target + suffix;
                return;
            }
            let startTime = null;
            const easeOutExpo = (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / COUNTER_DURATION_MS, 1);
                const easedProgress = easeOutExpo(progress);
                const current = Math.round(easedProgress * target);
                animatedSpan.textContent = current + suffix;
                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    animatedSpan.textContent = target + suffix;
                }
            };
            requestAnimationFrame(step);
        };
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cards = entry.target.querySelectorAll('#stats-section .row > [class*="col-"]');
                    cards.forEach((col, index) => {
                        const delay = index * STAGGER_DELAY_MS;
                        setTimeout(() => {
                            const fadeEl = col.querySelector('.fade-in-up');
                            if (fadeEl) fadeEl.classList.add('visible');
                            const counter = col.querySelector('.stat-number');
                            if (counter && !counter.classList.contains('animated')) {
                                counter.classList.add('animated');
                                animateCounter(counter);
                            }
                        }, delay);
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.25,
            rootMargin: "0px"
        });
        const statsSection = document.getElementById('stats-section');
        if (statsSection) statsObserver.observe(statsSection);
    };
    document.addEventListener('DOMContentLoaded', () => {
        initCompetenciesAccordion();
        initInfoCardsAnimation();
        initPhysicsCardsTilt();
        initFooterUtilities();
        initStatsSection();
    });
})();