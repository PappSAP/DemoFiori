sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
],
/**
 * 
 * @param {*} Controller 
 * @param {*} UIComponent 
 * @returns 
 */
function (Controller,UIComponent) {
    "use strict";

    return Controller.extend("demofiori.controller.Vista1", {
        onInit: function () {

        },
        onPressVista1: function() {
            let oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteVista11");


        }

    });
});
