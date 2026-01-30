"use client";

import styles from './Landing.module.css';

export default function Ethical() {
    return (
        <section className={`${styles.section} ${styles.ethicalSection}`}>
            <div className={styles.container}>
                <div className={styles.headingWrapper}>
                    <span className={styles.subTag} style={{ borderColor: 'rgba(16, 185, 129, 0.2)', backgroundColor: 'rgba(16, 185, 129, 0.05)', color: '#34d399' }}>100% Admin Safe</span>
                    <h2 className={styles.sectionTitle}>Ethical by Design</h2>
                </div>

                <div className={styles.ethicalGrid}>
                    <div className={styles.checkList}>
                        {[
                            "No Cheating Mechanisms",
                            "No Exam Paper Leaks",
                            "No Teacher Identification",
                            "Fully Anonymized Data",
                            "Decision Support Only"
                        ].map((item, i) => (
                            <div key={i} className={styles.checkItem}>
                                <div className={styles.checkIcon}>✓</div>
                                {item}
                            </div>
                        ))}
                    </div>

                    <div className={styles.quoteBox}>
                        <p className="text-xl md:text-2xl font-medium text-white mb-6 leading-relaxed">
                            "GradeMax AI helps you optimize your effort strategy, not break the rules. It uses only public data patterns."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-700" />
                            <div>
                                <div className="font-bold text-white">Ethical Standards Board</div>
                                <div className="text-xs text-gray-400">Compliance Verified</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
