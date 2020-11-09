function square() {
    for (var i=1; i <= 4; i++) {
      fd(50)
      lt(90)
    }
  }
  square()

  function triangle() {
    for (var i=1; i <= 3; i++) {
      fd(50)
      lt(360/3)
    }
  }
  triangle()

  function circle() {
    for (var i=1; i <= 999; i++) {
      fd(1)
      lt(360/999)
    }
  }
  circle()

  function multicircle() {
    for (var i=1; i <= 999; i++) {
      fd(1)
      lt(360/999)
    }
  }
  multicircle()
