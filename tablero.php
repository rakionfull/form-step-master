<?php
  session_start();
//PUT THIS HEADER ON TOP OF EACH UNIQUE PAGE
  if(!isset($_SESSION['username'])){
    header("location:main_login.php");
  }
  
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/css.css" media="screen" title="no title" charset="utf-8">
    <!-- <link href="https://fonts.googleapis.com/css?family=Lato:300,400|Oswald" rel="stylesheet"> -->
    
    <script src="js/jquery.min.js" charset="utf-8"></script>

   <style>
       td,th{
           padding: 15px;
       }
       h4{
           padding: 0;
           margin: 0;
       }
       .col-off{
           background:#F2F3F4 !important;          
       }
       .line-click td:nth-child(n+2){
           cursor: pointer;
       }
       td.td-on{
           background:#55D036;
       }
       .tabla_1 button{
            margin-top: 10px;
            border-radius: 5px;
            border: 1px solid #777777;
            cursor: pointer;
       }
       
   </style>
  </head>

  <body>
         <?php include("./bloques/header.php") ?>
    <div class="maestro_full">
      <div class="maestro_max ">
        <div  class="espacios">
            <ul class="breadcump">
                <li> <a href="index.php">incio</a> </li>
                 <li>tablero </li>
            </ul>
            <?php
             include 'conexion.php'; 
            $string_sql = " select * from semestre where est_sem = '1' " ;
            $data_semestre =  pg_query($connect ,$string_sql );
           if($row =  pg_fetch_array($data_semestre)){
            $id_semestre = $row['id_sem'];
            $desc_sem = $row['desc_sem'];
            $ano_sem = $row['ano_sem'];
            } 
            $hora = $_SESSION["horas_doc"];
            ?>
            <h1><center> Horarios Ciclo Academico :  <?php  echo $ano_sem. " - " .$desc_sem  ?> </center>  </h1>
                       <ol>
                    <li class="letra_normal"> Seleccione celdas en las cuales corresponda su Horario </li>
                <li class="letra_normal"> Usted tiene: <?php  echo  $hora ?> horas academicas paara seleccionar</li>
            </ol>
            
        <label for="Turno">Turno</label>
                <div class="col-30">
                
            
                <select class="" name="cboturno" id="turno"   >
                
                  <option value="option">Seleccionar</option>
                    <?php include 'conexion.php'; 
                        $string_sql = "select  ID_TURNO,DESC_TUR FROM TURNO";
                        $data_semestre =  pg_query($connect ,$string_sql );
                        
                        while ($row= pg_fetch_assoc($data_semestre)) 
                        { 
                                     if($row['id_turno']!=3 ){
                                     echo "<option value=".$row['id_turno'].">".$row['desc_tur'] ."</option>"; 
                                                                                          
                                      } 
                                    
                        } 
                            
                         pg_close();                                               
                ?> 
                </select >
                                   
           <label for="aula">Aula</label>
                <div class="col-30">
                <select class="" name="cboaula" id="aula">
                  <option value="option"></option>
                                                                
                </select>
                </div> 
         <div id="mantotal" >        
          <div id='man' class="display_tabla_maniana">
            <legend class="top-50" >HORARIO - TURNO MAÑANA</legend>
            <table class="tabla_1 tabla_manania" id="tabla_maniana">
             <thead>
                <tr>
                    <th> Día / Hora</th>
                    <th>Lunes 
                        <br>
                        
                    </th>
                    <th>Martes<br>
                       
                    <th>Miercoles<br>
                        
                    <th>Jueves<br>
                        
                    <th>Viernes<br>
                       
                   
                <tr>
             </thead>
             <tbody>    
                    <tr class="line-click row-use">
                        <td> 07:30 - 08:20</td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        
                    </tr>
                    <tr class="line-click">
                        <td> 08:20 - 09:10</td> 
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                                              
                    </tr>
                    <tr class="line-click row-use">
                        <td > 09:10 - 10:00</td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        
                    </tr>
                    <tr class="line-click">
                        <td> 10:00 - 10:50</td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
        
                    </tr>
                    <tr class="col-off" >
                        <td> 10:50 - 11:10</td>
                        <td> <h4> R </h4> </td>
                        <td> <h4> E </h4> </td>
                        <td> <h4> C </h4></td>
                        <td> <h4> E </h4> </td>
                        <td> <h4> SO </h4> </td>
                        
                    </tr>
                    <tr class="line-click row-use">
                        <td> 11:10 - 12:00</td>
                        
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                    </tr>
                    <tr class="line-click">
                        <td> 12:00 - 12:50</td>
                        
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                    </tr>
                </tbody>
            </table>
      </div>   
        <div id="sab" class="display_tabla_sabadoM">
            <legend>Sabado</legend>
            <table class="tabla_1 tabla_sabado" id="tabla_sabadoM" >
                <thead>
                 <tr>
                    <th> Día / Hora</th>
                    <th>Sabado
                        <br></th>
                        
                 </tr>
                </thead>
                <tbody>
                    <tr class="line-click row-use">
                        <td> 07:30 - 08:20</td>
                        <td ></td>
                        
                    </tr>
                    <tr class="line-click">
                        <td> 08:20 - 09:10</td>   
                        <td ></td>
                                            
                    </tr>
                    <tr class="line-click row-use">
                        <td> 09:10 - 10:00</td>
                        <td ></td>
                        
                    </tr>
                   
                    <tr class="col-off" >
                        <td> 10:00 - 10:30</td>
                        <td> <h4> RECESO </h4> </td>
                       
                    </tr>
                    <tr class="line-click row-use">
                        <td> 10:30 - 11:20</td>
                        <td ></td>
                        
                    </tr>
                    <tr class="line-click">
                        <td> 11:20 - 12:10</td>
                        <td ></td>
                        
                    </tr>
                    <tr class="line-click">
                        <td> 12:10 - 01:00</td>
                        <td ></td>
                        
                    </tr>
                </tbody>
            </table>
            </div>
