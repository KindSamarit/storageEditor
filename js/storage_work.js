// Работа с localStorage
(function() {
    var Driver = {
        loadItem: function () {
            if (arrStorage) {
                var stor = localStorage.getItem("to-do");
                if (stor === "") {
                    return false;
                } else {
                    var arrStorage = JSON.parse(stor);
                    return arrStorage;
                }
            }
        },
        saveItems: function (posts) {
            localStorage.setItem("to-do", JSON.stringify(posts));
        }
    };
    window.driver = Driver;
    console.log();
}());
