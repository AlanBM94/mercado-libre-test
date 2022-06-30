import React, { FC } from "react";
import { createAxiosInstance } from "../../api/index";
import { GetServerSideProps } from "next";
import { ResultsWrapper } from "../../components";
import { useGetProductDetail } from "../../hooks";
import { ProductDetailProps } from "../../interfaces";

const ProductDetail: FC<ProductDetailProps> = ({ productDetail, error }) => {
  const { setContent, title, description } = useGetProductDetail(
    productDetail,
    error
  );

  return (
    <ResultsWrapper title={title} description={description}>
      <>{setContent()}</>
    </ResultsWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const axiosInstance = createAxiosInstance();
  let error = null;
  let productDetail = null;

  try {
    const { data } = await axiosInstance.get(`/items/${context.query.id}`);
    if (data.status === 200) {
      productDetail = data.data;
    }
  } catch (error) {
    error = "Error al obtener productos";
  }

  return {
    props: {
      productDetail,
      error,
    },
  };
};

export default ProductDetail;
