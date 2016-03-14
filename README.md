# H is a library that was created by the author of _A Year Without jQuery_

## [A Year Without jQuery](http://blog.wearecolony.com/a-year-without-jquery/)

    Dropping the trusted workhorse from our front-end in 2014 has led to a faster, leaner platform
    – March 2nd, 2016

Since writing these in 2014, I’ve sinced learned that `h.closestParent()`
now has a native equivalent in the form of `Element.closest()`, and
`h.children()` in the form of `':scope'` psuedo-class allowing us to
reference the element itself in queries (e.g. `.querySelectorAll(':scope > .child')`).
While both of these features are fairly new and not universally
supported yet, it’s exciting to see how fast browser APIs are
catching up (often following jQuery’s influence), and I’m excited
to refactor both of these helpers out of our application very soon.

It’s worth noting that one function I’ve omitted from this list due
to its length and complexity is `h.extend()` which I use frequently
to extend, merge and clone objects (analogous to jQuery’s `$.extend`).
We don’t use any additional utility libraries such as Underscore
or Lodash, so a home-baked extend helper was critical for our
application. There are numerous Stack Overflow posts explaining how
to achieve such functionality, but I still find myself tinkering
with this function regularly as features are added with increasingly
complex needs (e.g. the copying of getters and setters, and deep
cloning of arrays).

Over the last few years, one resource I’ve always found particularly
helpful in my efforts to use vanilla JavaScript is the excellent
[You Might Not Need jQuery](http://youmightnotneedjquery.com/).

## Loops

JQUERY used to hide some elements.

```javascript
var $items = $container.children('.item');

$items.hide();
```

VANILLA JAVASCRIPT is faster.

```javascript
var items = h.children(container, '.item'),
    item  = null,
    i     = -1;

for (i=0; item=items[i], i++) {
    item.style.display = 'none';
}
```

## Event Handling and Delegation

JQUERY

```javascript
var $container = $('.container');

$container.on('click', '.btn', function() {
    // Add an active class to the clicked '.btn' element
    $(this).addClass('active');
});
```

VANILLA JAVASCRIPT

```javascript
var container = document.querySelector('.container');

container.addEventListener('click', function(e) {
    var target = e.target,
        button = h.closestParent(target, '.btn', true);

    if (button) {
        button.classList.add('active');
    }
});
```

## UI Component Example

This section deserves more in-depth analysis. For two reasons:

1. It apparently wraps elements with it's own code making it accessible and adding event handling, etc.
2. It uses data-ref instead of classes. The referenced element becomes available as `this.dom.buttonPrev`.

## Libraries

* Velocity
* iScroll
* MixItUp 3
* Google Shaka
* RequireJS
* Handlebars
* Moment
