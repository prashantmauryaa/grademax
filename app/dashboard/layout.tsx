"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import styles from "@/components/dashboard/Sidebar.module.css"; // Reuse sidebar styles for layout structure if needed

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[var(--background)]">
            <Sidebar />
            <div className={styles.layoutContent}>
                {/* We need to apply the margin-left logic here or in a wrapper */}
                {/* Since Sidebar.module.css handles the sidebar display, we need a way to offset the main content */}
                {/* Let's use a simple inline style or utility class for now that matches the Sidebar width */}
                {/* The Sidebar component uses fixed positioning. We need a padding-left or margin-left on the content on desktop. */}
                <div className="lg:pl-[280px] min-h-screen">
                    {children}
                </div>
            </div>
        </div>
    );
}
