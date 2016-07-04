function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("demo").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("POST", "http://pbil.univ-lyon1.fr/cgi-bin/Rweb/Rweb.cgi", true);
  xhttp.send();
}


$(document).on('change', '.btn-file :file', function() {
  var input = $(this),
      numFiles = input.get(0).files ? input.get(0).files.length : 1,
      label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
  input.trigger('fileselect', [numFiles, label]);
});

$(document).ready( function() {
    $('.btn-file :file').on('fileselect', function(event, numFiles, label) {
        
        var input = $(this).parents('.input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;
        
        if( input.length ) {
            input.val(log);
        } else {
            if( log ) alert(log);
        }
        
    });
});




jQuery("#txtbtn").on('click', function() {
    var caretPos = document.getElementById("inputTextToSave").selectionStart;
    var textAreaTxt = jQuery("#inputTextToSave").val();
    var txtToAdd = "library(ggplot2) \n histogram <- ggplot(data=iris, aes(x=Sepal.Width)) \n histogram + geom_histogram(binwidth=0.2, color='black', aes(fill=Species)) +   xlab('Sepal Width') +  ylab('Frequency') + ggtitle('Histogram of Sepal Width') ";
    jQuery("#inputTextToSave").val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
});

jQuery("#libtxt").on('click', function() {
    var caretPos = document.getElementById("inputTextToSave").selectionStart;
    var textAreaTxt = jQuery("#inputTextToSave").val();
    var txtToAdd = "library()";
    jQuery("#inputTextToSave").val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
});


