// JavaScript source code
(function () {
    fetch('https://ggra-development.azurewebsites.net/api')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            var main = "";
            for (index = 0; index < data.length; index++) {
                main += data[index].id + " " + data[index].name + "<br />";
            }
            document.getElementById("membersInfo").innerHTML = main;
        })
}());