const app = Vue.createApp({
    name: 'Carousel',
    data() {
        return {
            autoplay: 0,
            currentIndex: 0,
            images: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        };
    },
    computed: {
        /**
         * Returns true if we are at the first image, false otherwise
         * @returns {boolean} if we are at first image
         */
        isFirst() {
            return this.currentIndex === 0;
        },

        /**
         * Returns true if we are at the last image, false otherwise
         * @returns {boolean} if we are at last image
         */
        isLast() {
            return this.currentIndex === this.images.length - 1;
        }
    },
    methods: {
        /**
         * Given the index of an element, returns true if we are viewing that element
         * @param {number} index the index of the element we want to know if is active
         * @returns {boolean} if we are at the element with current index
         */
        isCurrentIndex(index) {
            return this.currentIndex === index;
        },

        /**
         * Displays the first image, by setting the currentIndex to 0
         */
        goToFirst() {
            this.currentIndex = 0;
        },

        /**
         * Displays the last image, by setting the currentIndex to images array last element's index
         */
        goToLast() {
            this.currentIndex = this.images.length - 1;
        },

        /**
         * Goes to the next image, if we are at the last image it goes to first image
         */
        goToNext() {
            this.isLast ? this.goToFirst() : this.currentIndex++;
        },

        /**
         * Goes to the prev image, if we are at the first image it goes to last image
         */
        goToPrev() {
            this.isFirst ? this.goToLast() : this.currentIndex--;
        },

        /**
         * Shows the selected image from the thumbnails, by setting the currentIndex to the number passed as parameter.
         * @param {number} index the index of the image we want to display
         */
        setCurrentIndex(index) {
            this.currentIndex = index;
        },

        /**
         * Starts the autoplay
         */
        startAutoplay() {
            this.autoplay = setInterval(this.goToNext, 3000);
        },

        /**
         * Stops the autoplay
         */
        stopAutoplay() {
            clearInterval(this.autoplay);
        },
    },
    mounted() {
        this.startAutoplay();
    }
});

app.mount('#root');