import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";

const HomePage = () => {
  const [incomedata, setIncomeData] = useState([]);
  let [incomeTotal, setIncomeTotal] = useState(0);

  const [expensedata, setExpenseData] = useState([]);
  let [expenseTotal, setExpenseTotal] = useState(0);

  const currentBalance = incomeTotal - expenseTotal;

  useEffect(() => {
    const storedIncomeData = JSON.parse(localStorage.getItem("income"));
    if (storedIncomeData) {
      storeData(storedIncomeData);
    }

    const storedExpenseData = JSON.parse(localStorage.getItem("expense"));
    if (storedExpenseData) {
      storeExpenseData(storedExpenseData);
    }
  }, []);

  const storeData = (storedIncomeData) => {
    setIncomeData(storedIncomeData);
    setIncomeTotal(
      storedIncomeData.reduce((prev, next) => prev + Number(next.amount), 0)
    );
  };

  const storeExpenseData = (storedExpenseData) => {
    setExpenseData(storedExpenseData);
    setExpenseTotal(
      storedExpenseData.reduce((prev, next) => prev + Number(next.amount), 0)
    );
  };

  return (
    <Layout>
      <div className="container mx-auto h-[100vh] flex items-center justify-center  align-middle">
        <div className="card w-[500px] p-4 bg-gradient-to-r from-indigo-200 shadow-xl">
          <figure>
            <img
              className="w-[100px h-[100px]"
              src="https://play-lh.googleusercontent.com/1iukd3WQv6HTWfLQeWiXlqgYaCG89LVy7jLI7lB1LWv0gdV42WMKLRhMPY1OR-2egI8"
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-lg font-bold">
              Current Balance : 💸 {currentBalance}{" "}
            </h2>
            <div className="flex justify-between mt-3">
              <p className="font-bold">⭕ Income Total : 💸 {incomeTotal}</p>
              <p className="font-bold">⭕ Expense Total : 💸 {expenseTotal}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
