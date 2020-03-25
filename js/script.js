$(function(){
  $('#close').click(function(){
    if(window.confirm('portfolio.py に加えた変更を保存しますか?')){
      var nvua = navigator.userAgent;
      if(nvua.indexOf('MSIE') >= 0){
        if(nvua.indexOf('MSIE 5.0') == -1) {
          top.opener = '';
        }
      }else if(nvua.indexOf('Gecko') >= 0){
        top.name = 'CLOSE_WINDOW';
        wid = window.open('','CLOSE_WINDOW');
      }
      top.close();
    }
  });

  // scroll programming
  var $code = $('code#code');
  var $lineNum = $('#line-num');
  var $colNum = $('#col-num');
  var commentLineNum = $('code#comment').text().match(/\n/g).length + 2;
  var codeText = hljs.highlightAuto($code.text()).value;
  var cursor = '<span id="cursor">';
  $code.html(cursor);
  $(window).scroll(function () {
    $scroll = $(this).scrollTop();
    if ($scroll < 26000) {
      $code.html(codeText.substring(0, Math.round($scroll/6)) + cursor);
      var currentCode = $code.text();
      var lines = currentCode.match(/\n/g);
      $lineNum.text(commentLineNum + (lines ? lines.length : 0));
      var colText = currentCode.match(/(?:^|\n)(.*?)$/)[1];
      $colNum.text(colText ? colText.length : 0);
    }
  });
});
