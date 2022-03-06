import './style.css';
import hornIcon from './assets/icons/horn (1).png';
import tavernIcon from './assets/icons/house.png';
import netflixIcon from './assets/icons/netflix.png';
import instagramIcon from './assets/icons/instagram.png';
import youtubeIcon from './assets/icons/youtube.png';
import createHome from './home';
import createContact from './contact.js'


function createHeader() {
    console.log("hola");
    const header = document.createElement('header');
    const header_div = document.createElement('div');
    header_div.classList.add("header-div");
    const header_div_icons = document.createElement('div');
    header_div_icons.classList.add("header-icons");
    
    const hornIc = new Image();
    hornIc.src = hornIcon;

    const tavernIc = new Image();
    tavernIc.src = tavernIcon;

    header_div_icons.appendChild(hornIc);
    header_div_icons.appendChild(tavernIc);
    header_div.appendChild(header_div_icons);
    header.appendChild(header_div);

    const header_div2 = document.createElement("div");
    header_div2.classList.add("header-div");
    header_div2.classList.add("header-nav");

    const bttn_home = document.createElement("button");
    bttn_home.innerText = "Home";
    bttn_home.classList.add("nav-btn-option");
    bttn_home.setAttribute("id", "home")
    bttn_home.addEventListener("click", (e) => {
      if (e.target.classList.contains("active_bttn")) return;
      bttn_home.classList.add("active_bttn");
      bttn_contact.classList.remove("active_bttn");
      createHome();
    })
    const bttn_menu = document.createElement("button");
    bttn_menu.innerText ="Menu";
    bttn_menu.classList.add("nav-btn-option")
    bttn_menu.setAttribute("id", "menu")
    const bttn_contact = document.createElement("button");
    bttn_contact.innerText = "Contact";
    bttn_contact.classList.add("nav-btn-option");
    bttn_contact.setAttribute("id", "contact");
    bttn_contact.addEventListener("click", (e) => {
      if (e.target.classList.contains("active_bttn")) return;
      bttn_contact.classList.add("active_bttn");
      bttn_home.classList.remove("active_bttn");
      createContact();
    })
    header_div2.appendChild(bttn_home);
    header_div2.appendChild(bttn_menu);
    header_div2.appendChild(bttn_contact);
    header.appendChild(header_div2);


    const header_div3 = document.createElement("div");
    header_div3.classList.add("header-div");
    header_div3.classList.add("resto-name");
    const spanGold = document.createElement("span");
    spanGold.classList.add("golden");
    spanGold.innerText = "'s";
    header_div3.innerHTML = "Odin" + spanGold.outerHTML + "&nbsp;INN"
    header.appendChild(header_div3);
    return header;
}

function createFooter() {
  const footer = document.createElement("footer");

  const div_network = document.createElement("div");
  div_network.classList.add("footer-div", "footer-network");
  const follow_us = document.createElement("p");
  follow_us.innerHTML = "Follow us."

  div_network.appendChild(follow_us);

  const div_network_icon = document.createElement("div");
  div_network_icon.classList.add("footer-icons");
  
  /* Iconos redes sociales */
  const netflixIc = new Image
  netflixIc.src = netflixIcon;
  const instaIc = new Image
  instaIc.src = instagramIcon;
  const youtubeIc = new Image
  youtubeIc.src = youtubeIcon;

   /* Links redes sociales */
  const netflixLink = document.createElement("a");
  netflixLink.href = "https://www.netflix.com/es/title/70301870"
  netflixLink.appendChild(netflixIc);
  const instaLink = document.createElement("a");
  instaLink.href = "https://www.instagram.com/historyvikings/"
  instaLink.appendChild(instaIc);
  const youtubeLink = document.createElement("a");
  youtubeLink.href = "https://www.youtube.com/watch?v=MLJyFzdQfK8"
  youtubeLink.appendChild(youtubeIc);

  div_network_icon.appendChild(netflixLink);
  div_network_icon.appendChild(instaLink);
  div_network_icon.appendChild(youtubeLink);

  div_network.appendChild(div_network_icon);
  footer.appendChild(div_network);


  /* Main footer */

  const div_footer_main = document.createElement("div");
  div_footer_main.classList.add("footer-div", "footer-main");

  footer.appendChild(div_footer_main);


  /* Ubicación footer */

  const div_ubicacion_main = document.createElement("div");
  div_ubicacion_main.classList.add("footer-div","footer-ubicacion");

  const div_ubicacion_mapDiv = document.createElement("div");
  div_ubicacion_mapDiv.classList.add("mapDiv");

  const p_adress_footer = document.createElement("p");
  p_adress_footer.innerText = "Norway - Brattvåghallen";

  const iframe_footer = document.createElement("iframe");
  iframe_footer.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1836.434499000145!2d6.435674546126612!3d62.59480821191866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4616cc11ac28981b%3A0xdb24d40557a00562!2sBrattv%C3%A5ghallen!5e0!3m2!1ses!2sar!4v1645987104391!5m2!1ses!2sar"
  iframe_footer.style.border = "0";
  iframe_footer.style.height = "15vh";
  iframe_footer.style.width = "13vw";
  iframe_footer.style.borderRadius  = "4px";

  div_ubicacion_mapDiv.appendChild(p_adress_footer);
  div_ubicacion_mapDiv.appendChild(iframe_footer);
  div_ubicacion_main.appendChild(div_ubicacion_mapDiv);
  footer.appendChild(div_ubicacion_main);
  return footer;
}

function createMain() {
  const main = document.createElement("main");
  document.body.appendChild(main);
}
  export default createFooter;

  document.body.appendChild(createHeader());
  createMain();
  createHome();
