var $result = $('.results');
// var url = 'https://api.github.com/users/jules0707';

// var displayProfile = function(data, textStatus, xhr){
//   var profile = data;
//   var avatar = profile.avatar_url;
//   var url = profile.html_url;
//   var name = profile.name;
//   var company = profile.company;
//
//
//   $('.results img').attr('src', avatar);
//   $('.results .name').text(name);
//   $('.results .company').text(company);
//   $('.results a').attr('href', url);
//
// };
//
// var errorDisplayingProfile = function(xhr, type, error){
//     $result.text("Oooops! " + error);
// };

$.ajax('https://api.github.com/users/julang0707', {
  method: 'POST',
  dataType: 'json',
  error: function(xhr, type, error){
    $result.text("Oooops! " + error);
  },

  success: function(data, textStatus, xhr){
    var profile = data;
    var avatar = profile.avatar_url;

    // Add our github avatar
    $img = $('<img>').attr('src', avatar);
    $result.append($img);

    $h3 = $('<h3>').text(profile.name);
    $result.append($h3);

    $h4 = $('<h4>').text(profile.company);
    $result.append($h4);

    $a = $('<a>').attr('src', profile.html_url);
    $result.append($p);

    console.log(profile);
  }
});

// $.ajax(url, {
//   error: errorDisplayingProfile,
//   success: displayProfile
// });
//
//

console.log('this ran immediately');

$.ajax(url)
 .done(displayProfile)
 .fail(errorDisplayingProfile)
 .always(function(){
   console.log('always ran');
 });

console.log('this ran immediately, too');




?????????????????

var $result = $('.results');
var url = 'https://api.github.com/users/julang0707';

var displayProfile = function(data, textStatus, xhr){
  var profile = data;
  var avatar = profile.avatar_url;
  var url = profile.html_url;
  var name = profile.name;
  var company = profile.company;


  $('.results img').attr('src', avatar);
  $('.results .name').text(name);
  $('.results .company').text(company);
  $('.results a').attr('href', url);

};

var settings = $.ajax({
  type: 'POST',
  dataType: 'json',
  url: 'https://api.github.com/users/julang0707',
  error: function(xhr, type, error){
    $result.text("Oooops! " + error);
  },

  success: function(data, textStatus, xhr){
    var profile = data;
    var avatar = profile.avatar_url;

    // Add our github avatar
    $img = $('<img>').attr('src', avatar);
    $result.append($img);

    $h3 = $('<h3>').text(profile.name);
    $result.append($h3);
    //
    // $h4 = $('<h4>').text(profile.company);
    // $result.append($h4);
    //
    // $p = $('<p>').text(profile.html_url);
    // $result.append($p);

    console.log(profile);
  }
});
