        var datos = document.getElementById('SignupForm');
        var mensaje = document.getElementById('mensaje_confirmar');
        datos.onsubmit = function(e){// aki se ejecuta una funcion con el vento de cambio de oopcion
                    // console.log(e.target.value);
                   e.preventDefault();
                    $.ajax({
                        url: "http://localhost:8090/form-step-master/asincronas/recibidos.php",// ruta absoluta
                        data: $(e.target).serialize(),
                        error : function (){
                            console.log("error");// dentro de funcion es punto y coma / y en objeto e suna coma   
                        },
                        datatype: "json",
                        success: function (data){
                            //  console.log(JSON.parse(data));// un array es un objeto jscrip
                                console.log(data);
                            mensaje.style.display="block";
                            
                        },
                        type: "POST"
                    });
                    
        }
