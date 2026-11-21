const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
if (menu && nav) {
  menu.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  }));
}

const form = document.getElementById('enquiryForm');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const value = key => String(data.get(key) || '').trim();
    const message = `Hello Gurpani,

I would like to make an enquiry.

Name: ${value('name')}
Mobile: ${value('mobile')}
Email: ${value('email')}
Enquiry type: ${value('customerType')}
Product interest: ${value('product')}
Approx. quantity: ${value('quantity')}
City / delivery location: ${value('location')}
Message: ${value('message')}`;

    window.open('https://wa.me/918745863882?text=' + encodeURIComponent(message), '_blank', 'noopener');
  });
}
