import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Lock, Eye, Terminal, Activity, AlertTriangle, Search, Cpu, Database, Bug, Zap, Award } from 'lucide-react';

const expertise = [
    {
        id: 1,
        title: "Monitoring SIEM",
        icon: <Eye />,
        desc: "Surveillance continue via Splunk et ELK. Analyse de logs pour détecter des patterns d'attaque."
    },
    {
        id: 2,
        title: "Incident Response",
        icon: <AlertTriangle />,
        desc: "Triage des alertes, analyse forensique de premier niveau et application des protocoles de remédiation."
    },
    {
        id: 3,
        title: "Threat Hunting",
        icon: <Search />,
        desc: "Recherche proactive d'indicateurs de compromission (IOC) au sein du réseau."
    },
    {
        id: 4,
        title: "Vulnerability Management",
        icon: <Bug />,
        desc: "Scan de vulnérabilités avec Nessus/OpenVAS et suivi des patchs critiques (CVE)."
    },
    {
        id: 5,
        title: "Endpoint Security (EDR)",
        icon: <Shield />,
        desc: "Gestion de la sécurité des terminaux et analyse des alertes provenant des agents EDR."
    }
];

const CyberSecurity = () => {
    const scrollRef = useRef(null);

    return (
        <div className="page-cyber">
            <div className="cyber-overlay"></div>

            <header className="cyber-hero">
                <div className="hero-container">
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="cyber-badge">
                            <Activity size={14} className="pulse" />
                            <span>ACTUELLEMENT EN STAGE CHEZ VINXIRA</span>
                        </div>
                        <h1>Arthur <span>Tamboula</span></h1>
                        <p className="glitch-text">
                            Gardien des infrastructures numériques. Je surveille, analyse et neutralise
                            les menaces pour garantir la résilience de vos systèmes d'information.
                        </p>
                        <div className="hero-btns">
                            <a href="#expertise" className="cyber-btn primary">Mon Expertise</a>
                            <a href="#tools" className="cyber-btn secondary">Mon Arsenal</a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-visual cyber-visual"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="terminal-window">
                            <div className="terminal-header">
                                <div className="dots"><span></span><span></span><span></span></div>
                                <div className="title">arthur@soc-terminal ~ </div>
                            </div>
                            <div className="terminal-content">
                                <p><span className="prompt">$</span> analyze --traffic --interface eth0</p>
                                <p className="typing">Capturing packets...</p>
                                <p><span className="warning">Warning: Suspicious outbound connection to 45.x.x.x</span></p>
                                <p><span className="prompt">$</span> whois 45.x.x.x</p>
                                <p className="success">Origin: Known Malicious C2 Server</p>
                                <p><span className="danger">Action: Blocking IP and isolating host.</span></p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </header>

            <section id="expertise" className="cyber-expertise-section">
                <div className="section-header">
                    <h2>Missions <span>SOC</span></h2>
                    <p>Découvrez comment je protège les actifs critiques d'une organisation.</p>
                </div>

                <div className="carousel-container">
                    <motion.div
                        className="expertise-carousel"
                        drag="x"
                        dragConstraints={{ right: 0, left: -600 }}
                    >
                        {expertise.map((item) => (
                            <motion.div key={item.id} className="expertise-card">
                                <div className="card-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="methodology-section">
                <div className="section-header">
                    <h2>Ma <span>Méthodologie</span></h2>
                    <p>Un processus rigoureux pour une sécurité sans faille.</p>
                </div>
                <div className="method-grid">
                    <div className="method-item">
                        <div className="method-number">01</div>
                        <h3>Prévention</h3>
                        <p>Configuration de firewalls, gestion des droits et sensibilisation.</p>
                    </div>
                    <div className="method-item">
                        <div className="method-number">02</div>
                        <h3>Détection</h3>
                        <p>Analyse de télémétrie et détection d'anomalies comportementales.</p>
                    </div>
                    <div className="method-item">
                        <div className="method-number">03</div>
                        <h3>Réaction</h3>
                        <p>Confinement immédiat et éradication de la menace.</p>
                    </div>
                    <div className="method-item">
                        <div className="method-number">04</div>
                        <h3>Recovery</h3>
                        <p>Restauration des services et retour d'expérience (Post-Mortem).</p>
                    </div>
                </div>
            </section>

            <section id="tools" className="cyber-section tools-section">
                <div className="section-header">
                    <h2>Mon <span>Arsenal</span></h2>
                </div>

                <div className="tools-cloud">
                    {[
                        "Splunk", "Wireshark", "Nmap", "Metasploit", "Burp Suite",
                        "Kali Linux", "Sysinternals", "Suricata", "Snort", "CrowdStrike",
                        "Azure Sentinel", "Wazuh", "Velociraptor"
                    ].map((tool, i) => (
                        <motion.span
                            key={i}
                            className="tool-tag"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                        >
                            {tool}
                        </motion.span>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CyberSecurity;
