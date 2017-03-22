
<?php

include 'conexion.php';
session_start();

function quitar($mensaje)
{
 $nopermitidos = array("'",'\\','<','>',"\"");
 $mensaje = str_replace($nopermitidos, "", $mensaje);
 return $mensaje;
}


//verificar si los datos estan en los fields 
if( trim($_POST["dni"]) && 
    strlen(trim($_POST["password"]))>0     
  ){
    $result = pg_query('SELECT clave, dni_doc,id_doc,nombres,apemat_doc,apepat_doc,horas,id_cur FROM docente WHERE dni_doc=\''. trim($_POST["dni"]) .'\'');
    if($row =  pg_fetch_array($result)){
         if(trim($row ['dni_doc']) == trim($row ['clave'])){
            header("location:changepass.php?dni=" . $row['dni_doc']);                 
            }else{
            if( $row['clave'] === md5($_POST["password"]) ){
                $_SESSION["username"] = $row['dni_doc'];
                $_SESSION["clave"] = $row['id_doc'];
                $_SESSION["nombres"] = $row['nombres'];
                $_SESSION["apemat_doc"] = $row['apemat_doc'];
                $_SESSION["apepat_doc"] = $row['apepat_doc'];
                $_SESSION["horas_doc"] = $row['horas'];
                $_SESSION["dni"] = $row['dni_doc'];
                $_SESSION["curso"] = $row['id_cur'];
                header("location:index.php?dato=" . $row["id_doc"]);   
                
            }else{
               header("location:main_login.php?check=3&&dni=".$_POST["dni"]);  
            }
        }
    }else {
       header("location:main_login.php?check=2&&dni=".$_POST["dni"]); 
        
    }
}else{
    header("location:main_login.php?check=1&&dni=".$_POST["dni"]); 
}


// esto si tiene el dni y el password iguales 


// esto si esta el passchange
if(isset($_POST["password_r"])){
    if(trim($_POST["password"]) == trim($_POST["password_r"]) && $_POST["password_r"] ) {
        $result_update = pg_query('UPDATE docente SET clave=\''. md5($_POST["password_r"]). '\' WHERE dni_doc=\''. $_POST["dni"] .'\'  RETURNING *')  or die(pg_last_error());;
        if($row =  pg_fetch_array($result_update)){
            $_SESSION["username"] = $row['usuario'];
            $_SESSION["clave"] = $row['id_doc'];
            $_SESSION["nombres"] = $row['nombres'];
             $_SESSION["horas_doc"] = $row['horas'];
                $_SESSION["apemat_doc"] = $row['apemat_doc'];
                $_SESSION["apepat_doc"] = $row['apepat_doc'];
                $_SESSION["dni"] = $row['dni_doc'];
            header("location:index.php?dni=" . $row['dni_doc']);                     
        } 
    }
    
}



pg_close();
?>