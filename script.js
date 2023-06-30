function predictCurrent() {
  const temperature = document.getElementById("temperature").value;
  const sunlightIntensity = document.getElementById("sunlight_intensity").value;
  const humidity = document.getElementById("humidity").value;

  fetch("https://7ed5-2401-4900-47f2-e926-90dd-cb89-ee79-98be.ngrok-free.app/predict", {
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
      document.getElementById('current').innerHTML = data[0].Current_Generated.toFixed(2)+' A';
      document.getElementById('Orientation').innerHTML = data[0].Panel_Orientation.toFixed(2);
      document.getElementById('Position').innerHTML = data[0].Panel_Position.toFixed(2);
    
      // console.log(data[0].Current_Generated);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
