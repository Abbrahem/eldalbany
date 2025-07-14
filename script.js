// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission
// Replace the old form submission logic
const orderForm = document.querySelector('.order-form');
if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        // Compose WhatsApp message
        let message = 'طلب جديد عبر الموقع:%0A';
        message += `الاسم الكامل: ${data.name || ''}%0A`;
        message += `رقم الهاتف: ${data.phone || ''}%0A`;
        message += `العنوان: ${data.address || ''}%0A`;
        message += `نوع المازوت: ${data['fuel-type'] || ''}%0A`;
        message += `الكمية المطلوبة: ${data.quantity || ''} لتر%0A`;
        // Send to WhatsApp
        const phone = '9613557235';
        const url = `https://wa.me/${phone}?text=${message}`;
        window.open(url, '_blank');
    });
}

// English translations for all visible text
const translationsEn = {
    logo: "Dalbani Motors Co.",
    nav: [
        "Home",
        "About Us",
        "Services",
        "Order Delivery",
        "Pricing",
        "Contact Us"
    ],
    heroTitle: "Diesel Distribution in Lebanon",
    heroDesc: "We provide high-quality diesel distribution services at competitive prices across Lebanon.",
    heroBtn: "Order Now",
    aboutTitle: "About Us",
    aboutHeading: "Our Company",
    aboutP1: "Dalbani Motors Co. is a leading company in diesel distribution in Lebanon, serving our valued customers for over 50 years.",
    aboutP2: "We have a professional team and modern equipment to ensure safe and fast delivery across all Lebanese regions.",
    aboutP3: "We are committed to the highest standards of quality and safety in all our operations, and we strive for customer satisfaction through excellent service and competitive prices.",
    servicesTitle: "Our Services",
    services: [
        {title: "Home Diesel", desc: "Delivery of diesel to homes and villas in various quantities as needed."},
        {title: "Industrial Diesel", desc: "Diesel distribution services for factories and industrial facilities in large quantities."},
        {title: "Commercial Diesel", desc: "Delivery of diesel to shops, restaurants, and hotels."},
        {title: "Fast Delivery", desc: "Fast delivery service within 24 hours in all areas."},
        {title: "Full Coverage", desc: "We cover all Lebanese regions from north to south."},
        {title: "Quality Assurance", desc: "We guarantee the quality of distributed diesel with quality and safety certificates."}
    ],
    orderTitle: "Order Delivery",
    form: {
        name: "Full Name",
        phone: "Phone Number",
        address: "Address",
        fuelType: "Diesel Type",
        choose: "Choose Diesel Type",
        domestic: "Home Diesel",
        industrial: "Industrial Diesel",
        commercial: "Commercial Diesel",
        quantity: "Required Quantity (L)",
        submit: "Send Order"
    },
    pricingTitle: "Pricing",
    pricingDesc: "Our prices are flexible and change according to the global oil market. We guarantee you the best prices with high quality.",
    priceCardTitle: "Current Prices",
    priceCardP1: "For inquiries about current prices and orders, please contact us by phone or WhatsApp.",
    priceCardP2: "We offer special deals for large quantities and monthly subscriptions.",
    testimonialsTitle: "Customer Reviews",
    testimonials: [
        {text: 'Excellent service and fast delivery. Highly recommended!', name: 'Ahmad Mohammad'},
        {text: 'Competitive prices and high quality. Thank you!', name: 'Fatima Ali'},
        {text: 'Professional team and 24/7 service.', name: 'Nasser Al-Ghazali'}
    ],
    safetyTitle: "Safety & Quality",
    safetyDesc: "We adhere to the highest standards of safety and quality in all our operations.",
    safety: [
        {title: "Safety Standards", desc: "We follow the latest safety standards in transport and storage."},
        {title: "Quality Certificates", desc: "We have all the required certificates to operate in this field."},
        {title: "Safe Transport", desc: "Trucks equipped with the latest safety systems."},
        {title: "Environmental Protection", desc: "We are committed to environmental protection in all our operations."}
    ],
    contactTitle: "Contact Us",
    contactInfo: "Contact Information",
    phone: "+961 3 557 235",
    email: "maymoneltlbany@gmail.com",
    address: "Beirut, Lebanon",
    available: "24/7 Service Available",
    whatsapp: "Contact via WhatsApp",
    footer: "© 2025 Dalbani Motors Co. All rights reserved.",
    manager: "Manager: Maymoun Dalbani"
};

