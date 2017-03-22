var turno = document.getElementById('turno');
var aula = document.getElementById('aula');
var man = document.getElementById("mantotal");
var tar = document.getElementById("tartotal");

   turno.onchange = function(e){// aki se ejecuta una funcion con el vento de cambio de oopcion
                    // console.log(e.target.value);
                    $.ajax({
                        url: "http://localhost:8090/form-step-master/asincronas/turno.php",// ruta absoluta
                        data:{
                            format:"json",
                            vturno: e.target.value
                               },
                        error : function (){
                            console.log("error");// dentro de funcion es punto y coma / y en objeto e suna coma   
                        },
                        datatype: "json",
                        success: function (data){
                            //  console.log(JSON.parse(data));// un array es un objeto jscrip
                             var valor = JSON.parse(data);
                             var aula = document.getElementById("aula");
                             var cargar = "<option> SELECCIONAR </opcion>";
                             
                             valor.map(function(e){
                                 cargar += `<option value=${e.id_au} >AULA ${e.num_au}</opcion>`;                             
                             });
                             aula.innerHTML = cargar;
                        },
                        
                        type: "GET"
                    });
                    if(e.target.value == 1){
                        man.style.display = "block";
                        tar.style.display = "none";
                    }else{
                        man.style.display = "none";
                        tar.style.display = "block";
                    }
                }

            aula.onchange = function(a){
                    //console.log(turno.value);
                    if(turno.value == "1")
                    {
                             $.ajax({
                        url: "http://localhost:8090/form-step-master/asincronas/aula.php",// ruta absoluta
                        data:{
                            format:"json",
                            vaula: a.target.value,
                           
                               },
                        error : function (){
                            console.log("error");
                        },
                        datatype: "json",
                        success: function (data){
                            //console.log(data);
                            $("#mantotal td:nth-child(n+2)").css("background","white");
                            var valor = JSON.parse(data);        
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
                             
                                valor.map(function(q){
                                        if( horas.slice(horas.indexOf(q.horaini),horas.indexOf(q.horafin)).includes(horas[init_hora])
                                          && dias[cont] == q.dia && q.estado == "0"){
                                             if(horas[init_hora] == "10:50"){

                                             } 
                                             else{nodo.style.background = q.color;}
                                            
                                       //console.log(horas.slice(init_hora, init_hora + 2));
                                        
                                     }
                                      if( horas.slice(horas.indexOf(q.horaini),horas.indexOf(q.horafin)).includes(horas[init_hora])
                                          && dias[cont] == q.dia && q.estado != "0"){
                                            if(horas[init_hora] == "10:50"){

                                             } 
                                             else{nodo.style.background = "blue";}
                                            
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
                                
                                valor.map(function(q){
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

                        },
                        type: "GET"
                    });
                    }
                  else{
                        $.ajax({
                        url: "http://localhost:8090/form-step-master/asincronas/aula.php",// ruta absoluta
                        data:{
                            format:"json",
                            vaula: a.target.value,
                          
                               },
                        error : function (){
                            console.log("error");
                        },
                        datatype: "json",
                        success: function (data){
                            //console.log(data);
                            $("#tartotal td:nth-child(n+2)").css("background","white");
                            var valor = JSON.parse(data);        
                            var dias = ["LU","MA","MI","JU","VI"];
                            var horas =  ["02:00","02:50","03:40","04:30","05:20","05:40","06:30","07:20"];
                             var finse = "SA";
                            var horasfinse = ["07:30","08:20","09:10","10:00","10:30","11:20","12:10","01:00"];
                            var cont = 0;
                            var conts=0;
                            var init_hora = 0;
                            var init_horas=0;
                            $("#tabla_tarde td:nth-child(n+2)").map(function(e){
                                
                                var nodo = this;
                                if(cont%5 == 0 && cont != 0) {
                                        cont = 0;
                                        init_hora++;
                                }
                             
                                valor.map(function(q){
                                        if( horas.slice(horas.indexOf(q.horaini),horas.indexOf(q.horafin)).includes(horas[init_hora])
                                          && dias[cont] == q.dia && q.estado == "0"){
                                             if(horas[init_hora] == "05:20"){

                                             } 
                                             else{nodo.style.background = q.color;}
                                            
                                        //console.log(horas.slice(init_hora, init_hora + 2));
                                        
                                     }
                                      if( horas.slice(horas.indexOf(q.horaini),horas.indexOf(q.horafin)).includes(horas[init_hora])
                                          && dias[cont] == q.dia && q.estado != "0"){
                                            if(horas[init_hora] == "05:20"){

                                             } 
                                             else{nodo.style.background = "blue";}
                                            
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
                                
                                valor.map(function(q){
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
                        },
                        type: "GET"
                    });
                  }
            }