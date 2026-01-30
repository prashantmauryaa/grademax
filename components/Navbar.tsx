"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navItems = [
        { name: 'Features', href: '#features' },
        { name: 'How it Works', href: '#how-it-works' },
    ];

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.brand}>
                    <div className={styles.logoIcon}>
                        <Image src="/icon.png" alt="Logo" width={24} height={24} style={{ borderRadius: '6px' }} />
                    </div>
                    <span className={styles.brandName}>
                        GradeMax <span className={styles.highlight}>AI</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className={styles.navLinks}>
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.href} className={styles.navLink}>
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className={styles.actions}>
                    {/* Desktop Login */}
                    <Link href="/login" className={styles.loginLink}>
                        Login
                    </Link>
                    <div className={styles.desktopOnly}>
                        <Button variant="primary" size="sm">
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Hamburger */}
                    <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menu">
                        <span className={`${styles.bar} ${isOpen ? styles.barOpen : ''}`} />
                        <span className={`${styles.bar} ${isOpen ? styles.barOpen : ''}`} />
                        <span className={`${styles.bar} ${isOpen ? styles.barOpen : ''}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={styles.mobileLink}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/login"
                            className={styles.mobileLink}
                            onClick={() => setIsOpen(false)}
                            style={{ color: 'var(--primary)' }}
                        >
                            Login
                        </Link>
                        <Button className="w-full mt-2" onClick={() => setIsOpen(false)}>
                            Get Started
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
