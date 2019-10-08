<!DOCTYPE html>
<html lang="es">
    <head>
        <title>Par Impar</title>
        <style>
            h1{
                text-align:center
            }
        </style>
    </head>
    <body>
        <?php
           $rand = rand(0, 100);
           $resultado = ($rand%2==0) ? "El número $rand es par." : "El número $rand es impar.";
           echo "<h1> $resultado</h1>";
        ?>
    </body>
</html>