</div> <!--acaba el div de M y S      -->   
   <div id="tartotal" > 
    <div id="tar" class="display_tabla_tarde">
            <legend>HORARIO - TURNO TARDE</legend>
            <table class="tabla_1 tabla_tarde" id="tabla_tarde">
                <thead>
                 <tr>
                    <th> Día / Hora</th>
                    <th>Lunes 
                        
                    </th>
                    <th>Martes<br>
                       </th>
                    <th>Miercoles<br>
                        </th>
                    <th>Jueves<br>
                        </th>
                    <th>Viernes<br>
                        </th>
                    
                 </tr>
                </thead>
                <tbody>
                    <tr class="line-click row-use">
                        <td> 02:00 - 02:50</td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                    </tr>
                    <tr class="line-click">
                        <td> 02:50 - 03:40</td>   
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>                    
                    </tr>
                    <tr class="line-click row-use">
                        <td> 03:40 - 04:30</td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                    </tr>
                    <tr class="line-click">
                        <td> 04:30 - 05:20</td>
                         <td ></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                    </tr>
                    <tr class="col-off" >
                        <td> 05:20 - 05:40</td>
                        <td> <h4> R </h4> </td>
                        <td> <h4> E </h4> </td>
                        <td> <h4> C </h4></td>
                        <td> <h4> E </h4> </td>
                        <td> <h4> SO </h4> </td>
                    </tr>
                    <tr class="line-click row-use">
                        <td> 05:40 - 06:30</td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                    </tr>
                    <tr class="line-click">
                        <td> 06:30 - 07:20</td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                    </tr>
                </tbody>
            </table>
            </div>
           <div id="sab" class="display_tabla_sabadoT">
            <legend>Sabado</legend>
            <table class="tabla_1 tabla_sabado" id="tabla_sabadoT"  >
                <thead>
                 <tr>
                    <th> Día / Hora</th>
                    <th>Sabado
                        <br></th>
                        
                 </tr>
                </thead>
                <tbody>
                    <tr class="line-click row-use">
                        <td> 07:30 - 08:20</td>
                        <td ></td>
                        
                    </tr>
                    <tr class="line-click">
                        <td> 08:20 - 09:10</td>   
                        <td ></td>
                                            
                    </tr>
                    <tr class="line-click row-use">
                        <td> 09:10 - 10:00</td>
                        <td ></td>
                        
                    </tr>
                   
                    <tr class="col-off" >
                        <td> 10:00 - 10:30</td>
                        <td> <h4> RECESO </h4> </td>
                       
                    </tr>
                    <tr class="line-click row-use">
                        <td> 10:30 - 11:20</td>
                        <td ></td>
                        
                    </tr>
                    <tr class="line-click">
                        <td> 11:20 - 12:10</td>
                        <td ></td>
                        
                    </tr>
                    <tr class="line-click">
                        <td> 12:10 - 01:00</td>
                        <td ></td>
                        
                    </tr>
                </tbody>
            </table>
            </div>
     </div><!--acaba el div de T Y S--> 
             <p class="center">
                <!--<input id="enviar_datos"   href="vistaprevia.php" type="submit" class="post-form"   value="Vist Previa" /><a href="vistaprevia.php" </a>
                -->
             <!--<div  data-icon="ei-plus" class="check_false" data-size="m"></div> <a href="vistaprevia.php" class="check_false" > Vista Previa </a> 
              -->
              <!-- <input id="enviar_datos"    type="submit" class="post-form" value="Vista Previa" /> -->
            <!-- <input id="enviar_datos" type="submit" onclick="vistaprevia.php" value="Vista Previa"  />-->
            
            
            <input id="enviar_vprevia" type="submit" value= "Vista Previa" onclick = "location='vistapreviageneral.php'"/>
             </p>
         </div>
       </div>
     </div>
     
     <input type="hidden"  id="hora_oculto" value=<?php echo $hora ;?> />
      <div class="fondo_oscuro" id="mensaje_error">
        <div class="mensaje">
            <div class="mensaje_check check_error">
                <span>&#10005;</span>
            </div>
            <div class="mensaje_text text_error" >
                <span> Usted ah sobrepaso sus <?php echo $hora;?> disponibles </span>
                <a id="cerrar"> Ok </a>
            </div>
        </div>
     
     </div>
     <?php include("./bloques/footer.php") ?>
    <script src="js/tabla.js" charset="utf-8"></script>
    <script src="js/asignacion.js" ></script>
</body>
</html>