<?php

namespace App\DataRepozitory;
use Exception;

class DataRepozitory
{
    private $conn;
    public function __construct()
    {
        $conf = require 'config.php';

        try{
            $this->conn = pg_connect(
            "host=".$conf['host'].
            " port=".$conf['port'].
            " dbname=".$conf['dbname'].
            " user=".$conf['user'].
            " password=".$conf['pass']);
        }
        catch(Exception $ex){
            echo $ex->getMessage();
            }
    }

    public function GetTemperatureData()
    {
        $result = array();
        $responce = pg_query($this->conn, "SELECT * FROM temperature_value");
        while($row = pg_fetch_row($responce)){
            array_push($result , $row[1], $row[2]);
        }
        return $result;
    }
    public function __destruct()
    {
        pg_close($this->conn);
    }
}
