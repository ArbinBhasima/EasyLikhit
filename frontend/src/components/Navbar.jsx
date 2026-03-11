    "use client";

    import Link from "next/link";

    export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/">
            <h1 className="text-xl font-bold cursor-pointer">EasyLikhit</h1>
            </Link>

            <div className="flex gap-6">
            <Link href="/">Home</Link>

            <Link href="/mocktest">Mock Test</Link>

            <Link href="/questionbank">Question Bank</Link>

            <Link href="/traffic-signs">Traffic Signs</Link>

            <Link href="/vision-test">Vision Test</Link>

            <div className="relative group">
                <button className="cursor-pointer">Resources ▾</button>

                <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black rounded shadow-md w-44">
                <Link
                    href="/resources/about-us"
                    className="block px-4 py-2 hover:bg-gray-200"
                >
                    About Us
                </Link>

                <Link
                    href="/resources/traffic-rules"
                    className="block px-4 py-2 hover:bg-gray-200"
                >
                    Traffic Rules
                </Link>

                <Link
                    href="/resources/blog"
                    className="block px-4 py-2 hover:bg-gray-200"
                >
                    Blog
                </Link>
                </div>
            </div>
            <Link href="/contact">Contact</Link>
            </div>
            <div className="flex gap-4">
            <>
                <Link href="/login">Login</Link>
                <Link href="/signup">Signup</Link>
            </>
            </div>
        </div>
        </nav>
    );
    }
