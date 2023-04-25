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

    public function getMany()
    {
        $result = array();

        $query = pg_query($this->conn, 'SELECT * FROM temperature_value ORDER BY id DESC LIMIT 10');

        while($row = pg_fetch_row($query)){
            array_push($result, array(
                "voltage" => $row[1],
                "date" => $row[2],

            ));
        }

        return $result;
    }
    public function getOne()
    {
        $result = array();
    }
    public function getByDate($date)
    {   
        $result = array();
    }
    public function __destruct()
    {
        pg_close($this->conn);
    }
}
