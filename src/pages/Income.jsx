import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";

const Income = () => {
  let income = JSON.parse(localStorage.getItem("income")) || [];
  const [FormObj, setFormObj] = useState({
    amount: "",
    discription: "",
  });

  let [showtotal, setTotal] = useState(0);
  console.log(showtotal);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("income"));
    if (storedData) {
      storeData(storedData);
    }
  }, [FormObj]);

  const [data, setData] = useState([]);
  console.log(data);

  const storeData = (data) => {
    setData(data);
    setTotal(data.reduce((prev, next) => prev + Number(next.amount), 0));
  };

  const inputOnChange = (property, value) => {
    setFormObj((preObj) => ({
      ...preObj,
      [property]: value,
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (!FormObj.amount) return;
    income.push({
      ...FormObj,
      id: Date.now(),
    });
    localStorage.setItem("income", JSON.stringify(income));
    setFormObj({
      amount: "",
      discription: "",
    });
  };

  // remove item
  const removeItem = (id) => {
    income = income.filter((item) => item.id !== id);
    localStorage.setItem("income", JSON.stringify(income));
    alert("delete success");
  };

  return (
    <Layout>
      <div className="container mx-auto h-[100vh] flex items-center justify-center  align-middle">
        <div className="card w-[700px] p-4 bg-gradient-to-r from-purple-200 shadow-xl">
          <h2 className="text-center text-lg">Enter Income Here</h2>
          <form onSubmit={formSubmit}>
            <label className="label">
              <span className="label-text text-lg">Amount</span>
            </label>
            <input
              value={FormObj.amount}
              onChange={(e) => {
                inputOnChange("amount", e.target.value);
              }}
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full  block"
            />
            <textarea
              value={FormObj.discription}
              onChange={(e) => {
                inputOnChange("discription", e.target.value);
              }}
              className="textarea w-full textarea-success block mt-4"
              placeholder="Discription"
            ></textarea>

            <button className="btn btn-outline btn-accent mt-5">
              Add Income
            </button>
          </form>

          <div className="overflow-x-auto mt-4">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Discription</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{item.amount}</td>
                      <td>{item.discription}</td>
                      <td>
                        <button
                          className="btn btn-xs btn-circle btn-outline"
                          onClick={() => {
                            removeItem(item.id);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Income;
