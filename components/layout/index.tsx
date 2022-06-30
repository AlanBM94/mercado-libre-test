import { FC } from "react";
import { SearchBar } from "../";

import Head from "next/head";

interface Props {
  title?: string;
  description?: string;
  children: JSX.Element | JSX.Element[];
}

export const Layout: FC<Props> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{`${
          title ? `${title} | Mercado Libre` : "Mercado Libre"
        }`}</title>
        <meta name="author" content="Alan Beltrán" />
        <link rel="icon" href="/img/Logo_ML.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <meta
          name="description"
          content={
            description
              ? description
              : "Compre productos con Envío Gratis en el día en Mercado Libre México. Encuentre miles de marcas y productos a precios increíbles."
          }
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"true"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <div className="container">
          <div className="container__top" />
          <div className="container__grid">
            <SearchBar />
            {children}
          </div>
        </div>
      </main>
    </>
  );
};
