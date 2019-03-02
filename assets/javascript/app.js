$(document).ready(function () {
    $("#portLinks").hide();
    $("#contactInfo").hide();
})

var portTab = $("#portTab");
var contactTab = $("#contactTab");
var nameParent = $("#name");
var firstName = $("#firstName");
var lastName = $("#lastName");

portTab.attr("data-state", "small");
portTab.attr("data-expand", "expand");
portTab.attr("data-small", "small")

contactTab.attr("data-state", "small");
contactTab.attr("data-expand", "expand");
contactTab.attr("data-small", "small");

$("#portBtn").click(function () {

    portState = portTab.attr("data-state");

    if (portState === "small") {
        portExpand();
        moveName();
        $("#portLinks").delay(300).fadeIn('slow');

    } else {
        portShrink();
        contactShrink();
        returnName();
        $("#portLinks").hide();
    }

});

$("#contactBtn").click(function () {

    contactState = contactTab.attr("data-state");

    if (contactState === "small") {
        moveName();
        portExpand();
        contactExpand();
    } else {
        contactShrink();
    }

});

function moveName() {

    $("#name").animate({
        top: -20,
        left: 0
    }, 300);
    $("#firstName").animate({
        top: 0,
        left: 20,
        position: 'absolute'
    }, 300);
    $("#lastName").attr("id", "modLastName");
    $("#aboutMe").fadeOut(100);
}

function returnName() {
    $("#name").animate({
        top: 70,
        left: 350
    }, 300);
    $("#modLastName").attr("id", "lastName");
    $("#aboutMe").fadeIn(1000);

}

function portExpand() {
    $("#portTab").animate({
        'width': 1750
    }, 400);

    portTab.attr("data-state", "expand");
}

function portShrink() {
    $("#portTab").animate({
        'width': 85
    }, 400);

    portTab.attr("data-state", "small");
}

function contactExpand() {
    $("#contactTab").animate({
        'width': 1730

    }, 400);

    $("#portLinks").fadeOut(300);
    $("#contactInfo").delay(400).fadeIn(1000);
    contactTab.attr("data-state", "expand");
}

function contactShrink() {
    $("#contactTab").animate({
        'width': 70
    }, 400);

    contactTab.attr("data-state", "small");
    $("#portLinks").fadeIn(1000);
    $("#contactInfo").hide();
}

function screenFunction(mobileScreen) {
    if (mobileScreen.matches) {
        window.innerWidth = 450;
        $("#portTab").attr("id", "portTabMobile");
        $("#portBtn").attr("id", "portBtnMobile");
        $("#contactTab").attr("id", "contactTabMobile");
        $("#contactBtn").attr("id", "contactBtnMobile");
        $("#contactContain").attr("id", "contactContainMobile");
        $("#portContain").attr("id", "portContainMobile");
        $("#portLinks").attr("id", "portLinksMobile");
        firstName.attr("id", "firstNameMobile");
        lastName.attr("id", "lastNameMobile");
        nameParent.attr("id", "nameMobile");
    } else {
        $("#portTabMobile").attr("id", "portTab");
        $("#portBtnMobile").attr("id", "portBtn");
        $("#contactTabMobile").attr("id", "contactTab");
        $("#contactBtnMobile").attr("id", "contactBtn");
        $("#contactContainMobile").attr("id", "contactContain");
        $("#portContainMobile").attr("id", "portContain");
        $("#portLinksMobile").attr("id", "portLinks");
        firstName.attr("id", "firstName");
        lastName.attr("id", "lastName");
        nameParent.attr("id", "name");
    }
}

var mobileScreen = window.matchMedia("(max-width: 450px)");
screenFunction(mobileScreen);
mobileScreen.addListener(screenFunction);

var portTabMobile = $("#portTabMobile");
var contactTabMobile = $("#contactTabMobile");

portTabMobile.attr("data-stateMobile", "smallMobile");
portTabMobile.attr("data-expandMobile", "expandMobile");
portTabMobile.attr("data-smallMobile", "smallMobile");

contactTabMobile.attr("data-stateMobile", "smallMobile");
contactTabMobile.attr("data-expandMobile", "expandMobile");
contactTabMobile.attr("data-smallMobile", "smallMobile");


function mobilePort() {
    portTabMobile.animate({
        'height': 513
    }, 400);

    portTabMobile.attr("data-stateMobile", "expandMobile");
}

function mobilePortShrink() {
    portTabMobile.animate({
        'height': 36
    }, 400);

    portTabMobile.attr("data-stateMobile", "smallMobile");
}

$("#portBtnMobile").click(function () {

    var portStateMobile = $("#portTabMobile").attr("data-stateMobile");

    if (portStateMobile === "smallMobile") {
        mobilePort();
        $("#portLinks").delay(300).fadeIn(1000);
    } else {
        mobilePortShrink();
        mobileContactShrink();
        $("#portLinks").hide();
    }

});

function contactMobile() {
    contactTabMobile.animate({
        'height' : 500
    }, 400);

    contactTabMobile.attr("data-stateMobile", "expandMobile");
}

function mobileContactShrink () {
    contactTabMobile.animate({
        'height' : 35
    }, 400)

    contactTabMobile.attr("data-stateMobile", "smallMobile");
}

$("#contactBtnMobile").click(function () {

    var contactStateMobile = $("#contactTabMobile").attr("data-stateMobile");
    
    if (contactStateMobile === "smallMobile") {
        mobilePort();
        contactMobile();
        
    } else{
        mobileContactShrink();

    }
})

screenPosition();