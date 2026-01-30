"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Dashboard.module.css';

export default function Dashboard() {
    const [cgpaTarget, setCgpaTarget] = useState(8.5);

    // Mock Data for Bubble Chart
    // x: Difficulty, y: ROI (Return on Investment)
    const subjects = [
        { name: 'Eng Math', difficulty: 70, roi: 90, credits: 4, type: 'high' },
        { name: 'Physics', difficulty: 40, roi: 60, credits: 3, type: 'med' },
        { name: 'Basic EE', difficulty: 85, roi: 40, credits: 4, type: 'low' },
        { name: 'Comp Prog', difficulty: 50, roi: 95, credits: 3, type: 'high' },
        { name: 'Eng Graph', difficulty: 30, roi: 50, credits: 2, type: 'med' },
    ];

    return (
        <div className={styles.main}>

            {/* Left Column: Strategy */}
            <div style={{ gridColumn: '1 / 2' }}>
                <header className={styles.header}>
                    <div>
                        <h1 className={styles.title}>Academics Strategy</h1>
                        <p className="text-gray-400 text-sm">Sem 5 • Target: {cgpaTarget} CGPA</p>
                    </div>
                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                        🔔
                    </div>
                </header>

                <div className={styles.content}>

                    <div className={styles.sliderContainer}>
                        <div className={styles.sliderHeader}>
                            <label className="text-sm text-gray-400">Target CGPA</label>
                            <div className={styles.sliderValue}>{cgpaTarget}</div>
                        </div>
                        <input
                            type="range"
                            min="5"
                            max="10"
                            step="0.1"
                            value={cgpaTarget}
                            onChange={(e) => setCgpaTarget(parseFloat(e.target.value))}
                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[var(--primary)]"
                        />
                    </div>

                    <div className={styles.strategyCard}>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-lg">Subject ROI Matrix</h3>
                            <div className="flex gap-2 text-xs">
                                <span className="px-2 py-1 rounded bg-green-500/10 text-green-500 border border-green-500/20">High ROI</span>
                                <span className="px-2 py-1 rounded bg-red-500/10 text-red-500 border border-red-500/20">Trap</span>
                            </div>
                        </div>

                        <div className={styles.chartContainer}>
                            {/* Axis Labels */}
                            <div className="absolute bottom-0 left-0 text-xs text-gray-500">Difficulty →</div>
                            <div className="absolute top-0 left-0 text-xs text-gray-500">ROI ↑</div>

                            {/* Bubbles */}
                            {subjects.map((sub, i) => (
                                <motion.div
                                    key={sub.name}
                                    className={`${styles.bubble} ${sub.type === 'high' ? styles.bubbleHigh :
                                        sub.type === 'low' ? styles.bubbleLow : styles.bubbleMed
                                        }`}
                                    style={{
                                        left: `${sub.difficulty}%`,
                                        bottom: `${sub.roi}%`,
                                        width: `${sub.credits * 20}px`,
                                        height: `${sub.credits * 20}px`,
                                    }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {sub.name}
                                </motion.div>
                            ))}
                        </div>
                        <p className="mt-4 text-xs text-center text-gray-500">
                            Size = Credits. Position = Difficulty vs Grade Return.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Column: Alerts & Focus */}
            <div className={styles.rightPanel}>
                <div>
                    <h3 className={styles.sectionTitle}>Risk Alerts</h3>
                    <div className="flex flex-col gap-3">
                        <div className={styles.alertCard}>
                            <div className={styles.alertIcon}>⚠️</div>
                            <div className={styles.alertContent}>
                                <h4>Basic EE Warning</h4>
                                <p>High syllabus volume but low grade weightage. Don't over-study.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className={styles.sectionTitle}>Today's Focus</h3>
                    <div className={styles.focusCard}>
                        <div className={styles.focusItem}>
                            <div className={styles.check} />
                            <span className={styles.focusText}>Solve 5 Maths PYQs</span>
                        </div>
                        <div className={styles.focusItem}>
                            <div className={styles.check} />
                            <span className={styles.focusText}>Submit CP Lab Assign</span>
                        </div>
                        <div className={styles.focusItem}>
                            <div className={styles.check} />
                            <span className={styles.focusText}>Revise Physics Ch 2</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
