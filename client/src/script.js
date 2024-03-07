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
    TEXT["DEFAULT"] = "Drop \uD83C\uDFE2 image";
    TEXT["SUCCESS"] = "\u2705";
})(TEXT || (TEXT = {}));
// const dropHandler = (event: any) => {
//     event.preventDefault();
//     const box: HTMLDivElement = document.querySelector('#drop_zone')!;
//     box.style.backgroundColor = 'white';
// }
// const dragOverHandler = (event: any) => {
//     event.preventDefault();
//     const box: HTMLDivElement = document.querySelector('#drop_zone')!;
//     box.style.backgroundColor = 'red';
// }
// const dragLeaveHandler = (event: any) => {
//     event.preventDefault();
//     const box: HTMLDivElement = document.querySelector('#drop_zone')!;
//     box.style.backgroundColor = 'white';
// }
window.addEventListener('load', function () {
    // document.querySelector('#btnTest')?.addEventListener('click', async () => {
    //     await fetch('http://www.localhost:8080/test')
    //         .then(res => res.json())
    //         .then(res => alert(JSON.stringify(res)));
    // });
    var box = document.querySelector('#drop_zone');
    var text = document.querySelector('#drop_zone_text');
    box.addEventListener('drop', function (event) {
        event.preventDefault();
        box.style.outlineColor = COLOR_SCHEME.BLACK;
        box.style.outlineStyle = 'dotted';
        text.innerHTML = TEXT.DEFAULT;
    });
    box.addEventListener('dragover', function (event) {
        event.preventDefault();
        box.style.outlineColor = COLOR_SCHEME.SUCCESS;
        box.style.outlineStyle = 'solid';
        text.innerHTML = TEXT.SUCCESS;
    });
    box.addEventListener('dragleave', function (event) {
        event.preventDefault();
        box.style.outlineColor = COLOR_SCHEME.BLACK;
        box.style.outlineStyle = 'dotted';
        text.innerHTML = TEXT.DEFAULT;
    });
});
