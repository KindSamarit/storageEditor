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

    function createPost() {
        workAtButton();
        localStorage.setItem("to-do", JSON.stringify(posts));
    }

    createButton.addEventListener("click", createPost);
    getPost();

    function getPost() {
        var arrStorage = JSON.parse(localStorage.getItem("to-do"));
        for (var i = 0; i < arrStorage.length; i++) {
            workAtButton(arrStorage[i]);
        }
    }


}());