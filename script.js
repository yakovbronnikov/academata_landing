history.pushState('', document.title, window.location.pathname);




window.onscroll = function () {
  scrollFunction();
};


let rellax = new Rellax('.rellax');



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




  const bannerTitle = document.querySelector('.banner__title');
  const bannerImg1 = document.querySelector('.banner__img__1');
  const bannerImg2 = document.querySelector('.banner__img__2');
  const bannerImg3 = document.querySelector('.banner__img__3');
  const bannerImg4 = document.querySelector('.banner__img__4');
  const bannerButton = document.querySelector('.banner .blue_button');
  let scroll = document.documentElement.scrollTop;
  const clentWidth = document.documentElement.clientWidth;


  bannerTitle.style.opacity = `${1-scroll*0.002}`;
  bannerImg1.style.opacity = `${1-scroll*0.005}`;
  bannerButton.style.opacity = `${1-scroll*0.007}`;
  bannerImg2.style.opacity = `${scroll*0.005}`;
  bannerImg3.style.opacity = `${scroll*0.005}`;
  bannerImg4.style.opacity = `${scroll*0.005}`;

  if (clentWidth < 768) {
    bannerTitle.style.opacity = `${1-scroll*0.005}`;
    bannerImg1.style.opacity = `${1-scroll*0.007}`;
    bannerImg2.style.opacity = `${scroll*0.01}`;
  }
}



const drawer = document.querySelector('#drawer');
// const drawerNav = document.querySelectorAll('.drawer__nav a');
//
// drawerNav.forEach((nav) =>{
//   nav.addEventLitener
// });

function drawerClose(){
  drawer.checked = false;
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
