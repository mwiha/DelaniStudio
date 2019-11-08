 $(document).ready(function() {
    //Design toggle
    $(".design").click(function() {
      $(".design-par").show();
      $(this).hide();
    })
    $(".design-par").click(function() {
      $(".design").show();
      $(this).hide();
    })
    //Development toggle
    $(".development").click(function() {
      $(".development-par").show();
      $(this).hide();
    })
     $(".development-par").click(function() {
      $(".development").show();
      $(this).hide();
    })
    // product management
  $(".product").click(function() {
    $(".product-par").show();
    $(this).hide();
  })
  $(".product-par").click(function() {
    $(".product").show();
    $(this).hide();
  })
  //Portfolio hover effects
  //##### Portfolio item 1 ####
  $(".image").mouseenter(function() {
    $(".para-1").show();
  })
  $(".image").mouseleave(function() {
    $(".para-1").hide();
  })
  $(".image1").mouseenter(function() {
    $(".para-2").show();
  })
  $(".image1").mouseleave(function() {
    $(".para-2").hide();
  })
  $(".image2").mouseenter(function() {
    $(".para-3").show();
  })
  $(".image2").mouseleave(function() {
    $(".para-3").hide();
  })
  $(".image3").mouseenter(function() {
    $(".para-4").show();
  })
  $(".image3").mouseleave(function() {
    $(".para-4").hide();
  })
  $(".image4").mouseenter(function() {
    $(".para-5").show();
  })
  $(".image4").mouseleave(function() {
    $(".para-5").hide();
  })
  $(".image5").mouseenter(function() {
    $(".para-6").show();
  })
  $(".image5").mouseleave(function() {
    $(".para-6").hide();
  })
  $(".image6").mouseenter(function() {
    $(".para-7").show();
  })
  $(".image6").mouseleave(function() {
    $(".para-7").hide();
  })
  $(".image7").mouseenter(function() {
    $(".para-8").show();
  })
  $(".image7").mouseleave(function() {
      $(".para-8").hide();
    })
    // submit button
  $('#submit').click(function(event) {
    event.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message');
    var key = '43ab10333d46e19325f96d210ed40c49-us5';
    if (name == '' || email == '' || message == '') {
      alert('Please make sure you have filled in the form correctly!');
    } else {
      alert(' Hi ' + name + ' We have received your message. Thank you for reaching out to us.');
    }
  });
})