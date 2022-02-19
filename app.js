const generateBtn = document.querySelector(".btn");
generateBtn.addEventListener("click", getQuote);

function getQuote(e) {
  e.preventDefault();

  let quoteTxt = document.querySelector("#quote-text");
  let authorName = document.querySelector("#quote-author");

  fetch("https://type.fit/api/quotes")
    .then((res) => res.json())

    .then((data) => {
      let quote = data[Math.floor(Math.random() * 1642)].text;
      let author = data[Math.floor(Math.random() * 1642)].author;

      quoteTxt.innerHTML = quote;
      authorName.innerHTML = author;
    });
}
