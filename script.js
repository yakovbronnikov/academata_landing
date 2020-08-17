history.pushState('', document.title, window.location.pathname);




window.onscroll = function () {
  scrollFunction();
};




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

  const levels = document.querySelector('.levels').getBoundingClientRect().top;
  const up = document.querySelector('.scroll_up__button');

  if (levels < 0){
    up.style.transform = 'scale(1)';
  } else {
    up.style.transform = 'scale(0)';
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
  threshold: 0.2
});
