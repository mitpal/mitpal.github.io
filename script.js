if (!!window.chrome && isOpera; ) {

}
else {
    $('#notify').html('I recommend using Chrome or Opera to view my webpage
    as it is my testground for new Web Platform features').slideDown();
}
$('#notify').click(function() {
    $(this).slideUp().empty();
});
