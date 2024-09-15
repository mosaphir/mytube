$(document).ready(function() {
    const API_KEY = 'AIzaSyAJEN4-wOoJdHHLmiCAAH9hduSWXiN6L6s';
    const API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=10&key=${API_KEY}`;

    $.get(API_URL, function(data) {
        let videos = data.items;
        let videoList = $('#video-list');

        videos.forEach(video => {
            let videoCard = `
                <div class="col-md-4">
                    <div class="card video-card">
                        <img src="${video.snippet.thumbnails.high.url}" class="card-img-top" alt="${video.snippet.title}">
                        <div class="card-body">
                            <h5 class="card-title">${video.snippet.title}</h5>
                            <p class="card-text">${video.snippet.description}</p>
                            <a href="https://www.youtube.com/watch?v=${video.id}" class="btn btn-primary">Watch</a>
                        </div>
                    </div>
                </div>
            `;
            videoList.append(videoCard);
        });
    });
});
