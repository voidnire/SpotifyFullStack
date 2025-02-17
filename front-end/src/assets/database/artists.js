/*export const artistsArray = [
  {
    id: 1,
    image: "https://i.scdn.co/image/ab6761610000e5eb29af2ffb6f4ddd6324f878bc",
    name: "Korn",
    banner:
      "https://image-cdn-ak.spotifycdn.com/image/ab67618600000194dc46a799bf58561d87d9de16",
  },
  {
    id: 2,
    image: "https://i.scdn.co/image/ab6761610000e5eb9c00ad0308287b38b8fdabc2",
    name: "My Chemical Romance",
    banner: "https://i.scdn.co/image/ab6742d3000053b72d3393b6c78811e4c66257a3",
  },
  {
    id: 3,
    image: "https://i.scdn.co/image/ab6761610000e5eb39ba6dcd4355c03de0b50918",
    name: "Kendrick Lamar",
    banner:
      "https://image-cdn-ak.spotifycdn.com/image/ab67618600000194517fa2f35eb4ae27dcd3e2bc",
  },
  {
    id: 4,
    image: "https://i.scdn.co/image/ab67616d0000b273e2f039481babe23658fc719a",
    name: "Linkin Park",
    banner:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJ97HcMUsX23aVrJEHVAH3zm9LUcALsWN3w&s",
  },
  {
    id: 5,
    image: "https://i.scdn.co/image/ab6761610000e5eb60063d3451ade8f9fab397c2",
    name: "System Of A Down",
    banner:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR50Kb3jbC0LiFa24XF35O00IE1nvp2485Rog&s",
  },
  {
    id: 6,
    image: "https://i.scdn.co/image/ab6761610000e5ebe7c9399d0b5d813c20cbec65",
    name: "Bring Me The Horizon",
    banner:
      "https://www.billboard.com/wp-content/uploads/media/bring-me-the-horizon-2018-cr-pretty-puke-billboard-1548.jpg",
  },
  {
    id: 7,
    image: "https://i.scdn.co/image/ab6761610000e5eb936885667ef44c306483c838",
    name: "Charli XCX",
    banner:
      "https://thefader-res.cloudinary.com/private_images/c_limit,w_1024/c_crop,h_481,w_924,x_0,y_99,f_auto,q_auto:eco/Charli-XCX-Pop2-Credit_Charlotte-Rutherford_aiuv0d/Charli-XCX-Pop2-Credit_Charlotte-Rutherford_aiuv0d.jpg",
  },
  {
    id: 8,
    image: "https://i.scdn.co/image/ab6761610000e5ebdfa2b0c7544a772042a12e52",
    name: "Tyler, the Creator",
    banner:
      "https://www.okayplayer.com/media-library/tyler-the-creator-in-his-new-video-for-juggernaut.jpg?id=33161149&width=980",
  },
  {
    id: 9,
    image: "https://i.scdn.co/image/ab6761610000e5eb4b09cd0839c6129c29d22f79",
    name: "Lady Gaga",
    banner: "https://i.scdn.co/image/ab6742d3000053b7c0213d755ec7a2bfcf4ef211",
  },
  {
    id: 10,
    image: "https://i.scdn.co/image/ab67616d0000b273073aebff28f79959d2543596",
    name: "2Pac",
    banner: "https://i.scdn.co/image/ab6742d3000053b7a89c674ee8b8abfee36d452a",
  },
  {
    id: 11,
    image: "https://i.scdn.co/image/ab6761610000e5ebca2fee52c41d3f58ceb6474b",
    name: "Doechii",
    banner: "https://i.scdn.co/image/ab6742d3000053b7e8894de848f20576db37fe5d",
  },
  {
    id: 12,
    image: "https://i.scdn.co/image/ab67616d0000b2735b96a8c5d61be8878452f8f1",
    name: "The Doors",
    banner: "https://i.scdn.co/image/ab6742d3000053b7b55d55145f7c2f0939d48302",
  },
  {
    id: 13,
    image: "https://i.scdn.co/image/ab6761610000e5ebee3123e593174208f9754fab",
    name: "Frank Ocean",
    banner: "https://i.scdn.co/image/ab6742d3000053b7af8b95df9d9ccd6cb9449e8f",
  },
  {
    id: 14,
    image: "https://i.scdn.co/image/ab6761610000e5eb4b2da0b72cab26ac518f1f0d",
    name: "Deftones",
    banner: "https://i.scdn.co/image/ab6742d3000053b79eb3a1841b402e92a308f8b0",
  },
  {
    id: 15,
    image: "https://i.scdn.co/image/ab67616d0000b273a09b231129ab1cb1a6efc57f",
    name: "The Smiths",
    banner: "https://i.scdn.co/image/3f72dbc5a5169d7553aa46fce9c881f4fea86f7a",
  },
  {
    id: 16,
    image: "https://i.scdn.co/image/ab67616d0000b273f146c45fb3b6256d4261152b",
    name: "Queen",
    banner: "https://i.scdn.co/image/ab6742d3000053b7e500c3587c262eaf7f310fec",
  },
  {
    id: 17,
    image: "https://i.scdn.co/image/a4e10b79a642e9891383448cbf37d7266a6883d6",
    name: "Nirvana",
    banner: "https://i.scdn.co/image/191cc483ab0d8151502ca82e486a8e78b7361bb2",
  },
  {
    id: 18,
    image: "https://i.scdn.co/image/ab6761610000f178ce5f4c2722732fbd7e814dad",
    name: "Gorillaz",
    banner: "https://i.scdn.co/image/ab6742d3000053b7c40c99c3c48b8dcb68d899c4",
  },
  {
    id: 19,
    image: "https://i.scdn.co/image/ab67616d0000b27334cbf7013afccc7df67fa43f",
    name: "Blur",
    banner: "https://i.scdn.co/image/ab6742d3000053b7f8ef950409acd55716e1fa4e",
  },
  {
    id: 20,
    image: "https://i.scdn.co/image/ab6761610000e5ebb78f77c5583ae99472dd4a49",
    name: "David Bowie",
    banner: "https://i.scdn.co/image/ab6742d3000053b7a0f1fc79158ba7b73b5ef132",
  },
];*/

import { artistsArray } from "../../../api/api.js";
export { artistsArray };
