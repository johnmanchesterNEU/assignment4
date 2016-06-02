(function(){
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);

    function LoginController($location, UserService) {

        var vm = this;

        vm.login = login;

        function login(username, password){
            UserService
                .findUserByCredentials(username,password)
                .then(function(response){
                    var user = response.data;
                    if(user._id){
                        $location.url("/profile/" + user._id);
                    }else {
                        vm.error = "User not found";
                    }
            });
            //var user = UserService.findUserByCredentials(username, password);
            //   if(user) {
            //      $location.url("/profile/" + user._id);
            // } else {
            //    vm.error = "User not found";
            // }
        }


    /*
        function login (username, password) {
            UserService
                .findUserByUsernameAndPassword(username, password)
                .then(function(response) {
                    console.log(response);
                    var user = response.data;
                    if(user) {
                        var id = user._id;
                        $location.url("/profile/" + id);
                    } else {
                        vm.error = "User not found";
                    }
                });
        }*/
    }
})();