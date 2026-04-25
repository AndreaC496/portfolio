/* ════════════════════════════════════════════
   TRANSLATIONS
════════════════════════════════════════════ */
const T = {
  en: {
    'nav.home':'Home','nav.experience':'Experience','nav.projects':'Projects',
    'nav.education':'Education','nav.skills':'Skills','nav.contact':'Contact','nav.cv':'CV ↗',
    'hero.sub':'Rome, Italy · LUISS MSc Data Science',
    'hero.cta1':'> get_in_touch','hero.cta2':'> view_projects',
    'about.title':'About Me',
    'about.text':"My name is Andrea, I'm 24, from Rome. I'm about to complete my studies in Data Science and Management at LUISS Guido Carli, where I've developed a strong interest in the intersection of statistical learning and automated decision-making. I'm passionate about understanding how to turn complex data into intelligent choices and reliable models. My technical work focuses on Deep Learning architectures, probabilistic modeling, and multi-agent AI systems, always with close attention to mathematical soundness and rigorous validation. Outside academia, I'm a former basketball player; today I train in running and powerlifting, and in my free time I love hiking and photography.",
    'feat.title':'Featured Projects','feat.all':'> all_projects()',
    'p.mobility.cat':'Data Eng · RAG · Consulting','p.mobility.title':'Mobility Lens Platform',
    'p.mobility.desc':'Integrated analysis platform combining public transport + real estate data across Milan. Built RAG system for personalized real-estate reports.',
    'p.multiagent.cat':'AI · NLP · Multi-Agent','p.multiagent.title':'Multi-Agent NLP System',
    'p.multiagent.desc':'AI system converting natural language to automated data analysis using GPT-4.1, OpenAI Agent SDK, and LlamaIndex on public datasets.',
    'p.unieuro.cat':'Sales Analytics · ML','p.unieuro.title':'Unieuro Sales Forecasting',
    'p.unieuro.desc':'Sales prediction for key product categories using XGBoost, Gradient Boosting, and Random Forest with interactive Power BI dashboards.',
    'p.tv.cat':'Data Analysis · Clustering · ML','p.tv.title':'TV & Movies Popularity Analysis',
    'p.tv.desc':'Global entertainment content analysis to identify popularity drivers via ML, K-Means clustering, and Spearman correlation on Kaggle datasets.',
    'p.sdg7.cat':'Sustainability · ML','p.sdg7.title':'SDG7 Global Energy Analysis',
    'p.sdg7.desc':'Predictive modeling of global sustainable energy trends. Random Forest (R²=0.89) outperformed baseline. Policy insights from World Bank & IEA.',
    'p.cta':'> view_details','proj.title':'Projects',
    'act.title':'Beyond the Data',
    'act.b.title':'Pro Basketball','act.b.desc':'Former professional basketball player — discipline, teamwork, and performing under pressure.',
    'act.p.title':'Trail Photography','act.p.desc':'Hiking & trekking photographer — finding patterns and light in complex landscapes.',
    'act.s.title':'Sport Science','act.s.desc':'Sport science enthusiast — where biomechanics meets data at the frontier of human performance.',
    'exp.title':'Work Experience','exp.present':'Present','exp.current':'Current',
    'exp.msx.role':'Customer Service Specialist',
    'exp.msx.b1':'Maintain and process large-scale vehicle databases through data cleaning and quality control, optimizing operational workflows and minimizing service downtimes.',
    'exp.msx.b2':'Analyze customer data to identify needs and deliver tailored solutions to Ford customers, leveraging data-driven insights to enhance customer satisfaction.',
    'exp.basco.role':'Data Science Intern',
    'exp.basco.b1':'Contributed to <strong>Mobility Lens</strong>: an integrated analysis &amp; visualization platform combining public transport data with real estate pricing across Milan.',
    'exp.basco.b2':'Built data pipelines and interactive dashboards to visualize mobility patterns and real estate market trends, enabling data-driven strategic reports for public transport clients.',
    'exp.basco.b3':'Built a RAG system to provide personalized real-estate reports including public transport data and composite neighborhood indicators.',
    'modal.overview':'# overview','modal.workflow':'# workflow',
    'modal.methodology':'# methodology','modal.results':'# results','modal.tech':'# tech_stack',
    'edu.title':'Education & Qualifications','edu.academic':'Academic Background',
    'edu.m.title':"Master's — Data Science and Management",
    'edu.e.title':'Erasmus+ Exchange Program',
    'edu.b.title':"Bachelor's — Economics & Big Data",
    'edu.hs.title':'Scientific High School Diploma',
    'edu.courses':'Relevant Courses','edu.thesis':'Thesis',
    'edu.subject':'Subject:','edu.advisor':'Advisor:','edu.certs':'Certifications',
    'cert.mcp':'Intro to Model Context Protocol','cert.aif':'AI Fluency: Framework & Foundations',
    'cert.sql':'Business Metrics with SQL','cert.r':'Learn Statistics with R',
    'cert.pbi':'BI Dashboards with Power BI','cert.tab':'BI Dashboards with Tableau',
    'cert.pe':'Learn Prompt Engineering','cert.py':'Python (Advanced)',
    'sk.title':'Skills & Technologies','sk.ai':'# ai_skills','sk.it':'# it_skills','sk.lang':'# languages',
    'lang.it':'Italian','lang.en':'English','lang.es':'Spanish','lang.native':'Native',
    'ct.title':'Get in Touch',
    'ct.text':'Open to data science opportunities, research collaborations, and conversations with fellow data enthusiasts.',
    'ct.email':'email','ct.academic':'academic','ct.phone':'phone','ct.location':'location',
  },
  it: {
    'nav.home':'Home','nav.experience':'Esperienza','nav.projects':'Progetti',
    'nav.education':'Formazione','nav.skills':'Competenze','nav.contact':'Contatti','nav.cv':'CV ↗',
    'hero.sub':'Roma, Italia · MSc Data Science LUISS',
    'hero.cta1':'> contattami','hero.cta2':'> vedi_progetti',
    'about.title':'Chi Sono',
    'about.text':"Mi chiamo Andrea, ho 24 anni e vengo da Roma. Sto per terminare il mio percorso di studi in Data Science e Management alla LUISS Guido Carli, dove ho sviluppato un forte interesse per l'incontro tra apprendimento statistico e processi decisionali automatizzati. Mi appassiona capire come trasformare dati complessi in scelte intelligenti e modelli affidabili. Il mio lavoro tecnico si concentra su architetture di Deep Learning, modellazione probabilistica e sistemi AI multi-agente, sempre con grande attenzione alla solidità matematica e a una validazione rigorosa dei risultati. Al di fuori del percorso accademico, sono un ex giocatore di pallacanestro ed oggi mi dedico al running e al powerlifting, mentre nel tempo libero amo l'escursionismo e la fotografia.",
    'feat.title':'Progetti in Evidenza','feat.all':'> tutti_i_progetti()',
    'p.mobility.cat':'Data Eng · RAG · Consulenza','p.mobility.title':'Piattaforma Mobility Lens',
    'p.mobility.desc':'Piattaforma integrata che combina dati di trasporto pubblico e prezzi immobiliari a Milano. Sistema RAG per report immobiliari personalizzati.',
    'p.multiagent.cat':'AI · NLP · Multi-Agente','p.multiagent.title':'Sistema Multi-Agente NLP',
    'p.multiagent.desc':'Sistema AI che converte domande in linguaggio naturale in analisi dati automatizzate usando GPT-4.1, OpenAI Agent SDK e LlamaIndex su dataset pubblici.',
    'p.unieuro.cat':'Analytics Vendite · ML','p.unieuro.title':'Previsione Vendite Unieuro',
    'p.unieuro.desc':'Previsione vendite per categorie chiave con XGBoost, Gradient Boosting e Random Forest, con dashboard Power BI interattive.',
    'p.tv.cat':'Analisi Dati · Clustering · ML','p.tv.title':'Analisi Popolarità TV & Film',
    'p.tv.desc':'Analisi dei contenuti di intrattenimento globali per identificare driver di popolarità via ML, clustering K-Means e correlazione di Spearman su dataset Kaggle.',
    'p.sdg7.cat':'Sostenibilità · ML','p.sdg7.title':'Analisi Energia Globale SDG7',
    'p.sdg7.desc':'Modellazione predittiva dei trend energetici sostenibili globali. Random Forest (R²=0.89). Insight da dati World Bank & IEA.',
    'p.cta':'> dettagli','proj.title':'Progetti',
    'act.title':'Oltre i Dati',
    'act.b.title':'Basketball Pro','act.b.desc':'Ex giocatore professionista di basketball — disciplina, lavoro di squadra e gestione della pressione.',
    'act.p.title':'Fotografia in Trekking','act.p.desc':'Fotografo appassionato di escursionismo — trovare pattern e luce in paesaggi complessi.',
    'act.s.title':'Sport Science','act.s.desc':'Appassionato di scienze dello sport — dove la biomeccanica incontra i dati alla frontiera delle performance umane.',
    'exp.title':'Esperienza Lavorativa','exp.present':'Presente','exp.current':'Attuale',
    'exp.msx.role':'Customer Service Specialist',
    'exp.msx.b1':'Gestione ed elaborazione di database veicoli su larga scala tramite data cleaning e quality control, ottimizzando i flussi operativi e riducendo i tempi di inattività.',
    'exp.msx.b2':'Analisi dei dati clienti per identificare esigenze e fornire soluzioni personalizzate ai clienti Ford, sfruttando insight data-driven per migliorare la soddisfazione.',
    'exp.basco.role':'Data Science Intern',
    'exp.basco.b1':'Ha contribuito a <strong>Mobility Lens</strong>: piattaforma integrata di analisi e visualizzazione che combina dati di trasporto pubblico con prezzi immobiliari a Milano.',
    'exp.basco.b2':'Costruzione di pipeline dati e dashboard interattive per visualizzare pattern di mobilità e trend del mercato immobiliare, supportando report strategici per clienti del settore trasporti.',
    'exp.basco.b3':'Sviluppo di un sistema RAG per report immobiliari personalizzati includendo dati sul trasporto pubblico e indicatori compositi di quartiere.',
    'modal.overview':'# panoramica','modal.workflow':'# workflow',
    'modal.methodology':'# metodologia','modal.results':'# risultati','modal.tech':'# tech_stack',
    'edu.title':'Formazione & Qualifiche','edu.academic':'Percorso Accademico',
    'edu.m.title':'Magistrale — Data Science e Management',
    'edu.e.title':'Programma Erasmus+',
    'edu.b.title':'Triennale — Economia e Big Data',
    'edu.hs.title':'Diploma di Maturità Scientifica',
    'edu.courses':'Corsi Rilevanti','edu.thesis':'Tesi',
    'edu.subject':'Materia:','edu.advisor':'Relatore:','edu.certs':'Certificazioni',
    'cert.mcp':'Intro a Model Context Protocol','cert.aif':'AI Fluency: Framework & Foundations',
    'cert.sql':'Business Metrics con SQL','cert.r':'Statistica con R',
    'cert.pbi':'Dashboard BI con Power BI','cert.tab':'Dashboard BI con Tableau',
    'cert.pe':'Prompt Engineering','cert.py':'Python (Avanzato)',
    'sk.title':'Competenze e Tecnologie','sk.ai':'# ai_skills','sk.it':'# it_skills','sk.lang':'# lingue',
    'lang.it':'Italiano','lang.en':'Inglese','lang.es':'Spagnolo','lang.native':'Madrelingua',
    'ct.title':'Contattami',
    'ct.text':'Aperto a opportunità nel campo della data science, collaborazioni di ricerca e conversazioni con altri appassionati di dati.',
    'ct.email':'email','ct.academic':'univ.','ct.phone':'telefono','ct.location':'posizione',
  }
};

