/**
 * Copyright reelyActive 2017
 * We believe in an open Internet of Things
 */


DEFAULT_SOCKET_URL = 'https://pareto.reelyactive.com/';


angular.module('websocket', [ 'ui.bootstrap', 'reelyactive.beaver'])

  /**
   * ServiceCtrl Controller
   * Handles the manipulation of all variables accessed by the HTML view.
   */
  .controller('ServiceCtrl', function($scope, beaver) {
    var socket;

    $scope.connected = false;
    $scope.paused = false;
    $scope.placeholder = 'Paste in your API token';

    beaver.on('appearance', handleEvent);
    beaver.on('keep-alive', handleEvent);
    beaver.on('displacement', handleEvent);
    beaver.on('disappearance', handleEvent);

    // Handle the event received on the websocket by beaver.js
    function handleEvent(event) {
      if($scope.paused) {
        return;
      }
      $scope.currentEvent = event;
      $scope.$apply();
    }

    // Toggle between running and paused
    $scope.toggle = function() {
      $scope.paused = !$scope.paused;
    };

    // Connect via websocket with the given token
    $scope.connect = function(token) {
      var options = {};
      if(token && (typeof(token) === 'string')) {
        options.query = { token: token };
      }
      else {
        $scope.placeholder = 'No really, paste in your API token!';
        $scope.connected = false;
        return;
      }
      socket = io.connect(DEFAULT_SOCKET_URL, options);
      beaver.listen(socket);
      socket.on('connect', function() {
        $scope.connected = true;
        $scope.$apply();
      });
    };

  });
