window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const listToChangeColor = document.querySelector('.change-color');
    const nav = document.querySelector('.whitepart');
    const popin = document.querySelector('.main');
    const linksToChangeColor = listToChangeColor.querySelectorAll('li a');
  
    if (scrollPosition >= 700) {
      listToChangeColor.classList.add('scrolled');
      nav.classList.add('scrolled');
      popin.classList.add('scrolled');
      linksToChangeColor.forEach(link => link.classList.add('scrolled'));
    } else {
      listToChangeColor.classList.remove('scrolled');
      popin.classList.remove('scrolled');
      nav.classList.remove('scrolled');
      linksToChangeColor.forEach(link => link.classList.remove('scrolled'));
    }
  });
  
  function toggleNavbar() {
          var navbarLinks = document.getElementById("listitem");
          navbarLinks.classList.toggle("show");
  }

  


          
  