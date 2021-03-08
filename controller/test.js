window.onload = function () {
    //data.json is stored on the local server using json server
    //use: npm install -g json-server
    $.getJSON("http://localhost:3000/male", function (testOptionsM) {
        jsonData = testOptionsM;
        var tbody = document.getElementById("testTable").getElementsByTagName('tbody')[0];
        //creates the table based on the data stored in data.json
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
    for (var i = 0, row; row = tBody.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
            if (col.children[0].checked) {
                //console.log(i+":"+(parseInt(j)*2));
                jsonData[i].Row[(parseInt(j) * 2)].selected = true;
            }
            if (col.children[2].checked) {
                jsonData[i].Row[(parseInt(j) * 2 + 1)].selected = true;
                //console.log(i+":"+(parseInt(j)*2+1));
            }
        }
    }
    $.ajax({
        type: 'PATCH',
        url: 'http://localhost:3000/male',
        data: JSON.stringify(jsonData),
        contentType: 'application/json',
        success: function(data){
            console.log("success");
        },
        error: function(err){
            console.log(err);
        }
     });
}