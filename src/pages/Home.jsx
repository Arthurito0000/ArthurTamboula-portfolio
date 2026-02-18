import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, User, Rocket, Clock, CheckCircle2, X, Maximize2, Shield, Braces, Settings, Palette, Smartphone, Eye } from 'lucide-react';

// Import local images with exact filenames
import eyesonDash from '../assets/images/EyesON Dashboard.png';
import eyesonSettings from '../assets/images/EyesON APP Settings – 1.png';
import eyesonRecorder from '../assets/images/EyesON – Screen Recorder.png';

import manageoDash from '../assets/images/manageo - dashboard.png';
import manageoProjects from '../assets/images/Manageo -Gestion des  Projets clients.png';
import manageoSuivi from '../assets/images/manageo -SUIVI DE projets .png';
import manageoForm from '../assets/images/Manageo -  Formulaire Gestion Projets client.png';
import manageoSuppliers from '../assets/images/manageo -Gestion desFournisseurs.png';
import manageoLogin from '../assets/images/manageo -Login.png';

import stock1 from '../assets/images/stock manager1.png';
import stock2 from '../assets/images/stock manager2.png';
import stock3 from '../assets/images/stock manager 3.png';
import stock4 from '../assets/images/stock manger 4.png';

import yamo1 from '../assets/images/yamo commande.png';
import yamo2 from '../assets/images/yamo-Liste produit.png';
import yamo3 from '../assets/images/yamo-details commande.png';
import yamo4 from '../assets/images/yamo-listes demandes.png';

const projects = [
    {
        id: 1,
        title: "Ekose RX",
        category: "Santé & Télé-médecine",
        status: "completed",
        description: "Plateforme de téléconsultation permettant de consulter un médecin en ligne et de suivre ses prescriptions médicales en temps réel. Une solution complète pour désengorger les salles d'attente et offrir un accès rapide aux soins.",
        tech: ["React", "React Native", "Express"],
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
        link: "https://ekose.horizonservicessl.net/"
    },
    {
        id: 2,
        title: "Eyeson",
        category: "Sécurité & Contrôle Parental",
        status: "completed",
        description: "Application permettant aux parents de surveiller et gérer l'utilisation du smartphone de leurs enfants à distance. Inclut le filtrage de contenu et le suivi de localisation.",
        tech: ["Flutter", "Laravel"],
        image: eyesonDash,
        gallery: [eyesonDash, eyesonSettings, eyesonRecorder]
    },
    {
        id: 3,
        title: "Stock Manager",
        category: "Gestion d'Entreprise",
        status: "recent",
        description: "Solution complète de gestion de stocks, facturation et inventaires pour optimiser la logistique interne d'une entreprise.",
        tech: ["Laravel 11", "MySQL"],
        image: stock1,
        gallery: [stock1, stock2, stock3, stock4]
    },
    {
        id: 4,
        title: "Manageo",
        category: "Productivité & Business",
        status: "recent",
        description: "Outil de management et de suivi de performance pour les équipes modernes. Facilite la collaboration et le suivi des objectifs.",
        tech: ["Laravel 11", "MySQL"],
        image: manageoDash,
        gallery: [manageoLogin, manageoDash, manageoProjects, manageoSuivi, manageoForm, manageoSuppliers]
    },
    {
        id: 5,
        title: "Yamo",
        category: "Social & Anti-Gaspillage",
        status: "in-progress",
        description: "Application innovante de lutte contre le gaspillage alimentaire, connectant les surplus alimentaires aux personnes dans le besoin pour un impact social et écologique positif.",
        tech: ["React Native", "Express"],
        image: yamo2,
        gallery: [yamo2, yamo1, yamo3, yamo4]
    }
];

