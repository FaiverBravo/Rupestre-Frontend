function dominio() {
    var url = "http://localhost:3000/api";
    return url;
}
function ajaxFunction(uri, method, async, data) {
    return jQuery.ajax({
        async: async,
        type: method,
        url: uri,
        dataType: 'json',
        contentType: 'application/json',
        data: data ? JSON.stringify(data) : null
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log('Error : ' + errorThrown);
        console.log('Error : ' + jqXHR.key);
        console.log('Error : ' + textStatus);
        //  $(".alert-mensaje").html("").fadeOut()
    });
}

let UrlDom = dominio();
let userUri = UrlDom + 'api/user';
let anfitrionUri = UrlDom + 'api/anfitrion';

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
                usuario:  $("#email").val(),
                password : $("#pass").val(),
                nombres : $("#nombre").val(),
              };
              ajaxFunction(userUri, 'POST', true, userObject).done(function (datajson) {
                var array = JSON.parse(JSON.stringify(datacia.data));
                if (datajson.code == 100) {

                }
             });
           }
        });
});