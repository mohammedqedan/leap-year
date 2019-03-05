function isPrime(num) {
  debugger;
  if (num === 2) {
    return true;
  }
  else if(num > 1){
    for (var i = 2;  i < num; i++) {

      if (num % i === 0 ) {
        return false;
      }

      else if (num === (i * i)) {
        return false
      }
       else {
         return false;
       }
    }
  }
  else {
    return true;
  }
}
console.log(isPrime(121));
// function
$(document).ready(function() {
  $("form#prime_number").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = isPrime(number);

    $(".prime").text(number);

    if (!result) {                 // same as writing if (result === false)
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
  });
});
