import PropTypes from "prop-types";
import { useState } from "react";
const Card = ({ allData }) => {
  const [title, setTitle] = useState([]);
  const handleSelect = (data) => {
    setTitle([...title, data]);

    console.log(data);
  };
  console.log(title);
  return (
    <div className=" container m-auto flex gap-4  mt-10">
      <div className="w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allData.map((data, index) => (
            <div key={index} className="card  bg-white shadow-lg  ">
              <figure className="px-10 pt-10 h-36  ">
                <img
                  src={data.img}
                  alt=""
                  className="rounded-xl object-fill "
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p className="text-sm">{data.details}</p>
                <div className="flex">
                  <p> $ Price : {data.price}</p>
                  <p>Credit : {data.credit} hr</p>
                </div>

                <div className="card-actions ">
                  <button
                    onClick={() => handleSelect(data)}
                    className="btn w-full  bg-sky-600 text-white"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card w-1/4 p-10 bg-base-100 ">
        <h2 className=" text-sky-600 font-bold">Credit Hour Remaining 7 hr</h2>
        <hr className="h-px my-2 bg-gray-100 border-0 dark:bg-gray-400"></hr>
        <ol className="list-decimal p-10">
          {title.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

Card.propTypes = {
  allData: PropTypes.object,
  handleSelect: PropTypes.func,
};
export default Card;
