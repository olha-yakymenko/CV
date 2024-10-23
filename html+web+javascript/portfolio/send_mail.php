<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pobierz dane z formularza
    $full_name = filter_var($_POST['full_name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = filter_var($_POST['phone'], FILTER_SANITIZE_NUMBER_INT);
    $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    // Tworzenie treści wiadomości
    $email_message = "
    <h2>Wiadomość kontaktowa</h2>
    <p><strong>Imię i nazwisko:</strong> $full_name</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Telefon:</strong> $phone</p>
    <p><strong>Temat:</strong> $subject</p>
    <p><strong>Wiadomość:</strong><br>$message</p>
    ";

    // Ustawienia nagłówków
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";

    // Adres docelowy (zmień na swój)
    $to = "olhayakymenko89@gmail.com";

    // Wysyłanie e-maila
    if (mail($to, $subject, $email_message, $headers)) {
        echo "Wiadomość została wysłana.";
    } else {
        echo "Wystąpił problem z wysłaniem wiadomości.";
    }
}
?>
