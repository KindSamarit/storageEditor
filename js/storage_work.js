// Работа с localStorage
(function() {
    var Driver = {
        loadItem: function (prefix) {
            var stor = localStorage.getItem(prefix);
            if (stor) {
                return JSON.parse(stor);
            } else {
                return [];
            }
        },
        saveItems: function (posts, prefix) {
            localStorage.setItem(this.prefix, JSON.stringify(posts));
        }
    };
    window.driver = Driver;
    console.log();
}());
