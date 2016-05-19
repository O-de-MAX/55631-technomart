
var feedbackLink = document.querySelector(".btn-write-us");
var feedbackPopup = document.querySelector(".modal-content-write-us");

var feedbackClose = feedbackPopup.querySelector(".modal-content-close");
var form = feedbackPopup.querySelector(".modal-content-form");
var name = feedbackPopup.querySelector("[name=name]");
var mail = feedbackPopup.querySelector("[name=mail]");

feedbackLink.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.add("modal-content-show");
  name.focus();
});

feedbackClose.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.remove("modal-content-show");
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (!name.value || !mail.value) {
    event.preventDefault();
    console.log("Нужно ввести имя и e-mail");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-content-show")) {
      feedbackPopup.classList.remove("modal-content-show");
    }
  }
});


var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");

mapOpen.addEventListener("click", function(event) {
 event.preventDefault();
 mapPopup.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function(event) {
 event.preventDefault();
 mapPopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
 if (event.keyCode === 27) {
   if (mapPopup.classList.contains("modal-content-show")) {
     mapPopup.classList.remove("modal-content-show");
   }
 }
});


var mLink = document.querySelector(".btn-to-basket");
var mPopup = document.querySelector(".added-to-card");
var mClose = mPopup.querySelector(".modal-content-close");

mLink.addEventListener("click", function(event) {
  event.preventDefault();
  mPopup.classList.add("modal-content-show");
});

mClose.addEventListener("click", function(event) {
  event.preventDefault();
  mPopup.classList.remove("modal-content-show");
});
