(function() {
    "use strict";
    function constructInterface(cnt) {
        this.content =  cnt;
        this.input = this.content.getElementsByClassName("form-control")[0];
        this.createButton = this.content.getElementsByClassName("create")[0];
        this.content_text = this.content.getElementsByClassName("content_text")[0];
        this.posts = []; // Массив постов
        this.icon = this.content.getElementsByClassName("icon");
        this.createButton.addEventListener("click", this.createPost.bind(this));
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

    var test = new constructInterface(document.getElementById("content_app"));
}());