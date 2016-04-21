$(document).ready(function(){
    $('#search-by').keyup(function(){
        if( $('#search-by').val() != '' ){
            $('#resultContainer').show();
        } else {
            $('#resultContainer').hide();
        }
    });
});
