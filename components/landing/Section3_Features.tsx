"use client";

import { motion } from 'framer-motion';
import styles from './Landing.module.css';

export default function Features() {
    const features = [
        { icon: "🎯", title: "CGPA Calculator", desc: "Set a target and see exactly what grades you need in each subject." },
        { icon: "📊", title: "ROI Matrix", desc: "Visual bubble chart showing Difficulty vs Grade Return." },
        { icon: "🚨", title: "Risk Alerts", desc: "Get warned before your attendance drops below safety thresholds." },
        { icon: "🗓️", title: "Study Timeline", desc: "Know when to study what. Don't waste time on easy subjects early." },
        { icon: "📝", title: "Paper Analytics", desc: "We scan PYQs to tell you which modules are high-yield." },
        { icon: "🧘", title: "Focus Mode", desc: "A daily checklist to keep you on track without overwhelm." },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.headingWrapper}>
                    <span className={styles.subTag}>Everything You Need</span>
                    <h2 className={styles.sectionTitle}>The Full Arsenal</h2>
                </div>

                <div className={styles.featuresGrid}>
                    {features.map((feat, i) => (
                        <motion.div
                            key={i}
                            className={styles.featureCard}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className={styles.featureIcon}>{feat.icon}</div>
                            <h3 className="font-bold text-lg mb-2 text-white">{feat.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
