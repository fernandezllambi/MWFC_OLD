/**
 * Created by Rod on 8/18/15.
 */
angular.module('starter.services', [])

    .factory('AccountService', function () {
        var user = null;
        return {
            login: function (username, password) {
                if (true) {
                    user = {
                        number: 1025373,
                        name: "Carlos Ham",
                        image: "http://socios.mwfc.com.uy/Fotos/8e3abe47-e9e2-e411-8265-f0761c3b699a.jpg"
                    };
                    window.localStorage.setItem("user", JSON.stringify(user));
                }
            },
            isAuthorized: function () {
                return this.getUser() != null;
            },
            logout: function () {
                user = null;
                window.localStorage.removeItem("user");
            },
            getUser: function () {
                return JSON.parse(window.localStorage.getItem("user"));
            }
        };
    });