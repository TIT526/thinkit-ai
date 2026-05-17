"use client";

import Link from "next/link";
import { Brain, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      password: (form.elements.namedItem("password") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.error || "Registration failed");
      } else {
        setSuccess(true);
        setTimeout(() => router.push("/login"), 2000);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-[var(--background)]">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-2xl bg-my-blue flex items-center justify-center">
              <Brain size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold">
              ThinkIt<span className="text-my-gold">AI</span>
            </span>
          </Link>
          <p className="text-sm text-[var(--muted)] mt-2">Create your free account</p>
        </div>

        {/* Perks */}
        <div className="flex flex-col gap-1.5 mb-6">
          {[
            "Access to all 6 AI products",
            "Affordable membership plans",
            "No credit card required",
          ].map((perk) => (
            <div key={perk} className="flex items-center gap-2 text-sm text-[var(--muted)]">
              <CheckCircle size={14} className="text-my-green flex-shrink-0" />
              {perk}
            </div>
          ))}
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-7">
          <h1 className="text-lg font-bold mb-6">Create your account</h1>

          {success ? (
            <div className="text-center py-4">
              <CheckCircle size={40} className="text-my-green mx-auto mb-3" />
              <p className="font-semibold text-my-green">Account created!</p>
              <p className="text-sm text-[var(--muted)] mt-1">Redirecting to login...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="px-3 py-2.5 rounded-lg bg-my-red/10 border border-my-red/20 text-sm text-my-red">
                  {error}
                </div>
              )}
              <div>
                <label className="block text-sm font-medium mb-1.5">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Ahmad bin Abdullah"
                  required
                  autoComplete="name"
                  className="w-full px-3 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--background)] text-sm focus:outline-none focus:ring-2 focus:ring-my-blue/30 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                  className="w-full px-3 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--background)] text-sm focus:outline-none focus:ring-2 focus:ring-my-blue/30 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="At least 8 characters"
                  required
                  minLength={8}
                  autoComplete="new-password"
                  className="w-full px-3 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--background)] text-sm focus:outline-none focus:ring-2 focus:ring-my-blue/30 transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-lg bg-my-blue text-white text-sm font-semibold hover:bg-my-blue-light transition-colors mt-2 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {loading && <Loader2 size={15} className="animate-spin" />}
                {loading ? "Creating account..." : "Create Free Account"}
              </button>
            </form>
          )}

          <div className="mt-5 text-center text-sm text-[var(--muted)]">
            Already have an account?{" "}
            <Link href="/login" className="text-my-blue hover:underline font-medium">
              Sign in
            </Link>
          </div>
        </div>

        <p className="text-center text-xs text-[var(--muted)] mt-6">
          <Link href="/" className="hover:text-[var(--foreground)] transition-colors">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
