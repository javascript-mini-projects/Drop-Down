let dropdown = (function(){

    // get dom references
    let dropdownHeader = document.querySelector('.drop-down__heading'),
        dropdownBody = document.querySelector('.drop-down__body'),
        open = false;

    dropdownHeader.addEventListener('click', function(){
        if(!open){
            open = true;
            dropdownBody.style.display = 'block';
        }else{
            open = false;
            dropdownBody.style.display = 'none';
        }

    })

});

dropdown();

