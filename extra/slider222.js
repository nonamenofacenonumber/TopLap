
// HELP
// slider item class = mySlider
// slider next button class = myNextBtn
// slider previous button class = myPrevBtn

class slider {

    sliderElement;
    autoDuration;
    sliderItems;
    slideIndex = 1;
    numberOfActivedItems = 3;
    sliderItemClass = 'slider';
    nextBtnClass = 'myNextBtn';
    prevBtnClass = 'myPrevBtn';
    intervalID;

    myVirtualElement;





    constructor(options) {
        ({ el: this.sliderElement, auto: this.autoDuration } = options);


        // let aa = document.querySelector('#sliders p');
        // console.log(document.querySelector('#sliders p').remove())
        // document.querySelector('#sliders #slider7').appendChild(aa)



        this.initialize();




        this.slideIndex = 3
        let lastActiveItem = this.slideIndex + this.numberOfActivedItems - 1

        for (let temp = this.slideIndex; temp <= lastActiveItem; temp++)
            this.sliderItems[temp - 1].classList.add('active')









        // let lastActiveItem = this.forwardorbackward(number, this.numberOfActivedItems - 1);

        // console.log(`${this.slideIndex} - ${lastActiveItem}`)

        // for (let temp = 1; temp <= this.sliderItems.length; temp++) {
        //     if (lastActiveItem - this.slideIndex >= 0) {
        //         if (temp >= this.slideIndex && temp <= lastActiveItem) {
        //             //if has not active add it
        //             if (!this.sliderItems[temp - 1].classList.contains('active'))
        //                 this.sliderItems[temp - 1].classList.add('active')
        //         }
        //         else {
        //             //if has active remove it
        //             if (this.sliderItems[temp - 1].classList.contains('active'))
        //                 this.sliderItems[temp - 1].classList.remove('active')
        //         }
        //     }
        //     else {
        //         if (temp >= this.slideIndex || temp <= lastActiveItem) {
        //             //if has not active add it
        //             if (!this.sliderItems[temp - 1].classList.contains('active'))
        //                 this.sliderItems[temp - 1].classList.add('active')
        //         }
        //         else {
        //             //if has active remove it
        //             if (this.sliderItems[temp - 1].classList.contains('active'))
        //                 this.sliderItems[temp - 1].classList.remove('active')
        //         }
        //     }
        // }





















        // this.setupNextAndPrevBtns();
        //     this.createDots();

        // this.showSlides(1);
        // this.setInterval();
        // console.log(this)
    }








    initialize() {
        if (!this.sliderElement) throw Error('slider element is not exists');
        Number.isInteger(this.autoDuration) ? null : this.autoDuration = 0;
        this.sliderItems = [...this.sliderElement.children].filter(elm => elm.classList.contains(this.sliderItemClass))

        this.sliderElement.querySelector(`.${this.sliderItemClass}`).insertAdjacentHTML('beforebegin', `
        <div class="myVirtualElement"></div>
        `);
        this.myVirtualElement = this.sliderElement.querySelector('.myVirtualElement');
        let i = 1;
        this.sliderElement.querySelectorAll(`.${this.sliderItemClass}`).forEach(sliderItem => {
            sliderItem.classList.add(`slide-${i}`)
            this.myVirtualElement.appendChild(sliderItem)
            i++;
        });
        this.myVirtualElement.insertBefore(this.sliderElement.querySelector(`.slide-${i - 1}`), this.sliderElement.querySelector(`.slide-1`))



        this.sliderElement.querySelectorAll(`.${this.sliderItemClass}`).forEach(ii => {

        })


    }

    setupNextAndPrevBtns() {
        this.sliderElement.querySelector(`.${this.nextBtnClass}`).addEventListener('click', () => this.nextOrPrevSlide(this.slideIndex += 1))
        this.sliderElement.querySelector(`.${this.prevBtnClass}`).addEventListener('click', () => this.nextOrPrevSlide(this.slideIndex -= 1))
    }

    nextOrPrevSlide = (n) => {
        this.resetInterval();
        this.showSlides(n)
    }

    currentSlide = n => {
        this.resetInterval();
        this.showSlides(this.slideIndex = n)
    }

    // createDots() {
    //     let { el: sliderElement } = this.options;

    //     let dotElements = [...this.sliders].map((slider, index) => `<span class="dot" data-slide="${index + 1}"></span>`)

    //     let dots = document.createElement('div')
    //     dots.classList.add('dots');
    //     dots.innerHTML = `${dotElements.join('')}`

    //     sliderElement.after(dots);

    //     this.dots = dots.querySelectorAll('.dot');
    //     this.dots.forEach(dot => dot.addEventListener('click', e => this.currentSlide(parseInt(e.target.dataset.slide))))

    // }




    showSlides(number) {
        this.slideIndex = number
        let lastActiveItem = this.forwardorbackward(number, this.numberOfActivedItems - 1);

        console.log(`${this.slideIndex} - ${lastActiveItem}`)

        for (let temp = 1; temp <= this.sliderItems.length; temp++) {
            if (lastActiveItem - this.slideIndex >= 0) {
                if (temp >= this.slideIndex && temp <= lastActiveItem) {
                    //if has not active add it
                    if (!this.sliderItems[temp - 1].classList.contains('active'))
                        this.sliderItems[temp - 1].classList.add('active')
                }
                else {
                    //if has active remove it
                    if (this.sliderItems[temp - 1].classList.contains('active'))
                        this.sliderItems[temp - 1].classList.remove('active')
                }
            }
            else {
                if (temp >= this.slideIndex || temp <= lastActiveItem) {
                    //if has not active add it
                    if (!this.sliderItems[temp - 1].classList.contains('active'))
                        this.sliderItems[temp - 1].classList.add('active')
                }
                else {
                    //if has active remove it
                    if (this.sliderItems[temp - 1].classList.contains('active'))
                        this.sliderItems[temp - 1].classList.remove('active')
                }
            }
        }





        // this.slideIndex=this.forwardorbackward(number)


        // this.sliderElement.querySelector(`.${this.sliderItemClass}.active`).classList.remove('active');
        // this.dots.forEach(dot => dot.classList.remove('active'))

        // this.sliderItems[this.forwardorbackward(this.slideIndex, -1)].classList.remove('active');



        // this.sliderItems[lastActiveItem - 1].classList.add('active');
        // this.dots[this.slideIndex - 1].classList.add('active')
    }


    forwardorbackward(index, step) {
        let output;
        if (index + step > 0) {
            output = (index + step) % this.sliderItems.length
        }
        else {
            output = this.sliderItems.length - (Math.abs(index + step) % this.sliderItems.length)
        }
        if (output == 0) output = this.sliderItems.length;
        return output;
    }


    setInterval() {
        if (this.autoDuration != 0) {
            this.intervalID = setInterval(() => this.showSlides(this.forwardorbackward(this.slideIndex, 1)), this.autoDuration);
        }
    }

    resetInterval() {
        clearInterval(this.intervalID);
        this.setInterval();
    }
}