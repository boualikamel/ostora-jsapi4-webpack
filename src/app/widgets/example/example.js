define([
        "dojo/_base/declare",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "./example.html",
        "./nls/local"

    ],
    function (
        declare,
        _WidgetBase,
        _TemplatedMixin,
        template,
        i18n,

    ) {
        return declare([_WidgetBase, _TemplatedMixin], {
            templateString: template,
            i18n: i18n.root,
            startup() {
                
                this.inherited(arguments);
            }

        });
    });