/**
 * Created by mfissehaye on 10/13/15.
 */
app.directive('routeLoadingIndicator', function($rootScope) {
    return {
        restrict: 'E',
        template: "<div ng-show='isRouteLoading' class='loading'>" +
            "<div class='loading-indicator-body'>" +
            "<div class='spinner'><double-bounce-spinner style='position: absolute; top: 0; width: 100%; margin: 0 auto;'></double-bounce-spinner></div>" +
            "</div>" +
            "</div>",
        replace: true,
        link: function(scope, elem, attrs) {
            scope.isRouteLoading = false;

            $rootScope.$on('$routeChangeStart', function() {
                scope.isRouteLoading = true;
            });
            $rootScope.$on('$routeChangeSuccess', function() {
                scope.isRouteLoading = false;
            });
        }
    };
});
