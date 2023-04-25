<?php

namespace App;

use App\DataRepozitory\DataRepozitory;
use App\GraphDrawer\IGraphDrawer;

class App{

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
            
        }
        else{

        }
    }
}
?>
