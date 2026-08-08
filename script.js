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
    const hindi=document.documentElement.lang==='hi';
    const text = hindi
? `नमस्ते Gurpani,

मैं B2B पूछताछ करना चाहता/चाहती हूँ।

कंपनी / संस्था: ${v('company')}
नाम: ${v('name')}
मोबाइल: ${v('mobile')}
ईमेल: ${v('email')}
पूछताछ का प्रकार: ${v('type')}
उत्पाद: ${v('product')}
अनुमानित मात्रा: ${v('quantity')}
शहर / डिलीवरी स्थान: ${v('location')}
संदेश: ${v('message')}`
: `Hello Gurpani,

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

/* =========================================================
   GURPANI DYNAMIC LANGUAGE LAYER
   English remains the default/current site. Hindi is applied
   only after the user selects हिंदी. No page reload.
   ========================================================= */
(function(){
  const translations = {
    "nav a:nth-child(1)": "उत्पाद",
    "nav a:nth-child(2)": "B2B समाधान",
    "nav a:nth-child(3)": "हमारे बारे में",
    "nav a:nth-child(4)": "पूछताछ",
    ".floating-wa span": "WhatsApp",
    ".kicker": "GURPANI BEVERAGES · केवल B2B",
    ".hero h1": "हाइड्रेशन<br><span>व्यवसाय के लिए।</span>",
    ".hero .lead": "आधुनिक भारतीय पेय, थोक खरीद, सैंपलिंग, आयोजनों, हॉस्पिटैलिटी और संस्थागत आपूर्ति के लिए तैयार।",
    ".hero-actions .gold": "थोक कोटेशन का अनुरोध करें",
    ".hero-actions .outline": "उत्पाद देखें",
    ".trust-line span:nth-of-type(1)": "थोक आपूर्ति",
    ".trust-line span:nth-of-type(2)": "सैंपलिंग",
    ".trust-line span:nth-of-type(3)": "संस्थागत",
    ".trust-line span:nth-of-type(4)": "आयोजन",
    ".hero-card-label span": "एल्कलाइन ड्रिंक",
    ".notice-inner strong": "केवल B2B खरीद",
    ".notice-inner span": "डिस्ट्रीब्यूटर्स, रिटेलर्स, होटल, रेस्टोरेंट, संस्थान, आयोजन, कॉर्पोरेट आवश्यकताओं और थोक खरीदारों के लिए।",
    ".notice-inner a": "पूछताछ शुरू करें →",
    ".products .eyebrow": "01 / उत्पाद पोर्टफोलियो",
    ".products .section-head h2": "दो केंद्रित उत्पाद।<br><span>एक स्पष्ट ब्रांड।</span>",
    ".products .section-head > p": "हमने शुरुआती पोर्टफोलियो को जानबूझकर सीमित रखा है — समझने में आसान, खरीदने में आसान और बड़े स्तर पर आपूर्ति के लिए तैयार।",
    ".product-card:nth-child(1) .product-type": "फंक्शनल हाइड्रेशन",
    ".product-card:nth-child(1) h3": "Gurpani<br><span>एल्कलाइन ड्रिंक</span>",
    ".product-card:nth-child(1) .product-info p": "Gurpani की विशिष्ट गुड़-प्रेरित पहचान के साथ एक आधुनिक हाइड्रेशन विकल्प। थोक कार्यक्रमों और सैंपलिंग के लिए उपलब्ध।",
    ".product-card:nth-child(1) .tags span:nth-child(1)": "500 mL",
    ".product-card:nth-child(1) .tags span:nth-child(2)": "थोक आपूर्ति",
    ".product-card:nth-child(1) .tags span:nth-child(3)": "सैंपलिंग",
    ".product-card:nth-child(2) .product-type": "दैनिक हाइड्रेशन",
    ".product-card:nth-child(2) h3": "Gurpani<br><span>मिनरल वॉटर</span>",
    ".product-card:nth-child(2) .product-info p": "साफ सफेद प्रस्तुति के साथ Gurpani गुड़ पाउच कॉन्सेप्ट — हॉस्पिटैलिटी, आयोजनों और संस्थागत कार्यक्रमों के लिए उपयुक्त।",
    ".product-card:nth-child(2) .tags span:nth-child(1)": "500 mL",
    ".product-card:nth-child(2) .tags span:nth-child(2)": "गुड़ पाउच",
    ".product-card:nth-child(2) .tags span:nth-child(3)": "थोक आपूर्ति",
    ".solutions .eyebrow": "02 / B2B समाधान",
    ".solutions-head h2": "एक सप्लायर।<br><span>कई उपयोग।</span>",
    ".solutions-head > p": "हमें बताएं कि आपको क्या चाहिए, कहां चाहिए और अनुमानित मात्रा क्या है। हम सही पैक, सप्लाई मॉडल और सैंपलिंग योजना तय करने में मदद करेंगे।",
    ".solution-grid > div:nth-child(1) h3": "थोक खरीद",
    ".solution-grid > div:nth-child(1) p": "डिस्ट्रीब्यूटर्स, रिटेलर्स, ऑफिस, संस्थानों और नियमित खरीद कार्यक्रमों के लिए।",
    ".solution-grid > div:nth-child(2) h3": "सैंपलिंग",
    ".solution-grid > div:nth-child(2) p": "बड़ी व्यावसायिक आवश्यकता तय करने से पहले उत्पाद के सैंपल से शुरुआत करें।",
    ".solution-grid > div:nth-child(3) h3": "आयोजन और हॉस्पिटैलिटी",
    ".solution-grid > div:nth-child(3) p": "होटल, रेस्टोरेंट, कॉन्फ्रेंस, खेल और कॉर्पोरेट आयोजनों के लिए हाइड्रेशन सप्लाई।",
    ".solution-grid > div:nth-child(4) h3": "चैनल पार्टनरशिप",
    ".solution-grid > div:nth-child(4) p": "Gurpani उत्पादों के लिए क्षेत्रीय डिस्ट्रीब्यूशन और ट्रेड पार्टनरशिप के अवसर।",
    ".process .eyebrow": "03 / प्रक्रिया",
    ".process h2": "पूछताछ से<br><span>आपूर्ति तक आसान।</span>",
    ".process-grid > div:nth-child(1) h3": "अपनी आवश्यकता बताएं",
    ".process-grid > div:nth-child(1) p": "उत्पाद, मात्रा, स्थान और उपयोग बताएं।",
    ".process-grid > div:nth-child(2) h3": "सैंपलिंग / चर्चा",
    ".process-grid > div:nth-child(2) p": "हम उत्पाद और व्यावसायिक आवश्यकता पर सहमति बनाते हैं।",
    ".process-grid > div:nth-child(3) h3": "व्यावसायिक कोटेशन",
    ".process-grid > div:nth-child(3) p": "हम उपयुक्त B2B सप्लाई प्रस्ताव साझा करते हैं।",
    ".process-grid > div:nth-child(4) h3": "आपूर्ति",
    ".process-grid > div:nth-child(4) p": "सहमति वाली खरीद योजना के साथ आगे बढ़ें।",
    ".about .eyebrow": "04 / हमारे बारे में",
    ".about-copy h2": "भारतीय पहचान।<br><span>आधुनिक पेय सोच।</span>",
    ".about-copy p:nth-of-type(1)": "Gurpani को भारतीय बाजार के लिए एक केंद्रित पेय ब्रांड के रूप में विकसित किया जा रहा है — परिचित गुड़-प्रेरित पहचान को साफ और आधुनिक हाइड्रेशन फॉर्मेट के साथ जोड़ते हुए।",
    ".about-copy p:nth-of-type(2)": "हमारा B2B दृष्टिकोण व्यावहारिक है: केंद्रित उत्पाद, बड़े स्तर पर उपलब्ध फॉर्मेट, स्पष्ट संवाद और पूछताछ से आपूर्ति तक सरल प्रक्रिया।",
    ".about-points span:nth-child(1)": "आधुनिक ब्रांडिंग",
    ".about-points span:nth-child(2)": "वैल्यू-आधारित फॉर्मेट",
    ".about-points span:nth-child(3)": "B2B केंद्रित",
    ".enquiry-intro .eyebrow": "05 / B2B पूछताछ",
    ".enquiry-intro h2": "आपकी आवश्यकता पर<br><span>बात करते हैं।</span>",
    ".enquiry-intro > p": "थोक खरीद, डिस्ट्रीब्यूशन, संस्थागत आपूर्ति या उत्पाद सैंपलिंग के लिए नीचे अपनी जानकारी साझा करें।",
    ".direct-contact > span": "WhatsApp पसंद है?",
    ".form > .form-row:nth-child(1) label:nth-child(1)": "कंपनी / संस्था",
    ".form > .form-row:nth-child(1) label:nth-child(2)": "आपका नाम",
    ".form > .form-row:nth-child(2) label:nth-child(1)": "मोबाइल नंबर",
    ".form > .form-row:nth-child(2) label:nth-child(2)": "ईमेल",
    ".form > .form-row:nth-child(3) label:nth-child(1)": "पूछताछ का प्रकार",
    ".form > .form-row:nth-child(3) label:nth-child(2)": "उत्पाद",
    ".form > .form-row:nth-child(4) label:nth-child(1)": "अनुमानित मात्रा",
    ".form > .form-row:nth-child(4) label:nth-child(2)": "शहर / डिलीवरी स्थान",
    ".form > label:last-of-type": "संदेश",
    ".form .submit": "WhatsApp पर B2B पूछताछ भेजें →",
    ".form-note": "आपकी दर्ज की गई जानकारी के साथ पूछताछ सीधे WhatsApp में खुलेगी।",
    ".footer-brand span": "B2B पेय",
    ".footer-links a:nth-child(1)": "उत्पाद",
    ".footer-links a:nth-child(2)": "समाधान",
    ".footer-links a:nth-child(3)": "पूछताछ",
    ".footer-contact span": "पूछताछ के लिए संपर्क करें",
    ".footer-contact a": "WhatsApp · 8745863882"
  };

  const original = new Map();
  Object.keys(translations).forEach(selector=>{
    const el=document.querySelector(selector);
    if(el) original.set(selector,el.innerHTML);
  });

  const selectTranslations = {
    "select[name='type']":[
      ["","आवश्यकता चुनें"],
      ["Bulk Buying","थोक खरीद"],
      ["Product Sampling","उत्पाद सैंपलिंग"],
      ["Distributor / Channel Partnership","डिस्ट्रीब्यूटर / चैनल पार्टनरशिप"],
      ["Events / Hospitality","आयोजन / हॉस्पिटैलिटी"],
      ["Institutional Supply","संस्थागत आपूर्ति"]
    ],
    "select[name='product']":[
      ["","उत्पाद चुनें"],
      ["Gurpani Alkaline Drink","Gurpani एल्कलाइन ड्रिंक"],
      ["Gurpani Mineral Water","Gurpani मिनरल वॉटर"],
      ["Both Products","दोनों उत्पाद"]
    ]
  };

  const originalOptions={};
  Object.keys(selectTranslations).forEach(selector=>{
    const el=document.querySelector(selector);
    if(el) originalOptions[selector]=Array.from(el.options).map(o=>[o.value,o.textContent]);
  });

  const placeholders={
    "input[name='company']":"कंपनी का नाम",
    "input[name='name']":"संपर्क व्यक्ति",
    "input[name='mobile']":"10 अंकों का मोबाइल नंबर",
    "input[name='email']":"name@company.com",
    "input[name='quantity']":"जैसे 5,000 बोतल / माह",
    "input[name='location']":"शहर, राज्य",
    "textarea[name='message']":"अपनी आवश्यकता, समयसीमा या सैंपलिंग अनुरोध के बारे में बताएं।"
  };
  const originalPlaceholders={};
  Object.keys(placeholders).forEach(selector=>{
    const el=document.querySelector(selector);
    if(el) originalPlaceholders[selector]=el.getAttribute("placeholder")||"";
  });

  function setLanguage(lang){
    const hindi=lang==="hi";
    document.documentElement.lang=hindi?"hi":"en";

    Object.entries(translations).forEach(([selector,text])=>{
      const el=document.querySelector(selector);
      if(el) el.innerHTML=hindi?text:original.get(selector);
    });

    Object.entries(selectTranslations).forEach(([selector,options])=>{
      const el=document.querySelector(selector);
      if(!el) return;
      const source=hindi?options:originalOptions[selector];
      el.innerHTML="";
      source.forEach(([value,text])=>{
        const option=document.createElement("option");
        option.value=value;
        option.textContent=text;
        el.appendChild(option);
      });
    });

    Object.entries(placeholders).forEach(([selector,text])=>{
      const el=document.querySelector(selector);
      if(el) el.placeholder=hindi?text:originalPlaceholders[selector];
    });

    document.querySelectorAll(".language-option").forEach(btn=>{
      const active=btn.dataset.lang===lang;
      btn.classList.toggle("active",active);
      btn.setAttribute("aria-pressed",String(active));
    });

    const waText=hindi
      ?"नमस्ते Gurpani, मैं B2B पूछताछ करना चाहता/चाहती हूँ।"
      :"Hello Gurpani, I am interested in a B2B enquiry.";
    const waHref="https://wa.me/918745863882?text="+encodeURIComponent(waText);
    document.querySelectorAll(".floating-wa,.direct-contact a,.footer-contact a").forEach(a=>{
      if(a.tagName==="A") a.href=waHref;
    });

    document.title=hindi?"Gurpani Beverages | B2B हाइड्रेशन":"Gurpani Beverages | B2B Hydration";
    const meta=document.querySelector('meta[name="description"]');
    if(meta) meta.content=hindi
      ?"Gurpani Beverages — थोक खरीद, सैंपलिंग, हॉस्पिटैलिटी, आयोजनों और संस्थागत आवश्यकताओं के लिए B2B हाइड्रेशन समाधान।"
      :"Gurpani Beverages — B2B hydration solutions for bulk buying, sampling, hospitality, events and institutional requirements.";

  }

  document.querySelectorAll(".language-option").forEach(btn=>{
    btn.addEventListener("click",()=>setLanguage(btn.dataset.lang));
  });

  setLanguage("en");
})();


/* iOS/mobile language selector touch fix.
   Uses pointerup/click fallback and event delegation so the control remains clickable
   even when the mobile navigation/header is layered above it. */
(function () {
  const selectors = [
    '[data-lang="hi"]',
    '[data-language="hi"]',
    '#lang-hi',
    '#language-hi',
    '.lang-hi',
    '.language-hi',
    '[data-lang="en"]',
    '[data-language="en"]',
    '#lang-en',
    '#language-en',
    '.lang-en',
    '.language-en'
  ].join(',');

  let lastTouch = 0;

  function activateLanguageControl(el) {
    if (!el) return;
    const now = Date.now();
    if (now - lastTouch < 350) return;
    lastTouch = now;

    // Trigger the existing click handler rather than replacing its translation logic.
    el.click();
  }

  document.addEventListener('pointerup', function (event) {
    const el = event.target.closest && event.target.closest(selectors);
    if (el) activateLanguageControl(el);
  }, { passive: true });

  document.addEventListener('touchend', function (event) {
    const el = event.target.closest && event.target.closest(selectors);
    if (el) activateLanguageControl(el);
  }, { passive: true });

  // Ensure controls are keyboard accessible as well.
  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const el = event.target.closest && event.target.closest(selectors);
    if (el) {
      event.preventDefault();
      el.click();
    }
  });
})();
