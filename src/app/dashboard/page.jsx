"use client";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import DashboardCard from "@/components/cards/DashboardCard";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>loading .......</p>;
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;
    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div>
        <div>
          <h1>add post</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="title" required />
            <input type="text" placeholder="desc" required />
            <input type="text" placeholder="img" required />
            <input type="text" placeholder="content" required />
            <button>Register</button>
          </form>
        </div>

        {isLoading
          ? "isloading"
          : data?.map((item) => (
              <DashboardCard
                key={item._id}
                id={item._id}
                title={item.title}
                img={item.img}
                content={item.content}
                del={() => handleDelete(item._id)}
              ></DashboardCard>
            ))}
      </div>
    );
  }
};

export default Dashboard;
