import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Error, NoContent, Product } from "../components";
import { capitalizeWord } from "../helpers";
import { ItemResponse, useGetItemsReturnValue } from "../interfaces";

export const useGetItems = (
  products: ItemResponse[],
  error: string
): useGetItemsReturnValue => {
  const { query } = useRouter();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const firstRequest = useRef(false);

  const setContent = () => {
    if (error || !products) {
      return <Error text="Error al obtener los productos." />;
    }

    if (products.length === 0 && firstRequest.current) {
      return (
        <NoContent text="No hay publicaciones que coincidan con tu búsqueda." />
      );
    }

    if (products.length > 0) {
      return products.map((product: ItemResponse) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            picture={product.picture}
            price={product.price}
            free_shipping={product.free_shipping}
          />
        );
      });
    }
  };

  useEffect(() => {
    if (!query.search) return;
    firstRequest.current = true;
    setTitle(capitalizeWord(query.search.toString()));
    setDescription(
      `Envíos Gratis en el día ✓ Compre ${capitalizeWord(
        query.search as string
      )} en cuotas sin interés! Conozca nuestras increíbles ofertas y promociones en millones de productos.`
    );
  }, [query]);

  return {
    title,
    description,
    setContent,
  };
};
