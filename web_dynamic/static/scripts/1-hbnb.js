$(document).ready(function() {
    var selectedAmenities = {};

    $('.amenities input[type="checkbox"]').on('change', function() {
        var amenityId = $(this).data('id');
        var amenityName = $(this).data('name');

        if ($(this).is(':checked')) {
            selectedAmenities[amenityId] = amenityName;
        } else {
            delete selectedAmenities[amenityId];
        }

        var amenitiesList = $.map(selectedAmenities, function(value, key) {
            return value;
        }).join(', ');

        $('div#amenities h4').text(amenitiesList);
    });
});
