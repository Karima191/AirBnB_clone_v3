$(document).ready(function() {
    // This function sends a POST request to the places_search endpoint
    // with the list of amenities IDs that are checked.
    function searchPlaces() {
        var amenities = {};
        $('.amenities input[type="checkbox"]:checked').each(function() {
            var amenityId = $(this).data('id');
            amenities[amenityId] = true;
        });

        $.ajax({
            url: 'http://0.0.0.0:5001/api/v1/places_search/',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(amenities),
            success: function(data) {
                var placesSection = $('.places');
                placesSection.empty(); // Clear any existing content

                $.each(data, function(index, place) {
                    var article = $('<article>');
                    article.append($('<h2>').text(place.name));
                    article.append($('<h3>').text('$' + place.price));
                    article.append($('<img>').attr('src', place.image_url));
                    article.append($('<p>').text(place.description));
                    placesSection.append(article);
                });
            },
            error: function() {
                console.error('Failed to fetch places from the API');
            }
        });
    }

    // This event listener calls the searchPlaces function when the button is clicked.
    $('.search-button').on('click', function() {
        searchPlaces();
    });
});
