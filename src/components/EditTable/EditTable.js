import React from "react";
import Account from "../Account/Account"

const EditTable = ({accounts,deleteAccount}) => {
  const allaccounts = accounts.map((account,index)=>{
    return(
    <Account account={account} edit={true} deleteAccount={deleteAccount} key={account.id} />
    )
  })

    return(
      <div className="container-fluid">
      <h4 className="m-2">Izmeni / Izbriši</h4>
       <div className="col-12"><hr />
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
                   </div>
               </div>
   </div>
  )

}
export default EditTable;
