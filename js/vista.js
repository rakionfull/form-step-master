 var cerrar = document.getElementById('cerrar');
 var mensaje = document.getElementById('mensaje_error');
 var aux =  document.getElementById('enviar_vp');
$(document).ready(function() {
if(aux == 1){
    console.log(aux);

}
     $("#mantotalvp td:nth-child(n+2)").click(function(){
                    var estado = this.style.background === "blue" ? 0 : 1;
                      $.ajax({
                        url: "http://localhost:8090/form-step-master/asincronas/vistaprevia.php",// ruta absoluta
                        data:{
                             id_au : $("#aula").val(),
                             estado : estado,
                             
                             },
                        error : function (){
                            console.log("error");
                        },
                        datatype: "json",
                           success: function (data){
                            console.log(data);
                        },// fin del susess
            type: "GET"
        });  // fin de la funcion
                        /*if( data.toString().trim() == "SOBREPASO"){

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
             });*/
        });

})