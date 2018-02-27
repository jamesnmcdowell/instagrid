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
  let $gallery = $(".image-gallery");
  let $lightbox = $('.lightbox-overlay');
  let $lightboxWrapper = $('.lightbox-wrapper');
  let $mainGrid = $('.main-grid');
  let $imgCointainer = $('.main-grid .image');
  let $lightboxImg = $('.main-grid img');
  let $prevImgBtn = $('.control-left');
  let $nextImgBtn = $('.control-right');
  let currentIdx;

  imgArray.forEach( (image, i) => {
    let $imageWrapper = $('<a>');
    let $imageTag = $('<img>');
    $imageTag.attr('src', image.src);
    $imageWrapper.append($imageTag);
    $imageWrapper.addClass("gallery-item");
    $gallery.append($imageWrapper);

    $imageWrapper.on('click', function (event) {
      currentIdx = i;
      $lightboxImg.attr('src', image.src);
      $lightbox.toggleClass('open');
    })
  });

  let movePrev = () => {
    let prevIdx = (currentIdx - 1) < 0 ? allImagesLen - 1 : currentIdx - 1;
    $lightboxImg.attr('src', imgArray[prevIdx].src);
    currentIdx = prevIdx;
    };

  let moveNext = () => {
    let nextIdx = (currentIdx + 1) % allImagesLen;
    $lightboxImg.attr('src', imgArray[nextIdx].src);
    currentIdx = nextIdx;
    };

  $prevImgBtn.on('click', movePrev);
  $nextImgBtn.on('click', moveNext);

  $lightbox.on('click', (e) => {
    if (e.target === $lightboxWrapper[0] | e.target === $mainGrid[0] | e.target === $imgCointainer[0] ) {
      $lightbox.toggleClass('open');
    }
  });

  document.onkeydown = (e) => {
    if ($lightbox.hasClass('open')) {
      e = e || window.event;
      let isEscape = "key" in e ? e.key == "Escape" || e.key == "Esc" : e.keyCode == 27
      if (isEscape) $lightbox.toggleClass('open');
      let isLeft = "key" in e ? e.key == "ArrowLeft" : e.keyCode == 37;
      if (isLeft) movePrev();
      let isRight = "key" in e ? e.key == "ArrowRight" : e.keyCode == 39;
      if (isRight) moveNext();
    }
  };