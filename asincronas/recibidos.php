     
<?php
include '../conexion.php';

session_start();
//echo $_POST['nombres'];
/*//PUT THIS HEADER ON TOP OF EACH UNIQUE PAGE
if(!isset($_SESSION['username'])){
  header("location:main_login.php");
}*/
// sacando el id del semestre 
 $string_sql_semestre = " select id_sem from semestre where est_sem = '1' " ;
 $data_semestre =  pg_query($connect ,$string_sql_semestre );
 $id_semestre = pg_fetch_result($data_semestre, 0);
// comentar esto             
 
// actualizando los campos de persona
// die($_POST['nombres']. " " . $_POST['apellido_paterno'] . " " . $_POST['apellido_materno'] . " " . $_POST['email']);
  $string_sql_update = "UPDATE docente
   SET nombres='". strtoupper($_POST['nombres']) ."',
       apemat_doc='". strtoupper($_POST['apellido_materno'])."',
       apepat_doc='".strtoupper($_POST['apellido_paterno']) ."',
       correo='". $_POST['email'] ."',
       telefono='". $_POST['telefono']."',
       tipo='". trim($_POST['tipo_docente'])."',
       direccion='".strtoupper($_POST['direccion']) ."',
       departamento='". strtoupper($_POST['departamento']) ."',
      provincia='". strtoupper( $_POST['provincia']) ."',
       distrito='".strtoupper( $_POST['distrito']) ."',
       fecha_nac='". $_POST['fecha_anio_nac'].'-'.$_POST['fecha_mes_nac'].'-'.$_POST['fecha_dia_nac'] ."'
   WHERE id_doc='". $_SESSION["clave"] ."'";
  $string_sql_update_check = pg_query($connect, $string_sql_update);
  if(!$string_sql_update_check){
   die($string_sql_update. "esta mal");
    
  }

// registro del docente primero 
 
// registro de formacion academica
//header("location:index.php?dato=" . $_SESSION['clave']);   

?>

