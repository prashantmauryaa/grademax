"use client";

import styles from '@/components/dashboard/Dashboard.module.css';

export default function AttendancePage() {
    return (
        <div className={styles.main}>
            <header className={styles.header}>
                <h1 className={styles.title}>Attendance Optimization</h1>
            </header>

            <div className={styles.content}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* Safe Zone Card */}
                    <div className={styles.strategyCard} style={{ minHeight: 'auto' }}>
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-bold text-lg">Engineering Math</h3>
                                <p className="text-gray-400 text-xs">Total: 24/30</p>
                            </div>
                            <span className="text-green-500 font-bold">80%</span>
                        </div>
                        <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                            <div className="bg-green-500 h-full w-[80%]" />
                        </div>
                        <p className="mt-4 text-sm text-gray-400">
                            Safe Zone. You can miss <span className="text-white font-bold">3 classes</span> safely.
                        </p>
                    </div>

                    {/* Risk Zone Card */}
                    <div className={styles.strategyCard} style={{ minHeight: 'auto', borderColor: 'rgba(239, 68, 68, 0.4)' }}>
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-bold text-lg">Circuit Theory</h3>
                                <p className="text-gray-400 text-xs">Total: 18/28</p>
                            </div>
                            <span className="text-red-500 font-bold">64%</span>
                        </div>
                        <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                            <div className="bg-red-500 h-full w-[64%]" />
                        </div>
                        <p className="mt-4 text-sm text-gray-400">
                            <span className="text-red-400">Risk Zone.</span> Attend next 4 classes to reach buffer.
                        </p>
                    </div>

                    {/* Buffer Zone Card */}
                    <div className={styles.strategyCard} style={{ minHeight: 'auto' }}>
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-bold text-lg">Physics</h3>
                                <p className="text-gray-400 text-xs">Total: 21/28</p>
                            </div>
                            <span className="text-yellow-500 font-bold">75%</span>
                        </div>
                        <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                            <div className="bg-yellow-500 h-full w-[75%]" />
                        </div>
                        <p className="mt-4 text-sm text-gray-400">
                            Buffer Zone. Maintain current streak.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
