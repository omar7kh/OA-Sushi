// Start Contact
(function () {
  var forms = document.querySelectorAll('.success');

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      },
      false
    );
  });
})();
// End Contact

//Start NavLinks color
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav .active').forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('links-color-not-scrolled');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 74) {
        link.classList.add('links-color-scrolled');
      } else {
        link.classList.add('links-color-not-scrolled');
        link.classList.remove('links-color-scrolled');
      }
    });
  }
});
//End NavLinks color

// Start Check Zip Length
const checkZip = document.getElementById('zip');
if (checkZip) {
  checkZip.oninput = () => {
    if (checkZip.value.length > checkZip.maxLength)
      checkZip.value = checkZip.value.slice(0, checkZip.maxLength);
  };
}
// End Check Zip Length

// Start Add card to cartPage
const arr = [];
const counter = document.querySelector('.cart-counter');
counter.innerText = arr.length;

if (arr.length > 0) {
  const cartTitle = document.querySelector('#cart-title');
  cartTitle.style.display = 'none';
} else {
  const cartTitle = document.querySelector('#cart-title');
  cartTitle.style.display = 'block';
}

function AddToCart(el) {
  const menuContent = {
    img: el.target.parentElement.parentElement.children[0].src,
    title: el.target.parentElement.children[0].children[0].innerText,
    price: el.target.parentElement.children[0].children[1].innerText,
    disc: el.target.parentElement.children[1].innerText,
  };
  const filter = arr.filter((el) => el.title === menuContent.title);
  if (!filter.length) {
    arr.push(menuContent);
    counter.innerText = arr.length;
    var page = document.querySelector('.cart-page');
    page.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
      const card = `
        <div class="d-flex align-items-start">
            <img class="me-3 rounded" src=${arr[i].img} alt="menu-img-1">
            <div class="flex-fill">
                <div class="d-flex justify-content-between">
                    <h5>${arr[i].title}</h5>
                    <span>${arr[i].price.slice(0, -1)} €</span>
                </div>
                <p class="m-0">${arr[i].disc}</p>
            </div>
        </div>`;
      page.innerHTML += card;
    }
    console.log(arr);
  }
}
// End Add card to cartPage

// Start Hide cartPage
function cartPage() {
  var page = document.querySelector('.cart-page');

  if (page.style.right === '-100%') {
    page.style.right = '0px';
    document.body.style.overflow = 'hidden';
  } else {
    page.style.right = '-100%';
    document.body.style.overflow = 'visible';
  }
}
// End Hide cartPage

// Start NavbarColor on scroll
const navScrolled = document.querySelector('nav');
const navLink = document.querySelectorAll('.nav-link');
const logo = document.querySelector('.navbar-logo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 74) {
    navScrolled.classList.add('navbar-scrolled');
    logo.classList.add('nav-link-scrolled');
    navLink.forEach((link) => {
      link.classList.add('nav-link-scrolled');
    });
  } else {
    navScrolled.classList.remove('navbar-scrolled');
    logo.classList.remove('nav-link-scrolled');
    navLink.forEach((link) => {
      link.classList.remove('nav-link-scrolled');
    });
  }
});
// End NavbarColor on scroll

// Start nav and navLinks color on pageWidth < 992px
const navColor = document.querySelector('nav');
const navbarLogo = document.querySelector('.navbar-logo');
const cartIcon = document.querySelector('.cart-icon');
const navLinksColor = document.querySelectorAll('.nav-link');

function navbarLogoHover() {
  navbarLogo.style.color = 'var(--text-dark)';
}

function navbarLogoMouseOut() {
  navbarLogo.style.color = '';
}

function cartIconHover() {
  cartIcon.style.color = 'var(--text-dark)';
}

function cartIconMouseOut() {
  cartIcon.style.color = '';
}

function navLinkHover() {
  this.style.color = 'var(--text-dark)';
}

function navLinkMouseOut() {
  this.style.color = '';
}

function setNavColor() {
  if (
    window.innerWidth < 992 &&
    window.location.pathname.includes('index.html')
  ) {
    navColor.style.backgroundColor = 'var(--orange-color';

    navbarLogo.addEventListener('mouseover', navbarLogoHover);
    navbarLogo.addEventListener('mouseout', navbarLogoMouseOut);

    cartIcon.addEventListener('mouseover', cartIconHover);
    cartIcon.addEventListener('mouseout', cartIconMouseOut);

    navLinksColor.forEach((navLink) => {
      navLink.addEventListener('mouseover', navLinkHover);
      navLink.addEventListener('mouseout', navLinkMouseOut);
    });
  } else {
    navColor.style.backgroundColor = '';

    navbarLogo.removeEventListener('mouseover', navbarLogoHover);
    navbarLogo.removeEventListener('mouseout', navbarLogoMouseOut);

    cartIcon.removeEventListener('mouseover', cartIconHover);
    cartIcon.removeEventListener('mouseout', cartIconMouseOut);

    navLinksColor.forEach((navLink) => {
      navLink.removeEventListener('mouseover', navLinkHover);
      navLink.removeEventListener('mouseout', navLinkMouseOut);
    });
  }
}

setNavColor();
window.addEventListener('resize', setNavColor);
// End nav and navLinks color on pageWidth < 992px
