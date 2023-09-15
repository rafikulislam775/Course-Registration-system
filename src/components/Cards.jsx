import Card from "./Card";
import { useEffect, useState } from "react";
const Cards = () => {
  const [allData, setAllData] = useState([]);

  // const [remaining, setRemaining] = useState(0);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((allData) => setAllData(allData));
  }, []);

  return <Card allData={allData}></Card>;
};

export default Cards;
