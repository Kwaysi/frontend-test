import React from "react";
import { AreaChart } from "react-chartkick";
import Select from "react-select";
import moment from "moment";
import "chart.js";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import images from "./assets";

// Main app compnent

export default function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <div className="app-main">
        <section className="container full">
          <div className="info-card white-bg quart">
            <div>
              <p>Daily transaction Volume</p>
              <h2>2,345</h2>
            </div>
            <img src={images["smallchart.svg"]} alt="Small chart" />
          </div>

          <div className="info-card white-bg quart">
            <div>
              <p>Daily transaction Value</p>
              <h2>₦234,500</h2>
            </div>
            <img src={images["smallchart.svg"]} alt="Small chart" />
          </div>

          <div className="info-card white-bg quart">
            <div>
              <p>Total transaction Volume</p>
              <h2>23,450</h2>
            </div>
            <img src={images["smallchart.svg"]} alt="Small chart" />
          </div>

          <div className="info-card white-bg quart">
            <div>
              <p>Total transaction Value</p>
              <h2>₦2,345,000</h2>
            </div>
            <img src={images["smallchart.svg"]} alt="Small chart" />
          </div>
        </section>
        <section className="container full">
          <div className="threethirds white-bg">
            <div className="container full">
              <h2>Today: {moment().format("D, MMM YYYY")}</h2>
              <Select
                className="third"
                options={[
                  { label: "01 Jan - 10 Jan", value: "01 Jan - 10 Jan" }
                ]}
                styles={{
                  control: styles => ({
                    ...styles,
                    border: "1px solid #ededed",
                    borderRadius: "5px",
                    maxWidth: "600px",
                    margin: "auto auto",
                    fontSize: "16px",
                    color: "#828282"
                  })
                }}
              />
            </div>
            <AreaChart
              data={{
                "2020-01-01": 2000,
                "2020-01-02": 2350,
                "2020-01-03": 3000,
                "2020-01-04": 2450,
                "2020-01-05": 1500,
                "2020-01-06": 4008,
                "2020-01-07": 6780,
                "2020-01-08": 580,
                "2020-01-09": 2990,
                "2020-01-10": 9000
              }}
              colors={["rgba(2, 148, 255, .45)"]}
              curve={false}
            />
          </div>
          <div className="quart">
            <div className="full white-bg">
              <h3>Orders</h3>
              <div className="progress-bar">
                <div style={{ width: "80%" }}></div>
              </div>
              <p>
                Pending Orders: <span className="text-warning">20</span>
              </p>
              <p>
                Reconciled Orders: <span className="text-success">80</span>
              </p>
              <p>
                Total Orders: <span className="text-primary">100</span>
              </p>
            </div>
            <div className="full white-bg">
              <h3>Payments</h3>
              <div className="progress-bar">
                <div style={{ width: "80%" }}></div>
              </div>
              <p>
                Unreconciled payments: <span className="text-warning">20</span>
              </p>
              <p>
                Reconciled payments: <span className="text-success">80</span>
              </p>
              <p>
                Total payments: <span className="text-primary">100</span>
              </p>
            </div>
          </div>
        </section>
        <section className="container">
          <h1>Payments</h1>
        </section>
        <section className="container">
          <div className="third">
            <div className="show">
              Showing
              <Select
                options={[
                  { label: "20", value: "20" },
                  { label: "50", value: "50" }
                ]}
                styles={{
                  control: styles => ({
                    ...styles,
                    background: "none",
                    border: "none",
                    margin: "auto auto",
                    fontSize: "16px",
                    color: "#1860EC"
                  })
                }}
                defaultInputValue="20"
                defaultValue="20"
              />
              of {tableData.length} records
            </div>
          </div>
          <div className="third">
            <img src={images["search.svg"]} alt="Search Icon" />
            <input className="search" placeholder="Search payments" />
          </div>
          <div className="third show">
            <span>Show: </span>
            <Select
              className="threethirds"
              options={[
                { label: "All", value: "All" },
                { label: "Reconciled", value: "Reconciled" },
                { label: "Un-reconciled", value: "Un-reconciled" }
              ]}
              styles={{
                control: styles => ({
                  ...styles,
                  border: "1px solid #ededed",
                  borderRadius: "5px",
                  maxWidth: "600px",
                  margin: "auto auto",
                  fontSize: "16px",
                  color: "#828282"
                })
              }}
              defaultInputValue="All"
              defaultValue="All"
            />
          </div>
        </section>
        <section className="container">
          <table className="full white-bg">
            <thead>
              <tr>
                <th>Item type</th>
                <th>Price</th>
                <th>Transaction No.</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((elem, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={images["vw.svg"]} alt="item icon" />
                      {elem.item}
                    </td>
                    <td>{elem.price}</td>
                    <td>{elem.id}</td>
                    <td>{elem.time}</td>
                    <td>
                      <button className={`${elem.status}-btn`}>
                        <span> </span>
                        {elem.status}
                      </button>
                      <img src={images["arrow.svg"]} alt="item icon" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="/">
              Previous
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="/">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="/">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="/">
              Next
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

// Data to be rendered in table
// Declared here due to the unavailabilty of an api
const tableData = [
  {
    item: "Iphone 1",
    price: 50000,
    id: 1000002,
    time: "12:30",
    status: "reconciled"
  },
  {
    item: "Iphone 2",
    price: 60000,
    id: 1000002,
    time: "12:30",
    status: "unreconciled"
  },
  {
    item: "Iphone 3",
    price: 70000,
    id: 1000002,
    time: "12:30",
    status: "reconciled"
  },
  {
    item: "Iphone 4",
    price: 80000,
    id: 1000002,
    time: "12:30",
    status: "pending"
  },
  {
    item: "Iphone 5",
    price: 90000,
    id: 1000002,
    time: "12:30",
    status: "unreconciled"
  },
  {
    item: "Iphone 1",
    price: 50000,
    id: 1000002,
    time: "12:30",
    status: "reconciled"
  },
  {
    item: "Iphone 2",
    price: 60000,
    id: 1000002,
    time: "12:30",
    status: "unreconciled"
  },
  {
    item: "Iphone 3",
    price: 70000,
    id: 1000002,
    time: "12:30",
    status: "reconciled"
  },
  {
    item: "Iphone 4",
    price: 80000,
    id: 1000002,
    time: "12:30",
    status: "pending"
  },
  {
    item: "Iphone 5",
    price: 90000,
    id: 1000002,
    time: "12:30",
    status: "unreconciled"
  }
];
