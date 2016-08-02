// Работа с localStorage
(function() {
    var Driver = {
        loadItem: function () {
            var arrStorage = JSON.parse(localStorage.getItem("to-do"));
            for (var i = 0; i < arrStorage.length; i++) {
               sbutton(arrStorage[i]);
            }
        },
        saveItems: function () {
            localStorage.setItem("to-do", JSON.stringify(pans));
        }
    };
    window.driver = Driver;
}());
