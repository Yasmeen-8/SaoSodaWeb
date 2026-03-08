document.getElementById("video")?.addEventListener("click", function() {
    document.getElementById("video-content").style.display = "block";
    document.getElementById("doc_and_contact-content").style.display = "none";
    document.getElementById("certificates_and_testimonials-content").style.display = "none";
    document.getElementById("examples-content").style.display = "none";

    document.getElementById("video").style.marginLeft = "-5%";
    document.getElementById("doc_and_contact").style.marginLeft = "0px";
    document.getElementById("certificates_and_testimonials").style.marginLeft = "0px";
    document.getElementById("examples").style.marginLeft = "-30%";

    spin_button("video");
    stop_spin_button("doc_and_contact");
    stop_spin_button("certificates_and_testimonials");
    stop_spin_button("examples");
});
document.getElementById("doc_and_contact")?.addEventListener("click", function() {
    document.getElementById("video-content").style.display = "none";
    document.getElementById("doc_and_contact-content").style.display = "block";
    document.getElementById("certificates_and_testimonials-content").style.display = "none";
    document.getElementById("examples-content").style.display = "none";

    document.getElementById("video").style.marginLeft = "-30%";
    document.getElementById("doc_and_contact").style.marginLeft = "20%";
    document.getElementById("certificates_and_testimonials").style.marginLeft = "0px";
    document.getElementById("examples").style.marginLeft = "-30%";

    spin_button("doc_and_contact");
    stop_spin_button("video");
    stop_spin_button("certificates_and_testimonials");
    stop_spin_button("examples");

});
document.getElementById("certificates_and_testimonials")?.addEventListener("click", function() {
    document.getElementById("video-content").style.display = "none";
    document.getElementById("doc_and_contact-content").style.display = "none";
    document.getElementById("certificates_and_testimonials-content").style.display = "block";
    document.getElementById("examples-content").style.display = "none";

    document.getElementById("video").style.marginLeft = "-30%";
    document.getElementById("doc_and_contact").style.marginLeft = "0px";
    document.getElementById("certificates_and_testimonials").style.marginLeft = "20%";
    document.getElementById("examples").style.marginLeft = "-30%";
    
    spin_button("certificates_and_testimonials");
    stop_spin_button("video");
    stop_spin_button("doc_and_contact");
    stop_spin_button("examples");
});
document.getElementById("examples")?.addEventListener("click", function() {
    document.getElementById("video-content").style.display = "none";
    document.getElementById("doc_and_contact-content").style.display = "none";
    document.getElementById("certificates_and_testimonials-content").style.display = "none";
    document.getElementById("examples-content").style.display = "block";

    document.getElementById("video").style.marginLeft = "-30%";
    document.getElementById("doc_and_contact").style.marginLeft = "0px";
    document.getElementById("certificates_and_testimonials").style.marginLeft = "0px";
    document.getElementById("examples").style.marginLeft = "-5%";
    
    spin_button("examples");
    stop_spin_button("video");
    stop_spin_button("doc_and_contact");
    stop_spin_button("certificates_and_testimonials");
});

function start(){
    document.getElementById("video-content").style.display = "block";
    document.getElementById("doc_and_contact-content").style.display = "none";
    document.getElementById("certificates_and_testimonials-content").style.display = "none";
    document.getElementById("examples-content").style.display = "none";

    document.getElementById("video").style.marginLeft = "-5%";
    document.getElementById("doc_and_contact").style.marginLeft = "0px";
    document.getElementById("certificates_and_testimonials").style.marginLeft = "0px";
    document.getElementById("examples").style.marginLeft = "-30%";

    spin_button("video");
    stop_spin_button("doc_and_contact");
    stop_spin_button("certificates_and_testimonials");
    stop_spin_button("examples");
}

function spin_button(buttonId){
    const button = document.getElementById(buttonId);
    if (button) {
        button.classList.add('spinning');
    }
}

function stop_spin_button(buttonId){
    const button = document.getElementById(buttonId);   
    if (button) {
        button.classList.remove('spinning');
    }
}