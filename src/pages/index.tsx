import { type NextPage } from "next";

import { Header } from "../components/Header";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const data = trpc.example.getAll.useQuery();

  return (
    <>
      <>
        <Header />
      </>
    </>
  );
};

export default Home;
