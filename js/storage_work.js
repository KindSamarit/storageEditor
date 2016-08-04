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
