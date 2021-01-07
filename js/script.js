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
    movies: []
};

// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };


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

let container = document.querySelector('.promo__interactive-list'),
    form = document.forms[1];

container.innerHTML = '';

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    // creation valide name of film from form
    let film;
    String(form.elements[0].value).length > 21 ? film = String(form.elements[0].value).slice(0, 21) + '...' : film = form.elements[0].value;
    
    movieDB.movies.push(film);

    let len = movieDB.movies.length;

    container.innerHTML += `
    <li class="promo__interactive-item" data-id =${len - 1}>${len}. ${movieDB.movies[len - 1]}
        <div class="delete"></div>
    </li>`;

    document.querySelectorAll('.delete').forEach(elem =>{
        elem.addEventListener('click', (e)=>{
            e.preventDefault();
            // next string is deleting element from array
            // movieDB.movies.splice(elem.parentNode.dataset.id ,elem.parentNode.dataset.id+1);
            elem.parentNode.remove();            
        });
    });

    form.elements[1].checked === true ? console.log('add favorite film') : console.log('just usual film');
});

   


