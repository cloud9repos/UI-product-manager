(function() {
    "use strict"
    
    angular
        .module("productManagement")
        .controller("AddProductsCtrl", 
                        ["$scope",
                        AddProductsCtrl]);
                    
    function AddProductsCtrl($scope) {
        
        var self = this
        
        //initialize collapse settings
        self.initiallizeCollapseSetting($scope)
        
        $scope.submit = function() {
            return self.submitAddProducts($scope)
        }
        
    }
    
    AddProductsCtrl.prototype.initiallizeCollapseSetting = function($scope) {
        
        $scope.isCollapsedDI = true;
        $scope.glyphiconChangeDI = 'glyphicon glyphicon-menu-right'
        
        $scope.isCollapsedPrice = true;
        $scope.glyphiconChangePrice = 'glyphicon glyphicon-menu-right'
        
        $scope.isCollapsedInventory = true;
        $scope.glyphiconChangeInventory = 'glyphicon glyphicon-menu-right'
        
        $scope.isCollapsedShipping = true;
        $scope.glyphiconChangeShipping = 'glyphicon glyphicon-menu-right'
        
        $scope.isCollapsedVisibility = true;
        $scope.glyphiconChangeVisibility = 'glyphicon glyphicon-menu-right'
        
        $scope.isCollapsedOrganization = true;
        $scope.glyphiconChangeOrganization = 'glyphicon glyphicon-menu-right'
        
    }
    
    AddProductsCtrl.prototype.submitAddProducts = function($scope) {
        var self = this
        console.log("sdfsr")
        if ($scope.text) {
              console.log($scope.text)
              $scope.text = '';
            }
    } 
    
}())