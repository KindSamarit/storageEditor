// Работа с localStorage
(function() {
    var Driver = {
        loadItem: function (prefix) {
            var stor = localStorage.getItem(prefix);
            if (stor === "") {
                return [];
            } else {
                return JSON.parse(stor);
            }
        },
        saveItems: function (posts, prefix) {
            localStorage.setItem(prefix, JSON.stringify(posts));
        }
    };
    window.driver = Driver;
    console.log();
}());
