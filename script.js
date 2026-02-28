// ==========================================
// PUBLICATIONS DATA
// ==========================================
const publications = [
    // Journal Articles
    {
        id: 1,
        type: 'journal',
        year: 2026,
        status: 'published',
        title: 'MGDB: A Novel Bioinformatics Quality Control Tool for Clinical Next-Generation Sequencing',
        authors: ['Gayap, Hadrien T.', 'Robichaud, Philippe-Pierre', 'Crapoulet, Nicolas', 'Allain, Eric P.'],
        venue: 'Cancer Informatics, 25, 11769351251411074. SAGE Publications',
        link: null
    },
    {
        id: 2,
        type: 'journal',
        year: 2024,
        status: 'published',
        title: 'SALM: A Unified Model for 2D and 3D Region of Interest Segmentation in Lung CT Scans Using Vision Transformers',
        authors: ['Gayap, Hadrien T.', 'Moulay A. Akhloufi'],
        venue: 'Applied Bio sciences. MDPI',
        link: null
    },
    {
        id: 3,
        type: 'journal',
        year: 2026,
        status: 'published',
        title: 'Lung-Mamba: Lung nodule segmentation model optimized by Mamba\'s selective state spaces',
        authors: ['Gayap, Hadrien T.', 'Akhloufi, Moulay A.'],
        venue: 'Biomedical Engineering Advances, 100214. Elsevier',
        link: null
    },
    {
        id: 4,
        type: 'journal',
        year: 2024,
        status: 'published',
        title: 'Deep Machine Learning for Medical Diagnosis, Application to Lung Cancer Detection: A Review',
        authors: ['Gayap, Hadrien T.', 'Moulay A. Akhloufi'],
        venue: 'BioMedInformatics 4.1 (2024): 236-284',
        link: null
    },
    {
        id: 5,
        type: 'journal',
        year: 2025,
        status: 'published',
        title: 'Optimizing Deep Learning Models for Real-Time Seizure Detection based on Electroencephalogram',
        authors: ['Gayap, Hadrien T.', 'Moulay A. Akhloufi'],
        venue: '2025 6th International Conference on Bio-engineering for Smart Technologies (BioSMART). IEEE',
        link: 'https://ieeexplore.ieee.org/abstract/document/11046100'
    },
    
    // Conferences
    {
        id: 6,
        type: 'conference',
        year: 2025,
        status: 'published',
        title: 'Machine Learning-Enhanced Classification of IGHV Somatic Recombination Events Using Synthetic and Real Sequencing Data',
        authors: ['Gayap, H.', 'Eric Allain', 'et al.'],
        venue: 'International Society for Computational Biology (ISCB), Liverpool, United Kingdom',
        date: 'July 19-24, 2025',
        presentationType: 'Poster'
    },
    {
        id: 7,
        type: 'conference',
        year: 2025,
        status: 'published',
        title: 'SALM: Un modèle unifié pour la segmentation des régions d\'intérêt 2D et 3D en tomodensitométrie pulmonaire à l\'aide de transformateurs de vision',
        authors: ['Gayap, H.', 'M. A. Akhloufi'],
        venue: 'Colloque pour jeunes chercheurs (CJCC), Moncton Canada',
        date: 'March 28, 2025',
        presentationType: 'Oral Presentation'
    },
    {
        id: 8,
        type: 'conference',
        year: 2024,
        status: 'published',
        title: 'Détection des crises d\'épilepsie en temps réel à l\'aide de l\'intelligence artificielle',
        authors: ['Gayap, H.', 'M. A. Akhloufi'],
        venue: 'Symposium de Recherche en Santé, RechercheNB, Moncton Canada',
        date: 'November 14, 2024',
        presentationType: 'Oral Presentation'
    },
    {
        id: 9,
        type: 'conference',
        year: 2024,
        status: 'published',
        title: 'Détection de maladie respiratoire en temps réel à l\'aide de l\'intelligence artificielle',
        authors: ['Gayap, H.', 'M. A. Akhloufi'],
        venue: 'NB MedTech Summit, MedTech, Moncton Canada',
        date: 'September 19, 2024',
        presentationType: 'Oral Presentation'
    },
    {
        id: 10,
        type: 'conference',
        year: 2024,
        status: 'published',
        title: 'Localisation des nodules pulmonaires à l\'aide de l\'apprentissage machine profonde',
        authors: ['Gayap, H.', 'M. A. Akhloufi'],
        venue: 'Assemblée générale annuelle du Réseau canadien de recherche respiratoire, Ottawa Canada',
        date: 'October 23, 2024',
        presentationType: 'Presentation'
    },
    {
        id: 11,
        type: 'conference',
        year: 2024,
        status: 'published',
        title: 'Segmentation des nodules de cancer du poumon à l\'aide de modèles d\'apprentissage profond de pointe',
        authors: ['Gayap, H.', 'M. A. Akhloufi'],
        venue: 'Colloques pour jeunes chercheurs (CJCC), Moncton Canada',
        date: 'March 22, 2024',
        presentationType: 'Presentation'
    },
    {
        id: 12,
        type: 'conference',
        year: 2023,
        status: 'published',
        title: 'Segmentation des nodules de cancer du poumon à l\'aide d\'approches récentes d\'apprentissage profond',
        authors: ['Gayap, H.', 'M. A. Akhloufi'],
        venue: 'Assemblée générale annuelle du Réseau canadien de recherche respiratoire, Ottawa Canada',
        date: 'October 17, 2023',
        presentationType: 'Presentation'
    },
    {
        id: 13,
        type: 'conference',
        year: 2023,
        status: 'published',
        title: 'Intégration du séquençage du génome entier à faible profondeur et de la transcriptomique pour la caractérisation moléculaire de la leucémie lymphoïde chronique (LLC)',
        authors: ['Gayap, H.', 'Eric Allain', 'et al.'],
        venue: 'Conférence canadienne sur la recherche sur le cancer, Halifax Canada',
        date: 'November 13, 2023',
        presentationType: 'Presentation'
    },
    {
        id: 14,
        type: 'conference',
        year: 2023,
        status: 'published',
        title: 'Intégration du séquençage du génome entier à faible profondeur et de la transcriptomique pour la caractérisation moléculaire de la leucémie lymphoïde chronique (LLC)',
        authors: ['Gayap, H.', 'Eric Allain', 'et al.'],
        venue: 'Conférence de Recherche Nouveau-Brunswick, St John Canada',
        date: 'November 18, 2023',
        presentationType: 'Presentation'
    },
    
    {
        id: 27,
        type: 'workshop',
        year: 2025,
        status: 'published',
        title: 'L\'intelligence artificielle en santé : présentation des travaux de recherche',
        authors: ['Gayap, H.'],
        venue: 'École Nationale Supérieure Polytechnique de Yaoundé, Cameroun',
        date: 'December 16, 2025'
    },
    {
        id: 28,
        type: 'workshop',
        year: 2026,
        status: 'published',
        title: 'État de l\'art de l\'intelligence artificielle dans le domaine militaire',
        authors: ['Gayap, H.'],
        venue: 'Corps du Bataillon d\'Intervention Rapide (BIR), HELIOS, Cameroun',
        date: 'January 7, 2026'
    },

    // Workshops
    {
        id: 15,
        type: 'workshop',
        year: 2025,
        status: 'published',
        title: 'Utilisation Efficace et Ethique de l\'Intelligence pour les étudiants et Professionnels',
        authors: ['Gayap, H.'],
        venue: 'PREI, Université de Moncton',
        date: 'June 17, 2025'
    },
    {
        id: 16,
        type: 'workshop',
        year: 2025,
        status: 'published',
        title: 'L\'éthique en intelligence artificielle et la productivité pour les developpeurs',
        authors: ['Gayap, H.'],
        venue: 'CCNB, Dieppe Canada',
        date: 'April 2025'
    },
    {
        id: 17,
        type: 'workshop',
        year: 2024,
        status: 'published',
        title: 'Introduction à l\'intelligence artificielle: principes fondamentaux de l\'apprentissage automatique',
        authors: ['Gayap, H.'],
        venue: 'ACENET, Moncton Canada',
        date: 'October 9-11, 2024',
        role: 'Instructor'
    },
    {
        id: 18,
        type: 'workshop',
        year: 2024,
        status: 'published',
        title: 'Importance de l\'utilisation des données synthétiques en biologie par l\'intelligence artificielle',
        authors: ['Gayap, H.'],
        venue: 'IARC, Centre de Médecine de Précision du NB, Moncton Canada',
        date: 'August 13, 2024'
    },
    {
        id: 19,
        type: 'workshop',
        year: 2024,
        status: 'published',
        title: 'Classification efficace des images par les Réseaux de Neurones Convolutifs à l\'aide des cartes graphiques NVIDIA et Apple',
        authors: ['Gayap, H.'],
        venue: 'Université de Moncton, Moncton Canada',
        date: 'April 9, 2024'
    },
    {
        id: 20,
        type: 'workshop',
        year: 2023,
        status: 'published',
        title: 'De Yolov1 et au-delà: un aperçu de l\'évolution des architectures Yolo',
        authors: ['Gayap, H.'],
        venue: 'Université de Moncton, Moncton Canada',
        date: 'December 8, 2023'
    },
    {
        id: 21,
        type: 'workshop',
        year: 2023,
        status: 'published',
        title: 'Apprentissage profond pour la détection des crises d\'épilepsie à l\'aide de l\'EEG',
        authors: ['Gayap, H.'],
        venue: 'Université de Moncton, Moncton Canada',
        date: 'December 8, 2023'
    },
    {
        id: 22,
        type: 'workshop',
        year: 2023,
        status: 'published',
        title: 'Ethique pour l\'IA dans les soins de santé, défis et enjeux',
        authors: ['Gayap, H.'],
        venue: 'Université de Moncton, Moncton Canada',
        date: 'November 22, 2023'
    },
    {
        id: 23,
        type: 'workshop',
        year: 2023,
        status: 'published',
        title: 'Apprentissage automatique causal: principes et défis',
        authors: ['Gayap, H.'],
        venue: 'Université de Moncton, Moncton Canada',
        date: 'November 22, 2023'
    },
    {
        id: 24,
        type: 'workshop',
        year: 2023,
        status: 'published',
        title: 'L\'intelligence artificielle pour l\'Internet des objets',
        authors: ['Gayap, H.'],
        venue: 'Collège Communautaire du Nouveau-Brunswick, Dieppe Canada',
        date: 'April 7, 2023'
    },
    {
        id: 25,
        type: 'workshop',
        year: 2023,
        status: 'published',
        title: 'L\'intelligence artificielle et l\'état de l\'art en cybersécurité',
        authors: ['Gayap, H.'],
        venue: 'Collège Communautaire du Nouveau-Brunswick, Dieppe Canada',
        date: 'March 1, 2023'
    },
    {
        id: 26,
        type: 'workshop',
        year: 2022,
        status: 'published',
        title: 'Segmentation des nodules pour le cancer du poumon à l\'aide de l\'apprentissage profond',
        authors: ['Gayap, H.'],
        venue: 'Université de Moncton, Moncton Canada',
        date: 'December 2, 2022'
    }
];

