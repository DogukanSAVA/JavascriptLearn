function calculateVolume() {

          length = document.getElementById("Length").value;
          width = document.getElementById("Width").value;
          height = document.getElementById("Height").value;
          try {
              if ((length > 1000) || (width > 1000) || (height > 1000))
                  throw "err"
              else
                  var volume = length * width * height;
              alert(volume);
          } catch (err) {
              alert("You have not entered all three dimensions correctly");
          }
      }