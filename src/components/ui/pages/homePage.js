import header from "../utils/header";
import sidebar from "../utils/sidebar";

export default function render(){
    const main = document.createElement('div');
    main.classList.add('grid-container');
    main.appendChild(header());
    main.appendChild(sidebar());

    document.body.appendChild(main);
}

