/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const copyDB = {
    movies: [
        "Удоли",
        "АААААААААААААААААА",
        "Ужос",
        "СмЭЭЭЭЭрт",
        "Нихринаси"
    ]
};

// 1) task solution
// console.log(document.getElementsByClassName('promo__adv')[0]);
document.getElementsByClassName('promo__adv')[0].remove();

// 2) task solution
document.getElementsByClassName('promo__genre')[0].textContent = 'ДРАМА';
// console.log(document.getElementsByClassName('promo__genre')[0].textContent);

// 3) task solution
let promo = document.getElementsByClassName('promo__bg');
promo[0].style.cssText = 'height:360px; background:url("img/bg.jpg") center center/cover no-repeat;background-position:top;padding:107px 0 0 61px';
// console.log(document.styleSheets); 

// 4 and 5) task solution
movieDB.movies = movieDB.movies.sort();

let container = document.querySelector('.promo__interactive-list');
container.innerHTML = '';

for (let i = 0; i < movieDB.movies.length; i++){
    container.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${movieDB.movies[i]}
        <div class="delete"></div>
    </li>`;
}

console.log(container);

// let list = document.querySelectorAll('.promo__interactive-item');

// movieDB.movies = movieDB.movies.sort();

// list.forEach((item, i) =>{
//     item.textContent = `${i + 1}. ${movieDB.movies[i]}`;
//     // console.log(copyDB.movies[i]);
//     i++;
// });




// // for (let i = 0; i < 5; i++){
// //     item[i].textContent = `${i + 1}) ${copyDB.movies[i]}`;
// //     console.log(copyDB.movies[i]);
// // }
// let butt = document.querySelector('button');
// console.log(butt);

// butt.addEventListener('click', (e)=>{
//     e.preventDefault();
//     // console.log('fgfhg');
//     // alert('sdnjk');
    
// });