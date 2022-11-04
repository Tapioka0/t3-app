import { type NextPage } from "next";

import { Header } from "../components/Header";
import { Cart } from "../components/Cart";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const data = trpc.example.getAll.useQuery();

  return (
    <>
      {/* Header */}
      <>
        <Header />
      </>

      {/* Cart */}
      <>
        <section className="bg-white dark:bg-gray-900 ">
          <div className="container mx-auto flex h-full flex-col justify-center px-6 py-8">
            <div className="mx-auto w-full max-w-2xl rounded-sm border border-gray-200 bg-white shadow-lg">
              <header className="border-b border-gray-100 px-5 py-4">
                <div className="font-semibold text-gray-800">Manage Carts</div>
              </header>

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
                        <div className="text-left font-semibold">Quantity</div>
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
                    <Cart />
                  </tbody>
                </table>
              </div>

              <div className="flex justify-end space-x-4 border-t border-gray-100 px-5 py-4 text-2xl font-bold">
                <div>Total</div>
                <div className="text-blue-600">
                  USD <span x-text="total.toFixed(2)"></span>
                </div>
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
    </>
  );
};

export default Home;
