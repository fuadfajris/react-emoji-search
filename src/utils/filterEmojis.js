export const filterEmojis = ({emojisData, searchText="", maxResult=20}) => {

    const filteredEmojis = emojisData.filter(emoji => {
        if (emoji.title.toLowerCase().includes(searchText.toLocaleLowerCase())) {
            return true;
        }

        if (emoji.keywords.toLowerCase().includes(searchText.toLocaleLowerCase())) {
            return true;
        }

        return false;
    });

    return filteredEmojis.splice(0, maxResult);

};