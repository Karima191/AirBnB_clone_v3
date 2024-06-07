$(document).ready(function() {
    $.ajax({
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({}),
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
});
