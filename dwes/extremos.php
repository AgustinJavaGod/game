<?php
    function extremos(&$max, &$min, $vector){
        for($i=1, $max = $vector[0], $min = $vector[0]; $i < count($vector);$i++){
            if($max < $vector[$i]) $max = $vector[$i];
            if($min > $vector[$i]) $min = $vector[$i];
        }
    }
    extremos( $maximo, $minimo, array(4,1,5,10,9));
    echo "máximo {$maximo}<br>";
    echo "mínimo {$minimo}<br>";
?>