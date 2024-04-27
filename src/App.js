import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';



function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fethcData() {
      try {
        let res = await axios.get('https://dummyjson.com/products')
        setData(res.data.products)
        console.log(res.data.products)
      } catch (err) {
        console.log(err.message)
      }


    }

    fethcData()
  }, [])



  return (
    <div className="App">
      {
        data.map((dataObj, index) => {
          return (

            <div key={index} className='cards'  >
              <img className='imgs' src={dataObj.images[0]}></img>
              <p>  Title :-  {dataObj.title}</p>
              <p> Brand :- {dataObj.brand}</p>
              <p> Price :-{dataObj.price}</p>
              <p> Category :- {dataObj.category}</p>
              <p> Stock :-  {dataObj.stock}</p>
              <p> Description :-  {dataObj.description}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
