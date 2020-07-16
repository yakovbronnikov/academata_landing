

setTimeout(() => {
  window.scrollTo(0, 0);
  addScrollAnimation()
}, 0);

window.onscroll = function() {
  scrollFunction()
};


function scrollFunction() {

  const header = document.querySelector('.header')
  let navBar = header.querySelectorAll('a')
  let blueButton = header.querySelector('.blue_button')

    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        header.style.position = "fixed";
        header.style.background = "#fff";
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,.15)";
        navBar.forEach((element)=>{
          element.style.color = "#000"
        });
        blueButton.style.display = "block";
    } else {
        header.style.position = "absolute";
        header.style.background = "none";
        header.style.boxShadow = "none";
        navBar.forEach((element)=>{
          element.style.color = "#fff"
        });
        blueButton.style.display = "none";
    }
}

const addScrollAnimation = () => {
  const titles = ['.title1', '.title2', '.title3', '.title4', '.title5', '.title6', '.title7']

  const mainTitle = document.querySelector('.our_pluses__title');

  titles.forEach(title => {
    const offset = document.querySelector(title);

    ScrollOut({
      targets: title,
      offset: offset.getBoundingClientRect().top - mainTitle.offsetHeight
    });
  })
}
//
// let title1 = document.querySelector('.title1');
// let title2 = document.querySelector('.title2');
// let title3 = document.querySelector('.title3');
// let title4 = document.querySelector('.title4');
// let title5 = document.querySelector('.title5');
// let title6 = document.querySelector('.title6');
// let title7 = document.querySelector('.title7');

//
// ScrollOut({
//   targets: ".title1",
//   offset: title1.getBoundingClientRect().top - mainTitle.offsetHeight
// });
//
//
// ScrollOut({
//   targets: ".title2",
//   offset: title2.getBoundingClientRect().top - mainTitle.offsetHeight
// });
//
// ScrollOut({
//   targets: ".title3",
//   offset: title3.getBoundingClientRect().top - mainTitle.offsetHeight
// });
//
// ScrollOut({
//   targets: ".title4",
//   offset: title4.getBoundingClientRect().top - mainTitle.offsetHeight
// });
//
// ScrollOut({
//   targets: ".title5",
//   offset: title5.getBoundingClientRect().top - mainTitle.offsetHeight
// });
//
// ScrollOut({
//   targets: ".title6",
//   offset: title6.getBoundingClientRect().top - mainTitle.offsetHeight
// });
//
// ScrollOut({
//   targets: ".title7",
//   offset: title7.getBoundingClientRect().top - mainTitle.offsetHeight
// });



ScrollOut({
  targets: ".title_animate"
});



ScrollOut({
  targets: ".process_screen_animate",
  threshold: .5
});




ScrollOut({
  targets: ".txt_animate"
});



ScrollOut({
  targets: ".beginning__txt__line"
});
