    "use client";
    import { useState } from "react";

    export default function SignupPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        const res = await fetch("http://127.0.0.1:8000/api/signup/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        });
        const data = await res.json();
        if (res.ok) setMessage("User created! You can now login.");
        else setMessage(data.error || "Signup failed");
    };

    return (
        <div className="max-w-md mx-auto mt-20 p-4 border rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Signup</h1>
        {message && <p>{message}</p>}
        <form onSubmit={handleSignup} className="flex flex-col gap-3">
            <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded"
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded"
            />
            <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Signup
            </button>
        </form>
        </div>
    );
    }
