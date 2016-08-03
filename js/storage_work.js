// Работа с localStorage
(function() {
    var Driver = {
        loadItem: function () {
            var stor = localStorage.getItem("to-do");
            if (stor === "") {
                return [];
            } else {
                return JSON.parse(stor);
            }
        },
        saveItems: function (posts) {
            localStorage.setItem("to-do", JSON.stringify(posts));
        }
    };
    window.driver = Driver;
    console.log();
}());
