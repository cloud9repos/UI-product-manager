(function() {
    "use strict"
    
    angular
        .module("productManagement")
        .controller("AddProductsCtrl", 
                        ["$scope",
                        AddProductsCtrlFunc]);
                    
    function AddProductsCtrlFunc($scope) {
        console.log("test")
        
        var self = this
        
        //intialize multiselect gadgets
        self.initMultiSelectGadgets($scope)
        
        //intialize singleselect gadgets
        self.initSingleSelectGadgets($scope)
        
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
    
    AddProductsCtrlFunc.prototype.initMultiSelectGadgets = function($scope) {
        // fetch product type
        $scope.singleSelectProductTypeOptions = {
            type: "odata",
            serverFiltering: true,
            autoWidth: false,
            transport: {
                read: {
                    url: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products",
                }
            }
        };
        
        // fetch Vendor
        $scope.singleSelectVendorOptions = {
            type: "odata",
            serverFiltering: true,
            autoWidth: false,
            transport: {
                read: {
                    url: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products",
                }
            }
        };
        
        // fetch collections
        $scope.multiSelectCollectionsOptions = {
            placeholder: "",
            dataTextField: "ProductName",
            dataValueField: "ProductID",
            valuePrimitive: true,
            autoBind: false,
            autoWidth: false,
            dataSource: {
                type: "odata",
                serverFiltering: true,
                transport: {
                    read: {
                        url: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products",
                    }
                }
            }
        };
        
        // fetch tags
        $scope.multiSelectTagsOptions = {
            placeholder: "",
            dataTextField: "ProductName",
            dataValueField: "ProductID",
            valuePrimitive: true,
            autoBind: false,
            autoWidth: false,
            dataSource: {
                type: "odata",
                serverFiltering: true,
                transport: {
                    read: {
                        url: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products",
                    }
                }
            }
        };
    }
    
    AddProductsCtrlFunc.prototype.initSingleSelectGadgets = function($scope) {
        
    }
    
    /*
        $scope.data: {
            title
        }
    */
    AddProductsCtrlFunc.prototype.submitAddProducts = function($scope) {
        var self = this
        
        console.log("sd====== 2", $scope.data)
        
    } 
    
    
    
}())