import React from "react";
import "./AccountsTable.css";
import Account from "../Account/Account";

const AccountsTable = ({accounts}) =>{
const allaccounts = accounts.map((account,index)=>{
  return(
  <Account account={account} index={index} key={account.id} />
  )
})

  return(
    <div className="container-fluid">
     <div className="col-10 offset-1"><hr />
     <div className="row">
                <h5 className="col-1">RBG/RBM</h5>
                <h5 className="col-1">Datum</h5>
                <h5 className="col-2">Korisnik</h5>
                <h5 className="col-2">Adresa</h5>
                <h5 className="col-1">Telefon</h5>
                <h5 className="col-2">Usluga</h5>
                <h5 className="col-1">Naplata</h5>
                <h5 className="col-2">Napomena</h5>
                    </div>
          <hr />
                           <div className="body">{allaccounts}
                 </div><hr />
             </div>
 </div>
)
}

export default AccountsTable;