function setEnglish() {
    // Logo
    const logo = document.querySelector('.logo');
    if (logo) logo.childNodes[2].nodeValue = ' ' + translationsEn.logo;
    // Nav
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach((a, i) => { if (translationsEn.nav[i]) a.textContent = translationsEn.nav[i]; });
    // Hero
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) heroTitle.textContent = translationsEn.heroTitle;
    const heroDesc = document.querySelector('.hero p');
    if (heroDesc) heroDesc.textContent = translationsEn.heroDesc;
    const heroBtn = document.querySelector('.hero .cta-button');
    if (heroBtn) heroBtn.textContent = translationsEn.heroBtn;
    // About
    const aboutTitle = document.querySelector('#about .section-title');
    if (aboutTitle) aboutTitle.textContent = translationsEn.aboutTitle;
    const aboutHeading = document.querySelector('.about-text h3');
    if (aboutHeading) aboutHeading.textContent = translationsEn.aboutHeading;
    const aboutPs = document.querySelectorAll('.about-text p');
    if (aboutPs[0]) aboutPs[0].textContent = translationsEn.aboutP1;
    if (aboutPs[1]) aboutPs[1].textContent = translationsEn.aboutP2;
    if (aboutPs[2]) aboutPs[2].textContent = translationsEn.aboutP3;
    // Services
    const servicesTitle = document.querySelector('#services .section-title');
    if (servicesTitle) servicesTitle.textContent = translationsEn.servicesTitle;
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, i) => {
        const h3 = card.querySelector('h3');
        const p = card.querySelector('p');
        if (translationsEn.services[i]) {
            if (h3) h3.textContent = translationsEn.services[i].title;
            if (p) p.textContent = translationsEn.services[i].desc;
        }
    });
    // Order
    const orderTitle = document.querySelector('#order .section-title');
    if (orderTitle) orderTitle.textContent = translationsEn.orderTitle;
    const formLabels = document.querySelectorAll('.order-form label');
    if (formLabels[0]) formLabels[0].textContent = translationsEn.form.name;
    if (formLabels[1]) formLabels[1].textContent = translationsEn.form.phone;
    if (formLabels[2]) formLabels[2].textContent = translationsEn.form.address;
    if (formLabels[3]) formLabels[3].textContent = translationsEn.form.fuelType;
    if (formLabels[4]) formLabels[4].textContent = translationsEn.form.quantity;
    const fuelTypeSelect = document.getElementById('fuel-type');
    if (fuelTypeSelect) {
        fuelTypeSelect.options[0].textContent = translationsEn.form.choose;
        fuelTypeSelect.options[1].textContent = translationsEn.form.domestic;
        fuelTypeSelect.options[2].textContent = translationsEn.form.industrial;
        fuelTypeSelect.options[3].textContent = translationsEn.form.commercial;
    }
    const submitBtn = document.querySelector('.order-form .submit-btn');
    if (submitBtn) submitBtn.textContent = translationsEn.form.submit;
    // Pricing
    const pricingTitle = document.querySelector('#pricing .section-title');
    if (pricingTitle) pricingTitle.textContent = translationsEn.pricingTitle;
    const pricingDesc = document.querySelector('.pricing-content p');
    if (pricingDesc) pricingDesc.textContent = translationsEn.pricingDesc;
    const priceCardTitle = document.querySelector('.price-card h3');
    if (priceCardTitle) priceCardTitle.textContent = translationsEn.priceCardTitle;
    const priceCardPs = document.querySelectorAll('.price-card p');
    if (priceCardPs[0]) priceCardPs[0].textContent = translationsEn.priceCardP1;
    if (priceCardPs[1]) priceCardPs[1].textContent = translationsEn.priceCardP2;
    // Testimonials
    const testimonialsTitle = document.querySelector('.testimonials .section-title');
    if (testimonialsTitle) testimonialsTitle.textContent = translationsEn.testimonialsTitle;
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, i) => {
        const p = card.querySelector('p');
        const h4 = card.querySelector('h4');
        if (translationsEn.testimonials[i]) {
            if (p) p.textContent = '"' + translationsEn.testimonials[i].text + '"';
            if (h4) h4.textContent = translationsEn.testimonials[i].name;
        }
    });
    // Safety
    const safetyTitle = document.querySelector('.safety .section-title');
    if (safetyTitle) safetyTitle.textContent = translationsEn.safetyTitle;
    const safetyDesc = document.querySelector('.safety-content > p');
    if (safetyDesc) safetyDesc.textContent = translationsEn.safetyDesc;
    const safetyItems = document.querySelectorAll('.safety-item');
    safetyItems.forEach((item, i) => {
        const h3 = item.querySelector('h3');
        const p = item.querySelector('p');
        if (translationsEn.safety[i]) {
            if (h3) h3.textContent = translationsEn.safety[i].title;
            if (p) p.textContent = translationsEn.safety[i].desc;
        }
    });
    // Contact
    const contactTitle = document.querySelector('#contact .section-title');
    if (contactTitle) contactTitle.textContent = translationsEn.contactTitle;
    const contactInfo = document.querySelector('.contact-info h3');
    if (contactInfo) contactInfo.textContent = translationsEn.contactInfo;
    const contactItems = document.querySelectorAll('.contact-item span');
    if (contactItems[0]) contactItems[0].textContent = translationsEn.phone;
    if (contactItems[1]) contactItems[1].textContent = translationsEn.email;
    if (contactItems[2]) contactItems[2].textContent = translationsEn.address;
    if (contactItems[3]) contactItems[3].textContent = translationsEn.available;
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (whatsappBtn) whatsappBtn.childNodes[2].nodeValue = ' ' + translationsEn.whatsapp;
    // Footer
    const footerP = document.querySelector('footer .footer-content p');
    if (footerP) footerP.textContent = translationsEn.footer;
    const managerP = document.querySelector('footer .footer-content p + p');
    if (managerP) managerP.textContent = translationsEn.manager;
    // Change direction and lang
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', 'en');
}

