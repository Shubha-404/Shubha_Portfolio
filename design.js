document.addEventListener('DOMContentLoaded', function () {
  var typed = new Typed('#element', {
    strings: ['Electrical Engineer', 'Front End Developer', 'App Developer'],
    typeSpeed: 50,
    startDelay: 500,
    loop: true,
  });

  // gsap.to('.home', { y: -30, duration: 2, ease: 'power2.inOut' });
  // document.querySelector('.home').classList.add('show');
});

ScrollReveal().reveal(".home", {deasing: 'ease-in', delay: 100,duration: 3000, reset: true});
ScrollReveal().reveal(".aboutme .description , .left_about", {deasing: 'ease-in', delay: 100,duration: 3000, reset: true});
ScrollReveal().reveal(".qualification .container , .right_qualification", {deasing: 'ease-in', delay: 100,duration: 3000, reset: true});
ScrollReveal().reveal(".skill_container", {deasing: 'ease-in', delay: 100,duration: 3000, reset: true});



function changeBackgroundColor(event) {
  event.preventDefault(); // Prevent the link from navigating (optional)
  
  var socialLink = event.target;
  socialLink.style.backgroundColor = "white"; // Change the background color to red
}

