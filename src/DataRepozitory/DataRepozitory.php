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

            $query = pg_query($this->conn, 'SELECT id, voltage, measurement_date::time FROM temperature_value ORDER BY id DESC LIMIT 15');

            while($row = pg_fetch_row($query)){
                  array_push($result, array(
                  "voltage" => $row[1],
                  "date" => $row[2],
                  
                  ));
            }

            return $result;
      }
      public function getOne() // метод возвращает одну последнюю запись о вольтаже
      {
            $result = array();

            $query = pg_query($this->conn, "SELECT id, voltage, measurement_date::time FROM temperature_value  ORDER BY id DESC LIMIT 1");

            while($row = pg_fetch_row($query)){
                  $result[] =[
                        "voltage" => $row[1],
                        "date" => $row[2],

                  ];
            }
            return $result;
      }

      public function getByDate()
      {
            $result = $_POST['data'];

            if($result['start_date'] != "" && $result['stop_date'] != "" ){
                  return $this->fetchDatedData($result['start_date'], $result['stop_date']);
            }
            return ['error' => 'start or stop data doesn`t set'];
      }

      public function getDateIntervals()
      {
            $result = [];

            $query = pg_query($this->conn, 'SELECT date(measurement_date) FROM temperature_value  ORDER BY id LIMIT 1');
            $row = pg_fetch_row($query);

            $result['start_date'] = $row[0];

            $query = pg_query($this->conn, 'SELECT date(measurement_date) FROM temperature_value  ORDER BY id DESC LIMIT 1');
            $row = pg_fetch_row($query);

            $result['stop_date'] = $row[0];

            return $result;
      }

      public function fetchDatedData($startDate, $stopDate)
      {
            $result = array();

            $query = pg_query($this->conn, "SELECT voltage, measurement_date::time FROM temperature_value WHERE measurement_date BETWEEN '". $startDate."' and '" . $stopDate."'");
            $row = pg_fetch_all($query);

            while($row = pg_fetch_row($query)){
                  $result[] = [ 'voltage' => $row[0], 'date' => $row[1]];
            }
            return $result;
      }

      public function getDbConf()
      {
            $result = require 'config.php';
            unset($result['pass']);
            return $result;
      }

      public function __destruct()
      {
            pg_close($this->conn);
      }
}