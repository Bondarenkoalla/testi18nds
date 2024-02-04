export function createListItem(item) {
    const li = document.createElement('li');
    li.className = 'splide__slide';

    li.innerHTML = `
        <a href='/news/${item.id}'>
            <div class="news__image" style="background-image: url('${item.image}');"></div>
            <h3 class="news__heading typography typography__subtitle">${item.title}</h3>
            <div class="news__wrapper">
                <p class="typography news__data">${item.pub_date}</p>
                <p class="typography news__time">${item.read_time} min reading</p>
            </div>
            <p class="typography news__text">${item.content}</p>
            <p class="typography news__theme">${item.theme}</p>
        </a>`;
    return li;
}