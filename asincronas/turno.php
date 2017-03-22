<?php  session_start();
//PUT THIS HEADER ON TOP OF EACH UNIQUE PAGE
  /*if(!isset($_SESSION['username'])){
    header("location:main_login.php");
  }*/
  
include '../conexion.php';  // ruta relativa    /*
$string_sql ="select A.desc_au,A.num_au,A.id_au from aula as A where A.id_tur=".$_GET["vturno"]  ;
$data_semestre =  pg_query($connect ,$string_sql );
$array = [];
while ($row= pg_fetch_assoc($data_semestre)) 
{ 
    array_push($array,$row);

   // echo json_encode($row) ;                  
}
echo json_encode($array);
pg_close();
