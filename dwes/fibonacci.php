<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>
<?php
    function fibonacci($n)
    {
        $fibonacci  = [0,1];  
        echo    "<table class=\"table table-bordered table-striped table-dark text-center \">
                    <thead>
                    <tr>
                        <th scope=\"col\"></th>
                        <th scope=\"col\">Número Fibonacci</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope=\"row\">1</th>
                        <td>1</td>
                    </tr>";
        for($i=2;$i<=$n;$i++)
            {
                $fibonacci[] = $fibonacci[$i-1]+$fibonacci[$i-2];
                $orden = $i-1;
                echo "      <th scope=\"row\">" . $i . "</th>
                            <td>$fibonacci[$i]</td>
                        </tr>
                        ";
                //echo "$fibonacci[$i] <br>";
            }
            echo "</tbody>
            </table>";
    }
    fibonacci(100); 
?>