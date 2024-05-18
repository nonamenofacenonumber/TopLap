let items = document.querySelectorAll('.myTabNavList li');
items.forEach((item) => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        let lastSelectedElement = this.closest('.myTab').querySelector('.myTabNavList li.selected');
        hideSelectedTabNav.apply(lastSelectedElement);
        showSelectedTabNav.apply(this);
        let dataBox = this.getAttribute('data-content')
        hideSelectedTabContent.apply(this.closest('.myTab').querySelector('.myTabContentList li.selected'));
        showSelectedTabContent.apply(this.closest('.myTab').querySelector(`.myTabContentList li[data-content="${dataBox}"]`));
    })
})


function showSelectedTabNav() {
    this.classList.add('selected');
    this.classList.add('text-orange-400');
    this.querySelector('.underlineSelected').classList.remove('hidden');
}

function hideSelectedTabNav() {
    this.classList.remove('selected');
    this.classList.remove('text-orange-400');
    this.querySelector('.underlineSelected').classList.add('hidden');
}

function showSelectedTabContent() {
    this.classList.add('selected');
    this.classList.remove('hidden');
}

function hideSelectedTabContent() {
    this.classList.remove('selected');
    this.classList.add('hidden');
}