(async function fetchJSON()
{
    const response = await fetch('https://ggra-development.azurewebsites.net/api')
    const data = await response.json();

    var ulSuperList  = document.createElement("UL");
    var ulMentoringList = document.createElement("UL");
    var ulReligiousOrganizationsList = document.createElement("UL");
    var ulHealthCareRecoveryList = document.createElement("UL");

    for (index = 0; index < data.length; index++) {

        var listItem = document.createElement("LI");
        var textNode = document.createTextNode(data[index].name);
        listItem.appendChild(textNode);

        var itemIndexId = "listItem" + index;
        listItem.setAttribute("id", itemIndexId);
        var classAttribute = "class1";
        listItem.setAttribute("class", classAttribute);

        listItem.addEventListener("click", function (e) { boop(e.target, data, this.id); }, false);
        ulSuperList.appendChild(listItem);

        var category = data[index].category;
        if (category == "mentoring services") {
            listItem.setAttribute("class", "mentoringClass")
            listItem.style.display = "none";
            ulMentoringList.appendChild(listItem);
        }
        else if (category == "Religious Organizations") {
            ulReligiousOrganizationsList.appendChild(listItem);
        }
        else if (category == "Healthcare/Recovery") {
            ulHealthCareRecoveryList.appendChild(listItem);
        }
   
    }

    function addItemToList(list, content) {
        var textNode = document.createTextNode(content);
        var listItem = document.createElement("li");
        listItem.appendChild(textNode);
        list.appendChild(listItem);
    }

 //   var breakItem = document.createElement("BR");
 //   ulSuperList.appendChild(breakItem);
    document.getElementById("div1").appendChild(ulSuperList);

    var elUserName = document.getElementById("button2");
    //   elUserName.onclick = myFunction3("mentoringClass");
    elUserName.addEventListener('click', function () { myFunction3("mentoringClass"); }, false);

    document.getElementById("mentoringServices").appendChild(ulMentoringList);
    document.getElementById("ReligiousOrganizations").appendChild(ulReligiousOrganizationsList);
    document.getElementById("HealthCareRecovery").appendChild(ulHealthCareRecoveryList);
/*
 //   var newDiv = document.createElement("div"); 
    var newContent = document.createTextNode("Hi there and greetings!"); 
 //   newDiv.appendChild(newContent);  
    document.getElementById("div2").appendChild(newContent);

    for (index = 0; index < data.length; index++) {

        var listItem2 = document.createElement("LI");
        var textNode2 = document.createTextNode(data[index].name);
        listItem2.appendChild(textNode2);

        var itemIndexId = "listItem" + index;
        listItem2.setAttribute("id", itemIndexId);

        var classAttribute = "class2";
        listItem2.setAttribute("class", classAttribute);

        listItem2.addEventListener("click", function (e) { boop(e.target, data, this.id); }, false);
        ulSuperList2.appendChild(listItem2);
    }
    document.getElementById("div3").appendChild(ulSuperList2);
 */   

}());

function myFunction3(className)
{
 //   document.write(here1);
    
 
    var memberItems = document.getElementsByClassName(className);
    if (memberItems.length > 0)
    {
        for (var i = 0; i < memberItems.length; i++) {
            if (memberItems[i].style.display === "none")
            {
                memberItems[i].style.display = "list-item";
            }
            else
            {
                memberItems[i].style.display = "none";
            }
        }   // end of for
    } // end of if
}   // end of function

function myFunction2() {
    var memberItems = document.getElementsByClassName("mentoringClass");
    /*
  //  var url = "https://mt.googleapis.com/vt/icon/name=icons/onion/SHARED-mymaps-container-bg_4x.png,icons/onion/SHARED-mymaps-container_4x.png,icons/onion/1676-religious-kneeling_4x.png&highlight=ff000000,006064&scale=0.5";
  */
    if (memberItems.length > 0) {
        for (var i = 0; i < memberItems.length; i++) {
            if (memberItems[i].style.display === "none")
            {
                memberItems[i].style.display = "list-item";
            }
            else
            {
                memberItems[i].style.display = "none";
            }
        }   // end of for
    } // end of if
}   // end of function

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
    test("Success");
}

function listItem(list, json) {
    for (var key in json) {
        var textNode = document.createTextNode(key + " " + obj[key] + " ");
        var listItem = document.createElement("LI");
        listItem.appendChild(textNode);
        list.appendChild(listItem);
    }
}

