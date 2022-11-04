import { type NextPage } from "next";
import Link from "next/link";
import { CreateProduct } from "../components/createProduct";
import { Header } from "../components/Header";

const ManageProduct: NextPage = () => {
  return (
    <div className="h-screen w-full bg-white dark:bg-gray-900">
      {/* Header */}
      <>
        <Header display={false} />
      </>
      {/* Create */}

      <div className="px-6 py-8">
        <CreateProduct />
      </div>
    </div>
  );
};

export default ManageProduct;
