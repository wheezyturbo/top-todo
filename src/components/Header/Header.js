import app from "../../core/app";
import render from "../../core/render/render";
import intervalToDuration from "date-fns/intervalToDuration";

export default function header() {
  
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header");

  const todayTab = document.createElement("button");
  todayTab.textContent = "Today";
  todayTab.addEventListener("click", () => {
    app.currentPage = "today";
    todayTab.style.color="#00a2ff"
    render();
  });

  const thisWeekTab = document.createElement("button");
  thisWeekTab.textContent = "This Week";
  
  thisWeekTab.addEventListener("click", () => {
    thisWeekTab.style.color="#00a2ff"
    app.currentPage = "this_week";
    render();
  });

  const allTodosTab = document.createElement("button");
  allTodosTab.textContent = "All Todos";
  
  allTodosTab.addEventListener("click", () => {
    allTodosTab.style.color="#00a2ff"
    app.currentPage = "home";
    allTodosTab.classList.add("active");
    render();
  });

  headerContainer.appendChild(todayTab);
  headerContainer.appendChild(thisWeekTab);
  headerContainer.appendChild(allTodosTab);
  switch(app.currentPage){
    case "today": todayTab.classList.add('active');
    break;
    case "this_week":thisWeekTab.classList.add('active');
    break;
    case "home": allTodosTab.classList.add('active');
    break;
    default: break;
  }

  return headerContainer;
}
