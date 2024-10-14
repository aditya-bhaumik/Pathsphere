<h2 id="dynamicText">Empowering Futures, One Opportunity at a Time</h2>

<script>
    async function repeatText() {
        const h2Element = document.getElementById("dynamicText");
        const text = "Empowering Futures, One Opportunity at a Time";
        
        while (true) {
            h2Element.style.opacity = 0; // Fade out effect
            await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
            
            h2Element.innerHTML = text; // Reset the text (optional)
            
            h2Element.style.opacity = 1; // Fade in effect
            await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000)); // Random delay between 1-2 seconds
        }
    }

    repeatText(); // Call the function to start the cycle
</script>
