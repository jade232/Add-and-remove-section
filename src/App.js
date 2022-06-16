import Add_Section from './Add_Section/Add_Section';
import './App.css';
import Drag_Drop from './Drag&Drop/Drag_Drop';

function App() {

  const onFileChange = (files) => {
    let rev = files[0];
    // let firstValue = rev[0];
    console.log(rev);
  }

  return (
    <div className="App">
      <h2>Add Section</h2>
      {/* <Drag_Drop
        onFileChange={(files) => onFileChange(files)}
      ></Drag_Drop> */}
      <Add_Section />
    </div>
  );
}

export default App;
