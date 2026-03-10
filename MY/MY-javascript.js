document.getElementById("video")?.addEventListener("click", function() {
    change_page(true, false, false, false);

    
    document.getElementById("video").style.marginLeft = "-5%";
    document.getElementById("doc_and_contact").style.marginLeft = "-7%";
    document.getElementById("certificates_and_testimonials").style.marginLeft = "-7%";
    document.getElementById("examples").style.marginLeft = "-30%";

    spin_button("video");
    stop_spin_button("doc_and_contact");
    stop_spin_button("certificates_and_testimonials");
    stop_spin_button("examples");
});

document.getElementById("doc_and_contact")?.addEventListener("click", function() {
    change_page(false, true, false, false);

    document.getElementById("video").style.marginLeft = "-30%";
    document.getElementById("doc_and_contact").style.marginLeft = "13%";
    document.getElementById("certificates_and_testimonials").style.marginLeft = "-7%";
    document.getElementById("examples").style.marginLeft = "-30%";

    spin_button("doc_and_contact");
    stop_spin_button("video");
    stop_spin_button("certificates_and_testimonials");
    stop_spin_button("examples");

});
document.getElementById("certificates_and_testimonials")?.addEventListener("click", function() {
    change_page(false, false, true, false);

    document.getElementById("video").style.marginLeft = "-30%";
    document.getElementById("doc_and_contact").style.marginLeft = "-7%";
    document.getElementById("certificates_and_testimonials").style.marginLeft = "13%";
    document.getElementById("examples").style.marginLeft = "-30%";
    
    spin_button("certificates_and_testimonials");
    stop_spin_button("video");
    stop_spin_button("doc_and_contact");
    stop_spin_button("examples");
});
document.getElementById("examples")?.addEventListener("click", function() {
    change_page(false, false, false, true);

    document.getElementById("video").style.marginLeft = "-30%";
    document.getElementById("doc_and_contact").style.marginLeft = "-7%";
    document.getElementById("certificates_and_testimonials").style.marginLeft = "-7%";
    document.getElementById("examples").style.marginLeft = "-5%";
    
    spin_button("examples");
    stop_spin_button("video");
    stop_spin_button("doc_and_contact");
    stop_spin_button("certificates_and_testimonials");
});

function start(){
    change_page(true, false, false, false);

    document.getElementById("video").style.marginLeft = "-5%";
    document.getElementById("doc_and_contact").style.marginLeft = "-5%";
    document.getElementById("certificates_and_testimonials").style.marginLeft = "-5%";
    document.getElementById("examples").style.marginLeft = "-30%";

    spin_button("video");
    stop_spin_button("doc_and_contact");
    stop_spin_button("certificates_and_testimonials");
    stop_spin_button("examples");} 


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

function change_page(video, doc_and_contact, certificates_and_testimonials, examples){
    document.getElementById("video-content").style.display = video ? "block" : "none";
    document.getElementById("doc_and_contact-content").style.display = doc_and_contact ? "block" : "none";
    document.getElementById("certificates_and_testimonials-content").style.display = certificates_and_testimonials ? "block" : "none";
    document.getElementById("examples-content").style.display = examples ? "block" : "none";
}

function move_vinyl(itemid, active){
    let movement = 10;
    if (active) {
        document.getElementById(itemid).style.marginLeft += movement + "%";}
    else {        
        document.getElementById(itemid).style.marginLeft -= movement + "%";
    }

}
