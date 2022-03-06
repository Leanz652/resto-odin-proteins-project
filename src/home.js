import './style.css';
import thorGordo from './assets/img/thorGordo.jpg';
import createFooter from './index';




function createHome () {
  
 
  const main = document.querySelector("main");
  main.innerText = "";
  main.innerHTML = "";
  const body = document.querySelector("body");
  main.classList.add("main_home");

  const main_conteiner = document.createElement("div");
  main_conteiner.classList.add("main_conteiner");

  const main_cont_p = document.createElement("p");
  const main_cont_span = document.createElement("span");
  const lineBreak = document.createElement("br");
  main_cont_span.classList.add("table");
  main_cont_span.innerHTML = lineBreak.outerHTML + "Book a table." 
  main_cont_p.innerHTML = "Come here to survive the winter! Share with the best of us"  + 
  main_cont_span.outerHTML + "<br>";
  const thorGordoJpg = new Image;
  thorGordoJpg.src = thorGordo;

  main_conteiner.appendChild(main_cont_p);
  main_conteiner.appendChild(thorGordoJpg);
  main.appendChild(main_conteiner)

  const bttn_home = document.getElementById("home");
  console.log(bttn_home);
  bttn_home.classList.add("active_bttn");
  
  body.appendChild(main);
  body.appendChild(createFooter());
  
}

export default createHome;