setInterval(function(){
    let i = 0
    const dots = document.getElementById('dots')
    dots.innerHTML += '.'
    if(dots.innerHTML.split('.').length > 4) dots.innerHTML = 'page in development'
}, 1000)