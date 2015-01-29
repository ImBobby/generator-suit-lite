;(function ( w, d, undefined ) {
    'use strict';

    /**
     * @param { Element || NodeList } elements
     */
    w.isCollection = function ( elements ) {
        if ( elements.length ) {
            return true;
        }

        return false;
    };


    /**
     * @param { String } selector
     */
    w.query = function ( selector ) {
        return d.querySelector( selector );
    };


    /**
     * @param { String } selector
     */
    w.queryAll = function ( selector ) {
        return d.querySelectorAll( selector );
    };


    /**
     * @param { Element || NodeList } elements
     * @param { String } evt
     * @param { Function } callback
     */
    w.addEvent = function ( elements, evt, callback ) {
        var n = elements.length;

        if ( !w.isCollection( elements ) ) {
            elements.addEventListener(evt, callback, false);
        } else {
            for (var i = n - 1; i >= 0; i--) {
                elements[i].addEventListener(evt, callback, false);
            }
        }
    };


    /**
     * @param { Element || NodeList } elements
     * @param { String } classNames - Space delimeter e.g. 'Hello World'
     */
    w.addClass = function ( elements, classNames ) {
        manipulateClass( elements, classNames, 'add' );
    };


    /**
     * @param { Element || NodeList } elements
     * @param { String } classNames - Space delimeter e.g. 'Hello World'
     */
    w.removeClass = function ( elements, classNames ) {
        manipulateClass( elements, classNames, 'remove' );
    };


    /**
     * @param { Element || NodeList } elements
     * @param { String } classNames
     */
    w.containClass = function ( elements, classNames ) {
        return elements.classList.contains( classNames );
    };


    /**
     * @param { Element || NodeList } elements
     */
    w.removeAllClass = function ( elements ) {
        manipulateClass( elements, '', '' );
    };


    /**
     * @param { String } msg
     */
    w.log = function ( msg ) {
        console.log( msg );
    };


    /********************
     * Private function *
     ********************/

    function manipulateClass( elements, classNames, action ) {
        var count   = elements.length,
            classes = classNames.split(' ');

        if ( !w.isCollection( elements ) ) {

            classes.forEach( function ( _class ) {
                if ( action === 'add' ) {
                    elements.classList.add( _class );
                } else if ( action === 'remove' ) {
                    elements.classList.remove( _class );
                } else if ( !classNames ) {
                    if ( elements.classList.length ) {
                        
                        for (var l = elements.classList.length - 1; l >= 0; l--) {
                            elements.classList.remove( elements.classList[l] );
                        }

                    }
                }
            });

        } else {
            var applyAction = function ( _class ) {
                if ( action === 'add' ) {
                    elements[i].classList.add( _class );
                } else if ( action === 'remove' ) {
                    elements[i].classList.remove( _class );
                } else if ( !classNames ) {
                    if ( elements[i].classList.length ) {
                        
                        for (var m = elements[i].classList.length - 1; m >= 0; m--) {
                            elements[i].classList.remove( elements[i].classList[m] );
                        }

                    }
                }
            };

            for (var i = count - 1; i >= 0; i--) {
                classes.forEach( applyAction );
            }

        }
    }

})( window, document );
