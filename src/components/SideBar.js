import React from 'react';
import images from "../assets";

// Css File
import './SideBar.css';

export default function SideBar () {
  return (
    <nav>
      <div style={{textAlign: 'center'}}>
        <button className="button">Generate Invoice</button>
      </div>
      <div>
        <p>Main</p>
        <ul>
          <li>
            <img src={images['overview.svg']} alt="Overview Icon" />
            Overview
          </li>
        </ul>
      </div>
      <div>
        <p>Payments</p>
        <ul>
          <li>
            <img src={images['allpayments.svg']} alt="Overview Icon" />
            All Payments
          </li>
          <li>
            <img src={images['reconciled.svg']} alt="Overview Icon" />
            Reconciled Payments
          </li>
          <li>
            <img src={images['unreconciled.svg']} alt="Overview Icon" />
            Un-reconciled Payments
          </li>
          <li>
            <img src={images['manual.svg']} alt="Overview Icon" />
            Manual Settlement
          </li>
        </ul>
      </div>
      <div>
        <p>Orders</p>
        <ul>
          <li>
            <img src={images['orders.svg']} alt="Overview Icon" />
            All Orders
          </li>
          <li>
            <img src={images['pending.svg']} alt="Overview Icon" />
            Pending Orders
          </li>
          <li>
            <img src={images['recorders.svg']} alt="Overview Icon" />
            Reconciled Orders
          </li>
        </ul>
      </div>
      <div>
        <ul>
        <li>
            <img src={images['profile.svg']} alt="Overview Icon" />
            Merchant Profile
          </li>
        </ul>
      </div>
    </nav>
  );
}