function RechercheLivres() {
  fetch("https://www.googleapis.com/books/v1/volumes?q=ecmascript")
    .then(response => {
        console.log(response);
        if (!response.ok) {
            throw Error("ERROR");
        }    
        return response.json();
    })
    .then(data => {
        console.log(data.data);
    })
    .catch(error => {
        console.log(error);
    })
  }

RechercheLivres();



/*function RechercheLivres() {
  fetch("https://www.googleapis.com/books/v1/volumes?q=ecmascript")
    .then(response => {
        console.log(response);
        if (!response.ok) {
            throw Error("ERROR");
        }    
        return response.json();
    })
    .then(data => {
        console.log(data.data);
    })
    .catch(error => {
        console.log(error);
    })
  }

RechercheLivres();

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

 console.log(books);
*/



























































  /*
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
  */
  
  
  
  
  
  
  
  
  
  
  
  
  
  