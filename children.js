/**
 * @param   {Element}     el
 * @param   {string}      selector
 * @return  {Element[]}
 */

h.children = function(el, selector) {
    var selectors      = null,
        children       = null,
        childSelectors = [],
        tempId         = '';

    selectors = selector.split(',');

    if (!el.id) {
        tempId = '_temp_';

        el.id = tempId;
    }

    while (selectors.length) {
        childSelectors.push('#' + el.id + '>' + selectors.pop());
    }

    children = document.querySelectorAll(childSelectors.join(', '));

    if (tempId) {
        el.removeAttribute('id');
    }

    return children;
};
