var Slider = Behavior.extend({

    // The properties defined in the "State" constructor
    // are used to store any internal data needed by the behavior
    // and its methods

    State: function() {
        this.totalSlides    = -1;
        this.activeIndex    = -1;
        this.isSliding      = false;
    },

    // The properties in the "Dom" constructor are used to cache
    // references to any elements or nodeLists needed by the
    // behavior

    Dom: function() {
        this.buttonPrev     = null;
        this.buttonNext     = null;
        this.slides         = [];
    },

    // The events array lists all element we wish to bind
    // events on, with their respective handler methods

    events: [
        {
            el: 'buttonPrev',
            on: ['click'],
            handler: 'handleButtonPrevClick'
        },
        {
            el: 'buttonNext',
            on: ['click'],
            handler: 'handleButtonNextClick'
        }
    ]
}, {
    // This object literal becomes the new behavior's "prototype",
    // where all class methods are defined:

    /**
     * @return {Promise}
     */

    init: function() {
        // Run any initialisation code

        this.totalSlides = this.dom.slides.length;
        this.activeIndex = 0;
    },

    /**
     * @param  {Event} e
     * @return {void}
     */

    handleButtonPrevClick: function(e) {
        // Go to previous slide
    },

    /**
     * @param  {Event} e
     * @return {void}
     */

    handleButtonNextClick: function(e) {
        // Go to next slide
    }
});
