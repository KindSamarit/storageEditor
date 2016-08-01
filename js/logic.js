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

    content = document.getElementById("content_app");
    input = document.getElementsByClassName("form-control")[0];
    createButton = document.getElementsByClassName("create")[0];
    content_text = document.getElementById("content_text");
    posts = []; // Массив постов
    icon = document.getElementsByClassName("icon");

    // Объявление функций

    function createPost() {
        var post = document.createElement("div");
        post.className = "post";
        var text = document.createTextNode(input.value);
        var icon = document.createElement("span");
        icon.className = "glyphicon glyphicon-remove-sign icon";
        post.appendChild(icon);
        post.appendChild(text);
        content_text.appendChild(post);
        posts.push(text.data);
        localStorage.setItem("to-do", posts);
    }

    createButton.addEventListener("click", createPost);
    window.addEventListener("load", getPost);
    window.addEventListener("load", removePost);

    function getPost() {
        var stringStorage = localStorage.getItem("to-do");
        var arrStorage = stringStorage.split(",");
        for (var i = 0; i < arrStorage.length; i++) {
            var newPost = document.createElement("div");
            var newText = document.createTextNode(arrStorage[i])
            newPost.className = "post";
            var newIcon = document.createElement("span");
            newIcon.className = "glyphicon glyphicon-remove-sign icon";
            newPost.appendChild(newIcon);
            newPost.appendChild(newText);
            content_text.appendChild(newPost);
        }
    }


    function removePost() {
        for (var x = 0; x < icon.length; x++) {
            icon[x].onclick = function() {
                this.parentNode.style.display = "none";
            };
        }
    }

}());