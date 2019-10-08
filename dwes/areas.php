<?php
    $cuadradolado = 150;
    $rectangulolado1 = 200;
    $rectangulolado2 = 300;

    echo    '<head>
                <title>Áreas y perímetros</title>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>                
            </head>
            <br>
            <div class="cuadrado"><p class="lateral">' . $cuadradolado . '</p><p class="base">' . $cuadradolado . '</p></div>

            <br><br>

            <div class="rectangulo"><p class="lateral">' . $rectangulolado1 . '</p><p class="base">' . $rectangulolado2 . '</p></div>
            
            <br>

            <table class="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Área cuadrado</th>
                        <th scope="col">Perímetro cuadrado</th>
                        <th scope="col">Área rectángulo</th>
                        <th scope="col">Perímetro rectángulo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Fórmula</th>
                        <td>A = a²</td>
                        <td>P = 4 · a</td>
                        <td>A = a · b</td>
                        <td>P = 2 · ( a + b ) </td>
                    </tr>
                    <tr>
                        <th scope="row">Resultado</th>
                        <td>' . $cuadradolado . '² = <mark>' . $cuadradolado**2 . ' m².</mark></td>
                        <td> 4 · ' . $cuadradolado . ' = <mark>' . 4*$cuadradolado . ' m.</mark></td>
                        <td>' . $rectangulolado1 . ' · ' . $rectangulolado2 . ' = <mark>' . $rectangulolado1*$rectangulolado2 . ' m².</mark></td>
                        <td> 2 · ( ' . $rectangulolado1 . ' + ' . $rectangulolado2 . ') = <mark>' . 2*($rectangulolado1+$rectangulolado2) . ' m.</mark></td>
                    </tr>
                </tbody>
            </table>

            <style>
                .cuadrado {
                    height: ' . $cuadradolado . ';
                    width: ' . $cuadradolado . ';
                    background-color: #503;
                    margin: auto;
                    position: relative;
                    display: table;
                    align-items: center;
                }

                .rectangulo {
                    height: ' . $rectangulolado1 . ';
                    width: ' . $rectangulolado2 . ';
                    background-color: #037;
                    margin: auto;
                    margin: auto;
                    position: relative;
                    display: table;
                    align-items: center;
                }

                .lateral {
                    display: table-cell;
                    text-orientation: upright;
                    writing-mode: vertical-rl;
                    vertical-align: middle;
                    color:white;
                }

                .base {
                    display: table-cell;
                    color:white;
                    vertical-align: bottom;
                    text-align:center;
                }

            </style>'
?>