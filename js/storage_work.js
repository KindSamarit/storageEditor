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
        saveItems: function (prefix) {
            localStorage.setItem(prefix, JSON.stringify(this.posts));
        }
    };
    window.driver = Driver;
    console.log();
}());
