document.addEventListener('DOMContentLoaded', (event) => {
    const radioButtons = document.querySelectorAll('input[name="dot"]');
    const mainCard = document.querySelector('.main-card');
    let currentIndex = 0;
    let interval;

    // Function to set the active radio button and slide
    const setActiveSlide = (index) => {
        radioButtons[index].checked = true;
        mainCard.style.marginLeft = `-${index * 100}%`;
    };

    // Function to autoplay the carousel
    const startAutoplay = () => {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % radioButtons.length;
            setActiveSlide(currentIndex);
        }, 5000);
    };

    // Function to stop autoplay
    const stopAutoplay = () => {
        clearInterval(interval);
    };

    // Start autoplay on page load
    startAutoplay();

    // Add event listeners for radio buttons to manually control the slides
    radioButtons.forEach((button, index) => {
        button.addEventListener('change', () => {
            currentIndex = index;
            setActiveSlide(index);
        });
    });
});

class Accordion {
    constructor(el) {
      this.el = el;
      this.summary = el.querySelector("summary");
      this.content = el.querySelector(".accordion-content");
      this.expandIcon = this.summary.querySelector(".accordion-icon");
      this.animation = null;
      this.isClosing = false;
      this.isExpanding = false;
      this.summary.addEventListener("click", (e) => this.onClick(e));
    }
  
    onClick(e) {
      e.preventDefault();
      this.el.style.overflow = "hidden";
  
      if (this.isClosing || !this.el.open) {
        this.open();
      } else if (this.isExpanding || this.el.open) {
        this.shrink();
      }
    }
  
    shrink() {
      this.isClosing = true;
  
      const startHeight = `${this.el.offsetHeight}px`;
      const endHeight = `${this.summary.offsetHeight}px`;
  
      if (this.animation) {
        this.animation.cancel();
      }
  
      this.animation = this.el.animate(
        {
          height: [startHeight, endHeight]
        },
        {
          duration: 400,
          easing: "ease-out"
        }
      );
      this.animation.onfinish = () => {
        this.expandIcon.setAttribute(
          "src",
          "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/></svg>"
        );
        return this.onAnimationFinish(false);
      };
  
      this.animation.oncancel = () => {
        this.expandIcon.setAttribute(
          "src",
          "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/></svg>"
        );
        return (this.isClosing = false);
      };
    }
  
    open() {
      this.el.style.height = `${this.el.offsetHeight}px`;
      this.el.open = true;
      window.requestAnimationFrame(() => this.expand());
    }
  
    expand() {
      this.isExpanding = true;
  
      const startHeight = `${this.el.offsetHeight}px`;
      const endHeight = `${
        this.summary.offsetHeight + this.content.offsetHeight
      }px`;
  
      if (this.animation) {
        this.animation.cancel();
      }
  
      this.animation = this.el.animate(
        {
          height: [startHeight, endHeight]
        },
        {
          duration: 350,
          easing: "ease-out"
        }
      );
  
      this.animation.onfinish = () => {
        this.expandIcon.setAttribute(
          "src",
          "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/></svg>"
        );
        return this.onAnimationFinish(true);
      };
      this.animation.oncancel = () => {
        this.expandIcon.setAttribute(
          "src",
          "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/></svg>"
        );
        return (this.isExpanding = false);
      };
    }
  
    onAnimationFinish(open) {
      this.el.open = open;
      this.animation = null;
      this.isClosing = false;
      this.isExpanding = false;
      this.el.style.height = this.el.style.overflow = "";
    }
  }
  
  document.querySelectorAll("details").forEach((el) => {
    new Accordion(el);
  });

  function goup(){
    window.scrollTo(0,0)
}

var navlinks = document.querySelector(".openmenu");
function showmenu(){
    navlinks.style.right = "0";
}
function hidemenu(){
    navlinks.style.right = "-200px";
}   

const video = document.getElementById('video');
const playIcon = document.getElementById('play-icon');

// Show the play icon when the video is paused or ended
video.addEventListener('pause', () => {
    playIcon.style.display = 'block';
});

video.addEventListener('ended', () => {
    playIcon.style.display = 'block';
});

// Hide the play icon when the video is playing
video.addEventListener('play', () => {
    playIcon.style.display = 'none';
});

// Play the video when the play icon is clicked
playIcon.addEventListener('click', () => {
    video.play();
});
