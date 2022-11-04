import { useRouter } from "next/router";
import { Header } from "../../components/Header";
import { trpc } from "../../utils/trpc";

const ProductPage = () => {
  const router = useRouter();
  const { id }: any = router.query;
  const mutation = trpc.example.edit.useMutation();
  //if (!id) return;

  const product = trpc.example.getOne.useQuery({ id: parseInt(id) });
  if (!product.data) return;
  const { descripcion, img, inventario, precio, slug }: any = product?.data;

  return (
    <>
      {!id ? (
        <p>Product not found</p>
      ) : (
        <>
          <Header display={false} />
          <div className="min-w-screen relative flex min-h-screen items-center overflow-hidden bg-white p-5  dark:bg-gray-900 lg:p-10">
            <div className="relative mx-auto w-full max-w-6xl rounded bg-white p-10 text-gray-800 shadow-xl md:text-left lg:p-20">
              <div className="-mx-10 items-center md:flex">
                <div className="mb-10 w-full px-10 md:mb-0 md:w-1/2">
                  <div className="relative">
                    <img src={img} className="relative z-10 w-full" alt="" />
                    <div className="absolute top-10 bottom-10 left-10 right-10 z-0 border-4 border-yellow-200"></div>
                  </div>
                </div>
                <div className="w-full px-10 md:w-1/2">
                  <div className="mb-10">
                    <h1 className="mb-5 text-2xl font-bold uppercase">
                      {slug}
                    </h1>
                    <p className="text-sm">{descripcion}</p>
                    <p>----------</p>
                    <p className="text-sm">available: {inventario}</p>
                  </div>
                  <div>
                    <div className="mr-5 inline-block align-bottom">
                      <span className="align-baseline text-2xl leading-none">
                        $
                      </span>
                      <span className="align-baseline text-5xl font-bold leading-none">
                        {precio}
                      </span>
                    </div>
                    <div className="inline-block align-bottom">
                      <button className="rounded-full bg-yellow-300 px-10 py-2 font-semibold text-yellow-900 opacity-75 hover:text-gray-900 hover:opacity-100">
                        <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row-reverse ">
                <button className="rounded-full  px-10 py-2 font-semibold text-yellow-900 opacity-75 hover:text-gray-900 hover:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ff0505"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
                <div className="p-3"></div>
                <button
                  className="rounded-full  px-10 py-2 font-semibold text-yellow-900 opacity-75 hover:text-gray-900 hover:opacity-100"
                  onClick={() => {
                    router.push(`/edit?id=${id}`);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 w-32 flex-initial"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductPage;
