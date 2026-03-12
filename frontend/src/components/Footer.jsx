    "use client";

    import Link from "next/link";

    export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Brand */}
            <div>
            <h2 className="text-xl font-bold mb-3">EasyLikhit</h2>
            <p className="text-gray-400 text-sm">
                Practice for the Nepali driving license exam with mock tests,
                question banks, traffic signs, and vision tests.
            </p>
            </div>

            {/* Quick Links */}
            <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
                <li><Link href="/mocktest">Mock Test</Link></li>
                <li><Link href="/questionbank">Question Bank</Link></li>
                <li><Link href="/traffic-signs">Traffic Signs</Link></li>
                <li><Link href="/vision-test">Vision Test</Link></li>
            </ul>
            </div>

            {/* Resources */}
            <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-gray-400">
                <li><Link href="/resources/about-us">About Us</Link></li>
                <li><Link href="/resources/traffic-rules">Traffic Rules</Link></li>
                <li><Link href="/resources/blog">Blog</Link></li>
            </ul>
            </div>

            {/* Contact */}
            <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-gray-400">
                <li>Email: info@easylikhit.com</li>
                <li>Phone: +977 9861995164</li>
            </ul>
            </div>

        </div>

        <div className="text-center text-gray-500 text-sm border-t border-gray-700 py-4">
            © {new Date().getFullYear()} EasyLikhit. All rights reserved.
        </div>
        </footer>
    );
    }