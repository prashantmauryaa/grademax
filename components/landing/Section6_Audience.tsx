"use client";

import styles from './Landing.module.css';

export default function Audience() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.audienceGrid}>
                    <div className={`${styles.audienceCard} ${styles.audienceFor}`}>
                        <h3 className="text-xl font-bold text-green-400 mb-4">Who This Is For</h3>
                        <ul className="space-y-3">
                            {["Serious students targeting 9+ CGPA", "Students balancing internships & study", "Strategic learners", "Data-driven optimizers"].map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-300">
                                    <span className="text-green-500">✓</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={`${styles.audienceCard} ${styles.audienceNot}`}>
                        <h3 className="text-xl font-bold text-red-400 mb-4">Who This Is NOT For</h3>
                        <ul className="space-y-3">
                            {["Students looking for leaked papers", "Those wanting to cheat in exams", "Anyone trying to game the system unethically"].map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-400">
                                    <span className="text-red-500">✕</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
