export function createArticle(item) {
    const div = document.createElement('div');
    div.className = 'row';

    div.innerHTML = `             
        <h2 class="col-12 offset-lg-2 col-lg-6 articleSection__heading  typography__h2">${item.title}</h2>
        <div class="offset-lg-2  news__wrapper mb-4">
            <p class="news__data">${item.pub_date}</p>
            <p class="news__time">${item.read_time} min reading</p>
        </div>
        <p class="col-12 offset-lg-2 col-lg-6 news__text news__text_full mb-4">${item.content}</p>
        <img class="col-12 offset-lg-2 col-lg-8 articleSection__image"  src='https://dspartners.pro/${item.image}'
         />    
        <p class="offset-lg-2 news__theme mt-4">${item.theme}</p>
      `;
    return div;
}