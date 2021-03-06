(function() {
    "use strict";
    function constructInterface(cnt, prefix) {
        this.prefix = prefix;
        this.content =  cnt;
        this.input = this.content.querySelector(".form-control");
        this.createButton = this.content.querySelector(".create");
        this.content_text = this.content.querySelector(".content_text");
        this.posts = []; // Массив постов
        this.icon = this.content.querySelector(".icon");
        this.createButton.addEventListener("click", this.createPost.bind(this));
    }

    constructInterface.prototype.getPost = function() {
        var arr = driver.loadItem(this.prefix);
        for (var i = 0; i < arr.length; i++) {
            this.workAtButton(arr[i]);
        }
    };
    constructInterface.prototype.createPost = function() {
        this.workAtButton();
        driver.saveItems(this.posts, this.prefix);
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

    window.constructInterface = constructInterface;
    
}());