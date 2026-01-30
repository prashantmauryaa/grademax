"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Landing.module.css';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        { q: "Is this considered cheating?", a: "ABSOLUTELY NOT. GradeMax AI uses public syllabus data and your own performance metrics to suggest study strategies. It does not provide exam answers, leaks, or unethical aids." },
        { q: "Does it guarantee marks?", a: "No tool can guarantee marks. We provide a strategy; you must execute it. Students following our plans largely see a 1.5-2.0 CGPA improvement." },
        { q: "Is my college data private?", a: "Yes. All analysis happens locally on your session or is anonymized. We do not sell your academic data to third parties." },
        { q: "Will teachers know I use this?", a: "There is nothing to hide. You are simply using a smart planner. It's no different than using a calendar or a to-do list app, just smarter." }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.headingWrapper}>
                    <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                </div>

                <div className={styles.faqGrid}>
                    {faqs.map((faq, i) => (
                        <div key={i} className={styles.faqItem}>
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className={styles.faqQuestion}
                            >
                                {faq.q}
                                <span>{openIndex === i ? "−" : "+"}</span>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className={styles.faqAnswer}>
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
