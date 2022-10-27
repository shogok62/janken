$("#goo_btn").on("click",function(){
    const r = Math.ceil( Math.random() *3);
    let view = "";
    let cpu = "";
    console.log(r, "ランダムな数字");

    if ( r == 1 ){
        view = '<img src="img/goo.jpg" width="100" height="100" alt="goo>';
    } else if ( r == 2 ) {
        view = '<img src="img/choki.jpg" width="100" height="100" alt="choki">';
    } else if ( r == 3 ){
        view = '<img src="img/pa.jpg" width="100" height="100" alt="pa">';
    }

    $("#pc_hands").html(view)

    if ( r == 1 ){
       cpu = "あいこ"
    } else if ( r == 2 ) {
        cpu = "勝ち"
    } else if ( r == 3 ) {
        cpu = "負け"
    }

    $("#judgment").html(cpu)

})

$("#cho_btn").on("click",function(){
    const r = Math.ceil( Math.random() *3);
    let view = "";
    let cpu = "";

    if ( r == 1 ){
        view = '<img src="img/goo.jpg" width="100" height="100" alt="goo">';
    } else if ( r == 2 ) {
        view = '<img src="img/choki.jpg" width="100" height="100" alt="choki">';
    } else if ( r == 3 ){
        view = '<img src="img/pa.jpg" width="100" height="100" alt="pa">';
    }

    $("#pc_hands").html(view)

    if ( r == 1 ){
       cpu = "負け"
    } else if ( r == 2 ) {
        cpu = "あいこ"
    } else if ( r == 3 ) {
        cpu = "勝ち"
    }

    $("#judgment").html(cpu)

})

$("#par_btn").on("click",function(){
    const r = Math.ceil( Math.random() *3);
    let view = "";
    let cpu = "";

    if ( r == 1 ){
        view = '<img src="img/goo.jpg" width="100" height="100" alt="goo">';
    } else if ( r == 2 ) {
        view = '<img src="img/choki.jpg" width="100" height="100" alt="choki">';
    } else if ( r == 3 ){
        view = '<img src="img/pa.jpg" width="100" height="100" alt="pa">';
    }

    $("#pc_hands").html(view)

    if ( r == 1 ){
       cpu = "勝ち"
    } else if ( r == 2 ) {
        cpu = "負け"
    } else if ( r == 3 ) {
        cpu = "あいこ"
    }

    $("#judgment").html(cpu)

})