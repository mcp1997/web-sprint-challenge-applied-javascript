const Header = (title, date, temp) => {
  
  const main = document.createElement('div');
  const mainDate = document.createElement('span');
  const mainTitle = document.createElement('h1');
  const mainTemp = document.createElement('span');

  main.classList.add('header');
  mainDate.classList.add('date');
  mainTemp.classList.add('temp');

  main.appendChild(mainDate);
  main.appendChild(mainTitle);
  main.appendChild(mainTemp);

  mainDate.textContent = date;
  mainTitle.textContent = title;
  mainTemp.textContent = temp;

  return main;


  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}


const headerAppender = (selector) => {
  
  const newHeader = Header("Apparently, dogs can now code (and write articles about it)", "Feb 12th, 2021", "63°");
  const parent = document.querySelector(selector);
  parent.appendChild(newHeader);
  

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}


export { Header, headerAppender }
