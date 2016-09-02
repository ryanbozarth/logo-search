function refreshLogos(type) {
    $(".logo-" + type + "-color").fadeIn(100);
    $(".logo-" + type + "-fade").hide();
}

function clearOld(){
	$(".color").fadeOut(100);
	$(".bw").fadeIn(100);
}

$(function() {


    var programs = [{
            type: "1",
            financing: "Loan Program",
            level: "Kindergarten"
        }, {
            type: "2",
            financing: "Scholarship Program",
            level: "High School"
        }, {
            type: "3",
            financing: "Loan Program",
            level: "Kindergarten"
        }, {
            type: "4",
            financing: "Scholarship Program",
            level: "Kindergarten"
        }, {
            type: "5",
            financing: "Scholarship Program",
            level: "High School"
        }, {
            type: "6",
            financing: "Loan Program",
            level: "Kindergarten"
        }, {
            type: "7",
            financing: "Loan Program",
            level: "High School"
        }, {
            type: "8",
            financing: "Scholarship Program",
            level: "High School"
        }

    ]

    $('.search-button').click(function(e) {
        e.preventDefault();
        clearOld();
        var financing = $('#financing :selected').text();
        var level = $('#level :selected').text();
        for (var i = 0; i < programs.length; i++) {
            var currentProgram = programs[i];
            if (financing == currentProgram.financing && level == currentProgram.level) {
                var type = currentProgram.type;
                refreshLogos(type);
            }
        }

    });

}); // end doc ready
