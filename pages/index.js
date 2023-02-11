import { useContext } from "react";
import { UserContext } from "@/lib/UserContext";
import Head from "next/head";

export default function Home() {
  const [user] = useContext(UserContext);

  return (
    <>
      <Head>
        <title>Magic.link with Next.js</title>
      </Head>
      <div>{user?.loading && <p>Loading...</p>}</div>
    </>
  );
}
