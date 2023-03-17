function predictCurrent() {
  const temperature = document.getElementById("temperature").value;
  const sunlightIntensity = document.getElementById("sunlight_intensity").value;
  const humidity = document.getElementById("humidity").value;
  const panelOrientation = document.getElementById("panel_orientation").value;
  const panelPosition = document.getElementById("panel_position").value;

  fetch("http://127.0.0.1:8000/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      temperature: temperature,
      sunlight_intensity: sunlightIntensity,
      humidity: humidity,
      orientation: panelOrientation,
      position: panelPosition
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('result').innerHTML = 'Predicted current generated: ' + data.toFixed(2) + ' A';
    //   document.getElementById("result").innerHTML = data;
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
