// Professional Portfolio Logic

// --- DATA ---
const projectsData = {
    'unieuro-forecasting': {
      title: 'Unieuro Retail Sales Forecasting',
      period: 'Mar 2025 - Apr 2025',
      category: 'Sales Analytics & ML',
      overview: 'Strategic predictive analytics project for a major retailer. The goal was to forecast sales for high-value categories (washing machines, vacuums, smartphones) to optimize inventory levels and reduce carrying costs.',
      workflow: [
        'Data Cleaning: Handled missing values, outliers detection, and timestamp normalization across 3 years of transactional data.',
        'Feature Engineering: Extracted seasonality, promotional impact flags, and lag features to capture temporal trends.',
        'Modeling: Trained and evaluated Random Forest, XGBoost, and Gradient Boosting ensembles.',
        'Visualization: Built interactive Power BI dashboards for stakeholders to visualize predicted vs actual sales.'
      ],
      results: 'Delivered a robust forecasting pipeline allowing for 15% better inventory allocation estimation compared to the previous moving-average baseline.',
      techStack: 'Python (Pandas, Scikit-learn), Power BI, XGBoost'
    },
    'multi-agent-system': {
      title: 'Multi-Agent NLP System',
      period: 'Mar 2025 - Apr 2025',
      category: 'AI & Generative Models',
      overview: 'Co-developed a system transforming natural language questions into executable data analysis using a swarm of GPT-4.1 agents. Designed to bridge the gap between technical data and non-technical business users.',
      workflow: [
        'Architecture: Designed a manager-worker agent pattern using OpenAI API where a "Planner" breaks down queries.',
        'Integration: Connected agents to SQL databases and CSV repositories via dynamic tool definitions.',
        'Interface: Built a Streamlit frontend for real-time interaction and visualization.',
        'Optimization: Implemented caching for frequent queries and error-correction loops for generated SQL.'
      ],
      results: 'Reduced time-to-insight for non-technical users by approximately 80%, allowing direct Q&A with complex datasets without needing a Data Analyst.',
      techStack: 'OpenAI GPT-4.1, Python, Streamlit, LangChain concepts'
    },
    'tv-movies-analysis': {
      title: 'Global Content Popularity Analysis',
      period: 'Jan 2024 - Mar 2024',
      category: 'Data Analysis',
      overview: 'Analyzed global entertainment trends to determine key drivers of content popularity across different regions and genres, aiming to inform content acquisition strategies.',
      workflow: [
        'Data Mining: Extracted and merged datasets from Kaggle and IMDB APIs.',
        'Clustering: Used K-Means to identify distinct viewer segments based on rating patterns.',
        'Association Rules: Found frequent patterns between genres, directors, and high ratings.'
      ],
      results: 'Identified that "Show Longevity" is a stronger predictor of rating than "Budget" or "Star Power", suggesting a strategic pivot towards long-running series.',
      techStack: 'SQL, Orange Data Mining, Python'
    },
    'sdg7-energy-analysis': {
      title: 'SDG7 Energy Trends Prediction',
      period: 'Mar 2024 - May 2024',
      category: 'Sustainability ML',
      overview: 'Research project focusing on UN Sustainable Development Goal 7 (Clean Energy). Predicted energy consumption patterns based on macro-economic indicators to assist policy formulation.',
      workflow: [
        'Aggregation: Combined World Bank and IEA datasets for 100+ countries.',
        'Geospatial Analysis: Mapped energy inequality using Choropleth maps.',
        'Prediction: Applied Random Forest regression to predict per-capita consumption based on GDP and Industrialization indices.'
      ],
      results: 'Highlighted the critical link between GDP growth and renewable adoption rates in developing nations, visualized through an interactive report.',
      techStack: 'Python, Random Forest, Matplotlib'
    }
  };
  
  // --- APP LOGIC ---
  class PortfolioApp {
    constructor() {
      this.init();
    }
  
    init() {
      this.setupNavigation();
      this.setupScrollSpy();
      this.setupModal();
    }
  
    setupNavigation() {
      const toggle = document.querySelector('.nav__toggle');
      const menu = document.querySelector('.nav__menu');
      const links = document.querySelectorAll('.nav__link');
  
      if(toggle) {
          toggle.addEventListener('click', () => {
              menu.classList.toggle('open');
          });
      }
  
      // Smooth Scroll & Close Mobile Menu
      links.forEach(link => {
          link.addEventListener('click', (e) => {
              e.preventDefault();
              const targetId = link.getAttribute('href');
              const targetSection = document.querySelector(targetId);
              
              if (targetSection) {
                  // Close mobile menu if open
                  if(menu) menu.classList.remove('open');
                  
                  // Scroll
                  targetSection.scrollIntoView({
                      behavior: 'smooth'
                  });
              }
          });
      });
    }

    setupScrollSpy() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav__link');

        if(sections.length === 0) return;

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', // Active when section is near top
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    const id = entry.target.getAttribute('id');
                    const activeLink = document.querySelector(`.nav__link[href="#${id}"]`);
                    if (activeLink) activeLink.classList.add('active');
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    }
  
    setupModal() {
      const modal = document.getElementById('project-modal');
      const closeBtn = modal.querySelector('.modal-close');
      const overlay = modal.querySelector('.modal-overlay');
      
      if(!modal) return;
  
      const closeModal = () => {
          modal.classList.add('hidden');
          document.body.style.overflow = '';
      };
  
      // Open Modal
      document.querySelectorAll('.project-card').forEach(el => {
          el.addEventListener('click', (e) => {
              const pid = el.getAttribute('data-project');
              this.populateModal(pid);
              modal.classList.remove('hidden');
              document.body.style.overflow = 'hidden';
          });
      });
  
      // Close Events
      if(closeBtn) closeBtn.addEventListener('click', closeModal);
      if(overlay) overlay.addEventListener('click', closeModal);
      
      document.addEventListener('keydown', (e) => {
          if(e.key === 'Escape') closeModal();
      });
    }
  
    populateModal(pid) {
        const data = projectsData[pid];
        if(!data) return;
  
        document.getElementById('modal-title').textContent = data.title;
        document.getElementById('modal-category').textContent = data.category;
        document.getElementById('modal-period').textContent = data.period;
        document.getElementById('modal-overview').textContent = data.overview;
        document.getElementById('modal-tech-stack').textContent = data.techStack;
        document.getElementById('modal-results').textContent = data.results;
  
        const workflowList = document.getElementById('modal-workflow');
        workflowList.innerHTML = '';
        data.workflow.forEach(step => {
            const li = document.createElement('li');
            li.textContent = step;
            workflowList.appendChild(li);
        });
    }
  }
  
  // Init
  document.addEventListener('DOMContentLoaded', () => {
      new PortfolioApp();
  });