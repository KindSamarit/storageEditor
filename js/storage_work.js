// Работа с localStorage
(function() {
    var Driver = {
        loadItem: function () {
            var arrStorage = JSON.parse(localStorage.getItem("to-do"));
            return arrStorage;
        },
        saveItems: function (posts) {
            localStorage.setItem("to-do", JSON.stringify(posts));
        }
    };
    window.driver = Driver;
}());
