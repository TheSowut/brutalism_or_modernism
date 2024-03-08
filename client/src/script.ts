let dropZone: HTMLDivElement;
let dropZoneText: HTMLParagraphElement;

enum COLOR_SCHEME {
    'PRIMARY' = '#4A90E2',
    'SUCCESS' = '#82DD55',
    'ERROR' = '#E23636',
    'WARNING' = '#EDB95E',
    'BLACK' = '#1F292E',
    'DARK_GRAY' = '#415058',
    'MID_GRAY' = '#C8CDD0',
    'LIGHT_GRAY' = '#F2F2F3'
}

enum TEXT {
    'DEFAULT' = 'Drop 🏛️ image',
    'SUCCESS' = '✅',
    'LOADING' = '⏳',
    'ERROR' = '❌'
}

const handleClickImport = () => {
    alert(123);
}

/**
 * Handle drop of picture.
 *
 * @param event
 */
const dropHandler = async (event: any) => {
    event.preventDefault();
    setLoadingState();

    const file = event.dataTransfer.items[0].getAsFile();
    if (!isImage(file)) {
        setErrorState();
        return;
    }

    const formData = new FormData();
    formData.append('image', file);

    await fetch('http://www.localhost:8080/recognize', {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(res => {
            let imgElement: HTMLImageElement = document.querySelector('#test')!;
            imgElement.src = 'data:' + res.file.mimetype + ';base64,' + res.file.base64Image;
        })
        .catch(err => {
            alert(err);
            setErrorState();
        });
}

/**
 * Check if a file is an image
 * @param file
 * @returns
 */
const isImage = (file: File) => file.type.match(/image.*/);

/**
 * Handle dragging of picture over element.
 *
 * @param event
 */
const dragOverHandler = (event: any) => {
    event.preventDefault();

    setSuccessState();
}

/**
 * Handle dragging out of element.
 *
 * @param event
 */
const dragLeaveHandler = (event: any) => {
    event.preventDefault();

    setDefaultState();
}

/**
 * Return the app to it's default state.
 */
const setDefaultState = () => {
    dropZone.style.outlineStyle = 'none';
    dropZoneText.innerHTML = TEXT.DEFAULT;
}

/**
 * Set the app to 'loading' state.
 */
const setLoadingState = () => {
    dropZone.style.outlineStyle = 'none';
    dropZoneText.innerHTML = TEXT.DEFAULT;
}

/**
 * Set the app to 'success' state.
 */
const setSuccessState = () => {
    dropZone.style.outlineColor = COLOR_SCHEME.SUCCESS;
    dropZone.style.outlineStyle = 'solid';
    dropZoneText.innerHTML = TEXT.SUCCESS;
}

/**
 * Set the app to 'error' state.
 */
const setErrorState = () => {
    dropZone.style.outlineColor = COLOR_SCHEME.ERROR;
    dropZone.style.outlineStyle = 'solid';
    dropZoneText.innerHTML = TEXT.ERROR;
}

/**
 * Load HTML Elements.
 */
window.addEventListener('load', () => {
    dropZone = document.querySelector('#drop_zone')!;
    dropZoneText = document.querySelector('#drop_zone_text')!;
});
