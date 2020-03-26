$(function(){
  const code = $('code#code'),
        commentLineNum = $('code#comment').text().match(/\n/g).length + 2,
        cursor = '<span id="cursor">',
        lineNum = $('#line-num'),
        colNum = $('#col-num'),
        codeText = hljs.highlightAuto(code.text()).value;
  
  code.html(cursor);
  $(window).scroll(function () {
    $scroll = $(this).scrollTop();

    if ($scroll < 10000) {
      code.html(codeText.substring(0, Math.round($scroll/6)) + cursor);

      const currentCode = code.text(),
            // 改行で行数を取得
            lines = currentCode.match(/\n/g),
            colText = currentCode.match(/(?:^|\n)(.*?)$/)[1];

      lineNum.text(commentLineNum + (lines ? lines.length : 0));
      colNum.text(colText ? colText.length : 0);
    }
  });
});
