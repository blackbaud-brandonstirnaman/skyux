/*jshint browser: true */

/*global angular */

/** @module Autofocus
@deprecated
@icon camera
@summary  The autofocus component specifies the input item on a form that should get focus when the form loads.
 @description ### *Deprecated* ###

This directive is no longer being maintained. UI-Bootstrap now allows the use of HTML5 autofocus on modals to focus an input upon opening the modal.

<s>
The `bb-autofocus` directive specifies the item on a form that receives focus when the form renders. You can use this directive when items such as Angular dynamically loaded templates do not play nicely with the HTML autofocus property.
The **Open Modal** button below demonstrates a modal form where the `bb-autofocus` directive places the focus on an input control on the form.
</s>
 */

(function () {
    'use strict';

    angular.module('sky.autofocus', [])
        .directive('bbAutofocus', ['$timeout', function ($timeout) {
            return {
                restrict: 'A',
                link: function ($scope, $element) {
                    /*jslint unparam: true */
                    $timeout(function () {
                        $element.focus();
                    }, 500);
                }
            };
        }]);
}());
