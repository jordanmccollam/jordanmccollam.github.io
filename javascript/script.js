$(document).ready(function() {

    // ANCHOR Hover over Videos
    $("video").mouseenter(function() {
        this.play();
    })
    $("video").mouseleave(function() {
        this.pause();
    })

    // ANCHOR  BIO fade in
    setTimeout(function(){
        $(".fade-in").fadeIn(2000);
    }, 2600);

    // ANCHOR CONTACT TABS (contact section)
    $(".phone-page").hide();
    $(".linkedin-tab").on("click", function() {
        window.open("https://www.linkedin.com/in/jordan-mccollam-8141a618a/");
    })
    $(".github-tab").on("click", function() {
        window.open("https://github.com/jordanmccollam");
    })
    $(".phone-tab").on("click", function() {
        renderPhone();
    })
    $(".email-tab").on("click", function() {
        renderEmail();
    })
    $(".phone-link").on("click", function() {
        renderPhone();
    })
    $(".email-link").on("click", function() {
        renderEmail();
    })
    function renderPhone() {
        $(".email-page").hide();
        $(".email-tab").removeClass("active-tab");
        $(".phone-page").show();
        $(".phone-tab").addClass("active-tab");
    }
    function renderEmail() {
        $(".phone-page").hide();
        $(".phone-tab").removeClass("active-tab");
        $(".email-page").show();
        $(".email-tab").addClass("active-tab");
    }

    // ANCHOR CONTACT FORM
    $("#contact-submit").on("click", function() {
        var email = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();
        

        if (email.length >= 5 && email.includes("@") && email.includes(".")) {}
        else {
            event.preventDefault();
            $(".error-message").html("Email is not valid");
            $(".modal").modal("show");
        }

        if (message.length == 0) {
            event.preventDefault();
            $(".error-message").html("Please include a message");
            $(".modal").modal("show");
        }
    })


// END of jQuery
})