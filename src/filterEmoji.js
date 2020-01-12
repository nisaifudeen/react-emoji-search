import emojiList from "./emojiList.json";

export default function filterEmoji(searchValue, limit) {
    return emojiList.filter(function (emoji) {
        if (emoji.title.toLowerCase().includes(searchValue.toLowerCase())) {
            return true;
        }

        if (emoji.keywords.includes(searchValue)) {
            return true;
        }

        return false;
    })
}