window.addEventListener('load', function() {

    var serverlist = new Array();

    serverlist[0] = ["Choose game"];
    serverlist[1] = ["[Санкт-Петербургский] Public [Dust2] ", "Europa Gaming | Urime 102 Vjetori Shqipni", "OLD SCHOOL CS "];
    serverlist[2] = [" Noobs Only! Learn to Play | Fast Respawn | Rank Cap | [SkL] ", " [WBKS] Gaming#01 - Metro - NoRules {3000T/NoobMagnet/AllWeapo"];
    serverlist[3] = ["play.montycraft.com","play.heroicmc.com","play.velocity-mc.com","OP.PrisonMine.Com"];
    serverlist[4] = ["CRACKED SERVER by K7 ", "|MM|Playground! ", "EURO RIFLES S&D "];



    document.getElementById('menu').addEventListener('change', function(e) {

        var e = document.getElementById("games");
        var strUser = e.options[e.selectedIndex].value;
        var serverContent = document.getElementById('servers-content');
        serverContent.innerHTML = "";
        for (var i = 0; i < serverlist[strUser].length; i++) {
            serverContent.innerHTML += serverlist[strUser][i] + "</br>";
        };

    });

});
