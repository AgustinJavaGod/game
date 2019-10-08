<html>
    <head>
        <title>Factorial</title>
    </head>
    <body>
        <?php
        function fact($x) 
        {
            $return = 1;
            for ($i=2; $i <= $x; $i++) {
                $return = $return * $i;
            }
            return $return;
        }
        $numfact = 45;
        echo "El factorial de $numfact es " . fact($numfact) . "<br>";
        ?>
    </body>
</html>