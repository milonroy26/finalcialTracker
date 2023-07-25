import React from "react";
import Layout from "../layout/Layout";

const HomePage = () => {
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
            <h2 className="text-lg">Current Balance</h2>
            <p className="font-bold">৳ 654</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
