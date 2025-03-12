import React, { useState } from 'react';
import './Update.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Update = () => {
  return (
    <>
    <Header/>
      <div className="schedule-container">
        <h1>Doctor Java Technologies</h1>
        {/* <h2>Schedules for Saturday 07/12/2024</h2> */}
        
        {/* Table for displaying the schedule */}
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10.30 AM to 11.30 AM</td>
              <td>Shweta Core Java</td>
            </tr>
            <tr>
              <td>12.00 PM to 1.00 PM</td>
              <td>Project Review</td>
            </tr>
            <tr>
              <td>01:00 PM to 02:00 PM</td>
              <td>Lunch Break</td>
            </tr>
            <tr>
              <td>02:00 PM to 05:00 PM</td>
              <td>Shivraj (Spring)</td>
            </tr>
            <tr>
              <td>05:00 PM to 6:00 PM</td>
              <td>Project Review</td>
            </tr>
            <tr>
              <td>06:00 PM to 08:00 PM</td>
              <td>Spring Project</td>
            </tr>
          </tbody>
        </table>

        <p><strong>Note:</strong> Schedule cannot be changed once fixed.</p>
      </div>
      <Footer/>
    </>
  );
};

export default Update;
