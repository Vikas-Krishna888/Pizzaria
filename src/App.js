import React from "react";
import "./App.css";
import Focaccia from "./pizzas/focaccia.jpg";
import Funghi from "./pizzas/funghi.jpg";
import Margherita from "./pizzas/margherita.jpg";
import Prosciutto from "./pizzas/prosciutto.jpg";
import Salamino from "./pizzas/salamino.jpg";
import Spinaci from "./pizzas/spinaci.jpg";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: Focaccia,
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: Margherita,
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: Spinaci,
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: Funghi,
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: Salamino,
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: Prosciutto,
    soldOut: false,
  },
];

function Header() {
  // const style={color : 'blue', fontSize :'50px', textTransform: "uppercase"}
  const style = {};
  return (
    <header className="header">
      <h1 style={style}> Joey's Pizzaria</h1>
    </header>
  );
}
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {pizzaObj.soldOut ? (
          <span>"SOLD OUT" </span>
        ) : (
          <span>{pizzaObj.price}</span>
        )}
      </div>
    </li>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const n = pizzas.length;
  return (
    <main className="menu">
      <h2> Our Menu</h2>

      {n > 0 ? (
        //React fragment
        <React.Fragment>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from All from
            our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We are still working on our menu, Please come back later.</p>
      )}
      {/* // <ul className="pizzas">
      //   {pizzaData.map((pizza) => (
      //     <Pizza pizzaObj={pizza} key={pizza.name} />
      //   ))}
      // </ul> */}
    </main>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if(!isOpen){
  //   return <p>
  //   Please visit us during {openHour}:00 to {closeHour}:00 during working
  //   days.
  // </p>
  // }
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          Please visit us during {openHour}:00 to {closeHour}:00 during working
          days.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We 're open from {openHour}:00 to {closeHour}:00.Come visit us or order
        online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
