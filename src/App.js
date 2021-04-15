import { React, useState } from "react";
import QuoteCard from './components/QuoteCard';
import axios from 'axios';



function App() {

  const getSimpson = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setSimpson(data[0]);
      });
  };
  const [simpson, setSimpson] = useState();
  return (
    <div>
      <QuoteCard {...simpson} />
      <button type="button" onClick={getSimpson}>Get New Quote</button>
    </div>
  );

}

export default App;

