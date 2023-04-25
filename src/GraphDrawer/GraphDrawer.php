<?php



namespace App\GraphDrawer;
use PHPlot;

class GraphDrawer implements IGraphDrawer

{
    private $chart;

    public function _construct()
    {
        $this->chart = new PHPlot();
        $data = array(array('', 2, 3), array('', 2, 3));
        $this->chart->SetDataValues($data);
        $this->chart->SetDataType('data-data');
    }
    public function Draw()
    {
        echo htmlspecialchars($this->chart->DrawGraph());        
    }
}
