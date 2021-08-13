chrome.storage.local.get('isDisabled', function (result) {
    let gtenabled = !result.isDisabled;
    init(gtenabled)
});

function init(gtenabled) {

    if (gtenabled) {

        var heading = document.getElementsByClassName("site-title")
        var text = document.createTextNode(" 🔍GUESS THE ELO!")
        heading[0].appendChild(text)

        // names seen on left column, above chat box
        var whitePlayer = $("div.player.color-icon.is.white");
        var blackPlayer = $("div.player.color-icon.is.black");
        hideRankandName(whitePlayer, "white");
        hideRankandName(blackPlayer, "black");

        // names seen on right column, with clock and game move history
        var white_user = $("div.username.white.on-game");
        var black_user = $("div.username.black.on-game");
        hideRankandName(white_user, "white");
        hideRankandName(black_user, "black");

        function hideRankandName(element, colour) {
            if (colour == "black") {
                element.text("Black");
            } else if (colour == "white") {
                element.text("White");
            }

        }

    }

}