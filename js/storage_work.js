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
                    xhr.open('GET', "http://www/api.php?action=getList", true);
                    xhr.onreadystatechange = function() {
                        if (xhr.readyState != 4) return;
                        if (xhr.status != 200) {
                            console.log(xhr.status + " : " + xhr.statusText);
                        } else {
                             var data = xhr.responseText;
                            console.log(data);
                            var apiResult = new constructInterface(document.getElementById("content_app_left"), "api");
                            console.log(apiResult);
                            apiResult.getPost(data);
                        }
                    };
                    xhr.send();
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
