import React, { FC, FormEvent, ChangeEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export const SearchBar: FC = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!query) return;
    router.push({
      pathname: "/items",
      query: { search: query.trim() },
    });
    setQuery("");
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className="searchBar">
      <div className="searchBar__logo">
        <Link href="/">
          <a className="searchBar__link">
            <Image
              src="/img/Logo_ML@2x.png.png"
              width={50}
              height={30}
              alt="logo"
            />
          </a>
        </Link>
      </div>
      <div className="searchBar__form">
        <form action="#" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nunca dejes de buscar"
            value={query}
            name="query"
            onChange={handleOnChange}
          />
          <button>
            <Image
              src="/img/ic_Search.png"
              width={20}
              height={20}
              alt="search"
            />
          </button>
        </form>
      </div>
    </div>
  );
};
