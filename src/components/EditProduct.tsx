import { FormEvent, useState } from "react";
import { trpc } from "../utils/trpc";
import swal from "sweetalert";
import { useRouter } from "next/router";
export const EditProduct = ({ id }: any) => {
  const router = useRouter();
  const product = trpc.example.getOne.useQuery({ id: parseInt(id) });
  if (!product.data) return <></>;
  const { descripcion, img, inventario, precio, slug }: any = product?.data;
  const [priceProduct, setPriceProduct] = useState<number>(precio);
  const [urlProduct, setUrlProduct] = useState<string>(img);
  const [descripcionProduct, setdescripcionProduct] =
    useState<string>(descripcion);
  const [inventarioProduct, setInventarioProduct] =
    useState<number>(inventario);
  const mutation = trpc.example.edit.useMutation();

  const createProduct = () => {
    const edit = mutation.mutate({
      id: parseInt(id),
      descripcion: descripcionProduct,
      img: urlProduct,
      inventario: inventarioProduct,
      price: priceProduct,
    });

    swal({
      title: "added!",
      text: "successfully added",
      icon: "success",
    });
    router.push(`/products/product?id=${id}`);
  };

  const sumit = (e: FormEvent<HTMLFormElement>): any => {
    e.preventDefault();

    if (
      descripcionProduct.trim() === "" ||
      priceProduct <= 0 ||
      urlProduct.trim() === "" ||
      inventarioProduct <= 0
    )
      return swal({
        title: "Error!",
        text: "complete all fields!",
        icon: "error",
      });
    createProduct();
  };

  return (
    <div
      style={{ backgroundColor: "#f4f4f0" }}
      className="sm:mx-32 lg:mx-32 xl:mx-72 "
    >
      <div className=" container mx-auto flex justify-between ">
        <div className="w-full">
          <div className="mt-4 px-4">
            <h2 className="font-thinner flex px-5 pt-10 text-4xl">
              Edit Product
            </h2>

            <form className="mx-5 my-5" onSubmit={(e) => sumit(e)}>
              <label className="relative mt-5 block rounded border-2 border-black p-3">
                <span className="text-md font-semibold text-zinc-900">
                  Description
                </span>
                <input
                  className="w-full bg-transparent p-0 text-sm  text-gray-500 focus:outline-none"
                  id="name"
                  type="text"
                  placeholder="Name of Product"
                  onChange={(e) => {
                    setdescripcionProduct(e.target.value);
                  }}
                  value={descripcionProduct}
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
                  onChange={(e) => {
                    setPriceProduct(parseInt(e.target.value));
                  }}
                  value={priceProduct}
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
                  onChange={(e) => {
                    setUrlProduct(e.target.value);
                  }}
                  value={urlProduct}
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
                  onChange={(e) => {
                    setInventarioProduct(parseInt(e.target.value));
                  }}
                  value={inventarioProduct}
                />
              </label>

              <button className="mt-5 translate-y-2 rounded-lg border-2 border-b-4 border-l-4 border-black px-5 py-2 font-black">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
