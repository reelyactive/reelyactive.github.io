angular.module('landing', [ 'ui.bootstrap' ])

  // Interaction controller
  .controller('InteractionCtrl', function($scope) {
    $scope.isElementFocus = false;
    $scope.isElementCollapsed = [ false, false, false, false, false ];
    $scope.isElementDetailed = [ false, false, false, false, false ];

    // Toggle between system overview and single element focus
    $scope.selectElement = function(element) {
      if($scope.isElementFocus) {
        $scope.isElementFocus = false;
        $scope.isElementCollapsed = [ false, false, false, false, false ];
        $scope.isElementDetailed = [ false, false, false, false, false ];
        return;
      }
      $scope.isElementFocus = true;
      switch(element) {
        case 0:
          $scope.isElementCollapsed = [ false, true, true, true, true ];
          $scope.isElementDetailed = [ true, false, false, false, false ];
          break;
        case 1:
          $scope.isElementCollapsed = [ true, false, true, true, true ];
          $scope.isElementDetailed = [ false, true, false, false, false ];
          break;
        case 2:
          $scope.isElementCollapsed = [ true, true, false, true, true ];
          $scope.isElementDetailed = [ false, false, true, false, false ];
          break;
        case 3:
          $scope.isElementCollapsed = [ true, true, true, false, true ];
          $scope.isElementDetailed = [ false, false, false, true, false ];
          break;
        case 4:
          $scope.isElementCollapsed = [ true, true, true, true, false ];
          $scope.isElementDetailed = [ false, false, false, false, true ];
          break;
      }
    }
  });
