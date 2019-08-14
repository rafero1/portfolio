import Viewer from 'viewerjs';

function setupViewerFor(id) {
    // View an image
    const viewer = new Viewer(document.getElementById(id), {
        viewed() {
            viewer.zoomTo(1);
        },
    });
}