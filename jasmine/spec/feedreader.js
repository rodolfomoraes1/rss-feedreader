/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('has defined URLs and the URLs are not empty', function() {
            allFeeds.forEach(function (feed) {
                expect(feed.url).not.toBeUndefined();
                expect(feed.url.trim()).not.toBe('');
            });
        });

        it('has defined names and the names are not empty', function() {
            allFeeds.forEach(function (feed) {
                expect(feed.name).not.toBeUndefined();
                expect(feed.name.trim()).not.toBe('');
            });
        });
    });

    describe('The menu', function() {
        var body,
            menuIcon;

        beforeEach(function(){
            body = $('body');
            menuIcon = $('.menu-icon-link');
        });

        it('the menu element is hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        it('the menu changes visibility when the menu icon is clicked', function(){
            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(false);
            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function(){
        var feed = $('.feed');

        beforeEach(function(done){
            loadFeed(0, function(){
                done();
            })
        });

        it('there is at least a single feed', function(done){
            expect(feed[0].childElementCount).toBeGreaterThan(0);
            done();
        });
    });

    describe('New Feed Selection', function(){
        var feed = $('.feed'),
            entriesStart,
            entriesEnd;

        beforeEach(function(done){
            loadFeed(0, function() {
                entriesStart = feed.find(allFeeds.name);
                done();
            });
        });

        afterEach(function() {
            loadFeed(1, function() {
                entriesEnd = feed.find(allFeeds.name);
                done();
            })
        });

        it('new feed is different to old one', function () {
            expect(entriesStart).not.toBe(entriesEnd);
        });
    });

    describe('Defined variables', function() {
        it('are defined', function () {
          expect(allFeeds).toBeDefined();
          expect(allFeeds.length).not.toBe(0);
        });
    });


}());
