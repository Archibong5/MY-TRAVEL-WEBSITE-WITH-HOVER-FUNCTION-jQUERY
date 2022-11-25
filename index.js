// NAVBAR

$(document).ready(function(){
  $(".nav-word").hover(function(){
    $(this).css("font-size", "30px");
  }, function(){
    $(this).css("font-size", "20px")
  });
});

$(document).ready(function(){
  $(".register").hover(function(){
    $(this).css("font-size", "30px");
    $(this).css("background-color", "royalblue")
  }, function(){
    $(this).css("font-size", "20px")
    $(this).css("background-color", "#E61C5D")

  });
});


// FIRST CONTAINER
$(document).ready(function(){
  $(".unsplash").hover(function(){
    $(this).css("height","700px");
    $(this).css("width", "400px");
  }, function(){
    $(this).css("height","600px");
    $(this).css("width", "370px");
  });
});


$(document).ready(function(){
  $(".small").hover(function(){
    $(this).css("height","500px");
    $(this).css("width", "300px");
  }, function(){
    $(this).css("height","330px");
    $(this).css("width", "200px");
  });
});



// SECOND CONTAINER
// LEFT
$(document).ready(function(){
  $(".back").hover(function(){
    $(this).css("height", "700px");
    $(this).css("width", "400");

  }, function(){
    $(this).css("height", "600");
    $(this).css("width", "350");
  });
});


$(document).ready(function(){
  $(".front").hover(function(){
    $(this).css("height", "550px");
    $(this).css("width", "300");

  }, function(){
    $(this).css("height", "450");
    $(this).css("width", "300");
  })
})

// RIGHT
$(document).ready(function(){
  $(".about-number").hover(function(){
    $(this).css("color", "royalblue");
    $(".about-about").css("font-size", "20px")
  }, function(){
    $(this).css("color", "#E61C5D");
    $(".about-about").css("font-size", "16px")


  })
})



// THIRD CONTAINER
// C-IMAGE
$(document).ready(function(){
  $(".c-image").hover(function(){
    $(this).css("width", "90%");
  }, function(){
    $(this).css("width", "100%");


  });
});

// TC-ARROW

$(document).ready(function(){
  $(".tc-image").hover(function(){
    $(this).css("width", "27%");
  }, function(){
    $(this).css("width", "25%");
  })
})

// TESTIMONIAL
$(document).ready(function(){
  $(".java-image").hover(function(){
    $(this).css("width", "120%")

  }, function(){
    $(this).css("width", "100%");


  });
});


// LAST CONTAINER
$(document).ready(function(){
  $(".java-image2").hover(function(){
    $(this).css("width", "120%");
  }, function(){
    $(this).css("width", "100%");

  })
})
