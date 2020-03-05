(async function fetchJSON() {
    const response = await fetch('https://ggra-development.azurewebsites.net/api')
    const data = await response.json();

    var ulMentoringList = document.createElement("UL");
    var ulReligiousOrganizationsList = document.createElement("UL");
    var ulHealthCareRecoveryList = document.createElement("UL");
    var ulOtherList = document.createElement("UL");

    var ulOrganList = document.createElement("UL");

    for (index = 0; index < data.length; index++) {

        var listItem = document.createElement("LI");
        var textNode = document.createTextNode(data[index].name);
        listItem.appendChild(textNode);

        var itemIndexId = "listItem" + index;
        listItem.setAttribute("id", itemIndexId);
 //       var classAttribute = "class1";
 //       listItem.setAttribute("class", classAttribute);

   //     listItem.addEventListener("click", function (e) { boop(e.target, data, this.id); }, false);
    //    listItem.addEventListener("click", function () { boop3(data, this.id); }, false);
  
        var category = data[index].category;
        if (category == "mentoring services") {
            listItem.setAttribute("class", "classMentoringClass");
            //listItem.style.display = "none";
            ulMentoringList.appendChild(listItem);
        }
        else if (category == "Religious Organizations") {
            listItem.setAttribute("class", "classReligiousOrganizations");
            ulReligiousOrganizationsList.appendChild(listItem);
        }
        else if (category == "Healthcare/Recovery") {
            ulHealthCareRecoveryList.appendChild(listItem);
            listItem.setAttribute("class", "classHealthCareRecovery");
        }
        else
        {
            ulOtherList.appendChild(listItem);
            listItem.setAttribute("class", "classOther");
        }

   
        var liOrganList = document.createElement("LI");
        var nameNode = document.createTextNode(data[index].name);
        liOrganList.appendChild(nameNode);
        var addressNode = document.createTextNode(data[index].address);
        liOrganList.appendChild(addressNode);
        ulOrganList.appendChild(liOrganList);
 

    }
  //     document.appendChild(ulOrganList);

    var elButton1 = document.getElementById("button1");
    elButton1.addEventListener('click', function () { myFunction3("classMentoringClass"); }, false);

    var elButton2 = document.getElementById("button2");
    elButton2.addEventListener('click', function () { myFunction3("classReligiousOrganizations"); }, false);

    var elButton2 = document.getElementById("button3");
    elButton2.addEventListener('click', function () { myFunction3("classHealthCareRecovery"); }, false);

    var elButton2 = document.getElementById("button4");
    elButton2.addEventListener('click', function () { myFunction3("classOther"); }, false);

    document.getElementById("mentoringServices").appendChild(ulMentoringList);
    document.getElementById("ReligiousOrganizations").appendChild(ulReligiousOrganizationsList);
    document.getElementById("HealthCareRecovery").appendChild(ulHealthCareRecoveryList);
    document.getElementById("Other").appendChild(ulOtherList);  
    document.getElementById("test1").appendChild(ulOrganList);   

}());   // ebd

function myFunction3(className) {
    var memberItems = document.getElementsByClassName(className);
    if (memberItems.length > 0) {
        for (var i = 0; i < memberItems.length; i++) {
            if (memberItems[i].style.display === "none") {
                memberItems[i].style.display = "list-item";
            }
            else {
                memberItems[i].style.display = "none";
            }
        }   // end of for
    } // end of if
}   // end of function
/*
function myFunction2() {
    var memberItems = document.getElementsByClassName("mentoringClass");
 
    if (memberItems.length > 0) {
        for (var i = 0; i < memberItems.length; i++) {
            if (memberItems[i].style.display === "none") {
                memberItems[i].style.display = "list-item";
            }
            else {
                memberItems[i].style.display = "none";
            }
        }   // end of for
    } // end of if
}   // end of function
*/
function boop(e, json, elementId) {
    var index = 0;
    if (elementId == "listItem" + 1) {
        var index = 1;
    }
    if (elementId == "listItem" + 2) {
        var index = 2;
    }
    var unorderedList = document.createElement("ul");
    var listItemTemp = document.createElement("li");
    var textNode = document.createTextNode(json[index].address);
    listItemTemp.appendChild(textNode);

    unorderedList.appendChild(listItemTemp);
    e.appendChild(unorderedList);
    //listPopulator(unorderedList, json);
    //  test("Success");
}


function boop2(element, json, elementId) {
    var index = elementId.substring(8, elementId.length);
    var unorderedList = document.createElement("ul");

    //listPopulatorv0(unorderedList, json[index]);
    addItemToList(unorderedList, json[index].phoneNumber);
    addItemToList(unorderedList, json[index].address);

    element.appendChild(unorderedList);
  //  test("Success");
}
/*
function boop3(json, elementID)
{
    var index = elementId.substring(8, elementId.length);
    var unorderedList = document.createElement("ul");
    addItemToList(unorderedList, json[index].name);
    addItemToList(unorderedList, json[index].phoneNumber);
    addItemToList(unorderedList, json[index].address);
    //   document.getElementById("test1").appendChild(unorderedList); 
    var testNode = document.create
    document.getElementById("test1").appendChild(testNode);
}
*/

function addItemToList(list, content) {
    var textNode = document.createTextNode(content);
    var listItem = document.createElement("li");
    listItem.appendChild(textNode);
    list.appendChild(listItem);
}

/*
function listItem(list, json)
{
    for (var key in json)
    {
        var textNode = document.createTextNode(key + " " + obj[key] + " ");
        var listItem = document.createElement("LI");
        listItem.appendChild(textNode);
        list.appendChild(listItem);
    }
}
*/

