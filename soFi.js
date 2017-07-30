$(document).ready(function(){
  $('td').each(function() {
    var text = '';
    if($(this).css('color') == $(this).css('background-color')) {
    } else {
      text += $(this).text();
    }
    $('.results').append(text);
    return text;
  })
})
