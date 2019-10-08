<html>
    <head>
        <title>call_user_func</title>
        <style>
            body{
                text-align:center
            }
        </style>
    </head>
    <body>
        <?php
        function profesor($nombre,$descripcion){
            echo "$nombre $descripcion<br><br>";
        }

        call_user_func("profesor", "Fernando", "sabe hacer integrales.");
        ?>
    </body>
</html>
