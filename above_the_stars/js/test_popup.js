const testPopup = new Popup({
    id: "test-popup",
    title: "My First Popup",
    backgroundColor: "#040013ff",
    borderWidth: "10px",
    borderColor: "#fbf7ffff",
    titleColor: "#fbf7ffff",
    textColor: "#fbf7ffff",
    content: `
        An example popup.
        Можно использовать любое кол-во строк.`,
    showImmediately: false
});

function open_sun(){
    testPopup.show()
}