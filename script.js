// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar color change on scroll
window.onscroll = function () {
    var navbar = document.querySelector("nav");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.classList.add("bg-gray-700");
    } else {
        navbar.classList.remove("bg-gray-700");
    }
};

// Toggle menu
function toggleFunction() {
    var x = document.getElementById("navDemo");
    x.classList.toggle("w3-show");
}

const projects = [
    {
        id: 'nlp-project',
        title: 'AI-Powered Keyphrase Extraction System (NLP Project)',
        date: 'Jan 2024 - May 2024',
        institution: 'George Mason University',
        description: 'Enhanced SAMRank model for unsupervised keyphrase extraction.',
        details: [
            'Engineered an enhanced SAMRank model for unsupervised keyphrase extraction, achieving F1 scores within 2% of the original paper across 3 benchmark datasets.',
            'Boosted model robustness by 15% through strategic data perturbation techniques applied to 20% of the training data.',
            'Expanded multilingual capabilities to 3 new languages, increasing the model\'s applicability by 40% in diverse linguistic contexts.'
        ],
        skills: 'Python, BERT, GPT-2, mBERT, RoBERTa, Natural Language Processing, Machine Learning, Data Analysis'
    },
    {
        id: 'cloud-survey',
        title: 'Cloud-Based Student Survey Platform',
        date: 'Jan 2024 - May 2024',
        institution: 'George Mason University',
        description: 'Scalable AWS-based survey system with high uptime and optimized performance.',
        details: [
            'Architected a scalable AWS-based survey system, achieving 99.9% uptime and reducing page load time by 40% through optimized use of S3, EC2, CloudFront, and Route 53.',
            'Developed a responsive survey form with 10+ input types, increasing mobile user engagement by 35% and reducing form abandonment rates by 25%.',
            'Implemented custom analytics, boosting survey completion rates by 50% and capturing insights from over 1,000 student responses.'
        ],
        skills: 'AWS (S3, EC2, CloudFront, Route 53), HTML, CSS, JavaScript, Cloud Architecture, Web Development, Analytics'
    },
    {
        id: 'full-stack-survey',
        title: 'Full-Stack Student Survey Application',
        date: 'Sep 2023 - Dec 2023',
        institution: 'George Mason University',
        description: 'Comprehensive web application using Angular and Spring Boot.',
        details: [
            'Built a comprehensive full-stack web application using Angular and Spring Boot, reducing data retrieval time by 30% for 10,000+ survey records.',
            'Designed and implemented RESTful APIs with 99.9% uptime, handling 500+ concurrent users during peak survey periods.',
            'Streamlined deployment process by containerizing the application and implementing a CI/CD pipeline, cutting release time by 60%.'
        ],
        skills: 'Angular, Spring Boot, RESTful APIs, JPA/Hibernate, MySQL, Docker, Kubernetes, Jenkins, CI/CD'
    },
    {
        id: 'webcam-security',
        title: 'Webcam Security System',
        date: 'Aug 2023 - Nov 2023',
        institution: 'George Mason University',
        description: 'Real-time C-based security system on embedded hardware.',
        details: [
            'Engineered a real-time C-based security system on embedded hardware, slashing incident response time by 20% through optimized intrusion detection algorithms.',
            'Implemented multi-threaded monitoring and GPIO interfaces, increasing system reliability by 40% and reducing false alarms by 15%.',
            'Optimized signal processing algorithms, enabling real-time analysis of 30 frames per second with 95% accuracy in varying light conditions.'
        ],
        skills: 'C programming, Embedded Systems, Multi-threading, GPIO, Real-time Processing'
    },
    {
        id: 'flight-delay',
        title: 'Flight Delay Prediction System',
        date: 'Apr 2022 - Jul 2022',
        institution: 'KMIT',
        description: 'ML-based system for predicting flight delays.',
        details: [
            'Conducted in-depth EDA on a 25-feature flight dataset, uncovering 3 key correlations that improved prediction accuracy by 10%.',
            'Engineered critical features using advanced time-series techniques, boosting model performance by 15% across all evaluation metrics.',
            'Developed and fine-tuned multiple ML models, achieving 82% accuracy in delay predictions and potentially saving airlines $100,000 annually.'
        ],
        skills: 'Python, pandas, matplotlib, seaborn, scikit-learn, Machine Learning, Data Analysis'
    },
    {
        id: 'agri-waste',
        title: 'Agricultural Waste Management Mobile App',
        date: 'Oct 2021 - Nov 2021',
        institution: '',
        description: 'Android app for efficient agricultural waste management.',
        details: [
            'Developed an Android app facilitating efficient agricultural waste management, connecting 500+ farmers with 50+ waste processing facilities.',
            'Implemented a robust backend using MySQL and Hibernate ORM, handling 1000+ daily transactions with 99.9% uptime.',
            'Designed an intuitive UI that reduced waste collection request time by 40%, leading to a 25% increase in recycling rates.'
        ],
        skills: 'Java, XML, Android Development, MySQL, Hibernate ORM, UI Design'
    },
    {
        id: 'customer-chatbot',
        title: 'Chatbot for Customer Service',
        date: 'Feb 2021 - Apr 2021',
        institution: '',
        description: 'AI-powered chatbot using Dialogflow for customer inquiries.',
        details: [
            'Created an AI-powered chatbot using Dialogflow, automating 60% of customer inquiries and reducing response times by 80%.',
            'Integrated NLP capabilities to understand and respond to complex queries, improving customer satisfaction scores by 30%.',
            'Implemented MongoDB integration for efficient data storage, enabling personalized interactions for 10,000+ monthly active users.'
        ],
        skills: 'Dialogflow, Natural Language Processing, MongoDB, Conversational AI'
    },
    {
        id: 'hospital-inventory',
        title: 'Hospital Inventory Management System',
        date: 'Oct 2020 - Dec 2020',
        institution: '',
        description: 'MERN stack web application for real-time hospital inventory tracking.',
        details: [
            'Engineered a MERN stack web application for real-time hospital inventory tracking, optimizing resource allocation for 50+ hospitals.',
            'Developed RESTful APIs handling 100+ requests per second, ensuring seamless data flow between frontend and backend.',
            'Designed a React-based dashboard for real-time ventilator availability, reducing patient routing time by 50% during emergencies.'
        ],
        skills: 'MongoDB, Express.js, React, Node.js (MERN stack), RESTful APIs'
    }
];

