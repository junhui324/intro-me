var aTags = document.querySelectorAll('.nav_btn');
for(let i = 0; i < aTags.length; i++){
    aTags[i].onclick = function(e) {
        e.preventDefault();

        let target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            'behavior': 'smooth',
            'top': target.offsetTop
        });
    }
}