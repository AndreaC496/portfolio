// Portfolio Application JavaScript

// Project data - Updated with simplified tech stacks (tools and frameworks only)
const projectsData = {
  'unieuro-forecasting': {
    title: 'Unieuro Retail Sales Forecasting',
    period: 'March 2025 - April 2025',
    category: 'Sales Analytics & Machine Learning',
    overview: 'As part of a university-industry collaboration with Unieuro, I led the design and implementation of a predictive analytics system focused on sales forecasting for key product lines: washing machines, vacuum cleaners, and smartphones. The main objective was to provide actionable forecasts for business planning using real company data and advanced data science workflows.',
    workflow: [
      'Conducted extensive EDA, data cleaning, handled missing values, outlier detection, and data normalization',
      'Performed robust feature engineering, extracting meaningful attributes such as seasonal and promotional trends',
      'Developed, trained, and compared multiple ML models: Random Forest, Multiple Linear Regression, XGBoost, Gradient Boosting',
      'Designed and built interactive dashboards using Power BI for KPI visualization and business communication'
    ],
    methodology: 'Each model was evaluated using cross-validation and business-focused accuracy metrics (RMSE, MAE, R²) to determine the best performing approach for each product category. Dashboards emphasized intuitive exploration of trends, seasonality, promo effects, and enabled scenario-based planning.',
    results: 'Enabled the company to anticipate sales trends, optimize inventory, and align commercial strategies to seasonal and promotional patterns. Provided robust comparison between traditional regression, tree-based, and boosting approaches.',
    techStack: 'Python, Power BI, Machine Learning, Statistical Modeling'
  },
  'multi-agent-system': {
    title: 'Multi-Agent System for Natural Language Civic Data Analysis',
    period: 'March 2025 - April 2025',
    category: 'AI & Natural Language Processing',
    overview: 'As part of a collaborative innovation project with Reply, I co-developed an AI-powered multi-agent system capable of answering natural language questions with real data analysis and visualizations, targeting public administration datasets. The central challenge was converting ambiguous user prompts into context-aware, reliable, and reproducible data-driven outputs.',
    workflow: [
      'Conducted comprehensive data preprocessing across multiple civic datasets (type normalization, translation, schema alignment)',
      'Created modular pipeline architecture leveraging OpenAI Agent SDK (v4.1) and Llama-Index for intent parsing',
      'Implemented memory modules to recall user interactions and improve contextual understanding over time',
      'Developed automated statistical summaries and visual outputs triggered by natural language queries'
    ],
    methodology: 'The system uses document embedding and semantic parsing for robust query classification, moving beyond rigid keyword-matching. A unified pipeline translates user prompts into Python code, runs computations, and generates narrative answers via LLMs in a Streamlit interface with bilingual support (EN/IT).',
    results: 'Demonstrates how AI can democratize civic data access, making complex analytics self-service for non-technical stakeholders. Achieved reliable LLM outputs through structured prompts and semantic parsing, with significant improvements in speed and interpretability.',
    techStack: 'OpenAI GPT-4.1, Python, Streamlit, AI/NLP'
  },
  'tv-movies-analysis': {
    title: 'Analysis of TV Series and Movies Popularity',
    period: 'January 2024 - March 2024',
    category: 'Data Analysis & Predictive Modeling',
    overview: 'This project explored which features influence the popularity and ratings of global TV shows and movies using a Kaggle dataset. We aimed to determine whether factors such as genre, language, and episode duration could reliably predict a show\'s success through comprehensive data analysis and modeling.',
    workflow: [
      'Designed SQL queries to create focused datasets on ratings, genres, and spoken languages using SQLite',
      'Conducted extensive EDA examining distributions, correlations, and relationships between variables',
      'Implemented K-Means clustering to identify natural data groupings and association rule mining',
      'Applied multiple ML models: Decision Trees, Random Forest, Linear Regression for prediction tasks'
    ],
    methodology: 'Used Orange Data Mining for workflow implementation and visualization. Applied correlation analysis (Spearman) to identify key relationships, discretized popularity variables to create classification tasks, and employed both Test & Score and Predictions methods for model validation.',
    results: 'Found that popularity correlates more with show longevity (seasons/episodes) than genre or language alone. While models showed limitations due to dataset constraints, results provide foundation for marketing segmentation and platform strategy with richer external data.',
    techStack: 'SQL, Orange Data Mining, Python, Machine Learning'
  },
  'sdg7-energy-analysis': {
    title: 'SDG7 Global Energy Analysis & Prediction',
    period: 'March 2024 - May 2024',
    category: 'Sustainability Analytics & Machine Learning',
    overview: 'Academic research project exploring global sustainable energy trends focusing on UN SDG7: ensuring access to affordable, reliable, sustainable, and modern energy for all. Combined descriptive analysis, correlation studies, and advanced predictive modeling using international datasets.',
    workflow: [
      'Aggregated robust international data from World Bank, IEA, and UN on renewable energy, CO2 emissions, and electrification',
      'Created comprehensive time series visualizations and geospatial analysis for global energy trends',
      'Developed correlation matrix analysis to identify key relationships between energy variables and economic indicators',
      'Implemented Random Forest and Linear Regression models to predict primary energy consumption per capita'
    ],
    methodology: 'Used advanced data preprocessing including missing value imputation and StandardScaler normalization. Applied GridSearchCV for hyperparameter optimization and evaluated models using MSE and R-squared metrics. Created interactive dashboards for policy-ready insights.',
    results: 'Random Forest significantly outperformed linear regression (R²=0.89 vs 0.45), demonstrating the value of non-linear models for complex energy-economic relationships. Analysis revealed strong correlations between economic development, electrification, and sustainable investment patterns.',
    techStack: 'Python, Machine Learning, Data Visualization, Statistical Analysis'
  }
};

