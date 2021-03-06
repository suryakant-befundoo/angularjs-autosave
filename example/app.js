
var app = angular.module('Fundoo.Directives.AutoSave.Example',
  ['ngRoute', 'Fundoo.Directives.AutoSave', 'toaster']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'form.html',
        controller: 'FormController as frmCtrl'
      })
      .when('/next', {
        templateUrl: 'display.html',
        controller: 'DisplayController as displayCtrl'
      })
      .otherwise({redirectTo: '/'});
  }
]);

app.controller('FormController', ['$location', 'toaster', '$scope',
    function($location, toaster, $scope) {
      var self = this;
      self.modelObj = {name: '', email: '', gender: ''};
      self.gender = ['Male', 'Female'];
      self.modelObj.hobbies = [
        {value: 'Playing', selected: false },
        {value: 'Reading', selected: false },
        {value: 'Surfing', selected: false },
        {value: 'Drawing', selected: false }
      ];

      self.submitForm = function () {
        toaster.pop('success', '', 'Form has been submitted')
      };

      self.partialSave = function () {
        toaster.pop('success', '', 'Form auto-save has been triggered');
      };

      self.next = function () {
        $location.path('/next');
      };
    }
  ]);

app.controller('DisplayController', [
    function() {
      var self = this;
      self.display = 'Random Data';
    }
  ]);
