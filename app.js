// const getText = document.querySelector(".text");
// const auth = document.querySelector(".auth");
// const btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   fetch("https://api.quotable.io/random")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       getText.textContent = data.content;
//       auth.textContent = data.author;
//     });
//   navigator.clipboard.writeText(getText.textContent);
// });

const getText = document.querySelector(".text");
const btn = document.querySelector(".btn");
const sk = document.querySelector(".sk");
const auth = document.querySelector(".auth");

btn.addEventListener("click", function () {
  fetch("https://api.quotable.io/random")
    .then((req) => req.json())
    .then((data) => {
      console.log(data);
      getText.textContent = data.content;
      auth.textContent = data.author;
    });

  //speak

  sk.addEventListener("click", function () {
    let sound = new SpeechSynthesisUtterance(
      `${getText.textContent} by ${auth.textContent}`
    );

    speechSynthesis.speak(sound);
  });
});
// sk.addEventListener("click", function () {
//   console.log("clicked speak");
// });
