var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var dropZone;
var dropZoneText;
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
    TEXT["ERROR"] = "\u274C";
})(TEXT || (TEXT = {}));
var handleClickImport = function () {
    alert(123);
};
/**
 * Handle drop of picture.
 *
 * @param event
 */
var dropHandler = function (event) { return __awaiter(_this, void 0, void 0, function () {
    var file, formData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                event.preventDefault();
                setLoadingState();
                file = event.dataTransfer.items[0].getAsFile();
                if (!isImage(file)) {
                    setErrorState();
                    return [2 /*return*/];
                }
                formData = new FormData();
                formData.append('image', file);
                return [4 /*yield*/, fetch('http://www.localhost:8080/recognize', {
                        method: 'POST',
                        body: formData
                    })
                        .then(function (res) { return res.json(); })
                        .then(function (res) {
                        var imgElement = document.querySelector('#test');
                        imgElement.src = 'data:' + res.file.mimetype + ';base64,' + res.file.base64Image;
                    })
                        .catch(function (err) { return console.error(err); })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
/**
 * Check if a file is an image
 * @param file
 * @returns
 */
var isImage = function (file) { return file.type.match(/image.*/); };
/**
 * Handle dragging of picture over element.
 *
 * @param event
 */
var dragOverHandler = function (event) {
    event.preventDefault();
    setSuccessState();
};
/**
 * Handle dragging out of element.
 *
 * @param event
 */
var dragLeaveHandler = function (event) {
    event.preventDefault();
    setDefaultState();
};
/**
 * Return the app to it's default state.
 */
var setDefaultState = function () {
    dropZone.style.outlineStyle = 'none';
    dropZoneText.innerHTML = TEXT.DEFAULT;
};
/**
 * Set the app to 'loading' state.
 */
var setLoadingState = function () {
    dropZone.style.outlineStyle = 'none';
    dropZone.innerHTML = TEXT.DEFAULT;
};
/**
 * Set the app to 'success' state.
 */
var setSuccessState = function () {
    dropZoneText.innerHTML = TEXT.SUCCESS;
    dropZone.style.outlineColor = COLOR_SCHEME.SUCCESS;
    dropZone.style.outlineStyle = 'solid';
};
/**
 * Set the app to 'error' state.
 */
var setErrorState = function () {
    dropZone.style.outlineColor = COLOR_SCHEME.ERROR;
    dropZoneText.innerHTML = TEXT.ERROR;
};
/**
 * Load HTML Elements.
 */
window.addEventListener('load', function () {
    dropZone = document.querySelector('#drop_zone');
    dropZoneText = document.querySelector('#drop_zone_text');
});
