import { useEffect, useState } from "react";
const Card = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions ">
            <button className="btn btn-wide btn-info text-white">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
