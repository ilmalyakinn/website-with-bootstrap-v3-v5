// even saat link di klik
$('.page-scroll').on('click', function(e){
    
    // ambil tulisan href
    var tujuan = $(this).attr('href');
    // tangkap elemen bersangkutan
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top -50    
    }, 1250, 'easeInOutExpo');

    e.preventDefault();

});