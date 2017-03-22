  <?php 
      include 'conexion.php'; 
    session_start();
  //PUT THIS HEADER ON TOP OF EACH UNIQUE PAGE
    if(!isset($_SESSION['username'])){
      header("location:main_login.php");
    }
      $es_persona_sql = "select d.nombres,d.apepat_doc,d.apemat_doc,d.id_cur,d.dni_doc ,o.dni_pu as tipo_docente 
from docente as d 
left join 
unprg as o 
on d.dni_doc=o.dni_pu where 
d.id_doc=".$_SESSION["clave"];

      $es_persona_row =  pg_query($connect ,$es_persona_sql );
      if($row =  pg_fetch_array($es_persona_row)){
        $nombres = $row['nombres'];
        $apepat_doc = $row['apepat_doc'];
        $apemat_doc = $row['apemat_doc'];
        $id_asignatura = $row['id_cur'];
        $dni = $row['dni_doc'];
         $tipo = $row['tipo_docente'];
         if($tipo == $dni)
          $Condi="UNPRG";
        else{
          $Condi="INVITADO";
        }
{

} 
       }               
       
      pg_close();
   ?>
 
<html>
<!DOCTYPE html>
  <head>
    <meta charset="utf-8">
    <title> .: Registro :.</title>
    <link rel="stylesheet" href="css/css.css" media="screen" title="no title" charset="utf-8">
    <script src="js/jquery.min.js" charset="utf-8"></script>
    <script src="js/js.js" charset="utf-8"></script>
    <script src="js/val.js" charset="utf-8"></script>
    <script src="js/main.js" charset="utf-8"></script>
  </head>

  <body>
      <?php include("./bloques/header.php") ?>
    <div class="maestro_full">
      <div class="maestro_max ">
        <div  class="espacios espacio_forzado">
          <ul class="breadcump">
                <li> <a href="index.php">incio</a> </li>
                / <li> Formulario </li>
            </ul>
          <form id="SignupForm" METHOD="POST" >
          <!--  <input type="hidden" value="<?php //echo $tipo_docente ?>" name="tipo_docente"> -->
           <input type="hidden" value="<?php echo $Condi ?>" name="tipo_docente">

            <fieldset>
              <legend> Datos personales </legend>
              <div class="col-mitad">
                <label for="nombres">Nombres</label>
                <input id="nombres" name="nombres" type="text" value="<?php echo $nombres?>" />

                <label for="apellido_materno">Apellido Paterno</label>
                <input id="apellido_paterno" name="apellido_paterno" type="text" value="<?php echo $apemat_doc ?>" />
                 <label for="apellido_materno">Apellido Materno</label>
                <input id="apellido_materno" name="apellido_materno" type="text" value="<?php echo $apepat_doc ?>" />

                <label for="email">Email</label>
                <input id="email" name="email" type="email"   >
                      <label for="asignatura">Asignatura</label>
                <select class="" name="" id="asignatura" value="<?php echo $id_asignatura ?>" disabled >
                    <?php include 'conexion.php'; 
                        $string_sql = "select desc_cur, id_cur from cursos";
                        $data_semestre =  pg_query($connect ,$string_sql );
                        while ($row= pg_fetch_assoc($data_semestre)) 
                        { 
                          //<?php if("val1" == $_POST['mybox']){ echo "selected"; } 
                           $selected ='';
                          if($row['id_cur']==$id_asignatura){
                            $selected = "selected";
                          }
                      echo "<option value=".$row['id_cur']." ". $selected .">".$row['desc_cur']."</option>"; 
                      } 
                       pg_close();
            ?>
                  
                </select>

                <label for="telefono">Telefono</label>
                <input id="telefono" name="telefono" type="text"/>

              </div><div class="col-mitad">
               <label for="tipo_docente">Condicion</label>
                <input id="tipo_docente"  type="text" value="<?php echo $Condi ?>" disabled />

               <label for="dni">Dni</label>
                <input id="dni" name="dni" type="text" value="<?php echo $dni ?>" disabled />

                <label for="direccion">Dirección</label>
                <input id="direccion" name="direccion" type="text"/>

                              <div class="col-50">
                  <label for="departamento">Departamento</label>
                  <select class="" name="departamento" id="departamento">
                    <option value="option">Seleccione</option>
                  </select>
                  <!-- <input id="departamento" name="departamento" type="text"/> -->

                </div><div class="col-50">
                  <label for="provincia">Provincia</label>
                  <select class="" name="provincia"  id="provincia">
                    <option value="option">Seleccione</option>

                  </select>
                  <!-- <input id="provincia" name="provincia" type="text"/> -->

                </div>

                <label for="distrito">Distrito</label>
                <select class="" name="distrito" id="distrito">
                  <option value="option">Seleccione</option>

                </select>
                <!-- <input id="distrito" name="distrito" type="text"/> -->
                <!-- <input id="distrito" name="distrito" type="text"/> -->

                <label for="distrito">Fecha De Nacimiento </label>
                <div class="col-30">
                  <select class="fecha_dia" name="fecha_dia_nac" id="fecha_dia">
                    <option value="option">Día</option>

                  </select><select class="fecha_mes" name="fecha_mes_nac" id="fecha_mes">
                    <option value="option">Mes</option>

                  </select><select class="fecha_anio" name="fecha_anio_nac" id="fecha_anio">
                    <option value="option">Año </option>
                  </select>

                </div>


              </div>
              <p class="center">
                <input id="enviar_datos" type="submit" class="post-form" value="ACEPTAR" />
              </p>
              </div>
                
              </div>

        </fieldset>
        </form>  
     <div class="fondo_oscuro" id="mensaje_confirmar">
        <div class="mensaje">
            <div class="mensaje_check">
                <span>&#10003;</span>
            </div>
            <div class="mensaje_text" >
                <span>Se ha registrado con éxito</span>
                <a href="index.php"> Ok </a>
            </div>
        </div>
     
     </div>
      
      <?php include("./bloques/footer.php") ?>
      <script src="js/envio_datos.js" charset="utf-8"></script>
  </body>
</html>
