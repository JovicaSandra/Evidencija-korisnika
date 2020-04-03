import React, {useState} from "react";
import { withRouter } from "react-router-dom";

function EditAccount(props){

  const [account, setAccount] = useState(props.accounts.filter(acc => acc.id == props.match.params.id)[0])

  const editAccount = () => {
    props.editAccount(account);
    props.history.push("/");
  }

    return(
      <div className="container">
          <div className="row">
              <div className="col-10 offset-1">
                  <div className="row">
                      <div className="col-10 offset-1">
                            <h6 className="m-4 display-3 float-left">Izmeni</h6>
                      <input onChange={e=>{ setAccount({...account,name:e.target.value}) }} type="text" id="name" className="form-control" value={account.name}/><br/>
                      <input onChange={e=>{ setAccount({...account,address:e.target.value}) }} type="text" id="address" className="form-control" value={account.address}/><br/>
                      <input onChange={e=>{ setAccount({...account,tel:e.target.value}) }} type="text" id="tel" className="form-control" value={account.tel}/><br/>
                      <input onChange={e=>{ setAccount({...account,service:e.target.value}) }} type="text" id="service" className="form-control" value={account.service}/><br/>
                      <input onChange={e=>{ setAccount({...account,money:e.target.value}) }} type="text" id="money" className="form-control" value={account.money}/><br/>
                      <input onChange={e=>{ setAccount({...account,note:e.target.value}) }} type="text" id="note" className="form-control" value={account.note}/><br/>
                      <button onClick={editAccount} className="btn btn-info form-control">Sačuvaj</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }

export default withRouter(EditAccount);
