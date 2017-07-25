 function RunOverLay() {
        document.getElementById('idRanbeerPant').style.display = "none";

        document.querySelector("video").addEventListener("timeupdate", function () {
            if (this.currentTime > 6) {
                document.getElementById('idRanbeerPant').style.display = "inline";
               
            }
        });
    }

    window.onload = RunOverLay;