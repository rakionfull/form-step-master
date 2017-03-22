<?php session_start();
include '../conexion.php';
$estado = 0;

if($_GET["estado"] != "0"){
    $estado = $_SESSION["clave"];
}
$string_sql2 ="select SUM(CA.horas) from cargaacademicaaula as CA inner join aula as A on CA.id_au=A.id_au inner join Docente as D on D.id_cur=CA.id_cur where CA.estado=".$_SESSION["clave"] ;
$data_semestre2 =  pg_query($connect ,$string_sql2 );
$horas_vali= pg_fetch_assoc($data_semestre2);

if($horas_vali["sum"] >= $_GET["horas"] && $estado != "0")
{
       echo "SOBREPASO";

}
else{
        $string_sql ="update cargaacademicaaula set estado=".$estado." where id_cur=".$_SESSION["curso"]." AND  id_au=".$_GET["id_au"];
        $data_semestre =  pg_query($connect ,$string_sql );
//falta el delete from para cargahoraria
        $string_inserta ="insert into cargahoraria (id_au,id_doc) values ('".$_GET["id_au"]."','".$_SESSION["clave"]."')";
        $data_insertada =  pg_query($connect ,$string_inserta );


        $string_sql1 ="select CA.horaini,CA.horafin,CA.dia,CA.id_gru,CA.estado,C.color from cargaacademicaaula as CA inner join Docente as D on D.id_cur = CA.id_cur inner join cursos as C on C.id_cur=CA.id_cur where CA.id_au=".$_GET["id_au"]. "and CA.id_cur=".$_SESSION["curso"] ;
        $data_semestre1 =  pg_query($connect ,$string_sql1 );
        $array = [];
        while ($row= pg_fetch_assoc($data_semestre1)) 
        { 
            array_push($array,$row);

        // echo json_encode($row) ;                  
        }
        echo json_encode($array);
    
}




pg_close();