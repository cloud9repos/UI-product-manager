(function() {
    "use strict"
    
    angular
        .module("productManagement")
        .controller("DashboardCtrl", 
                        ["$scope",
                        DashboardCtrlFunc]);
                    
    function DashboardCtrlFunc($scope) {
        console.log("test===========")
        
        var self = this
        
       
        
    }
    
    
}())