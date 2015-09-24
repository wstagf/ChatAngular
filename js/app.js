var app = angular.module('surveyApp', []);
app.controller('survey', function ($scope) {

    $scope.listQuestions = [];

    for (var i = 1; i <= 10; i++) {
        $scope.question = {
            id: i,
            title: 'Pergunta ' + i,
            description: 'texto da pergunta ' + i,
            tipe: 'aberta',
            qdeCaracter: 10 + i,
            answered: false,
            reply: ''
        }
        $scope.listQuestions.push($scope.question);
    }

    console.log($scope.listQuestions);


});

