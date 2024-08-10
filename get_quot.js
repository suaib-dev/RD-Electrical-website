

document.getElementById('getQuoteForm').addEventListener('submit', function (event) {
    var submitButton = document.getElementById('submit');
    // Disable the submit button and change its color
    submitButton.disabled = true;
    submitButton.style.backgroundColor = 'gray';
    // Optionally change the cursor to indicate the button is disabled
    submitButton.style.cursor = 'not-allowed';
});

function toggleCustomOption() {
    const dropdown = document.getElementById('dropdown');
    const customOption = document.getElementById('customOption');

    if (dropdown.value === 'Other') {
        customOption.classList.remove('hidden');
    } else {
        customOption.classList.add('hidden');
        customOption.value = ''; // Clear custom option value
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Footer date
    document.getElementById('year').textContent = new Date().getFullYear();



    // Event listener for dropdown change
    document.getElementById('dropdown').addEventListener('change', toggleCustomOption);

    // Contact form submission
    document.getElementById('getQuoteForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        console.log('Form submission started'); // Debugging log



        const dropdownValue = document.getElementById('dropdown').value;
        const customOption = document.getElementById('customOption').value;

        const selectedOption = dropdownValue === 'Other' ? customOption : dropdownValue;
        // Get form data
        const formData = {
            name: document.getElementById('name1').value,
            email: document.getElementById('email1').value,
            phoneNumber: document.getElementById('phoneNumber1').value,
            qty: selectedOption,
            message: document.getElementById('message1').value,
        };


        console.log('Form Data:', formData); // Debugging log

        // Send POST request to server
        fetch('https://rd-web-backend.onrender.com/get-quot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(

                formData
            ),
        })
            .then(response => {
                console.log('Server Response:', response); // Debugging log
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Handle the response from the server
                alert('Form submitted successfully!');
                console.log('Success:', data);
                document.getElementById('getQuoteForm').reset();
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('There was an error submitting the form.');
            });
    });
});


