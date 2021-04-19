var slideIndex = 1;
        showProduct(slideIndex);

        function plussSlides(n) {
            showProduct(slideIndex += n);
        }

        function currentSlide(n) {
            showProduct(slideIndex = n);
        }

        function showProduct(n) {
            var i;
            var slides = document.getElementsByClassName("productSlide");
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