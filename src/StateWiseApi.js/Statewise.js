import React, { useState, useEffect } from "react";
import "./Statewise.css";

const Statewise = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://api.covid19.org/data.json");
    const actualData = await res.json();
    console.log(actualData.statewise);
    setData(actualData.statewise);
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center">
            <span className="font-weight-bold"> India </span> Covid19 Data
          </h1>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {data.map((curElem, ind) => {
                return (
                  <tr key={ind}>
                    <td>{curElem.State}</td>
                    <td>{curElem.Confirmed}</td>
                    <td>{curElem.Recovered}</td>
                    <td>{curElem.Deaths}</td>
                    <td>{curElem.Active}</td>
                    <td>{curElem.Updated}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Statewise;
