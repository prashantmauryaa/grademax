"use client";

import { motion } from 'framer-motion';
import styles from './Landing.module.css';

export default function HowItWorks() {
    const steps = [
        { title: "Upload Data", desc: "Syllabus, PYQs, Rules" },
        { title: "Pattern Analysis", desc: "AI Decodes Weightage" },
        { title: "Strategy Gen", desc: "ROI-based Plan" },
        { title: "Daily Execute", desc: "Focus Mode & Alerts" }
    ];

    return (
        <section className={styles.section} style={{ backgroundColor: '#0f0f12' }}>
            <div className={styles.container}>
                <div className={styles.headingWrapper}>
                    <span className={styles.subTag}>Process</span>
                    <h2 className={styles.sectionTitle}>How GradeMax Works</h2>
                    <p className={styles.sectionDescription}>
                        Your data stays on your device. Our algorithms simply structure the chaos.
                    </p>
                </div>

                <div className={styles.stepsGrid}>
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            className={styles.stepCard}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <div className={styles.stepNumber}>{i + 1}</div>
                            <h3 className="font-bold text-lg mb-2 text-white">{step.title}</h3>
                            <p className="text-gray-400 text-sm">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
