import AddTodoButton from "../../components/AddTodoButton/AddTodoButton";
import header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import sidebar from "../../components/SideBar/SideBar";
import app from "../app";

export default function render() {
  const body = document.body;
  body.innerHTML = "";
  body.appendChild(header());
  body.appendChild(sidebar());
  body.appendChild(Main());
//   if ((app.currentPage != "this_week")||(app.currentPage!="home")||(app.currentPage!="today")) {
//     body.appendChild(AddTodoButton());
//   }
}
