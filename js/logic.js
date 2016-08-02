(function() {
    "use strict";

    function constructInterface(environment, prefix) {
        content = document.getElementById("content_app");
        input = document.getElementById("writing_input");
        createButton = document.getElementById("create");
        content_text = document.getElementById("content_text");
        posts = []; // Массив постов
        icon = document.getElementsByClassName("icon");
        createButton.addEventListener("click", createPost);
        this.getPost = constructInterface.prototype.getPost;
        this.createPost = constructInterface.prototype.createPost;
        this.workAtButton = constructInterface.prototype.workAtButton;
    }

    constructInterface.prototype.getPost = getPost;
    constructInterface.prototype.createPost = createPost;
    constructInterface.prototype.workAtButton = workAtButton;

    // Объявление переменных

    var content,
        input,
        createButton,
        content_text,
        posts,
        icon;

    // Инициализация



    // Объявление функций

    function workAtButton(storage) {
        var post = document.createElement("div");
        var icon = document.createElement("span");
        post.className = "post";
        icon.className = "glyphicon glyphicon-remove-sign icon";
        icon.onclick = function() {
            this.parentNode.style.display = "none";
        };
        post.appendChild(icon);
        storage = storage || input.value;
        post.appendChild(document.createTextNode(storage));
        content_text.appendChild(post);
        posts.push(storage);
    }



    function createPost() {
        workAtButton();
        driver.saveItems(posts);
    }

        //getPost();

    function getPost() {
        var arr = driver.loadItem();
        for (var i = 0; i < arr.length; i++) {
            workAtButton(arr[i]);
        }
    }





    console.log(constructInterface.prototype);

    var test = new constructInterface();
    test.getPost();


}());