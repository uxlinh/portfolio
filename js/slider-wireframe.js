var slideIndex = 1;
        showWireframe(slideIndex);

        function plussSlides(n) {
            showWireframe(slideIndex += n);
        }

        function currentSlide(n) {
            showWireframe(slideIndex = n);
        }

        function showWireframe(n) {
            var i;
            var slides = document.getElementsByClassName("wireframeSlide");
            var dots = document.getElementsByClassName("dot3");
            if (n > slides.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = slides.length
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }