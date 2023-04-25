<?php
use App\GraphDrawer\GraphDrawer;

ini_set('display_startup_errors', 1);
ini_set('display_errors', 1);
error_reporting(-1);

require 'vendor/autoload.php';


use App\App;
use App\DataRepozitory\DataRepozitory;

$action = $_REQUEST['action'];

$app = new App(
    new DataRepozitory(),
    $action,
);

$app->run();
