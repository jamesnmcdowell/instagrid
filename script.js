var imgArray = [
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
  var gallery = document.querySelector(".image-gallery");
  for (i = 0; i < imgArray.length; i++) {
    var imageWrapper = document.createElement('a');
    var image = document.createElement('img');
    image.setAttribute('src', imgArray[i].img);
    imageWrapper.appendChild(image);
    imageWrapper.classList.add("gallery-item");
    gallery.appendChild(imageWrapper);
  }
};

populateGallery();
