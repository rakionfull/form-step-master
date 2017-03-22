<?php
  session_start();
//PUT THIS HEADER ON TOP OF EACH UNIQUE PAGE
  if(!isset($_SESSION['username'])){
    header("location:main_login.php");
  }
  include 'conexion.php'; 
            $string_sql = " select * from semestre where est_sem = '1' " ;
            $data_semestre =  pg_query($connect ,$string_sql );
           if($row =  pg_fetch_array($data_semestre)){
            $id_semestre = $row['id_sem'];
            $desc_sem = $row['desc_sem'];
            $ano_sem = $row['ano_sem'];
            } 
           $es_docente_sql = "select * from docente where id_doc=".$_SESSION["clave"];
            $es_docente_row =  pg_query($connect ,$es_docente_sql );
            if($row =  pg_fetch_array($es_docente_row)){
                $doc_id = $row['id_doc'];
                $doc_tel = $row['telefono']; 
                $doc_dir = $row['direccion'];
                $doc_correo = $row['correo'];  
                $doc_dep = $row['departamento'];
                $doc_pro = $row['provincia'];  
                $doc_dis = $row['distrito'] ;  
                if($doc_tel == ""){
                   $es_docente=false;
                }
                else{
                  $es_docente= $row['id_doc'];
                }
                }         
            
           $string_crono = "select * from cronograma where id_sem=".$id_semestre  ;
          $data_crono = pg_query($connect , $string_crono);
          if($row_crono = pg_fetch_array($data_crono)){
          $fecha_inicio_crono = $row_crono['fini_cro'];
          $fecha_final_crono = $row_crono['ffin_cro'];
          } 
   
            
   ?>
        

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>.: Sistema Academico :.</title>
    <link rel="stylesheet" href="css/css.css" media="screen" title="no title" charset="utf-8">
   
    <script src="js/jquery.min.js" charset="utf-8"></script>
    <script src="js/js.js" charset="utf-8"></script>
    <script src="js/main.js" charset="utf-8"></script>
    
</head>
<body>
   <?php include("./bloques/header.php") ?>
  <div class="maestro_full">
    <div class="maestro_max ">
      <div  class="espacios">
        <h3><center> Ciclo Academico:  <?php  echo $ano_sem. " - " .$desc_sem  ?> </center>  </h3>
        <h3> Bienvenido Profesor(a): <?php  echo $_SESSION['nombres']. " " .$_SESSION['apemat_doc']  . " " .$_SESSION['apepat_doc'] ?>   </h3>
        <h3> Seleccione opción :  </h3>
        <ul class="menu_list">
          <li> 
 
            <?php if($es_docente){?>
              <div  data-icon="ei-check" class="check_true" data-size="m"></div><p class="p_off check_true"> Llenar todos los datos ! <span class="span_normal">  formulario completado </span> </p>  
            <?php }else{ ?>
               <div  data-icon="ei-plus" class="check_false" data-size="m"></div><a href="formulario.php" class="check_false">  Llenar todos los datos ! </a> 
            <?php } ?>
          </li>
          
          
          <li>
          <?php  if( date('Y-m-d') >= $fecha_inicio_crono  && date('Y-m-d') <= $fecha_final_crono){ ?>
                <?php if(!$es_docente){?>
                  <div  data-icon="ei-minus" class="check_mid" data-size="m"></div> <p class="p_off check_mid">Seleccionar Horario !</p>
                <?php }else{ ?>
                   <div  data-icon="ei-plus" class="check_false" data-size="m"></div> <a href="tablero.php" class="check_false" > Seleccionar Horario ! </a> 
                <?php } ?>
          <?php   }else {?>
               <div  data-icon="ei-check" class="check_true" data-size="m"></div><p class="p_off">Seleccionar Horario ! <span class="span_normal"> formulario no disponible </span> </p>
          <?php } ?>
           
            
          </li>
          
          <li>
             <?php if(!$es_docente)  {  ?>
               <div  data-icon="ei-minus" class="check_mid" data-size="m"></div> <p class="check_mid" >Consultar su Horario !</p> 
             <?php }else{ ?>
                <div  data-icon="ei-plus" class="check_false" data-size="m"></div> <a class="check_false" href="#">Consultar su Horario ! </a> 
             <?php } ?>
          </li>
          
         
          
        </ul>
        <div>
          <p class="lados_footer lados_footer_1"> Centro Pre Universitario Juan Francisco Aguinaga Castro  - Semestre <?php  echo $ano_sem. " - " .$desc_sem  ?> 
          
          </p><div class="lados_footer lados_footer_2">

           <div  data-icon="ei-unlock" data-size="m"></div> <a href="logout.php" > cerrar sesión </a> 
            
          </div>
        </div>
      </div>
    </div>
  </div>
     <?php include("./bloques/footer.php") ?>
</body>
</html>