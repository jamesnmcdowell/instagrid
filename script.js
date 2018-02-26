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
    src: "https://images.pexels.com/photos/144251/yosemite-national-park-landscape-california-144251.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
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
    src: "https://images.pexels.com/photos/459028/pexels-photo-459028.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
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

imgArray.forEach(function (image, i) {
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

prevImgBtn.addEventListener('click', () => {
  let currentIndex = lightboxFocus.dataset.imgIndex;
  let prevIdx = (lightboxFocus.dataset.imgIndex - 1) < 0 ? allImagesLen - 1 : lightboxFocus.dataset.imgIndex - 1;
  lightboxFocus.setAttribute('src', imgArray[prevIdx].src);
  lightboxFocus.dataset.imgIndex = prevIdx;
});

nextImgBtn.addEventListener('click', () => {
  let currentIndex = lightboxFocus.dataset.imgIndex;
  let nextIdx = (currentIndex + 1) % allImagesLen;
  lightboxFocus.setAttribute('src', imgArray[nextIdx].src);
  lightboxFocus.dataset.imgIndex = nextIdx;
});

lightbox.addEventListener('click', function (event) {
  let isClickInside = lightboxFocus.contains(event.target);
  let isClickInside2 = prevImgBtn.contains(event.target);
  let isClickInside3 = nextImgBtn.contains(event.target);
  //check if clicked outside of image lightbox
  if (!isClickInside && lightbox.classList.contains('open') && !isClickInside2 && !isClickInside3) {
    lightbox.classList.toggle('open');
    let selectedImg = document.querySelector('.images-container .selected');
  }
});

document.onkeydown = function (evt) {
  if (lightbox.classList.contains('open')) {
    evt = evt || window.event;
    let isEscape = false;
    if ("key" in evt) {
      isEscape = (evt.key == "Escape" || evt.key == "Esc");
    } else {
      isEscape = (evt.keyCode == 27);
    }
    if (isEscape) {
      lightbox.classList.toggle('open');
      let selectedImg = document.querySelector('.images-container .selected');
    }

    let isLeft = false;
    if ("key" in evt) {
      isLeft = (evt.key == "Left arrow");
    } else {
      isLeft = (evt.keyCode == 37);
    }
    if (isLeft) {
      movePrevious();
    }

    let isRight = false;
    if ("key" in evt) {
      isRight = (evt.key == "Right arrow");
    } else {
      isRight = (evt.keyCode == 39);
    }
    if (isRight) {

    }
  }
};
