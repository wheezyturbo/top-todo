export default function header() {
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const links = ["home", "completed", "ongoing"];
  links.forEach((ele) => {
    const link = document.createElement("a");
    link.textContent = ele;
    nav.appendChild(link);
  });
  header.appendChild(nav);
  return header;
}
