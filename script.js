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
        link: 'https://pubmed.ncbi.nlm.nih.gov/41492654/'
    },
    {
        id: 2,
        type: 'journal',
        year: 2024,
        status: 'published',
        title: 'SALM: A Unified Model for 2D and 3D Region of Interest Segmentation in Lung CT Scans Using Vision Transformers',
        authors: ['Gayap, Hadrien T.', 'Moulay A. Akhloufi'],
        venue: 'Applied Bio sciences. MDPI',
        link: 'https://doi.org/10.3390/applbiosci4010011'
    },
    {
        id: 3,
        type: 'journal',
        year: 2026,
        status: 'published',
        title: 'Lung-Mamba: Lung nodule segmentation model optimized by Mamba\'s selective state spaces',
        authors: ['Gayap, Hadrien T.', 'Akhloufi, Moulay A.'],
        venue: 'Biomedical Engineering Advances, 100214. Elsevier',
        link: 'https://www.sciencedirect.com/science/article/pii/S2667099226000095'
    },
    {
        id: 4,
        type: 'journal',
        year: 2024,
        status: 'published',
        title: 'Deep Machine Learning for Medical Diagnosis, Application to Lung Cancer Detection: A Review',
        authors: ['Gayap, Hadrien T.', 'Moulay A. Akhloufi'],
        venue: 'BioMedInformatics 4.1 (2024): 236-284',
        link: 'https://doi.org/10.3390/biomedinformatics4010015'
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
        date: 'December 16, 2025',
        link: 'https://www.linkedin.com/posts/hadriengayap_intelligenceartificielle-santaez-deeplearning-activity-7424490871380922368-qQBp'
    },
    {
        id: 28,
        type: 'workshop',
        year: 2026,
        status: 'published',
        title: 'État de l\'art de l\'intelligence artificielle dans le domaine militaire',
        authors: ['Gayap, H.'],
        venue: 'Corps du Bataillon d\'Intervention Rapide (BIR), HELIOS, Cameroun',
        date: 'January 7, 2026',
        link: 'https://www.linkedin.com/posts/hadriengayap_cameroun-bir-ia-activity-7415101184639844352-0zZG'
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
// TRAFFIC LIGHT BUTTONS
// ==========================================
(function initTrafficLights() {
    const frame = document.getElementById('window-frame');
    const body = document.getElementById('window-body');
    const closedMsg = document.getElementById('closed-message');
    const footer = document.querySelector('.window-footer');

    const closeBtn = document.getElementById('tl-close');
    const minimizeBtn = document.getElementById('tl-minimize');
    const maximizeBtn = document.getElementById('tl-maximize');
    const restartBtn = document.getElementById('restart-btn');

    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            if (body) body.style.display = 'none';
            if (footer) footer.style.display = 'none';
            if (closedMsg) closedMsg.classList.add('visible');
            frame.classList.remove('minimized', 'maximized');
        });
    }

    if (minimizeBtn) {
        minimizeBtn.addEventListener('click', function () {
            frame.classList.toggle('minimized');
            frame.classList.remove('maximized');
            if (closedMsg) closedMsg.classList.remove('visible');
            if (body) body.style.display = '';
            if (footer) footer.style.display = '';
        });
    }

    if (maximizeBtn) {
        maximizeBtn.addEventListener('click', function () {
            frame.classList.toggle('maximized');
            frame.classList.remove('minimized');
            if (closedMsg) closedMsg.classList.remove('visible');
            if (body) body.style.display = '';
            if (footer) footer.style.display = '';
        });
    }

    if (restartBtn) {
        restartBtn.addEventListener('click', function () {
            if (closedMsg) closedMsg.classList.remove('visible');
            if (body) body.style.display = '';
            if (footer) footer.style.display = '';
            frame.classList.remove('minimized', 'maximized');
        });
    }
})();

// ==========================================
// MOBILE NAV TOGGLE
// ==========================================
(function initMobileNav() {
    const toggle = document.getElementById('nav-toggle');
    const links = document.getElementById('nav-links');
    if (toggle && links) {
        toggle.addEventListener('click', function () {
            links.classList.toggle('active');
        });
    }
})();

