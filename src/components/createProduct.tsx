import { useRouter } from "next/router";

export const CreateProduct = () => {
  const router = useRouter();
  return (
    <div
      style={{ backgroundColor: "#f4f4f0" }}
      className="sm:mx-32 lg:mx-32 xl:mx-72 "
    >
      <div className=" container mx-auto flex justify-between ">
        <div className="w-full">
          <div className="mt-4 px-4">
            <h2 className="font-thinner flex px-5 pt-10 text-4xl">
              Create Product
            </h2>

            <form className="mx-5 my-5">
              <label className="relative block rounded border-2 border-black p-3">
                <span className="text-md font-semibold text-zinc-900">
                  Name
                </span>
                <input
                  className="w-full bg-transparent p-0 text-sm  text-gray-500 focus:outline-none"
                  id="name"
                  type="text"
                  placeholder="Name of Product"
                />
              </label>

              <label className="relative mt-5 block rounded border-2 border-black p-3">
                <span className="text-md font-semibold text-zinc-900">
                  Price
                </span>

                <input
                  className="w-full   border-none bg-transparent p-0 text-sm text-gray-500 focus:outline-none"
                  id="price"
                  type="text"
                  placeholder="Product Price"
                />
              </label>

              <label className="relative mt-5 block rounded  border-2 border-black p-3">
                <span className="text-md font-semibold  text-zinc-900">
                  Url of image
                </span>

                <input
                  className="w-full bg-transparent  p-0 text-sm text-gray-500 read-only:bg-zinc-800 focus:outline-none"
                  id="img"
                  type="text"
                  placeholder="https://......"
                />
              </label>

              <label className="relative mt-5 block rounded border-2 border-black p-3">
                <span className="text-md font-semibold  text-zinc-900">
                  Inventario
                </span>

                <input
                  className="w-full bg-transparent  p-0 text-sm text-gray-500 read-only:bg-zinc-800 focus:outline-none"
                  id="inventario"
                  type="text"
                  placeholder="0"
                />
              </label>

              <button className="mt-5 translate-y-2 rounded-lg border-2 border-b-4 border-l-4 border-black px-5 py-2 font-black">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