/* ════════════════════════════════════════════
   PROJECT DATA  (bilingual)
════════════════════════════════════════════ */
const projectsData = {
  'mobility-lens': {
    period: '02/2026 – 04/2026',
    category: { en:'Data Engineering · RAG · Consulting', it:'Data Engineering · RAG · Consulenza' },
    title:    { en:'Mobility Lens Platform', it:'Piattaforma Mobility Lens' },
    overview: {
      en:'At Basco&T Consulting, I contributed to Mobility Lens — an integrated analysis and visualization platform combining public transport data with real estate pricing across Milan, designed to translate complex datasets into clear, actionable strategic insights for clients in the public transport sector.',
      it:'Da Basco&T Consulting, ho contribuito a Mobility Lens — una piattaforma integrata di analisi e visualizzazione che combina dati di trasporto pubblico con prezzi immobiliari a Milano, progettata per tradurre dataset complessi in insight strategici chiari e applicabili.'
    },
    workflow: {
      en:[
        'Built scalable data pipelines to ingest and process public transport and real estate datasets',
        'Designed interactive dashboards to visualize mobility patterns and real estate trends for client reporting',
        'Built a RAG system to provide personalized, context-aware real estate reports on demand',
        'Integrated composite neighborhood indicators (transport access, pricing index) into RAG outputs'
      ],
      it:[
        'Costruzione di pipeline dati scalabili per l\'ingestione ed elaborazione di dataset su trasporti e immobiliare',
        'Progettazione di dashboard interattive per visualizzare pattern di mobilità e trend di mercato per la reportistica',
        'Sviluppo di un sistema RAG per report immobiliari personalizzati e contestualizzati',
        'Integrazione di indicatori compositi di quartiere (accesso ai trasporti, indice prezzi) negli output RAG'
      ]
    },
    methodology: {
      en:'Combined structured data pipelines with semantic retrieval via vector embeddings. The RAG architecture allows the system to answer free-form queries about neighborhoods using both structured transport data and unstructured market commentary.',
      it:'Combinazione di pipeline dati strutturate con retrieval semantico tramite embedding vettoriali. L\'architettura RAG permette di rispondere a domande in linguaggio libero sui quartieri usando dati strutturati e commenti non strutturati sul mercato.'
    },
    results: {
      en:'Delivered actionable dashboards and personalized reports used by clients in strategic planning for Milan\'s public transport network. The RAG system significantly reduced manual report generation time.',
      it:'Consegnate dashboard operative e report personalizzati utilizzati dai clienti nella pianificazione strategica della rete di trasporto pubblico milanese. Il sistema RAG ha ridotto significativamente i tempi di generazione manuale dei report.'
    },
    techStack:'Python · Supabase · RAG · LLM APIs · Power BI · Data Pipelines'
  },
  'multi-agent-system': {
    period: 'March 2025 – April 2025',
    category: { en:'AI & Natural Language Processing', it:'AI e Natural Language Processing' },
    title:    { en:'Multi-Agent System for NLP Civic Data Analysis', it:'Sistema Multi-Agente per Analisi NLP su Dati Civici' },
    overview: {
      en:'Co-developed an AI-powered multi-agent system (Reply collaboration) capable of answering natural language questions with real data analysis and visualizations, targeting public administration datasets. The central challenge: converting ambiguous user prompts into reliable, reproducible data-driven outputs.',
      it:'Co-sviluppato un sistema multi-agente AI (collaborazione Reply) in grado di rispondere a domande in linguaggio naturale con analisi dati reali e visualizzazioni, su dataset di pubblica amministrazione. Sfida centrale: convertire prompt ambigui in output data-driven affidabili e riproducibili.'
    },
    workflow: {
      en:[
        'Comprehensive data preprocessing across multiple civic datasets (type normalization, translation, schema alignment)',
        'Modular pipeline architecture using OpenAI Agent SDK (GPT-4.1) and LlamaIndex for intent parsing',
        'Memory modules to recall user interactions and improve contextual understanding over time',
        'Automated statistical summaries and visual outputs triggered by natural language queries'
      ],
      it:[
        'Pre-elaborazione completa di dataset civici multipli (normalizzazione tipi, traduzione, allineamento schema)',
        'Architettura pipeline modulare con OpenAI Agent SDK (GPT-4.1) e LlamaIndex per il parsing degli intent',
        'Moduli di memoria per ricordare interazioni utente e migliorare la comprensione contestuale nel tempo',
        'Sommari statistici automatici e output visivi attivati da query in linguaggio naturale'
      ]
    },
    methodology: {
      en:'Document embedding and semantic parsing for query classification beyond rigid keyword-matching. A unified pipeline translates user prompts into Python code, runs computations, and generates narrative answers via LLMs in a Streamlit interface with bilingual support (EN/IT).',
      it:'Embedding documentale e parsing semantico per classificazione query oltre il keyword-matching rigido. Una pipeline unificata traduce prompt in codice Python, esegue computazioni e genera risposte narrative tramite LLM in un\'interfaccia Streamlit bilingue (EN/IT).'
    },
    results: {
      en:'Demonstrates how AI can democratize civic data access for non-technical stakeholders. Achieved reliable LLM outputs through structured prompts and semantic parsing, with significant improvements in speed and interpretability.',
      it:'Dimostra come l\'AI possa democratizzare l\'accesso ai dati civici per stakeholder non tecnici. Output LLM affidabili tramite prompt strutturati e parsing semantico, con miglioramenti significativi in velocità e interpretabilità.'
    },
    techStack:'OpenAI GPT-4.1 · Python · Streamlit · LlamaIndex · OpenAI Agent SDK'
  },
  'unieuro-forecasting': {
    period: 'March 2025 – April 2025',
    category: { en:'Sales Analytics & Machine Learning', it:'Analytics Vendite & Machine Learning' },
    title:    { en:'Unieuro Retail Sales Forecasting', it:'Previsione Vendite Retail Unieuro' },
    overview: {
      en:'Led the design and implementation of a predictive analytics system for Unieuro focused on sales forecasting for key product lines: washing machines, vacuum cleaners, and smartphones. Objective: provide actionable forecasts for business planning using real company data and advanced data science workflows.',
      it:'Ho guidato progettazione e implementazione di un sistema di analytics predittiva per Unieuro focalizzato sulla previsione vendite per categorie chiave: lavatrici, aspirapolvere e smartphone. Obiettivo: fornire previsioni operative usando dati reali aziendali e workflow avanzati.'
    },
    workflow: {
      en:[
        'Extensive EDA, data cleaning, missing value handling, outlier detection, and data normalization',
        'Feature engineering extracting seasonal trends, promotional effects, and historical demand patterns',
        'Training and comparison of ML models: Random Forest, Linear Regression, XGBoost, Gradient Boosting',
        'Interactive Power BI dashboards for KPI visualization and scenario-based business planning'
      ],
      it:[
        'EDA approfondita, data cleaning, gestione valori mancanti, rilevamento outlier e normalizzazione',
        'Feature engineering per estrarre trend stagionali, effetti promozionali e pattern storici della domanda',
        'Addestramento e confronto di modelli ML: Random Forest, Regressione Lineare, XGBoost, Gradient Boosting',
        'Dashboard Power BI interattive per visualizzazione KPI e pianificazione business per scenari'
      ]
    },
    methodology: {
      en:'Each model evaluated with cross-validation and business-focused accuracy metrics (RMSE, MAE, R²) to determine the best performing approach per product category. Dashboards emphasize intuitive exploration of trends, seasonality, and promotional effects.',
      it:'Ogni modello valutato con cross-validation e metriche di accuracy orientate al business (RMSE, MAE, R²). Dashboard incentrate su esplorazione intuitiva di trend, stagionalità ed effetti promozionali per categoria prodotto.'
    },
    results: {
      en:'Enabled anticipation of sales trends, inventory optimization, and alignment of commercial strategies to seasonal patterns. Provided a robust comparison between traditional regression, tree-based, and boosting approaches.',
      it:'Abilitata anticipazione dei trend di vendita, ottimizzazione dell\'inventario e allineamento delle strategie commerciali ai pattern stagionali. Confronto robusto tra regressione tradizionale, modelli ad albero e boosting.'
    },
    techStack:'Python · XGBoost · Gradient Boosting · Random Forest · Power BI · Pandas · Scikit-learn'
  },
  'tv-movies-analysis': {
    period: 'January 2024 – March 2024',
    category: { en:'Data Analysis & Predictive Modeling', it:'Analisi Dati & Modellazione Predittiva' },
    title:    { en:'TV Series & Movies Popularity Analysis', it:'Analisi Popolarità Serie TV & Film' },
    overview: {
      en:'Explored which features influence the popularity and ratings of global TV shows and movies using a Kaggle dataset. Goal: determine whether genre, language, and episode duration could reliably predict success through comprehensive data analysis and modeling.',
      it:'Esplorazione delle feature che influenzano popolarità e rating di serie TV e film globali tramite dataset Kaggle. Obiettivo: determinare se genere, lingua e durata episodi possano predire il successo in modo affidabile.'
    },
    workflow: {
      en:[
        'SQL queries to create focused datasets on ratings, genres, and spoken languages using SQLite',
        'Extensive EDA examining distributions, correlations, and relationships between variables',
        'K-Means clustering to identify natural data groupings and association rule mining',
        'ML models: Decision Trees, Random Forest, Linear Regression for prediction tasks'
      ],
      it:[
        'Query SQL per creare dataset focalizzati su rating, generi e lingue usando SQLite',
        'EDA approfondita su distribuzioni, correlazioni e relazioni tra variabili',
        'Clustering K-Means per identificare raggruppamenti naturali nei dati e association rule mining',
        'Modelli ML: Decision Trees, Random Forest, Regressione Lineare per task predittivi'
      ]
    },
    methodology: {
      en:'Orange Data Mining for workflow implementation. Spearman correlation for key relationships, discretized popularity variables for classification tasks, Test & Score and Predictions methods for model validation.',
      it:'Orange Data Mining per l\'implementazione del workflow. Correlazione di Spearman per relazioni chiave, discretizzazione variabili popolarità per task di classificazione, metodi Test & Score e Predictions per validazione.'
    },
    results: {
      en:'Popularity correlates more with show longevity (seasons/episodes) than genre alone. Results provide a foundation for marketing segmentation and platform strategy with richer external data.',
      it:'La popolarità correla maggiormente con la longevità del prodotto che con il genere. I risultati forniscono base per segmentazione marketing e strategia di piattaforma con dati esterni più ricchi.'
    },
    techStack:'SQL · SQLite · Orange Data Mining · Python · K-Means · Machine Learning'
  },
  'sdg7-energy-analysis': {
    period: 'March 2024 – May 2024',
    category: { en:'Sustainability Analytics & ML', it:'Analytics Sostenibilità & ML' },
    title:    { en:'SDG7 Global Energy Analysis & Prediction', it:'Analisi & Previsione Energia Globale SDG7' },
    overview: {
      en:'Academic research project exploring global sustainable energy trends focusing on UN SDG7: ensuring access to affordable, reliable, sustainable, and modern energy for all. Combined descriptive analysis, correlation studies, and advanced predictive modeling with international datasets.',
      it:'Progetto di ricerca accademica sui trend globali di energia sostenibile con focus sull\'SDG7 dell\'ONU. Combinato analisi descrittiva, studi di correlazione e modellazione predittiva avanzata con dataset internazionali.'
    },
    workflow: {
      en:[
        'Aggregated international data from World Bank, IEA, and UN on renewable energy, CO₂ emissions, and electrification',
        'Created comprehensive time series visualizations and geospatial analysis for global energy trends',
        'Correlation matrix analysis to identify key relationships between energy variables and economic indicators',
        'Random Forest and Linear Regression models to predict primary energy consumption per capita'
      ],
      it:[
        'Aggregazione dati internazionali da World Bank, IEA e ONU su energia rinnovabile, emissioni CO₂ ed elettrificazione',
        'Visualizzazioni complete di serie temporali e analisi geospaziale dei trend energetici globali',
        'Analisi matrice di correlazione per identificare relazioni chiave tra variabili energetiche e indicatori economici',
        'Modelli Random Forest e Regressione Lineare per prevedere il consumo energetico primario pro capite'
      ]
    },
    methodology: {
      en:'Advanced preprocessing including missing value imputation and StandardScaler normalization. GridSearchCV for hyperparameter optimization, MSE and R² for evaluation. Interactive dashboards for policy-ready insights.',
      it:'Pre-elaborazione avanzata con imputazione valori mancanti e normalizzazione StandardScaler. GridSearchCV per ottimizzazione iperparametri, MSE e R² per valutazione. Dashboard interattive per insight policy-ready.'
    },
    results: {
      en:'Random Forest significantly outperformed linear regression (R²=0.89 vs 0.45), demonstrating the value of non-linear models for complex energy-economic relationships. Strong correlations found between economic development, electrification, and sustainable investment.',
      it:'Random Forest ha superato significativamente la regressione lineare (R²=0.89 vs 0.45). Forti correlazioni rilevate tra sviluppo economico, elettrificazione e investimenti sostenibili.'
    },
    techStack:'Python · Pandas · Scikit-learn · Random Forest · Matplotlib · Seaborn · Tableau'
  }
};

