const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'src/assets');
const blogAssetsDir = path.join(assetsDir, 'blog_assets');
const portraitsDir = path.join(assetsDir, 'character-portraits');
const eventIconsDir = path.join(assetsDir, 'event-icons');
const zoomifyDir = path.join(assetsDir, 'zoomify-map');

const dirs = [assetsDir, blogAssetsDir, portraitsDir, eventIconsDir, zoomifyDir];

dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

const files = [
    'Wheel-icon.svg',
    'become_a_patron_button.png',
    'icons8-restart-26.png',
    'icons8-back-24.png',
    'banner-timeline.png',
    'patreon-logo.png',
    'icons8-book-stack-52.png',
    'icons8-person-48.png',
    'icons8-timeline-52.png',
    'icons8-down-button-64.png',
    'banner-quizzes.png',
    'right.png',
    'wrong.png',
    'icons8-map-marker-52.png',
    'icons8-questions-52.png',
    'icons8-blog-64.png',
    'unanswered-box.png',
    'answered.png',
    'banner.png',
    'Map-screenshot.png',
    'icons8-email-send-32.png',
    'timeline-preview.png',
    'icons8-close-window-52.png',
    'Map-with-colours.png',
    'icons8-map-marker-grey-52.png',
    'icons8-settings-grey-48.png',
    'icons8-book-stack-52-grey.png',
    'icons8-person-48-grey.png',
    'icons8-arrow-left-64.png',
    'icons8-arrow-right-64.png',
    'icons8-settings-48.png'
];

const blogFiles = [
    'info-icon.png',
    'spoiler-icon.png'
];

const portraitFiles = [
    'rand-flag-cropped.png'
];

files.forEach(file => fs.writeFileSync(path.join(assetsDir, file), ''));
blogFiles.forEach(file => fs.writeFileSync(path.join(blogAssetsDir, file), ''));
portraitFiles.forEach(file => fs.writeFileSync(path.join(portraitsDir, file), ''));

console.log('Dummy assets created.');
