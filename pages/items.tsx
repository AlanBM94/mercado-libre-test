import { GetServerSideProps } from "next";
import { FC } from "react";
import { createAxiosInstance } from "../api/index";
import { ResultsWrapper } from "../components";
import { useGetItems } from "../hooks";
import { ResultProps } from "../interfaces";

const Results: FC<ResultProps> = ({ products, error }) => {
  const { setContent, title, description } = useGetItems(products, error);

  return (
    <ResultsWrapper title={title} description={description}>
      <>{setContent()}</>
    </ResultsWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const axiosInstance = createAxiosInstance();
  let error = null;
  let products = null;

  try {
    const { data } = await axiosInstance.get(
      `/items?q=${context.query.search}`
    );
    if (data.status === 200) {
      products = data.data.items;
    }
  } catch (error) {
    error = "Error al obtener productos";
  }

  return {
    props: {
      products,
      error,
    },
  };
};

export default Results;
