export const fetchNews = async () => {
    try {
        const response = await fetch('https://dspartners.pro/api/news');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const newsData = await response.json();
        return newsData;

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const fetchThemes = async () => {
    try {
        const response = await fetch('https://dspartners.pro/api/themes');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const themesList = await response.json();
        return themesList;

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


export const fetchArticle = async (id) => {
    try {
        const response = await fetch(`https://dspartners.pro/api/news/${id}`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log(response)
        const article = await response.json();
        return article;

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};