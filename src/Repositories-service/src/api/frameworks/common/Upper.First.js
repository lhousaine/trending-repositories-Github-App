export default function UpperFirst(word) {
    if (word.length === 1) {
        return word.toUpperCase();
    }
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
}
