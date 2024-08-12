function initPdfLinks(buttons) {
  const showLinkText = "Show links to articles in other languages";
  const hideLinkText = "Hide links to articles in other languages";

  const toggleBtnMarkup = `
  <button class="pdf-toggle-btn" id="toggle-pdf-links">
          ${showLinkText}
        </button>
<div class="pdf-links-container pdf-hidden"></div>
`;

  const renderContainer = document.querySelector(".render-container");
  renderContainer.innerHTML = "";
  renderContainer.insertAdjacentHTML("beforeend", toggleBtnMarkup);

  const markupWrap = `
    <h3 class="pdf-links-title">
            Select a language to open or copy the link:
    </h3>
    <div class="pdf-links-wrap"></div>
    `;
  const pdfLinksContainer = document.querySelector(".pdf-links-container");
  pdfLinksContainer.innerHTML = "";
  pdfLinksContainer.insertAdjacentHTML("beforeend", markupWrap);

  const pdfLinksWrap = document.querySelector(".pdf-links-wrap");
  const sortedButtons = Object.values(buttons).sort((a, b) => {
    return a.text.localeCompare(b.text, "en", { sensitivity: "base" });
  });
  const markup = sortedButtons
    .map(
      (buttonData) => `<div class="pdf-btn-container" id="${buttonData.id}">
                <span class="pdf-link-btn" title="Open Link">${buttonData.text}</span>
                <span class="pdf-copy-btn" title="Copy Link"><i class="fa fa-copy"></i></span>
    </div>`
    )
    .join("");

  pdfLinksWrap.innerHTML = "";
  pdfLinksWrap.insertAdjacentHTML("beforeend", markup);

  const buttonElements = document.querySelectorAll(".pdf-btn-container");
  buttonElements.forEach((button) => {
    const id = button.id;
    const url = buttons[id].url;
    button.querySelector(".pdf-link-btn").addEventListener("click", () => {
      window.open(url, "_blank");
      button.blur();
    });
    button.querySelector(".pdf-copy-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      navigator.clipboard
        .writeText(url)
        .then(() => {
          alert("Link copied to the clipboard");
          button.blur();
        })
        .catch((err) => {
          console.error("A copying error: ", err);
        });
    });

    const toggleButton = document.getElementById("toggle-pdf-links");
    toggleButton.addEventListener("click", () => {
      const pdfLinksContainer = document.querySelector(".pdf-links-container");
      pdfLinksContainer.classList.toggle("pdf-hidden");
      if (pdfLinksContainer.classList.contains("pdf-hidden")) {
        toggleButton.textContent = showLinkText;
        toggleButton.blur();
      } else {
        toggleButton.textContent = hideLinkText;
        toggleButton.blur();
      }
    });
  });
}

const buttons = {
  ukr: {
    id: "ukr",
    text: "РЈРєСЂР°С—РЅСЃСЊРєР°",
    url: "https://bit.ly/3KwUlj2",
  },
  rus: {
    id: "rus",
    text: "Р СѓСЃСЃРєРёР№",
    url: "https://bit.ly/3xLJ5aG",
  },
  eng: {
    id: "eng",
    text: "English",
    url: "https://bit.ly/3IHzyYx",
  },
  bul: {
    id: "bul",
    text: "Р‘СЉР»РіР°СЂСЃРєРё",
    url: "https://bit.ly/3ImLUUG",
  },
  hun: {
    id: "hun",
    text: "Magyar",
    url: "https://bit.ly/3IqvGK4",
  },
  deu: {
    id: "deu",
    text: "Deutsch",
    url: "https://bit.ly/3kfZSQi",
  },
  ell: {
    id: "ell",
    text: "О•О»О»О·ОЅО№ОєО¬",
    url: "https://bit.ly/3Nd7qz3",
  },
  spa: {
    id: "spa",
    text: "EspaГ±ol",
    url: "https://bit.ly/3KquI3j",
  },
  ita: {
    id: "ita",
    text: "Italiano",
    url: "https://bit.ly/3Zbx9L5",
  },
  lav: {
    id: "lav",
    text: "LatvieЕЎu",
    url: "https://bit.ly/3Sljb77",
  },
  lit: {
    id: "ita",
    text: "LietuviЕі",
    url: "https://bit.ly/3XY54Wt",
  },
  mkd: {
    id: "mkd",
    text: "РњР°РєРµРґРѕРЅСЃРєРё",
    url: "https://bit.ly/4d8fbBa",
  },
  ron: {
    id: "ron",
    text: "RomГўnДѓ",
    url: "https://bit.ly/3lSoleN",
  },
  nld: {
    id: "nld",
    text: "Dutch",
    url: "https://bit.ly/3lYohu4",
  },
  pol: {
    id: "pol",
    text: "Polski",
    url: "https://bit.ly/3kkLJBe",
  },
  por: {
    id: "por",
    text: "PortuguГЄs",
    url: "https://bit.ly/41BNVon",
  },
  slk: {
    id: "slk",
    text: "SlovenДЌina",
    url: "https://bit.ly/3Eu4F7g",
  },
  slv: {
    id: "slv",
    text: "SlovenЕЎДЌina",
    url: "https://bit.ly/3Ne11np",
  },
  fra: {
    id: "fra",
    text: "FranГ§ais",
    url: "https://bit.ly/3IIU9vG",
  },
  hrv: {
    id: "hrv",
    text: "Hrvatski",
    url: "https://bit.ly/40EmhFO",
  },
  spr: {
    id: "spr",
    text: "РЎСЂРїСЃРєРё",
    url: "https://bit.ly/43UllQy",
  },
  ces: {
    id: "ces",
    text: "ДЊeЕЎtina",
    url: "https://bit.ly/3ZesSGG",
  },
  est: {
    id: "est",
    text: "Eesti",
    url: "https://bit.ly/3Kqs11H",
  },
  aze: {
    id: "aze",
    text: "AzЙ™rbaycan",
    url: "https://bit.ly/3YYi4wL",
  },
  hye: {
    id: "hye",
    text: "ХЂХЎХµХҐЦЂХҐХ¶",
    url: "https://bit.ly/3YYi8wv",
  },
  kat: {
    id: "kat",
    text: "бѓҐбѓђбѓ бѓ—бѓЈбѓљбѓ",
    url: "https://bit.ly/3IkAL6N",
  },
  kaz: {
    id: "kaz",
    text: "ТљР°Р·Р°Т›",
    url: "https://bit.ly/3XMGXKw",
  },
};

initPdfLinks(buttons);
