// This is a mocked thing to simulate some kind of advertisement system. 
// This will just look the ad ids and fill the div with a color.
// Modifying this code will go against the rules of the code test
const colors = ['red', 'green', 'blue', 'deeppink'];
let i = 0;

const maybe = (rateOfSuccess) => {
    return Math.random() <= rateOfSuccess;
};

export const initInterval = (moreRealism = false) => setInterval(() => {
    // For more realism
    if (moreRealism) console.error("Some random error happened in the some ad");

    const sidebarAd = document.querySelector('#ad-placement-id-FAEEC2623F');
    const inContentAd = document.querySelector('#ad-placement-id-342AEA22AA');
    i = (i + 1) % colors.length; // cycle

    // For even more realism
    if (maybe(Math.random()) && moreRealism) console.error("Some other random error happened in some ad");

    if (sidebarAd) {
        sidebarAd.style.width = '320px';
        sidebarAd.style.height = '600px';
        sidebarAd.style.backgroundColor = colors[i];
        sidebarAd.textContent = 'this is a side ad';
    }

    if (inContentAd) {
        inContentAd.style.width = '320px';
        inContentAd.style.height = '200px';
        inContentAd.style.backgroundColor = colors[i];
        inContentAd.textContent = 'this is a content ad';
    }
}, 4000);
