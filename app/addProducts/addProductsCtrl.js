(function() {
    "use strict"
    
    angular
        .module("productManagement")
        .controller("AddProductsCtrl", 
                        ["$scope",
                        AddProductsCtrl]);
                    
    function AddProductsCtrl($scope) {
        
        //initialize collapse settings
        initiallizeCollapseSetting($scope)
        
        var self = this
        
        self.test = function() {
            var self = this
            
            setTimeout(test2, 5000);
            console.log("clicked")
        }
        
    }
    
    var test2 = function() {
        console.log("test tme")
    }
    
    var initiallizeCollapseSetting = function($scope) {
        
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
    
}())