// IIFE

(function() {
    
    "use strict"
    
    var app = angular.module("productManagement", 
                            [
                            "ui.router",
                            "ui.mask",
                            "ui.bootstrap"]);
                            
    app.config(["$stateProvider",
                "$urlRouterProvider",
                function($stateProvider, $urlRouterProvider) {
                    
                    console.log("==========test")
                    
                    //default url
                    $urlRouterProvider.otherwise("/")
                    
                    
                    $stateProvider
                        //dashboard
                        .state("dashboard", {
                            url: "/",
                            templateUrl: "app/dashboard/dashboardView.html",
                            controller: "Dashboard as dashboardCtrlAls"
                        })
                        
                        //add products
                        .state("addProducts", {
                            url: "/addProducts",
                            templateUrl: "app/addProducts/addProductsView.html",
                            controller: "AddProductsCtrl as addProductsCtrlAls"
                        })
                        
                        //update products
                        .state("updateProducts", {
                            url: "/updateProducts",
                            templateUrl: "app/updateProducts/updateProductsView.html",
                            controller: "updateProducts as updateProductsCtrlAls"
                        })
                        
                        //update products
                        .state("faqs", {
                            url: "/faqs",
                            templateUrl: "app/updateProducts/faqsView.html",
                            controller: "updateProducts as updateProductsCtrlAls"
                        })
                    
                }])
    
}());
