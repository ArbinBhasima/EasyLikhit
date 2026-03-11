    "use client";
    import { useState } from "react";
    import { loginUser } from "@/utils/api";

    export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await loginUser(username, password);
        alert("Login successful!");
        // Redirect to home or dashboard
        } catch (err) {
        setError("Invalid credentials");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-20 p-4 border rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Login
            </button>
        </form>
        </div>
    );
    }