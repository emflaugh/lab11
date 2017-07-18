$(document).ready(function() {
    console.log("ready!");

function getData () {

//declare variable payload
var payload = null;

$.get('https://www.reddit.com/r/aww/.json').done(function(json){
  payload = json.data.children;
  displayData(payload);
  console.log(json);
});


//closure for getData() function
};

function displayData(payload) {
  payload.forEach(function(post) {
    console.log(post);

$('body').append("<div class='post'>" + "<h4 class='title'>" + post.data.title + '</h4>' + "<p class='author'> Author: " + post.data.author + '</p>' + '<p> From Subreddit: ' + "<a href='https://www.reddit.com/r/aww/'>" + post.data.subreddit + '</a></p>' + "<a href='" + post.data.url + "'><img src='" + post.data.thumbnail + "'class='url' alt='click here to view image'></a>" + "<p class='numComments'> # Of Comments: " + post.data.num_comments + "</p>" + '<p class="button"><a href=' + "'https://www.reddit.com" + post.data.permalink + "'" + '>Comments</a></p>' + '</div>');


// console.log (post.data.permalink);
  });

}

getData();





//closure for document.ready(function){
});