/* ════════════════════════════════════════════
   UTILITIES
════════════════════════════════════════════ */
function rng(seed) {
  let s = seed >>> 0;
  return () => { s = (Math.imul(1664525, s) + 1013904223) >>> 0; return s / 0xffffffff; };
}

function svgEl(tag, attrs) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
}

/* ════════════════════════════════════════════
   LANGUAGE SYSTEM
════════════════════════════════════════════ */
let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[lang][key] !== undefined) el.textContent = T[lang][key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (T[lang][key] !== undefined) el.innerHTML = T[lang][key];
  });

  const cur = document.getElementById('lang-current');
  const oth = document.getElementById('lang-other');
  if (cur) cur.textContent = lang.toUpperCase();
  if (oth) oth.textContent = lang === 'en' ? 'IT' : 'EN';
}

function setupLangToggle() {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => setLanguage(currentLang === 'en' ? 'it' : 'en'));
}

/* ════════════════════════════════════════════
   HERO SCATTER PLOT
════════════════════════════════════════════ */
function initHeroScatter() {
  const svg = document.getElementById('hero-scatter');
  if (!svg) return;
  const W = 400, H = 280, pad = 30;
  const rand = rng(7);

  // Grid
  for (let i = 0; i <= 5; i++) {
    const xg = pad + (i / 5) * (W - pad * 2);
    const yg = pad + (i / 5) * (H - pad * 2);
    svg.appendChild(svgEl('line', { x1: xg, y1: pad, x2: xg, y2: H - pad, stroke: 'rgba(244,239,230,.05)', 'stroke-width': 1 }));
    svg.appendChild(svgEl('line', { x1: pad, y1: yg, x2: W - pad, y2: yg, stroke: 'rgba(244,239,230,.05)', 'stroke-width': 1 }));
  }

  // Axis labels
  const axisStyle = { fill: 'rgba(244,239,230,.25)', 'font-size': '8', 'font-family': 'JetBrains Mono, monospace' };
  const xl = svgEl('text', { ...axisStyle, x: W - pad + 2, y: H - pad + 2, 'text-anchor': 'start' });
  xl.textContent = 'exp →';
  svg.appendChild(xl);
  const yl = svgEl('text', { ...axisStyle, x: pad - 2, y: pad - 4, 'text-anchor': 'end' });
  yl.textContent = '↑ impact';
  svg.appendChild(yl);

  // Points
  const pts = Array.from({ length: 46 }, () => ({ x: pad + rand() * (W - pad * 2), y: pad + rand() * (H - pad * 2) }));

  // Linear regression
  const n = pts.length;
  const mx = pts.reduce((s, p) => s + p.x, 0) / n;
  const my = pts.reduce((s, p) => s + p.y, 0) / n;
  const cov = pts.reduce((s, p) => s + (p.x - mx) * (p.y - my), 0);
  const vx  = pts.reduce((s, p) => s + (p.x - mx) ** 2, 0);
  const slope = cov / vx;
  const intcp = my - slope * mx;

  const x1 = pad, x2 = W - pad;
  const y1 = slope * x1 + intcp, y2 = slope * x2 + intcp;
  const lineLen = Math.hypot(x2 - x1, y2 - y1);

  const regLine = svgEl('line', {
    x1, y1, x2, y2, stroke: '#c6ff3f', 'stroke-width': 2,
    'stroke-dasharray': lineLen, 'stroke-dashoffset': lineLen,
    opacity: 0.85
  });
  regLine.style.transition = 'stroke-dashoffset 1.8s cubic-bezier(.4,0,.2,1) .4s';
  svg.appendChild(regLine);

  // R² label
  const lbl = svgEl('text', {
    x: W - pad - 2, y: pad - 8,
    fill: 'rgba(198,255,63,.45)', 'font-size': '8.5',
    'font-family': 'JetBrains Mono, monospace', 'text-anchor': 'end'
  });
  lbl.textContent = 'r² = 0.847';
  svg.appendChild(lbl);

  // Draw points (behind regression line visually)
  pts.forEach((p, i) => {
    const isAmber = i % 7 === 0;
    const c = svgEl('circle', {
      cx: p.x, cy: p.y,
      r: isAmber ? 4 : 2.5,
      fill: isAmber ? '#ff6b35' : '#c6ff3f',
      opacity: isAmber ? '.75' : '.55'
    });
    c.classList.add('scatter-pt');
    c.style.animationDelay = `${i * 18}ms`;
    svg.insertBefore(c, regLine);
  });

  // Trigger regression line draw
  requestAnimationFrame(() => requestAnimationFrame(() => {
    regLine.style.strokeDashoffset = '0';
  }));
}