// ==========================================
// TYPING EFFECT (Home page)
// ==========================================
(function initTypingEffect() {
    const el = document.getElementById('typing-text');
    if (!el) return;

    const lang = document.documentElement.getAttribute('data-lang') || 'en';
    const texts = {
        en: '> Hello, I\'m',
        fr: '> Bonjour, je suis'
    };
    const text = texts[lang] || texts.en;
    let i = 0;

    function type() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(type, 60);
        }
    }

    // Small delay before starting
    setTimeout(type, 500);
})();

// ==========================================
// RENDER PUBLICATION CARD (shared utility)
// ==========================================
function renderPubCard(pub) {
    const authorsList = pub.authors.map(function (author) {
        if (author.includes('Gayap')) {
            return '<span class="highlight">' + author + '</span>';
        }
        return author;
    }).join(', ');

    const statusLabel = typeof t === 'function' ? t('research.status.' + pub.status) : (pub.status === 'review' ? 'In Review' : pub.status.charAt(0).toUpperCase() + pub.status.slice(1));
    const statusHtml = pub.status ? '<span class="pub-status ' + pub.status + '">' + statusLabel + '</span>' : '';

    const linkHtml = pub.link ? '<a href="' + pub.link + '" class="pub-link" target="_blank" rel="noopener">' + (typeof t === 'function' ? t('research.viewPublication') : 'View Publication') + ' &rarr;</a>' : '';

    const dateLabel = typeof t === 'function' ? t('research.date') : 'Date:';
    const dateHtml = pub.date ? '<span class="pub-date">' + dateLabel + ' ' + pub.date + '</span>' : '';
    const presentationHtml = pub.presentationType ? '<span class="pub-presentation">' + pub.presentationType + '</span>' : '';

    return '<div class="pub-card" data-type="' + pub.type + '" data-year="' + pub.year + '" data-status="' + pub.status + '">' +
        '<div class="pub-card-header">' +
            '<span class="pub-tag ' + pub.type + '">' + pub.type + '</span>' +
            statusHtml +
            '<span class="pub-year">' + pub.year + '</span>' +
        '</div>' +
        '<h3 class="pub-title">' + pub.title + '</h3>' +
        '<p class="pub-authors">' + authorsList + '</p>' +
        '<p class="pub-venue">' + pub.venue + '</p>' +
        (dateHtml || presentationHtml || linkHtml ?
            '<div class="pub-meta">' + dateHtml + presentationHtml + linkHtml + '</div>' : '') +
    '</div>';
}

// ==========================================
// HOME PAGE: Featured & Recent publications
// ==========================================
(function initHomePubs() {
    // Featured: most recent journal article
    var featuredContainer = document.getElementById('featured-publication');
    if (featuredContainer) {
        var journals = publications.filter(function (p) { return p.type === 'journal'; });
        journals.sort(function (a, b) { return b.year - a.year || b.id - a.id; });
        if (journals.length > 0) {
            featuredContainer.innerHTML = renderPubCard(journals[0]);
        }
    }

    // Recent: next 4 most recent (any type)
    var recentContainer = document.getElementById('recent-publications');
    if (recentContainer) {
        var sorted = publications.slice().sort(function (a, b) { return b.year - a.year || b.id - a.id; });
        var recent = sorted.slice(1, 5);
        recentContainer.innerHTML = recent.map(renderPubCard).join('');
    }
})();

// ==========================================
// SIDEBAR: Recent publications (all pages)
// ==========================================
(function initSidebarPubs() {
    var container = document.getElementById('sidebar-publications');
    if (!container) return;

    var sorted = publications.slice().sort(function (a, b) { return b.year - a.year || b.id - a.id; });
    var recent = sorted.slice(0, 5);

    container.innerHTML = recent.map(function (pub) {
        return '<a href="research.html" class="sidebar-pub">' +
            '<div class="sidebar-pub-title">' + pub.title.substring(0, 60) + (pub.title.length > 60 ? '...' : '') + '</div>' +
            '<div class="sidebar-pub-meta">' + pub.type + ' &middot; ' + pub.year + '</div>' +
        '</a>';
    }).join('');
})();

