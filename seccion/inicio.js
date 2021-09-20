function dominio() {
    var url = "http://localhost:3000/api";
    return url;
}
function ajaxFunction(uri, method, async, data) {
    return jQuery.ajax({
        async: async,
        type: method,
        url: uri,
        headers: {
          'Content-Type': 'application/json'
        },
        data: data ? JSON.stringify(data) : null
    }).fail(function (jqXHR, textStatus, errorThrown) {
      console.log('errorThrown : ' + errorThrown);
      console.log('jqXHR : ' + jqXHR.key);
      console.log('textStatus : ' + textStatus);
        //  $(".alert-mensaje").html("").fadeOut()
    });
}

let UrlDom = dominio();
let userUri = UrlDom + '/users/user';
let anfitrionUri = UrlDom + '/anfitrion';

$(document).ready(function(){
    $("#form_submit_button").click(function(){
        var usuario = $("#email").val();
        var password = $("#pass").val();
        var confirm_password = $("#confirm_password").val();
        var nombres = $("#nombre").val();
        if (nombres == "") {
            $("#nombre").focus();
            alert("Ingrese su nombre comple ¡verifique por favor!..");
            //val_msg(101, "Ingrese el nombre del Negocio o empresa ¡verifique por favor!..");
            return false
          }else if (usuario == "") {
          $("#email").focus();
          alert("Ingrese el correo ¡verifique por favor!..");
          //val_msg(101, "Ingrese el nombre del Negocio o empresa ¡verifique por favor!..");
          return false
        }else if (password == "") {
            $("#pass").focus();
            alert("Ingrese el password ¡verifique por favor!..");
            //val_msg(101, "Ingrese el nombre del Negocio o empresa ¡verifique por favor!..");
            return false
          }else if (confirm_password == "") {
            $("#confirm_password").focus();
            alert("Ingrese el password confirma ¡verifique por favor!..");
            //val_msg(101, "Ingrese el nombre del Negocio o empresa ¡verifique por favor!..");
            return false
          } else if (password != confirm_password) {
          $("#confirm_password").focus();
          alert("las contraseñas no coinciden ¡verifique por favor!...");
         // val_msg(101, "las contraseñas no coinciden ¡verifique por favor!..");
          return false
        } else {
          var userObject = {
            idperfil: 2,
            estado:1,
            email:  $("#email").val(),
            password : $("#pass").val(),
            nombres : $("#nombre").val(),
          };
          console.log(userObject)
            ajaxFunction(userUri, 'POST', true, userObject).done(function (json) {
              var array = JSON.parse(JSON.stringify(json.data));
              if (json.success == 100) {
                console.log(array)
                /* var userObject = {
                  loginusuario_loginUsuarioID: array[0].id,
                  anfitrionEmail: $("#email").val(),
                  anfitrionNombres: $("#nombre").val(),
                };
                  ajaxFunction(anfitrionUri, 'POST', true, userObject).done(function (datajson) {
                    var array = JSON.parse(JSON.stringify(datacia.data));
                    if (datajson.code == 100) {
                      console.log(array)
                    }
                  }) */;
                }
             });
           }
      });
});