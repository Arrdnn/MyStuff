const boxImg = document.querySelector('.box-img');
const big = document.querySelector('.big');
const gams = document.querySelectorAll('.gam');



gams[0].addEventListener('hover',function() {
    alert('tes')
})

boxImg.addEventListener('click', function(e) {

    if( e.target.className == 'gam' ) {
        big.src = e.target.src;
        big.classList.add('fade');
        setTimeout(function()  {
            big.classList.remove('fade');
        }, 500);

        gams.forEach(function(gam) {
            if( gam.classList.contains('active') ) {
                gam.classList.remove('active');
            }
            // gam.className = 'gam';
        });

        e.target.classList.add('active');
    }

});