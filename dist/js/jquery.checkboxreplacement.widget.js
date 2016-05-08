/**
 *
 * jquery.checkoxreplacement.widget.js
 *
 * author : piwi
 *
 * created: 08.05.2016
 * changed: 08.05.2016
 *
 * purpose:
 *
 */


$.widget("ui.checkboxReplacementWidget", {
    version: "1.0.0",
    options: {
            elemId: "",
            contentUnchecked: undefined,
            contentChecked: undefined
            },

            _create: function() {
                this.element.hide();
                this.elemId = this.element.attr("id");
            },

            _destroy: function() {
            },

            _init: function() {
                this.elemToAddTo = this.element.parent();
                var $labelContainer = $("<label />", {for: this.elemId,id: 'label'+this.elemId}).addClass('chkBxRplInit');
                if($('#'+this.elemId).is(':checked')) { $labelContainer.addClass('chkBxRplChecked'); }
                if(this.options['contentUnchecked'] != undefined) { $labelContainer.css({content: this.options.contentUnchecked}); }
                if(this.options['contentChecked'] != undefined) { $labelContainer.css({content: this.options.contentChecked}); }
                if($('#'+this.elemId).is(':disabled')) { $labelContainer.addClass('chkBxRplDisabled'); }
                this.elemToAddTo.append($labelContainer);
                this._adddEventHandler(this.element);
            },

            _setOption: function(key, value) {
                this.options[key] = value;
            },

            _adddEventHandler: function(elem) {

                var triggeredElem = elem;
                /**
                 * now bind to the left button a click
                 */
                this._on($('#'+this.elemId), {
                    click: function(event) {
                        if(!$('#'+this.elemId).is(':disabled')) {
                            if($('#'+this.elemId).is(':checked')) {
                                $('#'+'label'+this.elemId).addClass('chkBxRplChecked');
                            } else {
                                $('#'+'label'+this.elemId).removeClass('chkBxRplChecked');
                            }
                        }
                    }
                });
            }
});