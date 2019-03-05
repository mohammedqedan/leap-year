function isPrime (num) {
  debugger;
  if (num <= 1) {
    return true
  } else if (num <= 3) {
    return true
  } else if (num%2 === 0 || num%3 === 0) {
    return false
  }

  let i = 5
  while (i*i <= num) {
    if (num%i === 0 || num%(i+2) === 0) {
      return false
    }
    i += 6
  }
  return true
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
