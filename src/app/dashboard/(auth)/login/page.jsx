"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Login = () => {
  const router = useRouter();
  const session = useSession();
  const [isSessionLoaded, setIsSessionLoaded] = useState(false);

  useEffect(() => {
    if (session.status === "authenticated") {
      router?.push("/dashboard");
    } else {
      setIsSessionLoaded(true);
    }
  }, [session.status, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", { email, password });
  };

  if (!isSessionLoaded) {
    return <p>Loading .......</p>;
  }
  return (
    <div>
      <h1>Log in </h1>
      <h2>Please log in to see the dashboard.</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" required />

        <input type="password" placeholder="Password" required />

        <button>login</button>
      </form>
      <button onClick={() => signIn("google")}>google signIn</button>
    </div>
  );
};

export default Login;
