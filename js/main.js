$(function () {
  // bung the current version of jQuery in the console
  console.log($().jquery);
});

function viewportWidthCheck() {
    var viewportWidth = document.documentElement.clientWidth
    //alert(viewportWidth);
    
    if (viewportWidth <= "850") {
      coversPerRow = 3;
    }
    else if (viewportWidth >= "851" && viewportWidth <= "1200") {
      coversPerRow = 4;
    } 
    else {
      coversPerRow = 5;  
    }
    
    var coverWidth = viewportWidth / coversPerRow;
    return coverWidth;
}

function setAlbumCoverSize() {
    for (var i = 0; i < albumCoverClass.length; ++i) {
        albumCoverClass[i].style.width = viewportWidthCheck() + "px";
        albumCoverClass[i].style.height = viewportWidthCheck() + "px";
    }
}

var albumCoverClass = document.getElementsByClassName("album-cover");

// Setting a timer and polling for the screen size every 500ms seems smoother
setInterval(setAlbumCoverSize, 500);

//setAlbumCoverSize();
//window.onresize = setAlbumCoverSize;