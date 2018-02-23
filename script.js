let imgArray = [
  {
    img: "https://images.pexels.com/photos/545964/pexels-photo-545964.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    likes: 2,
    comments: 3
  },
  {
    img: "https://images.pexels.com/photos/459028/pexels-photo-459028.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    likes: 2,
    comments: 3
  },
  {
    img: "https://images.pexels.com/photos/261397/pexels-photo-261397.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    likes: 2,
    comments: 3
  },
  {
    img: "https://images.pexels.com/photos/144251/yosemite-national-park-landscape-california-144251.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    likes: 2,
    comments: 3
  },
  {
    img: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    likes: 2,
    comments: 3
  },
  {
    img: "https://images.pexels.com/photos/144251/yosemite-national-park-landscape-california-144251.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    likes: 2,
    comments: 3
  },
  {
    img: "https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    likes: 2,
    comments: 3
  },
  {
    img: "https://images.pexels.com/photos/459028/pexels-photo-459028.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    likes: 2,
    comments: 3
  },
  {
    img: "https://images.pexels.com/photos/459028/pexels-photo-459028.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    likes: 2,
    comments: 3
  }
];

function populateGallery() {
  let gallery = document.querySelector(".image-gallery");
  for (i = 0; i < imgArray.length; i++) {
    let imageWrapper = document.createElement('a');
    let image = document.createElement('img');
    image.setAttribute('src', imgArray[i].img);
    imageWrapper.appendChild(image);
    imageWrapper.classList.add("gallery-item");
    imageWrapper.classList.add(i);
    gallery.appendChild(imageWrapper);
  }
};

function populateLightbox() {
  let gallery = document.querySelector(".images-container");
  for (i = 0; i < imgArray.length; i++) {
    let imageWrapper = document.createElement('div');
    let image = document.createElement('img');
    image.setAttribute('src', imgArray[i].img);
    imageWrapper.appendChild(image);
    imageWrapper.classList.add("image");
    imageWrapper.classList.add(`img${i}`);
    gallery.appendChild(imageWrapper);
  }
};

populateGallery();
populateLightbox();


 let prevImgBtn = document.querySelector('.control-left');
 let nextImgBtn = document.querySelector('.control-right');
 let allImages = Array.from(document.querySelectorAll('.images-container > div'));
 let allImagesLen = allImages.length;

function movePrevious(){
  let selectedImg = document.querySelector('.images-container > .selected');
   let selectedIdx = allImages.findIndex(el => el.isEqualNode(selectedImg));
   let nextIdx = (selectedIdx - 1) < 0 ? allImagesLen - 1 : selectedIdx - 1;
   if (selectedImg) {
     selectedImg.classList.remove('selected');
     allImages[nextIdx].classList.add('selected');
   }
}


 prevImgBtn.addEventListener('click', movePrevious);

 nextImgBtn.addEventListener('click', () => {
   let selectedImg = document.querySelector('.images-container > .selected');
   let selectedIdx = allImages.findIndex(el => el.isEqualNode(selectedImg));
   let nextIdx = (selectedIdx + 1) % allImagesLen;
   if (selectedImg) {
     selectedImg.classList.remove('selected');
     allImages[nextIdx].classList.add('selected');
   }
 });




let current;
let imgs = document.querySelectorAll('.image-gallery .gallery-item');
let lightbox = document.querySelector('.lightbox-overlay');


imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
  let current = e.target.parentElement.classList[1];
  let classSelector = `.images-container .image.img${String(current)}`;
  let imageSelected = document.querySelector(classSelector);
  imageSelected.classList.add('selected');
  lightbox.classList.toggle('open');

}

let lightboxImage = document.querySelector('.main-grid');

lightbox.addEventListener('click', function(event) {
  let isClickInside = lightboxImage.contains(event.target);
  if (!isClickInside && lightbox.classList.contains('open') ) {
    console.log("outside");
    lightbox.classList.toggle('open');
    let selectedImg = document.querySelector('.images-container .selected');
    if (selectedImg.classList.contains("selected")) {
      selectedImg.classList.remove("selected");
    }
  }
});

document.onkeydown = function(evt) {
  if (lightbox.classList.contains('open') ) {
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
        if (selectedImg.classList.contains("selected")) {
          selectedImg.classList.remove("selected");
       }
    }
    
    let isLeft = false;
    if ("key" in evt) {
        isLeft = (evt.key == "Left arrow" );
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





