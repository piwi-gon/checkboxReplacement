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
            contentUnchecked: "no",
            contentChecked: "yes",
            checked: false
            },

            _create: function() {
                this.element.hide();
                this.elemId = this.element.attr("id");
            },

            _destroy: function() {
            },

            _init: function() {
                /**
                 * check if element has to be checked
                 */
                if(this.options.checked) { $('#'+this.elemId).attr('checked', 'checked'); }
                this.elemToAddTo = this.element.parent();
                /**
                 * adding a label for using as switch
                 */
                var $labelContainer = $("<label />", { for: this.elemId,id: 'label'+this.elemId});
                /**
                 * check for attribute
                 */
                if($('#'+this.elemId).is(':checked')) {
                    console.log("is Checked: " + this.elemId + " -> "  + this.options.contentChecked);
                    if(this._isHTML(this.options.contentUnchecked)) {
                        $labelContainer.html(this.options.contentChecked).addClass('chkBxRplChecked');
                    } else {
                        $labelContainer.text(this.options.contentChecked).addClass('chkBxRplChecked');
                    }
                } else {
                    if(this._isHTML(this.options.contentChecked)) {
                        $labelContainer.html(this.options.contentUnchecked);
                    } else {
                        $labelContainer.text(this.options.contentUnchecked);
                    }
                }
                if($('#'+this.elemId).is(':disabled')) { $labelContainer.addClass('chkBxRplDisabled'); }
                this.elemToAddTo.append($labelContainer);
                $labelContainer.addClass('chkBxRplInit');
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
                                if(this._isHTML(this.options.contentChecked)) {
                                    $('#'+'label'+this.elemId).html(this.options.contentChecked).addClass('chkBxRplChecked');
                                } else {
                                    $('#'+'label'+this.elemId).text(this.options.contentChecked).addClass('chkBxRplChecked');
                                }
                            } else {
                                if(this._isHTML(this.options.contentUnchecked)) {
                                    $('#'+'label'+this.elemId).html(this.options.contentUnchecked).removeClass('chkBxRplChecked');
                                } else {
                                    $('#'+'label'+this.elemId).text(this.options.contentUnchecked).removeClass('chkBxRplChecked');
                                }
                            }
                        }
                    }
                });
            },

            _isHTML: function (str) {
                var doc = new DOMParser().parseFromString(str, "text/html");
                return Array.from(doc.body.childNodes).some(node => node.nodeType === 1);
            }
});