"use client";

import styles from '@/components/dashboard/Dashboard.module.css';

export default function RisksPage() {
    return (
        <div className={styles.main}>
            <header className={styles.header}>
                <h1 className={styles.title}>Risk Analysis</h1>
            </header>

            <div className={styles.content}>

                <div className="space-y-4">
                    <div className={styles.alertCard} style={{ backgroundColor: 'rgba(239, 68, 68, 0.05)' }}>
                        <span className="text-2xl">🚨</span>
                        <div>
                            <h3 className="text-red-400 font-bold mb-1">Critical Grade Drop Warning</h3>
                            <p className="text-gray-400 text-sm mb-2">
                                Your performance in <strong>Circuit Theory</strong> internals was 40% below class average.
                                This subject has a high failure rate historically.
                            </p>
                            <button className="text-xs bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1.5 rounded-md hover:bg-red-500/20 transition-colors">
                                View Recovery Plan
                            </button>
                        </div>
                    </div>

                    <div className={styles.strategyCard} style={{ minHeight: 'auto' }}>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-yellow-500 text-xl">⚠️</span>
                            <h3 className="font-bold">Attendance at Edge</h3>
                        </div>
                        <p className="text-gray-400 text-sm">
                            <strong>Physics Lab:</strong> You are 1 session away from debar list.
                            Next lab is on Tuesday, do not miss.
                        </p>
                    </div>

                    <div className={styles.strategyCard} style={{ minHeight: 'auto' }}>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-blue-400 text-xl">ℹ️</span>
                            <h3 className="font-bold">Syllabus Change Detected</h3>
                        </div>
                        <p className="text-gray-400 text-sm">
                            <strong>Engineering Math:</strong> Unit 5 (Vector Calc) weightage increased by 10% in recent papers.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}
