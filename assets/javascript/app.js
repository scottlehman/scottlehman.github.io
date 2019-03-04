var portfolio = $("#portfolio-container");
var contact = $("#contact-container");

portfolio.attr("data-state", "closed");
portfolio.attr("data-closed", "closed");
portfolio.attr("data-open", "open");

contact.attr("data-state", "closed");
contact.attr("data-closed", "closed");
contact.attr("data-open", "open");


$("#portfolio-button").click(function () {

    var portfolioState = portfolio.attr("data-state");

    if (portfolioState === "closed") {
        portfolioOpen();
        $(".aboutContainer").fadeOut(400);
    } else {
        portfolioClose();
        contactClosed();
        $(".aboutContainer").fadeIn(400);
    };

});

$("#contact-button").click(function () {

    var contactState = contact.attr("data-state");

    if (contactState === "closed") {
        contactOpen();
        portfolioOpen();
        $(".aboutContainer").fadeOut(400);
    } else {
        contactClosed();
    }

});

var portfolioOpen = function () {
    $("#portfolio-container").animate({
        'height': 562
    }, 400);

    portfolio.attr("data-state", "open");
};

var portfolioClose = function () {
    $("#portfolio-container").animate({
        'height': 48
    }, 400);

    portfolio.attr("data-state", "closed");
}

var contactOpen = function () {
    $("#contact-container").animate({
        'height': 562
    }, 400);

    contact.attr("data-state", "open");
}

var contactClosed = function () {
    $("#contact-container").animate({
        'height': 48
    }, 400);

    contact.attr("data-state", "closed");
}

var maxScreen = window.matchMedia("(min-width: 976px)");

function screenFunction(maxScreen) {
    if (maxScreen.matches) {
        window.innerWidth = 976;
        
        $("#portfolio-button").attr("id", "portfolio-button-big");
        $("#contact-button").attr("id", "contact-button-big");
        $("#portfolio-container").attr("id", "portfolio-container-big");
        $("#contact-container").attr("id", "contact-container-big");
    } else {
        
        $("#portfolio-button-big").attr("id", "portfolio-button");
        $("#contact-button-big").attr("id", "contact-button");
        $("#portfolio-container-big").attr("id", "portfolio-container");
        $("#contact-container-big").attr("id", "contact-container");
    }
 
};

screenFunction(maxScreen);
maxScreen.addListener(screenFunction);

var portfolioBig = $("#portfolio-container-big");
var contactBig = $("#contact-container-big");

portfolioBig.attr("data-big", "closed");
portfolioBig.attr("data-closed", "closed");
portfolioBig.attr("data-open", "open");

contactBig.attr("data-big", "closed");
contactBig.attr("data-closed", "closed");
contactBig.attr("data-open", "open");

var portfolioBigOpen = function() {
    $("#portfolio-container-big").animate({
        'height': 744
    }, 400);

    portfolioBig.attr("data-big", "open");
};

var portfolioBigClosed = function () {
    $("#portfolio-container-big").animate({
        'height': 80
    }, 400);

    portfolioBig.attr("data-big", "closed");
};

$("#contact-button-big").click(function () {

    var contactState = contactBig.attr("data-big");

    if (contactState === "closed") {
        portfolioBigOpen();
        contactBigOpen();
        $(".aboutContainer").fadeOut(100);
    } else {
        contactBigClosed();
    }

});

$("#portfolio-button-big").click(function () {

    var portfolioState = portfolioBig.attr("data-big");

    if (portfolioState === "closed") {
        portfolioBigOpen();
        $(".aboutContainer").fadeOut(100);
    } else {
        portfolioBigClosed();
        contactBigClosed();
        $(".aboutContainer").fadeIn(100);
    };

});

var contactBigOpen = function () {
    $("#contact-container-big").animate({
        'height': 744
    }, 400);

    contactBig.attr("data-big", "open");

};

var contactBigClosed = function () {
    $("#contact-container-big").animate({
        'height': 80
    }, 400);

    contactBig.attr("data-big", "closed");
};