<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <form action="Decdeli-Activity5.php" method="post">
        <label>From: </label>
        <input type="text" name="from" value="<?php 
            if ($from = isset($_POST['from']) and !empty($_POST['from'])) 
                echo $_POST['from'];
            else echo null;
            ?>">

        <label>Currency:</label>
        <select name="cur1">
            <option value="USD">US Dollar</option>
            <option value="CAD">Canadian Dollar</option>
            <option value="EUR">Euro</option>
        </select>

        <br>

        <label>To: </label>
        <input type="text" value=" <?php      
            $items = array(
                "USD/USD" => 1,
                "USD/CAD" => 1.36,
                "USD/EUR" => 0.91,          
                "CAD/USD" => 0.74,
                "CAD/CAD" => 1,
                "CAD/EUR" => 0.67,            
                "EUR/USD" => 1.10,
                "EUR/CAD" => 1.47,
                "EUR/EUR" => 1,
            );
            
            
            if(isset($_POST['submit'])) {        
                $from = $_POST['from'];
                $cur1 = $_POST['cur1'];
                $cur2 = $_POST['cur2'];
            
                $item = $items["$cur1/$cur2"];
                $result = $item * $from;

                echo $result;
            }

            ?>">

        <label>Currency:</label>
        <select name="cur2">
            <option value="USD">US Dollar</option>
            <option value="CAD">Canadian Dollar</option>
            <option value="EUR">Euro</option>
        </select>

        <br>

        <input type='submit' name='submit' value="Convert">
    </form>   
</body>

</html>