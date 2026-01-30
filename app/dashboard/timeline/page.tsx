"use client";

import styles from '@/components/dashboard/Dashboard.module.css';

const TIMELINE_DATA = [
    {
        week: "Week 1-4",
        message: "Focus on Labs & Assignments",
        subtext: "High weightage, low effort now.",
        color: "#10b981"
    },
    {
        week: "Midsem",
        message: "Prioritize High Credit Subjects",
        subtext: "Physics & Maths need attention.",
        color: "#f59e0b"
    },
    {
        week: "Week 12",
        message: "Start Endsem Prep (Trap Subjects)",
        subtext: "Cover Basic EE before panic sets in.",
        color: "#ef4444"
    }
];

export default function TimelinePage() {
    return (
        <div className={styles.main}>
            <header className={styles.header}>
                <h1 className={styles.title}>Study Priority Timeline</h1>
            </header>

            <div className={styles.content}>
                <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid var(--border)' }}>
                    {TIMELINE_DATA.map((item, index) => (
                        <div key={index} className="mb-12 relative">
                            <div
                                style={{
                                    position: 'absolute',
                                    left: '-2.55rem',
                                    top: '0.25rem',
                                    width: '1rem',
                                    height: '1rem',
                                    borderRadius: '50%',
                                    backgroundColor: item.color,
                                    boxShadow: `0 0 10px ${item.color}`
                                }}
                            />

                            <span style={{ color: item.color, fontSize: '0.875rem', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
                                {item.week}
                            </span>

                            <div className={styles.strategyCard} style={{ minHeight: 'auto' }}>
                                <h3 className="font-bold text-lg mb-1">{item.message}</h3>
                                <p className="text-gray-400 text-sm">{item.subtext}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