const Home = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeImageIdx, setActiveImageIdx] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);
    const [fullscreenImage, setFullscreenImage] = useState(null);

    const categories = [
        { id: 'completed', title: 'Projets Réalisés', icon: <CheckCircle2 size={18} /> },
        { id: 'recent', title: 'Projets Récents', icon: <Clock size={18} /> },
        { id: 'in-progress', title: 'Projets en Cours', icon: <Rocket size={18} /> }
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        setActiveImageIdx(0);
        setIsZoomed(false);
    };

    return (
        <div className="page-home">
            <header className="hero">
                <div className="hero-container">
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="hello-tag">Bonjour <span className="dot">.</span></div>
                        <h1>C'est <span>Arthur</span></h1>
                        <h2 className="hero-title">L'art de transformer le code en expériences captivantes.</h2>
                        <p className="hero-description">
                            Développeur Fullstack junior avec une soif d'apprendre et une passion pour la cybersécurité.
                            Je combine fraîcheur créative et rigueur technique pour bâtir des solutions digitales
                            modernes, sécurisées et performantes.
                        </p>
                        <div className="hero-btns">
                            <a href="#contact" className="primary-btn">Un projet ?</a>
                            <a href="#" className="secondary-btn">Mon CV</a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="circular-frame">
                            <div className="circle-bg"></div>
                            <img
                                src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=1000"
                                alt="Développement Digital Abstract"
                                className="profile-img"
                            />
                        </div>
                    </motion.div>
                </div>
            </header>

            <div className="tech-bar">
                <div className="tech-bar-content">
                    <span>React</span>
                    <span>Laravel</span>
                    <span>Node.js</span>
                    <span>Flutter</span>
                    <span>MySQL</span>
                    <span>PHP</span>
                    <span>Git</span>
                </div>
            </div>

            <section id="about" className="about-section">
                <div className="about-grid">
                    <div className="services-list">
                        <div className="service-item">
                            <div className="service-icon"><Braces size={20} /></div>
                            <span>Développement Web</span>
                        </div>
                        <div className="service-item">
                            <div className="service-icon"><Smartphone size={20} /></div>
                            <span>Développement Mobile</span>
                        </div>
                        <div className="service-item">
                            <div className="service-icon"><Rocket size={20} /></div>
                            <span>Solutions SaaS</span>
                        </div>
                    </div>

                    <div className="about-main">
                        <div className="section-header left">
                            <h2>À propos de <span>moi</span></h2>
                        </div>
                        <p>
                            Passionné par le développement web et la cybersécurité, je conçois des solutions
                            digitales performantes et sécurisées. Mon objectif est de transformer vos idées
                            en expériences utilisateurs mémorables.
                        </p>
                        <div className="stats-grid">
                            <div className="stat-item">
                                <h3>10 +</h3>
                                <p>Projets terminés</p>
                            </div>
                            <div className="stat-item">
                                <h3>95 %</h3>
                                <p>Satisfaction client</p>
                            </div>
                            <div className="stat-item">
                                <h3>2 +</h3>
                                <p>Années d'expérience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="projects-section">
                <div className="section-header-centered">
                    <h2>Mes <span>Projets</span></h2>
                    <div className="header-line"></div>
                </div>

                {categories.map((cat) => (
                    <div key={cat.id} className="project-category-group">
                        <div className="category-title">
                            {cat.icon}
                            <h3>{cat.title}</h3>
                        </div>
                        <div className="projects-grid mini">
                            {projects.filter(p => p.status === cat.id).map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    className="project-card mini"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <div className="project-image mini">
                                        <img src={project.image} alt={project.title} />
                                        <div className="project-overlay">
                                            <button
                                                className="view-btn"
                                                onClick={() => openModal(project)}
                                            >
                                                {project.link ? (
                                                    <>Détails <ExternalLink size={14} /></>
                                                ) : (
                                                    <>Captures <Maximize2 size={14} /></>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="project-info mini">
                                        <span className="project-cat">{project.category}</span>
                                        <h3>{project.title}</h3>
                                        <div className="project-tech">
                                            {project.tech.slice(0, 3).map((t, i) => <span key={i}>{t}</span>)}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* Modal de Détails Projet */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="project-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className={`project-modal-content ${isZoomed ? 'zoomed' : ''}`}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-modal" onClick={() => setSelectedProject(null)}>
                                <X size={20} />
                            </button>
                            <div className="modal-body">
                                <div className="modal-image-container">
                                    <div className={`main-image ${isZoomed ? 'zoom-active' : ''}`} onClick={() => setIsZoomed(!isZoomed)}>
                                        {/* Logique d'affichage double pour projets mobiles */}
                                        {selectedProject.gallery && (selectedProject.tech.includes("React Native") || selectedProject.tech.includes("Flutter")) ? (
                                            <>
                                                <img
                                                    src={selectedProject.gallery[activeImageIdx]}
                                                    alt={`${selectedProject.title} view 1`}
                                                />
                                                {selectedProject.gallery[activeImageIdx + 1] && (
                                                    <img
                                                        src={selectedProject.gallery[activeImageIdx + 1]}
                                                        alt={`${selectedProject.title} view 2`}
                                                    />
                                                )}
                                            </>
                                        ) : (
                                            <img
                                                src={selectedProject.gallery ? selectedProject.gallery[activeImageIdx] : selectedProject.image}
                                                alt={selectedProject.title}
                                            />
                                        )}

                                        <div className="image-controls">
                                            {!isZoomed && <div className="zoom-hint" title="Zoom"><Maximize2 size={20} /></div>}
                                            <button
                                                className="fullscreen-btn"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setFullscreenImage(selectedProject.gallery ? selectedProject.gallery[activeImageIdx] : selectedProject.image);
                                                }}
                                                title="Plein écran"
                                            >
                                                <Eye size={20} />
                                            </button>
                                        </div>
                                    </div>

                                    {selectedProject.gallery && (
                                        <div className="gallery-thumbs">
                                            {selectedProject.gallery.map((img, idx) => {
                                                const isMobile = selectedProject.tech.includes("React Native") || selectedProject.tech.includes("Flutter");
                                                // Pour le mobile, on ne montre que les indices pairs pour garder la navigation par paires cohérente
                                                if (isMobile && idx % 2 !== 0) return null;

                                                return (
                                                    <div
                                                        key={idx}
                                                        className={`thumb ${activeImageIdx === idx ? 'active' : ''} ${isMobile ? 'mobile-thumb' : ''}`}
                                                        onClick={() => setActiveImageIdx(idx)}
                                                    >
                                                        <img src={img} alt="Preview" />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                                <div className="modal-info">
                                    <span className="project-cat">{selectedProject.category}</span>
                                    <h2>{selectedProject.title}</h2>
                                    <p>{selectedProject.description}</p>
                                    <div className="modal-tech">
                                        <h3>Technologies :</h3>
                                        <div className="project-tech">
                                            {selectedProject.tech.map((t, i) => <span key={i}>{t}</span>)}
                                        </div>
                                    </div>
                                    {selectedProject.link && (
                                        <a href={selectedProject.link} target="_blank" rel="noreferrer" className="primary-btn site-btn">
                                            Visiter le site <ExternalLink size={14} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Lightbox plein écran */}
            <AnimatePresence>
                {fullscreenImage && (
                    <motion.div
                        className="fullscreen-lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setFullscreenImage(null)}
                    >
                        <button className="close-lightbox" onClick={() => setFullscreenImage(null)}>
                            <X size={30} />
                        </button>
                        <motion.img
                            src={fullscreenImage}
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            alt="Full screen"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <section id="skills" className="skills-section">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Ma <span>Stack</span> Technique</h2>
                    <p>Les outils que j'utilise pour bâtir des applications robustes.</p>
                </motion.div>

                <div className="skills-content">
                    <div className="skills-grid">
                        <div className="skill-card">
                            <div className="skill-icon"><Braces /></div>
                            <h3>Frontend</h3>
                            <p>React, TypeScript, React Native, Flutter</p>
                        </div>

                        <div className="skill-card">
                            <div className="skill-icon"><Settings /></div>
                            <h3>Backend</h3>
                            <p>Laravel (PHP), Node.js, Express, PostgreSQL, MySQL</p>
                        </div>

                        <div className="skill-card">
                            <div className="skill-icon"><Smartphone /></div>
                            <h3>Outils & Workflow</h3>
                            <p>Git, Docker, Vite, Figma, Postman, Linux (CLI)</p>
                        </div>

                        <div className="skill-card">
                            <div className="skill-icon"><Braces /></div>
                            <h3>Soft Skills</h3>
                            <p>Gestion de projet, Collaboration, Résolution de problèmes</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
