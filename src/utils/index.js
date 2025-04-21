export const getFavorites = () => {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
}

export const addFavorite = phone => {
    const favorites = getFavorites();
    const isExist = favorites.find(p => p.id === phone.id);

    if (isExist) {
        console.log('Phone already exists!');
        return;
    }

    favorites.push(phone);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}
