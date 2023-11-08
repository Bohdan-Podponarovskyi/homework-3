let birthYear = prompt('Pік народження');
let livingCity = prompt('Місто в якому живете');
let favoriteSport = prompt('Улюблений вид спорту');

if (birthYear != null) {
    convertedBirthYear = Number(birthYear);

    switch (isNaN(convertedBirthYear)) {
        case true:
            ageMessage = 'Треба було ввести число';
            break
        default:
            let age = new Date().getFullYear() - convertedBirthYear;
            ageMessage = `Вам ${age} роки(ів)`;
    }
} else {
    ageMessage = 'Шкода, що Ви не захотіли ввести свій рік народження';
}

if (livingCity != null) {
    convertedlivingCity = livingCity.charAt(0).toUpperCase() + livingCity.slice(1).toLowerCase();

    switch (convertedlivingCity) {
        case '':
            cityMessage = 'Треба було вказати місто';
            break
        case 'Київ':
            cityMessage = 'Ти живеш у столиці України';
            break
        case 'Вашингтон':
            cityMessage = 'Ти живеш у столиці США';
            break
        case 'Лондон':
            cityMessage = 'Ти живеш у столиці Великобританії';
            break
        default:
            cityMessage = `Ти живеш у місті ${convertedlivingCity}`;
    }
} else {
    cityMessage = 'Шкода, що Ви не захотіли ввести своє місто';
}

if (favoriteSport != null) {
    convertedFavoriteSport = favoriteSport.toLowerCase();

    switch (convertedFavoriteSport) {
        case '':
            sportMessage = 'Треба було вказати улюблений вид спорту';
            break
        case 'бокс':
            sportMessage = 'Круто! Хочеш стати Тайсоном?';
            break
        case 'футбол':
            sportMessage = 'Круто! Хочеш стати Зіданом?';
            break
        case 'гонки':
            sportMessage = 'Круто! Хочеш стати Шумахером';
            break
        default:
            sportMessage = `Любиш ${convertedFavoriteSport}? Красавчик!`;
    }
} else {
    sportMessage = 'Шкода, що Ви не захотіли ввести свій улюблений вид спорту';
}

alert(`${ageMessage} \n${cityMessage} \n${sportMessage}`);