export default function Footer() {
    return (
        <footer className="py-12 border-t border-gray-800 bg-[#050505] text-center">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                <div className="mb-6 font-bold text-2xl text-white">
                    GradeMax <span className="text-[var(--primary)]">AI</span>
                </div>

                <div className="flex gap-6 mb-8 text-sm text-gray-400">
                    <a href="#" className="hover:text-white transition-colors">About</a>
                    <a href="#" className="hover:text-white transition-colors">Ethics Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                </div>

                <p className="text-xs text-gray-600 max-w-lg mx-auto leading-relaxed">
                    GradeMax AI is a decision-support platform for academic optimization.
                    It does not guarantee grades and is designed to be used ethically.
                    <br />
                    © {new Date().getFullYear()} GradeMax AI. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
