function predictCurrent() {
  const temperature = document.getElementById("temperature").value;
  const sunlightIntensity = document.getElementById("sunlight_intensity").value;
  const humidity = document.getElementById("humidity").value;

  fetch("https://f509-2401-4900-3da0-168-205e-f475-55fb-5b2d.ngrok-free.app/predict", {
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
      document.getElementById('current').innerHTML = data[0].Current_Generated+' A';
      document.getElementById('Orientation').innerHTML = data[0].Panel_Orientation;
      document.getElementById('Position').innerHTML = data[0].Panel_Position;
    
      // console.log(data[0].Current_Generated);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
