import NavWatcher from './modules/nav-watcher';

function changeLocCallback(objLoc) {
    console.log('Параметры коллбека перехода: ', objLoc);

    let regex = /c(\d+)/mi;
    let chat_id = null;
    let res = null;

    if (objLoc.sel && (res = objLoc.sel.match(regex))) {
        chat_id = res[1];

        console.log('Оп! Мы вбеседе с id: ', chat_id);
    }
}

window.navWatcher = new NavWatcher({
    callback: changeLocCallback,
    context: window,
});