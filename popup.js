'use strict';

//現在のウィンドウのタブ
chrome.tabs.query({currentWindow: true}, function(tabs){
    var tbody = document.createElement("tbody");
    
    for (var i = 0; i < tabs.length; i++) {
        var tab = tabs[i];
        var row = document.createElement("tr");
        row.id = tab.id;
        var cell0 = document.createElement("td");
        cell0.style = "background-url: url(" + tab.favIconUrl + ")";
        var cell1 = document.createElement("td");
        cell1.innerHTML = tab.title;
        var cell2 = document.createElement("td");
        cell2.innerHTML = "×";
        cell2.onclick = remove(tab.id);
        
        row.appendChild(cell0);
        row.appendChild(cell1);
        row.appendChild(cell2);
        tbody.appendChild(row);
    }
    document.getElementById("container").appendChild(tbody);
});

var remove = function(id){
    chrome.tabs.remove(id, function(){
        var target = document.getElementById(id);
        var parent = document.getElementsByTagName("tbody")[0];
        parent.removeChild(target);
    });
}