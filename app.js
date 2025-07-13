document.addEventListener('keypress',function() {
    //console.log('clicked')
    const heading=document.querySelector('h1')
   heading.style.color='purple'
    heading.style.backgroundColor='blue'
   console.log(heading.style.backgroundColor)
   console.log('removing First Child')
   document.querySelector('#contain-all').firstElementChild.remove();

    
})