<?php session_start();
include '../conexion.php';
$string_sql ="select CA.horaini,CA.horafin,CA.dia,CA.id_gru,CA.estado,C.color from cargaacademicaaula as CA inner join Docente as D on D.id_cur = CA.id_cur inner join cursos as C on C.id_cur=CA.id_cur where CA.id_au=".$_GET["vaula"]. "and CA.id_cur=".$_SESSION["curso"]."ORDER BY CA.id_caa ASC" ;
$data_semestre =  pg_query($connect ,$string_sql );
$array = [];
while ($row= pg_fetch_assoc($data_semestre)) 
{ 
    array_push($array,$row);

   // echo json_encode($row) ;                  
}
echo json_encode($array);

pg_close();