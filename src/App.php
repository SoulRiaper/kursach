<?php

namespace App;

use App\DataRepozitory\DataRepozitory;
use App\GraphDrawer\IGraphDrawer;

class App{

    private $data;
    private $chartService;

    public function __construct(DataRepozitory $data, IGraphDrawer $chart)
    {
        $this->data = $data;
        $this->chartService = $chart;
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
