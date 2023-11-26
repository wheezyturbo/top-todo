import AddTodoButton from "../../components/AddTodoButton/AddTodoButton";
import header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import sidebar from "../../components/SideBar/SideBar";

export default function render(){
    const body = document.body;
    body.innerHTML = "";
    body.appendChild(header());
    body.appendChild(sidebar());
    body.appendChild(Main());
    body.appendChild(AddTodoButton());
}