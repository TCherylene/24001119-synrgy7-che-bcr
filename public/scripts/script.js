$(document).ready(function () {
    // DOM for time looping
    let time = '';
    for (let i = 0; i <= 23; i++) {
        let value = i < 10 ? '0' + i : i;

        time += `<li class="filter__dropdown-item dropdown-item filter__button" data-value="${i}">
            <div>${value}:00</div>
            <div class="filter__wib">WIB</div>
        </li>`;
    }

    $('#time').html(time);


    function changeBorder(element) {
        const parent = $(element).closest('.filter__dropdown')
        let text = $(parent).find('.filter__text')
        let button = $(parent).find('.filter__button')

        if ($(text).attr('data-value') != -1) {
            $(button).addClass('filter__button--active');
        } else {
            $(button).removeClass('filter__button--active');
        }
    };

    $('.filter__dropdown').on('show.bs.dropdown', function () {
        const icon = $(this).find('.filter__icon').hasClass('fa-solid');
        if (icon) {
            $(icon).removeClass('fa-chevron-down').addClass('fa-chevron-up');
        }
    });

    $('.filter__dropdown').on('hide.bs.dropdown', function () {
        const icon = $(this).find('.filter__icon').hasClass('fa-solid');
        if (icon) {
            $(icon).removeClass('fa-chevron-up').addClass('fa-chevron-down');
        }
    });

    // Filter Dropdown 
    $('.filter__dropdown-item').on('click', function () {
        const filter_text = $(this).closest('.filter__dropdown').find('.filter__text')
        $(filter_text).text($(this).text());
        $(filter_text).attr('data-value', $(this).attr('data-value'));

        // remove all active
        $(this).closest('.filter__dropdown').find('.filter__dropdown-item').removeClass('active');

        // add active to this
        $(this).addClass('active');
        changeBorder(this);
    });

    // Flatpickr
    const flatpickrOptions = {
        dateFormat: "d M Y"
    }

    $('.flatpickr').flatpickr(flatpickrOptions)

    // Owl Carousel
    var slider = $(".owl-carousel");
    slider.owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        items: 1,
        stagePadding: 20,
        center: true,
        nav: true,
        navText: ['<i class="fa-solid fa-chevron-left testimonials__icons--chevron-left"></i>', '<i class="fa-solid fa-chevron-right testimonials__icons--chevron-right"></i>'],
        margin: 50,
        dots: false,
        loop: true,
        responsive: {
            0: { items: 1 },
            480: { items: 1 },
            575: { items: 1 },
            768: { items: 1 },
            991: { items: 2 },
            1200: { items: 2 }
        },
    });
});