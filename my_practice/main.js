
/*-----------------------toggle icon navbar   ------------------------------------- */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-bar');

menuIcon.onclick = ()=>{
        menuIcon.classList.toggle(fa-xmark);
        nav-bar.classList.toggle(active)
}

/*-----------------------scroll section active link------------------------------------- */

let sections = document.querySelectorAll('section');
let naclinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
        sections.forEach(sec =>{
                let top = window.screenY;
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');

                if(top >= offset && top < offset + height){
                        naclinks.forEach.apply(links => {
                                links.classList.remove('active');
                        })
                }

        })
}