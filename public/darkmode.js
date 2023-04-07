function switchtheme() {
    var x = document.getElementById("button");
    if (x.innerHTML == "Hide") {
        x.innerHTML = "See";
        document.documentElement.setAttribute('data-theme', 'dark');
    
    } else {
        x.innerHTML = "Hide";
        document.documentElement.setAttribute('data-theme', 'light');
        
    }
}


