const box = document.querySelector('.box');

let obserer = new MutationObserver(mutationRecords => {
    console.log(mutationRecords);
});

obserer.observe(box, {
    childList: true,
})