window.addEventListener('load', function() {

    var serverlist = new Array();

    serverlist[0] = "Choose game";
    serverlist[1] = ["masse Isaac text", "hei1", "hei2"];
    serverlist[2] = ["serves", "hfjdislnf"];
    serverlist[3] = ["Fuckall"];
    serverlist[4] = ["FuckLars.jpeg"];



    document.getElementById('menu').addEventListener('change', function(e) {

        var e = document.getElementById("games");
        var strUser = e.options[e.selectedIndex].value;
        var serverContent = document.getElementById('servers');
        serverContent.innerHTML = "";
        for (var i = 0; i < serverlist[strUser].length; i++) {
            serverContent.innerHTML += serverlist[strUser][i] + "</br>";
        };

    });

});
