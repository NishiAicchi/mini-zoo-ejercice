var image = document.getElementsByClassName('animal');
var select = document.getElementById('select');

select.addEventListener('change', function(){
    if(select.value === 'original') {
        for(var i = 0; i <= image.length; i++) {
            image[i].classList.remove('white-black');
            image[i].classList.remove('negative-color');
            image[i].classList.remove('sepia');
        }
    }
    if(select.value === 'white-black') {
        for(var a = 0; a <= image.length; a++) {
        image[a].classList.add('white-black');
        }
    }
    if(select.value === 'negative-color') {
        for(var b = 0; b <= image.length; b++) {
            image[b].classList.add('negative-color');
        }
    }
    if(select.value === 'sepia') {
        for(var c = 0; c <= image.length; c++) {
            image[c].classList.add('sepia');
        }
    }

});