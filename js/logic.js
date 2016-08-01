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
        var text = document.createTextNode(input.value);
        var icon = document.createElement("span");
        post.className = "post";
        icon.className = "glyphicon glyphicon-remove-sign icon";
        post.appendChild(icon);
        post.appendChild(text);
        content_text.appendChild(post);
        posts.push(text.data);
        removePost();
    }

    function createPost() {
        workAtButton();
        localStorage.setItem("to-do", JSON.stringify(posts));
    }

    createButton.addEventListener("click", createPost);
    window.addEventListener("load", getPost);

    function getPost() {
        var arrStorage = JSON.parse(localStorage.getItem("to-do"));
        for (var i = 0; i < arrStorage.length; i++) {
            var newPost = document.createElement("div");
            var newText = document.createTextNode(arrStorage[i])
            newPost.className = "post";
            var newIcon = document.createElement("span");
            newIcon.className = "glyphicon glyphicon-remove-sign icon";
            newPost.appendChild(newIcon);
            newPost.appendChild(newText);
            content_text.appendChild(newPost);
            removePost();
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