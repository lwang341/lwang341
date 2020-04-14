/** Add any JavaScript you need to this file. */
 var products=[
{
  name:'The Art of War',
  description:'The Art of War is an ancient Chinese military treatise attributed to Sun Tzu a high-ranking military general, strategist and tactician, and it was believed to have been compiled during the late Spring and Autumn period or early Warring States period.',
  type:'social science',
  price:'$14.13',
  num: 'artofwar',
},
{
  name:'A Short History of Nearly Everything',
  description:"A Short History of Nearly Everything is Bill Bryson's quest to find out everything that has happened from the Big Bang to the rise of civilization - how we got from there, being nothing at all, to here, being us. ",
  type:'social science',
  price:'$23.76',
  num:'bill bryson',
},
{
  name:'The Decadent Society: How We Became a Victim of Our Own Success',
  description:'From the New York Times columnist and best-selling author of Bad Religion, a powerful portrait of how our turbulent age is defined by dark forces seemingly beyond our control.',
  type:'social science',
  price:'$29.74',
  num:'decadent',
},
{
  name:'Fingerprints of the Gods: The Quest Continues',
  description:'Pulling together the myths, legends and stories handed down from generation to generation, all around the world, Graham Hancock presents his own, unique interpretation of history in this fascinating audiobook.',
  type:'social science',
  price:'$52.82',
  num:'fingerprints',
},
{
  name:'Guns, Germs and Steel: The Fate of Human Societies ',
  description:'Guns, Germs and Steel examines the rise of civilization and the issues its development has raised throughout history.',
  type:'social science',
  price:'$18.20',
  num:'gun',
},
{
  name:'The Power of Myth',
  description:'This extraordinary book reveals how the themes and symbols of ancient narratives continue to bring meaning to birth, death, love, and war. ',
  type:'social science',
  price:'$22.77',
  num:'myth',
},
{
  name:'Accidental Medical Discoveries: How Tenacity and Pure Dumb Luck Changed the World',
  description:'Accidental Medical Discoveries is an entertaining and enlightening look at the creation of 25 medical inventions that have changed the world – unintentionally. ',
  type:'mind&health',
  price:'$22.76',
  num:'accidental',
},
{
  name:'Brief Answers to the Big Questions',
  description:'The world-famous cosmologist and author of A Brief History of Time leaves us with his final thoughts on the biggest questions facing humankind.',
  type:'mind&health',
  price:'$31.98',
  num:'big',
},
{
  name:'How Emotions Are Made: The Secret Life of the Brain',
  description:'A new theory of how the brain constructs emotions that could revolutionize psychology, health care, the legal system, and our understanding of the human mind.',
  type:'mind&health',
  price:'$22.76',
  num:'emotion',
},
{
  name:'The Mastery of Love: A Practical Guide to the Art of Relationship ',
  description:'In The Mastery of Love, don Miguel Ruiz illuminates the fear-based beliefs and assumptions that undermine love and lead to suffering and drama in our relationships. ',
  type:'mind&health',
  price:'$20.74',
  num:'love',
},
{
  name:'Medical Entanglements: Rethinking Feminist Debates about Healthcare',
  description:'Medical Entanglements uses intersectional feminist, queer, and crip theory to move beyond “for or against” approaches to medical intervention. ',
  type:'mind&health',
  price:'$137.95',
  num:'medical',
},
{
  name:'The Philosophy Book: Big Ideas Simply Explained',
  description:'The Philosophy Book answers the most profound questions we all have. It is your visual guide to the fundamental nature of existence, society, and how we think.',
  type:'mind&health',
  price:'$22.76',
  num:'philo',
},
{
  name:'The Wisdom of Insecurity: A Message for an Age of Anxiety',
  description:'Drawing from Eastern philosophy and religion, Watts argues that it is only by acknowledging what we do not and cannot know that we can find something truly worth knowing. ',
  type:'mind&health',
  price:'$20.79',
  num:'wisdom',
},
{
  name:'Lady of Hay: An enduring classic – gripping, atmospheric and utterly compelling',
  description:'A story spanning centuries. A long awaited revenge.',
  type:'fiction',
  price:'$8.99',
  num:'barbarra',
},
{
  name:'Circe',
  description:'One of the Most Anticipated Books of 2018',
  type:'fiction',
  price:'$15.95',
  num:'circe',
},
{
  name:'Great Goddesses: Life Lessons from Myths and Monsters',
  description:'Best-selling poet, writer, and Instagram sensation Nikita Gill returns with a collection of poetry and prose retelling the legends of the Goddesses, both great and small, in their own words.',
  type:'fiction',
  price:'$26.32',
  num:'great',
},
{
  name:'The Lord of the Rings: The Fellowship of the Ring, The Two Towers, The Return of the King',
  description:'Sauron, the Dark Lord, has gathered to him all the Rings of Power – the means by which he intends to rule Middle-earth.',
  type:'fiction',
  price:'$65.29',
  num:'lordring',
},
{
  name:'Tree of Ages ',
  description:'After a century spent as a tree, Finn awakens into a world she barely recognizes. In fact, she barely even recognizes herself. Dark shadows seem to haunt her every step, pushing her toward a past she’s forced herself to forget.',
  type:'fiction',
  price:'$14.71',
  num:'tree',
}
];


window.onload=function(){
showAll();
showFiction();
showMind();
showScience();
all(); 
}
function subtitle(subtitle){
  var loc=document.querySelector("#subtitle");
  loc.innerHTML="";
  var sub=document.createElement("h2");
  sub.textContent=subtitle;
  loc.appendChild(sub);
}
 function all(){
var location=document.querySelector("#grid-container");
for(var i=0;i<products.length;i++){
  var one=showOne(products[i]);
  location.appendChild(one);
}
} 
function showAll(){
  document.querySelector("#all").onclick=function(){
      subtitle("The list of all the books");
    all();
  }
}

function hideAll(){
  var location=document.querySelector("#grid-container");
  location.innerHTML="";
}

function showFiction(){

  document.querySelector("#l2").onclick=function(){
   subtitle("The book list about mind and health"); 
   hideAll();   
  var location=document.querySelector("#grid-container");
  for(var i=0;i<products.length;i++){
    if(products[i].type=='mind&health'){
      var one=showOne(products[i]);
      location.appendChild(one);
    }
  }
 }
}
function showMind(){
  document.querySelector("#l1").onclick=function(){
    subtitle("The list of fictions");
   hideAll();   
  var location=document.querySelector("#grid-container");
  for(var i=0;i<products.length;i++){
    if(products[i].type=='fiction'){
      var one=showOne(products[i]);
      location.appendChild(one);
    }
  }
 }
}
function showScience(){
  document.querySelector("#l3").onclick=function(){
    subtitle("The book list about social science");
   hideAll();   
  var location=document.querySelector("#grid-container");
  for(var i=0;i<products.length;i++){
    if(products[i].type=='social science'){
      var one=showOne(products[i]);
      location.appendChild(one);
    }
  }
 }
}
function showOne(product){
  var item=document.createElement("div");
  var img=document.createElement("img");
  img.src="picture/"+product.num+".jpg";
  var na=document.createElement("p");
  na.textContent=product.name;
  na.className="title";
  var des=document.createElement("p");
  des.textContent=product.description;
  des.className="description";
  var pri=document.createElement("p");
  pri.textContent=product.price;

  item.appendChild(img);
  item.appendChild(na);
  item.appendChild(des);
  item.appendChild(pri);
return item;
} 




