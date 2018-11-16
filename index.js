function greet(time) {
  time = time.split(':')[0]
  time = parseInt(time, 10)
  var greet;


  if (time < 12) {
      greet = 'Good Morning';
  } else if (time >= 12 && time <= 17) {
      greet = 'Good Afternoon';
  } else if (time >= 17 && time <= 24) {
      greet = 'Good Evening';
  } else {
    greet = 'Hello';
  }
  return greet;
  document.getElementById("greeting").innerHTML = greet;
}

