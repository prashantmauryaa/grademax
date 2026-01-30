"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Onboarding.module.css';
import { Button } from '../ui/Button';
import { useRouter } from 'next/navigation';

// Mock Data
const COLLEGES = [
    "Indian Institute of Technology, Delhi",
    "BITS Pilani",
    "Vellore Institute of Technology",
    "Manipal Institute of Technology",
    "SRM University",
    "Other"
];

const BRANCHES = [
    "Computer Science & Engineering",
    "Electronics & Communication",
    "Electrical & Electronics",
    "Mechanical Engineering",
    "Civil Engineering"
];

export default function Onboarding() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const totalSteps = 4;

    const [formData, setFormData] = useState({
        college: '',
        branch: '',
        semester: '',
        goals: 8.5
    });

    const progress = (step / totalSteps) * 100;

    const nextStep = () => {
        if (step < 5) {
            setStep(step + 1);
        } else if (step === 5) {
            setStep(6);
            // Simulate processing then redirect
            setTimeout(() => {
                router.push('/dashboard');
            }, 3000);
        }
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSelect = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className={styles.container}>
            <motion.div
                className={styles.card}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className={styles.progressBarContainer}>
                    <div className={styles.progressBar} style={{ width: `${progress}%` }} />
                </div>

                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -20, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className={styles.header}>
                                <h2 className={styles.title}>Select Your College</h2>
                                <p className={styles.subtitle}>We optimize based on your specific grading system.</p>
                            </div>
                            <div className={styles.stepContent}>
                                {COLLEGES.map((college) => (
                                    <div
                                        key={college}
                                        className={`${styles.optionButton} ${formData.college === college ? styles.selected : ''}`}
                                        onClick={() => handleSelect('college', college)}
                                    >
                                        <span>{college}</span>
                                        {formData.college === college && <span className="text-green-400">✓</span>}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -20, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className={styles.header}>
                                <h2 className={styles.title}>What's your Branch?</h2>
                                <p className={styles.subtitle}>Curriculum difficulty varies by department.</p>
                            </div>
                            <div className={styles.stepContent}>
                                {BRANCHES.map((branch) => (
                                    <div
                                        key={branch}
                                        className={`${styles.optionButton} ${formData.branch === branch ? styles.selected : ''}`}
                                        onClick={() => handleSelect('branch', branch)}
                                    >
                                        <span>{branch}</span>
                                        {formData.branch === branch && <span className="text-green-400">✓</span>}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -20, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className={styles.header}>
                                <h2 className={styles.title}>Current Semester</h2>
                                <p className={styles.subtitle}>Strategy changes if you are a fresher vs senior.</p>
                            </div>
                            <div className="grid grid-cols-4 gap-3">
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                                    <button
                                        key={sem}
                                        className={`${styles.optionButton} ${formData.semester === sem.toString() ? styles.selected : ''} flex justify-center !text-center`}
                                        onClick={() => handleSelect('semester', sem.toString())}
                                    >
                                        {sem}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -20, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className={styles.header}>
                                <h2 className={styles.title}>Target CGPA</h2>
                                <p className={styles.subtitle}>Be realistic, but ambitious.</p>
                            </div>
                            <div className="py-8 px-4">
                                <input
                                    type="range"
                                    min="5"
                                    max="10"
                                    step="0.1"
                                    value={formData.goals}
                                    onChange={(e) => setFormData({ ...formData, goals: parseFloat(e.target.value) })}
                                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[var(--primary)]"
                                />
                                <div className="text-center mt-6">
                                    <span className="text-4xl font-bold font-[family-name:var(--font-heading)] text-[var(--primary)]">
                                        {formData.goals}
                                    </span>
                                    <span className="text-gray-500 text-sm ml-2">CGPA</span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                    {step === 5 && (
                        <motion.div
                            key="step5"
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -20, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className={styles.header}>
                                <h2 className={styles.title}>Data Input</h2>
                                <p className={styles.subtitle}>No personal data. Only academic pattern analysis.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="p-4 border border-dashed border-gray-700 rounded-lg hover:border-gray-500 transition-colors cursor-pointer text-center">
                                    <div className="text-2xl mb-2">📄</div>
                                    <h4 className="text-sm font-medium text-gray-300">Upload Syllabus PDF</h4>
                                    <p className="text-xs text-gray-500 mt-1">Drag & drop or click to upload</p>
                                </div>
                                <div className="p-4 border border-dashed border-gray-700 rounded-lg hover:border-gray-500 transition-colors cursor-pointer text-center">
                                    <div className="text-2xl mb-2">📝</div>
                                    <h4 className="text-sm font-medium text-gray-300">Upload Previous Question Papers</h4>
                                    <p className="text-xs text-gray-500 mt-1">(Optional) Improves accuracy</p>
                                </div>
                            </div>
                            <div className="mt-6 text-center text-xs text-gray-500">
                                GradeMax AI will process this locally to find hidden structures.
                            </div>
                        </motion.div>
                    )}

                    {step === 6 && (
                        <motion.div
                            key="step6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center justify-center py-10"
                        >
                            <div className="w-16 h-16 rounded-full border-4 border-[var(--surface)] border-t-[var(--primary)] border-r-[var(--secondary)] animate-spin mb-6" />
                            <h2 className="text-xl font-bold mb-2">Analyzing Patterns...</h2>
                            <p className="text-gray-400 text-sm text-center">GradeMax AI is finding hidden academic structures</p>
                        </motion.div>
                    )}

                </AnimatePresence>

                <div className={styles.actions}>
                    {step === 6 ? null : (
                        <>
                            {step === 1 ? (
                                <div></div>
                            ) : (
                                <button className={styles.backButton} onClick={prevStep}>
                                    Back
                                </button>
                            )}

                            <Button
                                onClick={nextStep}
                                disabled={
                                    (step === 1 && !formData.college) ||
                                    (step === 2 && !formData.branch) ||
                                    (step === 3 && !formData.semester)
                                }
                            >
                                {step === 4 ? 'Next' : step === 5 ? 'Generate Strategy' : 'Continue'}
                            </Button>
                        </>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
