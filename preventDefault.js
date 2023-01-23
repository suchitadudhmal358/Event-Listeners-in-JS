const a = document.querySelector(".wes");

a.addEventListener("click", function (event) {
  const shouldpageChange = confirm(
    "The website might be malicious ! do you want to proceed ?"
  );
  if (!shouldpageChange) {
    event.preventDefault();
  }
});

const signupForm = document.querySelector('[name = "signup"]');
signupForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event.currentTarget.name);
  console.log(event.currentTarget.name.value);
  console.log(event.currentTarget.email);
  console.log(event.currentTarget.email.value);
  console.log(event.currentTarget.agree);
  console.log(event.currentTarget.agree.checked);

  //   const name = event.currentTarget.name.value;
  //   if (name.includes("chad")) {
  //     alert("sorry bro");
  //     event.preventDefault();
  //   }
});

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

signupForm.name.addEventListener("keyup", logEvent);
signupForm.name.addEventListener("keydown", logEvent);
signupForm.name.addEventListener("focus", logEvent);
signupForm.name.addEventListener("blur", logEvent);

const photo = document.querySelector(".photo");

function handleImgClick(event) {
  if (event.type === "click" || event.key === "Enter") {
    console.log("You clicked the image");
  }
}
photo.addEventListener("click", handleImgClick);
photo.addEventListener("keyup", handleImgClick);
