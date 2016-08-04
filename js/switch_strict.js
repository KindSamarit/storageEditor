(function() {
    var strictButtonStorage = document.getElementById("switch_api");
    var strictButtonApi = document.getElementById("switch_storage");
    strictButtonStorage.innerHTML = "localStorage";
    strictButtonApi.innerHTML = "API";

    if (driver.action === "default") {
        test1.getPost();
    }

    function switchNameStorage() {
            driver.action = "default";
        }
    function switchNameApi() {
        driver.action = "api";
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "http://www/api.php", true);
        xhr.send("action=getList");
        console.log(xhr.status);
    }
    console.log(driver);
    strictButtonStorage.addEventListener("click", switchNameStorage);
    strictButtonApi.addEventListener("click", switchNameApi);
}());

