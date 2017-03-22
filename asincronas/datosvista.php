<?php session_start();
include '../conexion.php';
$string_sql ="CA.horaini,CA.horafin,CA.dia,G.desc_gr,CA.estado,C.color,A.num_au from cargaacademicaaula as CA inner join Docente as D on D.id_cur = CA.id_cur inner join cursos as C on C.id_cur=CA.id_cur inner join cargahoraria as CH on CH.id_au=CA.id_au inner join Grupos as G on G.id_gr=CA.id_gru  inner join Aula as A on A.id_au=CA.id_au where CA.id_au=".$_GET["vaula"]. "and CA.id_cur=".$_SESSION["curso"]."ORDER BY CA.id_caa ASC" ;
$data_semestre =  pg_query($connect ,$string_sql );
$array = [];
while ($row= pg_fetch_assoc($data_semestre)) 
{ 
    array_push($array,$row);

    //echo json_encode($row) ;                  
}
echo json_encode($array);

pg_close();