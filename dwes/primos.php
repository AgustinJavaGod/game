<!DOCTYPE html>
<html lang="es">
    <head>
        <title>Números primos</title>
        <style>
            h1{
                text-align:center;
            }
            .si{
                background-color: green;
            }
            .no{
                background-color: red;
            }
        </style>
    </head>
    <body>
        <?php
            function esprimo($n){
                for($x=2; $x<$n; $x++)
                {
                    if($n %$x ==0){
                      return 0;
                    }
                }
                return 1;
            }
            $rand = rand(1,1000);
            $resultado = esprimo($rand);
            if($resultado==0){
                echo "<h1 class=\"no\">$rand no un número primo.</h1>";
            }else{
                echo "<h1 class=\"si\">$rand es un número primo.</h1>";
            }
        ?>
    </body>
</html>