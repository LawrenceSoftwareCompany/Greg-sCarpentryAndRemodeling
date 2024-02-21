const clearPage = () => {
  const content = document.getElementById("content");

  while (content.childNodes.length > 0) {
    content.removeChild(content.childNodes[0]);
  }
};

constructHomePage = () => {
  const content = document.getElementById("content");
  const openingSprawl = document.createElement("div");
  openingSprawl.classList = "openingSprawl";
  const text = document.createElement("h1");
  text.textContent = "ZackLawrence.net";
  openingSprawl.appendChild(text);
  content.appendChild(openingSprawl);
};

constructAboutMePage = () => {
  const content = document.getElementById("content");

  // Creating the first Text block
  const introSection = document.createElement("div");
  introSection.classList = "sectionContainer";
  const header = document.createElement("h2");
  header.textContent = "About Me";
  header.classList = "sectionHeader";
  const introP = document.createElement("p");
  introP.classList = "textBlock";
  introP.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eius reprehenderit aliquam iusto et quibusdam facere perferendis! Libero saepe, corporis, esse est tenetur nobis, provident fugit nesciunt laudantium alias nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repellendus eum officiis, similique nulla ducimus ut tempora fuga itaque praesentium perferendis libero ipsum aliquid placeat eligendi eius ad dolor quisquam?";
  const introP2 = document.createElement("p");
  introP2.classList = "textBlock";
  introP2.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eius reprehenderit aliquam iusto et quibusdam facere perferendis! Libero saepe, corporis, esse est tenetur nobis, provident fugit nesciunt laudantium alias nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repellendus eum officiis, similique nulla ducimus ut tempora fuga itaque praesentium perferendis libero ipsum aliquid placeat eligendi eius ad dolor quisquam?";
  introSection.append(header, introP, introP2);

  // Creating first polaroid
  const frame1 = document.createElement("div");
  frame1.classList = "photoFrame";
  const img1 = document.createElement("img");
  img1.classList = "gridSectionPhoto";
  img1.src = "../assets/images/bridge.jpg";
  frame1.appendChild(img1);

  // Second Text block
  const sectionTwo = document.createElement("div");
  sectionTwo.classList = "sectionContainer";
  const sectionTwoHeader = document.createElement("h2");
  sectionTwoHeader.textContent = "Hobbies";
  sectionTwoHeader.classList = "sectionHeader";
  const sectionTwoP = document.createElement("p");
  sectionTwoP.classList = "textBlock";
  sectionTwoP.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eius reprehenderit aliquam iusto et quibusdam facere perferendis! Libero saepe, corporis, esse est tenetur nobis, provident fugit nesciunt laudantium alias nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repellendus eum officiis, similique nulla ducimus ut tempora fuga itaque praesentium perferendis libero ipsum aliquid placeat eligendi eius ad dolor quisquam?";
  const sectionTwoP2 = document.createElement("p");
  sectionTwoP2.classList = "textBlock";
  sectionTwoP2.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eius reprehenderit aliquam iusto et quibusdam facere perferendis! Libero saepe, corporis, esse est tenetur nobis, provident fugit nesciunt laudantium alias nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repellendus eum officiis, similique nulla ducimus ut tempora fuga itaque praesentium perferendis libero ipsum aliquid placeat eligendi eius ad dolor quisquam?";

  sectionTwo.append(sectionTwoHeader, sectionTwoP, sectionTwoP2);
  // Second polaroid
  const frame2 = document.createElement("div");
  frame2.classList = "photoFrame";
  const img2 = document.createElement("img");
  img2.classList = "gridSectionPhoto";
  img2.src = "../assets/images/hobbies.jpg";
  frame2.appendChild(img2);

  content.append(introSection, frame1, frame2, sectionTwo);
};

constructAchievementsPage = () => {
  const content = document.getElementById("content");

  // Creating the first Text block
  const introSection = document.createElement("div");
  introSection.classList = "sectionContainer";
  const header = document.createElement("h2");
  header.textContent = "Achievements";
  header.classList = "sectionHeader";
  const introP = document.createElement("p");
  introP.classList = "textBlock";
  introP.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eius reprehenderit aliquam iusto et quibusdam facere perferendis! Libero saepe, corporis, esse est tenetur nobis, provident fugit nesciunt laudantium alias nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repellendus eum officiis, similique nulla ducimus ut tempora fuga itaque praesentium perferendis libero ipsum aliquid placeat eligendi eius ad dolor quisquam?";
  const introP2 = document.createElement("p");
  introP2.classList = "textBlock";
  introP2.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eius reprehenderit aliquam iusto et quibusdam facere perferendis! Libero saepe, corporis, esse est tenetur nobis, provident fugit nesciunt laudantium alias nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repellendus eum officiis, similique nulla ducimus ut tempora fuga itaque praesentium perferendis libero ipsum aliquid placeat eligendi eius ad dolor quisquam?";
  introSection.append(header, introP, introP2);

  // Creating first polaroid
  const frame1 = document.createElement("div");
  frame1.classList = "photoFrame";
  const img1 = document.createElement("img");
  img1.classList = "gridSectionPhoto";
  img1.src = "../assets/images/Pancho.jpg";
  frame1.appendChild(img1);

  // Second Text block
  const sectionTwo = document.createElement("div");
  sectionTwo.classList = "sectionContainer";
  const sectionTwoHeader = document.createElement("h2");
  sectionTwoHeader.textContent = "Awards";
  sectionTwoHeader.classList = "sectionHeader";
  const sectionTwoP = document.createElement("p");
  sectionTwoP.classList = "textBlock";
  sectionTwoP.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eius reprehenderit aliquam iusto et quibusdam facere perferendis! Libero saepe, corporis, esse est tenetur nobis, provident fugit nesciunt laudantium alias nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repellendus eum officiis, similique nulla ducimus ut tempora fuga itaque praesentium perferendis libero ipsum aliquid placeat eligendi eius ad dolor quisquam?";
  const sectionTwoP2 = document.createElement("p");
  sectionTwoP2.classList = "textBlock";
  sectionTwoP2.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eius reprehenderit aliquam iusto et quibusdam facere perferendis! Libero saepe, corporis, esse est tenetur nobis, provident fugit nesciunt laudantium alias nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repellendus eum officiis, similique nulla ducimus ut tempora fuga itaque praesentium perferendis libero ipsum aliquid placeat eligendi eius ad dolor quisquam?";

  sectionTwo.append(sectionTwoHeader, sectionTwoP, sectionTwoP2);
  // Second polaroid
  const frame2 = document.createElement("div");
  frame2.classList = "photoFrame";
  const img2 = document.createElement("img");
  img2.classList = "gridSectionPhoto";
  img2.src = "assets/images/podium.jpg";
  frame2.appendChild(img2);

  content.append(frame1, introSection, sectionTwo, frame2);
};

const updateBackGround = (page) => {
  const body = document.getElementById("body");
  clearPage();

  if (page == "home") {
    window.location.href = "#top";
    body.classList = "homePage";
    content.classList = "wrapper centerContent";
    constructHomePage();
  } else if (page == "aboutMe") {
    window.location.href = "#top";

    body.classList = "aboutMePage";
    content.classList = "wrapper twoColumnGrid";
    constructAboutMePage();
  } else if (page == "achievements") {
    window.location.href = "#top";

    body.classList = "achievementsPage";
    content.classList = "wrapper twoColumnGrid";
    constructAchievementsPage();
  } else {
    console.log("404: \n Page Not Found");
  }
};
