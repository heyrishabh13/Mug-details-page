import React from "react";
import cupImage from "./assets/cup-image.png";

function App() {
  return (
    <div className="flex justify-center items-center bg-[#f4f5f7] h-screen ">
      <div className="flex gap-4 w-3/5  bg-white ">
        <img className="w-1/2" src={cupImage} alt="cup image" />
        <div className="pt-4 flex flex-col gap-4 pr-6">
          <h3 className="text-3xl text-[#596671]">Black Printed Coffee Mug</h3>
          <h4 className="text-2xl text-[#596671] font-bold">$15.00</h4>
          <p className="text-[#5d6974]">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.
          </p>
          <div className="flex gap-1">
            <input
              className="w-12 border-2 border-[#f4f5f7] px-3 py-0.5"
              value="1"
              type="number"
            />
            <button className="bg-[#ff5152] text-white px-6 py-1 rounded md">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
