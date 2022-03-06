import './style.css';
import netflixIcon from './assets/icons/netflix.png';
import instagramIcon from './assets/icons/instagram.png';
import youtubeIcon from './assets/icons/youtube.png';


function createContact () {
  const contact = document.querySelector("main");
  contact.innerHTML = "";
  const footer = document.querySelector("footer");
  footer.remove();
  contact.classList.add("main_contact");

  const main_conteiner_contact = document.createElement("div");
  main_conteiner_contact.classList.add("contact_conteiner");


  const main_conteiner_info = document.createElement("div");
  main_conteiner_info.classList.add("info_contact");


  const contact_social1 = document.createElement("div");
  contact_social1.classList.add("box-social");

  const contact_social2 = document.createElement("div");
  contact_social2.classList.add("box-social");

  const contact_social3 = document.createElement("div");
  contact_social3.classList.add("box-social");


  const netflixIc = new Image
  netflixIc.src = netflixIcon;
  const instaIc = new Image
  instaIc.src = instagramIcon;
  const youtubeIc = new Image
  youtubeIc.src = youtubeIcon;
 
  const netflixLink = document.createElement("a");
  netflixLink.href = "https://www.netflix.com/es/title/70301870"
  netflixLink.appendChild(netflixIc);
  const p_netflix = document.createElement("p");
  p_netflix.innerText = "Netflix - TV SHOW";

  contact_social1.appendChild(netflixLink);
  contact_social1.appendChild(p_netflix);

  const instaLink = document.createElement("a");
  instaLink.href = "https://www.instagram.com/historyvikings/"
  instaLink.appendChild(instaIc);
  const p_insta = document.createElement("p");
  p_insta.innerText = "@Historyvikings";

  contact_social2.appendChild(instaLink);
  contact_social2.appendChild(p_insta);

  p_insta.innerText = "@Historyvikings";
  const youtubeLink = document.createElement("a");
  youtubeLink.href = "https://www.youtube.com/watch?v=MLJyFzdQfK8"
  youtubeLink.appendChild(youtubeIc);
  const p_youtube = document.createElement("p");
  p_youtube.innerText = "Viking Channel";

  contact_social3.appendChild(youtubeLink);
  contact_social3.appendChild(p_youtube);
  main_conteiner_info.appendChild(contact_social1);
  main_conteiner_info.appendChild(contact_social2);
  main_conteiner_info.appendChild(contact_social3);

  main_conteiner_contact.appendChild(main_conteiner_info);


  const bttn_contact = document.getElementById("contact");
  console.log(bttn_contact);
  bttn_contact.classList.add("active_bttn");


  const map_contact = document.createElement("div");
  map_contact.classList.add("map_contact");
  
  const p_contact = document.createElement("p");
  p_contact.innerText = "Dalevegen 6270, 6270 Brattvåg, Noruega";

  const iframe_contact = document.createElement("iframe");
  iframe_contact.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14692.024565834863!2d6.435155!3d62.59369900000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdb24d40557a00562!2sBrattv%C3%A5ghallen!5e0!3m2!1ses!2sar!4v1646069090138!5m2!1ses!2sar"
  iframe_contact.style.border = "0";
  iframe_contact.style.height = "60%";
  iframe_contact.style.width = "100%";
  iframe_contact.style.borderRadius  = "10px";

  map_contact.appendChild(p_contact);
  map_contact.appendChild(iframe_contact);

  main_conteiner_contact.appendChild(map_contact);
  contact.appendChild(main_conteiner_contact);
  
  return contact
}

export default createContact;