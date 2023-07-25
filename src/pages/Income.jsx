import React, { useState } from "react";
import Layout from "../layout/Layout";

const Income = () => {
  const [incomeValue, setIncomeValue] = useState("");
  return (
    <Layout>
      <div className="container mx-auto h-[100vh] flex items-center justify-center  align-middle">
        <div className="card w-[500px] p-4 bg-gradient-to-r from-purple-200 shadow-xl">
          <h2 className="text-center text-lg">Enter Income Here</h2>
          <div className="ml-6">
            <label className="label">
              <span className="label-text text-lg">Amount</span>
            </label>
            <input
              onChange={(e) => setIncomeValue(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full max-w-xs"
            />{" "}
            <br /> <br />
            {/* <button className="btn btn-outline btn-accent">Add Income</button> */}
          </div>
          <div className="card-body">
            <h2 className="text-lg">Total Amount</h2>
            <p className="font-bold">৳ {incomeValue}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Income;
