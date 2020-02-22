$(document).ready(function () {

    // scrollTop

    var link = $(".container li a");

    link.on("click", function () {

        var selector = $(this).attr("href");
        var lugar = $(selector).offset().top;
        $('html, body').animate({ scrollTop: lugar - 57 }, 1000);
    });


    $('[data-toggle="tooltip"]').tooltip();



    // formulario

    $('#exampleModal').on('show.bs.modal', function (event) {
        var contacto = $(event.relatedTarget) // Button that triggered the modal
        var recipient = contacto.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('New message to ' + recipient)
        modal.find('.modal-body input').val(recipient)
    });




    // formulario ****  TRATANDO DE VALIDARLO PERO NO PUDE, DECICIR DARNOS UN TIEMPO PARA QUE LA RELACION MEJORE *** JAJAJAJA

    // var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\-[a-zA-Z0-9\-\.]+$/;

    // $("#botoncontacto").click(function (event) {
    //     $("formcontacto input").val('');
    //     $("formcontacto textarea").val('');
    // });

    // $("#botonenviar").click(function () {
    //     var nombre = $(nombre).val();
    //     var correo = $(correo).val();
    //     var telefono = $(telefono).val();
    //     var mensaje = $(mensaje).val();
    //     if (nombre == "") {
    //         alert("el campor no debe estar vacio")
    //         $("#mensaje1").faldeIn();
    //     } else {
    //         $("#mensaje1")
    //     }

    // });

});

