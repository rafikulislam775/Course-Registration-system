import Card from "./Card";

const Cards = () => {
  return (
    <div className="flex justify-evenly">
      <div className="flex-initial w-3/4">
        <Card></Card>
      </div>
      <div className="flex-initial w-1/4">
        <h2>Credit Hour Remaining 7 hr</h2>
      </div>
    </div>
  );
};

export default Cards;
