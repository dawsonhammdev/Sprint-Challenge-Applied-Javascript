// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios 
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(res => {
    console.log(res)
    res.data.articles.javascript.forEach(i => {
        cardsContainer.appendChild(CreateCard(i));
    })
    res.data.articles.bootstrap.forEach(i => {
        cardsContainer.appendChild(CreateCard(i));
    })
    res.data.articles.technology.forEach(i => {
        cardsContainer.appendChild(CreateCard(i));
    })
    res.data.articles.jquery.forEach(i => {
        cardsContainer.appendChild(CreateCard(i));
    })
    res.data.articles.node.forEach(i => {
        cardsContainer.appendChild(CreateCard(i));
    })
  })
  .catch(error => {
    console.log('error', error);
  })

  const cardsContainer = document.querySelector('.cards-container');

  function CreateCard(data){
    const lambdaCard = document.createElement('div');
    const lambdaHeadline = document.createElement('div');
    const lambdaAuthor = document.createElement('div');
    const lambdaImgContainer = document.createElement('div');
    const lambdaImg = document.createElement('img');
    const lambdaAuthorName = document.createElement('span');

    lambdaHeadline.textContent = `${data.headline}`;
    lambdaImg.src = `${data.authorPhoto}`;
    lambdaAuthorName.textContent = `${data.authorName}`;

    lambdaCard.append(lambdaHeadline);
    lambdaCard.append(lambdaAuthor);
    lambdaCard.append(lambdaImgContainer);
    lambdaCard.append(lambdaImg);
    lambdaCard.append(lambdaAuthorName);

    lambdaCard.classList.add('card');
    lambdaHeadline.classList.add('headline');
    lambdaAuthor.classList.add('author');
    lambdaImgContainer.classList.add('img-container');

    return lambdaCard
  }