// ==========================================
// RESEARCH PAGE: Full publications + filtering
// ==========================================
(function initResearchPage() {
    var container = document.getElementById('publications-container');
    if (!container) return;

    var searchInput = document.getElementById('search-publications');
    var filterType = document.getElementById('filter-type');
    var filterPresentation = document.getElementById('filter-presentation');
    var filterYear = document.getElementById('filter-year');
    var filterStatus = document.getElementById('filter-status');

    function renderAll(filtered) {
        if (filtered.length === 0) {
            container.innerHTML = '<div class="no-results">' + (typeof t === 'function' ? t('research.noResults') : 'No publications found matching your criteria.') + '</div>';
            return;
        }
        container.innerHTML = filtered.map(renderPubCard).join('');
    }

    function filterPublications() {
        var searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        var type = filterType ? filterType.value : 'all';
        var presentation = filterPresentation ? filterPresentation.value : 'all';
        var year = filterYear ? filterYear.value : 'all';
        var status = filterStatus ? filterStatus.value : 'all';

        var filtered = publications.filter(function (pub) {
            var matchesSearch = pub.title.toLowerCase().includes(searchTerm) ||
                pub.authors.some(function (a) { return a.toLowerCase().includes(searchTerm); }) ||
                pub.venue.toLowerCase().includes(searchTerm);
            var matchesType = type === 'all' || pub.type === type;
            var matchesPresentation = presentation === 'all' || pub.presentationType === presentation;
            var matchesYear = year === 'all' || pub.year.toString() === year;
            var matchesStatus = status === 'all' || pub.status === status;

            return matchesSearch && matchesType && matchesPresentation && matchesYear && matchesStatus;
        });

        // Sort by year desc then id desc
        filtered.sort(function (a, b) { return b.year - a.year || b.id - a.id; });

        renderAll(filtered);
    }

    // Debounce for search
    var searchTimeout;
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(filterPublications, 300);
        });
    }
    if (filterType) filterType.addEventListener('change', filterPublications);
    if (filterPresentation) filterPresentation.addEventListener('change', filterPublications);
    if (filterYear) filterYear.addEventListener('change', filterPublications);
    if (filterStatus) filterStatus.addEventListener('change', filterPublications);

    // Expose for i18n re-render
    window.filterPublications = filterPublications;

    // Initial render
    filterPublications();
})();

// ==========================================
// STAT COUNTER ANIMATION (Research page)
// ==========================================
(function initStatCounters() {
    var statNumbers = document.querySelectorAll('.stat-number[data-target]');
    if (statNumbers.length === 0) return;

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var el = entry.target;
                if (el.classList.contains('animated')) return;
                el.classList.add('animated');

                var target = parseInt(el.getAttribute('data-target'));
                var duration = 1500;
                var increment = target / (duration / 16);
                var current = 0;

                var timer = setInterval(function () {
                    current += increment;
                    if (current >= target) {
                        el.textContent = target;
                        clearInterval(timer);
                    } else {
                        el.textContent = Math.floor(current);
                    }
                }, 16);
            }
        });
    }, { threshold: 0.3 });

    statNumbers.forEach(function (el) { observer.observe(el); });
})();

// ==========================================
// CONTACT FORM (About page)
// ==========================================
(function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;

        var mailtoLink = 'mailto:gthadrien111@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);
        window.location.href = mailtoLink;
        form.reset();
    });
})();

// ==========================================
// COLLAPSIBLE SECTIONS (About page mobile)
// ==========================================
function toggleSection(btn) {
    var isExpanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isExpanded));
}

// ==========================================
// CONSOLE EASTER EGG
// ==========================================
console.log('%c> hadriengayap.io', 'font-family: monospace; font-size: 16px; font-weight: bold; color: #00d4ff;');
console.log('%c> AI Research Engineer | Bioinformatics', 'font-family: monospace; font-size: 12px; color: #8b949e;');
console.log('%c> Contact: gthadrien111@gmail.com', 'font-family: monospace; font-size: 12px; color: #484f58;');
