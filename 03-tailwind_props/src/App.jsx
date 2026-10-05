import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  const myObj = {
    name: "Arham Neyazi",
    age: "20",
    address: {
      city: "New Delhi",
      state: "Delhi",
      country: "India"
    }
  }

  const newArr = [1, 2, 3, 4, 5]

  const footerLinks = [
    {label: "Order Food", href: "https://instagram.com"},
    {label: "Order Groceries", href: "https://youtube.com"},
    {label: "Become a partner", href: "#"}
  ]

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <Card
        title={myObj.name}
        album="IdatenRanger"
        pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxvG_C9jZzzY9RWciFnjBDj0ZUjoS1Bc3AyMshsOGHg&s=10"
        myArr = {newArr}
      />
      <Card
        title="JSON"
        album="Text data"
        pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIBmBKtwcZQ-cgBx58O1RHlF_109EHgbPa7h4uhPoeTw&s=10"
      />
      <Card />
      <Footer brand="Swiggy" links={footerLinks}/>
    </>
  );
}

export default App;
