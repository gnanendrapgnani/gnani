let loader=document.getElementById('preloader');
let icon=document.querySelector('.icon')



icon.onclick=function(){
    navBar=document.querySelector('.navContanier')
    navBar.classList.toggle("active")
}


window.addEventListener("load", function(){
    loader.style.display="none";  
});



const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})



const hiddenElements=document.querySelectorAll('.hidden')
hiddenElements.forEach((el)=>observer.observe(el))

document.getElementById('contact-form').onsubmit = function() {
    setTimeout(function() {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    }, 500);
  };



