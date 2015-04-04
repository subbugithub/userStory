angular.module('myApp',['appRoutes','mainCtrl','authService','userCtrl','userService','storyService','storyCtrl'])


.config(function($httpProvider) {

	$httpProvider.interceptors.push('AuthInterceptor');
});