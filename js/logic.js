(function() {
    "use strict";

    // Объявление переменных

    var content,
        input,
        createButton,
        content_text,
        posts,
        icon;

    // Инициализация

    content = document.getElementsByClassName("content_app")[0];
    input = document.getElementById("writing_input");
    createButton = document.getElementById("create");
    content_text = document.getElementsByClassName("content_text")[0];
    posts = []; // Массив постов
    icon = document.getElementsByClassName("icon");

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

    window.sbutton = workAtButton;
    window.pans = posts;

    window.onload = function() {
        function createPost() {
            workAtButton();
            driver.saveItems();

        }

        createButton.addEventListener("click", createPost);
        getPost();

        function getPost() {
            driver.loadItem();
        }
    };

}());