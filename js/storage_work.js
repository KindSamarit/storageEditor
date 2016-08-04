// Работа с localStorage
(function() {
    var Driver = {
        action: "default",
        loadItem: function (prefix) {
                if (this.action === "default") {
                    var stor = localStorage.getItem(prefix);
                    if (stor) {
                        return JSON.parse(stor);
                    } else {
                        return [];
                } 
                } else {
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', "http://www/api.php", false);
                    xhr.onreadystatechange = function() {
                        if (xhr.readyState != 4) return;
                        if (xhr.status != 200) {
                            console.log(xhr.status + " : " + xhr.statusText);
                        } else {
                            return xhr.responseText;
                        }
                    };
                    xhr.send("?action=getList");
                }
        },
        saveItems: function (posts, prefix) {
            if (this.action === "default") {
                localStorage.setItem(this.prefix, JSON.stringify(posts));
            }
        }
    };
    window.driver = Driver;
    console.log();
}());
