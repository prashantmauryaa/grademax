"use client";

import Link from 'next/link';
import { Button } from '../ui/Button';
import styles from './Landing.module.css';

export default function CTA() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.ctaBox}>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Stop Guessing. <br className="hidden md:block" /> Start Optimizing.
                    </h2>
                    <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
                        Join smart students who are getting higher grades with less wasted effort.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/onboarding">
                            <Button size="lg">Analyze My Semester</Button>
                        </Link>
                        <Button variant="secondary" size="lg">See Demo Strategy</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
