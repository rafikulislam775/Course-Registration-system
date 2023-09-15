import PropTypes from "prop-types";
import { useState } from "react";
const Card = ({ allData }) => {
  const [newData, setNewData] = useState([]);
  const [hours, setHours] = useState(0);
  let remaining = 20;
  const handleSelect = (data) => {
    const isExist = newData.find((item) => item.id === data.id);
    let hour = data.credit;
    if (isExist) {
      return alert("You already enrolled this course.");
    } else {
      newData.forEach((item) => {
        hour += item.credit;
      });

      if (hour > 20) {
        return alert(" your credit hour is not enough");
      } else {
        setHours(hour);
        setNewData([...newData, data]);
      }

      // console.log(hour);
    }
  };
  console.log(hours);

  console.log(newData);
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

      <div className="card w-1/4 p-10 bg-base-100 px-10 ">
        <h2 className=" text-sky-600 font-bold">
          Credit Hour Remaining {remaining - hours} hr
        </h2>
        <hr className="h-px my-2 bg-gray-100 border-0 dark:bg-gray-400"></hr>
        <h1 className=" font-bold ">Course Name</h1>
        <ol className="list-decimal px-5 ">
          {newData.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ol>
        <hr className="h-px my-2 bg-gray-100 border-0 dark:bg-gray-400"></hr>
        <h3 className="font-semibold">Total Credit Hour : {hours}</h3>
        <hr className="h-px my-2 bg-gray-100 border-0 dark:bg-gray-400"></hr>
        <h3 className="font-semibold">Total Price : 48000 USD</h3>
      </div>
    </div>
  );
};

Card.propTypes = {
  allData: PropTypes.array,
  handleSelect: PropTypes.func,
};
export default Card;
