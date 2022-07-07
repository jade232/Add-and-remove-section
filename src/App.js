import Add_Section from './Add_Section/Add_Section';
import './App.css';
import Drag_Drop from './Drag&Drop/Drag_Drop';
// import MachineID from "./Machine_ID/MachineID"
import React, { useEffect, useId } from "react"
import DeviceUUID from "device-uuid"

function App() {

  const onFileChange = (files) => {
    let rev = files[0];
    // let firstValue = rev[0];
    console.log(rev);
  }

  // const FullName = Math.random(useId());
  const FullName = useId();
  const mail = useId()

  // let uuid = new DeviceUUID().get();
  // console.log(uuid, "................./ID")

  console.log(FullName, "...............ID")
  console.log(mail, "...............ID")

  return (
    <div className="App">
      <h2 id={mail}>Add Section</h2>
      {/* <Drag_Drop
        onFileChange={(files) => onFileChange(files)}
      ></Drag_Drop> */}
      <Add_Section />
      {/* <MachineID /> */}
      <h4 id={FullName}>Name : Jebaraj</h4>
      <h4 id={mail}>Email: jeba@gmail.com</h4>
    </div>
  );
}

export default App;
