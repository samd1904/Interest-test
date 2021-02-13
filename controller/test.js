window.onload = function () {
    var testOptionsM = [{
        "text": "IAS Officer",
    },
    {
        "text": "IAS Officer",
    },
    {
        "text": "IAS Officer",
    },
    {
        "text": "IAS Officer",
    }];

    var tbody = document.getElementById("testTable").getElementsByTagName('tbody')[0];
    //Insert new row
    var newRow = tbody.insertRow();

    for (var i of testOptionsM) {
        // Insert a cell at the end of the row
        var newCell = newRow.insertCell();
        // Append a text node to the cell
        var newText = document.createTextNode(i.text);
        newCell.appendChild(newText);
        console.log(i);
    }

}