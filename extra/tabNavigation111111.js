class tabNavigation {
    el;
    navClass;
    contentClass;
    constructor(el, navClass, contentClass) {
        this.el = el;
        this.navClass = navClass;
        this.contentClass = contentClass;

        let items = el.querySelector(`.${navClass}`).children;
        for (const item of items) {
            console.log(item)
            item.addEventListener('click', function (e) {
                e.preventDefault();
                let lastSelecteditem = document.querySelector(`.${navClass} .selected`);
                lastSelecteditem.classList.remove('selected');
                this.classList.add('selected');
                console.log(this)
                let dataBox = this.getAttribute('data-content')
                el.querySelector(`.${contentClass} .selected`).classList.remove('selected')
                el.querySelector(`.${contentClass} [data-content="${dataBox}"]`).classList.add('selected')
            })
        }
    }

}









