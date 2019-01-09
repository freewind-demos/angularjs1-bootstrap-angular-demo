const app = angular.module('app', ['helloModule'])

angular.bootstrap(document.getElementById('main'), [app.name]);
