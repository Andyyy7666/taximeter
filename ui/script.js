$(document).ready(function() {
    
    window.addEventListener("message", function(event) {
        const item = event.data;
        if (item.type === "updateFare") {
            $(".fare-value").text(parseFloat(item.fare).toFixed(2));
            $(".extras-value").text(parseFloat(item.extras).toFixed(2));
            $(".total-value").text(parseFloat(item.total).toFixed(2));
        };

        if (item.type === "updateDriver") {
            if (item.driver) {
                $(".btn-box, .btn-extrasBox").fadeIn("fast");
            } else {
                $(".btn-box, .btn-extrasBox").fadeOut("fast");
            };
        };

        if (item.type === "showUI") {
            if (item.display) {
                $(".taximeter").fadeIn("fast");
            } else {
                $(".taximeter").fadeOut("fast");
            };
        };

    });

    $(".extrasAdd").click(function() {
        $.post(`https://${GetParentResourceName()}/extrasAdd`);
        return;
    });

    $(".extrasRemove").click(function() {
        $.post(`https://${GetParentResourceName()}/extrasRemove`);
        return;
    });
    
    $(".start").click(function() {
        $.post(`https://${GetParentResourceName()}/startMeter`);
        return;
    });

    $(".stop").click(function() {
        $.post(`https://${GetParentResourceName()}/stopMeter`);
        return;
    });
    
    $(".reset").click(function() {
        $.post(`https://${GetParentResourceName()}/resetMeter`);
        return;
    });


});
