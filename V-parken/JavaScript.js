$(window).scroll(function(){
            if($(this).scrollTop()>120){
                $('.nav').addClass("sticky");
            }
            else
            {
                $('.nav').removeClass("sticky")
            }
        });
//Fixed Nav Bar//
//Testimonials//
// This simple function returns object reference for elements by ID
        function _(x) {
            return document.getElementById(x);
        }
        // Variables for bubble array, bubble index, and the setInterval() variable
        var ba, bi = 0,
            intrvl;
        // bca - Bubble Content Array. Put your content here.
        var bca = [
            '<img id="tst" src="img/dancer-with-music%20(2).png"><h2>Urban Dance</h2><p>Hver torsdag kl.16:00-17:00 (8-11 årige) kl.17:00-18:00 (12-18 årige)</p>',
            '<img id="tst" src="img/microphone.png"><h2>Urban Music</h2><p>Hver torsdag Lydstudiet i Den Røde Varmecentral fra kl.15:00-19:00.</p>',
            '<img id="tst" src="img/Lisbeth.jpg"><h2>Sasha</h2><p>-Times ipsum dolor sit amet, consectetur adipisicing elit. Officia aperiam omnis praesentium</p>',
            '<img id="tst" src="img/Lisbeth.jpg"><h2>Sasha</h2><p>-Times ipsum dolor sit amet, consectetur adipisicing elit. Officia aperiam omnis praesentium</p>'
        ];
        // This function is triggered by the bubbleSlide() function below
        function bubbles(bi) {
            // Fade-out the content
            _("bubblecontent").style.opacity = 0;
            // Loop over the bubbles and change all of their background color
            for (var i = 0; i < ba.length; i++) {
                ba[i].style.background = "rgba(252, 171, 66, 0.45)";
            }
            // Change the target bubble background to be darker than the rest
            ba[bi].style.background = "#FCAB42";
            // Stall the bubble and content changing for just 300ms
            setTimeout(function() {
                // Change the content
                _("bubblecontent").innerHTML = bca[bi];
                // Fade-in the content
                _("bubblecontent").style.opacity = 1;
            }, 300);
        }
        // This function is set to run every 5 seconds(5000ms)
        function bubbleSlide() {
            bi++; // Increment the bubble index number
            // If bubble index number is equal to the amount of total bubbles
            if (bi == ba.length) {
                bi = 0; // Reset the bubble index to 0 so it loops back at the beginning
            }
            // Make the bubbles() function above run
            bubbles(bi);
        }
        // Start the application up when document is ready
        window.addEventListener("load", function() {
            // Get the bubbles array
            ba = _("bubbles").children;
            // Set the interval timing for the slideshow speed
            intrvl = setInterval(bubbleSlide, 5000);
        });
//scrolling
        $(document).ready(function() {
            $('.btn a').click(function() {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                    location.hostname == this.hostname) {
                    var $target = $(this.hash);
                    $target = $target.length && $target ||
                        $('[name=' + this.hash.slice(1) + ']');
                    if ($target.length) {
                        var targetOffset = $target.offset().top;
                        $('html,body')
                            .animate({
                                scrollTop: targetOffset
                            }, 1000);
                        return false;
                    }
                }
            });
        });
function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                    pageLanguage: 'da',
                    includedLanguages: 'da,en',
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                }, 'google_translate_element');
            }
