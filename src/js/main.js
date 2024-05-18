

//--------------------------------------------------   Login | Register   --------------------------------------------------

document.querySelector('.modal .modalElement#loginRegister button[data-content="nextStep"]').addEventListener('click', (e) => {
    let phoneValue = document.querySelector('.modal .modalElement#loginRegister input#phone').value;
    let phoneFeedback = document.querySelector('.modal .modalElement#loginRegister input#phone + .valid-feedback');
    if (!phoneValue) {
        phoneFeedback.innerText = 'لطفا این قسمت را خالی نذار'
        phoneFeedback.classList.remove('hidden');
    }
    else {
        if (phoneValue.length != 11 || phoneValue.substr(0, 2) != '09') {
            phoneFeedback.innerText = 'لطفا شماره تلفن رو صحیح وارد کن'
            phoneFeedback.classList.remove('hidden');
        }
        else {
            document.querySelector('.modal .modalElement#loginRegister .enterUsername').classList.add('hidden');
            document.querySelector('.modal .modalElement#loginRegister .enterPassword').classList.remove('hidden');
        }
    }
})

document.querySelector('.modal .modalElement#loginRegister button[data-content="prevStep"]').addEventListener('click', (e) => {
    document.querySelector('.modal .modalElement#loginRegister .enterUsername').classList.remove('hidden');
    document.querySelector('.modal .modalElement#loginRegister .enterPassword').classList.add('hidden');
})

document.querySelector('.modal .modalElement#loginRegister input#phone').addEventListener('keyup', (e) => {
    if (document.querySelector('.modal .modalElement#loginRegister input#phone').value) {
        document.querySelector('.modal .modalElement#loginRegister input#phone + .valid-feedback').classList.add('hidden');
    }
})

document.querySelector('.modal .modalElement#loginRegister button[type="submit"]').addEventListener('click', (e) => {
    e.preventDefault();
    if (!document.querySelector('.modal .modalElement#loginRegister input#password').value) {
        document.querySelector('.modal .modalElement#loginRegister input#password + .valid-feedback').classList.remove('hidden');
    }
    else {
        console.log(`
        phone number:
        ${document.querySelector('.modal .modalElement#loginRegister input#phone').value}
        password:
        ${document.querySelector('.modal .modalElement#loginRegister input#password').value}
        submitted`)
    }
})

document.querySelector('.modal .modalElement#loginRegister input#password').addEventListener('keyup', (e) => {
    if (document.querySelector('.modal .modalElement#loginRegister input#password').value) {
        document.querySelector('.modal .modalElement#loginRegister input#password + .valid-feedback').classList.add('hidden');
    }
})

//--------------------------------------------------------------------------------------------------------------------------



//---------------------------------------------------   Effect Scroll   ----------------------------------------------------


function effectScroll(destination, duration) {
    let doc = document.documentElement;
    let time = 0, beginningValue = doc.scrollTop, changeInValue = destination - doc.scrollTop;
    let speed = 5;
    let myAnimate = () => {
        if (time > duration) return;
        setTimeout(() => {
            time += speed
            doc.scrollTop = easeInOutQuint(time, beginningValue, changeInValue, duration);
            myAnimate();
        }, speed);
    }
    myAnimate();
}
function easeInOutQuint(t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
}

const scrollTopElem = document.querySelector('.scrollTop');
scrollTopElem.addEventListener('click', function (e) {
    effectScroll(0, 1400);
})
window.addEventListener('scroll', function (e) {    
    if (document.documentElement.scrollTop > 250) {
        scrollTopElem.classList.remove('hidden');
        scrollTopElem.classList.add('flex');        
    } else {
        scrollTopElem.classList.add('hidden');
        scrollTopElem.classList.remove('flex');        
    }
})

//--------------------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------   PreLoader   ------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('content').style.display = 'block'
    }, 1000);

});

//--------------------------------------------------------------------------------------------------------------------------



document.querySelector('#moreFeatures').addEventListener('click', (e) => {
    e.preventDefault();
    effectScroll(document.querySelector('.myTab').offsetTop, 1000);
})




document.querySelector('#selectedColor').innerText=document.querySelector('input[type="radio"][name="colorRadioGroup"]:checked').value
document.querySelectorAll('input[type="radio"][name="colorRadioGroup"]').forEach(radioItem => {
    radioItem.addEventListener('change', (e) => {
        if (radioItem.checked) {
            document.querySelector('#selectedColor').innerText=radioItem.value
        }
    });
})