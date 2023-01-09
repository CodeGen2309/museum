<?
class dbInterface {
  public $dbConn;

  public function __construct (
    $host = 'localhost', $base = 'database',
    $login = 'admin', $password = 'admin',
  )
  {
    $this -> host = $host;
    $this -> base = $base;
    $this -> login = $login;
    $this -> password = $password;

    $this->setConnection();
  }


  public function setConnection () {
    $config = "mysql:host=localhost;dbname=database";
    $login = $this -> login;
    $password = $this -> password;
    $setup = [PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"];
    $conn = new PDO($config, $login, $password, $setup);

    $this -> dbConn = $conn;
    $this -> sendResponse();
  }


  public function getTable($tableName) {
    $queryString = "SELECT * FROM $tableName";
    $queryItem = $this -> dbConn -> prepare($queryString);
    $res;

    $queryItem -> execute();
    $res = $queryItem -> fetchAll(PDO::FETCH_ASSOC);

    return $res;
  }


  public function insertCellsInTable($table, $cells) {
    $insertQuery = "INSERT INTO $table VALUES (NULL, :value)";
    $queryItem = $this -> dbConn -> prepare($insertQuery);

    foreach ($cells as $cell) {
      $queryItem -> execute(['value' => $cell]);
    }

    return $this -> getTable($table);
  }


  public function rewriteTable ($tableName, $newData) {
    $truncateQuery = "TRUNCATE TABLE $tableName";
    $truncateItem = $this -> dbConn -> prepare($truncateQuery);
    $truncateRes = $truncateItem -> execute();

    $insertQuery = "INSERT INTO $tableName VALUES (NULL, :value)";
    $insertItem = $this -> dbConn -> prepare($insertQuery);
    $resTable;


    foreach ($newData as $cell) {
      $insertItem -> execute(['value' => $cell]);
    }

    $resTable = $this -> getTable($tableName);
    return $resTable;
  }

  public function showTables() {
    $showQuery = "SHOW TABLES";
    $showItem = $this -> dbConn -> prepare($showQuery);
    $res;

    $showItem -> execute(); 
    $res = $showItem -> fetchAll();
    
    return $res;
  }

  public function sendResponse () {
    $action = $_POST['action'];
    $res;

    
    if ($action == 'showTables') { $res = $this-> showTables(); }
    
    if ($action == 'getTable') {
      $tableName = $_POST['tableName'];
      $res = $this -> getTable($tableName);
    }
    
    if ($action == 'insertCellsInTable') {
      $tableName = $_POST['tableName'];
      $cells = $_POST['cells'];
      $res = $this -> insertCellsInTable($tableName, $cells);
    }
    
    if ($action == 'rewriteTable') {
      $tableName = $_POST['tableName'];
      $cells = $_POST['cells'];
      $res = $this -> rewriteTable($tableName, $cells);
    }
    
    print_r(json_encode($res));
  }


  public function sendRequest ($query) {
    $item = $this -> dbConn -> prepare($query);
    $item -> execute();
    $res = $item -> fetchAll();

    return $res;
  }
}


$inst = new dbInterface();
?>