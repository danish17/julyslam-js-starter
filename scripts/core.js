/* YOUR JS CODE GOES HERE */
/* !REMOVE EXISTING CODE BEFORE PROCEEDING! */

var countDownDate = new Date("Aug 1, 2021 11:59:00").getTime();

// Define the date to countdown to
Promise.resolve().then(() => {
  setInterval(function () {
    var now = new Date().getTime(); // Get today's date and time

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Display the result in the element with id="demo"
    document.querySelector("span.countdown").innerHTML =
      days + "d " + hours + "h " + minutes + "m"; // Display the result in countdown span

    // If the count down is finished, show some message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("span.countdown").innerHTML = "You're late";
    }
  }, 1000);
});
