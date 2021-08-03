const vocabulary = {
    Cat: ["Dog", "Rat", "bat"],
    Helo: ["hello", "Help", "Hell"],
    heldp: ["help", "held", "hello"],
};

document.addEventListener('keyup', (event) => {
    if (event.code !== "Space") {
        return;
    }

    if (!event.target.closest('input[type="text"], [contenteditable="true"], textarea, iframe')) {
        return;
    }

    const isContenteditable = event.target.closest('[contenteditable="true"]');
        let text;

        if (isContenteditable) {
            text = event.target.innerText;
        } else {
            text = event.target.value;
        }

        let filteredWords = Object.keys(vocabulary).filter(word => text.includes(word.toString()));
        if (filteredWords.length > 0) {
            let replacementWord = filteredWords.pop();

            let popup = document.createElement("div");
            popup.style.cssText = `
                text-align: center;
                color: black;
                position: fixed;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                top: 0;
                right: 0;
                width: 150px;
                height: 100px;
                background-color: azure;
                border-radius: 15px;
                z-index: 10001;
            `;
        document.body.append(popup);

        populatePopUp(popup, vocabulary[replacementWord]);

        popup.addEventListener("click", (selectedWord) => {
            popup.style.display = "none";
            if (isContenteditable) {
                event.target.innerText = text.replace(replacementWord, selectedWord.target.innerText.trim())
            } else {
                event.target.value = text.replace(replacementWord, selectedWord.target.innerText.trim());
            }
        });
    }
});

function populatePopUp(popup, buttonTitles ) {
    for (let i = 0; i < buttonTitles.length; i++) {
        popup.insertAdjacentHTML('beforeend', `
            <button class="list-item" style="
                background-color: inherit;
                outline: none;
                border: none;
                padding: 5px 0;
                cursor: pointer;
                "
                >
                ${buttonTitles[i]}
            </button> 
            `);
    }
}
