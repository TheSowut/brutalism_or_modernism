var box;
var text;
var COLOR_SCHEME;
(function (COLOR_SCHEME) {
    COLOR_SCHEME["PRIMARY"] = "#4A90E2";
    COLOR_SCHEME["SUCCESS"] = "#82DD55";
    COLOR_SCHEME["ERROR"] = "#E23636";
    COLOR_SCHEME["WARNING"] = "#EDB95E";
    COLOR_SCHEME["BLACK"] = "#1F292E";
    COLOR_SCHEME["DARK_GRAY"] = "#415058";
    COLOR_SCHEME["MID_GRAY"] = "#C8CDD0";
    COLOR_SCHEME["LIGHT_GRAY"] = "#F2F2F3";
})(COLOR_SCHEME || (COLOR_SCHEME = {}));
var TEXT;
(function (TEXT) {
    TEXT["DEFAULT"] = "Drop \uD83C\uDFDB\uFE0F image";
    TEXT["SUCCESS"] = "\u2705";
    TEXT["LOADING"] = "\u23F3";
})(TEXT || (TEXT = {}));
var handleClickImport = function () {
    alert(123);
};
/**
 * Handle drop of picture.
 *
 * @param event
 */
var dropHandler = function (event) {
    event.preventDefault();
    box.style.outlineColor = COLOR_SCHEME.WARNING;
    text.innerHTML = TEXT.LOADING;
};
/**
 * Handle dragging of picture over element.
 *
 * @param event
 */
var dragOverHandler = function (event) {
    event.preventDefault();
    box.style.outlineColor = COLOR_SCHEME.SUCCESS;
    box.style.outlineStyle = 'solid';
    text.innerHTML = TEXT.SUCCESS;
};
/**
 * Handle dragging out of element.
 *
 * @param event
 */
var dragLeaveHandler = function (event) {
    event.preventDefault();
    box.style.outlineStyle = 'none';
    text.innerHTML = TEXT.DEFAULT;
};
/**
 * Load HTML Elements.
 */
window.addEventListener('load', function () {
    // document.querySelector('#btnTest')?.addEventListener('click', async () => {
    //     await fetch('http://www.localhost:8080/test')
    //         .then(res => res.json())
    //         .then(res => alert(JSON.stringify(res)));
    // });
    box = document.querySelector('#drop_zone');
    text = document.querySelector('#drop_zone_text');
});
