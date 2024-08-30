document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('file-input');
    const predictButton = document.getElementById('predict-button');
    const resultText = document.getElementById('result-text');
    const preview = document.getElementById("preview");
    
     fileInput.addEventListener("change", function() {
      changeImage(this);
    });

function changeImage(input) {
  var reader;

  if (input.files && input.files[0]) {
    reader = new FileReader();

    reader.onload = function(e) {
      preview.setAttribute('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}

    predictButton.addEventListener('click', function() {
      const file = fileInput.files[0];
      const formData = new FormData();
      formData.append('file', file);

      fetch('/predict', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        resultText.textContent = `Prediction: ${data.prediction}`;
      })
      .catch(error => {
        console.error('Error:', error);
        resultText.textContent = 'Prediction failed. Please try again.';
      });
    });
  });