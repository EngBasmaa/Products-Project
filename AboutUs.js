const container = document.getElementById("container");
const maiin = document.getElementById("maiin");
const title = document.getElementById("title");

console.log(container);

container.style.border = "5px solid blue";
container.style.padding = "10px";
maiin.style.padding = "5px";

container.addEventListener("click", (eo) => {
  switch (eo.target.className) {  // best for speed

    case "btn btn-primary":
      title.innerText = "primary";
      title.style.marginTop="150px";
      break;
    case "btn btn-secondary":
      title.innerText = "secondary";
      title.style.marginTop="150px";
      break;
    case "btn btn-success":
      title.innerText = "success";
      title.style.marginTop="150px";
      break;
    case "btn btn-danger":
      title.innerText = "danger";
      title.style.marginTop="150px";
      break;
    case "btn btn-warning":
      title.innerText = "warning";
      title.style.marginTop="150px";
      break;
    case "btn btn-info":
      title.innerText = "info";
      title.style.marginTop="150px";
      break;
    case "btn btn-light":
      title.innerText = "light";
      title.style.marginTop="150px";
      break;
    case "btn btn-dark":
      title.innerText = "dark";
      title.style.marginTop="150px";
      break;

    default:
    title.innerText = "error";
    title.style.marginTop="150px";
    break;
  }
});
