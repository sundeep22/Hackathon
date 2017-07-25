
function RunOverLay() {

    $("#idRanbeerPant").css('display', 'none');

    $.getJSON("/data/data.json", function (data) {
        document.querySelector("video").addEventListener("timeupdate", function () {
            var currentTime = this.currentTime;
            $.each(data, function (index, element) {
                var currentAd = "ad" + element.id;
            

                if (currentTime > element.startTime && currentTime < element.endTime) {
                    //$("#idRanbeerPant").css('display', 'inline');
                    if ($("#" + currentAd).length == 0) {
                        var html = '<div id="' + currentAd + '" class="overlay" style="display:inline;"></div>';
                        $("#adsContainer").append(html);
                        $("#adsContainer").css('display', 'inline');
                    }
                   // document.getElementById('idRanbeerPant').style.display = "inline";
                }
                else {
                    //$("#idRanbeerPant").css('display', 'none');
                    
                    //document.getElementById('idRanbeerPant').style.display = "none";
                }
            });
        });
    });


}

window.onload = RunOverLay;