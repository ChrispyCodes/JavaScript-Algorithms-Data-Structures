function titleCase(str) {
   var pieces = str.split(" ");
    for (var i = 0; i < pieces.length; i++ )
    {
        var j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1).toLowerCase();
    }
    return pieces.join(" ")
}

titleCase("I'm a little tea pot");
