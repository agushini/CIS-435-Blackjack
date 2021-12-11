<?
$inputuser = $_POST['user'];
$inputpass = $_POST['pass'];
$user = "root";
$password = "";
$database = logindb;

$connect = mysql_connect("localhost",$inputuser,$inputpass)
@mysql_select_db($database) or ("Database Not Found");
$query = "SELECT * FROM 'users' WHERE user=$inputuser";
$querypass = "SELECT * FROM 'users' WHERE user=$inputpass";

$result = mysql_query($query);
$resultpass = mysql_query($querypass);

$row = mysql_fetch_array($result);
$rowpass = mysql_fetch_array($resultpass);

$serveruser = $row["user"];
$serverpass = $rowpass["password"];

if ($serveruser && $serverpass){
    if (!$result){
        die("username or password is invalid");
    }
    echo "<br><center>Database output</br></center><br><br>";
    mysql_close;

if ($inputpass == $serverpass){
    header("Location: game.html");
else
    //header("Location: empty.html");
}
}
mysql_close();

?>