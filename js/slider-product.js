var slideIndex = 1;
        showProduct(slideIndex);

        function plussaSlides(n) {
            showProduct(slideIndex += n);
        }

        function currentaSlide(n) {
            showProduct(slideIndex = n);
        }

        function showProduct(n) {
            var i;
            var slides = document.getElementsByClassName("productSlide");
            var dots = document.getElementsByClassName("dot4");
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
            slides[slideIndex - 1].style.display = "grid";
            dots[slideIndex - 1].className += " active";
        }