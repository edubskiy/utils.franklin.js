/**
 * Simple Dom navigation library named Franklin. Complete cross-browser support
 *
 * Node types:
 * Element(nodeType = 1): most elements in xml files like <li>, <a>, <p>
 * Text(nodeType = 3): all text segments
 * Document(nodeType = 9): metches the root element of document. In HTML document it is <html>
 *
 * Upcoming methods:
 * attr
 * text
 * before
 * empty
 * hasAttribute
 * addEvent
 * removeEvent
 *
 * @author Evgeniy Dubskiy
 * @email e.dubskiy@gmail.com
 *
 * @example:
 * var catElem = Utils.franklin.query('.mycat'),
 *     catsParent = Utils.franklin.parent(catElem),
 *     catsFirstChild = Utils.franklin.first(catElem);
 */

(function(exports, undefined) {
    var Utils = exports.Utils || {};
    Utils.franklin = {
        /**
         * Finds previous sibling
         *
         * @param {Node} elem
         * @returns {Node}
         */
        prev: function(elem) {
            do {
                elem = elem.previousSibling;
            } while (elem && elem.nodeType !== 1);

            return elem;
        },
        /**
         * Finds next sibling
         *
         * @param {Node} elem
         * @returns {Node}
         */
        next: function(elem) {
            do {
                elem = elem.nextSibling;
            } while (elem && elem.nodeType !== 1);

            return elem;
        },

        /**
         * Finds element's first child
         *
         * @param {Node} elem
         * @returns {Node}
         */
        first: function(elem) {
            do {
                elem = elem.firstChild;
            } while (elem && elem.nodeType !== 1);

            return elem;
        },

        /**
         * Finds element's last child
         *
         * @param {Node} elem
         * @returns {Node}
         */
        last: function(elem) {
            do {
                elem = elem.lastChild;
            } while (elem && elem.nodeType !== 1);

            return elem;
        },

        /**
         * Finds element's parent with depth level
         *
         * @param {int} num parent search depth
         * @param {Node} elem
         * @returns {Node}
         */
        parent: function(elem, num) {
            num = num || 1;
            for (var i = 0; i < num; i++) {
                if (elem != null) {
                    elem = elem.parentNode;
                }
            }
            return elem;
        },

        /**
         * Finds element by its id attribute
         *
         * @param {string} elemId
         * @returns {bool|Node}
         */
        byId: function(elemId) {
            if (!elemId) {
                return false;
            }
            return document.getElementById && document.getElementById(elemId);
        },

        /**
         * Finds element by its id attribute
         *
         * @author Dustin Diaz (edited by Evgeniy Dubskiy)
         * @param {string} elemId
         * @returns {bool|Node}
         */
        byClass: function(searchClass, node, tag) {
            if (document.getElementsByClassName) {
                return document.getElementsByClassName(searchClass);
            }
            var classElements = [];
            if ( node == null )
                node = document;
            if ( tag == null )
                tag = '*';
            var els = node.getElementsByTagName(tag);
            var elsLen = els.length;
            var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
            for (i = 0, j = 0; i < elsLen; i++) {
                if ( pattern.test(els[i].className) ) {
                    classElements[j] = els[i];
                    j++;
                }
            }
            return classElements;
        },

        /**
         * Finds element by its selector
         *
         * @example var subElem = Utils.franklin.query('.elem .subElem');
         * @param {string} elemSelector
         * @returns {bool|Node}
         */
        query: function(elemSelector) {
            if (!elemSelector) {
                return false;
            }
            return document.querySelector && document.querySelector(elemSelector);
        },

        /**
         * Adds given element's class
         *
         * @param elem
         * @param className to add
         * @returns {Node}
         */
        addClass: function(elem, newClassName) {
            // have right element and don't have desirable class already
            if ( elem.nodeType === 1 && elem.className && elem.className.indexOf(newClassName) === -1 ) {
                elem.className += ' ' + newClassName;
            }
            return elem;
        },

        /**
         * Removes given element's class
         *
         * @param elem
         * @param className to remove
         * @returns {Node}
         */
        removeClass: function(elem, className) {
            if ( elem.nodeType === 1 && elem.className ) {
                var spaceChar = /\s+/;
                if (elem.className) {
                    var classNames = elem.className.split(spaceChar);
                    for (var i = 0, l = classNames.length; i < l; i++) {
                        if (classNames[i] === className) {
                            classNames.splice(i, 1);
                        }
                    }
                    elem.className = classNames.join(' ');
                }
            }
            return elem;
        },

        /**
         * Checks if element has given class
         *
         * @param elem
         * @param className to remove
         * @returns {bool}
         */
        hasClass: function(elem, className) {
            if ( elem.nodeType === 1 && elem.className && elem.className.indexOf(className) > -1 ) {
                return true;
            }
            return false;
        }
    };

    exports.Utils.franklin = Utils.franklin;

}(this));
