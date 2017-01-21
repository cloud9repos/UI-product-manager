(function() {
    "use strict"
    
    angular
        .module("productManagement")
        .controller("AddProductsCtrl", 
                        ["$scope",
                        AddProductsCtrlFunc]);
                    
    function AddProductsCtrlFunc($scope) {
        
        var self = this
        
        $scope.optionsList = [
              "Java",
              "C",
              "C++",
              "AngularJs",
              "JavaScript"
            ];
        
        //initialize collapse settings
        self.initiallizeCollapseSetting($scope)
        
        $scope.submit = function() {
            return self.submitAddProducts($scope)
        }
        
    }
    
    AddProductsCtrlFunc.prototype.initiallizeCollapseSetting = function($scope) {
        
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
    
    /*
        $scope.data: {
            title
        }
    */
    AddProductsCtrlFunc.prototype.submitAddProducts = function($scope) {
        var self = this
        $scope.optionsList = [
              "Java",
              "C",
              "C++",
              "AngularJs",
              "JavaScript"
            ];
        console.log("sd====== 2")
    } 
    
}())