// Language toggle functionality
function changeLanguage(lang) {
    // Remove active class from all buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    // Add active class to clicked button
    event.target.classList.add('active');
    // Switch language
    if (lang === 'ar') {
        location.reload();
    } else if (lang === 'en') {
        setEnglish();
    } else if (lang === 'fr') {
        alert('La version française sera bientôt disponible!');
    }
}

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const mobileOverlay = document.querySelector('.mobile-dropdown-overlay');
if (mobileMenu) {
    mobileMenu.addEventListener('click', function() {
        const nav = document.querySelector('nav ul');
        if (nav) {
            nav.classList.toggle('show');
            if (mobileOverlay) {
                if (nav.classList.contains('show')) {
                    mobileOverlay.classList.add('show');
                } else {
                    mobileOverlay.classList.remove('show');
                }
            }
        }
    });
}
if (mobileOverlay) {
    mobileOverlay.addEventListener('click', function() {
        const nav = document.querySelector('nav ul');
        if (nav) nav.classList.remove('show');
        mobileOverlay.classList.remove('show');
    });
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(178, 34, 34, 0.95)';
    } else {
        header.style.background = 'linear-gradient(135deg, #B22222, #004B6E)';
    }
});

// Scroll animation for sections and cards
function animateOnScroll() {
    const animatedEls = document.querySelectorAll('.section, .service-card, .testimonial-card, .safety-item, .about-image, .price-card, .contact-content, .hero-content');
    animatedEls.forEach(el => {
        el.classList.add('animate-fade-up');
        if (isInViewport(el)) {
            el.classList.add('animated');
        } else {
            el.classList.remove('animated');
        }
    });
    // Remove animation from contact-map
    const contactMap = document.querySelector('.contact-map');
    if (contactMap) {
        contactMap.classList.remove('animate-fade-up', 'animated');
    }
}
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight - 60 &&
        rect.bottom > 60
    );
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Make phone number clickable
    const phoneSpan = document.querySelector('.contact-item i.fa-phone + span, .contact-item i.fa-phone + a');
    if (phoneSpan) {
        const phone = '9613557235';
        const link = document.createElement('a');
        link.href = `https://wa.me/${phone}`;
        link.target = '_blank';
        link.textContent = '+961 3 557 235';
        phoneSpan.replaceWith(link);
    }
    // Hide mobile dropdown on link click
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const nav = document.querySelector('nav ul');
            const overlay = document.querySelector('.mobile-dropdown-overlay');
            if (nav) nav.classList.remove('show');
            if (overlay) overlay.classList.remove('show');
        });
    });
});

// WhatsApp integration
function openWhatsApp() {
    const phone = '9613557235';
    const message = 'مرحباً، أريد الاستفسار عن خدمات توزيع المازوت';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Initialize scroll to top button
function initializeScrollToTop() {
    const scrollBtn = document.querySelector('.scroll-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
} 