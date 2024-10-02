document.addEventListener("DOMContentLoaded", function() {
    const descElement = document.getElementById("description");
    const descText = descElement.innerHTML;

    descElement.innerHTML = "";

    let descIndex = 0;

    function typeDescription() {
        if (descIndex < descText.length) {
            descElement.innerHTML += descText.charAt(descIndex);
            descIndex++;
            setTimeout(typeDescription, 50); // Adjust typing speed
        } else {
            // Justify the text after typing completes
            justifyText(descElement);
        }
    }

    function justifyText(element) {
        // Create a temporary element to get text width
        const tempElement = document.createElement('span');
        tempElement.style.display = 'inline-block';
        document.body.appendChild(tempElement);

        const words = element.innerHTML.split(' ');
        element.innerHTML = ''; // Clear existing content

        // Calculate spacing for each word
        const totalWidth = element.offsetWidth;
        const wordCount = words.length;
        const spaceWidth = totalWidth / wordCount;

        // Append words with calculated spaces
        words.forEach((word, index) => {
            tempElement.innerHTML = word; // Set the word to calculate width
            const wordWidth = tempElement.offsetWidth;
            const spacing = spaceWidth - wordWidth; // Remaining space for this word
            element.innerHTML += word + '<span style="display:inline-block; width:' + Math.max(spacing, 0) + 'px;"></span>';
            if (index < wordCount - 1) element.innerHTML += ' '; // Add a space between words
        });

        document.body.removeChild(tempElement); // Clean up
    }

    typeDescription();
});
