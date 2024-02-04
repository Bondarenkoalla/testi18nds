import { fetchNews, fetchArticle } from '../api';
import { createListItem, createArticle } from '../helpers';
import { sliderInit } from './splide';

const articleContainer = document.querySelector('.articleContainer')
const newsList = document.querySelector('.newsSection__list')

document.addEventListener('DOMContentLoaded', async function () {

    const pathSegments = window.location.pathname.split('/');
    const articleId = pathSegments[pathSegments.length - 1];

    let data = [];

    try {
        if (articleId) {
            const specificArticle = await fetchArticle(articleId);
            renderSpecificArticle(specificArticle);
        } else {
            console.log('articleId is undefined or null')
        }

    } catch (error) {
        console.error('Error :', error);
    }

    function renderSpecificArticle(article) {
        const div = createArticle(article);
        articleContainer.appendChild(div);
    }

    try {
        data = await fetchNews();
        renderNews(data);
    } catch (error) {
        console.error('Error in ExampleFile:', error);
    }


    function renderNews(newsData) {
        newsList.innerHTML = '';
        if (newsData.length === 0) {
            noResult.classList.remove('d-none')
        } else {
            for (const item of newsData) {
                const li = createListItem(item);
                newsList.appendChild(li);
            }
        }
    }

    if (newsList) {
        sliderInit();
    }
});
