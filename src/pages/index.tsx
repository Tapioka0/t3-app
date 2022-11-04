import { type NextPage } from "next";
import Link from "next/link";
import { Header } from "../components/Header";
import { Cart } from "../components/Cart";
import { trpc } from "../utils/trpc";
import { Products } from "../components/Products";
import { useState } from "react";
const Home: NextPage = () => {
  const data = trpc.example.getAll.useQuery();
  const [Product, setProduct] = useState<Array<any>>([]);

  return (
    <>
      {/* Header */}
      <>
        <Header display={true} />
      </>

      {/* Cart */}
      <>
        <section className="bg-white dark:bg-gray-900 ">
          <div className="container mx-auto flex h-full flex-col justify-center px-6 py-8">
            <div className="mx-auto w-full max-w-2xl rounded-sm border border-gray-200 bg-white shadow-lg">
              <header className="border-b border-gray-100 px-5 py-4"></header>

              <div className="overflow-x-auto p-3">
                <table className="w-full table-auto">
                  <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
                    <tr>
                      <th></th>
                      <th className="p-2">
                        <div className="text-left font-semibold">
                          Product Name
                        </div>
                      </th>

                      <th className="p-2">
                        <div className="text-left font-semibold">Total</div>
                      </th>
                      <th className="p-2">
                        <div className="text-center font-semibold">Action</div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100 text-sm">
                    <Cart Product={Product} setProduct={setProduct} />
                  </tbody>
                </table>
              </div>

              <div className="flex justify-end space-x-4 border-t border-gray-100 px-5 py-4 text-2xl font-bold">
                <button className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                  Buy
                </button>
              </div>

              <div className="flex justify-end">
                <input
                  type="hidden"
                  className="border border-black bg-gray-50"
                  x-model="selected"
                />
              </div>
            </div>
          </div>
        </section>
      </>

      {/* Products */}
      <>
        <section className="bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6 py-8">
            <div className="lg:-mx-2 lg:flex">
              <div className="mt-6 lg:mt-0 lg:w-4/5 lg:px-2 ">
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {data.data?.map(
                    ({ slug, id, descripcion, inventario, precio, img }) => (
                      <Products
                        slug={slug}
                        id={id}
                        descripcion={descripcion}
                        inventario={inventario}
                        precio={precio}
                        img={img}
                        setProduct={setProduct}
                        Product={Product}
                        key={id}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Home;
