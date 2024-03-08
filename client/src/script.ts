let box: HTMLDivElement;
let text: HTMLParagraphElement;

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
}

const handleClickImport = () => {
    alert(123);
}

/**
 * Handle drop of picture.
 *
 * @param event
 */
const dropHandler = (event: any) => {
    event.preventDefault();

    // Loading begins
    box.style.outlineColor = COLOR_SCHEME.WARNING;
    text.innerHTML = TEXT.LOADING;
}

/**
 * Handle dragging of picture over element.
 *
 * @param event
 */
const dragOverHandler = (event: any) => {
    event.preventDefault();

    box.style.outlineColor = COLOR_SCHEME.SUCCESS;
    box.style.outlineStyle = 'solid';
    text.innerHTML = TEXT.SUCCESS;
}

/**
 * Handle dragging out of element.
 *
 * @param event
 */
const dragLeaveHandler = (event: any) => {
    event.preventDefault();

    box.style.outlineStyle = 'none';
    text.innerHTML = TEXT.DEFAULT;
}

/**
 * Load HTML Elements.
 */
window.addEventListener('load', () => {
    // document.querySelector('#btnTest')?.addEventListener('click', async () => {
    //     await fetch('http://www.localhost:8080/test')
    //         .then(res => res.json())
    //         .then(res => alert(JSON.stringify(res)));
    // });

    box = document.querySelector('#drop_zone')!;
    text = document.querySelector('#drop_zone_text')!;
});
