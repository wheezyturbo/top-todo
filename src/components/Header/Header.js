import app from "../../core/app";
import render from "../../core/render/render";

export default function header() {
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header");

  const todayTab = document.createElement("button");
  todayTab.textContent = "Today";
  todayTab.addEventListener("click", () => {
    // Handle logic for "Today" tab click
  });

  const thisWeekTab = document.createElement("button");
  thisWeekTab.textContent = "This Week";
  thisWeekTab.addEventListener("click", () => {
    // Handle logic for "This Week" tab click
  });

  const allTodosTab = document.createElement("button");
  allTodosTab.textContent = "All Todos";
  allTodosTab.addEventListener("click", () => {
    // Handle logic for "All Todos" tab click
    app.currentPage="home";
    allTodosTab.classList.add('active');
    render();
  });

  headerContainer.appendChild(todayTab);
  headerContainer.appendChild(thisWeekTab);
  headerContainer.appendChild(allTodosTab);

  // Append the header to a container in your HTML (assuming 'app' is a container)
  return headerContainer;
}
