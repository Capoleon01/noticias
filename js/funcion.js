$('#linksResp').click(function(){
    $('#contenedor_respuesta').show();
});

$('#BTNCancelarAnwser').click(function(){
    $('#contenedor_respuesta').hide();
});

$('#linksRespuestasMostrar').click(function(){
    $('#linksRespuestasMostrar').hide();
    $('#linksRespuestasOcultar').show();
    $('#contenedor_respuesta_contestadas').show();
});

$('#linksRespuestasOcultar').click(function(){
    $('#linksRespuestasMostrar').show();
    $('#linksRespuestasOcultar').hide();
    $('#contenedor_respuesta_contestadas').hide();
});

