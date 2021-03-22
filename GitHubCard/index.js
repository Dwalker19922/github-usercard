const { default: axios } = require("axios");

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>

*/
//const data = axios.get("https://api.github.com/users/Dwalker19922")
//data.then(dpr =>{
 // creator(dpr)
  //  })

function creator(array){
  const cards = document.querySelector(".cards")
  const card = document.createElement("div")
   cards.appendChild(card)
  card.className="card"
  const img = document.createElement("img")
  card.appendChild(img)
  img.src =array.data.avatar_url
  const info = document.createElement("div")
  card.appendChild(info)
  const hdr = document.createElement("h3")
  info.appendChild(hdr)
  hdr.className="card-info"
 hdr.textContent=array.data.name
 hdr.style.fontSize="3em"
 const para = document.createElement("p")
 info.appendChild(para)
 para.classList=array.data.login
 para.textContent=array.data.login
 para.style.fontSize="2em"
const loc=document.createElement("p")
info.appendChild
loc.textContent=array.data.location
const par2=document.createElement("p")
info.appendChild(par2)
par2.textContent="Profile:"
const link = document.createElement("a")
par2.appendChild(link)
link.href="https://api.github.com/users/"+array.data.login
link.textContent="https://api.github.com/users/"+array.data.login
const followers = document.createElement("p")
info.appendChild(followers)
followers.textContent="Followers:"+" "+array.data.followers
const following = document.createElement("p")
info.appendChild(following)
following.textContent="Following:"+" "+array.data.followers
const bio = document.createElement("p")
info.appendChild(bio)
bio.textContent="Bio:"+" "+array.data.bio
  return console.log(card)
  }

const followersArray = ["Dwalker19922","tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"];

   followersArray.forEach(element => {
   axios.get("https://api.github.com/users/"+element)
 .then(dpr =>{
  creator(dpr)
  console.log(element)
    })  
  });
