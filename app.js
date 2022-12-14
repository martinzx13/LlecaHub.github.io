// Create variables to call the clases. 
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
//Function to create a display button.
function myFunction(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    if(dots.style.display == 'none'){
        dots.style.display = 'inline'
        btnText.innerHTML = 'Read More'
        moreText.style.display = 'none'
    }else{
        dots.style.display = 'none';
        btnText.innerHTML = 'Read Less';
        moreText.style.display = 'inline'
    }
}
// Function to asign the class and activate the sections of the website. 
function PageTransitions() {
    //Btn click active class.
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    // This funciton will activate and deactivate all the web as soon as we click. 
    allSections.addEventListener('click', (e) => {

        const id = e.target.dataset.id;
        if (id) {
            // remove selected from the other btns
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            //hide other sections 
            sections.forEach((section) => {
                section.classList.remove('active');
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Togle theme

    const themBtn = document.querySelector('.theme-btn');
    themBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    })

}

PageTransitions();