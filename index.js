// document.querySelectorAll('.title').forEach(title => {
//     title.addEventListener('click', () => {
//         const currentIndex = parseInt(document.querySelector('.title.active').getAttribute('data-index'));
//         const clickedIndex = parseInt(title.getAttribute('data-index'));

//         if (currentIndex !== clickedIndex) {
//             // Titles by index
//             const currentTitle = document.querySelector(`.title[data-index="${currentIndex}"]`);
//             const clickedTitle = document.querySelector(`.title[data-index="${clickedIndex}"]`);
//             const thirdTitleIndex = 6 - currentIndex - clickedIndex;  // Index sum should be 6 for 3 titles
//             const thirdTitle = document.querySelector(`.title[data-index="${thirdTitleIndex}"]`);

//             // Slide animations
//             if (clickedIndex === 2) {
//                 clickedTitle.style.left = "20px"; // Move clicked title to the left (to the place of Title 1)
//                 currentTitle.style.transform = "translateX(-120px)"; // Slide Title 1 to the left
//                 thirdTitle.style.transform = "translateX(-120px)"; // Slide Title 3 to the left
//             } else if (clickedIndex === 3) {
//                 clickedTitle.style.left = "20px"; // Move clicked title to the left (to the place of Title 1)
//                 currentTitle.style.transform = "translateX(-240px)"; // Slide Title 1 to the far left (Title 3 position)
//                 thirdTitle.style.transform = "translateX(-120px)"; // Slide Title 2 to the left (Title 1 position)
//             }

//             // Update the active title
//             currentTitle.classList.remove('active');
//             clickedTitle.classList.add('active');

//             // Rearrange indices after animation
//             setTimeout(() => {
//                 clickedTitle.setAttribute('data-index', "1");
//                 currentTitle.setAttribute('data-index', thirdTitleIndex.toString());
//                 thirdTitle.setAttribute('data-index', clickedIndex.toString());

//                 // Reset transform to original positions
//                 currentTitle.style.transform = "translateX(0)";
//                 thirdTitle.style.transform = "translateX(0)";
//             }, 500);
//         }
//     });
// });


