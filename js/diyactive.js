angular.module('diyActive', [ 'ui.bootstrap' ])

  // Interaction controller
  .controller('InteractionCtrl', function($scope) {

    // reelyHacktive carousel
    $scope.hackSlides = [
      { image: "images/reelyHacktive-smartSpaceDevices.jpg",
        href: "make-a-smart-space.html",
        caption: "Visualise all the nearby Bluetooth Smart devices..." },
      { image: "images/reelyHacktive-smartSpacePeople.jpg",
        href: "quickyactive.html",
        caption: "and associate people with those devices in smartspaces" },
      { image: "images/reelyHacktive-barterer.jpg",
        href: "https://www.npmjs.com/package/barterer",
        caption: "Sniff wireless packets via our barterer API..." },
      { image: "images/reelyHacktive-advlib.jpg",
        href: "http://reelyactive.github.io/advlib/",
        caption: "and actually decipher those packets with advlib" },
      { image: "images/reelyHacktive-barstool.jpg",
        href: "http://reelyactive.github.io/barstool/",
        caption: "Visualise real-time location with barstool..." },
      { image: "images/reelyHacktive-webExperiences.jpg",
        href: "https://www.youtube.com/watch?v=2JIL8y61tu0",
        caption: "and create location-based web experiences, or..." },
      { image: "images/reelyHacktive-mobile.jpg",
        href: "integrate-your-mobile-app.html",
        caption: "mobile experiences with our iOS & Android SDKs, or..." },
      { image: "images/reelyHacktive-midiot.jpg",
        href: "https://www.youtube.com/watch?v=ZVyQnCj6XQ0",
        caption: "even create music from wireless traffic with midiot" }
    ];

  });
