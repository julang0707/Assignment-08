//Global Variable
var $sidebar = $('.sidebar');
var $content = $('.content');
var $image = $('.image');
var $meta = $('.meta');
var $person = $('.person');
var $inter = $('.inter');

var $urlUser = 'https://api.github.com/users/julang0707';
var $urlRepo = 'https://api.github.com/users/julang0707/repos';

var access_token = "3859d0921b0512ab8c7e13cce6993cd07a1fc230"
$.ajax({
  url: $urlUser,
  dataType: 'json',
  data: {
    access_token: access_token
  },
  error: function( req, status, err ) {
    console.log( 'something went wrong', status, err );
  },
  success: function(data, textStatus, xhr) {
    var profile = data;
    var avatar = profile.avatar_url;
    var name = profile.name;

    $img = $('<img>').attr('src', avatar);
    $image.append($img);

    $h3 = $('<h3>').text(profile.name);
    $person.append($h3);

    $h4 = $('<h4 class="headline">').text(profile.login);
    $person.append($h4);

    $meta.append('<p>' + '<span class="octicon octicon-location"></span>' + profile.location + '</p>');

    $meta.append('<p>' + '<span class="octicon octicon-link"></span>' + '<a href="'+ profile.url+'">' + profile.blog + '</a></p>');

    $meta.append('<p>' + '<span class="octicon octicon-clock"></span>' + profile.created_at + '</p>');

    $inter.append('<li><a href="' + profile.followers_url + '">' + profile.followers + '</a></li>');

    $inter.append('<li><a href="' + profile.starred_url + '">' + '0' + '</a></li>');

    $inter.append('<li><a href="' + profile.following_url + '">' + profile.following + '</a></li>');
  }
});
var access_token = "3859d0921b0512ab8c7e13cce6993cd07a1fc230"
$.ajax({
  url: $urlRepo,
  dataType: 'json',
  data: {
    access_token: access_token
  },
  error: function( req, status, err ){
    console.log( 'something went wrong', status, err );
  },
  success: function(repos, textStatus, xhr){
   $repos = $('.repos');
   repos.forEach(function(repo){
       $repos.append('<h3><a href="'+ repo.html_url+'">' + repo.name + '</a></h3>');
       $repos.append('<p>' + moment(repo.updated_at).fromNow() + '</p>');
       $repos.append('<p>' + repo.language + '</p>');
       $repos.append('<p class="star"><a href="'+ repo.stargazers_url+'">' + '<span class="octicon octicon-star"></span>' + repo.stargazers_count + '</a></p>');
       $repos.append('<p class="fork"><a href="'+ repo.forks_url+'">' + '<span class="octicon octicon-git-branch"></span>' + '  ' + repo.forks_count + '</a></p>');
   });
  }
});
