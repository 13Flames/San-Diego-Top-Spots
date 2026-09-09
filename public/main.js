$(document).ready(function () {
    // write your code here
    $.getJSON("data.json", function (data) {
        let tableRows = "";
        $.each(data, function (index, spot) {
            let lat = spot.location[0];
            let lng = spot.location[1];
            let mapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
            tableRows += `<tr>
                <td>${spot.name}</td>
                <td>${spot.description}</td>
                <td>
                    <a href="${mapsUrl}" target="_blank">View on Google Maps</a>
                </td>
            </tr>`;
        });
        $("#spots-table-body").html(tableRows);
    });
});