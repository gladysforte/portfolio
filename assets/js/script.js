function myFunction() {
    document.getElementById("about").style.display = "block";
    document.getElementById("home").style.display = "none";
}
  
$('#contact-form').submit(function(e) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('_replyto').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if (!name || !email || !message || !subject) {
        $(".alert-success").hide();
        $(".alert-danger").show();
    } else {
        $.ajax({
            url: "https://formspree.io/xvovplrn",
            method: "POST",
            data: $(this).serialize(),
            dataType: "json"
        });

        e.preventDefault();
        $(this).get(0).reset();
        $(".alert-danger").hide();
        $(".alert-success").show();
    }
})

