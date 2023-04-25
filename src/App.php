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
        $data = $this->data->GetTemperatureData();

        foreach ($data as $value) {
            echo $value . "<br>";
        }
        // $this->chartService->Draw();
        
    }
}
?>
