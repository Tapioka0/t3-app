import { type NextPage } from "next";
import { useRouter } from "next/router";
import { EditProduct } from "../components/EditProduct";
import { Header } from "../components/Header";

const Edit: NextPage = () => {
  const router = useRouter();
  const { id }: any = router.query;

  return (
    <div className="h-screen w-full bg-white dark:bg-gray-900">
      {/* Header */}
      <>
        <Header display={false} />
      </>
      {/* Create */}

      <div className="px-6 py-8">
        <EditProduct id={id} />
      </div>
    </div>
  );
};

export default Edit;