/* ════════════════════════════════════════════
   MINI CHARTS (project cards)
════════════════════════════════════════════ */
const CHART_SEEDS = { scatter: 11, bar: 22, network: 33, area: 44 };

function drawMiniChart(container, type) {
  const seed = CHART_SEEDS[type] || 1;
  const rand = rng(seed + container.closest('[data-project]')?.getAttribute('data-project')?.charCodeAt(0) || 0);
  const W = 240, H = 76;
  const svg = svgEl('svg', { viewBox: `0 0 ${W} ${H}`, preserveAspectRatio: 'none' });
  container.appendChild(svg);

  const A = '#c6ff3f', AF = 'rgba(198,255,63,.18)', AD = 'rgba(198,255,63,.35)';
  const Am = '#ff6b35';

  if (type === 'scatter') {
    const pts = Array.from({ length: 20 }, () => ({ x: 8 + rand() * (W - 16), y: 6 + rand() * (H - 12) }));
    const mx = pts.reduce((s, p) => s + p.x, 0) / pts.length;
    const my = pts.reduce((s, p) => s + p.y, 0) / pts.length;
    const sl = pts.reduce((s, p) => s + (p.x - mx) * (p.y - my), 0) / pts.reduce((s, p) => s + (p.x - mx) ** 2, 1);
    const ic = my - sl * mx;
    svg.appendChild(svgEl('line', { x1: 8, y1: sl * 8 + ic, x2: W - 8, y2: sl * (W - 8) + ic, stroke: AD, 'stroke-width': 1, 'stroke-dasharray': '3 3' }));
    pts.forEach(p => svg.appendChild(svgEl('circle', { cx: p.x, cy: p.y, r: 2, fill: A, opacity: '.6' })));

  } else if (type === 'bar') {
    const bars = [
      { l: 'RF',  h: 50, c: A },
      { l: 'XGB', h: 46, c: A },
      { l: 'GB',  h: 42, c: AD },
      { l: 'LR',  h: 28, c: 'rgba(198,255,63,.25)' }
    ];
    const bw = 36, gap = 15, sx = 18;
    bars.forEach((b, i) => {
      const x = sx + i * (bw + gap);
      svg.appendChild(svgEl('rect', { x, y: H - 12 - b.h, width: bw, height: b.h, fill: b.c, rx: 2 }));
      const t = svgEl('text', { x: x + bw / 2, y: H - 2, fill: 'rgba(244,239,230,.4)', 'font-size': '7', 'font-family': 'JetBrains Mono, monospace', 'text-anchor': 'middle' });
      t.textContent = b.l;
      svg.appendChild(t);
    });

  } else if (type === 'network') {
    const nodes = [{ x: 28, y: 38 }, { x: 82, y: 14 }, { x: 82, y: 62 }, { x: 155, y: 38 }, { x: 218, y: 38 }];
    const edges = [[0,1],[0,2],[1,3],[2,3],[3,4]];
    edges.forEach(([a, b]) => svg.appendChild(svgEl('line', { x1: nodes[a].x, y1: nodes[a].y, x2: nodes[b].x, y2: nodes[b].y, stroke: 'rgba(198,255,63,.22)', 'stroke-width': 1 })));
    nodes.forEach((nd, i) => {
      const r = i === 4 ? 8 : 5.5;
      svg.appendChild(svgEl('circle', { cx: nd.x, cy: nd.y, r, fill: i === 4 ? A : 'rgba(198,255,63,.25)', stroke: A, 'stroke-width': 1 }));
      const labels = ['U', 'A', 'D', 'L', 'O'];
      const t = svgEl('text', { x: nd.x, y: nd.y + 3, fill: i === 4 ? '#0a0d12' : 'rgba(244,239,230,.7)', 'font-size': '6', 'font-family': 'JetBrains Mono, monospace', 'text-anchor': 'middle' });
      t.textContent = labels[i];
      svg.appendChild(t);
    });

  } else if (type === 'area') {
    const ptData = [
      { x: 8, y: 62 }, { x: 34, y: 57 }, { x: 64, y: 50 }, { x: 94, y: 45 },
      { x: 124, y: 38 }, { x: 154, y: 32 }, { x: 184, y: 24 }, { x: 215, y: 17 }, { x: W - 8, y: 12 }
    ];
    const line = ptData.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');
    const area = line + ` L${W - 8},${H - 6} L8,${H - 6} Z`;
    svg.appendChild(svgEl('path', { d: area, fill: AF }));
    svg.appendChild(svgEl('path', { d: line, fill: 'none', stroke: A, 'stroke-width': 1.5 }));
    ptData.forEach(p => svg.appendChild(svgEl('circle', { cx: p.x, cy: p.y, r: 2, fill: A })));
  }
}

