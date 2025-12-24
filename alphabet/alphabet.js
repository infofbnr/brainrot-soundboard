document.addEventListener("DOMContentLoaded", () => {
    const alphabetContainer = document.querySelector(".letters");

    // Define the alphabet and meanings (you can replace these with your own)
    const alphabetData = [
        { letter: "A", meaning: "Aura" },
        { letter: "B", meaning: "Baby Gronk" },
        { letter: "C", meaning: "Costco Guys" },
        { letter: "D", meaning: "Dreadhead" },
        { letter: "E", meaning: "Eye of Rah" },
        { letter: "F", meaning: "Friggin Packet Yo" },
        { letter: "G", meaning: "Gyatt" },
        { letter: "H", meaning: "Huzz" },
        { letter: "I", meaning: "It's giving" },
        { letter: "J", meaning: "Joshua Block" },
        { letter: "K", meaning: "Kenergy" },
        { letter: "L", meaning: "Low Taper Fade" },
        { letter: "M", meaning: "Mid" },
        { letter: "N", meaning: "NPC" },
        { letter: "O", meaning: "Out of pocket" },
        { letter: "P", meaning: "Purple" },
        { letter: "Q", meaning: "Quiet Quitting" },
        { letter: "R", meaning: "Rizz" },
        { letter: "S", meaning: "Simp" },
        { letter: "T", meaning: "TS PMO" },
        { letter: "U", meaning: "Unalive" },
        { letter: "V", meaning: "Villain arc" },
        { letter: "W", meaning: "Welch (Haley Welch, creator of Halk Tuah)" },
        { letter: "X", meaning: "X-factor" },
        { letter: "Y", meaning: "(Raise your) Ya ya ya" },
        { letter: "Z", meaning: "Zesty" }
    ];

    // Generate alphabet list dynamically
    alphabetData.forEach(item => {
        const letterDiv = document.createElement("div");
        letterDiv.classList.add("letter-item");

        const letterSpan = document.createElement("span");
        letterSpan.classList.add("letter");
        letterSpan.textContent = item.letter;

        const meaningSpan = document.createElement("span");
        meaningSpan.classList.add("meaning");
        meaningSpan.textContent = item.meaning;

        letterDiv.appendChild(letterSpan);
        letterDiv.appendChild(meaningSpan);

        letterDiv.addEventListener("click", () => {
            letterDiv.classList.add("clicked");
            setTimeout(() => {
                letterDiv.classList.remove("clicked");
            }, 300);

            console.log(`You clicked: ${item.letter}`);
        });

        alphabetContainer.appendChild(letterDiv);
    });
});
