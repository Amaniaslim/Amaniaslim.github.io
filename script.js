/* =========================================================
   Amani Aslim · Portfolio
   Vanilla JS – i18n (DE/EN/AR + RTL), theme, nav, reveal
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Translations ---------- */
  var I18N = {
    de: {
      meta_description: "Portfolio von Amani Aslim – Software Testing, Quality Assurance, Python, REST APIs und Web Security. Offen für Werkstudentenstellen in QA.",
      skip_link: "Zum Inhalt springen",
      nav_toggle_open: "Navigationsmenü öffnen",
      nav_toggle_close: "Navigationsmenü schließen",
      lang_group: "Sprache wählen",
      theme_toggle: "Zwischen hellem und dunklem Design wechseln",

      nav_home: "Start", nav_about: "Über mich", nav_experience: "Erfahrung",
      nav_projects: "Projekte", nav_skills: "Kompetenzen", nav_contact: "Kontakt",

      hero_eyebrow: "B.Sc. Informatik · M.Sc.-Studentin Internet-Sicherheit",
      hero_hello: "Hallo, ich bin",
      hero_subtitle: "Software Testing & Quality Assurance mit technischem Hintergrund in Python, REST APIs und Web Security.",
      hero_lead: "Ich verbinde Softwarequalität, strukturierte Fehleranalyse und Security-Verständnis mit praktischer Erfahrung in APIs, Datenbanken und datengetriebenen Projekten.",
      btn_view_projects: "Projekte ansehen",
      hero_status: "Offen für Werkstudentenstellen in Software Testing & QA",
      avatar_caption: "Profil-Platzhalter mit den Initialen A A",

      stat_areas: "Projektbereiche", stat_terms: "analysierte Begriffe",
      stat_core: "Kernbegriffe", stat_since: "seit 2022", stat_scholarship: "Deutschlandstipendium",

      about_label: "Über mich", about_title: "Profil & Ausrichtung",
      about_p1: "Amani Aslim hat ihren Bachelor of Science in Informatik an der Westfälischen Hochschule abgeschlossen und studiert aktuell im Masterstudiengang Internet-Sicherheit.",
      about_p2: "Ihr beruflicher Schwerpunkt liegt auf Software Testing und Quality Assurance. Sie bereitet sich aktuell auf die ISTQB Foundation Level Zertifizierung vor und interessiert sich besonders für manuelles Testen, Testfallentwurf, strukturierte Fehleranalyse, Bug Reporting, API-Testing und die Weiterentwicklung in Richtung Testautomatisierung.",
      about_tech_title: "Praktische technische Erfahrung",
      about_tech_data: "Datenanalyse",
      about_tech_docs: "strukturierte technische Dokumentation",
      about_work_title: "Arbeitsweise",
      about_work_1: "Systematische Analyse von Anforderungen und Fehlerbildern",
      about_work_2: "Strukturierte Dokumentation technischer Ergebnisse",
      about_work_3: "Qualitätsorientiertes und zuverlässiges Arbeiten",
      about_work_4: "Schnelle Einarbeitung in neue Tools und Testmethoden",

      exp_label: "Erfahrung", exp_title: "Werdegang",
      exp1_role: "M.Sc. Internet-Sicherheit", exp1_date: "seit März 2026", exp1_org: "Westfälische Hochschule",
      exp1_1: "Software Testing", exp1_2: "Quality Assurance", exp1_3: "Cybersecurity",
      exp1_4: "sichere Softwareentwicklung", exp1_5: "Datenschutz",
      exp2_role: "Softwareprojekt WebSecScan", exp2_date: "April 2025 – März 2026", exp2_org: "Westfälische Hochschule",
      exp2_1: "Python-basierter Web Security Scanner", exp2_2: "PostgreSQL und Docker",
      exp2_3: "Integration mehrerer Security- und Reconnaissance-Tools",
      exp2_4: "Strukturierung und Auswertung technischer Scan-Ergebnisse",
      exp2_5: "Testing, Fehleranalyse und technische Dokumentation",
      exp3_role: "Praxisphase – IT-Sicherheit und Datenanalyse", exp3_date: "August 2025 – November 2025",
      exp3_org: "Institut für Internet-Sicherheit if(is)",
      exp3_1: "Python-Skript zur automatisierten Datenerfassung", exp3_2: "GitHub REST API",
      exp3_3: "Analyse und Klassifikation von Repository-Tags mit Regex",
      exp3_4: "Bereinigung, Strukturierung und Auswertung der Daten",
      exp3_5: "Dokumentation für ein Forschungsprojekt",
      exp4_role: "Bachelorarbeit", exp4_date: "März 2026 – Mai 2026", exp4_org: "Institut für Internet-Sicherheit if(is)",
      exp4_1: "Datenbasierte IT-Sicherheitsnomenklatur", exp4_2: "Knowledge Graphs",
      exp4_3: "gewichtetes Bewertungsmodell", exp4_4: "Umfrageauswertung",

      proj_label: "Projekte", proj_title: "Ausgewählte Arbeiten",
      badge_private: "Repository privat", badge_thesis: "Bachelorarbeit",
      flow_label: "Technischer Ablauf", contrib_label: "Projektbeiträge",
      func_label: "Funktionen", context_label: "Kontext", pipeline_label: "Datenpipeline",
      approach_label: "Vorgehen", results_label: "Ergebnisse",
      link_open_repo: "Repository öffnen ↗",
      tag_dataproc: "Datenverarbeitung", tag_dataanalysis: "Datenanalyse",

      p1_title: "WebSecScan – Web Security Scanner",
      p1_desc: "Python-basiertes Hochschulprojekt zur automatisierten Identifikation, Strukturierung und Auswertung möglicher Schwachstellen in Webanwendungen.",
      p1_goal_label: "Projektziel",
      p1_goal: "Mehrere Security- und Reconnaissance-Tools in einem strukturierten Ablauf verbinden und deren Ergebnisse für die weitere Analyse aufbereiten.",
      p1_flow1: "Ziel-URL", p1_flow2: "Security-Tools", p1_flow3: "Ergebnis-Parsing", p1_flow5: "Analyse & Report",
      p1_c1: "Backend-Entwicklung mit Python",
      p1_c2: "Integration und automatisierte Ausführung mehrerer Security-Tools",
      p1_c3: "Verarbeitung und Strukturierung technischer Scan-Ergebnisse",
      p1_c4: "Speicherung und Auswertung mit PostgreSQL",
      p1_c5: "Docker-basierte Entwicklungsumgebung",
      p1_c6: "Analyse möglicher Schwachstellen und CVE-Informationen",
      p1_c7: "Validierung und Vergleich von Tool-Ergebnissen",
      p1_c8: "Fehleranalyse bei Scan- und Integrationsproblemen",
      p1_c9: "technische Dokumentation",

      p2_title: "Research Paper Discovery Agent",
      p2_desc: "Streamlit-basierte Anwendung zur Suche, Filterung und strukturierten Aufbereitung wissenschaftlicher Publikationen.",
      p2_flow1: "Suchthema", p2_flow2: "API-Abfrage", p2_flow3: "Normalisierung", p2_flow4: "Filterung", p2_flow5: "Ergebnisübersicht",
      p2_f1: "Eingabe und Verarbeitung eines Research Topics",
      p2_f2: "Abfrage wissenschaftlicher Publikationsdaten",
      p2_f3: "strukturierte Darstellung relevanter Ergebnisse",
      p2_f4: "Filterung und Vergleich von Metadaten",
      p2_f5: "Validierung externer Daten",
      p2_f6: "nachvollziehbarer Research-Workflow",

      p3_title: "GitHub Repository Tag Analyzer",
      p3_desc: "Python-Projekt zur automatisierten Erfassung, Bereinigung und Klassifikation sicherheitsrelevanter Repository-Tags und Releases.",
      p3_context: "Praxisprojekt am Institut für Internet-Sicherheit if(is).",
      p3_flow5: "Klassifikation",
      p3_c1: "automatisierte Datenerfassung", p3_c2: "GitHub REST API",
      p3_c3: "Datenbereinigung und Strukturierung",
      p3_c4: "Analyse und Klassifikation mit regulären Ausdrücken",
      p3_c5: "Überprüfung von API-Antworten und Datenformaten",
      p3_c6: "Behandlung unvollständiger und inkonsistenter Daten",
      p3_c7: "Prüfung von Klassifikationsregeln",
      p3_c8: "Ergebnisvalidierung und Dokumentation",

      p4_title: "Datenbasierte IT-Sicherheitsnomenklatur & Knowledge Graphs",
      p4_desc: "Entwicklung einer einheitlichen Struktur zur Bewertung, Kategorisierung und visuellen Verknüpfung von IT-Sicherheitsbegriffen.",
      p4_categories: "Kategorien", p4_participants: "Umfrageteilnehmende",
      p4_flow1: "Fachquellen", p4_flow2: "Bewertungsmodell", p4_flow3: "Auswahl und Kategorien", p4_flow5: "Umfrage",
      p4_r1: "gewichtetes Relevanzmodell",
      p4_r2: "Strukturierung von Kategorien, Synonymen und Beziehungen",
      p4_r3: "Knowledge Graph", p4_r4: "Beziehungsgraph", p4_r5: "Empfehlungsassistent",
      p4_r6: "Umfrage-Tool", p4_r7: "Datenvisualisierung", p4_r8: "strukturierte Wissensrepräsentation",

      skills_label: "Kompetenzen", skills_title: "Fähigkeiten & Werkzeuge",
      skills_qa_title: "Testing & QA",
      skills_qa_1: "Manuelles Testen", skills_qa_2: "Testfallentwurf", skills_qa_3: "Fehleranalyse",
      skills_qa_4: "Bug Reporting", skills_qa_5: "ISTQB Foundation Level (in Vorbereitung)",
      skills_qa_6: "Ergebnisvalidierung", skills_qa_7: "strukturierte Dokumentation",
      skills_prog_title: "Programmierung & APIs",
      skills_data_title: "Daten & Tools",
      skills_sec_title: "Web Security", skills_sec_cve: "CVE-Analyse",

      langs_title: "Sprachen", lang_arabic: "Arabisch", lang_native: "Muttersprache",
      lang_german: "Deutsch", lang_english: "Englisch",
      cert_title: "Weiterbildung", cert_prep: "in Vorbereitung", cert_since2022: "seit 2022",

      contact_label: "Kontakt", contact_title: "Lassen Sie uns vernetzen.",
      contact_text: "Ich interessiere mich für Werkstudentenstellen und Projekte in den Bereichen Software Testing, Quality Assurance, API-Testing und Testautomatisierung.",
      contact_email_label: "E-Mail", contact_linkedin: "LinkedIn-Profil",
      contact_location_label: "Standort", contact_location: "Gelsenkirchen, Deutschland",

      footer_privacy: "Diese Website verwendet keine Tracking- oder Analyse-Cookies."
    },

    en: {
      meta_description: "Portfolio of Amani Aslim – Software Testing, Quality Assurance, Python, REST APIs and Web Security. Open to working student roles in QA.",
      skip_link: "Skip to content",
      nav_toggle_open: "Open navigation menu",
      nav_toggle_close: "Close navigation menu",
      lang_group: "Choose language",
      theme_toggle: "Switch between light and dark theme",

      nav_home: "Home", nav_about: "About", nav_experience: "Experience",
      nav_projects: "Projects", nav_skills: "Skills", nav_contact: "Contact",

      hero_eyebrow: "B.Sc. Computer Science · M.Sc. Cybersecurity student",
      hero_hello: "Hi, I'm",
      hero_subtitle: "Software Testing & Quality Assurance with a technical background in Python, REST APIs and Web Security.",
      hero_lead: "I combine software quality, structured defect analysis and security awareness with hands-on experience in APIs, databases and data-driven projects.",
      btn_view_projects: "View projects",
      hero_status: "Open to working student roles in Software Testing & QA",
      avatar_caption: "Profile placeholder with the initials A A",

      stat_areas: "project areas", stat_terms: "terms analyzed",
      stat_core: "core terms", stat_since: "since 2022", stat_scholarship: "Deutschlandstipendium",

      about_label: "About", about_title: "Profile & focus",
      about_p1: "Amani Aslim completed her Bachelor of Science in Computer Science at Westfälische Hochschule and is currently studying in the master's programme in Cybersecurity.",
      about_p2: "Her professional focus is on Software Testing and Quality Assurance. She is currently preparing for the ISTQB Foundation Level certification and is particularly interested in manual testing, test case design, structured defect analysis, bug reporting, API testing and progressing towards test automation.",
      about_tech_title: "Hands-on technical experience",
      about_tech_data: "Data analysis",
      about_tech_docs: "structured technical documentation",
      about_work_title: "How I work",
      about_work_1: "Systematic analysis of requirements and defect patterns",
      about_work_2: "Structured documentation of technical results",
      about_work_3: "Quality-focused and reliable work",
      about_work_4: "Fast onboarding into new tools and testing methods",

      exp_label: "Experience", exp_title: "Career path",
      exp1_role: "M.Sc. Cybersecurity", exp1_date: "since March 2026", exp1_org: "Westfälische Hochschule",
      exp1_1: "Software Testing", exp1_2: "Quality Assurance", exp1_3: "Cybersecurity",
      exp1_4: "secure software development", exp1_5: "Data protection",
      exp2_role: "Software project WebSecScan", exp2_date: "April 2025 – March 2026", exp2_org: "Westfälische Hochschule",
      exp2_1: "Python-based web security scanner", exp2_2: "PostgreSQL and Docker",
      exp2_3: "Integration of several security and reconnaissance tools",
      exp2_4: "Structuring and evaluation of technical scan results",
      exp2_5: "Testing, defect analysis and technical documentation",
      exp3_role: "Practical phase – IT security and data analysis", exp3_date: "August 2025 – November 2025",
      exp3_org: "Institute for Internet Security if(is)",
      exp3_1: "Python script for automated data collection", exp3_2: "GitHub REST API",
      exp3_3: "Analysis and classification of repository tags using regex",
      exp3_4: "Cleaning, structuring and evaluation of the data",
      exp3_5: "Documentation for a research project",
      exp4_role: "Bachelor thesis", exp4_date: "March 2026 – May 2026", exp4_org: "Institute for Internet Security if(is)",
      exp4_1: "Data-driven cybersecurity terminology", exp4_2: "Knowledge graphs",
      exp4_3: "weighted evaluation model", exp4_4: "Survey evaluation",

      proj_label: "Projects", proj_title: "Selected work",
      badge_private: "Private repository", badge_thesis: "Bachelor thesis",
      flow_label: "Technical flow", contrib_label: "My contributions",
      func_label: "Features", context_label: "Context", pipeline_label: "Data pipeline",
      approach_label: "Approach", results_label: "Results",
      link_open_repo: "Open repository ↗",
      tag_dataproc: "Data processing", tag_dataanalysis: "Data analysis",

      p1_title: "WebSecScan – Web Security Scanner",
      p1_desc: "Python-based university project for the automated identification, structuring and evaluation of possible vulnerabilities in web applications.",
      p1_goal_label: "Project goal",
      p1_goal: "Combine several security and reconnaissance tools in a structured workflow and prepare their results for further analysis.",
      p1_flow1: "Target URL", p1_flow2: "Security tools", p1_flow3: "Result parsing", p1_flow5: "Analysis & report",
      p1_c1: "Backend development with Python",
      p1_c2: "Integration and automated execution of multiple security tools",
      p1_c3: "Processing and structuring of technical scan results",
      p1_c4: "Storage and evaluation with PostgreSQL",
      p1_c5: "Docker-based development environment",
      p1_c6: "Analysis of possible vulnerabilities and CVE information",
      p1_c7: "Validation and comparison of tool results",
      p1_c8: "Defect analysis for scan and integration issues",
      p1_c9: "Technical documentation",

      p2_title: "Research Paper Discovery Agent",
      p2_desc: "Streamlit-based application for searching, filtering and structuring scientific publications.",
      p2_flow1: "Search topic", p2_flow2: "API query", p2_flow3: "Normalization", p2_flow4: "Filtering", p2_flow5: "Results overview",
      p2_f1: "Input and processing of a research topic",
      p2_f2: "Querying of scientific publication data",
      p2_f3: "structured presentation of relevant results",
      p2_f4: "Filtering and comparison of metadata",
      p2_f5: "Validation of external data",
      p2_f6: "traceable research workflow",

      p3_title: "GitHub Repository Tag Analyzer",
      p3_desc: "Python project for the automated collection, cleaning and classification of security-relevant repository tags and releases.",
      p3_context: "Practical project at the Institute for Internet Security if(is).",
      p3_flow5: "Classification",
      p3_c1: "automated data collection", p3_c2: "GitHub REST API",
      p3_c3: "Data cleaning and structuring",
      p3_c4: "Analysis and classification with regular expressions",
      p3_c5: "Verification of API responses and data formats",
      p3_c6: "Handling of incomplete and inconsistent data",
      p3_c7: "Testing of classification rules",
      p3_c8: "Result validation and documentation",

      p4_title: "Data-driven cybersecurity terminology & knowledge graphs",
      p4_desc: "Development of a unified structure for evaluating, categorizing and visually connecting cybersecurity terms.",
      p4_categories: "categories", p4_participants: "survey participants",
      p4_flow1: "Expert sources", p4_flow2: "Evaluation model", p4_flow3: "Selection and categories", p4_flow5: "Survey",
      p4_r1: "weighted relevance model",
      p4_r2: "Structuring of categories, synonyms and relationships",
      p4_r3: "Knowledge graph", p4_r4: "Relationship graph", p4_r5: "Recommendation assistant",
      p4_r6: "Survey tool", p4_r7: "Data visualization", p4_r8: "structured knowledge representation",

      skills_label: "Skills", skills_title: "Skills & tools",
      skills_qa_title: "Testing & QA",
      skills_qa_1: "Manual testing", skills_qa_2: "Test case design", skills_qa_3: "Defect analysis",
      skills_qa_4: "Bug reporting", skills_qa_5: "ISTQB Foundation Level (in preparation)",
      skills_qa_6: "Result validation", skills_qa_7: "structured documentation",
      skills_prog_title: "Programming & APIs",
      skills_data_title: "Data & tools",
      skills_sec_title: "Web Security", skills_sec_cve: "CVE analysis",

      langs_title: "Languages", lang_arabic: "Arabic", lang_native: "native speaker",
      lang_german: "German", lang_english: "English",
      cert_title: "Professional development", cert_prep: "in preparation", cert_since2022: "since 2022",

      contact_label: "Contact", contact_title: "Let's connect.",
      contact_text: "I am interested in working student roles and projects in Software Testing, Quality Assurance, API testing and test automation.",
      contact_email_label: "Email", contact_linkedin: "LinkedIn profile",
      contact_location_label: "Location", contact_location: "Gelsenkirchen, Germany",

      footer_privacy: "This website does not use tracking or analytics cookies."
    },

    ar: {
      meta_description: "الملف الشخصي لأماني أسليم – اختبار البرمجيات وضمان الجودة وبايثون وواجهات REST وأمن الويب. متاحة لوظائف طلابية في ضمان الجودة.",
      skip_link: "الانتقال إلى المحتوى",
      nav_toggle_open: "فتح قائمة التنقل",
      nav_toggle_close: "إغلاق قائمة التنقل",
      lang_group: "اختيار اللغة",
      theme_toggle: "التبديل بين المظهر الفاتح والداكن",

      nav_home: "الرئيسية", nav_about: "نبذة عني", nav_experience: "الخبرة",
      nav_projects: "المشاريع", nav_skills: "المهارات", nav_contact: "التواصل",

      hero_eyebrow: "بكالوريوس علوم حاسوب · طالبة ماجستير في الأمن السيبراني",
      hero_hello: "مرحباً، أنا",
      hero_subtitle: "اختبار البرمجيات وضمان الجودة مع خلفية تقنية في بايثون وواجهات REST وأمن الويب.",
      hero_lead: "أجمع بين جودة البرمجيات والتحليل المنهجي للأخطاء والفهم الأمني مع خبرة عملية في الواجهات البرمجية وقواعد البيانات والمشاريع المعتمدة على البيانات.",
      btn_view_projects: "عرض المشاريع",
      hero_status: "متاحة لوظائف طلابية في اختبار البرمجيات وضمان الجودة",
      avatar_caption: "عنصر نائب للملف الشخصي بالأحرف الأولى A A",

      stat_areas: "مجالات مشاريع", stat_terms: "مصطلحاً تم تحليله",
      stat_core: "مصطلحاً أساسياً", stat_since: "منذ 2022", stat_scholarship: "منحة ألمانيا",

      about_label: "نبذة عني", about_title: "الملف الشخصي والتوجه",
      about_p1: "أنهت أماني أسليم درجة البكالوريوس في علوم الحاسوب من جامعة Westfälische Hochschule، وتدرس حالياً في برنامج الماجستير في الأمن السيبراني.",
      about_p2: "ينصب تركيزها المهني على اختبار البرمجيات وضمان الجودة. تستعد حالياً لشهادة ISTQB Foundation Level، وتهتم بشكل خاص بالاختبار اليدوي وتصميم حالات الاختبار والتحليل المنهجي للأخطاء وتقارير الأخطاء واختبار الواجهات البرمجية والتطور نحو أتمتة الاختبارات.",
      about_tech_title: "خبرة تقنية عملية",
      about_tech_data: "تحليل البيانات",
      about_tech_docs: "توثيق تقني منظم",
      about_work_title: "أسلوب العمل",
      about_work_1: "تحليل منهجي للمتطلبات وأنماط الأخطاء",
      about_work_2: "توثيق منظم للنتائج التقنية",
      about_work_3: "عمل موثوق يركز على الجودة",
      about_work_4: "تعلم سريع للأدوات وأساليب الاختبار الجديدة",

      exp_label: "الخبرة", exp_title: "المسيرة المهنية",
      exp1_role: "ماجستير الأمن السيبراني", exp1_date: "منذ مارس 2026", exp1_org: "جامعة Westfälische Hochschule",
      exp1_1: "اختبار البرمجيات", exp1_2: "ضمان الجودة", exp1_3: "الأمن السيبراني",
      exp1_4: "تطوير البرمجيات الآمن", exp1_5: "حماية البيانات",
      exp2_role: "مشروع برمجي WebSecScan", exp2_date: "أبريل 2025 – مارس 2026", exp2_org: "جامعة Westfälische Hochschule",
      exp2_1: "ماسح أمان ويب مبني ببايثون", exp2_2: "PostgreSQL و Docker",
      exp2_3: "دمج عدة أدوات أمنية واستطلاعية",
      exp2_4: "هيكلة نتائج الفحص التقنية وتحليلها",
      exp2_5: "الاختبار وتحليل الأخطاء والتوثيق التقني",
      exp3_role: "المرحلة العملية – أمن المعلومات وتحليل البيانات", exp3_date: "أغسطس 2025 – نوفمبر 2025",
      exp3_org: "معهد أمن الإنترنت if(is)",
      exp3_1: "سكربت بايثون لجمع البيانات آلياً", exp3_2: "GitHub REST API",
      exp3_3: "تحليل وتصنيف وسوم المستودعات باستخدام Regex",
      exp3_4: "تنظيف البيانات وهيكلتها وتحليلها",
      exp3_5: "توثيق لمشروع بحثي",
      exp4_role: "مشروع التخرج", exp4_date: "مارس 2026 – مايو 2026", exp4_org: "معهد أمن الإنترنت if(is)",
      exp4_1: "مصطلحات أمن معلومات معتمدة على البيانات", exp4_2: "رسوم المعرفة",
      exp4_3: "نموذج تقييم مرجّح", exp4_4: "تحليل الاستبيان",

      proj_label: "المشاريع", proj_title: "أعمال مختارة",
      badge_private: "المستودع خاص", badge_thesis: "مشروع التخرج",
      flow_label: "التدفق التقني", contrib_label: "مساهماتي",
      func_label: "الوظائف", context_label: "السياق", pipeline_label: "مسار البيانات",
      approach_label: "المنهجية", results_label: "النتائج",
      link_open_repo: "فتح المستودع ↗",
      tag_dataproc: "معالجة البيانات", tag_dataanalysis: "تحليل البيانات",

      p1_title: "WebSecScan – ماسح أمان الويب",
      p1_desc: "مشروع جامعي مبني ببايثون للتعرف الآلي على نقاط الضعف المحتملة في تطبيقات الويب وتنظيمها وتحليلها.",
      p1_goal_label: "هدف المشروع",
      p1_goal: "دمج عدة أدوات أمنية واستطلاعية في مسار عمل منظم وتجهيز نتائجها لمزيد من التحليل.",
      p1_flow1: "عنوان الهدف", p1_flow2: "الأدوات الأمنية", p1_flow3: "تحليل النتائج", p1_flow5: "التحليل والتقرير",
      p1_c1: "تطوير الواجهة الخلفية ببايثون",
      p1_c2: "دمج وتشغيل آلي لعدة أدوات أمنية",
      p1_c3: "معالجة وهيكلة نتائج الفحص التقنية",
      p1_c4: "التخزين والتحليل باستخدام PostgreSQL",
      p1_c5: "بيئة تطوير قائمة على Docker",
      p1_c6: "تحليل نقاط الضعف المحتملة ومعلومات CVE",
      p1_c7: "التحقق من نتائج الأدوات ومقارنتها",
      p1_c8: "تحليل الأخطاء في عمليات الفحص والدمج",
      p1_c9: "التوثيق التقني",

      p2_title: "Research Paper Discovery Agent",
      p2_desc: "تطبيق مبني بـ Streamlit للبحث عن الأبحاث العلمية وتصفيتها وتنظيمها.",
      p2_flow1: "موضوع البحث", p2_flow2: "استعلام API", p2_flow3: "التوحيد", p2_flow4: "التصفية", p2_flow5: "عرض النتائج",
      p2_f1: "إدخال ومعالجة موضوع بحثي",
      p2_f2: "استعلام بيانات المنشورات العلمية",
      p2_f3: "عرض منظم للنتائج ذات الصلة",
      p2_f4: "تصفية البيانات الوصفية ومقارنتها",
      p2_f5: "التحقق من البيانات الخارجية",
      p2_f6: "سير عمل بحثي قابل للتتبع",

      p3_title: "GitHub Repository Tag Analyzer",
      p3_desc: "مشروع بايثون لجمع وسوم وإصدارات المستودعات المرتبطة بالأمن وتنظيفها وتصنيفها آلياً.",
      p3_context: "مشروع عملي في معهد أمن الإنترنت if(is).",
      p3_flow5: "التصنيف",
      p3_c1: "جمع البيانات آلياً", p3_c2: "GitHub REST API",
      p3_c3: "تنظيف البيانات وهيكلتها",
      p3_c4: "التحليل والتصنيف باستخدام التعابير النمطية",
      p3_c5: "التحقق من استجابات الواجهة البرمجية وصيغ البيانات",
      p3_c6: "معالجة البيانات الناقصة وغير المتسقة",
      p3_c7: "فحص قواعد التصنيف",
      p3_c8: "التحقق من النتائج وتوثيقها",

      p4_title: "مصطلحات أمن المعلومات المعتمدة على البيانات ورسوم المعرفة",
      p4_desc: "تطوير بنية موحدة لتقييم مصطلحات أمن المعلومات وتصنيفها وربطها بصرياً.",
      p4_categories: "فئات", p4_participants: "مشاركاً في الاستبيان",
      p4_flow1: "المصادر المتخصصة", p4_flow2: "نموذج التقييم", p4_flow3: "الاختيار والفئات", p4_flow5: "الاستبيان",
      p4_r1: "نموذج أهمية مرجّح",
      p4_r2: "هيكلة الفئات والمرادفات والعلاقات",
      p4_r3: "رسم المعرفة", p4_r4: "رسم العلاقات", p4_r5: "مساعد التوصيات",
      p4_r6: "أداة استبيان", p4_r7: "تصور البيانات", p4_r8: "تمثيل منظم للمعرفة",

      skills_label: "المهارات", skills_title: "المهارات والأدوات",
      skills_qa_title: "الاختبار وضمان الجودة",
      skills_qa_1: "الاختبار اليدوي", skills_qa_2: "تصميم حالات الاختبار", skills_qa_3: "تحليل الأخطاء",
      skills_qa_4: "تقارير الأخطاء", skills_qa_5: "ISTQB Foundation Level (قيد التحضير)",
      skills_qa_6: "التحقق من النتائج", skills_qa_7: "التوثيق المنظم",
      skills_prog_title: "البرمجة والواجهات البرمجية",
      skills_data_title: "البيانات والأدوات",
      skills_sec_title: "أمن الويب", skills_sec_cve: "تحليل CVE",

      langs_title: "اللغات", lang_arabic: "العربية", lang_native: "اللغة الأم",
      lang_german: "الألمانية", lang_english: "الإنجليزية",
      cert_title: "التطوير المهني", cert_prep: "قيد التحضير", cert_since2022: "منذ 2022",

      contact_label: "التواصل", contact_title: "لنبقَ على تواصل.",
      contact_text: "أهتم بفرص العمل الطلابية والمشاريع في اختبار البرمجيات وضمان الجودة واختبار الواجهات البرمجية وأتمتة الاختبارات.",
      contact_email_label: "البريد الإلكتروني", contact_linkedin: "الملف على LinkedIn",
      contact_location_label: "الموقع", contact_location: "غيلسنكيرشن، ألمانيا",

      footer_privacy: "لا يستخدم هذا الموقع ملفات تتبع أو تحليلات."
    }
  };

  var SUPPORTED = ["de", "en", "ar"];
  var LANG_KEY = "amani-lang";
  var THEME_KEY = "amani-theme";

  var root = document.documentElement;
  var body = document.body;

  /* ---------- Language ---------- */
  function applyLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) { lang = "de"; }
    var dict = I18N[lang];

    root.setAttribute("lang", lang);
    body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    // Text content
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = dict[key];
      if (value === undefined) { return; }
      if (el.tagName === "META") {
        el.setAttribute("content", value);
      } else {
        el.textContent = value;
      }
    });

    // aria-label content
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (dict[key] !== undefined) { el.setAttribute("aria-label", dict[key]); }
    });

    // Nav toggle label reflects current open state
    updateToggleLabel();

    // Language buttons state
    langButtons.forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }

  /* ---------- Theme ---------- */
  function applyTheme(theme) {
    if (theme !== "light" && theme !== "dark") { theme = "dark"; }
    root.setAttribute("data-theme", theme);
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
    }
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }

  /* ---------- Mobile navigation ---------- */
  var navToggle = document.getElementById("navToggle");
  var navMenu = document.getElementById("navMenu");

  function updateToggleLabel() {
    if (!navToggle) { return; }
    var lang = root.getAttribute("lang") || "de";
    var dict = I18N[lang] || I18N.de;
    var open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-label", open ? dict.nav_toggle_close : dict.nav_toggle_open);
  }

  function setMenu(open) {
    if (!navMenu || !navToggle) { return; }
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navMenu.classList.toggle("is-open", open);
    updateToggleLabel();
  }

  /* ---------- Init ---------- */
  var langButtons = Array.prototype.slice.call(document.querySelectorAll(".lang-btn"));
  var themeToggle = document.getElementById("themeToggle");

  langButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme");
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      setMenu(navToggle.getAttribute("aria-expanded") !== "true");
    });
  }

  // Close mobile menu when a nav link is clicked
  if (navMenu) {
    navMenu.querySelectorAll(".nav-links a").forEach(function (link) {
      link.addEventListener("click", function () { setMenu(false); });
    });
  }

  // Close menu with Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navToggle && navToggle.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      navToggle.focus();
    }
  });

  // Reset mobile menu state when resizing to desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth > 780) { setMenu(false); }
  });

  /* ---------- Current year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  /* ---------- Scroll reveal ---------- */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealTargets = document.querySelectorAll(
    ".hero-content, .hero-aside, .stats, .about-grid, .timeline-item, .project, .skill-group, .langcert-grid, .contact-grid"
  );

  if (!reduceMotion && "IntersectionObserver" in window) {
    revealTargets.forEach(function (el) { el.classList.add("reveal"); });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Apply stored preferences ---------- */
  var storedTheme, storedLang;
  try { storedTheme = localStorage.getItem(THEME_KEY); } catch (e) {}
  try { storedLang = localStorage.getItem(LANG_KEY); } catch (e) {}

  if (!storedTheme) {
    storedTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  applyTheme(storedTheme);
  applyLang(storedLang || "de");
})();
