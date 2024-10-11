import { Metadata } from "next";

interface Param {
  productId: string;
}

// synchronous
// export function generateMetadata({ params }: { params: Param }): Metadata {
//   return {
//     title: `iphone ${params.productId}`,
//     description: `this is description of iphone ${params.productId}`,
//   };
// }

// asynchronous
export const generateMetadata = async ({
  params,
}: {
  params: Param;
}): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(params.productId);
    }, 100);
  });

  return {
    title: `iphone ${title}`,
  };
};

export default function ProductItem({ params }: { params: Param }) {
  return <div>this is product {params.productId}</div>;
}
