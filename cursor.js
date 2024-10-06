const cursor = document.querySelector('.cursor');
const cursorTail = document.querySelector('.cursor-tail');
const smallDots = document.querySelectorAll('.small-dot');
//const cursorContainer = document.getElementById('custom-cursor-container');
document.addEventListener('click',function(event){
    var cursors=document.querySelector('.cursor');
    var tail = document.querySelector('.cursor-tail');
  tail.style.top = event.clientY + 'px';
  tail.style.left = event.clientX + 'px';
    cursors.style.zIndex=1000;
});



document.addEventListener('DOMContentLoaded', function() {
    var smallDots = document.querySelectorAll('.small-dot');
    if (smallDots.length === 0) {
      for (var i = 0; i < 10; i++) {
        var dot = document.createElement('div');
        dot.className = 'small-dot';
        document.body.appendChild(dot);
      }
    }
  });




let smallDotPositions = [];
// Initialize small dot positions
smallDots.forEach((dot, index) => {
    smallDotPositions.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
    });
    dot.style.left = smallDotPositions[index].x + 'px';
    dot.style.top = smallDotPositions[index].y + 'px';
});



document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px'; 
    // Calculate the distance between the cursor and the previous position
    const distance = Math.sqrt(Math.pow(e.movementX, 2) + Math.pow(e.movementY, 2));

    // Scale up the tail when the cursor is moving
    if (distance > 0) {
        cursorTail.style.transform = 'scale(1)';
        cursorTail.style.opacity = '1';
    } else {
        cursorTail.style.transform = 'scale(0)';
        cursorTail.style.opacity = '0';
    }

    // Update the tail position
    cursorTail.style.left = e.clientX + 'px';
    cursorTail.style.top = e.clientY + 'px';

    smallDots.forEach((dot, index) => {
        const dx = e.clientX - smallDotPositions[index].x;
        const dy = e.clientY - smallDotPositions[index].y;
        const distanceToCursor = Math.sqrt(dx * dx + dy * dy);

        if (distanceToCursor > 5) {
            smallDotPositions[index].x += dx / 5;
            smallDotPositions[index].y += dy / 5;
            dot.style.left = smallDotPositions[index].x + 'px';
            dot.style.top = smallDotPositions[index].y + 'px';
            dot.style.opacity = 1;
        } else {
            dot.style.opacity = 0;
        }
    });
});