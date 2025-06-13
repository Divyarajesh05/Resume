
const hamburger = document.getElementById("hamburger");
const navMenu=document.getElementById("navMenu").querySelector("ul");
hamburger.addEventListener("click", ()=>{
    });
    document.getElementById("contactForm").addEventListener("submit",function(e){
        e.preventDefault();
        const status=document.getElementById("formStatus");
        status.textContent="Sending...";
        setTimeout(()=>{
            status.textContent="Thanks! I will get back to you soon";
            this.reset();
        },1000);
        });
    