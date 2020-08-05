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













function scrollFunction()  {

  const processTitle = document.querySelector('.process_steps__title');
  const processCoords = processTitle.getBoundingClientRect().top;

  const plusesTitle = document.querySelector('.our_pluses__title');

  const beginningCoords = document.querySelector('.beginning').getBoundingClientRect().top;

  const techersTitle = document.querySelector('.teachers__title');

  const helpForm = document.querySelector('.help_form').getBoundingClientRect().top;


  if (processCoords <= 0) {
    plusesTitle.style.position = 'static';
  } else {
    plusesTitle.style.position = 'sticky';
  }


  if (beginningCoords <= 0) {
    processTitle.style.position = 'static';
  } else {
    processTitle.style.position = 'sticky';
  }

  if (helpForm <= 0) {
    techersTitle.style.position = 'static';
  } else {
    techersTitle.style.position = 'sticky';
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
  targets: ".process_steps__title",
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
