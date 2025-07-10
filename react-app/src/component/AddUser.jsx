import React, { useState } from 'react'
import './Adduser.css';
import axios from 'axios';
import { Navigate } from 'react-router-dom';





const AddUser = () => {

  let [name, setname] = useState("");
  let [salary, setsalary] = useState("");
  let [company, setcompany] = useState("");

  let namehandler = (e) => {
    setname(e.target.value);
  }

  let salaryHandler = (e) => {
    setsalary(e.target.value);
  }

  let CompanyHandler = (e) => {
    setcompany(e.target.value);
  }

  let btnHandler = (e) => {
    e.preventDefault();

    let payload = { name, salary, company };
    axios.post('http://localhost:3000/content', payload)
      .then(() => {
        console.log("data added");
      })
      .catch((err) => {
        console.log("err: " + err);
      })
      
  }

  return (
    <div className='contact-contaner'>
      <h2 className='contant-class'>Add User</h2>
      <label className="login-label">Enter your Name </label>
      <input type="text" placeholder='Enter A Name Here ' onChange={namehandler} />

      <label className='-labellogin'>Enter a Company Salary </label>
      <input type="number" placeholder='Enter a Salary' onChange={salaryHandler} />



      <label className='-label-login'>Enter a Company Name </label>
      <input type="text" placeholder='Enter a Company Name ' onChange={CompanyHandler} />

      <button className='btn-sumbit' onClick={btnHandler}>Sumbit</button>



    </div>
  )
}

export default AddUser
