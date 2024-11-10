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

    return Controller.extend("demofiori.controller.Vista21", {
        onInit: function () {

        },
        onPressVista21: function() {
            let oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteVista11");


        }

    });
});
