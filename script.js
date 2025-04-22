window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const alice = document.getElementById('alice');
    
    // Move Alice to the right based on scroll
    let moveRight = scrollTop * 1.5; // Adjust multiplier to match screen width
    alice.style.left = `${moveRight}px`;
  
    // When she reaches the right side of the screen
    if (moveRight + 100 >= window.innerWidth) {
      window.location.href = "index.html"; // Redirect to a new page
    }
  });