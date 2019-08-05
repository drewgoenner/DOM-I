const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navLink = document.querySelectorAll('a');
navLink[0].setAttribute ('class', siteContent['nav']['nav-item-1']);
navLink[0].text = 'Services';
navLink[0].style.color = 'green';
navLink[1].setAttribute ('class', siteContent['nav']['nav-item-2']);
navLink[1].text = 'Product';
navLink[1].style.color = 'green';
navLink[2].setAttribute ('class', siteContent['nav']['nav-item-3']);
navLink[2].text = 'Vision';
navLink[2].style.color = 'green';
navLink[3].setAttribute ('class', siteContent['nav']['nav-item-4']);
navLink[3].text = 'Features';
navLink[3].style.color = 'green';
navLink[4].setAttribute ('class', siteContent['nav']['nav-item-5']);
navLink[4].text = 'About';
navLink[4].style.color = 'green';
navLink[5].setAttribute ('class', siteContent['nav']['nav-item-6']);
navLink[5].textContent = siteContent['nav']['nav-item-6'];
navLink[5].style.color = 'green';



const ctaH1 = document.querySelector('h1');
ctaH1.setAttribute('style', 'white-space: pre;');
ctaH1.textContent = 'DOM \r \n';
ctaH1.textContent += 'Is \r \n';
ctaH1.textContent += 'Awesome';

const buttonText = document.querySelector('button');
buttonText.textContent = siteContent['cta']['button'];

const ctaLogo = document.querySelector('#cta-img');
ctaLogo.setAttribute('src', siteContent['cta']['img-src']);

const heads = document.querySelectorAll('h4');
heads[0].setAttribute ('class', siteContent['main-content']['features-h4']);
heads[0].textContent = siteContent['main-content']['features-h4'];
heads[1].setAttribute ('class', siteContent['main-content']['about-h4']);
heads[1].textContent = siteContent['main-content']['about-h4'];
heads[2].setAttribute ('class', siteContent['main-content']['services-h4']);
heads[2].textContent = siteContent['main-content']['services-h4'];
heads[3].setAttribute ('class', siteContent['main-content']['product-h4']);
heads[3].textContent = siteContent['main-content']['product-h4'];
heads[4].setAttribute ('class', siteContent['main-content']['vision-h4']);
heads[4].textContent = siteContent['main-content']['vision-h4'];

const text = document.querySelectorAll('p');
text[0].setAttribute ('class', siteContent['main-content']['features-content']);
text[0].textContent = siteContent['main-content']['features-content'];
text[1].setAttribute ('class', siteContent['main-content']['about-content']);
text[1].textContent = siteContent['main-content']['about-content'];
text[2].setAttribute ('class', siteContent['main-content']['services-content']);
text[2].textContent = siteContent['main-content']['services-content'];
text[3].setAttribute ('class', siteContent['main-content']['product-content']);
text[3].textContent = siteContent['main-content']['product-content'];
text[4].setAttribute ('class', siteContent['main-content']['vision-content']);
text[4].textContent = siteContent['main-content']['vision-content'];

const midImg = document.querySelector('#middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const contHead = document.querySelector('.contact h4');
contHead.setAttribute ('class', siteContent['contact']['contact-h4']);
contHead.textContent = siteContent['contact']['contact-h4'];

const contText = document.querySelectorAll('.contact p');
contText[0].setAttribute ('style', 'white-space: pre;');
contText[0].textContent = '123 Way 456 Street \r \n';
contText[0].textContent += 'Somewhere, USA';
contText[1].setAttribute ('class', siteContent['contact']['phone']);
contText[1].textContent = siteContent['contact']['phone'];
contText[2].setAttribute ('class', siteContent['contact']['email']);
contText[2].textContent = siteContent['contact']['email'];

const footText = document.querySelector('footer p');
footText.setAttribute = siteContent['footer']['copyright'];
footText.textContent = siteContent['footer']['copyright'];

const zoom = document.createElement('a');
zoom.href= '#';
zoom.textContent = 'Zoom!';
zoom.style.color = 'green';

const pow = document.createElement('a');
pow.href='#';
pow.textContent = 'Pow!';
pow.style.color = 'green';



const Nav = document.querySelector('nav');
Nav.prepend(zoom);
Nav.append(pow);













