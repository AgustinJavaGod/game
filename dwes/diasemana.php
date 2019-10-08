<!DOCTYPE html>
<html lang="es">
    <head>
        <title>Día semana.</title>
        <style>
            body{
                text-align:center
            }
        </style>
    </head>
    <body>
        <?php
            $day = rand(1,7);
            switch($day){
                case 1:
                    echo "El día $day es Lunes.";
                    break;
                case 2:
                    echo "El día $day es Martes.";
                    break;
                case 3:
                    echo "El día $day es Miércoles.";
                    break;
                case 4:
                    echo "El día $day es Jueves.";
                    break;
                case 5:
                    echo "El día $day es Viernes.";
                    break;
                case 6:
                    echo "El día $day es Sábado.";
                    break;
                case 7:
                    echo "El día $day es Domingo.";
                    break;           
            }
        ?>
    </body>
</html>