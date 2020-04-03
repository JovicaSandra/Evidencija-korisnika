import React, { useState, useEffect, useRef } from "react";
import "./AddAccount.css";
import { withRouter } from "react-router-dom";

function AddAccount(props){


const [newAccount, setNewAccount] = useState({  date: "", name:"", address:"", tel:"", service:"", money:"", note:""})

const idInput = useRef();

useEffect(()=>{
  idInput.current.focus();
},[])

  const addNewAccount = () => {
    props.addNewAccountToState(newAccount);
    props.history.push("/");
    }

    return(
      <div className="container">
      <div className="row">
      <div className="col-10 offset-1">
      <hr />
      <h3 className="m-3">Unos korisnika</h3><hr />
      <div className="row">
      <div className="col-10 offset-1">

      <input type="date" ref={idInput} onChange={e => {setNewAccount({...newAccount, date:e.target.value}) }} className="form-control bg-info prva" placeholder="datum" /><br />
      <input type="text" onChange={e => {setNewAccount({...newAccount, name:e.target.value}) }} className="form-control" placeholder="name" /><br />
      <input type="text" onChange={e => {setNewAccount({...newAccount, address:e.target.value}) }} className="form-control" placeholder="address" /><br />
      <input type="text" onChange={e => {setNewAccount({...newAccount, tel:e.target.value}) }} className="form-control" placeholder="tel" /><br />
      <input type="text" onChange={e => {setNewAccount({...newAccount, service:e.target.value}) }} className="form-control" placeholder="service" /><br />
      <input type="text" onChange={e => {setNewAccount({...newAccount, money:e.target.value}) }} className="form-control" placeholder="money" /><br />
      <input type="text" onChange={e => {setNewAccount({...newAccount, note:e.target.value}) }} className="form-control" placeholder="note" /><br />

    <button onClick={addNewAccount} className="btn form-control bg-info" id="button">Sačuvaj</button>
      </div>
      </div>
      </div>
      </div>
      </div>

    )
  }

export default withRouter(AddAccount);
