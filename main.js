//Global Variable
var $sidebar = $('.sidebar');
var $navprofile = $('.nav-profile');
var $content = $('.content');
var $image = $('.image');
var $meta = $('.meta');
var $person = $('.person');
var $inter = $('.inter');
var $stats = $('.stats');
var $title = $('.titles');
var $numbers = $('.numbers');

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

    $navprofile.append('<img src="' + profile.avatar_url + '"/>' + '<span class="octicon octicon-triangle-down"></span>');

    $img = $('<img>').attr('src', avatar);
    $image.append($img);

    $h3 = $('<h3>').text(profile.name);
    $person.append($h3);

    $h4 = $('<h4 class="headline">').text(profile.login);
    $person.append($h4);

    $meta.append('<p>' + '<span class="octicon octicon-location"></span>' + profile.location + '</p>');

    $meta.append('<p>' + '<span class="octicon octicon-link"></span>' + '<a href="'+ profile.url+'">' + profile.blog + '</a></p>');

    $meta.append('<p>' + '<span class="octicon octicon-clock"></span>' + 'Joined on ' + moment(profile.created_at).format('LL') + '</p>');

    $inter.append('<li class="numbers"><a href="' + profile.followers_url + '">' + profile.followers + '</a></li>');

    $inter.append('<li class="numbers"><a href="' + profile.starred_url + '">' + '0' + '</a></li>');

    $inter.append('<li class="numbers"><a href="' + profile.following_url + '">' + profile.following + '</a></li>');

    $inter.append('<li class="titles"><a href="'+ profile.followers_url +'">' + "Followers" + '</li>');

    $inter.append('<li class="titles"><a href="'+ profile.starred_url +'">' + "Starred" + '</li>');

    $inter.append('<li class="titles"><a href="'+ profile.followers_url +'">' + "Following" + '</li>');
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
  $reposlist = $('.reposlist');
  $repos = $('.repos')
   repos.forEach(function(repo){
       $repos.append('<a href="'+ repo.forks_url+'">' + '<span class="octicon octicon-git-branch"></span>' + repo.forks_count + '</a>');
       $repos.append('<a href="'+ repo.stargazers_url+'">' + repo.stargazers_count + '<span class="octicon octicon-star"></span>' + '</a>');
       $repos.append('<span class="cat">' + repo.language + '</span>');
       $repos.append('<h3><a href="'+ repo.html_url+'">' + repo.name + '</a></h3>');
       $repos.append('<p>' + 'Updated ' + moment(repo.updated_at).fromNow() + '</p>');
   });
  }
});
