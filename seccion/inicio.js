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
$(document).ready(function(){


});