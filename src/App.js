import React, { Component } from 'react';
import './App.css';
import Customer from "./components/customer";


const customers = [
  {
    id: "1",
    image: "https://placeimg.com/64/64/1",
    name: "프레드",
    age: "29",
    gender: "man",
  },
  {
    id: "2",
    image: "https://placeimg.com/64/64/2",
    name: "마린다",
    age: "26",
    gender: "female",
  },
  {
    id: "3",
    image: "https://placeimg.com/64/64/3",
    name: "제시",
    age: "33",
    gender: "female",
  },
];


class App extends Component {
  render() {
  return (
    <div>
      {customers.map((c) => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            age={c.age}
            gender={c.gender}
          />
        );
      })}
    </div>
  );
  }
  
}

export default App;
