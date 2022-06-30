import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { Button, Error, NoContent } from "../components";
import { capitalizeWord } from "../helpers/index";
import { ProductDetails, useGetItemsReturnValue } from "../interfaces";

export const useGetProductDetail = (
  productDetail: ProductDetails,
  error: string
): useGetItemsReturnValue => {
  const { query } = useRouter();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const firstRequest = useRef(false);

  const setContent = () => {
    if (error) {
      return <Error text="Error al obtener los productos." />;
    }
    if (!productDetail && firstRequest.current) {
      return <NoContent text="No se encontró un producto con ese id" />;
    }

    if (productDetail) {
      return (
        <div className="productDetail">
          <div className="productDetail__left">
            <div className="productDetail__left__image">
              <img
                src={productDetail?.picture}
                className="productDetail__left__image__img"
              />
            </div>
            <div className="productDetail__left__info">
              <h3>Descripción del producto</h3>
              <p>{productDetail?.description}</p>
            </div>
          </div>
          <div className="productDetail__right">
            <p className="productDetail__right__soldProducts">
              {setCondition(productDetail?.condition as string)} -{" "}
              {productDetail?.sold_quantity} vendidos
            </p>
            <h3 className="productDetail__right__productName">
              {productDetail?.title}
            </h3>
            <p className="productDetail__right__price">
              $ {productDetail?.price}
            </p>
            <Button
              text="Comprar"
              customStyles={{
                width: "100%",
              }}
            />
          </div>
        </div>
      );
    }
  };

  const setCondition = (condition: string) => {
    if (condition === "new") return "Nuevo";
    return "Usado";
  };

  useEffect(() => {
    if (!productDetail) return;
    setTitle(capitalizeWord(productDetail?.title as string));
    setDescription(
      `Envíos gratis en el día ✓ Compra en meses sin intereses y recibe tu ☞ ${productDetail.description} ❤`
    );
  }, [productDetail]);

  useEffect(() => {
    if (!query.id) return;
    firstRequest.current = true;
  }, [query]);

  return {
    title,
    description,
    setContent,
  };
};
