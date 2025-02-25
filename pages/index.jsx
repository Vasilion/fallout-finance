import { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/assets");
  }, [router]);

  return null; // No UI needed since we’re redirecting
};

export default Home;
