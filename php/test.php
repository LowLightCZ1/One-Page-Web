<?php
// Save this as display.php

// Check if the form was actually submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the text using the 'name' attribute from the HTML
    $text = $_POST['text'];

    // Display the text
    echo "You typed: " . htmlspecialchars($text);
}
?>