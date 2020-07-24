// window.onscroll = function () {
//   scrollFunction(), scrollTitleFunction();
// };

window.onscroll = function () {
  scrollFunction();
};

window.addEventListener("mousemove", cursor);

setTimeout(() => {
  window.scrollTo(0, 0);
  addScrollAnimation();
}, 0);

const mouseCursor = document.querySelector(".cursor");
let learningScreen = document.querySelectorAll(
  ".learning_screen__button, .header__nav a, .form_close"
);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

learningScreen.forEach((screen) => {
  screen.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("cursor_learn");
  });

  screen.addEventListener("mouseover", () => {
    mouseCursor.classList.add("cursor_learn");
  });
});

function onChangeForm({ name, value }) {
  const inputs = document.querySelectorAll(".form_input__field");

  inputs.forEach((input) => {
    if (input.name === name) {
      input.value = value;
    }
  });


  inputs.forEach((input) => {
    if (input.value == !value) {
      input.classList.remove('form_input__field__filled');
    } else {
      input.classList.add('form_input__field__filled');
    }
  });
}



// function scrollTitleFunction() {
//   const learningTitle1 = document.querySelector(".learning_screen__title1");
//   const learningTitle2 = document.querySelector(".learning_screen__title2");
//   let learningButton1 = learningTitle1.querySelector(
//     ".learning_screen__button"
//   );
//   let learningButton2 = learningTitle2.querySelector(
//     ".learning_screen__button"
//   );
//
//   if (
//     document.body.scrollTop == learningTitle1.getBoundingClientRect().top ||
//     document.documentElement.scrollTop ==
//       learningTitle1.getBoundingClientRect().top
//   ) {
//     learningTitle1.style.background = "#fff";
//     learningButton1.style.opacity = "1";
//   } else {
//     learningTitle1.style.background = "none";
//     learningButton1.style.opacity = "0";
//   }
//
//   if (
//     document.body.scrollTop == learningTitle2.getBoundingClientRect().top ||
//     document.documentElement.scrollTop ==
//       learningTitle2.getBoundingClientRect().top
//   ) {
//     learningTitle2.style.background = "#fff";
//     learningButton2.style.opacity = "1";
//   } else {
//     learningTitle2.style.background = "none";
//     learningButton2.style.opacity = "0";
//   }
// }






function scrollFunction() {
  const header = document.querySelector(".header");
  let navBar = header.querySelectorAll("a");
  let blueButton = header.querySelector(".blue_button");
  const ourPluses = document.querySelector(".our_pluses");

  if (
    document.body.scrollTop > ourPluses.getBoundingClientRect().bottom ||
    document.documentElement.scrollTop > ourPluses.getBoundingClientRect().bottom
  ) {

    blueButton.style.display = "block";

    header.style.position = "fixed";
    header.style.background = "#fff";
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,.15)";

    navBar.forEach((element) => {
      element.style.color = "#000";
    });

  } else {

    blueButton.style.display = "none";

    header.style.position = "absolute";
    header.style.background = "none";
    header.style.boxShadow = "none";

    navBar.forEach((element) => {
      element.style.color = "#fff";
    });

  }
}










const addScrollAnimation = () => {
  const titles = [
    ".title1",
    ".title2",
    ".title3",
    ".title4",
    ".title5",
    ".title6",
    ".title7",
  ];

  const mainTitle = document.querySelector(".our_pluses__title");

  titles.forEach((title) => {
    const offset = document.querySelector(title);

    ScrollOut({
      targets: title,
      offset: offset.getBoundingClientRect().top - mainTitle.offsetHeight,
    });
  });
};









ScrollOut({
  targets: ".title_animate",
});

ScrollOut({
  targets: ".process_screen_animate",
  threshold: 0.5,
});

ScrollOut({
  targets: ".txt_animate",
});

ScrollOut({
  targets: ".beginning__txt__line",
});

ScrollOut({
  targets: ".learning_screen",
  threshold: 0.4,
});

ScrollOut({
  targets: ".about_learning",
  threshold: 0.2,
});


ScrollOut({
  targets: ".teachers__card",
  threshold: 0.2,
});
