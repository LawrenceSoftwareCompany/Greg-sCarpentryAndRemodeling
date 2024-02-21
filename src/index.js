const demoImgElement = document.getElementById("ourWorkImg");
const ourWorkTextContainer = document.getElementById("ourWorkTextContainer");
const reviewWrapper = document.getElementById("reviewWrapper");
let currentWorkDemo = 0;
let currentReview = 0;
const workDemos = [
  {
    src: "demoImgOne",
    txt: [
      `        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
  quidem modi veritatis? Necessitatibus quis libero quas
  consequuntur voluptatem velit nihil tenetur distinctio qui
  quidem ut, voluptate at accusamus incidunt earum. Lorem ipsum
  dolor sit amet consectetur adipisicing elit. Fuga praesentium
  tenetur laboriosam, velit corporis nam quas vitae natus libero
  voluptatem totam laborum impedit debitis blanditiis alias
  eveniet, qui ipsam repellat.`,

      `          Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Adipisci, quod eos? Maiores asperiores saepe ea quae laboriosam!
  Exercitationem dignissimos tempora nostrum quis ipsa, culpa
  labore! Unde minima molestiae illo necessitatibus? Lorem ipsum
  dolor sit amet consectetur adipisicing elit. Esse aliquid unde
  sit repellendus corrupti, voluptatum velit repellat pariatur
  voluptate reiciendis nam porro quam laudantium cum expedita
  consequuntur iure? Impedit, tempore.`,

      `   Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Inventore officia dolorem pariatur neque id dolore quasi quis,
  necessitatibus doloremque fuga illum doloribus provident
  molestiae facilis nobis eum quia eaque consequuntur?`,
    ],
  },
  {
    src: "demoImgTwo",
    txt: [
      `          Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Adipisci, quod eos? Maiores asperiores saepe ea quae laboriosam!
    Exercitationem dignissimos tempora nostrum quis ipsa, culpa
    labore! Unde minima molestiae illo necessitatibus? Lorem ipsum
    dolor sit amet consectetur adipisicing elit. Esse aliquid unde
    sit repellendus corrupti, voluptatum velit repellat pariatur
    voluptate reiciendis nam porro quam laudantium cum expedita
    consequuntur iure? Impedit, tempore.`,

      `        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
    quidem modi veritatis? Necessitatibus quis libero quas
    consequuntur voluptatem velit nihil tenetur distinctio qui
    quidem ut, voluptate at accusamus incidunt earum. Lorem ipsum
    dolor sit amet consectetur adipisicing elit. Fuga praesentium
    tenetur laboriosam, velit corporis nam quas vitae natus libero
    voluptatem totam laborum impedit debitis blanditiis alias
    eveniet, qui ipsam repellat.`,

      `   Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Inventore officia dolorem pariatur neque id dolore quasi quis,
    necessitatibus doloremque fuga illum doloribus provident
    molestiae facilis nobis eum quia eaque consequuntur?`,
    ],
  },
];

const reviews = [
  {
    name: "John Doe",
    stars: 5,
    review: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
  cum, itaque modi sed voluptatibus amet obcaecati deleniti eum
  recusandae non veniam pariatur cupiditate id perspiciatis?
  Dolorum explicabo sint accusantium quasi.`,
  },
  {
    name: "Jane Doe",
    stars: 5,
    review: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
  cum, itaque modi sed voluptatibus amet obcaecati deleniti eum
  recusandae non veniam pariatur cupiditate id perspiciatis?
  Dolorum explicabo sint accusantium quasi.`,
  },
  {
    name: "Jack Doe",
    stars: 5,
    review: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
  cum, itaque modi sed voluptatibus amet obcaecati deleniti eum
  recusandae non veniam pariatur cupiditate id perspiciatis?
  Dolorum explicabo sint accusantium quasi.`,
  },
];

const cycleWorkDemo = (modifer) => {
  ourWorkTextContainer.childNodes.forEach((child) => {
    ourWorkTextContainer.removeChild(child);
  });

  currentWorkDemo += modifer;
  if (currentWorkDemo == workDemos.length) {
    currentWorkDemo = 0;
  } else if (currentWorkDemo < 0) {
    currentWorkDemo = workDemos.length - 1;
  }
  demoImgElement.classList = "demoWorkImg " + workDemos[currentWorkDemo].src;
  workDemos[currentWorkDemo].txt.forEach((txt) => {
    const p = document.createElement("p");
    p.textContent = txt;
    p.classList = "ourWorkTxtBlock";
    ourWorkTextContainer.appendChild(p);
  });
};

const createReview = (index) => {
  // create current Review
  const div = document.createElement("div");
  div.classList = "review";
  // Create the clients name
  const clientName = document.createElement("h3");
  clientName.classList = "clientName";
  clientName.textContent = reviews[index].name;
  // Create stars
  const stars = document.createElement("span");
  stars.classList = "stars";
  let i = 0;
  while (i < reviews[index].stars) {
    const star = document.createElement("ion-icon");
    star.name = "star";
    stars.appendChild(star);
    i++;
  }
  // Create the body of the review
  const reviewBody = document.createElement("p");
  reviewBody.classList = "reviewTxt";
  reviewBody.textContent = reviews[index].review;

  div.append(clientName, stars, reviewBody);
  return div;
};

const cycleReview = (update) => {
  let clearingChildNodes = true;

  if (update == 1) {
    reviewWrapper.classList += " slideRight";
    // reviewWrapper.style.animation = "slideRight 0.3s";
  } else if (update == -1) {
    reviewWrapper.classList += " slideLeft";

    // reviewWrapper.style.animation = "slideLeft 0.3s";
  }

  reviewWrapper.innerHTML = "";

  currentReview += update;
  if (0 > currentReview) {
    currentReview = reviews.length - 1;
  }
  if (currentReview + update > 3) {
    currentReview = 0;
  }
  const focusedReview = createReview(currentReview);
  focusedReview.classList = "review focusedReview";
  let leftReview = currentReview - 1;
  let rightReview = currentReview + 1;
  if (currentReview == 0) {
    leftReview = reviews.length - 1;
  }
  if (currentReview == reviews.length - 1) {
    rightReview = 0;
  }
  const prevReview = createReview(leftReview);
  const nxtReview = createReview(rightReview);
  prevReview.classList = "review unfocusedReview";
  nxtReview.classList = "review unfocusedReview";

  reviewWrapper.append(prevReview, focusedReview, nxtReview);

  setTimeout(() => {
    reviewWrapper.classList = "reviewWrapper";
  }, 360);
};

cycleWorkDemo(0);
cycleReview(0);
