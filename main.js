const btn = document.getElementById("rating_btn");
const ratings = document.getElementsByTagName("li");
const rating_card = document.getElementById("rating-card");
const feedback_card = document.getElementById("thank-card");
const rating_str = document.querySelector("p.selection");

let rating_number = 0;


btn.onclick = function(){
    if(rating_number != 0){
        rating_card.style.display = "none";
        feedback_card.style.display = "block";
        rating_str.innerHTML = `You selected ${rating_number} out of 5`
    }
    
}



for(let i = 0; i<ratings.length; i++){
    ratings[i].onclick = function(){
        let selected = document.querySelector("li.selected");
        if(selected!=null){
            selected.classList.remove("selected");
        }
        
        ratings[i].classList.add("selected");
        rating_number = i+1;
    };
    
}

