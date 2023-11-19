import header from "../utils/header";
import sidebar from "../utils/sidebar";
import Main from "../utils/main";

export default function render(){
    if(document.querySelector('.grid-container'))document.body.innerHTML="";
    const main = document.createElement('div');
    main.classList.add('grid-container');
    main.appendChild(sidebar());
    const div = document.createElement('div');
    div.classList.add('div-container');
    div.appendChild(header());
    div.appendChild(Main());

    main.appendChild(div);

    document.body.appendChild(main);
}