function initMiniCharts() {
  document.querySelectorAll('.project-card__chart[data-chart]').forEach(el => {
    if (el.children.length > 0) return;
    drawMiniChart(el, el.getAttribute('data-chart'));
  });
}

/* ════════════════════════════════════════════
   COUNTER ANIMATION
════════════════════════════════════════════ */
function initCounters() {
  const els = document.querySelectorAll('[data-count]');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-count'), 10);
      const dur = 1100, t0 = performance.now();
      const tick = ts => {
        const p = Math.min((ts - t0) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(e * target);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      };
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  els.forEach(el => obs.observe(el));
}

/* ════════════════════════════════════════════
   SCROLL ANIMATIONS
════════════════════════════════════════════ */
function initScrollAnimations() {
  const fadeObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); fadeObs.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  const langObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); langObs.unobserve(e.target); } });
  }, { threshold: 0.3 });

  document.querySelectorAll('.fade-up').forEach(el => fadeObs.observe(el));
  document.querySelectorAll('.lang-bar__fill').forEach(el => langObs.observe(el));

  // Project card stagger
  const cardObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'none';
        cardObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.project-card, .activity-card, .cert-card, .stat-card').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = `opacity .45s ease ${i * 55}ms, transform .45s ease ${i * 55}ms`;
    cardObs.observe(el);
  });
}

