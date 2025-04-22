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

function open_test(){
    testPopup.show()
}

const PlanetsPopup = new Popup({
    id: "test-popup",
    title: "Планеты",
    backgroundColor: "#040013ff",
    borderWidth: "10px",
    borderColor: "#fbf7ffff",
    titleColor: "#fbf7ffff",
    textColor: "#fbf7ffff",
    content: `Статьи о планетах`,
    showImmediately: false
});

function open_planets(){
    PlanetsPopup.show()
}

const SatellitesPopup = new Popup({
    id: "test-popup",
    title: "Спутники",
    backgroundColor: "#040013ff",
    borderWidth: "10px",
    borderColor: "#fbf7ffff",
    titleColor: "#fbf7ffff",
    textColor: "#fbf7ffff",
    content: `Статьи о спутниках`,
    showImmediately: false
});

function open_satellites(){
    SatellitesPopup.show()
}