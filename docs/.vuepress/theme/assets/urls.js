const urls = {
    githubHome: "https://github.com/WalterInKitchen",
    emailAddress: "walterInKitchen@outlook.com",
    telegramUserName: "walterinkitchen",
};

const homeAddress = () => {
    const base = window.location.origin;
    return base + '/';
}

export {urls, homeAddress};