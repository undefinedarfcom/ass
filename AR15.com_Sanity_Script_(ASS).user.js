// ==UserScript==

// @name         AR15.com Sanity Script (ASS)

// @namespace    Undefined

// @version      2

// @description  Filter out threads by keyword, author, or forum

// @author       Undefined

// @match        http://www.ar15.com/*

// @grant        none

// @require	http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js

// ==/UserScript==


// This may or may not be useful. Conflicts are bad, right?

this.$ = this.jQuery = jQuery.noConflict(true);


// Enter a list of words you would like to search for and nuke from your view any topics containing said word. Separate with a pipe, like this "trannys|trump"


// To disable, put two slashes in from of "var" on the next line (just like the beginning of this line!)

var bad_topics_regex = "trump|bush|yeb|jeb|rubio|cruz|sanders";


// Enter a list of usernames you would like to nuke from your view. Any thread started by these users will disappear. It is as if the user never existed, or you were blind the whole time. Separate with a pipe.


// To disable, put two slashes in from of "var" on the next line (just like the beginning of this line!)

var bad_usernames_regex = "BadMonk|nightdh";


// Enter a list of forums that you don't like. Posts in these forums will disappear from pages like Active Topics. Separate with a pipe. 


// To disable, put two slashes in from of "var" on the next line (just like the beginning of this line!)

var bad_forums_regex = "Vapers Den";


// Leave this section alone. It does stuff.


$('div[class*=forumTable] a').each(function (k, v) {

    var re = new RegExp(bad_topics_regex, 'ig');

    if ($(this).text().match(re)) {

$(this).parent().parent().parent().remove();

    }

});


$('div.repliesBox').each(function (k, v) {

    var re = new RegExp(bad_usernames_regex, 'ig');

    if ($(this).text().match(re)) {

$(this).parent().remove();

    }

});


$('div.forumNameBox').each(function (k, v) {

    var re = new RegExp(bad_forums_regex, 'ig');

    if ($(this).text().match(re)) {

$(this).parent().remove();

    }

});


// This section makes it all pretty again. You want Arfcom to be pretty, right??

// The following section is borrowed from Lyndsy Simon's "Hide threads by ignored users" script, available at https://github.com/lyndsysimon/userscripts/

// Re-apply classes to alternate row colors

$('div[class*=forumTable][class!=forumTableDarkNews][class!=forumTableLightNews]').each(function(idx, elem) {

    var e = $(elem);

    if (idx % 2 == 0) {

        if (e.hasClass('forumTableLight')) {

            e.removeClass('forumTableLight');

            e.addClass('forumTableDark');

        }

    } else {

        if (e.hasClass('forumTableDark')) {

            e.removeClass('forumTableDark');

            e.addClass('forumTableLight');

        }

    }

});
