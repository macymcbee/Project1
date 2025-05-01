window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const alice = document.getElementById('alice');
    let moveRight = scrollTop * 1.5;
    alice.style.left = `${moveRight}px`;

    if (moveRight + 100 >= window.innerWidth) {
      window.location.href = "page5.html";
    }
  });


  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const alice = document.getElementById('Alice2');
    let moveRight = scrollTop * 1.5; 
    alice.style.left = `${moveRight}px`;
  
  
    if (moveRight + 100 >= window.innerWidth) {
      window.location.href = "index.html";
    }
  });
