# RSS feeds reader
The goal of this project is to develop a test suite for the RSS feed reader using Jasmine.

## Table of Contents

- [Instructions](#instructions)
- [Features Developed](#featuresDeveloped)
- [Authors](#authors)

## Instructions

### Run
Download zip file or clone the repository and run the index.html file on the browser to see the app and the report with the tests results.

## Features Developed
Udacity provided the RSS feed reader and most of the work was to create tests suite.
The majority of the work was on the spec feedreader.js, the file was almost built from scratch.

Most of the activities were:
- Wrote a new test suite named `"RSS Feeds"`
    - ensures it has a allFeeds list defined and that the name is not empty
    - ensures it has a feed URL defined _and_ that the URL is not empty
    - ensures it has a feed name defined and that the name is not empty
- Wrote a new test suite named `"The menu"`
    - ensures the menu element is hidden by default
    - ensures the menu changes visibility when the menu icon is clicked
- Wrote a test suite named `"Initial Entries"`
    - ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container
- Wrote a test suite named `"New Feed Selection"`
    - ensures when a new feed is loaded by the `loadFeed` function that the content actually changes

## Authors
This project was started by Udacity team and all later solutions developed by Rodolfo Moraes Martins.
