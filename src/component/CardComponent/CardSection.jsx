import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const CardSection = () => {
const {UiData} = useSelector((state)=>state.Ui)
console.log()

  return (
    <div className="d-flex flex-column align-items-center justify-content-between">
      <div className="d-flex w-100 flex-column align-items-center justify-content-between">
        <p className="fs-2 text-center">Classes</p>
        <p className="p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          aspernatur ab,
        </p>
      </div>
      <div className="row w-100 row-cols-1 row-cols-lg-4 row-cols-sm-2 row-cols-md-3 gap-3 d-flex align-items-center justify-content-center">
         {
            UiData.map((data)=> <Card key={data.ID} data={data}/>)
         }
        </div>
      </div>
  );
};

export default CardSection;
