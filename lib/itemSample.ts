import type { ItemProps } from "@components/Item";
import { useEffect, useState } from "react";

export function sampleCreator(): ItemProps[] {
  return new Array(18).fill(1).map((_, i) => {
    return {
      rank: i + "",
      title: "dummyTitle" + i,
      author: "dummyAuthor" + i,
      star: (i % 5) + "",
      commentCnt: i + "",
      url: "dummyURL" + i,
    };
  });
}

export default function useItem() {
  const [item, setItem] = useState<ItemProps[]>();

  useEffect(() => {
    setItem(sampleCreator());
  }, []);
  return item;
}
