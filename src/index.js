const demoImgElement = document.getElementById("ourWorkControls");
const ourWorkTextContainer = document.getElementById("ourWorkTextContainer");
const reviewWrapper = document.getElementById("reviewWrapper");
let currentWorkDemo = 0;
let currentReview = 0;
const workDemos = [
  {
    src: "demoImgOne",
  },
  {
    src: "demoImgTwo",
  },

  {
    src: "demoImgThree",
  },
  {
    src: "demoImgFour",
  },
  { src: "demoImgFive" },
];

const reviews = [
  {
    name: "Frank B",
    stars: 5,
    review: ` Greg repaired a drywall eyesore on my great room wall. The repair required repeated visits. Each visit he was on time and did what he said he would do with outstanding results. He is prompt, honest, fair priced and thorough. Best handyman experience I\’ve had.`,
  },
  {
    name: "Dirk J",
    stars: 5,
    review: `Greg responded quickly to our initial message and was at our house helping us out in short order. We had a challenging deadbolt situation and he found a way to make it work. Highly recommend!`,
  },
  {
    name: "Troy M",
    stars: 5,
    review: ` Greg completed a wall framing, drywall installation, trim work, and interior French door installation for our home office loft project. The finished product looks great, there was easy communication, and a fair price. Highly recommended - thanks Greg!`,
  },
  {
    name: "Seth T",
    stars: 5,
    review:
      "Greg installed some baseboards in my home office and did an outstanding job. Fair pricing and fast and efficient service. He went out of his way to get the job done for me. Great communication throughout the scheduling/quoting process. We couldn't be happier and highly recommended. Thanks again!!",
  },
  {
    name: "EMILY H",
    stars: 5,
    review:
      "Greg did some baseboards and door trim for my basement finish. He was super fast, easy to schedule with and the work looks awesome!",
  },
  {
    name: "Gaige K",
    stars: 5,
    review: `I had greg do the baseboards, door trim, and door hanging in the basement that I was finishing and he did an amazing job! I had him build a desk in one of the corners of the room and couldn't be happier with the finished product. Greg showed up when he said he would and worked on the job until it was done. Will definitely be using Greg in the future.`,
  },
];

// Cycle working demo function
const cycleWorkDemo = (modifer) => {
  currentWorkDemo += modifer;
  if (currentWorkDemo == workDemos.length) {
    currentWorkDemo = 0;
  } else if (currentWorkDemo < 0) {
    currentWorkDemo = workDemos.length - 1;
  }
  demoImgElement.classList =
    "controlsContainer  " + workDemos[currentWorkDemo].src;
};

// Create review function
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

// Cycle review function
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
  if (currentReview + update > reviews.length) {
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

const addPhoneNmbr = () => {
  const node = document.getElementById("phoneNmbr");
  node.textContent = "Phone: 801-884-7709";
};

addPhoneNmbr();
cycleWorkDemo(0);
cycleReview(0);
