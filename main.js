// fix navbar
$(window).on("scroll",function(){
    if($(window).scrollTop())
    {
        $("nav").addClass("black");
    }
    else
    {
        $("nav").removeClass("black");
    }
});

 //carousel srction code

 $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
            },
        600:{
            items:1
            },
        1000:{
            items:1
            }
               }
            })


            //scroll top code
        var topntn= document.getElementById('go-Top');
        window.onscroll=function(){scrollfuncation()};

        function scrollfuncation(){
        if(document.body.scrollTop>50 || document.documentElement.scrollTop>50)
        {
            topbtn.style.display="block";
        }
        else
        {
            topbtn.style.display="none";
        }
        }

        function displaytop()
        {
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;
        }