function createProjectCard(project) {
    return `
        <div class="bg-gray-100 p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl cursor-pointer" onclick="openModal('${project.id}')">
            <h3 class="text-2xl font-bold">${project.title}</h3>
            <p class="text-gray-600 mt-2">${project.date}</p>
            <p class="text-gray-700 mt-2">${project.description}</p>
        </div>
    `;
}

function renderProjects() {
    const projectGrid = document.getElementById('project-grid');
    projectGrid.innerHTML = projects.map(createProjectCard).join('');
}

function openModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDate = document.getElementById('modal-date');
    const modalDetails = document.getElementById('modal-details');
    const modalSkills = document.getElementById('modal-skills');

    modalTitle.textContent = project.title;
    modalDate.textContent = `${project.date}${project.institution ? ' | ' + project.institution : ''}`;
    modalDetails.innerHTML = project.details.map(detail => `<li>${detail}</li>`).join('');
    modalSkills.innerHTML = `<strong>Skills:</strong> ${project.skills}`;

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target == modal) {
        closeModal();
    }
}

// Render projects when the page loads
document.addEventListener('DOMContentLoaded', renderProjects);

// Add event listener to close button
document.getElementById('modal-close').addEventListener('click', closeModal);

function initializeProjects() {
    console.log("Initializing projects...");
    renderProjects();
    
    // Add event listener to close button
    const closeButton = document.getElementById('modal-close');
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    } else {
        console.error("Close button not found!");
    }
    
    console.log("Projects initialized successfully.");
}

