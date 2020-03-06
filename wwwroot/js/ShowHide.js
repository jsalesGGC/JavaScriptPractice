// testing stuff
var point = 0;

/*
 * Array of Categories for Organizations. Used as 'id' and 'class' names for elements.
 */
const categoryIDArray = [
    "mentoringServices", "jobDevelopment", "mentalHealth",
    "governmentAgencies", "probationParole", "housingResources",
    "educationMentoring", "religiousOrganizations", "healthcareRecovery",
    "Other"
];

const categoryNameArray = [
    "Mentoring Services", "Job Development", "Mental Health",
    "Government Agencies", "Probation / Parole", "Housing Resources",
    "Education Mentoring", "Religious Organizations", "Healthcare / Recovery",
    "Other"
];

//var categoriesDiv = document.getElementById("categories");

(async function fetchJson() {
    // get Data from API
    const response = await fetch("https://ggra-development.azurewebsites.net/api");
    const data = await response.json();

    // add Testing buttons
    testButton0.addEventListener("click", function () { showHideID("masterDiv") });
    testButton1.addEventListener("click", function () { showHideClass("classOrganizationDetails") });


    // add Categories to Category div
    populateCategoryDiv();

    // add Organizations to the Categories divs in Category div
    populateOrganizationDivs(document.getElementById("categories"), data);

    // hide all Organization Details
    for (let el of document.querySelectorAll(".classOrganizationDetails")) el.style.display = "none";

    //Testing: Ensure code executed.
    test.innerHTML = "Json fetch complete 0";
}())

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

    return div;
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

// puts Categories into Category div
function populateCategoryDiv() {
    for (index = 0; index < categoryIDArray.length; index++) {
        // add a categories to the categories div
        var newDiv = addDivToElement(categories, categoryIDArray[index], categoryIDArray[index], "classCategory");

        // add expand button
        var buttonExpand = document.createElement("button");
        buttonExpand.setAttribute("id", "button" + categoryIDArray[index]);
        var textNode = document.createTextNode("Expand");
        buttonExpand.appendChild(textNode);
        newDiv.prepend(buttonExpand);
        buttonExpand.addEventListener("click", function () { showHideClass("class" + this.id.substring(6, this.id.length)) });

        // add breaks for html readability
        categories.appendChild(document.createElement("br"));
    }
}

// puts Orgnizations into Categories
// needs to be split into smaller methods
function populateOrganizationDivs(element, data) {
    var elementCategory;
    var elementCategoryID;
    var organizationDetailsDiv;
    var divThatNeedsListener;
    var details;
    for (index = 0; index < data.length; index++) {

        elementCategoryID = determineCategoryID(data[index].category);

        // determine which category div an organization belongs in
        elementCategory = document.getElementById(elementCategoryID);

        // add the organization to the category div
        var divOrganization = addDivToElement(elementCategory, data[index].name, data[index].name + index, "class" + elementCategoryID);

        //have the Organization show its details when clicked
        divOrganization.addEventListener("click", function () { showOrganizationDetails(this.id) });

        // add the organization details divs to the master div
        var divOrganizationDetails = addDivToElement(masterDiv, data[index].name, data[index].name + index + "Details", "classOrganizationDetails");

        // populate the organization details divs
        populateOrganizationDetailsDiv(divOrganizationDetails, data, index);
    }
}

// creates a div from from a json[] for an organization with details
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

// shows a specifical Organization Details div, hides Categories div
function showOrganizationDetails(organizationDetailsID) {
    //document.getElementById("categories").style.display = "none";
    categories.style.display = "none";
    document.getElementById(organizationDetailsID + "Details").style.display = "block";
}


// hides every Organization Detail Div, shows Categories div
function showCategories() {
    for (let el of document.querySelectorAll(".classOrganizationDetails")) el.style.display = "none";
    categories.style.display = "block";
}

// hides an element by passing reference of element
function showHideElement(element) {
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// hides an element by element's id
function showHideID(elementID) {
    var element = document.getElementById(elementID);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// hides elements by elements' id
function showHideClass(elementClass) {
    checkpoint(elementClass);
    if (document.getElementsByClassName(elementClass)[0].style.display === "none") {
        for (let el of document.querySelectorAll("." + elementClass)) el.style.display = "block";
    } else {
        for (let el of document.querySelectorAll("." + elementClass)) el.style.display = "none";
    }
}

function checkpoint(content) {
    point++;
    test.innerHTML = "Checkpoint " + point + " " + content;
}