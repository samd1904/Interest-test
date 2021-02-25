window.onload = function () {
    $.getJSON("http://localhost:3000/male", function (testOptionsM) {
        jsonData = testOptionsM;
        var tbody = document.getElementById("testTable").getElementsByTagName('tbody')[0];
        for (var i of testOptionsM) {
            var newRow = tbody.insertRow();
            newRow.className = "rowClass";
            for (var j = 0; j < i.Row.length - 1; j += 2) {
                var newCell = document.createElement("TD");
                newCell.className = "tdClass";
                var select1 = document.createElement("input");
                select1.setAttribute("type", "checkbox");
                var text1 = document.createTextNode(i.Row[j].occ);
                var br = document.createElement("br");
                var select2 = document.createElement("input");
                select2.setAttribute("type", "checkbox");
                var text2 = document.createTextNode(i.Row[j + 1].occ);
                newCell.appendChild(select1);
                newCell.appendChild(text1);
                newCell.appendChild(br);
                newCell.appendChild(select2);
                newCell.appendChild(text2);
                newRow.appendChild(newCell);
            }
        }
    });
}
var jsonData;

function submit() {
    var tBody = document.getElementById("testTable").getElementsByTagName('tbody')[0];
    for (var i in tBody.rows) {
        for (var j in tBody.rows[i].cells) {

        }
    }
}