<?php

namespace App;

use App\DataRepozitory\DataRepozitory;
use App\GraphDrawer\IGraphDrawer;

class App
{

      private $data;
      private $action;

      public function __construct(DataRepozitory $data, string $action)
      {
            $this->data = $data;
            $this->action = $action;
      }

      public function run()
      {
            if ($this->action == "getMany") {
                  echo json_encode($this->data->getMany()); 
            }
            elseif ($this->action == "getOne") {
                  echo json_encode($this->data->getOne());
            }
            elseif ($this->action == "getByDate") {
                  echo json_encode($this->data->getByDate());
            }
            elseif ($this->action == "getPhpInfo") {
                  echo json_encode([
                        'php_version' => phpversion(),
                        'php_server' => $_SERVER['SERVER_SOFTWARE'],
                        
                  ]);
            }
            elseif($this->action == "getDateIntervals"){
                  echo json_encode($this->data->getDateIntervals());
            }
            elseif($this->action == "getDbConf"){
                  echo json_encode($this->data->getDbConf());
            }
            else{
                  http_response_code(500);
                  echo json_encode(['message' => 'bad request']);
            }
      }
}
?>
