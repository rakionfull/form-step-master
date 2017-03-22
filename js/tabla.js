    var cerrar = document.getElementById('cerrar');
    var mensaje = document.getElementById('mensaje_error');
   $(document).ready(function() {
       var hora_oculto =  document.getElementById("hora_oculto");
      // console.log(hora_oculto.value);
        $("#mantotal td:nth-child(n+2)").click(function(){
                    var estado = this.style.background === "blue" ? 0 : 1;
                      $.ajax({
                        url: "http://localhost:8090/form-step-master/asincronas/asignadoM.php",// ruta absoluta
                        data:{
                             id_au : $("#aula").val(),
                             estado : estado,
                             horas: hora_oculto.value,
                             
                              },
                        error : function (){
                            console.log("error");
                        },
                        datatype: "json",
                           success: function (data){
                            console.log(data);
                        if( data.toString().trim() == "SOBREPASO"){

                           mensaje.style.display="block";
                        }  
                        else{
                            var v1 = JSON.parse(data);        
                            var dias = ["LU","MA","MI","JU","VI"];
                            var horas = ["07:30","08:20","09:10","10:00","10:50","11:10","12:00","12:50"];
                            var finse = "SA";
                            var horasfinse = ["07:30","08:20","09:10","10:00","10:30","11:20","12:10","01:00"];
                            var cont = 0;
                            var init_hora = 0;
                            var conts = 0;
                            var init_horas = 0;
                            $("#tabla_maniana td:nth-child(n+2)").map(function(e){
                                var nodo = this;
                                if(cont%5 == 0 && cont != 0) {
                                        cont = 0;
                                        init_hora++;
                                }
                             
                                v1.map(function(q){
                                        if( horas.slice(horas.indexOf(q.horaini),horas.indexOf(q.horafin)).includes(horas[init_hora])
                                          && dias[cont] == q.dia){
                                             if(horas[init_hora] == "10:50"){

                                             } 
                                             else{
                                                  if( q.estado != "0"){
                                                    nodo.style.background = "blue";
                                                  }
                                                  else{
                                                    nodo.style.background = q.color;
                                                  }
                                             }
                                                 
                                            
                                       // console.log(horas.slice(init_hora, init_hora + 2));
                                     }
                                                                      
                                });
                                cont++;                            
                            });   
                               
                            $("#tabla_sabadoM td:nth-child(n+2)").map(function(e){
                                var nodos = this;
                                if( conts != 0) {
                                   //     conts = 0;
                                        init_horas++;
                                }
                                
                                v1.map(function(q){
                                    //console.log(finse);
                                    console.log(horasfinse[init_horas]);
                                   // console.log( horasfinse.slice(horasfinse.indexOf(q.horaini),horasfinse.indexOf(q.horafin)));
                                  if( horasfinse.slice(horasfinse.indexOf(q.horaini),horasfinse.indexOf(q.horafin)).includes(horasfinse[init_horas])
                                          && finse == q.dia && q.estado == "0"){
                                             if(horasfinse[init_horas] == "10:00"){
                                                        //console.log(horasfinse[init_horas]);
                                             } 
                                             else{

                                                 nodos.style.background = q.color;
                                            }
                                            
                                       //console.log(horas.slice(init_hora, init_hora + 2));
                                        
                                     }
                                      if( horasfinse.slice(horasfinse.indexOf(q.horaini),horasfinse.indexOf(q.horafin)).includes(horasfinse[init_horas])
                                          && finse == q.dia && q.estado != "0"){
                                            if(horasfinse[init_horas] == "10:00"){

                                             } 
                                             else{nodos.style.background = "blue";}
                                            
                                      //  console.log(horas.slice(init_hora, init_hora + 2));   
                                    }                        
                                });
                                conts++;                            
                            });
                            
                        }  //fin else
                           
                     },//fin succed
                        type: "GET"
             });
        });
        $("#tartotal td:nth-child(n+2)").click(function(){
                    var estado = this.style.background === "blue" ? 0 : 1;
                    
                      $.ajax({
                        url: "http://localhost:8090/form-step-master/asincronas/asignadoM.php",// ruta absoluta
                        data:{
                             id_au : $("#aula").val(),
                             estado : estado,
                             horas: hora_oculto.value
                              },
                        error : function (){
                            console.log("error");
                        },
                        datatype: "json",
                           success: function (data){
                            console.log(data);
                        if( data.toString().trim() == "SOBREPASO"){

                               mensaje.style.display="block";
                        }  
                        else{
                         var v1 = JSON.parse(data);        
                            var dias = ["LU","MA","MI","JU","VI"];
                            var horas = ["02:00","02:50","03:40","04:30","05:20","05:40","06:30","07:20"];
                          var finse = "SA";
                            var horasfinse = ["07:30","08:20","09:10","10:00","10:30","11:20","12:10","01:00"];
                            var cont = 0;
                            var init_hora = 0;
                            var conts = 0;
                            var init_horas = 0;
                            //text cont en el nodo
                            $("#tabla_tarde td:nth-child(n+2)").map(function(e){
                                
                                var nodo = this;
                                if(cont%5 == 0 && cont != 0) {
                                        cont = 0;
                                        init_hora++;
                                }
                             
                                v1.map(function(q){
                                        if( horas.slice(horas.indexOf(q.horaini),horas.indexOf(q.horafin)).includes(horas[init_hora])
                                          && dias[cont] == q.dia){
                                             if(horas[init_hora] == "05:20"){

                                             } 
                                             else{
                                                  if( q.estado != "0"){
                                                    nodo.style.background = "blue";
                                                  }
                                                  else{
                                                    nodo.style.background = q.color;
                                                  }
                                             }
                                                 
                                            
                                        //console.log(horas.slice(init_hora, init_hora + 2));
                                     }
                                                                      
                                });
                                cont++;                            
                            }); 
                             $("#tabla_sabadoT td:nth-child(n+2)").map(function(e){
                                var nodos = this;
                                if( conts != 0) {
                                   //     conts = 0;
                                        init_horas++;
                                }
                                
                                v1.map(function(q){
                                    //console.log(finse);
                                    console.log(horasfinse[init_horas]);
                                   // console.log( horasfinse.slice(horasfinse.indexOf(q.horaini),horasfinse.indexOf(q.horafin)));
                                  if( horasfinse.slice(horasfinse.indexOf(q.horaini),horasfinse.indexOf(q.horafin)).includes(horasfinse[init_horas])
                                          && finse == q.dia && q.estado == "0"){
                                             if(horasfinse[init_horas] == "10:00"){
                                                        //console.log(horasfinse[init_horas]);
                                             } 
                                             else{

                                                 nodos.style.background = q.color;
                                            }
                                            
                                       //console.log(horas.slice(init_hora, init_hora + 2));
                                        
                                     }
                                      if( horasfinse.slice(horasfinse.indexOf(q.horaini),horasfinse.indexOf(q.horafin)).includes(horasfinse[init_horas])
                                          && finse == q.dia && q.estado != "0"){
                                            if(horasfinse[init_horas] == "10:00"){

                                             } 
                                             else{nodos.style.background = "blue";}
                                            
                                      //  console.log(horas.slice(init_hora, init_hora + 2));   
                                    }                        
                                });
                                conts++;                            
                            });
                    }// fin else
                           
                },// fin suces
                        type: "GET"
                    });// fin ajax
        });
        
        cerrar.onclick = function(e){
            e.preventDefault();
            mensaje.style.display = "none";
        }
   });
