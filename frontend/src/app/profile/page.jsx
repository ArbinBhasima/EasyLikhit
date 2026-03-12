    "use client";

    import { useRouter } from "next/navigation";
    import { useEffect } from "react";

    export default function ProfilePage() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("access");

        if (!token) {
        router.push("/login");
        }
    }, [router]);

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6">
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="mt-4 text-gray-600">
            Welcome to your EasyLikhit profile.
        </p>
        </div>
    );
    }