import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'

const UserContext=createContext();

function App() {
  const [data,setData]=useState({name:"sumit",lname:"singh"});

  return (
    <>
    <UserContext.Provider value={data}>
     <ChildA/>
     </UserContext.Provider>
    </>
  )
}

export {UserContext}
export default App