// ==========================================
// NAVIGATION
// ==========================================
const navbar = document.getElementById('navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('.section, .hero');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ==========================================
// SMOOTH SCROLL
// ==========================================
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

// ==========================================
// SCROLL ANIMATIONS
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Add fade-in class to relevant sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.section-title, .about-content, .timeline-item, .experience-item, .leadership-card, .award-card, .contact-content, .contact-details'
    );
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// ==========================================
// STATISTICS COUNTER ANIMATION
// ==========================================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(statNumber => {
                if (!statNumber.classList.contains('animated')) {
                    statNumber.classList.add('animated');
                    animateCounter(statNumber);
                }
            });
        }
    });
}, { threshold: 0.3 });

// Observe the stats section when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.research-stats');
    if (statsSection) {
        statObserver.observe(statsSection);
    }
});

// ==========================================
// PUBLICATIONS
// ==========================================
function renderPublications(filteredPublications = publications) {
    const container = document.getElementById('publications-container');
    container.innerHTML = '';

    if (filteredPublications.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--text-secondary);">
                <p style="font-size: 1.125rem;">${typeof t === 'function' ? t('research.noResults') : 'No publications found matching your criteria.'}</p>
            </div>
        `;
        return;
    }

    filteredPublications.forEach(pub => {
        const card = document.createElement('div');
        card.className = 'publication-card fade-in';
        card.setAttribute('data-type', pub.type);
        card.setAttribute('data-year', pub.year);
        card.setAttribute('data-status', pub.status);

        const authorsList = pub.authors.map(author => {
            if (author.includes('Gayap')) {
                return `<span class="highlight">${author}</span>`;
            }
            return author;
        }).join(', ');

        const statusLabel = typeof t === 'function' ? t('research.status.' + pub.status) : (pub.status === 'review' ? 'In Review' : pub.status.charAt(0).toUpperCase() + pub.status.slice(1));
        const statusBadge = pub.status ? `
            <span class="publication-status ${pub.status}">${statusLabel}</span>
        ` : '';

        const linkHtml = pub.link ? `
            <a href="${pub.link}" class="publication-link" target="_blank" rel="noopener">
                ${typeof t === 'function' ? t('research.viewPublication') : 'View Publication'}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                </svg>
            </a>
        ` : '';

        const dateLabel = typeof t === 'function' ? t('research.date') : 'Date:';
        const typeLabel = typeof t === 'function' ? t('research.type') : 'Type:';
        const dateInfo = pub.date ? `<p class="publication-date"><strong>${dateLabel}</strong> ${pub.date}</p>` : '';
        const presentationType = pub.presentationType ? `<p class="publication-presentation-type"><strong>${typeLabel}</strong> <span class="presentation-badge">${pub.presentationType}</span></p>` : '';

        card.innerHTML = `
            <div class="publication-header">
                <span class="publication-type ${pub.type}">${pub.type}</span>
                ${statusBadge}
            </div>
            <h3 class="publication-title">${pub.title}</h3>
            <p class="publication-authors">${authorsList}</p>
            <p class="publication-venue">${pub.venue}</p>
            ${dateInfo}
            ${presentationType}
            ${linkHtml}
        `;

        container.appendChild(card);
    });

    // Re-observe new elements for scroll animation
    document.querySelectorAll('.publication-card').forEach(el => {
        observer.observe(el);
    });
}

// Filter publications
function filterPublications() {
    const searchTerm = document.getElementById('search-publications').value.toLowerCase();
    const typeFilter = document.getElementById('filter-type').value;
    const presentationFilter = document.getElementById('filter-presentation').value;
    const yearFilter = document.getElementById('filter-year').value;
    const statusFilter = document.getElementById('filter-status').value;

    const filtered = publications.filter(pub => {
        const matchesSearch = pub.title.toLowerCase().includes(searchTerm) ||
                            pub.authors.some(author => author.toLowerCase().includes(searchTerm)) ||
                            pub.venue.toLowerCase().includes(searchTerm);
        const matchesType = typeFilter === 'all' || pub.type === typeFilter;
        const matchesPresentation = presentationFilter === 'all' || pub.presentationType === presentationFilter;
        const matchesYear = yearFilter === 'all' || pub.year.toString() === yearFilter;
        const matchesStatus = statusFilter === 'all' || pub.status === statusFilter;

        return matchesSearch && matchesType && matchesPresentation && matchesYear && matchesStatus;
    });

    renderPublications(filtered);
}

// Event listeners for filters
document.getElementById('search-publications').addEventListener('input', filterPublications);
document.getElementById('filter-type').addEventListener('change', filterPublications);
document.getElementById('filter-presentation').addEventListener('change', filterPublications);
document.getElementById('filter-year').addEventListener('change', filterPublications);
document.getElementById('filter-status').addEventListener('change', filterPublications);

// Initial render
renderPublications();

// ==========================================
// CONTACT FORM
// ==========================================
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    const mailtoLink = `mailto:gthadrien111@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    contactForm.reset();
});

// ==========================================
// PERFORMANCE OPTIMIZATIONS
// ==========================================
// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to search
const searchInput = document.getElementById('search-publications');
searchInput.removeEventListener('input', filterPublications);
searchInput.addEventListener('input', debounce(filterPublications, 300));

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully!');
    
    // Initial active nav link
    updateActiveNavLink();
    
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// ==========================================
// EASTER EGG - Console Message
// ==========================================
console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cInterested in AI and Bioinformatics?', 'font-size: 14px; color: #10b981;');
console.log('%cLet\'s connect: gthadrien111@gmail.com', 'font-size: 14px; color: #6b7280;');

