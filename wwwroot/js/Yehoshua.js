function getGGRA() {
    //document.open();
    document.write("start of script 3", "<br>");

    fetch('https://ggra-development.azurewebsites.net/api')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            var ulSuperList = document.createElement("UL");


            for (index = 0; index < data.length; index++) {

                var listItem = document.createElement("LI");
                var textNode = document.createTextNode(data[index].name);
                listItem.appendChild(textNode);

                var itemIndexId = "listItem" + index;
                listItem.setAttribute("id", itemIndexId);
                listItem.setAttribute("class", "listItem");

                listItem.addEventListener("click", function (e) { boop(e.target, data, this.id); }, false);
                ulSuperList.appendChild(listItem);
            }
            document.getElementById("membersInfo").appendChild(ulSuperList);
        });
    document.write("end of script", "<br>");
    document.close();
}

function boop(element, json, elementId) {
    var index = elementId.substring(8, elementId.length);
    var unorderedList = document.createElement("ul");

    //listPopulatorv0(unorderedList, json[index]);
    addItemToList(unorderedList, json[index].phoneNumber);
    addItemToList(unorderedList, json[index].address);

    element.appendChild(unorderedList);

    test(index);
}

function addItemToList(list, content) {
    var textNode = document.createTextNode(content);
    var listItem = document.createElement("li");
    listItem.appendChild(textNode);
    list.appendChild(listItem);
}

function listPopulatorv0(list, json, index) {
    for (var key in json[index]) {
        addItemToList(list, key + " " + obj[index][key])
    }
}


function getGGRAv0() {
    //document.open();
    document.write("start of script 3", "<br>");

    fetch('https://ggra-development.azurewebsites.net/api')
        .then((response) => {
            return response.json();
        })
        .then((data) => {


            var ulSuperList = document.createElement("UL");

            for (index = 0; index < data.length; index++) {
                var unorderedList = document.createElement("UL");
                var superListItem = document.createElement("li");
                superListItem.appendChild(unorderedList);

                var obj = data[index];
                for (var key in obj) {
                    var listItem = document.createElement("LI");
                    var textNode = document.createTextNode(key + " " + obj[key] + " ");
                    listItem.appendChild(textNode);
                    unorderedList.appendChild(listItem);
                }
                ulSuperList.appendChild(superListItem);
            }
            document.getElementById("membersInfo").appendChild(ulSuperList);
        });
    document.write("end of script", "<br>");
    document.close();
}

function test(message) {
    document.getElementById("test").innerHTML = message;
}