
// document.addEventListener('DOMContentLoaded', () => {
//     // Footer date
//     document.getElementById('year').textContent = new Date().getFullYear();

//     // Contact form submission
//     document.getElementById('contectForm').addEventListener('submit', function (event) {
//         event.preventDefault(); // Prevent the default form submission
//         console.log(document.getElementById('name').value,);

//         // Get form data
//         const formData = {
//             name: document.getElementById('name').value,
//             email: document.getElementById('email').value,
//             phoneNumber: document.getElementById('phoneNumber').value,
//             message: document.getElementById('message').value,
//         };

//         console.log(formData);



//         // Send POST request to server
//         fetch('http://192.168.0.102:3000/get-quot', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),

//         })
//             .then(response => response.json())

//             .then(data => {
//                 // Handle the response from the server
//                 alert('Form submitted successfully!');
//                 console.log('Success:', data);
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//                 alert('There was an error submitting the form.');
//             });
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    // Footer date
    document.getElementById('year').textContent = new Date().getFullYear();

    // Contact form submission
    document.getElementById('contectForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        console.log('Form submission started'); // Debugging log

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phoneNumber: document.getElementById('phoneNumber').value,
            message: document.getElementById('message').value,
        };
        console.log(document.getElementById('name').value,);

        console.log('Form Data:', formData); // Debugging log

        // Send POST request to server
        fetch('https://rd-web-backend.onrender.com/contect-us', {
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
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('There was an error submitting the form.');
            });
    });
});

