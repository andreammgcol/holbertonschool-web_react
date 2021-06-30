export const getFullYear = () => new Date().getFullYear();

export const getFooterCopy = (isIndex) => {
    console.log(isIndex);
    if (isIndex) {
        return "Holberton School";
    } else {
        return "Holberton School main dashboard";
    }
}
