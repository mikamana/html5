$(function(){

    $(`#num2`).bind('input', function(){

        var val = parseInt($(`#num2`).val())

        $(`#num2`).siblings('span').html(val)

    })

    

})