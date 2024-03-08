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

    // Loading begins
    dropZone.style.outlineColor = COLOR_SCHEME.WARNING;
    dropZoneText.innerHTML = TEXT.LOADING;

    const file = event.dataTransfer.items[event.dataTransfer.items.length - 1];
    const image = file.getAsFile();
    if (!isImage(image)) {
        setErrorState();
        return;
    }

    const formData = new FormData();
    formData.append('image', image);

    await fetch('/upload', {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(console.log)
        .catch(err => console.error(err));
}

const prepareReader = (file: File) => {
    if (!isImage(file)) {
        setErrorState();
        return;
    }

    const reader = new FileReader();
    const img = new Image();

    reader.onload = (readerEvent: any) => {
        img.onload = () => resizeImage(img);
        img.src = readerEvent.target.result;
    }

    reader.readAsDataURL(file);
}

/**
 * Check if a file is an image
 * @param file
 * @returns
 */
const isImage = (file: File) => file.type.match(/image.*/);

const resizeImage = (image: HTMLImageElement) => {
    const WIDTH_HEIGHT_PX: number = 192;
    const canvas = document.createElement('canvas');
    canvas.width = WIDTH_HEIGHT_PX;
    canvas.height = WIDTH_HEIGHT_PX;
    canvas.getContext('2d')?.drawImage(image, 0, 0, WIDTH_HEIGHT_PX, WIDTH_HEIGHT_PX);
    const dataUrl: string = canvas.toDataURL('image/png');
    console.log(dataUrl);
}

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
    dropZone.innerHTML = TEXT.DEFAULT;
}

/**
 * Set the app to 'success' state.
 */
const setSuccessState = () => {
    dropZoneText.innerHTML = TEXT.SUCCESS;
    dropZone.style.outlineColor = COLOR_SCHEME.SUCCESS;
    dropZone.style.outlineStyle = 'solid';
}

/**
 * Set the app to 'error' state.
 */
const setErrorState = () => {
    dropZone.style.outlineColor = COLOR_SCHEME.ERROR;
    dropZoneText.innerHTML = TEXT.ERROR;
}

/**
 * Load HTML Elements.
 */
window.addEventListener('load', () => {
    dropZone = document.querySelector('#drop_zone')!;
    dropZoneText = document.querySelector('#drop_zone_text')!;
});
