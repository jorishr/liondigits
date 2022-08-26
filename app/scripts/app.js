//page-loader code than only runs on calendar page
if(document.querySelector('body').classList.contains('calendar-widget')){
    document.onreadystatechange = function() {
        if (document.readyState !== "complete"){
            document.querySelector('.calendly-inline-widget').style.visibility = 'hidden';
        } else {
            document.querySelector('.loader').style.visibility = 'hidden';
            document.querySelector('.calendly-inline-widget').style.visibility = 'visible';
        }
    }
}