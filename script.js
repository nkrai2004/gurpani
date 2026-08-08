const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();

const menu=document.getElementById('menu');
const nav=document.getElementById('nav');
if(menu){
  menu.addEventListener('click',()=>{
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });
}
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{if(window.innerWidth<=900) nav.style.display='none';}));

const form=document.getElementById('enquiryForm');
if(form){
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data=new FormData(form);
    const v=(key)=>String(data.get(key)||'').trim();
    const text =
`Hello Gurpani,

I would like to make a B2B enquiry.

Company: ${v('company')}
Name: ${v('name')}
Mobile: ${v('mobile')}
Email: ${v('email')}
Enquiry Type: ${v('type')}
Product: ${v('product')}
Approx. Quantity: ${v('quantity')}
City / Delivery Location: ${v('location')}
Message: ${v('message')}`;

    window.open('https://wa.me/918745863882?text='+encodeURIComponent(text),'_blank','noopener');
  });
}
