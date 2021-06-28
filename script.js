document.querySelector(".js-btn-1").addEventListener("click", function(e){
    document.querySelector(".form-container").style.display = "initial";
})

document.querySelector(".js-close").addEventListener("click", function(e){
    document.querySelector(".form-container").style.display = "none";
})


document.querySelector(".js-btn").addEventListener("click", function(e){
    alert("thank you")
    document.querySelector(".form-container").style.display = "none";
})

