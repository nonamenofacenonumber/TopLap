window.openModal = function (modalId) {
    document.querySelector(`#${modalId}`).style.display = 'block';
    document.querySelector('body').classList.add('overflow-y-hidden');
}

window.closeModal = function (modalId) {
    document.querySelector(`#${modalId}`).style.display = 'none';
    document.querySelectorAll(`#${modalId} input`).forEach(inputItem => {
        inputItem.value = '';
    })


    if(document.querySelector(`#${modalId} .modalElement > div.hidden`)){
        document.querySelectorAll(`#${modalId} .modalElement > div`).forEach(modalElementIt=>{
            if(!modalElementIt.classList.contains('hidden')){
               modalElementIt.classList.add('hidden')
           }
           })
           document.querySelector(`#${modalId} .modalElement :first-child`).classList.remove('hidden');
       
    }



    document.querySelector('body').classList.remove('overflow-y-hidden');
}





// Close all modals when press ESC
document.addEventListener('keydown', (e) => {
    event = event || window.event;
    if (event.keyCode === 27) {
        closeEveryModal();
    }
})

document.querySelectorAll('.modal').forEach(modalItem => {
    modalItem.addEventListener('mousedown', (e) => {
        if (!modalItem.querySelector('.modalElement').contains(e.target)) {
            closeModal(modalItem.id)
        }
    });
})











