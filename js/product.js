angular.module('product', [ 'ui.bootstrap', 'reelyactive.cormorant'])

  // Product controller
  .controller('ProductCtrl', function($scope, $uibModal, $log, $document,
                                      cormorant) {
    var $ctrl = this;

    // Initiate representation variables
    $scope.graph = { 
      product: { "@id": "product", "@type": "schema:Product" }
    };
    $scope.json = {
      "@context": { "schema": "http://schema.org/" },
      "@graph": [ $scope.graph.product ]
    };
    $scope.product = {};

    // Handle representation form change
    $scope.change = function () {
      for(var key in $scope.product) {
        if($scope.product.hasOwnProperty(key)) {
          if(key === 'manufacturer') {
            var hasNonEmptyManufacturerField = false;
            $scope.graph.product["schema:manufacturer"] = 
                                           { "@type": "schema:Organization" };
            for(var field in $scope.product.manufacturer) {
              if($scope.product.manufacturer.hasOwnProperty(field)) {
                if(!$scope.product.manufacturer[field].length) {
                  delete $scope.graph.product["schema:manufacturer"][field];
                }
                else {
                  hasNonEmptyManufacturerField = true;
                  $scope.graph.product["schema:manufacturer"]["schema:" + field] =
                                           $scope.product.manufacturer[field];
                }
              }
            }
            if(!hasNonEmptyManufacturerField) {
              delete $scope.graph.product["schema:manufacturer"];
            }
          }
          else if(!$scope.product[key].length) {
            delete $scope.graph.product["schema:" + key];
          }
          else {
            $scope.graph.product["schema:" + key] = $scope.product[key];
          }
        }
      }
    };

    $ctrl.webify = function() {
      var items = { target: "web", json: $scope.json };
      $uibModal.open( { animation: true,
                        templateUrl: 'export.html',
                        controller: 'ExportModalCtrl',
                        controllerAs: '$ctrl',
                        size: 'md',
                        resolve: { items: function() { return items; } }
                      } );
    };

    // Fetch story using cormorant
    $scope.fetchStory = function(url) {
      cormorant.getStory(url, function(story) {
        if(story) {
          $scope.fetchedStory = JSON.stringify(story, null, "  ");
        }
        else {
          $scope.fetchedStory = 'No JSON-LD representation of your product was found at the fetched URL.  Try again?';
        }
      });
    }

  })

  // Export modal controller
  .controller('ExportModalCtrl', function($scope, $uibModalInstance, items) {
    var $ctrl = this;

    $scope.markup = '<script type=\"application/ld+json\">\n' +
                    JSON.stringify(items.json, null, "  ") + '\n</script>';

    $ctrl.ok = function() {
      $uibModalInstance.close();
    };

  });
