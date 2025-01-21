// Initialize AOS
AOS.init({
    duration: 1300,
    once: true
});

// Add this at the end of your script.js file
document.addEventListener('DOMContentLoaded', function() {
    // Create modal container if it doesn't exist
    if (!document.getElementById('imageModal')) {
        const modalHTML = `
            <div id="imageModal" class="modal">
                <span class="close">&times;</span>
                <button class="nav-btn prev-btn">&lt;</button>
                <img class="modal-content" id="modalImage">
                <button class="nav-btn next-btn">&gt;</button>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    // Get modal elements
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.getElementsByClassName('close')[0];
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // Get all gallery images
    const galleryImages = Array.from(document.querySelectorAll('.img-log img'));
    let currentImageIndex = 0;

    // Function to update modal image
    function updateModalImage(index) {
        currentImageIndex = index;
        modalImg.src = galleryImages[index].src;
        
        // Update button visibility
        prevBtn.style.display = index === 0 ? 'none' : 'block';
        nextBtn.style.display = index === galleryImages.length - 1 ? 'none' : 'block';
    }

    // Add click event to all images
    galleryImages.forEach((img, index) => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            modal.style.display = 'flex';
            updateModalImage(index);
        });
    });

    // Previous button click
    prevBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent modal from closing
        if (currentImageIndex > 0) {
            updateModalImage(currentImageIndex - 1);
        }
    });

    // Next button click
    nextBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent modal from closing
        if (currentImageIndex < galleryImages.length - 1) {
            updateModalImage(currentImageIndex + 1);
        }
    });

    // Arrow key navigation
    document.addEventListener('keydown', function(event) {
        if (modal.style.display === 'flex') {
            if (event.key === 'ArrowLeft' && currentImageIndex > 0) {
                updateModalImage(currentImageIndex - 1);
            } else if (event.key === 'ArrowRight' && currentImageIndex < galleryImages.length - 1) {
                updateModalImage(currentImageIndex + 1);
            } else if (event.key === 'Escape') {
                modal.style.display = 'none';
            }
        }
    });

    // Close modal when clicking the × button
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});




// Get the button:
let mybutton = document.getElementById("btnGototop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Enable smooth scrolling
  });
}




// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("BtnPlayPause");

// Pause and play the video, and change the button text
// function PlaypauseFunction() {
//   if (video.paused) {
//     video.play();
//     btn.innerHTML = "Pause";
//   } else {
//     video.pause();
//     btn.innerHTML = "Play";
//   }
// }

// function PlaypauseFunction() {
//     if (video.paused) {
//       video.play();
//       btn.innerHTML = "Pause";
//     } else {
//       video.pause();
//       btn.innerHTML = "Play";
//     }
//   }


  function PlaypauseFunction() {
    const video = document.getElementById("myVideo"); // อ้างอิงวิดีโอ
    const icon = document.getElementById("playPauseIcon"); // อ้างอิงไอคอนในปุ่ม
  
    if (video.paused) {
      video.play(); // เล่นวิดีโอ
      icon.className = "fa fa-pause-circle"; // เปลี่ยนไอคอนเป็น pause
    } else {
      video.pause(); // หยุดวิดีโอ
      icon.className = "fa fa-play-circle"; // เปลี่ยนไอคอนเป็น play
    }
  }



