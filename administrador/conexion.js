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