document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('registration-form');
            const feedbackDiv = document.getElementById('form-feedback');

            form.addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent form submission

                const username = document.getElementById('username').value.trim();
                const email = document.getElementById('email').value.trim();
                const password = document.getElementById('password').value.trim();

                let isValid = true;   // Assume the form is valid initially
                let messages = [];   // Array to store error messages

                if (username.length < 3) {
                    isValid = false;
                    messages.push("Username must be at least 3 characters long.");
                }

                if (email.length < 3) {
                    isValid = false;
                    messages.push("email must be at least 3 characters long.");
                }
                if (password.length < 8) {
                   isValid = false;
                   messages.push("password must be at least 8 characters long.");
                }

                // Display feedback to the user
                if (isValid) {
                    feedbackDiv.style.display = 'block';
                    feedbackDiv.style.color = 'green';
                    feedbackDiv.style.background = '#dff2e2';
                    feedbackDiv.innerHTML = "Registration successful!";
                } else {
                    feedbackDiv.style.display = 'block';
                    feedbackDiv.style.color = '#d8000c';
                    feedbackDiv.style.background = '#ffbaba';
                    feedbackDiv.innerHTML = messages.join("<br>"); // Join messages with line breaks
                }
            });
        });