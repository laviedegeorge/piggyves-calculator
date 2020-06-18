const navBtn = document.getElementById('mobile-btn');

navBtn.addEventListener('click', ()=> {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active-nav');
})