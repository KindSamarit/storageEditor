// Работа с localStorage
(function() {
    var Driver = {
        loadItem: function () {
            if (arrStorage) {
                var arrStorage = JSON.parse(localStorage.getItem("to-do"));
                return arrStorage;
            } else {
                return false;
            }
        },
        saveItems: function (posts) {
            localStorage.setItem("to-do", JSON.stringify(posts));
        }
    };
    window.driver = Driver;
}());
