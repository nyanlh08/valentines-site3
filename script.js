const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// First Yes button click
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Are you sure ?? 🤨🤨";
    gif.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWhxOHhraW1rZTBleWxybWRpbzY3enY0cHY5c3pjeDV2aTE1dmJvMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gKHGnB1ml0moQdjhEJ/giphy.gif";
    gif.style.display = "block";
    
    // Create new buttons
    const maybeBtn = document.createElement("button");
    maybeBtn.innerHTML = "Idk maybe...";
    maybeBtn.classList.add("maybe-btn");
    
    const confirmYesBtn = document.createElement("button");
    confirmYesBtn.innerHTML = "Yesss OFC";
    confirmYesBtn.classList.add("confirm-yes-btn");
    
    document.querySelector(".btn-group").innerHTML = "";
    document.querySelector(".btn-group").appendChild(confirmYesBtn);
    document.querySelector(".btn-group").appendChild(maybeBtn);
    
    // Handle Maybe button click
    maybeBtn.addEventListener("click", () => {
        maybeBtn.innerHTML = "Too late 😠 CLICK THE YES BUTTON";
        maybeBtn.style.backgroundColor = "red";
    });
    
    // Handle final Yes button click
    confirmYesBtn.addEventListener("click", () => {
        question.innerHTML = "heheheh I love youuu Yamone lyy yay❤️";
        gif.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZpcTh5Y3R1cGl2bzE4eWtqZW5nbGk0ZTU5ZGVwN2Z1bmw4ZXV5eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UuebWyG4pts3rboawU/giphy.gif";
        maybeBtn.style.display = "none";
        confirmYesBtn.style.display = "none";
        
        // Create "Oh and..." button
        const ohAndBtn = document.createElement("button");
        ohAndBtn.innerHTML = "Oh and...";
        ohAndBtn.classList.add("oh-and-btn");
        document.querySelector(".btn-group").appendChild(ohAndBtn);
        
        // Handle "Oh and..." button click
        ohAndBtn.addEventListener("click", () => {
            document.body.innerHTML = "<h2>Wishing my girl a happy happy valentine ❤️ Thank you for always being supportive and patient with me 🐒</h2>";
            const finalGif = document.createElement("img");
            finalGif.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmVud3dpeWx1N3d6em5nbGExa2E1eGEwYTh6ZWlrcHN2dWl1NDY2biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Fu3OjBQiCs3s0ZuLY3/giphy.gif";
            document.body.appendChild(finalGif);
            
            // Add confetti effect
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js";
            script.onload = () => {
                confetti();
            };
            document.body.appendChild(script);
        });
    });
});

// Move the No button randomly on hover
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