// Navigation functionality
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
    this.showPage('home');
  }

  setupNavigation() {
    // Handle navigation links
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = link.getAttribute('data-page');
        if (targetPage) {
          this.showPage(targetPage);
          this.updateActiveNavLink(link);
        }
      });
    });

    // Handle hero action buttons with data-page attribute
    const heroButtons = document.querySelectorAll('[data-page]');
    heroButtons.forEach(button => {
      // Skip if already handled as nav link
      if (button.classList.contains('nav__link')) return;
      
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = button.getAttribute('data-page');
        if (targetPage) {
          this.showPage(targetPage);
          this.updateActiveNavLink(document.querySelector(`.nav__link[data-page="${targetPage}"]`));
        }
      });
    });
  }

  setupModal() {
    if (!this.modal) return;

    // Modal close functionality
    const closeBtn = this.modal.querySelector('.modal__close');
    const modalOverlay = this.modal.querySelector('.modal__overlay');
    
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.closeModal();
      });
    }
    
    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
          this.closeModal();
        }
      });
    }

    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal && !this.modal.classList.contains('hidden')) {
        this.closeModal();
      }
    });
  }

  setupProjectButtons() {
    // Handle project detail buttons
    const projectButtons = document.querySelectorAll('.project-details-btn');
    projectButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const projectId = button.getAttribute('data-project');
        if (projectId) {
          this.showProjectModal(projectId);
        }
      });
    });

    // Handle project card clicks
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.addEventListener('click', (e) => {
        // Don't trigger if clicking on the button
        if (e.target.closest('.project-details-btn')) return;
        
        const projectId = card.getAttribute('data-project');
        if (projectId) {
          this.showProjectModal(projectId);
        }
      });
    });
  }

  showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      page.classList.remove('active');
    });

    // Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
      targetPage.classList.add('active');
      this.currentPage = pageId;
      
      // Scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  updateActiveNavLink(activeLink) {
    // Remove active class from all nav links
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Add active class to current link
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }

  showProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project || !this.modal) return;

    // Populate modal content
    const modalTitle = document.getElementById('modal-title');
    const modalPeriod = document.getElementById('modal-period');
    const modalCategory = document.getElementById('modal-category');
    const modalOverview = document.getElementById('modal-overview');
    const modalMethodology = document.getElementById('modal-methodology');
    const modalResults = document.getElementById('modal-results');
    const modalTechStack = document.getElementById('modal-tech-stack');
    const modalWorkflow = document.getElementById('modal-workflow');

    if (modalTitle) modalTitle.textContent = project.title;
    if (modalPeriod) modalPeriod.textContent = project.period;
    if (modalCategory) modalCategory.textContent = project.category;
    if (modalOverview) modalOverview.textContent = project.overview;
    if (modalMethodology) modalMethodology.textContent = project.methodology;
    if (modalResults) modalResults.textContent = project.results;
    if (modalTechStack) modalTechStack.textContent = project.techStack;

    // Populate workflow list
    if (modalWorkflow) {
      modalWorkflow.innerHTML = '';
      project.workflow.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        modalWorkflow.appendChild(li);
      });
    }

    // Show modal
    this.modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeModal() {
    if (this.modal) {
      this.modal.classList.add('hidden');
      document.body.style.overflow = ''; // Restore scrolling
    }
  }
}

// Initialize application when DOM is loaded
let portfolioApp;

document.addEventListener('DOMContentLoaded', () => {
  portfolioApp = new PortfolioApp();
  
  // Handle any direct anchor links
  const hash = window.location.hash;
  if (hash && hash.length > 1) {
    const pageId = hash.substring(1);
    const targetPage = document.getElementById(pageId);
    if (targetPage && targetPage.classList.contains('page')) {
      setTimeout(() => {
        portfolioApp.showPage(pageId);
        portfolioApp.updateActiveNavLink(document.querySelector(`[data-page="${pageId}"]`));
      }, 100);
    }
  }

  // Add scroll animations
  initScrollAnimations();
});

// Handle browser back/forward buttons
window.addEventListener('popstate', (e) => {
  if (portfolioApp) {
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
      const pageId = hash.substring(1);
      const targetPage = document.getElementById(pageId);
      if (targetPage && targetPage.classList.contains('page')) {
        portfolioApp.showPage(pageId);
        portfolioApp.updateActiveNavLink(document.querySelector(`[data-page="${pageId}"]`));
      }
    }
  }
});

// Add intersection observer for animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements for scroll animations
  const animateElements = document.querySelectorAll('.project-card, .timeline-item, .skills-category');
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!portfolioApp) return;
  
  // Navigate with arrow keys when modal is not open
  const modal = document.getElementById('project-modal');
  if (modal && modal.classList.contains('hidden')) {
    const navLinks = Array.from(document.querySelectorAll('.nav__link'));
    const activeLink = document.querySelector('.nav__link.active');
    const currentIndex = navLinks.indexOf(activeLink);
    
    if (e.key === 'ArrowLeft' && currentIndex > 0) {
      e.preventDefault();
      navLinks[currentIndex - 1].click();
    } else if (e.key === 'ArrowRight' && currentIndex < navLinks.length - 1) {
      e.preventDefault();
      navLinks[currentIndex + 1].click();
    }
  }
});

// Utility functions
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

// Export for global access
window.PortfolioApp = PortfolioApp;
window.portfolioApp = portfolioApp;