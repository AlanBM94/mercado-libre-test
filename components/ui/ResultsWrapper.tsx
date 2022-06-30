import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { Right } from "../index";
import { Layout } from "../layout";
import { ResultsWrapperProps } from "../../interfaces";

export const ResultsWrapper: FC<ResultsWrapperProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <Layout title={title} description={description}>
      <div className="results">
        <div className="results__top">
          <ul>
            <li>
              <p>Electrónica, Audio y Vídeo</p>
              <Right />
            </li>
            <li>
              <p>iPod</p>
              <Right />
            </li>
            <li>
              <p>Reproductores</p>
              <Right />
            </li>
            <li>
              <p>iPod touch</p>
              <Right />
            </li>
            <li>
              <p>32 GB</p>
            </li>
          </ul>
        </div>
        <div className="results__content">{children}</div>
      </div>
    </Layout>
  );
};
