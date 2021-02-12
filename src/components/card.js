import axios from 'axios'

const Card = (article) => {

  const card = document.createElement('div');
  const cardTitle = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardAuthor = document.createElement('span');

  card.classList.add('card');
  cardTitle.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  card.appendChild(cardTitle);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(cardAuthor);
  imgContainer.appendChild(cardImg);

  cardTitle.textContent = article.headline;
  cardImg.src = article.authorPhoto;
  cardAuthor.textContent = article.authorName;

  card.addEventListener('click', (event) => {
    console.log(article.headline);
  });

  return card;

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {

  axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then( res => {
      console.log(res.data.articles);
      const array1 = res.data.articles.bootstrap;
      array1.forEach( (item) => {
        const newCard = Card(item);
        console.log(newCard);
        const parent = document.querySelector(selector);
        parent.appendChild(newCard);
      });

      const array2 = res.data.articles.javascript;
      array2.forEach( (item) => {
        const newCard = Card(item);
        console.log(newCard);
        const parent = document.querySelector(selector);
        parent.appendChild(newCard);
      });

      const array3 = res.data.articles.jquery;
      array3.forEach( (item) => {
        const newCard = Card(item);
        console.log(newCard);
        const parent = document.querySelector(selector);
        parent.appendChild(newCard);
      });

      const array4 = res.data.articles.node;
      array4.forEach( (item) => {
        const newCard = Card(item);
        console.log(newCard);
        const parent = document.querySelector(selector);
        parent.appendChild(newCard);
      });

      const array5 = res.data.articles.technology;
      array5.forEach( (item) => {
        const newCard = Card(item);
        console.log(newCard);
        const parent = document.querySelector(selector);
        parent.appendChild(newCard);
      });
    })
    .catch( err => {
      console.log('data could not be retrieved');
    })
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
