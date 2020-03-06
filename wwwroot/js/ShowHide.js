
var categoryIDArray = [
    "mentoringServices", "jobDevelopment", "mentalHealth",
    "governmentAgencies", "probationParole", "housingResources",
    "educationMentoring", "religiousOrganizations", "healthcareRecovery",
    "Other"
];

var categoriesDiv = document.getElementById("categories");

(async function fetchJson() {
    // get data from api
    const response = await fetch("https://ggra-development.azurewebsites.net/api");
    const data = await response.json();

    // add event listeners to test buttons
    document.getElementById("testButton0").addEventListener("click", showHideAll);
    document.getElementById("testButton1").addEventListener("click", showHideDetails);


    // add categories to the category div
    populateCategoryDiv();

    // add organizations to the category divs
    populateOrganizationDivs(document.getElementById("categories"), data);

    for (let el of document.querySelectorAll(".classOrganizationDetails")) el.style.display = "none";

    //for testing to ensure code execution
    document.getElementById("test").innerHTML = "Json fetch complete";
}())

var point = 0;
var checkpoint = "Checkpoint " + point;

// adds an item to a list
function addItemToList(list, content) {
    var textNode = document.createTextNode(content);
    var listItem = document.createElement("li");
    listItem.appendChild(textNode);
    list.appendChild(listItem);
}

// adds a div as child of element
function addDivToElement(element, content, idName, className) {

    var div = document.createElement("div");
    var textNode = document.createTextNode(content);

    div.setAttribute("id", idName);
    div.setAttribute("class", className);

    div.appendChild(textNode);
    element.appendChild(div);
}

// matches strings from json to IDs of divs
function determineCategoryID(string) {
    var stringElementID = "Other";

    // mentoringServies
    if (string.includes("mentoring services")) {
        stringElementID = categoryIDArray[0];
    }
    // jobDevelopment
    else if (string.includes("job development")) {
        stringElementID = categoryIDArray[1];
    }
    // mentalHealth
    else if (string.includes("mental")) {
        stringElementID = categoryIDArray[2];
    }
    // governmentAgencies
    else if (string.includes("Government Agencies")) {
        stringElementID = categoryIDArray[3];
    }
    // probationParole
    else if (string.includes("Probation")) {
        stringElementID = categoryIDArray[4];
    }
    // housingResources
    else if (string.includes("Housing")) {
        stringElementID = categoryIDArray[5];
    }
    // educationMentoring
    else if (string.includes("Education")) {
        stringElementID = categoryIDArray[6];
    }
    // religiousOrganizations
    else if (string.includes("Religious")) {
        stringElementID = categoryIDArray[7];
    }
    // healthcareRecovery
    else if (string.includes("Healthcare")) {
        stringElementID = categoryIDArray[8];
    }

    return stringElementID;
}

// puts categories into category div
function populateCategoryDiv() {
    for (index = 0; index < categoryIDArray.length; index++) {
        addDivToElement(categories, categoryIDArray[index], categoryIDArray[index], "classCategory");
        categories.appendChild(document.createElement("br"));
    }
}

// puts orgnizations in each category
function populateOrganizationDivs(element, data) {
    var elementCategory;
    var organizationDetailsDiv;
    var divThatNeedsListener;
    var details;
    for (index = 0; index < data.length; index++) {
        // determine which category div an organization belongs in
        elementCategory = document.getElementById(determineCategoryID(data[index].category));
        // add the organization to the category div
        addDivToElement(elementCategory, data[index].name, data[index].name + index, "classOrganization");
        //details = data[index].name + index;

        //have the organization show its details
        divThatNeedsListener = document.getElementById(data[index].name + index);
        divThatNeedsListener.addEventListener("click", function (e) { showDetails(this.id) });


        // add the organization details divs to the master div
        addDivToElement(masterDiv, data[index].name, data[index].name + index + "Details", "classOrganizationDetails");

        // populate the organization details divs
        organizationDetailsDiv = document.getElementById(data[index].name + index + "Details");
        populateOrganizationDetailsDiv(organizationDetailsDiv, data, index);
    }
}

function populateOrganizationDetailsDiv(element, data, index) {
    var brek = document.createElement("br");
    element.prepend(brek);

    var backButton = document.createElement("button");
    var textNode = document.createTextNode("Back to Categories");
    backButton.append(textNode);
    backButton.addEventListener("click", showCategories);
    element.prepend(backButton);

    var unorderedList = document.createElement("ul");

    addItemToList(unorderedList, data[index].phoneNumber);
    addItemToList(unorderedList, data[index].address);
    addItemToList(unorderedList, data[index].description);

    element.appendChild(unorderedList);
}

var otherPoint = 0;
function showDetails(organizationDetailsID) {
    point++;
    otherPoint++;
    //document.getElementById("categories").style.display = "none";
    categories.style.display = "none";
    document.getElementById(organizationDetailsID + "Details").style.display = "block";
    document.getElementById("test").innerHTML = organizationDetailsID + " " + checkpoint + " Hello " + otherPoint;
}

function showCategories() {
    for (let el of document.querySelectorAll(".classOrganizationDetails")) el.style.display = "none";
    categories.style.display = "block";
}

function showHideAll() {
    var element = document.getElementById("masterDiv");
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function showHideDetails() {
    if (document.getElementsByClassName("classOrganizationDetails")[0].style.display === "none") {
        for (let el of document.querySelectorAll(".classOrganizationDetails")) el.style.display = "block";
    } else {
        for (let el of document.querySelectorAll(".classOrganizationDetails")) el.style.display = "none";
    }
}