"use client";

import { Button } from './ui/Button';
import { motion } from "framer-motion";
import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className={styles.heroSection}>
            {/* Background Effects */}
            <div className={styles.backgroundEffects}>
                <div className={styles.glow} />
                <div className={styles.fadeBottom} />
                <div className={styles.gridPattern} />
            </div>

            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className={styles.tag}>
                            Ethical Academic Optimization
                        </span>
                        <h1 className={styles.heading}>
                            Your college is predictable. <br />
                            <span className={styles.gradientText}>
                                Your CGPA doesn't have to be.
                            </span>
                        </h1>
                        <p className={styles.description}>
                            Stop guessing. Start optimizing. GradeMax AI decodes your syllabus, exam patterns, and grading systems to help you maximize returns with minimum wasted effort.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className={styles.buttonGroup}
                    >
                        <Link href="/onboarding">
                            <Button size="lg">
                                Analyze My Semester
                            </Button>
                        </Link>
                        <Button variant="secondary" size="lg">
                            See Demo Strategy
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className={styles.trustIndicators}
                    >
                        <div className={styles.indicator}>
                            <div className={styles.dot} />
                            100% Ethical
                        </div>
                        <div className={styles.indicator}>
                            <div className={styles.dot} />
                            Anonymized Data
                        </div>
                        <div className={styles.indicator}>
                            <div className={styles.dot} />
                            Pattern Analysis
                        </div>
                    </motion.div>
                </div>

                {/* Right side visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className={styles.visualWrapper}
                >
                    <div className={styles.visualContainer}>
                        {/* Decorative circles (Ambient Animation) */}
                        <div className={`${styles.animRing} ${styles.ring1}`} />
                        <div className={`${styles.animRing} ${styles.ring2}`} />
                        <div className={`${styles.animRing} ${styles.ring3}`} />

                        {/* Central Card Mockup */}
                        <div className={styles.cardMockup}>
                            <div className={styles.glassCard}>
                                <div className={styles.cardHeader}>
                                    <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>Strategic ROI</h3>
                                    <span className={styles.roiBadge}>+1.2 CGPA</span>
                                </div>

                                {/* Fake Charts */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <div className={styles.chartRow}>
                                        <div className={styles.chartLabel}>
                                            <span>Engineering Math</span>
                                            <span style={{ color: 'white' }}>High Return</span>
                                        </div>
                                        <div className={styles.barBg}>
                                            <div className={styles.barFillBlue} />
                                        </div>
                                    </div>

                                    <div className={styles.chartRow}>
                                        <div className={styles.chartLabel}>
                                            <span>Circuit Theory</span>
                                            <span style={{ color: 'white' }}>Risk Zone</span>
                                        </div>
                                        <div className={styles.barBg}>
                                            <div className={styles.barFillRed} />
                                        </div>
                                    </div>

                                    <div className={styles.chartRow}>
                                        <div className={styles.chartLabel}>
                                            <span>Data Structures</span>
                                            <span style={{ color: 'white' }}>Optimal</span>
                                        </div>
                                        <div className={styles.barBg}>
                                            <div className={styles.barFillGreen} />
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.suggestionBox}>
                                    <div className={styles.iconCircle}>💡</div>
                                    <div className={styles.suggestionText}>
                                        <p>Suggestion</p>
                                        Shift 20% effort from Circuits to DSA.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
