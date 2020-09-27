const books = [{
  Title: 'HP2',
  Author: 'JKR',
  Summary: 'jodjuhuhmpaiosuhdvoziehyy',
  Price: 26,
  Image: 'assets/HP2.jpeg',
},
{
  Title: 'HP3',
  Author: 'JKR',
  Summary: 'jodjuhuhmpavoziehyy',
  Price: 22,
  Image: 'assets/HP3.jpeg',

},
{
  Title: 'Le seigneur des anneaux',
  Author: 'Tolkien',
  Summary: 'huhmpaiosuhdvoziehyy',
  Price: 20,
  Image: 'assets/LOTR.jpeg',
},
{
  Title: 'Bilbo le Hobbit',
  Author: 'Tolkien',
  Summary: 'jodjuhuhmpaioscdqdsdDSDsDSDduhdvoziehyy',
  Price: 16,
  Image: 'assets/Bilbo.jpeg'
}
]

              //Une fonction qui affiche 3 livres au hasard du tableau

//1

//Voici la 1ère méthode utilisée je duplique le tableau ensuite je créer une boucle dans laquelle
//je push un élément au hasard tant que sa longueur est inférieur à 3 */ 

//-------------------------------------------------------------------------------------------------------------

          /*
          let otherBooks=books.slice(0);
          let threeAleatoires=[];

          while (threeAleatoires.length<3) threeAleatoires.push(otherBooks.splice(Math.floor(Math.random()*otherBooks.length),1)[0]);
          
          console.log(threeAleatoires)
          */

//-------------------------------------------------------------------------------------------------------------

//Sauf que même si j'ai mes 3 éléments au hasard de mon tableau cela ne marche pas vraiment car ici
//je connaît sa taille. Donc 4-1 est bien égale à 3. J'ai tout de même cherché une autre méthode.*/



//2

//J'ai ensuite crée la fonstion en utilisant un Math.random simple ce qui me donne 1 livre au hasard.
// Mais la question reste commetn en avoir 3. Appeler la fonstion 3 fois?

//-------------------------------------------------------------------------------------------------------------

          /*function afficheRecommandations() {
            const rand = books[Math.floor(Math.random() * books.length)];
            console.log (rand)
            }
            
            afficheRecommandations()
            afficheRecommandations()
            afficheRecommandations()
          */

//-------------------------------------------------------------------------------------------------------------

//Toujours pas le résultat escompté.


//Jamais 2 sans 3

//Ici on créer une fonction qui va shuffler notre tableau afin que nos livres soient dans un nouvel ordre
// 

//-------------------------------------------------------------------------------------------------------------
         /* 

          function shuffleArray() {
            for (let i = books.length - 1 ; i >= 0; i--) { //Oui on décrémente 
              const j = Math.floor(Math.random() * (i + 1)); // on créer une const j afin d'appliquer un random
              const temp = books[i]; // On créer une const temp (temporaire) afin de noyer le poisson
              books[i] = books[j]; // i est l'index de notre tableau, on l'a remplacer par j (le random)
              books[j] = temp; // Puis on en veut ici aux écailles du poisson car on donne à j la valeur de la const temporaire afin de ne pas avoirs 2 fois le même livre
            }
            return books.slice(0, 3) // le slice permet de prendre les 3 premiers index de notre tableau shufflé.
            }

            console.log (shuffleArray())
            */
//-------------------------------------------------------------------------------------------------------------

//FINALLY!!!


              //Une fonction qui affiche les livres à moins de 20€


//Ici on créer une fonction qui va shuffler notre tableau afin que nos livres soient dans un nouvel ordre
/*books.forEach(function (item, index, array) {
  console.log(item.Price, index);
  });*/ // j'ai utilisé forEach afin de pouvoir récupérer uniquement les prix dans le tableau.


//-------------------------------------------------------------------------------------------------------------
/*
          function afficheLivre(prixMax) {
              const filtrer = books.filter((item) => {
                return item.Price <= prixMax})
              console.log(filtrer) 
            }
            afficheLivre(20)
*/
//-------------------------------------------------------------------------------------------------------------


              //Affichons maintenant nos deux fonctions dans le DOM

// Piti test :
//document.getElementById('title').innerHTML = 'Ouba ouba' 

function shuffleArray() {
  
  for (let i = books.length - 1 ; i >= 0; i--) { //Oui on décrémente 
    const j = Math.floor(Math.random() * (i + 1)); // on créer une const j afin d'appliquer un random
    const temp = books[i]; // On créer une const temp (temporaire) afin de noyer le poisson
    books[i] = books[j]; // i est l'index de notre tableau, on l'a remplacer par j (le random)
    books[j] = temp; // Puis on en veut ici aux écailles du poisson car on donne à j la valeur de la const temporaire afin de ne pas avoirs 2 fois le même livre
  }
  return newArray = books.slice(0, 3) // le slice permet de prendre les 3 premiers index de notre tableau shufflé.
  }

  (shuffleArray())
  
  
  function displayCard (array = []) {
  let carte = document.querySelector('.carte'); 
  carte.innerHTML = "";

  for(let i = 0; i < array.length; i++) {
        let item = newArray[i];
        let item_element = document.createElement('div');
        item_element.classList.add('carte-item'); // on ajoute une div qui va contenir un livre
                    
        let image = document.createElement('div');
        image.classList.add('item-image');
        image.innerHTML= "<img src= "+item.Image+" />";

        item_element.appendChild(image);

        let title = document.createElement('div');
        title.classList.add('item-title'); // on ajoute une div title
        title.innerText = item.Title;

        item_element.appendChild(title);
               
        let authorName = document.createElement('div');
        authorName.classList.add('item-author'); // on ajoute une div authorName
        authorName.innerText = item.Author;

        item_element.appendChild(authorName)

        let summary = document.createElement('div');
        summary.classList.add('item-summary');
        summary.innerText = item.Summary;

        item_element.appendChild(summary)

        let price = document.createElement('div');
        price.classList.add('item-price'); 
        price.innerText = item.Price;

        item_element.appendChild(price)
    
        carte.appendChild(item_element);
      }
    }      

displayCard(newArray);


function afficheLivre(prixMax) {
const filtrer = otherNewArray = books.filter((item) => {
  return item.Price <= prixMax})
}
afficheLivre(20)


function displayLongCard (array = []) {
let carteLongue = document.querySelector('.carte-Longue'); 
carteLongue.innerHTML = "";

for(let i = 0; i < array.length; i++) {
      let item = otherNewArray[i];
      let item_element = document.createElement('div');
      item_element.classList.add('carte-longue-item'); // on ajoute une div qui va contenir un livre
                  
      let image = document.createElement('div');
      image.classList.add('item-image');
      image.innerHTML= "<img src= "+item.Image+" />";

      item_element.appendChild(image);

      let title = document.createElement('div');
      title.classList.add('item-title'); // on ajoute une div title
      title.innerText = item.Title;

      item_element.appendChild(title);
             
      let authorName = document.createElement('div');
      authorName.classList.add('item-author'); // on ajoute une div authorName
      authorName.innerText = item.Author;

      item_element.appendChild(authorName)

      let summary = document.createElement('div');
      summary.classList.add('item-summary');
      summary.innerText = item.Summary;

      item_element.appendChild(summary)

      let price = document.createElement('div');
      price.classList.add('item-price'); 
      price.innerText = item.Price;

      item_element.appendChild(price)
  
      carteLongue.appendChild(item_element);
    }
  }      

displayLongCard(otherNewArray);





















