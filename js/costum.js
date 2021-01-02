$(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
        $(".nav-navbar").addClass("active");
    } else {
        $(".nav-navbar").removeClass("active");
    }
});

// object-fit polyfill run
objectFitImages();

/* init Jarallax */
jarallax(document.querySelectorAll('.jarallax'));

jarallax(document.querySelectorAll('.jarallax-keep-img'), {
    keepImg: true,
});

// var dt = "2021-01-31 23:59:00";// + "+07:00";
// var now = new Date();
// var dateNow = now.toLocaleDateString('en-us', { timeZone: 'Asia/Jakarta' });
// dateNow = dateNow.split('/');
// var dateString = dateNow[2] + '/' + dateNow[0] + '/' + dateNow[1] + ' ' + dt.split(' ')[1];
// var countDownDate = new Date(dateString);
// countDownDate.setMinutes(countDownDate.getMinutes() + 1);
// // Update the count down every 1 second
// var x = setInterval(function () {
//     // Get todays date and time
//     var now = new Date().getTime();

//     // Find the distance between now an the count down date
//     var distance = countDownDate.getTime() - now;

//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     if (days < 0) {
//         days = 0;
//     }

//     if (hours < 0) {
//         hours = 0;
//     }

//     if (minutes < 0) {
//         minutes = 0;
//     }

//     if (seconds < 0) {
//         seconds = 0;
//     }

//     $('#days').html(days);
//     $('#hours').html(hours);
//     $('#minutes').html(minutes);
//     $('#seconds').html(seconds);

//     if (distance <= 0) {
//         clearInterval(x);
//         $('.countdown').css("display", "none");
//     }
// }, 1000);


// Mengatur waktu akhir perhitungan mundur
var countDownDate = new Date("Nov 30, 2020 23:59:59").getTime();

// Memperbarui hitungan mundur setiap 1 detik
var x = setInterval(function () {

    // Untuk mendapatkan tanggal dan waktu hari ini
    var now = new Date().getTime();

    // Temukan jarak antara sekarang dan tanggal hitung mundur
    var distance = countDownDate - now;

    // Perhitungan waktu untuk hari, jam, menit dan detik
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Keluarkan hasil dalam elemen dengan id = "demo"


    $('#days').html(days);
    $('#hours').html(hours);
    $('#minutes').html(minutes);
    $('#seconds').html(seconds);

    // Jika hitungan mundur selesai, tulis beberapa teks
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

//plugin bootstrap minus and plus
//http://jsfiddle.net/laelitenetwork/puJ6G/
$('.btn-number').click(function(e){
    e.preventDefault();
    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function(){
$(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
    
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    
    
});
$(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
        return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });