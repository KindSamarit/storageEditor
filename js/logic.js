(function() {
    "use strict";
    function constructInterface() {
        var self = this;
        this.content =  document.getElementById("content_app");
        this.input = document.getElementById("writing_input");
        this.createButton = document.getElementById("create");
        this.content_text = document.getElementById("content_text");
        this.posts = []; // Массив постов
        this.icon = document.getElementsByClassName("icon");
        this.createButton.addEventListener("click", function () {
            self.createPost()
        });
        this.getPost();
    }

    constructInterface.prototype.getPost = function() {
        var arr = driver.loadItem();
        for (var i = 0; i < arr.length; i++) {
            this.workAtButton(arr[i]);
        }
    };
    constructInterface.prototype.createPost = function() {
        this.workAtButton();
        driver.saveItems(this.posts);
    };
    constructInterface.prototype.workAtButton = function(storage) {
        var post = document.createElement("div");
        var icon = document.createElement("span");
        post.className = "post";
        icon.className = "glyphicon glyphicon-remove-sign icon";
        icon.onclick = function() {
            this.parentNode.style.display = "none";
        };
        post.appendChild(icon);
        storage = storage || this.input.value;
        post.appendChild(document.createTextNode(storage));
        this.content_text.appendChild(post);
        this.posts.push(storage);
    };

    var test = new constructInterface();
}());