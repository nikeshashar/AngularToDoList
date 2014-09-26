function TodoCtrl($scope) {
    

    $scope.todos = [
      {text: 'Make Angular Todo List', done:false},
      {text: 'Finish Angular Todo List', done:false}
    ];

    $scope.getTotalTodos = function() {
      return $scope.todos.length;

    };

    $scope.clearCompleted = function() {
       $scope.todos = _.filter($scope.todos, function(todo){
          return !todo.done;
       })

    };

    $scope.addTodo = function() {
      $scope.todos.push({text:$scope.formTodoText, done:false});
      $scope.formTodoText = '';
    };
}