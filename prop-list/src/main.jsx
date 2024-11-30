import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import App1 from "./App1.jsx";

let students = [
  {
    name: "Arjun",
    age: 22,
    marks: 78,
  },
  {
    name: "Aparna",
    age: 24,
    marks: 89,
  },
  {
    name: "Sarthak",
    age: 26,
    marks: 69,
  },
];

let employees = [
  {
    name: "Onya",
    fatherName: "Mr.Deepak",
    age: 22,
    salary: 50000,
    mobNo: 7839251211,
  },
  {
    name: "Arun",
    fatherName: "Mr.Shivin",
    age: 26,
    salary: 40000,
    mobNo: 8745632345,
  },
  {
    name: "Punit",
    fatherName: "Mr.Avinash",
    age: 34,
    salary: 240000,
    mobNo: 6849932789,
  },
  {
    name: "Pari",
    fatherName: "Mr.Arpit",
    age: 28,
    salary: 39000,
    mobNo: 7543923908,
  },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App1 students={students} />
    <hr /><hr />
    <App employees={employees} />
  </StrictMode>
);
