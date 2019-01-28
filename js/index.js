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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Update Navbar on Index.html by only using the siteContent JSON object in index.html
let navbar = document.getElementsByTagName('nav');
let navbarElements = document.querySelectorAll('a');

let navbarElement1 = navbarElements[0];
navbarElement1.textContent = siteContent.nav["nav-item-1"];
navbarElement1.style.color = 'green';

let navbarElement2 = navbarElements[1];
navbarElement2.textContent = siteContent.nav["nav-item-2"];
navbarElement2.style.color = 'green';

let navbarElement3 = navbarElements[2];
navbarElement3.textContent = siteContent.nav["nav-item-3"];
navbarElement3.style.color = 'green';

let navbarElement4 = navbarElements[3];
navbarElement4.textContent = siteContent.nav["nav-item-4"];
navbarElement4.style.color = 'green';

let navbarElement5 = navbarElements[4];
navbarElement5.textContent = siteContent.nav["nav-item-5"];
navbarElement5.style.color = 'green';

let navbarElement6 = navbarElements[5];
navbarElement6.textContent = siteContent.nav["nav-item-6"];
navbarElement6.style.color = 'green';

// CTA
let h1 = document.querySelector('h1');
h1.textContent = siteContent.cta.h1;

let button = document.querySelector('button');
button.textContent = siteContent.cta.button;

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

// Main Content - Top Content

let topContent = document.querySelectorAll('.top-content')[0];
let topTextContent1 = topContent.children[0];

let h4TopContent1 = topTextContent1.children[0];
h4TopContent1.textContent = siteContent["main-content"]["features-h4"];

let pTopContent1 = topTextContent1.children[1];
pTopContent1.textContent = siteContent["main-content"]["features-content"];

let topTextContent2 = topContent.children[1];

let h4TopContent2 = topTextContent2.children[0];
h4TopContent2.textContent = siteContent["main-content"]["about-h4"];

let pTopContent2 = topTextContent2.children[1];
pTopContent2.textContent = siteContent["main-content"]["about-content"];

// Main Content - Middle Image

let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Main Content - Bottom Content

// Create variable called bottom-content and assign it to div class="bottom-content"

let bottomContent = document.querySelector('.bottom-content');

let bottomTextContent1 = bottomContent.children[0];

let h4BottomContent1 = bottomTextContent1.children[0];
h4BottomContent1.textContent = siteContent["main-content"]["services-h4"];

let pBottomContent1 = bottomTextContent1.children[1];
pBottomContent1.textContent = siteContent["main-content"]["services-content"];

let bottomTextContent2 = bottomContent.children[1];

let h4BottomContent2 = bottomTextContent2.children[0];
h4BottomContent2.textContent = siteContent["main-content"]["product-h4"];

let pBottomContent2 = bottomTextContent2.children[1];
pBottomContent2.textContent = siteContent["main-content"]["product-content"];

let bottomTextContent3 = bottomContent.children[2];

let h4BottomContent3 = bottomTextContent3.children[0];
h4BottomContent3.textContent = siteContent["main-content"]["vision-h4"];

let pBottomContent3 = bottomTextContent3.children[1];
pBottomContent3.textContent = siteContent["main-content"]["vision-content"];

// Contact Section

let contactSection = document.querySelector('.contact');

let h4Contact = contactSection.children[0];
h4Contact.textContent = siteContent["contact"]["contact-h4"];

let pContact1 = contactSection.children[1];
pContact1.textContent = siteContent["contact"]["address"];

let pContact2 = contactSection.children[2];
pContact2.textContent = siteContent["contact"]["phone"];

let pContact3 = contactSection.children[3];
pContact3.textContent = siteContent["contact"]["email"];

// Footer Section
let footerSection = document.getElementsByTagName('footer')[0];
let pFooter = footerSection.children[0];
pFooter.textContent = siteContent["footer"]["copyright"];