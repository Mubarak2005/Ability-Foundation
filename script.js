gsap.set(".text-div",{scale: 3})

let tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".home",
        // scroller: "body",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin:true
    }
})

tl.to(".video-div",{
    "--clip": "0%",
    ease: Power2
}, "a")
.to(".text-div",{
    scale: 1,
    ease: Power2
}, "a")
.from(".lft",{
    xPercent: 2,
    ease: Power2
}, "b")
.from(".rgt",{
    xPercent: -2,
    ease: Power4
}, "b")


let clutter = "";
document.querySelector(".textpara").textContent.split("").forEach(function(e){
    if(e===""){
        clutter += `<span>&nbsp;</span>`
    }
    clutter += `<span>${e}</span>`;
})
document.querySelector(".textpara").innerHTML = clutter;

gsap.set(".textpara span",{opacity:.1})

gsap.to(".textpara span",{
    opacity: 1,
    stagger: .05,
    ease: Power4,
    scrollTrigger:{
        trigger:".textpara",
        // markers:true,
        start:"top 90%",
        end:"bottom 70%",
        scrub:1.5,
        // markers:true
    }
})

// const carousel = document.getElementById('carousel');

//     function nextSlide() {
//       carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
//     }

//     function prevSlide() {
//       carousel.scrollBy({ left: -carousel.clientWidth, behavior: 'smooth' });
//     }

//     document.querySelector(".prev").addEventListener("click",() => {
//         prevSlide();
//     })
//     document.querySelector(".next").addEventListener("click",() => {
//         nextSlide();
//     })

    // let isScrolling;
    // document.addEventListener("scroll", () => {
    //     const nav = document.querySelector("nav");
    //     nav.style.backgroundColor = "transparent";
  
    //     // Clear any previously set timeout
    //     clearTimeout(isScrolling);
  
    //     // Set a timeout to change background color to black when scrolling stops
    //     isScrolling = setTimeout(() => {
    //       nav.style.backgroundColor = "#eee";
    //     }, 300);

    // })



    const slides = document.getElementById('slides');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.children.length;

    let currentIndex = 0;

    function updateCarousel(index) {
      slides.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((dot, idx) => {
        dot.classList.toggle('bg-gray-900', idx === index);
        dot.classList.toggle('bg-gray-400', idx !== index);
      });
    }

    document.getElementById('next').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel(currentIndex);
    });

    document.getElementById('prev').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel(currentIndex);
    });

    dots.forEach((dot) => {
      dot.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.dataset.index);
        updateCarousel(currentIndex);
      });
    });

    // Initialize
    updateCarousel(currentIndex);
