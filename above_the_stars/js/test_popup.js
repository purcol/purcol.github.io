const testPopup = new Popup({
    id: "test-popup",
    title: "My First Popup",
    content: `
        An example popup.
        Можно использовать любое кол-во строк.`,
    showImmediately: false
});

function open_sun(){
    testPopup.show()
}