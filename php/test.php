<?php  
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $newEntry = ["text" => $_POST['text']];
}
$fileName = '../data/info.json';

// Načtení existujících dat nebo vytvoření prázdného pole
if (file_exists($fileName)) {
    $currentData = json_decode(file_get_contents($fileName), true);
} else {
    $currentData = [];
}

// Přidání nové odpovědi
$currentData[] = $newEntry;

// Uložení zpět
file_put_contents($fileName, json_encode($currentData, JSON_PRETTY_PRINT));

if ($fileName) {
    echo "Soubor $fileName byl úspěšně vytvořen.";
} else {
    echo "Došlo k chybě při zápisu souboru.";
}

?>