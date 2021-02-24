window.onload = function () {
    var tbody = document.getElementById("testTable").getElementsByTagName('tbody')[0];
    for (var i of testOptionsM) {
        var newRow = tbody.insertRow();
        newRow.className = "rowClass";
        for (var j =0; j<i.Row.length-1; j+=2) {
            var newCell = document.createElement("TD");
            newCell.className = "tdClass";
            var select1 = document.createElement("input");
            select1.setAttribute("type","checkbox");
            var text1 = document.createTextNode(i.Row[j].occ);
            var br = document.createElement("br");    
            var select2 = document.createElement("input");
            select2.setAttribute("type","checkbox");
            var text2 = document.createTextNode(i.Row[j+1].occ);    
            newCell.appendChild(select1);
            newCell.appendChild(text1);
            newCell.appendChild(br);
            newCell.appendChild(select2);
            newCell.appendChild(text2);
            newRow.appendChild(newCell);          
        }
    }
}
function submit(){
    var tBody = document.getElementById("testTable").getElementsByTagName('tbody')[0];
    for(var i in tBody.rows){
        for(var j in tBody.rows[i].cells){
            
        }
    }
}

var testOptionsM = [
    //Row 1
    {
        Row: [{
                type: "Adm. 1",
                occ: "I.A.S Officer",
                selected: false
            },
            {
                type: "Adm. 2",
                occ: "Diplomatic Services",
                selected: false
            },
            {
                type: "Ent. 1",
                occ: "Sales Manager",
                selected: false
            },
            {
                type: "Adm. 2",
                occ: "Factory Manager",
                selected: false
            }
        ]
    },
    //Row 2
    {
        Row: [{
                type: "Adm. 1",
                occ: "Executive Manager",
                selected: false
            },
            {
                type: "Ent. 2",
                occ: "Automobile Dealer",
                selected: false
            },
            {
                type: "Ent. 1",
                occ: "Airplane Pilot",
                selected: false
            },
            {
                type: "Ent. 2",
                occ: "Exporter",
                selected: false
            }
        ]
    }
];