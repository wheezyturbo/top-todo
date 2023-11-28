import app from "../../core/app";
import render from "../../core/render/render";
import intervalToDuration from "date-fns/intervalToDuration";

export default function header() {
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header");

  const todayTab = document.createElement("button");
  todayTab.textContent = "Today";
  todayTab.addEventListener("click", () => {
    todayTab.classList.add("active");
    app.currentPage = "today";
    render();
  });

  const thisWeekTab = document.createElement("button");
  thisWeekTab.textContent = "This Week";
  thisWeekTab.addEventListener("click", () => {
    thisWeekTab.classList.add("active");
    app.currentPage = "this_week";
    render();
  });

  const allTodosTab = document.createElement("button");
  allTodosTab.textContent = "All Todos";
  allTodosTab.addEventListener("click", () => {
    app.currentPage = "home";
    allTodosTab.classList.add("active");
    render();
  });

  headerContainer.appendChild(todayTab);
  headerContainer.appendChild(thisWeekTab);
  headerContainer.appendChild(allTodosTab);

  return headerContainer;
}
