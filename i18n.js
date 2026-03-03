// ==========================================
// INTERNATIONALIZATION (i18n)
// ==========================================

const translations = {
    en: {
        // Meta
        "meta.title": "Hadrien Gayap | AI Research Engineer",
        "meta.description": "Hadrien Gayap - AI Research Engineer specializing in Deep Learning for Medical Diagnosis and Cancer Detection",

        // Navigation
        "nav.home": "home",
        "nav.research": "research",
        "nav.about": "about",

        // Hero
        "hero.subtitle": "AI Research Engineer & Bioinformatics Specialist",
        "hero.tagline": "Advancing Medical Diagnosis through Deep Learning & Cancer Detection",
        "hero.cta.research": "View Research",
        "hero.cta.contact": "Get in Touch",

        // Home page
        "home.featured": "Latest Publication",
        "home.recentResearch": "Recent Research",
        "home.viewAll": "View All Publications \u2192",

        // Sidebar
        "sidebar.role": "AI Research Engineer",
        "sidebar.recentPubs": "Recent Publications",
        "sidebar.quickLinks": "Quick Links",
        "sidebar.allPubs": "All Publications",
        "sidebar.journalsConf": "Journals, Conferences & Workshops",
        "sidebar.aboutMe": "About Me",
        "sidebar.bioEdu": "Bio, Education & Experience",
        "sidebar.contact": "Contact",
        "sidebar.getInTouch": "Get in touch",
        "sidebar.backHome": "Back to home page",

        // Closed message
        "closed.title": "Process terminated.",
        "closed.message": "hadriengayap.io has stopped running. Would you like to restart?",
        "closed.restart": "Restart",

        // About
        "about.title": "About Me",
        "about.lead": "I am a Master's and Computer Engineer specialized in Artificial Intelligence and Bioinformatics through research. Self-taught with strong work autonomy and self-discipline to tackle major challenges.",
        "about.paragraph2": "I have developed visionary leadership over the years, capable of inspiring and mobilizing teams around ambitious goals. This ability allows me to anticipate social and technological challenges, propose innovative solutions, and guide complex projects to success while fostering collaboration and alignment of efforts.",
        "about.skills.title": "Skills & Expertise",
        "about.skills.languages": "Languages",
        "about.skills.lang.french": "French (Native)",
        "about.skills.lang.english": "English (Fluent)",
        "about.skills.programming": "Programming",
        "about.skills.expertise": "Expertise",
        "about.skills.llm": "Large Language Models",
        "about.skills.dl": "Deep Learning",
        "about.skills.ml": "Machine Learning",
        "about.skills.bioinfo": "Bioinformatics",
        "about.skills.compeng": "Computer Engineering",

        // Education
        "about.education": "Education",
        "about.edu.phd.date": "2025 - 2028",
        "about.edu.phd.title": "PhD in Applied Sciences",
        "about.edu.phd.spec": "Specialization in AI for Biology",
        "about.edu.msc.date": "2022 - 2025",
        "about.edu.msc.title": "Master's in Computer Science",
        "about.edu.msc.spec": "Specialization in Artificial Intelligence",
        "about.edu.meng.date": "2019 - 2022",
        "about.edu.meng.title": "Master's in Computer Engineering",
        "about.edu.meng.spec": "Specialization in Data Science",
        "about.edu.prep.date": "2016 - 2019",
        "about.edu.prep.title": "Engineering Preparatory Class",

        // Research
        "research.title": "Research & Publications",
        "research.stat.journals": "Journal Articles",
        "research.stat.conferences": "Conferences",
        "research.stat.workshops": "Workshops",
        "research.search.placeholder": "Search publications...",
        "research.filter.allTypes": "All Types",
        "research.filter.journal": "Journal Articles",
        "research.filter.conference": "Conferences",
        "research.filter.workshop": "Workshops",
        "research.filter.allPresentation": "All Presentation Types",
        "research.filter.poster": "Poster",
        "research.filter.oral": "Oral Presentation",
        "research.filter.presentation": "Presentation",
        "research.filter.allYears": "All Years",
        "research.filter.allStatus": "All Status",
        "research.filter.published": "Published",
        "research.filter.review": "In Review",
        "research.filter.accepted": "Accepted",
        "research.noResults": "No publications found matching your criteria.",
        "research.viewPublication": "View Publication",
        "research.date": "Date:",
        "research.type": "Type:",
        "research.status.published": "Published",
        "research.status.review": "In Review",
        "research.status.accepted": "Accepted",

        // Experience
        "exp.title": "Professional Experience",
        "exp.0.date": "February 2026 - Present",
        "exp.0.role": "AI Research Engineer",
        "exp.0.org": "Lexa Intelligence (Frontier Security)",
        "exp.0.b1": "R&D team member developing AI solutions for frontier security",
        "exp.1.date": "May 2023 - February 2026",
        "exp.1.role": "AI & Computer Science Specialist",
        "exp.1.org": "Atlantic Institute for Cancer Research, Moncton, Canada",
        "exp.1.b1": "Lead Developer of LIMS for Pan-Atlantic TerryFox Cancer Project",
        "exp.1.b2": "Data and compute server management",
        "exp.1.b3": "Data science and analysis",
        "exp.1.b4": "Development of AI models for cancer detection in DNA sequences",
        "exp.2.date": "May 2025 - Present",
        "exp.2.role": "AI Research Professional",
        "exp.2.org": "Embedded Intelligent and Autonomous Systems (EMBIA), Moncton, Canada",
        "exp.2.b1": "Lead of Mentorship Program",
        "exp.2.b2": "AI model development for computer vision",
        "exp.2.b3": "Deep learning research for cancer detection",
        "exp.3.date": "January 2023 - May 2025",
        "exp.3.role": "Research Assistant - Artificial Intelligence",
        "exp.3.org": "Perception, Robotics and Intelligent Machine (PRIME), UMoncton, Canada",
        "exp.3.b1": "Development of AI for medical diagnosis",
        "exp.4.date": "May 2023 - April 2024",
        "exp.4.role": "Research Assistant - Bioinformatics & AI",
        "exp.4.org": "New Brunswick Centre for Precision Medicine, Canada",
        "exp.4.b1": "Combined RNA sequencing (RNA-seq) with low-coverage whole genome sequencing for detecting clinically relevant molecular biomarkers in leukemia",
        "exp.4.b2": "Redefinition of tumor mutational burden measurement using ICGC database",
        "exp.5.date": "January - July 2022",
        "exp.5.role": "Research Assistant - Internship",
        "exp.5.org": "ESPRIT-Tech, Tunisia",
        "exp.5.b1": "Stroke prediction using AI",
        "exp.6.date": "June - August 2021",
        "exp.6.role": "Research Student - Engineering Internship",
        "exp.6.org": "ESPRIT-Tech, Tunisia",
        "exp.6.b1": "Epilepsy prediction using AI",
        "exp.6.b2": "Analysis of EEG channel contributions for intelligent prediction",

        // Leadership
        "leadership.title": "Leadership & Community Engagement",
        "leadership.1.role": "Vice-President",
        "leadership.1.org": "Provincial Council of People of African Descent of NB",
        "leadership.1.date": "January 2025 - Present",
        "leadership.1.b1": "Official spokesperson and public face of the organization",
        "leadership.1.b2": "Strategic leadership and mission implementation",
        "leadership.1.b3": "Advocacy with governments and institutions",
        "leadership.2.role": "Volunteer Leader",
        "leadership.2.org": "Development & Peace, Canada",
        "leadership.2.date": "January 2023 - Present",
        "leadership.2.b1": "Lead francophone youth division at Universit\u00e9 de Moncton",
        "leadership.2.b2": "Working towards a world of justice and peace",
        "leadership.3.role": "Volunteer Manager",
        "leadership.3.org": "E-Sport Hall, Universit\u00e9 de Moncton",
        "leadership.3.date": "September 2024 - Present",
        "leadership.3.b1": "Volunteer management and coordination",
        "leadership.3.b2": "Service schedule planning",
        "leadership.3.b3": "Facility maintenance",
        "leadership.4.role": "IT Specialist",
        "leadership.4.org": "Provincial Election Campaign, Moncton-Est",
        "leadership.4.date": "June - October 2024",
        "leadership.4.b1": "Digital communication plan implementation",
        "leadership.4.b2": "Candidate calendar management",
        "leadership.4.b3": "Voter database management",
        "leadership.5.role": "Coordinator",
        "leadership.5.org": "REFACAM Association - Cameroon Families of Greater Moncton",
        "leadership.5.date": "December 2023 - May 2024",
        "leadership.5.b1": "Collaboration with other city associations",
        "leadership.5.b2": "Parish outreach and awareness",
        "leadership.6.role": "Volunteer",
        "leadership.6.org": "Archdiocese of Moncton",
        "leadership.6.date": "February 2023 - Present",
        "leadership.6.b1": "Website redesign project engineer",
        "leadership.6.b2": "Catechesis coordinator",
        "leadership.6.b3": "Knights of Columbus member",
        "leadership.6.b4": "Sunday liturgy coordinator",
        "leadership.7.role": "Student Ambassador",
        "leadership.7.org": "ESPRIT, Tunisia",
        "leadership.7.date": "2021 - 2022",
        "leadership.7.b1": "Student representative at Honoris United Universities",
        "leadership.7.b2": "International student welcome and support",
        "leadership.8.role": "Scientific Council Member",
        "leadership.8.org": "ESPRIT, Tunisia",
        "leadership.8.date": "2020 - 2021",
        "leadership.8.b1": "Review of academic programs and research",
        "leadership.8.b2": "Faculty career development consultation",

        // Awards
        "awards.title": "Awards & Recognition",
        "awards.totalLabel": "Total Scholarships & Awards",
        "awards.1.name": "CCG Leadership Scholarship",
        "awards.1.org": "CCGoodwin Consulting",
        "awards.2.name": "L'alUMni Leadership Scholarship",
        "awards.2.org": "Meloche Monnex Insurance",
        "awards.3.name": "Study Scholarship",
        "awards.3.org": "Knights of Columbus, Moncton",
        "awards.4.name": "Prof. Moulay Akhloufi Research Scholarship",
        "awards.4.org": "Universit\u00e9 de Moncton",
        "awards.5.name": "Dr. Denis Prud'homme & AIEECUM Leadership Scholarship",
        "awards.5.org": "Universit\u00e9 de Moncton",
        "awards.6.name": "Excellence Scholarship",
        "awards.6.org": "CAFI - Government of New Brunswick",
        "awards.6.note": "International Student Retention Program",
        "awards.7.name": "NDA Excellence Scholarship",
        "awards.7.org": "Notre Dame d'Acadie Parish",
        "awards.8.name": "Research Grant",
        "awards.8.org": "Research Assistant with Prof. Moulay Akhloufi",
        "awards.9.name": "Finalist - Project Gala",
        "awards.9.org": "ESPRIT, Tunisia - Data Science Category",
        "awards.9.note": "Intelligent platform for epilepsy treatment support",
        "awards.10.name": "Finalist - GETEC Competition",
        "awards.10.org": "Ministry of Higher Education, Cameroon",
        "awards.10.note": "App facilitating telecom operator services access",

        // Affiliations
        "affiliations.title": "Professional Affiliations",
        "affil.1.name": "Institute of Electrical and Electronics Engineers (IEEE)",
        "affil.1.detail": "Member, September 2021 - Present",
        "affil.2.name": "Intel Corporation",
        "affil.2.detail": "oneAPI Student Ambassador, September 2023 - Present",
        "affil.3.name": "Canadian Respiratory Research Network",
        "affil.3.detail": "Research Trainee, September 2023 - Present",
        "affil.4.name": "Tunisian Order of Engineers",
        "affil.4.detail": "Computer Engineer, July 2022 - Present",

        // Contact
        "contact.title": "Get In Touch",
        "contact.info.title": "Contact Information",
        "contact.location.label": "Location",
        "contact.location.value": "Moncton, New Brunswick, Canada",
        "contact.email.label": "Email",
        "contact.form.title": "Send a Message",
        "contact.form.name": "Name",
        "contact.form.email": "Email",
        "contact.form.subject": "Subject",
        "contact.form.message": "Message",
        "contact.form.submit": "Send Message",

        // Footer
        "footer.copyright": "\u00a9 2026 Hadrien Gayap",
        "footer.email": "Email",
        "footer.message": "message me \u2192"
    },

    fr: {
        // Meta
        "meta.title": "Hadrien Gayap | Ing\u00e9nieur de recherche en IA",
        "meta.description": "Hadrien Gayap - Ing\u00e9nieur de recherche en IA sp\u00e9cialis\u00e9 en apprentissage profond pour le diagnostic m\u00e9dical et la d\u00e9tection du cancer",

        // Navigation
        "nav.home": "accueil",
        "nav.research": "recherche",
        "nav.about": "\u00e0 propos",

        // Hero
        "hero.subtitle": "Ing\u00e9nieur de recherche en IA & Sp\u00e9cialiste en bio-informatique",
        "hero.tagline": "Faire progresser le diagnostic m\u00e9dical par l'apprentissage profond et la d\u00e9tection du cancer",
        "hero.cta.research": "Voir la recherche",
        "hero.cta.contact": "Me contacter",

        // Home page
        "home.featured": "Derni\u00e8re publication",
        "home.recentResearch": "Recherche r\u00e9cente",
        "home.viewAll": "Voir toutes les publications \u2192",

        // Sidebar
        "sidebar.role": "Ing\u00e9nieur de recherche en IA",
        "sidebar.recentPubs": "Publications r\u00e9centes",
        "sidebar.quickLinks": "Liens rapides",
        "sidebar.allPubs": "Toutes les publications",
        "sidebar.journalsConf": "Revues, Conf\u00e9rences & Ateliers",
        "sidebar.aboutMe": "\u00c0 propos de moi",
        "sidebar.bioEdu": "Bio, Formation & Exp\u00e9rience",
        "sidebar.contact": "Contact",
        "sidebar.getInTouch": "Me contacter",
        "sidebar.backHome": "Retour \u00e0 l'accueil",

        // Closed message
        "closed.title": "Processus termin\u00e9.",
        "closed.message": "hadriengayap.io a cess\u00e9 de fonctionner. Voulez-vous red\u00e9marrer ?",
        "closed.restart": "Red\u00e9marrer",

        // About
        "about.title": "\u00c0 propos de moi",
        "about.lead": "Je suis ma\u00eetre et ing\u00e9nieur en informatique sp\u00e9cialis\u00e9 en intelligence artificielle et bio-informatique par la recherche. Autodidacte avec une forte autonomie de travail et une autodiscipline pour relever les d\u00e9fis majeurs.",
        "about.paragraph2": "J'ai d\u00e9velopp\u00e9 un leadership visionnaire au fil des ann\u00e9es, capable d'inspirer et de mobiliser des \u00e9quipes autour d'objectifs ambitieux. Cette capacit\u00e9 me permet d'anticiper les d\u00e9fis sociaux et technologiques, de proposer des solutions innovantes et de mener des projets complexes vers le succ\u00e8s tout en favorisant la collaboration et l'alignement des efforts.",
        "about.skills.title": "Comp\u00e9tences & Expertise",
        "about.skills.languages": "Langues",
        "about.skills.lang.french": "Fran\u00e7ais (Langue maternelle)",
        "about.skills.lang.english": "Anglais (Courant)",
        "about.skills.programming": "Programmation",
        "about.skills.expertise": "Expertise",
        "about.skills.llm": "Grands mod\u00e8les de langage",
        "about.skills.dl": "Apprentissage profond",
        "about.skills.ml": "Apprentissage automatique",
        "about.skills.bioinfo": "Bio-informatique",
        "about.skills.compeng": "G\u00e9nie informatique",

        // Education
        "about.education": "Formation",
        "about.edu.phd.date": "2025 - 2028",
        "about.edu.phd.title": "Doctorat en sciences appliqu\u00e9es",
        "about.edu.phd.spec": "Sp\u00e9cialisation en IA pour la biologie",
        "about.edu.msc.date": "2022 - 2025",
        "about.edu.msc.title": "Ma\u00eetrise en informatique",
        "about.edu.msc.spec": "Sp\u00e9cialisation en intelligence artificielle",
        "about.edu.meng.date": "2019 - 2022",
        "about.edu.meng.title": "Dipl\u00f4me d'ing\u00e9nieur en informatique",
        "about.edu.meng.spec": "Sp\u00e9cialisation en science des donn\u00e9es",
        "about.edu.prep.date": "2016 - 2019",
        "about.edu.prep.title": "Classe pr\u00e9paratoire en ing\u00e9nierie",

        // Research
        "research.title": "Recherche & Publications",
        "research.stat.journals": "Articles de revue",
        "research.stat.conferences": "Conf\u00e9rences",
        "research.stat.workshops": "Ateliers",
        "research.search.placeholder": "Rechercher des publications...",
        "research.filter.allTypes": "Tous les types",
        "research.filter.journal": "Articles de revue",
        "research.filter.conference": "Conf\u00e9rences",
        "research.filter.workshop": "Ateliers",
        "research.filter.allPresentation": "Tous les types de pr\u00e9sentation",
        "research.filter.poster": "Poster",
        "research.filter.oral": "Pr\u00e9sentation orale",
        "research.filter.presentation": "Pr\u00e9sentation",
        "research.filter.allYears": "Toutes les ann\u00e9es",
        "research.filter.allStatus": "Tous les statuts",
        "research.filter.published": "Publi\u00e9",
        "research.filter.review": "En r\u00e9vision",
        "research.filter.accepted": "Accept\u00e9",
        "research.noResults": "Aucune publication ne correspond \u00e0 vos crit\u00e8res.",
        "research.viewPublication": "Voir la publication",
        "research.date": "Date :",
        "research.type": "Type :",
        "research.status.published": "Publi\u00e9",
        "research.status.review": "En r\u00e9vision",
        "research.status.accepted": "Accept\u00e9",

        // Experience
        "exp.title": "Exp\u00e9rience professionnelle",
        "exp.0.date": "F\u00e9vrier 2026 - Pr\u00e9sent",
        "exp.0.role": "Ing\u00e9nieur de recherche en IA",
        "exp.0.org": "Lexa Intelligence (S\u00e9curit\u00e9 fronti\u00e8re)",
        "exp.0.b1": "Membre de l'\u00e9quipe R&D d\u00e9veloppant des solutions d'IA pour la s\u00e9curit\u00e9 fronti\u00e8re",
        "exp.1.date": "Mai 2023 - F\u00e9vrier 2026",
        "exp.1.role": "Sp\u00e9cialiste en IA & Informatique",
        "exp.1.org": "Institut atlantique de recherche sur le cancer, Moncton, Canada",
        "exp.1.b1": "D\u00e9veloppeur principal du LIMS pour le projet pan-atlantique TerryFox sur le cancer",
        "exp.1.b2": "Gestion des serveurs de donn\u00e9es et de calcul",
        "exp.1.b3": "Science et analyse des donn\u00e9es",
        "exp.1.b4": "D\u00e9veloppement de mod\u00e8les d'IA pour la d\u00e9tection du cancer dans les s\u00e9quences ADN",
        "exp.2.date": "Mai 2025 - Pr\u00e9sent",
        "exp.2.role": "Professionnel de recherche en IA",
        "exp.2.org": "Syst\u00e8mes embarqu\u00e9s intelligents et autonomes (EMBIA), Moncton, Canada",
        "exp.2.b1": "Responsable du programme de mentorat",
        "exp.2.b2": "D\u00e9veloppement de mod\u00e8les d'IA pour la vision par ordinateur",
        "exp.2.b3": "Recherche en apprentissage profond pour la d\u00e9tection du cancer",
        "exp.3.date": "Janvier 2023 - Mai 2025",
        "exp.3.role": "Assistant de recherche - Intelligence artificielle",
        "exp.3.org": "Perception, Robotique et Machine Intelligente (PRIME), UMoncton, Canada",
        "exp.3.b1": "D\u00e9veloppement de l'IA pour le diagnostic m\u00e9dical",
        "exp.4.date": "Mai 2023 - Avril 2024",
        "exp.4.role": "Assistant de recherche - Bio-informatique & IA",
        "exp.4.org": "Centre de m\u00e9decine de pr\u00e9cision du Nouveau-Brunswick, Canada",
        "exp.4.b1": "Combinaison du s\u00e9quen\u00e7age ARN (RNA-seq) avec le s\u00e9quen\u00e7age du g\u00e9nome entier \u00e0 faible couverture pour la d\u00e9tection de biomarqueurs mol\u00e9culaires cliniquement pertinents dans la leuc\u00e9mie",
        "exp.4.b2": "Red\u00e9finition de la mesure de la charge mutationnelle tumorale \u00e0 l'aide de la base de donn\u00e9es ICGC",
        "exp.5.date": "Janvier - Juillet 2022",
        "exp.5.role": "Assistant de recherche - Stage",
        "exp.5.org": "ESPRIT-Tech, Tunisie",
        "exp.5.b1": "Pr\u00e9diction des AVC \u00e0 l'aide de l'IA",
        "exp.6.date": "Juin - Ao\u00fbt 2021",
        "exp.6.role": "\u00c9tudiant chercheur - Stage d'ing\u00e9nierie",
        "exp.6.org": "ESPRIT-Tech, Tunisie",
        "exp.6.b1": "Pr\u00e9diction de l'\u00e9pilepsie \u00e0 l'aide de l'IA",
        "exp.6.b2": "Analyse des contributions des canaux EEG pour la pr\u00e9diction intelligente",

        // Leadership
        "leadership.title": "Leadership & Engagement communautaire",
        "leadership.1.role": "Vice-pr\u00e9sident",
        "leadership.1.org": "Conseil provincial des personnes d'ascendance africaine du N.-B.",
        "leadership.1.date": "Janvier 2025 - Pr\u00e9sent",
        "leadership.1.b1": "Porte-parole officiel et visage public de l'organisation",
        "leadership.1.b2": "Leadership strat\u00e9gique et mise en \u0153uvre de la mission",
        "leadership.1.b3": "Plaidoyer aupr\u00e8s des gouvernements et des institutions",
        "leadership.2.role": "Leader b\u00e9n\u00e9vole",
        "leadership.2.org": "D\u00e9veloppement et Paix, Canada",
        "leadership.2.date": "Janvier 2023 - Pr\u00e9sent",
        "leadership.2.b1": "Responsable de la division jeunesse francophone \u00e0 l'Universit\u00e9 de Moncton",
        "leadership.2.b2": "\u0152uvrer pour un monde de justice et de paix",
        "leadership.3.role": "Gestionnaire b\u00e9n\u00e9vole",
        "leadership.3.org": "Salle E-Sport, Universit\u00e9 de Moncton",
        "leadership.3.date": "Septembre 2024 - Pr\u00e9sent",
        "leadership.3.b1": "Gestion et coordination des b\u00e9n\u00e9voles",
        "leadership.3.b2": "Planification des horaires de service",
        "leadership.3.b3": "Entretien des installations",
        "leadership.4.role": "Sp\u00e9cialiste TI",
        "leadership.4.org": "Campagne \u00e9lectorale provinciale, Moncton-Est",
        "leadership.4.date": "Juin - Octobre 2024",
        "leadership.4.b1": "Mise en \u0153uvre du plan de communication num\u00e9rique",
        "leadership.4.b2": "Gestion du calendrier du candidat",
        "leadership.4.b3": "Gestion de la base de donn\u00e9es des \u00e9lecteurs",
        "leadership.5.role": "Coordonnateur",
        "leadership.5.org": "Association REFACAM - Familles camerounaises du Grand Moncton",
        "leadership.5.date": "D\u00e9cembre 2023 - Mai 2024",
        "leadership.5.b1": "Collaboration avec les autres associations de la ville",
        "leadership.5.b2": "Sensibilisation et rayonnement paroissial",
        "leadership.6.role": "B\u00e9n\u00e9vole",
        "leadership.6.org": "Archidioc\u00e8se de Moncton",
        "leadership.6.date": "F\u00e9vrier 2023 - Pr\u00e9sent",
        "leadership.6.b1": "Ing\u00e9nieur du projet de refonte du site web",
        "leadership.6.b2": "Coordonnateur de cat\u00e9ch\u00e8se",
        "leadership.6.b3": "Membre des Chevaliers de Colomb",
        "leadership.6.b4": "Coordonnateur de la liturgie dominicale",
        "leadership.7.role": "Ambassadeur \u00e9tudiant",
        "leadership.7.org": "ESPRIT, Tunisie",
        "leadership.7.date": "2021 - 2022",
        "leadership.7.b1": "Repr\u00e9sentant \u00e9tudiant \u00e0 Honoris United Universities",
        "leadership.7.b2": "Accueil et soutien des \u00e9tudiants internationaux",
        "leadership.8.role": "Membre du conseil scientifique",
        "leadership.8.org": "ESPRIT, Tunisie",
        "leadership.8.date": "2020 - 2021",
        "leadership.8.b1": "R\u00e9vision des programmes acad\u00e9miques et de la recherche",
        "leadership.8.b2": "Consultation sur le d\u00e9veloppement de carri\u00e8re du corps professoral",

        // Awards
        "awards.title": "Prix & Distinctions",
        "awards.totalLabel": "Total des bourses et prix",
        "awards.1.name": "Bourse de leadership CCG",
        "awards.1.org": "CCGoodwin Consulting",
        "awards.2.name": "Bourse de leadership l'alUMni",
        "awards.2.org": "Assurance Meloche Monnex",
        "awards.3.name": "Bourse d'\u00e9tude",
        "awards.3.org": "Chevaliers de Colomb, Moncton",
        "awards.4.name": "Bourse de recherche Prof. Moulay Akhloufi",
        "awards.4.org": "Universit\u00e9 de Moncton",
        "awards.5.name": "Bourse de leadership Dr. Denis Prud'homme & AIEECUM",
        "awards.5.org": "Universit\u00e9 de Moncton",
        "awards.6.name": "Bourse d'excellence",
        "awards.6.org": "CAFI - Gouvernement du Nouveau-Brunswick",
        "awards.6.note": "Programme de r\u00e9tention des \u00e9tudiants internationaux",
        "awards.7.name": "Bourse d'excellence NDA",
        "awards.7.org": "Paroisse Notre-Dame d'Acadie",
        "awards.8.name": "Subvention de recherche",
        "awards.8.org": "Assistant de recherche avec Prof. Moulay Akhloufi",
        "awards.9.name": "Finaliste - Gala des projets",
        "awards.9.org": "ESPRIT, Tunisie - Cat\u00e9gorie Science des donn\u00e9es",
        "awards.9.note": "Plateforme intelligente d'aide au traitement de l'\u00e9pilepsie",
        "awards.10.name": "Finaliste - Concours GETEC",
        "awards.10.org": "Minist\u00e8re de l'enseignement sup\u00e9rieur, Cameroun",
        "awards.10.note": "Application facilitant l'acc\u00e8s aux services des op\u00e9rateurs t\u00e9l\u00e9com",

        // Affiliations
        "affiliations.title": "Affiliations professionnelles",
        "affil.1.name": "Institute of Electrical and Electronics Engineers (IEEE)",
        "affil.1.detail": "Membre, Septembre 2021 - Pr\u00e9sent",
        "affil.2.name": "Intel Corporation",
        "affil.2.detail": "Ambassadeur \u00e9tudiant oneAPI, Septembre 2023 - Pr\u00e9sent",
        "affil.3.name": "R\u00e9seau canadien de recherche respiratoire",
        "affil.3.detail": "Stagiaire de recherche, Septembre 2023 - Pr\u00e9sent",
        "affil.4.name": "Ordre des ing\u00e9nieurs de Tunisie",
        "affil.4.detail": "Ing\u00e9nieur en informatique, Juillet 2022 - Pr\u00e9sent",

        // Contact
        "contact.title": "Me contacter",
        "contact.info.title": "Coordonn\u00e9es",
        "contact.location.label": "Localisation",
        "contact.location.value": "Moncton, Nouveau-Brunswick, Canada",
        "contact.email.label": "Courriel",
        "contact.form.title": "Envoyer un message",
        "contact.form.name": "Nom",
        "contact.form.email": "Courriel",
        "contact.form.subject": "Objet",
        "contact.form.message": "Message",
        "contact.form.submit": "Envoyer le message",

        // Footer
        "footer.copyright": "\u00a9 2026 Hadrien Gayap",
        "footer.email": "Courriel",
        "footer.message": "m'\u00e9crire \u2192"
    }
};

