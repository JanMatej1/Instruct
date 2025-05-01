$('.akce-form').css("display", "none");
$('.sluzba-form').css("display", "none");
$('.sluzba-form-flex').css("display", "none");

var state = "dotaz";

$('#akce').on('click', () => {
    $('.type-select button').removeClass('checked');
    $('#akce').addClass('checked');
    $('.akce-form').css("display", "block");
    $('.sluzba-form').css("display", "none");
    $('.sluzba-form-flex').css("display", "none");
    state = "akce";
    showQueue();
});

$('#sluzba').on('click', () => {
    $('.type-select button').removeClass('checked');
    $('#sluzba').addClass('checked');
    $('.akce-form').css("display", "none");
    $('.sluzba-form').css("display", "block");
    $('.sluzba-form-flex').css("display", "flex");
    $('#queue').css("visibility", "hidden");
    state = "sluzba";
});

$('#dotaz').on('click', () => {
    $('.type-select button').removeClass('checked');
    $('#dotaz').addClass('checked');
    $('.akce-form').css("display", "none");
    $('.sluzba-form').css("display", "none");
    $('#queue').css("visibility", "hidden");
    $('.sluzba-form-flex').css("display", "none");
    state = "dotaz";
});

$('#odeslat').on('click', () => {
    console.log(state);
    switch (state) {
        case "dotaz" :
            dotazHandler();
            break;
        case "akce" :
            akceHandler();
            break;
        case "sluzba" :
            sluzbaHandler();
            break;
    }
});

function dotazHandler(data) {
    alert('Dotaz odeslán');
}

function akceHandler(data) {
    console.log("spusteni akce");
    if ($('#akce-input option:selected').hasClass("full")) {
        confirm("Omlouváme se, ale limit účastníků na akci je naplněn. Přejete si dostávát informace o nových akcích prostřednictvím emailu?");
    } else if ($('#akce-input option:selected').hasClass("free")) {
        window.location.href = "paywall.html";
    } else {
        alert("nevybral jste žádnou akci");
    }
    
}

function sluzbaHandler(data) {
    console.log("spusteni sluzby");
    window.location.href = "paywall.html";
}

$('#akce-input').on('change', showQueue)

function showQueue() {
    if ($('#akce-input option:selected').hasClass("full")) {
        $('#queue').css("visibility", "visible");
        $('#queue p').text("20/20");
    } else if ($('#akce-input option:selected').hasClass("free")) {
        $('#queue').css("visibility", "visible");
        $('#queue p').text("10/20");
    } else {
        $('#queue').css("visibility", "hidden");
        $('#queue p').text("0/20");
    }
}