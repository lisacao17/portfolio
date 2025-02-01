const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  if (document.getElementById("imges").getAttribute("src") == "images/main-photo-light.png") {
    document.getElementById("imges").src = "images/main-photo-dark.png";
  }
  else{
    document.getElementById("imges").src = "images/main-photo-light.png";
  }
})

/*
const toggleButton = document.getElementsByClassName('toggle-button')
console.log("test");
const navbarLinks = document.getElementsByClassName('navbar-links')

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
*/
