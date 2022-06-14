$(() => {
    const code = $('code#code'),
        commentLineNum = $('code#comment').text().match(/\n/g).length + 2,
        cursor = '<span id="cursor">',
        lineNum = $('#line-num'),
        colNum = $('#col-num'),
        p = $('p'),
        codeText = hljs.highlightAuto(code.text()).value;

    code.html(cursor);
    $(window).scroll(() => {
        $scroll = $(this).scrollTop();

        if ($scroll < 11000) {
            let renderCode = codeText.substring(0, Math.round($scroll / 6)) + cursor;
            // 一文字ずつ描画する際に"<"だけ表示されるのを防ぐ対応
            code.html(renderCode.replace(/<<span/, '<span'));

            const currentCode = code.text(),
                // 改行で行数を取得
                lines = currentCode.match(/\n/g),
                // 現在の文字を取得
                colText = currentCode.match(/(?:^|\n)(.*?)$/)[1];

            lineNum.text(commentLineNum + (lines ? lines.length : 0));
            colNum.text(colText ? colText.length : 0);
        }
    });
    
    $('#close').click(() => {
        if (window.confirm('ウインドウを閉じますか\n保存していない場合、変更は失われます。')) {
            window.top.close();
        }
    });

    $('#debug').click(() => {
        // デバッグアイコン押されたら色を変える
        const statusBar = document.getElementById('status_bar'),
            statusBarColor = $("#status_bar").css("background-color");
        if (statusBarColor == "rgb(0, 122, 204)") {
            statusBar.style.backgroundColor = "#cc6633";
        } else {
            statusBar.style.backgroundColor = "#007acc";
        }
    });
});
