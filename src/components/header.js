const Header = (title, date, temp) => {
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

  // creating elements
  const headerCard = document.createElement("div");
  const date = document.createElement("span");
  const title = document.createElement("h1");
  const temp = document.createElement("span");

  //text
  date.textContent = `Date: ${date}`;
  title.textContent = `${title}`;
  temp.textContent = `Temp: ${temp}`;

  // class names, attributes
  headerCard.classList.add("header");
  date.classList.add("date");
  temp.classList.add("temp");

  // adding some interactivity

  return headerCard;
};

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  header.appendChild("headerCard");
  header.appendChild("header");
  header.appendChild("date");
  header.appendChild("temp");
};

export { Header, headerAppender };
