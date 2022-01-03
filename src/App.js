import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';

function App() {
  const [UserFormData,setUserFormData]=useState([])
  let getUserData=(userData)=>{
    const UserFormDataCopy=[...UserFormData]
    UserFormDataCopy.push(userData)
    setUserFormData(UserFormDataCopy)
  }
  return (
    <div className="App">
      <UserForm getUserData={getUserData}/>
      <UserTable UserFormData={UserFormData}/>
    </div>
  );
}

export default App;
