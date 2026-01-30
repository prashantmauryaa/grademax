"use client";

import { motion } from 'framer-motion';
import styles from './Landing.module.css';

export default function DemoPreview() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.headingWrapper}>
                    <span className={styles.subTag}>Preview</span>
                    <h2 className={styles.sectionTitle}>See Your Future Dashboard</h2>
                </div>

                <motion.div
                    className="relative max-w-4xl mx-auto"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    {/* Mock Browser/Dashboard Frame */}
                    <div className="rounded-xl border border-gray-800 bg-[#0c0c0e] overflow-hidden shadow-2xl">
                        {/* Fake Header */}
                        <div className="h-8 bg-[#18181b] border-b border-gray-800 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>

                        {/* Fake Content */}
                        <div className="p-8 grid md:grid-cols-3 gap-6">
                            {/* Strategy Col */}
                            <div className="md:col-span-2 space-y-6">
                                <div className="p-5 rounded-lg border border-gray-800 bg-[#121214]">
                                    <div className="flex justify-between mb-4">
                                        <h4 className="font-bold text-gray-200">Optimal Effort Allocation</h4>
                                        <span className="text-xs text-green-400 border border-green-500/30 px-2 py-0.5 rounded">AI Generated</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex justify-between text-sm text-gray-400">
                                            <span>Engineering Math</span>
                                            <span className="text-white">High Priority</span>
                                        </div>
                                        <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                                            <div className="bg-blue-500 h-full w-[85%]" />
                                        </div>

                                        <div className="flex justify-between text-sm text-gray-400 mt-2">
                                            <span>Basic Electronics</span>
                                            <span className="text-white">Maintenance Only</span>
                                        </div>
                                        <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                                            <div className="bg-gray-600 h-full w-[40%]" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Risk Col */}
                            <div className="space-y-4">
                                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                                    <div className="text-red-400 font-bold mb-1 flex items-center gap-2">
                                        ⚠️ Attendance Risk
                                    </div>
                                    <p className="text-xs text-red-300/70">
                                        Circuit Theory is at 74%. You must attend the next 2 classes.
                                    </p>
                                </div>
                                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                                    <div className="text-blue-400 font-bold mb-1 flex items-center gap-2">
                                        🗓️ Exam Alert
                                    </div>
                                    <p className="text-xs text-blue-300/70">
                                        Physics Midsem in 12 days. Start Module 3 now.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
