import React, { useState, useEffect } from 'react'
import '../App.css'

function Heading() {
  const [Data, setData] = useState([])
  const getCovidData = async () => {
    try {
      const res = await fetch('https://data.covid19india.org/data.json')
      const actualData = await res.json();
      console.log(actualData.statewise);
      setData(actualData.statewise);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
     getCovidData();
  }, []);

  return (
    <>
      <h2 className='head'>COVID-19 CORONAVIRUS TRACKER</h2>
      <div className='table_responsive'>
        <table className='table table-hover'>
          <thead className='thead-dark'>
            <tr>
              <th>State</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Death</th>
              <th>Active</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {
              Data.map((CurrntData, inde) => {
                return (
                  <tr key={inde}>
                    <td>{CurrntData.state}</td>
                    <td>{CurrntData.confirmed}</td>
                    <td>{CurrntData.recovered}</td>
                    <td>{CurrntData.deaths}</td>
                    <td>{CurrntData.active}</td>
                    <td>{CurrntData.lastupdatedtime}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>



    </>
  );
}

export default Heading