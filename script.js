
// notice 
document.querySelector("#notice_continue").addEventListener("click", () => {
    document.querySelector(".alert_box").style.display = 'none';
    document.body.classList.remove('no-scroll');
});

// Initially disable scrolling
document.body.classList.add('no-scroll');


// Array of image URLs
const images = [
    'url(images/portrait/1.jpg)',
    'url(images/portrait/2.jpg)',
    'url(images/portrait/3.jpg)',
    'url(images/portrait/4.jpg)',
    'url(images/portrait/5.jpg)',
    'url(images/portrait/6.jpg)',
    'url(images/portrait/7.jpg)',
    'url(images/portrait/8.jpg)',
    'url(images/portrait/9.jpg)',
    'url(images/portrait/10.jpg)',
    'url(images/portrait/1.jpg)',
    'url(images/portrait/2.jpg)',
    'url(images/portrait/3.jpg)',
    'url(images/portrait/4.jpg)',
    'url(images/portrait/5.jpg)',
    'url(images/portrait/6.jpg)',
    'url(images/portrait/7.jpg)',
    'url(images/portrait/8.jpg)',
    'url(images/portrait/9.jpg)',
    'url(images/portrait/10.jpg)'
];
  
// Select all divs with class 'image'
const imageDivs = document.querySelectorAll('.image');
  
// Loop through each div and set the background image
imageDivs.forEach((div, index) => {
    div.style.backgroundImage = images[index];
    div.style.backgroundSize = 'cover';
    div.style.backgroundPosition = 'center'; 
});
  


// Array of designs URLs
const designs = [
    'url(https://cdn.dribbble.com/userupload/16608487/file/original-9d413a9b5324a9409331b76450df8efc.png?resize=320x240&vertical=center)',
    'url(https://cdn.dribbble.com/userupload/16610679/file/original-73dc8e9b5af8c7c0a21a6b079e4a2630.png?resize=320x240&vertical=center)',
    'url(https://cdn.dribbble.com/userupload/16600461/file/original-ad51baa53aa3982f525a9193fab5bea2.png?resize=320x240&vertical=center)',
    'url(https://cdn.dribbble.com/userupload/16612494/file/original-eaf94994160d250545fc963b1ab99262.png?resize=320x240&vertical=center)',
    'url(https://cdn.dribbble.com/userupload/16607342/file/original-fe789dc702995f337871ae04c1edc1e5.jpg?resize=320x240&vertical=center)',
    'url(https://cdn.dribbble.com/userupload/16598844/file/original-916e1dddb86f985be83c3233e2373705.png?crop=0x0-1600x1200&resize=320x240&vertical=center)',
    'url(https://cdn.dribbble.com/userupload/16609398/file/original-006d47622e1e73683d69d5e49a243949.png?resize=320x240&vertical=center)',
    'url(https://cdn.dribbble.com/userupload/16609964/file/original-c968517c7b3f085d4bc7aa498a6cea1e.jpg?resize=320x240&vertical=center)',
    'url(https://cdn.dribbble.com/userupload/16603107/file/original-7c3518e6ce2302cbcb74153cc55d17d5.jpg?resize=320x240&vertical=center)',
    'url(https://cdn.dribbble.com/userupload/16604554/file/original-2a14e0395d2a8caae109e5d20b797a4a.png?resize=320x240&vertical=center)',
    'url(https://cdn.dribbble.com/userupload/16583423/file/still-2c29a449470f29205c3a554fce126557.png?resize=320x240&vertical=center)',
    'url(https://cdn.dribbble.com/userupload/16609993/file/original-3839f7e13b60a1e9402ea2cbd88d5555.png?resize=320x240&vertical=center)',
    'url(https://cdn.dribbble.com/userupload/15569945/file/original-d3f4c717d55a9b90ed5929ccbe58e0a4.png?resize=320x240&vertical=center)',
    'url(https://cdn.dribbble.com/userupload/16598282/file/original-4f7b2dca1bd547ec22f819464d3a465a.png?resize=320x240&vertical=center)',
    'url(https://cdn.dribbble.com/userupload/16598711/file/still-a8bf56cec3d13013e5748d7aa6d097c6.png?resize=320x240&vertical=center)',
    'url(https://cdn.dribbble.com/userupload/16612029/file/original-44d061f55bbaf4a0dfe1999bbbc355a3.jpg?resize=320x240&vertical=center)',
    'url(https://cdn.dribbble.com/userupload/16449818/file/original-ad6706efc3e55968f1c309b4fc003391.png?resize=320x240&vertical=center)',
    'url(https://cdn.dribbble.com/userupload/16587791/file/original-b30e66d8c7644381b20d12e61501fc39.png?resize=320x240&vertical=center)',
    'url(https://cdn.dribbble.com/userupload/16603661/file/original-738b5c6e07cb8af84e82c4423bcb1a4f.jpg?crop=0x0-4800x3600&resize=320x240&vertical=center)',
    'url(https://cdn.dribbble.com/userupload/16602941/file/original-d2f896c7468c6a72346754c9140e978e.png?resize=320x240&vertical=center)',
    'url(https://cdn.dribbble.com/userupload/16603678/file/original-3b8b3138ed4630ab64c0380ede6ea683.jpg?resize=320x240&vertical=center)',
    'url(https://cdn.dribbble.com/userupload/16516656/file/still-66b2731b34c35f5d304dd564acf77292.png?resize=320x240&vertical=center)',
    'url(https://cdn.dribbble.com/userupload/16601754/file/original-732c784c0d7ff1fb8d36f57ae0929697.png?crop=0x0-4800x3600&resize=320x240&vertical=center)',
    'url(https://cdn.dribbble.com/userupload/16606472/file/still-d543dd3700814b93dff90568dc545880.png?resize=320x240&vertical=center)',
    'url(https://cdn.dribbble.com/userupload/16604417/file/original-29e84d1a020958ffa291dd6980176249.png?resize=320x240&vertical=center)'

];
  
// Select all divs with class 'image'
const designsDivs = document.querySelectorAll('.design');
  
// Loop through each div and set the background image
designsDivs.forEach((div, index) => {
    div.style.backgroundImage = designs[index];
    div.style.backgroundSize = 'cover';
    div.style.backgroundPosition = 'center'; 
});

