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
    'SUCCESS' = '✅'
}

const handleClickImport = () => {
    alert(123);
}

const dropHandler = (event: any) => {
    event.preventDefault();

    box.style.outlineStyle = 'none';
    text.innerHTML = TEXT.DEFAULT;
}

const dragOverHandler = (event: any) => {
    event.preventDefault();

    box.style.outlineColor = COLOR_SCHEME.SUCCESS;
    box.style.outlineStyle = 'solid';
    text.innerHTML = TEXT.SUCCESS;
}

const dragLeaveHandler = (event: any) => {
        event.preventDefault();

        box.style.outlineStyle = 'none';
        text.innerHTML = TEXT.DEFAULT;
}

window.addEventListener('load', () => {
    // document.querySelector('#btnTest')?.addEventListener('click', async () => {
    //     await fetch('http://www.localhost:8080/test')
    //         .then(res => res.json())
    //         .then(res => alert(JSON.stringify(res)));
    // });

    box = document.querySelector('#drop_zone')!;
    text = document.querySelector('#drop_zone_text')!;
});
