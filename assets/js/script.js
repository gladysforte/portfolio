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

// Aside Navbar
// const nav = document.querySelector(".s-sidebar__nav"),
//       navList=nav.querySelectorAll("li"),
//       totalNavList=navList.length,
//       allSection=document.querySelectorAll(".section"),
//       totalSection=allSection.length;

//       for(let i=0; i<totalNavList; i++){
//           const a=navList[i].querySelector("a");
          
//           a.addEventListener("click", function(){
            
//             for(let j=0; j<totalNavList; j++){
//                 navList[j].querySelector("a").classList.remove("active");
//             }


//               this.classList.add("active");

//               showSection(this);
//           })
//       }

//       function showSection(element){

//             for(let i=0; i<totalSection; i++){
//                 allSection[i].classList.remove("active");
//             }
//           const target = element.getAttribute("href").split('#')[1];
        
//           document.querySelector('#'+target).classList.add("active");
          
//       }




