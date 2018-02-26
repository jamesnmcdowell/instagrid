let imgArray = [
  {
    src: "https://images.pexels.com/photos/545964/pexels-photo-545964.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    likes: 2,
    comments: 3
  },
  {
    src: "https://demos.scotch.io/scroll-magic-templates/zoomer/wp-content/themes/forty/demos/scroll-magic-templates/zoomer/img/tall.jpg",
    likes: 2,
    comments: 3
  },
  {
    src: "https://images.pexels.com/photos/261397/pexels-photo-261397.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    likes: 2,
    comments: 3
  },
  {
    src: "https://images.pexels.com/photos/144251/yosemite-national-park-landscape-california-144251.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    likes: 2,
    comments: 3
  },
  {
    src: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    likes: 2,
    comments: 3
  },
  {
    src: "https://images.pexels.com/photos/161784/landscape-thor-s-hammer-bryce-canyon-national-park-161784.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
    likes: 2,
    comments: 3
  },
  {
    src: "https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    likes: 2,
    comments: 3
  },
  {
    src: "https://images.pexels.com/photos/459028/pexels-photo-459028.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    likes: 2,
    comments: 3
  },
  {
    src: "https://images.pexels.com/photos/221148/pexels-photo-221148.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
    likes: 2,
    comments: 3
  }
];

let allImagesLen = imgArray.length;
let gallery = document.querySelector(".image-gallery");
let lightbox = document.querySelector('.lightbox-overlay');
let lightboxFocus = document.querySelector('.lightbox-wrapper img');
let prevImgBtn = document.querySelector('.control-left');
let nextImgBtn = document.querySelector('.control-right');
let lightboxWrapper = document.querySelector('.lightbox-wrapper');
let mainGrid = document.querySelector('.main-grid');
let imgCointainer = document.querySelector('.main-grid .image');

imgArray.forEach( (image, i) => {
  let imageWrapper = document.createElement('a');
  let imageTag = document.createElement('img');
  imageTag.dataset.imgIndex = i;
  imageTag.src = image.src;
  imageWrapper.appendChild(imageTag);
  imageWrapper.classList.add("gallery-item");
  gallery.appendChild(imageWrapper);

  imageWrapper.addEventListener('click', function (event) {
    lightboxFocus.dataset.imgIndex = i;
    lightboxFocus.setAttribute('src', image.src);
    lightbox.classList.toggle('open');
  })
});

let movePrev = () => {
  let currentIndex = lightboxFocus.dataset.imgIndex;
  let prevIdx = (lightboxFocus.dataset.imgIndex - 1) < 0 ? allImagesLen - 1 : lightboxFocus.dataset.imgIndex - 1;
  lightboxFocus.setAttribute('src', imgArray[prevIdx].src);
  lightboxFocus.dataset.imgIndex = prevIdx;
  };

let moveNext = () => {
  let currentIndex = lightboxFocus.dataset.imgIndex;
  let nextIdx = (currentIndex + 1) % allImagesLen;
  lightboxFocus.setAttribute('src', imgArray[nextIdx].src);
  lightboxFocus.dataset.imgIndex = nextIdx;
  };

prevImgBtn.addEventListener('click', movePrev);
nextImgBtn.addEventListener('click', moveNext);

lightbox.addEventListener('click', (e) => {
  let isClickInside1 = lightboxWrapper.contains(e.target);
  let isClickInside2 = mainGrid.contains(e.target);
  let isClickInside3 = imgCointainer.contains(e.target);
  if (e.target === lightboxWrapper | e.target === mainGrid | e.target === imgCointainer ) {
    lightbox.classList.toggle('open');
  }
});

document.onkeydown = (e) => {
  if (lightbox.classList.contains('open')) {
    e = e || window.event;
    let isEscape = "key" in e ? e.key == "Escape" || e.key == "Esc" : e.keyCode == 27
    if (isEscape) lightbox.classList.toggle('open');
    let isLeft = "key" in e ? e.key == "ArrowLeft" : e.keyCode == 37;
    if (isLeft) movePrev();
    let isRight = "key" in e ? e.key == "ArrowRight" : e.keyCode == 39;
    if (isRight) moveNext();
  }
};
