// IIFE

(function() {
    
    "use strict"
    
    var app = angular.module("productManagement", 
                            [
                            "ui.router",
                            "ui.mask",
                            "ui.bootstrap",
                            "kendo.directives"]);
                            
    app.config(["$stateProvider",
                "$urlRouterProvider",
                function($stateProvider, $urlRouterProvider) {
                    
                    //default url
                    $urlRouterProvider.otherwise("/")
                    
                    
                    $stateProvider
                        //dashboard
                        .state("dashboard", {
                            url: "/",
                            templateUrl: "app/dashboard/dashboardView.html",
                            controller: "DashboardCtrl as dashboardCtrlAls"
                        })
                        
                        //add products
                        .state("addProducts", {
                            url: "/addProducts",
                            templateUrl: "app/addProducts/addProductsView.html",
                            controller: "AddProductsCtrl as APCtrl"
                        })
                        
                        //update products
                        .state("updateProducts", {
                            url: "/updateProducts",
                            templateUrl: "app/updateProducts/updateProductsView.html",
                            controller: "UpdateProductsCtrl as updateProductsCtrlAls"
                        })
                        
                        //Contact us
                        .state("contactUs", {
                            url: "/contactUs",
                            templateUrl: "app/faqs/contactUsView.html",
                            controller: "contactUsCtrl as contactUsCtrlAls"
                        })
                        
                        //faqs
                        .state("faqs", {
                            url: "/faqs",
                            templateUrl: "app/faqs/faqsView.html",
                            controller: "FaqsCtrl as faqsCtrlAls"
                        })
                    
                }])
    
}());