/*$(document).ready(function() {
   var dias = ["LU","MA","MI","JU","VI"];
   var horas = ["7:30","8:20","9:10","10:00","10:50","11:10","12:00","12:50"];
   var cont = 0;
   var init_hora = 0;
   $("#tabla_maniana td:nth-child(n+2)").map(function(e){
       console.log(this)
        if(cont%5 == 0 && cont != 0) {
            cont = 0;
            init_hora++;
        }
       console.log(dias[cont]);
       console.log(horas[init_hora]);
       cont++;
       
//        console.log(e);
   });
   $("#tabla_maniana td:nth-child(n+2)").click(function(){

    var column_num = parseInt( $(this).index() ) -1;
    var row_num = parseInt( $(this).parent().index() );
    alert(dias[parseInt( column_num)]);
    alert( horas[parseInt( row_num)]);
   });

});
*/
/* $(document).ready(function() {
   var dias = ["lunes","martes","miercoles","jueves","viernes","sabado"];
   var horas = ["7:30","8:20","9:10","10:00","10:50","11:10","12:00","12:50"];
   
   $(".tabla_1 td:nth-child(n+2)").click(function(){
       var column_num = parseInt( $(this).index() ) + 1;
       var row_num = parseInt( $(this).parent().index() )+1;
       
     //  $(this).not(  $( ".col-off td" ) ).toggleClass("td-on");
     //  $("tr td:nth-child(" +  column_num + ")").not(  $( ".col-off td" ) )  .toggleClass("td-on");
 //   
    alert(parseInt( $(this).index() ));
    alert( parseInt( $(this).parent().index() ));
       switch (horas[ row_num -1 ]){
           
           case "7:30":
                 var elemento_bandera = $(this).parent().next().next().next().next().next().find("td:nth-child(" +  column_num + ")"); 
                 $(this).toggleClass("td-on");
                // $("tr td:nth-child(" +  column_num + ")").not(  $( ".col-off td" ) )  .toggleClass("td-on");
               if(!elemento_bandera.hasClass("td-on")){
                    $(this).parent().next().next().find("td:nth-child(" +  column_num + ")").toggleClass("td-on");
                 elemento_bandera.parent().parent().prev().find("tr").find("th:nth-child(" +  column_num + ")").find("button").text("llenar");
                    
               }else{
                 //  $(this).text("limpiar");
                 elemento_bandera.parent().parent().prev().find("tr").find("th:nth-child(" +  column_num + ")").find("button").text("limpiar");
               }
                break;
           case "9:10":
            var elemento_inicio = $(this).parent().prev().prev().find("td:nth-child(" +  column_num + ")");
            if(elemento_inicio.hasClass("td-on")){
                    elemento_inicio.removeClass("td-on");
                    elemento_inicio.parent().parent().prev().find("tr").find("th:nth-child(" +  column_num + ")").find("button").text("llenar");
                    $(this).parent().next().next().next().find("td:nth-child(" +  column_num + ")").addClass("td-on");
            }else{
            var elemento_bandera = $(this).parent().next().next().next().next().next().next().find("td:nth-child(" +  column_num + ")");
                $(this).toggleClass("td-on");
                if(!elemento_bandera.hasClass("td-on")){
                    $(this).parent().next().next().next().find("td:nth-child(" +  column_num + ")").toggleClass("td-on");
                    elemento_inicio.parent().parent().prev().find("tr").find("th:nth-child(" +  column_num + ")").find("button").text("llenar");
                    
               }else{
                   
               }
                
            }
                break;
           case "11:10":
            var elemento_bandera = $(this).parent().prev().prev().prev().prev().prev().find("td:nth-child(" +  column_num + ")");
               $(this).toggleClass("td-on");
               if(!elemento_bandera.hasClass("td-on")){
                $(this).parent().prev().prev().prev().find("td:nth-child(" +  column_num + ")").toggleClass("td-on");
                   elemento_bandera.parent().parent().prev().find("tr").find("th:nth-child(" +  column_num + ")").find("button").text("llenar");
                   
               }else{
                   elemento_bandera.parent().parent().prev().find("tr").find("th:nth-child(" +  column_num + ")").find("button").text("limpiar");
               }
                break;
           
       }
      // $(this).parent().toggleClass("td-on");
      //  alert( dias[column_num - 2] +"-" + horas[ row_num -1 ] );   
   });
   
   $(".tabla_1 button").click(function(){
         var column_num = parseInt( $(this).parent().index() ) + 1;
         //$(this).parent().parent().find("th").css("background","red");
        // alert( $(this).text() == "marcar" );
         if($(this).text() == "llenar"){
            $(this).parent().parent().parent().parent().find("td:nth-child(" +  column_num + ")").not(  $( ".col-off td" ) ).addClass("td-on");
            $(this).text("limpiar");
            
         }else{
            $(this).parent().parent().parent().parent().find("td:nth-child(" +  column_num + ")").not(  $( ".col-off td" ) ).removeClass("td-on");
            $(this).text("llenar");
             
         }
          
       //alert(column_num); 
   });
   
   //turno mañana 
   var lunes_m = "";
   var martes_m = "";
   var miercoles_m = "";
   var jueves_m = "";
   var viernes_m = "";
   var sabado_m = "";
   
   // turno tarde 
   var lunes_t = "";
   var martes_t = "";
   var miercoles_t = "";
   var jueves_t = "";
   var viernes_t = "";

   var array_col_m = [];
   /// llegan de base 
   var numero_docente = 1;
//   var numero_semestre = 1;
   function Disponibilidad(dia , id_docente , id_semestre, horas,  turno ){
       this.dia = dia;
       this.id_docente = id_docente;
       this.id_semestre = id_semestre;
       this.horas = horas;
       this.turno = turno;
   }
   $("#enviar_disponibilidad").click(function(event){

      event.preventDefault();
      
      
      // bucle mañana 
      $(".tabla_manania .row-use").each(function(value){
          $(this).find("td[rowspan=2]").each(function(values){
                  switch(value){
                     case 0 :
                        if($(this).hasClass("td-on")){
                            ( values === 0 )? lunes_m = "7:30 - 10:50":0;
                            ( values === 1 )? martes_m = "7:30 - 10:50":0;
                            ( values === 2 )? miercoles_m = "7:30 - 10:50":0;
                            ( values === 3 )? jueves_m = "7:30 - 10:50":0;
                            ( values === 4 )? viernes_m = "7:30 - 10:50":0;
                            ( values === 5 )? sabado_m = "7:30 - 10:50":0;
                        } 
                         
                     break;
                     
                     case 2 : 
                        if($(this).hasClass("td-on")){
                            
                            if( values === 0 && lunes_m.length > 0){ lunes_m = "7:30 - 12:50" } 
                            else if(values === 0){ lunes_m = "10:50 - 12:50 " }  

                            if( values === 1 && martes_m.length > 0){ martes_m = "7:30 - 12:50" }   
                            else if(values === 1){ martes_m = "10:50 - 12:50 " }  

                            if( values === 2 && miercoles_m.length > 0){ miercoles_m = "7:30 - 12:50" }   
                            else if(values === 2){ miercoles_m = "10:50 - 12:50 " }  

                            if( values === 3 && jueves_m.length > 0){ jueves_m = "7:30 - 12:50" }   
                            else if(values === 3){ jueves_m = "10:50 - 12:50 " }  

                            if( values === 4 && viernes_m.length > 0){viernes_m = "7:30 - 12:50" }   
                            else if(values === 4){ viernes_m = "10:50 - 12:50 " }  

                            if( values === 5 && sabado_m.length > 0){ sabado_m = "7:30 - 12:50" }   
                            else if(values === 5){ sabado_m = "10:50 - 12:50 " }  
                            
                        }
                        
                     break;
                     
                  
                     
                 } // fin de switch 

          });
      });
      
      // bucle tarde 
        $(".tabla_tarde .row-use").each(function(value){
          $(this).find("td[rowspan=2]").each(function(values){
                  switch(value){
                     case 0 :
                        if($(this).hasClass("td-on")){
                            ( values === 0 )? lunes_t = "7:30 - 10:50":0;
                            ( values === 1 )? martes_t = "7:30 - 10:50":0;
                            ( values === 2 )? miercoles_t = "7:30 - 10:50":0;
                            ( values === 3 )? jueves_t = "7:30 - 10:50":0;
                            ( values === 4 )? viernes_t = "7:30 - 10:50":0;
                        } 
                         
                     break;
                     
                     case 2 : 
                        if($(this).hasClass("td-on")){
                            
                            if( values === 0 && lunes_t.length > 0){ lunes_t = "7:30 - 12:50" } 
                            else if(values === 0){ lunes_t = "10:50 - 12:50 " }  

                            if( values === 1 && martes_t.length > 0){ martes_t = "7:30 - 12:50" }   
                            else if(values === 1){ martes_t = "10:50 - 12:50 " }  

                            if( values === 2 && miercoles_t.length > 0){ miercoles_t = "7:30 - 12:50" }   
                            else if(values === 2){ miercoles_t = "10:50 - 12:50 " }  

                            if( values === 3 && jueves_t.length > 0){ jueves_t = "7:30 - 12:50" }   
                            else if(values === 3){ jueves_t = "10:50 - 12:50 " }  

                            if( values === 4 && viernes_t.length > 0){viernes_t = "7:30 - 12:50" }   
                            else if(values === 4){ viernes_t = "10:50 - 12:50 " }  
                            
                        }
                        
                     break;
                     
                  
                     
                 } // fin de switch 

          });
      });
      
        (lunes_m.length) ? array_col_m.push(new Disponibilidad("lunes",numero_docente,numero_semestre,lunes_m,"M")): 0; 
        (martes_m.length) ? array_col_m.push(new Disponibilidad("martes",numero_docente,numero_semestre,martes_m,"M")): 0;
        (miercoles_m.length) ? array_col_m.push(new Disponibilidad("miercoles",numero_docente,numero_semestre,miercoles_m,"M")):0;
        (jueves_m.length)?array_col_m.push(new Disponibilidad("jueves",numero_docente,numero_semestre,jueves_m,"M")):0;
        (viernes_m.length)?array_col_m.push(new Disponibilidad("viernes",numero_docente,numero_semestre,viernes_m,"M")):0;
        (sabado_m.length)?array_col_m.push(new Disponibilidad("sabado",numero_docente,numero_semestre,sabado_m,"M")):0;
        
        (lunes_t.length) ? array_col_m.push(new Disponibilidad("lunes",numero_docente,numero_semestre,lunes_t,"T")): 0; 
        (martes_t.length) ? array_col_m.push(new Disponibilidad("martes",numero_docente,numero_semestre,martes_t,"T")): 0;
        (miercoles_t.length) ? array_col_m.push(new Disponibilidad("miercoles",numero_docente,numero_semestre,miercoles_t,"T")):0;
        (jueves_t.length)?array_col_m.push(new Disponibilidad("jueves",numero_docente,numero_semestre,jueves_t,"T")):0;
        (viernes_t.length)?array_col_m.push(new Disponibilidad("viernes",numero_docente,numero_semestre,viernes_t,"T")):0;
      var myJSONText = JSON.stringify(array_col_m);
      if(array_col_m.length == 0){
          alert("seleccione disponibilidad");
      }
      else{
      var prompo = confirm(" Mensaje de confirmación! ")
        if(prompo){
                $.ajax({
                    type: "POST",
                    url: "disponibilidad.php",
                    dataType: "json",
                    
                    data: {
                        'myJSONText': myJSONText
                    },
                    success: function(response){
                        $(".espacios").html("<h1>Registro de disponibilidad con exito</h1><h5>Semestre II</h5>");
                    },
                    error : function(){
                        $(".espacios").html("<h1>Registro de disponibilidad con exito</h1><h5>Semestre II</h5>");
                    }

                });
            
            }
      }
     

         
   });
   
 });*/
