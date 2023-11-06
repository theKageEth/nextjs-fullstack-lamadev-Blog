"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const [err, setErr] = useState(false);
  const route = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      res.status === 201 &&
        route.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div>
      <h1>Create an Account</h1>
      <h2>Please sign up to see the dashboard.</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Username" required />
        <input type="text" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button>Register</button>
      </form>
      {err && "something is wrong"}
      <span>- OR -</span>
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  );
};

export default Register;
