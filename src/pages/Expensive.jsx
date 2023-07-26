import { useState } from "react";
import Layout from "../layout/Layout";

const Expensive = () => {
  const expensiveData = localStorage.getItem("expensive");
  const expensiveRes = JSON.parse(expensiveData);

  const formSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("expensive", JSON.stringify(expensive));
  };

  const [expensive, setexpensive] = useState({
    amount: "",
    discription: "",
  });
  const inputOnChange = (property, value) => {
    setexpensive((preObj) => ({
      ...preObj,
      [property]: value,
    }));
  };
  return (
    <Layout>
      <div className="container mx-auto h-[100vh] flex items-center justify-center  align-middle">
        <div className="card w-[700px] p-4 bg-gradient-to-r from-green-100 shadow-xl">
          <h2 className="text-center text-lg">Enter Expense Here</h2>
          <form onSubmit={formSubmit}>
            <label className="label">
              <span className="label-text text-lg">Amount</span>
            </label>
            <input
              onChange={(e) => inputOnChange("amount", e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full max-w-xs block"
            />
            <textarea
              onChange={(e) => inputOnChange("discription", e.target.value)}
              className="textarea textarea-success block mt-4"
              placeholder="Discription"
            ></textarea>

            <button className="btn btn-outline btn-accent mt-5">
              Add Income
            </button>
          </form>

          <div className="overflow-x-auto mt-2">
            <h2 className="text-lg">Total Amount</h2>
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Discription</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>{expensiveRes.discription}</td>
                  <td>
                    {expensiveRes.amount} <br />{" "}
                    <span>Total: {expensiveRes.amount}</span>
                  </td>
                  <td>Blue</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Expensive;
