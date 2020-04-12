        window.onscroll = function () {
            scrollFunction()
        };

        function scrollFunction() {
            if (window.screen.width > 992) {
                if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                    document.querySelector(".bg-custom").style.background = "white";
                    document.querySelector(".navbar").style.height = "50px";
                } else {
                    document.querySelector(".bg-custom").style.background = "transparent";
                    document.querySelector(".navbar").style.height = "70px";
                }
            }
        }