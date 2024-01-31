// Import the Toastify library if you haven't already
// You can include it in your HTML file using the following:
// <script src="https://cdn.jsdelivr.net/npm/toastify-js"></script>

function showToast(message) {
    Toastify({
        text: message,
        duration: 3000, // 3 seconds
        gravity: "bottom", // Position of the toast
        backgroundColor: "#28a745", // Background color of the toast (green in this case)
        close: true,
    }).showToast();
}

function submitForm() {
    // Fetch input values
    var senderName = document.getElementById('senderName').value;
    var purpose = document.getElementById('purpose').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var gmail = document.getElementById('gmail').value;

    // Check if all fields are filled
    if (senderName && purpose && phoneNumber && gmail) {
        // Perform actions with the input values (you can send them to a server, etc.)
        // For now, let's just log them to the console
        console.log('Sender Name:', senderName);
        console.log('Purpose:', purpose);
        console.log('Phone Number:', phoneNumber);
        console.log('Gmail:', gmail);

        // Show a success toast message
        showToast('Message sent successfully!');

        // Clear form fields
        document.getElementById('senderName').value = '';
        document.getElementById('purpose').value = '';
        document.getElementById('phoneNumber').value = '';
        document.getElementById('gmail').value = '';
    } else {
        // Show an error toast message if any field is empty
        showToast('Please fill in all fields.');
    }
}