// ==========================================
// TRANSLATION ENGINE
// ==========================================

function t(key) {
    var lang = document.documentElement.getAttribute('data-lang') || 'en';
    return translations[lang][key] || translations['en'][key] || key;
}

function applyLanguage(lang) {
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);

    // Update meta tags
    document.title = t('meta.title');
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.description'));

    // Translate all data-i18n elements (textContent)
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        var key = el.getAttribute('data-i18n');
        var val = translations[lang][key];
        if (val !== undefined) {
            el.textContent = val;
        }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
        var key = el.getAttribute('data-i18n-placeholder');
        var val = translations[lang][key];
        if (val !== undefined) {
            el.placeholder = val;
        }
    });

    // Re-render dynamic content (publications)
    if (typeof window.filterPublications === 'function') {
        window.filterPublications();
    }
}

// ==========================================
// LANGUAGE TOGGLE
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.getElementById('lang-toggle');
    if (toggle) {
        toggle.addEventListener('click', function() {
            var currentLang = document.documentElement.getAttribute('data-lang') || 'en';
            var newLang = currentLang === 'en' ? 'fr' : 'en';
            applyLanguage(newLang);
        });
    }

    // Apply saved or detected language
    var lang = document.documentElement.getAttribute('data-lang') || 'en';
    applyLanguage(lang);
});
