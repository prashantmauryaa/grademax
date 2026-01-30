"use client";

import Link from 'next/link'; // Import Link from next/link
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';

const NAV_ITEMS = [
    { name: 'Strategy', href: '/dashboard', icon: '📊' },
    { name: 'Timeline', href: '/dashboard/timeline', icon: '📅' },
    { name: 'Attendance', href: '/dashboard/attendance', icon: '⏰' },
    { name: 'Risks', href: '/dashboard/risks', icon: '⚠️' }
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <>
            <aside className={styles.sidebar}>
                <div className={styles.logo}>
                    GradeMax <span>AI</span>
                </div>

                <nav className={styles.nav}>
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`${styles.navItem} ${pathname === item.href ? styles.active : ''}`}
                        >
                            <span className={styles.icon}>{item.icon}</span>
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className={styles.userProfile}>
                    <div className={styles.avatar}>JD</div>
                    <div className={styles.userInfo}>
                        <h4>John Doe</h4>
                        <p>B.Tech CSE • Sem 5</p>
                    </div>
                </div>
            </aside>

            <nav className={styles.mobileNav}>
                {NAV_ITEMS.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`${styles.mobileNavItem} ${pathname === item.href ? styles.active : ''}`}
                    >
                        <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                        <span>{item.name}</span>
                    </Link>
                ))}
            </nav>
        </>
    );
}
