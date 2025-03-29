$(document).ready(function(){
    $("a[href^='#']").on("click", function(event) {
        var targetId = $(this).attr("href"); // Lấy giá trị href (ví dụ: "#section1")

        // Kiểm tra nếu href hợp lệ và không phải href="#"
        if (targetId !== "#" && $(targetId).length) {
            event.preventDefault(); // Ngăn chặn load trang

            $("html, body").animate({
                scrollTop: $(targetId).offset().top
            }, 800); // Cuộn mượt trong 800ms
        }
    });
});

