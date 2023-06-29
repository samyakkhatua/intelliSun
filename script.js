function predictCurrent() {
  const temperature = document.getElementById("temperature").value;
  const sunlightIntensity = document.getElementById("sunlight_intensity").value;
  const humidity = document.getElementById("humidity").value;

  fetch("http://127.0.0.1:8080/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      temperature: temperature,
      sunlight_intensity: sunlightIntensity,
      humidity: humidity
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('current').innerHTML = 'Predicted current generated: ' + data[0].Current_Generated+' A';
      document.getElementById('Orientation').innerHTML = 'Predicted Panel Orientation: ' + data[0].Panel_Orientation;
      document.getElementById('Position').innerHTML = 'Predicted Panel Position: ' + data[0].Panel_Position;
    
      console.log(data[0].Current_Generated);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
