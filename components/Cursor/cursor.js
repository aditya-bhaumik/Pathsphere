// cursor.js

const cursor = document.querySelector('.cursor');
const cursorTail = document.querySelector('.cursor-tail');
const smallDots = document.querySelectorAll('.small-dot');
const cursorCopy = document.querySelector('.cursor-copy');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorCopy.style.left = e.clientX + 'px';
    cursorCopy.style.top = e.clientY + 'px';

    // Update tail position
    cursorTail.style.left = e.clientX + 'px';
    cursorTail.style.top = e.clientY + 'px';

    // Show the custom cursor and tail
    cursor.style.display = 'block';
    cursorCopy.style.display = 'block';
    cursorTail.style.transform = 'scale(1)';
    cursorTail.style.opacity = '1';
});

// Hide cursor elements when mouse leaves the viewport
document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
    cursorCopy.style.display = 'none';
    cursorTail.style.opacity = '0';
});

// Hide the tail when not moving
document.addEventListener('mouseout', () => {
    cursorTail.style.transform = 'scale(0)';
    cursorTail.style.opacity = '0';
});

// Initialize small dot positions
smallDots.forEach((dot) => {
    dot.style.left = `${Math.random() * window.innerWidth}px`;
    dot.style.top = `${Math.random() * window.innerHeight}px`;
});

// Update small dot positions on mouse move
document.addEventListener('mousemove', (e) => {
    smallDots.forEach((dot) => {
        const dx = e.clientX - parseFloat(dot.style.left);
        const dy = e.clientY - parseFloat(dot.style.top);
        const distanceToCursor = Math.sqrt(dx * dx + dy * dy);

        if (distanceToCursor > 50) {
            dot.style.opacity = '1';
            dot.style.left = `${parseFloat(dot.style.left) + dx / 10}px`;
            dot.style.top = `${parseFloat(dot.style.top) + dy / 10}px`;
        } else {
            dot.style.opacity = '0';
        }
    });
});
