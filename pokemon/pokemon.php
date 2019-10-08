<?php
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
  case 'GET':
        if (file_exists('pokedex.json')) {
          $json_data = file_get_contents('pokedex.json');
          $tempArray = json_decode($json_data);
          $arrayRetorno = array();
          if(sizeof($tempArray)!=0){
            foreach ($tempArray as $valor) {
                array_push($arrayRetorno,$valor);
            }
            if(sizeof($arrayRetorno)!=0)
            {
              echo json_encode($arrayRetorno);
            }else{
              echo 'y';
            }
          }else{
            echo 'y';
          }
        }else {
          echo 'y';
        }
    break;
  default:
      handle_error($request);
    break;
}
?>
