// Работа с localStorage
(function() {
    var Driver = {
        loadItem: function () {
            if (arrStorage) {
                if (stor === "") {
                    return [];
                } else {
                    var arrStorage = JSON.parse(stor);
                    return arrStorage;
                }
                var arrStorage = JSON.parse(localStorage.getItem("to-do"));
                var store = localStorage.getItem("to-do");
                return arrStorage;
            }
        },
        saveItems: function (posts) {
            localStorage.setItem("to-do", JSON.stringify(posts));
        }
    };
    window.driver = Driver;
    console.log();
}());
