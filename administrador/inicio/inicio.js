let UrlDom = dominio();
let apiUri = UrlDom + '/users';
// let anfitrionUri = UrlDom + '/anfitrion';

$(document).ready(function () {
  sessionStorage.clear();
  function crearSesion(key, dato) {
    sessionStorage.setItem(key, dato);
  }

  $("#form_submit_login").submit(function () {
    var usuario = $("#email").val();
    var password = $("#pass").val();
    if (usuario == "") {
      $("#email").focus();
      val_msg(101, "Ingrese el correo ¡verifique por favor!..");
      return false
    } else if (password == "") {
      $("#pass").focus();
      val_msg(101, "Ingrese el password ¡verifique por favor!..");
      return false
    } else {
      var userObject = {
        email: $("#email").val(),
        password: $("#pass").val(),
      };
      //console.log(userObject)
      ajaxFunction(apiUri+"/login", 'POST', true, userObject).done(function (json) {
        if (json.success == 100) {
          var array = JSON.parse(JSON.stringify(json));
          // console.log(array)
          crearSesion("id", json.id);
          crearSesion("loginUsuario", json.loginUsuario);
          crearSesion("UsuarioName", json.loginUsuarioName);
          crearSesion("UsuarioAvatar", json.loginUsuarioAvatar);
          crearSesion("token", json.token);
          setTimeout(function () {
            location.href = "./panel";
          }, 100);
        } else {
          console.log(json)
        }
      });
      return false
    }
  });


  $("#form_submit_register").submit(function(){
        var usuario = $("#email").val();
        var confirm_usuario = $("#confirm_email").val();
        var password = $("#password").val();
        var nombres = $("#nombre").val();
        if (nombres == "") {
            $("#nombre").focus();
          val_msg(101, "Ingrese su nombre completo ¡verifique por favor!..");
            return false
          }else if (usuario == "") {
          $("#email").focus();
          val_msg(101, "Ingrese el Correo electrónico ¡verifique por favor!..");
          return false
        } else if (confirm_usuario == "") {
          $("#confirm_email").focus();
          val_msg(101, "Ingrese la confirmacón del Correo electrónico ¡verifique por favor!..");
          return false
        }else if (password == "") {
          $("#password").focus();
          val_msg(101, "Ingrese el password ¡verifique por favor!..");
            return false
        } else if (usuario != confirm_usuario) {
          $("#confirm_email").focus();
          val_msg(102, "las Los correos electrónico no coinciden ¡verifique por favor!..");
          return false
        } else {
          var userObject = {
            idperfil: 2,
            estado:1,
            email: $("#email").val(),
            password: $("#password").val(),
            nombres : $("#nombre").val(),
          };
          ajaxFunction(apiUri +"/user", 'POST', true, userObject).done(function (json) {
            ///  var array = JSON.parse(JSON.stringify(json));
            if (json.success == 100) {
              crearSesion("id", json.id);
              crearSesion("loginUsuario", json.loginUsuario);
              crearSesion("UsuarioName", json.loginUsuarioName);
              crearSesion("UsuarioAvatar", json.loginUsuarioAvatar);
              crearSesion("token", json.token);
               var anfitrionObject = {
                  loginUsuarioID: json.id,
                  anfitrionEmail: $("#email").val(),
                  anfitrionNombres: $("#nombre").val(),
              };
              ajaxFunction(apiUri + "/anfitrion", 'POST', true, anfitrionObject).done(function (datajson) {
                   // var array = JSON.parse(JSON.stringify(datajson));
                    if (datajson.success == 100) {
                      setTimeout(function () {
                        location.href = "./panel";
                      }, 100);
                    }
                  });
            } else {
              console.log(json)
            }
            });
          return false
           }
      });
});

function val_msg(sw, msg) {
  if (sw == 101) {
    toastr.info(msg, 'INFORMACION', {
      "positionClass": "toast-top-right",
      timeOut: 5000,
      "closeButton": true,
      "debug": false,
      "newestOnTop": true,
      "progressBar": true,
      "preventDuplicates": true,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut",
      "tapToDismiss": false

    })
  }
  if (sw == 102) {
    toastr.error(msg, 'ERROR', {
      "positionClass": "toast-top-right",
      timeOut: 5000,
      "closeButton": true,
      "debug": false,
      "newestOnTop": true,
      "progressBar": true,
      "preventDuplicates": true,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut",
      "tapToDismiss": false

    })
  }
  if (sw == 103) {
    toastr.warning(msg, 'ADVERTENCIA', {
      "positionClass": "toast-top-right",
      timeOut: 5000,
      "closeButton": true,
      "debug": false,
      "newestOnTop": true,
      "progressBar": true,
      "preventDuplicates": true,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut",
      "tapToDismiss": false
    })
  }
}