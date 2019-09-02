

console.log("Hola mundo");
$(document).ready(function () {
    console.log("Pagina cargada y lista...");
});

$('#botAlerta').on("click", function () {
    $("h1")

        .text("Hola desde typescript");

    // Swal.fire(
    //     'Good job!',
    //     'You clicked the button!',
    //     'success'
    // )
});



