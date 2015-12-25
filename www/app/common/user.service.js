(function(){
angular.module('DollarTrackerApp')
.factory('user', ['$window', '$q','$auth', User]);
                  
function User($window,  $q, $auth) {
    var storage = $window.localStorage;
    var userKey = "dollarTrackerUser";

    var user = {
        id: null,
        displayName: '',
        email: '',
        avatarUrl: '',
        setUser: setUser,
        removeUser: removeUser,
        autoLogin: autoLogin,
        forceReloadImg: forceReloadImg,
        updatePassword: updatePassword,
        cleanAll: cleanAll
    };

    return user;

    function setUser(newuser) {
        if (newuser.id) { user.id = newuser.id }
        else {
            user.id = newuser.UserId;
        }
        user.displayName = newuser.DisplayName;
        user.email = newuser.Email;
        user.memberSince = newuser.MemberSince;
     //  user.avatarUrl = api.getUrl('profilePic') + "/" + user.id + "?" + (new Date()).getTime();
        storage.setItem(userKey, JSON.stringify(newuser));
    }
    function removeUser() {
        user.id = null;
        user.displayName = '';
        user.email = '';
        user.memberSince = '';
        storage.removeItem(userKey);
    }

    function autoLogin() {
        var userFromStorage = storage.getItem(userKey);
        if (userFromStorage) {
            user.setUser(JSON.parse(userFromStorage));
        }
    }

    function forceReloadImg() {
      //  user.avatarUrl = api.getUrl('profilePic') + "/" + user.id + "?" + (new Date()).getTime();
    }

    function updatePassword(data) {
        return api.post('updatePassword', data);
    }

    function cleanAll () {
        var tokenName = 'satellizer_token'; //todo: will replace this one
        delete $window.localStorage[tokenName];
        user.removeUser();
        $auth.logout();
    }
}
})();