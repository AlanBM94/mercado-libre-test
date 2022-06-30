import Image from "next/image";
import React, { FC } from "react";
import { useRouter } from "next/router";
import { ItemResponse } from "../../interfaces";

export const Product: FC<ItemResponse> = ({
  title,
  price,
  picture,
  id,
  free_shipping,
}) => {
  const router = useRouter();

  const onClickHandler = () => {
    router.push({
      pathname: `/items/${id}`,
    });
  };

  return (
    <div className="productResult" onClick={onClickHandler}>
      <div className="productResult__container">
        <div className="productResult__container__image">
          <img src={picture} className="productResult__container__image__img" />
        </div>
        <div className="productResult__container__content">
          <div className="productResult__container__content__title">
            <h3>{`$${price.amount}`}</h3>
            {free_shipping && (
              <Image src="/img/ic_shipping@2x.png.png" width={22} height={22} />
            )}
            <p>Capital Federal</p>
          </div>
          <div className="productResult__container__content__description">
            <p>{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
