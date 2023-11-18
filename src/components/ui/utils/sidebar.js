export default function sidebar(){
    const sidebar = document.createElement('aside');
    const addBtn = document.createElement('button');
    addBtn.textContent = "Add +";

    sidebar.appendChild(addBtn);
    return sidebar;
}