
const song = document.getElementById("song");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async () => {
  if (song.paused) {
    try {
      await song.play();
      musicBtn.textContent = "❚❚ Pause Music";
    } catch (error) {
      musicBtn.textContent = "Try Again ♫";
    }
  } else {
    song.pause();
    musicBtn.textContent = "♫ Play Music";
  }
});

// Open surprise letter
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const closeLetter = document.getElementById("closeLetter");

envelope.addEventListener("click", () => {
  letter.classList.add("active");
  envelope.style.display = "none";
});

closeLetter.addEventListener("click", () => {
  letter.classList.remove("active");
  envelope.style.display = "flex";
});

// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart-particle";
  heart.textContent = ["♡", "♥", "✿", "💕"][Math.floor(Math.random() * 4)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-30px";
  heart.style.fontSize = (14 + Math.random() * 20) + "px";
  heart.style.animationDuration = (4 + Math.random() * 4) + "s";

  document.getElementById("hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 500);

// Reveal photo cards on scroll
const cards = document.querySelectorAll(".photo-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

cards.forEach(card => observer.observe(card));
