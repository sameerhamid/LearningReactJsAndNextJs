import { useEffect, useState } from "react";

let globalState = {};
let listners = [];
let actions = {};

const useStore = () => {
  const setState = useState(globalState)[1];

  useEffect(() => {
    listners.push(setState);

    return () => {
      listners = listners.filter((l) => l !== setState);
    };
  }, [setState]);
};
