"use client";

import { motion } from 'framer-motion';
import styles from './Landing.module.css';

export default function ProblemSection() {
    const problems = [
        {
            icon: "⚖️",
            title: "Same Effort, Different Results",
            desc: "Studying 10 hours for a 2-credit lab vs a 4-credit hard subject is strategic suicide."
        },
        {
            icon: "📉",
            title: "The Attendance Trap",
            desc: "Missing one wrong class can bar you from exams, while perfecting attendance in easy subjects yields zero ROI."
        },
        {
            icon: "🧩",
            title: "Syllabus Confusion",
            desc: "Professors skip topics, but they appear in exams. Or they stress topics that never come."
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.headingWrapper}>
                    <span className={styles.subTag}>The Reality</span>
                    <h2 className={styles.sectionTitle}>Why Hard Work Isn't Enough</h2>
                    <p className={styles.sectionDescription}>
                        College academic systems are complex games with hidden rules. Playing blindly ensures average results.
                    </p>
                </div>

                <div className={styles.problemGrid}>
                    {problems.map((prob, i) => (
                        <motion.div
                            key={i}
                            className={styles.problemCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className={styles.problemIcon}>{prob.icon}</div>
                            <h3 className="text-xl font-bold mb-3 text-white">{prob.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{prob.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
