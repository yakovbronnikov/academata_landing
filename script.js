




history.pushState('', document.title, window.location.pathname);




window.onscroll = function () {
  scrollFunction();
};

window.addEventListener("mousemove", cursor);

setTimeout(() => {
  window.scrollTo(0, 0);
}, 0);

const mouseCursor = document.querySelector(".cursor");
let learningScreen = document.querySelectorAll(
  ".learning_screen__button, .header2 .header__nav a, .form_close"
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
  const processSubtitle = document.querySelector('.process_steps__title h1');
  const processDescription = document.querySelector('.process_steps__title h4');
  const processCoords = processTitle.getBoundingClientRect().top;

  const plusesTitle = document.querySelector('.our_pluses__title');

  const beginningCoords = document.querySelector('.beginning').getBoundingClientRect().top;

  const techersTitle = document.querySelector('.teachers__title');

  const helpForm = document.querySelector('.help_form').getBoundingClientRect().top;

  let boxes = document.querySelectorAll('#box1, #box2, #box3, #box4, #box5, #box6');


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

  // if (helpForm <= 0) {
  //   techersTitle.style.position = 'static';
  // } else {
  //   techersTitle.style.position = 'sticky';
  // }



  const promptWindow = document.querySelector('.scroll_prompt__window');

  const nextImg = document.querySelector('.next img');
  const prev = document.querySelector('.previous');
  const up = document.querySelector('.scroll_up__button');

  if (document.documentElement.scrollTop > 0){
    promptWindow.classList.remove('scroll_prompt__window__banner');
    nextImg.style.display = 'none';
    prev.style.display = 'block';
    up.style.display = 'block';
  } else {
    promptWindow.classList.add('scroll_prompt__window__banner');
    nextImg.style.display = 'block';
    prev.style.display = 'none';
    up.style.display = 'none';
  }

  const processScreen = document.querySelector('#box14').getBoundingClientRect().top;

  if (processScreen <= 0) {
    processSubtitle.style.opacity = 0.2;
    processDescription.style.opacity = 0.2;
  } else if(processCoords <= 0){
    processSubtitle.style.opacity = 1;
    processDescription.style.opacity = 1;
  }

  const teachersTitle = document.querySelector('.teachers__title');
  const teachersSubtitle = document.querySelector('.teachers__title h1');
  const teachersDescription = document.querySelector('.teachers__title h3');
  const teachersCard = document.querySelector('#box22').getBoundingClientRect().top;

  if (teachersCard <= 0) {
    teachersSubtitle.style.opacity = 0.2;
    teachersDescription.style.opacity = 0.2;
  } else if(teachersCard <= 0){
    teachersSubtitle.style.opacity = 1;
    teachersDescription.style.opacity = 1;
  }


}









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


ScrollOut({
  targets: ".card_animate",
  threshold: 0.5
});