/* ════════════════════════════════════════════
   HAMBURGER MENU
════════════════════════════════════════════ */
function setupHamburger() {
  const btn = document.getElementById('nav-hamburger');
  const menu = document.getElementById('nav-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.classList.toggle('active', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  menu.addEventListener('click', e => {
    if (e.target.closest('.nav__link')) {
      menu.classList.remove('open');
      btn.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

/* ════════════════════════════════════════════
   PORTFOLIO APP
════════════════════════════════════════════ */
class PortfolioApp {
  constructor() {
    this.currentPage = 'home';
    this.modal = null;
    this.init();
  }

  init() {
    this.modal = document.getElementById('project-modal');
    this.setupNavigation();
    this.setupModal();
    this.setupProjectButtons();
    const initialPage = window.location.hash.substring(1) || 'home';
    this.showPage(initialPage, true);
  }

  setupNavigation() {
    document.addEventListener('click', e => {
      const target = e.target.closest('[data-page]');
      if (target) {
        e.preventDefault();
        const page = target.getAttribute('data-page');
        this.showPage(page);
      }
    });
  }

  setupModal() {
    if (!this.modal) return;
    const closeBtn = this.modal.querySelector('.modal__close');
    const overlay  = this.modal.querySelector('.modal__overlay');
    if (closeBtn) closeBtn.addEventListener('click', e => { e.preventDefault(); this.closeModal(); });
    if (overlay)  overlay.addEventListener('click',  e => { if (e.target === overlay) this.closeModal(); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && this.modal && !this.modal.classList.contains('hidden')) this.closeModal();
    });
  }

  setupProjectButtons() {
    document.addEventListener('click', e => {
      const btn  = e.target.closest('.project-details-btn');
      if (btn)  { e.preventDefault(); e.stopPropagation(); this.showProjectModal(btn.getAttribute('data-project')); return; }
      const card = e.target.closest('.project-card');
      if (card) { this.showProjectModal(card.getAttribute('data-project')); }
    });
  }

  showPage(pageId, replaceState = false) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(pageId);
    if (!target) return;
    target.classList.add('active');
    this.currentPage = pageId;
    this.updateActiveNavLink(document.querySelector(`.nav__link[data-page="${pageId}"]`));
    initMiniCharts();

    const currentHash = window.location.hash.substring(1);
    if (this.currentPage !== currentHash) {
      replaceState
        ? history.replaceState({ page: this.currentPage }, null, `#${this.currentPage}`)
        : history.pushState({ page: this.currentPage }, null, `#${this.currentPage}`);
    }
    if (!replaceState) window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  updateActiveNavLink(activeLink) {
    document.querySelectorAll('.nav__link').forEach(l => l.classList.remove('active'));
    if (activeLink) activeLink.classList.add('active');
  }

  showProjectModal(projectId) {
    const proj = projectsData[projectId];
    if (!proj || !this.modal) return;
    const lang = currentLang;

    const $ = id => document.getElementById(id);
    $('modal-category').textContent = typeof proj.category === 'object' ? proj.category[lang] : proj.category;
    $('modal-title').textContent    = typeof proj.title === 'object'    ? proj.title[lang]    : proj.title;
    $('modal-period').textContent   = proj.period;
    $('modal-overview').textContent = typeof proj.overview === 'object' ? proj.overview[lang] : proj.overview;
    $('modal-methodology').textContent = typeof proj.methodology === 'object' ? proj.methodology[lang] : proj.methodology;
    $('modal-results').textContent  = typeof proj.results === 'object' ? proj.results[lang] : proj.results;
    $('modal-tech-stack').textContent = proj.techStack;

    const wf = document.getElementById('modal-workflow');
    wf.innerHTML = '';
    const workflow = typeof proj.workflow === 'object' && !Array.isArray(proj.workflow)
      ? proj.workflow[lang]
      : proj.workflow;
    (workflow || []).forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      wf.appendChild(li);
    });

    this.modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    if (this.modal) {
      this.modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }
}

/* ════════════════════════════════════════════
   INIT
════════════════════════════════════════════ */
let portfolioApp;

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  setupLangToggle();
  setupHamburger();
  portfolioApp = new PortfolioApp();
  initHeroScatter();
  initCounters();
  initScrollAnimations();
  initMiniCharts();
});

window.addEventListener('popstate', e => {
  if (portfolioApp) {
    const pageId = (e.state && e.state.page) || window.location.hash.substring(1) || 'home';
    portfolioApp.showPage(pageId, true);
  }
});

document.addEventListener('keydown', e => {
  if (!portfolioApp) return;
  if (portfolioApp.modal && !portfolioApp.modal.classList.contains('hidden')) return;
  const links = Array.from(document.querySelectorAll('.nav__link'));
  const active = document.querySelector('.nav__link.active');
  const idx = links.indexOf(active);
  let next = -1;
  if (e.key === 'ArrowLeft' && idx > 0) next = idx - 1;
  if (e.key === 'ArrowRight' && idx < links.length - 1) next = idx + 1;
  if (next !== -1) { e.preventDefault(); portfolioApp.showPage(links[next].getAttribute('data-page')); }
});
