var slideIndex = 1;
        showSlidesB(slideIndex);

        function plusSlidesB(n) {
            showSlidesB(slideIndex += n);
        }

        function currentSlideB(n) {
            showSlidesB(slideIndex = n);
        }

        function showSlidesB(n) {
            var i;
            var slides = document.getElementsByClassName("personaSlideB");
            var dots = document.getElementsByClassName("dotB");
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