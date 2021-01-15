const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  // creating elements
  const tabsCard = document.createElement("div");
  const topic1 = document.createElement("div");
  const topic2 = document.createElement("div");
  const topic3 = document.createElement("div");

  //text

  topic1.textContent = "JavaScript";
  topic2.textContent = "Bootstrap";
  topic3.textContent = "Technology";

  headline.textContent = `${headline}`;
  authorName.textContent = `Author: ${authorName}`;
  image.src = imageURL;
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  return tabsCard;
};

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  tabsCard.appendChild(topic1);
  tabsCard.appendChild(topic2);
  tabsCard.appendChild(topic3);
};

export { Tabs, tabsAppender };
