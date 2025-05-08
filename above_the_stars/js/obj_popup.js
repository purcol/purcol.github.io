// Солнце
const SunPopup = new Popup({
    id: "sun-popup",
    backgroundColor: "#040013ff",
    borderWidth: "10px",
    borderColor: "#f39f18ff",
    titleColor: "#f39f18ff",
    textColor: "#f39f18ff",
    //---------------------
    title: "Cолнце",
    content: `возраст: 4,5 млрд. лет
        радиус: 7⋅10⁷ км
        масса:1,9885⋅10³⁰ кг
        Средняя плотность: 1,4 г/см³ (в 1,4 раза больше, чем у воды)

        Солнце — ближайшая к Земле звезда. 
        Средняя удалённость Солнца от Земли — 149,6 млн км — приблизительно равна астрономической единице.
        99.8% солнечной системы составляет наша звёздочка.
        Мы удйём клееть ласты вместе с солнцем через 5.5 милиарда лет.`,
    showImmediately: false
});

function open_sun(){
    SunPopup.show()
}

// Меркурий
const MercuryPopup = new Popup({
    id: "mercury-popup",
    backgroundColor: "#040013ff",
    borderWidth: "10px",
    borderColor: "#f8f8fbff",
    titleColor: "#f8f8fbff",
    textColor: "#f8f8fbff",
    //---------------------
    title: "Меркурий",
    content: `возраст: 4,5 млрд. лет
        радиус: 2439,7 км
        масса: 3,33*10²³ кг

        Название планеты означает бога торговли.
        Радиус ядра состовляет более 1800 км.
        А находится Меркурий в среднем 149,5 млн. км от земли.
        `,
    showImmediately: false
});

function open_mercury(){
    MercuryPopup.show()
}

// Венера
const VenusPopup = new Popup({
    id: "venus-popup",
    backgroundColor: "#040013ff",
    borderWidth: "10px",
    borderColor: "#ffcf48ff",
    titleColor: "#ffcf48ff",
    textColor: "#ffcf48ff",
    //---------------------
    title: "Венера",
    content: `возраст: 4,5 млрд. лет
        радиус: 6052 км
        масса: 4,86⋅10²⁴ кг

        Названа в честь богини красоты.
        Атмосфера Венеры, самая плотная среди землеподобных планет, и состоит главным образом из углекислого газа.
        Находится Венера в среднем 100 млн. км от земли.
        `,
    showImmediately: false
});

function open_venus(){
    VenusPopup.show()
}

// Земля
const EarthPopup = new Popup({
    id: "earth-popup",
    backgroundColor: "#040013ff",
    borderWidth: "10px",
    borderColor: "#98fb98ff",
    titleColor: "#98fb98ff",
    textColor: "#98fb98ff",
    //---------------------
    title: "Земля",
    content: `возраст: 4,5 млрд. лет
        радиус: 6378 км
        масса: 5,97⋅10²⁴ кг

        Единственая планета в системе наполненая жизнью!... и нами.
        На пятом месте по размерам спутников.
        `,
    showImmediately: false
});

function open_earth(){
    EarthPopup.show()
}

// Марс
const MarsPopup = new Popup({
    id: "mars-popup",
    backgroundColor: "#040013ff",
    borderWidth: "10px",
    borderColor: "#e52b50ff",
    titleColor: "#e52b50ff",
    textColor: "#e52b50ff",
    //---------------------
    title: "Марс",
    content: `возраст: 4,5 млрд. лет
        радиус: 3389 км
        масса: 6,4171⋅10²³ кг

        Имеет имя обозначающее бога войны.
        Марс почти в 2 раза меньше земли!
        Находится Марс в среднем 228,38 млн. км от земли.
        `,
    showImmediately: false
});

function open_mars(){
    MarsPopup.show()
}

// Юпитер
const JupiterPopup = new Popup({
    id: "jupiter-popup",
    backgroundColor: "#040013ff",
    borderWidth: "10px",
    borderColor: "#c87137ff",
    titleColor: "#c87137ff",
    textColor: "#c87137ff",
    //---------------------
    title: "Юпитер",
    content: `возраст: 4,6 млрд. лет
        радиус: 69911 км
        масса: 1,898⋅10²⁷ кг

        Имеет имя обозначающее бога неба, дневного света, грозы.
        Юпитер — самая большая планета в Солнечной системе!
        Один из трёх газовых гигантов.
        У планеты целых 95 известных спутников! Мы не сможем показать столько!
        `,
    showImmediately: false
});

function open_jupiter(){
    JupiterPopup.show()
}

// Сатурн
const SaturnPopup = new Popup({
    id: "saturn-popup",
    backgroundColor: "#040013ff",
    borderWidth: "10px",
    borderColor: "#e9ddafff",
    titleColor: "#e9ddafff",
    textColor: "#e9ddafff",
    //---------------------
    title: "Cатурн",
    content: `возраст: 4,5 млрд. лет
        радиус: 58232 км
        масса: 5,683⋅10²⁶ кг

        Имя соответствует греческому Кроносу — богу земледелия, который, по мифическому сюжету, пожирал своих детей.
        Cатурн — вторая по размерам планета в Солнечной системе!
        Один из трёх газовых гигантов.
        Имеет 24 регулярных спутника, к сожалению нам не получается показать их всех.
        `,
    showImmediately: false
});

