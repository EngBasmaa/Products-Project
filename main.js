const buy = document.querySelectorAll(".js_buy ");
const container = document.getElementById("container");
const big = document.getElementById("big_container");
const dele = document.getElementById("dele");

// console.log(buy)

// for (only) the original buttons: (buy) inside the (original document) before any action

// buy.forEach((item) => {
//   item.addEventListener("click", (eo) => {
//     eo.preventDefault();
//     big.classList.add("active");
//     dele.style.display = "none";
//   });
// });

// البديل ليها عملته تحت عشان يتطبق على الاضافى كمان

// لما اعمل (ضغطة) فى هذه (المنطقة)
product_container.addEventListener("click", (eo) => {
  console.log("done");
});

// for all buttons: (finish)

// const finish = document.querySelectorAll(".js_finish");

// finish.forEach((item) => {
//   item.addEventListener("click", (eo) => {
//     dele.style.display = "block";
//     container.style.display = "none";

//     setTimeout(() => {
//       dele.style.display = "none";
//       big.classList.remove("active");
//     }, 2000);
//   });
// });

// note : 
// i can use (finish) alone because there is oly one

const finish = document.querySelector(".js_finish");

finish.addEventListener("click", (eo) => {
    dele.style.display = "block";
    container.style.display = "none";

    setTimeout(() => {
      dele.style.display = "none";
      big.classList.remove("active");
    }, 2000);
  });
// .......................................

const mode = document.getElementById("mode");
const body = document.getElementById("body");
const header = document.getElementById("body");
const footer = document.getElementById("body");
const main = document.getElementById("main");
const h1 = document.querySelectorAll("h1");
const section = document.querySelectorAll(".section");

mode.addEventListener("click", (eo) => {
  body.classList.toggle("dark");
  main.classList.toggle("dark");
  header.classList.toggle("dark");
  footer.classList.toggle("dark");
});

// ...... lets add a new product by user ......

const addproduct = document.querySelector("#addproduct");
// (defined previously)
// const product_container = document.getElementById("product_container");

addproduct.style.margin = "10px";
product_container.style.border = "5px solid blue";
product_container.style.padding = "10px";

// addproduct.addEventListener("click", (eo) => {
//   const para = '<p class="b" >new product</p>';  // use ' or `
//   product_container.innerHTML=para  // to add (html element code)
// });

addproduct.addEventListener("click", (eo) => {
  // using (`...`)
  const para = `   

    <div id="pr" class="card mycard">
    <img style="border-radius: 10px;" src="pexels-cottonbro-3826678.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">New Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a id="buy" href="#"  class="js_buy btn btn-primary">buy</a>
    </div> 
</div>

    `;
  product_container.innerHTML += para; // += to add to the current
});

// when i press on somewhere that has the given class
product_container.addEventListener("click", (eo) => {
  if (eo.target.className == "js_buy btn btn-primary") {  // use className or classList
    eo.preventDefault();
    big.classList.add("active");
    dele.style.display = "none";
  }
});
