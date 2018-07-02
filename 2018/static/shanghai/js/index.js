
//end include third-party js
$(window).scroll(function(){
    handleTopNavAnimation();
});

$(window).load(function(){
    handleTopNavAnimation();
});

function handleTopNavAnimation() {
    var top=$(window).scrollTop();

    if(top>60){
        $('#site-nav').addClass('navbar-solid');
    } else{
        $('#site-nav').removeClass('navbar-solid');
    }
}

smoothScroll.init();