function open_saturn(){
    SaturnPopup.show()
}

// Луна
const MoonPopup = new Popup({
    id: "moon-popup",
    backgroundColor: "#040013ff",
    borderWidth: "10px",
    borderColor: "#c5d0e6ff",
    titleColor: "#c5d0e6ff",
    textColor: "#c5d0e6ff",
    //---------------------
    title: "Луна",
    content: `возраст: 4,35 млрд. лет
        радиус: 1737 км
        масса: 7,3477⋅10²² кг

        Луна всегда повёрнута к земле одной стороной.
        Наш спутник это один из не многих обьектов на котором побывал человек.
        Среднее расстояние между центрами Земли и Луны — 384 467 км. Но каждый год луна отдаляется от земли на целых 3,8 сантиметра!
        `,
    showImmediately: false
});

function open_moon(){
    MoonPopup.show()
}

// Фобос
const PhobosPopup = new Popup({
    id: "phobos-popup",
    backgroundColor: "#040013ff",
    borderWidth: "10px",
    borderColor: "#ab274fff",
    titleColor: "#ab274fff",
    textColor: "#ab274fff",
    //---------------------
    title: "Фобос",
    content: `возраст: 4,503 млрд. лет
        радиус: 11,25 км
        масса: 1,072⋅10¹⁶ кг

        Может в относительно близком времени исчезнуть!
        Один из двух спутников Марса.
        `,
    showImmediately: false
});

function open_phobos(){
    PhobosPopup.show()
}

// Деймос
const DeimosPopup = new Popup({
    id: "deimos-popup",
    backgroundColor: "#040013ff",
    borderWidth: "10px",
    borderColor: "#ab274fff",
    titleColor: "#ab274fff",
    textColor: "#ab274fff",
    //---------------------
    title: "Деймос",
    content: `возраст: 4,503 млрд. лет
        радиус: 6,2 км
        масса: 1,48⋅10¹⁵ кг

        Cамый маленький спутник у планет земной группы.
        Один из двух спутников Марса.
        `,
    showImmediately: false
});

function open_deimoss(){
    DeimosPopup.show()
}

// Ио
const IoPopup = new Popup({
    id: "io-popup",
    backgroundColor: "#040013ff",
    borderWidth: "10px",
    borderColor: "#f7e532ff",
    titleColor: "#f7e532ff",
    textColor: "#f7e532ff",
    //---------------------
    title: "Ио",
    content: `возраст: ≈4,5 млрд. лет
        радиус: 1821,6 км
        масса: 8,9319⋅10²² кг

        Самый близкий к планете из четырёх галилеевых спутников. 
        Назван в честь мифологической Ио — жрицы Геры и возлюбленной Зевса.
        (галилеевы спутники - это собирательное название четырёх крупнейших спутников Юпитера)
        `,
    showImmediately: false
});

function open_io(){
    IoPopup.show()
}

// Ио 
const EuropaPopup = new Popup({
    id: "europa-popup",
    backgroundColor: "#040013ff",
    borderWidth: "10px",
    borderColor: "#f4eed7ff",
    titleColor: "#f4eed7ff",
    textColor: "#f4eed7ff",
    //---------------------
    title: "Европа",
    content: `возраст: 4,5 млрд. лет
        радиус: 1560,8 км
        масса: 4,8017⋅10²² кг

        Шестой по отдалённости от планеты спутник Юпитера.
        Наименьший из четырёх галилеевых спутников. 
        Обнаружена в 1610 году Галилео Галилеем и, вероятно, Симоном Марием в то же самое время.
        (галилеевы спутники - это собирательное название четырёх крупнейших спутников Юпитера)
        `,
    showImmediately: false
});

function open_europa(){
    EuropaPopup.show()
}

// Ганимед  
const GanymedePopup = new Popup({
    id: "ganymede-popup",
    backgroundColor: "#040013ff",
    borderWidth: "10px",
    borderColor: "#eee3bcff",
    titleColor: "#eee3bcff",
    textColor: "#eee3bcff",
    //---------------------
    title: "Ганимед",
    content: `возраст: 4,5 млрд. лет
        радиус: 5268 км
        масса: 1,4819⋅10²³ кг

        Седьмой по отдалённости от планеты спутник Юпитера.
        Крупнейший спутник в Солнечной системе.
        (галилеевы спутники - это собирательное название четырёх крупнейших спутников Юпитера)
        `,
    showImmediately: false
});

function open_ganymede(){
    GanymedePopup.show()
}

// Каллисто 
const CallistoPopup = new Popup({
    id: "callisto-popup",
    backgroundColor: "#040013ff",
    borderWidth: "10px",
    borderColor: "#cc9b7dff",
    titleColor: "#cc9b7dff",
    textColor: "#cc9b7dff",
    //---------------------
    title: "Каллисто",
    content: `возраст: 4,5 млрд. лет
        радиус: 2410,3 км
        масса: 1,075⋅10²³ кг

        Является третьим по величине спутником в Солнечной системе
        Один из четырёх галилеевых спутников.
        (галилеевы спутники - это собирательное название четырёх крупнейших спутников Юпитера)
        `,
    showImmediately: false
});

function open_callisto(){
    CallistoPopup.show()
}