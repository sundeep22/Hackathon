$(document).ready(function() {

    $("#btnToggle").on("click", function(){

        $("#adContainer").toggle();
    });

    $.getJSON("/data/data.json", function (data) {
        document.querySelector("video").addEventListener("timeupdate", function () {
            var currentTime = this.currentTime;
            $.each(data, function (index, element) {
                var currentAd = "ad" + element.id;
                if (currentTime > element.startTime && currentTime < element.endTime) {
                    if ($("#" + currentAd).length == 0) {
                        var html = '<div id="' + currentAd + '" class="overlay2" onclick=window.open("'+ element.storeUrl +'") style="display:inline; cursor:pointer; background-image:url('+ element.iconUrl +')"></div>';
                        $(html).appendTo($("#adContainer")).slideDown("slow"); 
                        //$("#adContainer").append(html).slideDown(1000);
                    }
                }
                else {
                    $("#" + currentAd).remove();
                }
            });
        });
    });


});

