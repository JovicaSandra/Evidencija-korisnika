import React from "react";
import "./Account.css";
import { Link } from "react-router-dom";

const Account = ({account,edit,deleteAccount,index}) => {
  const actionButtons = edit ? (
    <><Link to={"/edit/"+account.id} className="btn btn-warning">Izmeni</Link>
    <button  onClick={ () => { deleteAccount(account.id) }} className="btn btn-danger">Obriši</button><hr />

    </>
  ) : null;

  return(
    <div className="row">
           <h6 className="col-1">{index+1}/{index+1}</h6>
           <h6 className="col-1">{account.date}</h6>
           <h6 className="col-2">{account.name}</h6>
           <h6 className="col-2">{account.address}</h6>
           <h6 className="col-1">{account.tel}</h6>
           <h6 className="col-2">{account.service}</h6>
           <h6 className="col-1">{account.money}</h6>
           <h6 className="col-2">{account.note}</h6>   <hr />
           {actionButtons}

             </div>
  )
}
export default Account;
