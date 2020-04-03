import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import AccountsTable from "./components/AccountsTable/AccountsTable";
import AddAccount from "./components/AddAccount/AddAccount";
import EditTable from "./components/EditTable/EditTable";
import EditAccount from "./components/EditAccount/EditAccount";
function App () {

const [accounts,setAccounts] = useState([
    {rb:1,rbm:1,date:"01.01.2020.",name:"Marko Markovic",address:"Mihajla Pupina 17",
  tel:+3815555555,service:"Popravka sudo masine",money:1500,note:"Obavestenje", id:1},
  {rb:2,rbm:2,date:"02.01.2020.",name:"Petar Petrovic",address:"Gandijeva 111",
  tel:+3814646464,service:"Servis ves masine",money:2500,note:"Neki tekst", id:2}
])

const addNewAccountToState = (acc) => {
      setAccounts([...accounts,acc])
}
const deleteAccount = (id) => {
  const newCopyAccounts = accounts.filter(account=>
     account.id !== id);
  setAccounts(newCopyAccounts)
}

const editAccount = (acc) => {
  let accountPossition = accounts.map(account => account.id).indexOf(acc.id)
  accounts[accountPossition] = acc;
  setAccounts(accounts)
}

        return (
        <BrowserRouter>
           <Header />
            <Route path="/" exact>
            <AccountsTable accounts={accounts} />
          </Route>
          <Route path="/add" >
            <AddAccount addNewAccountToState={addNewAccountToState}/>
          </Route>
          <Switch>
          <Route path="/edit/:id">
          <EditAccount accounts={accounts} editAccount={editAccount}/>
          </Route>
          <Route path="/edit" >
        <EditTable accounts={accounts} deleteAccount={deleteAccount}/>
          </Route>
          </Switch>
       </BrowserRouter>
  )
}
export default App;
