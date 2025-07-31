document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("messageForm");
  const output = document.getElementById("output");

  form.addEventListener("submit", function (event) {
    event.preventDefault();


    const name = document.getElementById("name").value.trim();
    const birthdate = document.getElementById("birthdate").value;
    const gender = form.querySelector("input[name='gender']:checked");
    const message = document.getElementById("message").value.trim();


    if (!name || !birthdate || !gender || !message) {
      output.innerHTML = "<p style='color: red;'>Please fill in all fields.</p>";
      return;
    }


    const resultHTML = `
      <h3>Message Received</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Birthdate:</strong> ${birthdate}</p>
      <p><strong>Gender:</strong> ${gender.value}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    output.innerHTML = resultHTML;


    form.reset();
  });
});
