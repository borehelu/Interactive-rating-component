const btn = document.getElementById("rating_btn");
const ratings = document.getElementsByName("li");
const rating_card = document.getElementById("rating-card");
const feedback_card = document.getElementById("thank-card");


btn.onclick = function(){
    rating_card.style.display = "none";
    feedback_card.style.display = "block";
    
}
