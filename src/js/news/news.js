import { fetchNews, fetchThemes } from '../api';
import { sliderInit } from './splide';
import { createListItem } from '../helpers';

document.addEventListener('DOMContentLoaded', async function () {
    const themesList = document.querySelector('.newsSection__themes');
    const newsList = document.querySelector('.newsSection__list');
    const resetFilterButton = document.getElementById('resetFilter');
    const searchInput = document.querySelector('.newsSection__input');
    const crossButton = document.querySelector('.newsSection__cross');
    const noResult = document.querySelector('.newsSection__noResult');
    const splide = document.querySelector('.splide');

    let activeThemeButton = null;
    let data = [];
    let themes = [];

    try {
        data = await fetchNews();
        themes = await fetchThemes();
        initializeThemes(themes);
        resetFilterButton?.addEventListener('click', resetAll);
        searchInput.addEventListener('input', handleSearchInput);
        searchInput.addEventListener('focus', handleFocusInput);
        crossButton.addEventListener('click', resetAll);
        renderNews(data);
    } catch (error) {
        console.error('Error in ExampleFile:', error);
    }

    function initializeThemes(themesData) {
        if (themesData && themesData.themes && Array.isArray(themesData.themes)) {
            for (const theme of themesData.themes) {
                const li = document.createElement('li');
                li.className = 'newsSection__themeWrapper';
                const button = document.createElement('button');
                button.className = 'typography newsSection__theme';
                button.textContent = theme;
                button.addEventListener('click', () => handleThemeClick(theme, button));
                li.appendChild(button);
                themesList.appendChild(li);
            }
        } else {
            console.error("Invalid themes data in themes.json");
        }
    }

    function renderNews(newsData) {
        newsList.innerHTML = '';
        if (newsData.length === 0) {
            noResult.classList.remove('d-none')
        } else {
            for (const item of newsData) {
                const li = createListItem(item);
                newsList.appendChild(li);
                noResult.classList.add('d-none')

                if (splide && newsList) {
                    sliderInit();
                }
            }
        }
    }

    function resetFilter() {
        if (activeThemeButton) {
            activeThemeButton.classList.remove('newsSection__theme_active');
        } activeThemeButton = null;

        resetFilterButton?.classList.add('d-none');
    }

    function resetSearch() {
        searchInput.value = '';
        searchInput.classList.remove('newsSection__input_open');
        searchInput.blur();
    }

    function resetAll() {
        resetFilter();
        resetSearch();
        renderNews(data);
    }

    function handleThemeClick(theme, button) {
        newsList.innerHTML = '';
        if (activeThemeButton) {
            activeThemeButton.classList.remove('newsSection__theme_active');
        }
        activeThemeButton = button;
        button.classList.add('newsSection__theme_active');
        resetFilterButton?.classList.remove('d-none');
        filterNewsByTheme(theme);
        resetSearch();
    }


    function handleSearchInput() {
        //fix ios problem 
        newsList.innerHTML = '';
        resetFilter()
        if (splide && newsList) {
            sliderInit();
        }
        const searchTerm = searchInput.value.trim();
        filterNewsBySearch(searchTerm);
        if (searchTerm !== '') {
            searchInput.classList.add('newsSection__input_open');
            activeThemeButton?.classList.remove('newsSection__theme_active');
            resetFilterButton?.classList.remove('d-none');
        }
    }

    function handleFocusInput() {
        resetFilter()
        renderNews(data);
    }

    async function filterNewsByTheme(theme) {
        const filteredNews = data.filter(item => item.theme === theme);
        renderNews(filteredNews);
    }

    function filterNewsBySearch(searchTerm) {
        const filteredNews = data.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.theme.toLowerCase().includes(searchTerm.toLowerCase())
        );

        renderNews(filteredNews);
    }
});


