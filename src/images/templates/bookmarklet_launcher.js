(function(){
    if (window.myBookmarklet !== undefined){
        myBookmarklet();
    }
    else {
        document.body.appendChild(
            document.createElement('script')
        ).src='https://8f0a80898d16.ngrok.io/static/js/bookmarklet.js?r='+
        Math.floor(Math.random()*99999999999999999999);
    }
})();
