import { useEffect, useState } from "react";
import { Element } from "../interfaces/interfaces";

export const useFetch = () => {
  const [data, setData] = useState<Array<Element>>();
  const [query, setQuery] = useState("");
  const empty = [
    {
      title: "You're Wrong...",
    },
  ];

  const handleChange = (e: any): void => {
    setQuery(e.target.value);
  };

  const getData = async (q: string) => {
    try {
      let response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${q}`
      );
      let json = await response.json();
      if (response.status === 200) {
        setData(json.results);
      } else {
        setData(empty);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    query.length === 0 && setData(undefined);
    query !== "" && getData(query);
  }, [query]);

  return { handleChange, data };
};
