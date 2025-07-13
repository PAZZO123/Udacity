document.addEventListener('keypress',function(event) {
    //console.log('clicked')
    const heading=document.querySelector('h1')
   heading.style.color='purple'
    heading.style.backgroundColor='blue'
   console.log(heading.style.backgroundColor)
   console.log('removing First Child')
   //document.querySelector('#contain-all').firstElementChild.remove();
   console.log(event.key)
   

    
})
