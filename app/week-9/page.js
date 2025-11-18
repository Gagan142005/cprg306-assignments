
"use client";

import Link from "next/link";
import { useState } from "react";
import { useUserAuth } from "../../contexts/AuthContext";

export default function Week9Landing() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      await gitHubSignIn();
      
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <main style={{ padding: 24 }}>
      {!user ? (
        <>
          <h1>Shopping List App — Login</h1>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button onClick={handleLogin} disabled={loading}>
            {loading ? "Signing in..." : "Sign in with GitHub"}
          </button>
        </>
      ) : (
        <>
          <h1>Welcome, {user.displayName}</h1>
          <p>({user.email})</p>
          <button onClick={handleLogout}>Logout</button>
          <div style={{ marginTop: 16 }}>
            <Link href="/week-9/shopping-list">Go to Shopping List</Link>
          </div>
        </>
      )}
    </main>
  );
}
