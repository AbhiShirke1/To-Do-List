import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';

function App() {
    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    }

    const listOfItems = () => {

    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add an item" onChange={itemEvent} />
                    <button onClick={listOfItems}> + </button>

                    <ol>
                        {/* <li>{inputList}</li> */}
                        {/* Items.map( (itemval) =>{
              return 
            }) */}

                    </ol>
                </div>
            </div>
        </>
    );
}

export default App;
