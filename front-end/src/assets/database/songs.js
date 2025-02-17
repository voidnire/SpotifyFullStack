/*export const songsArray = [
  {
    id: 1,
    image: "https://i.scdn.co/image/ab67616d0000b27350d216aebaf98e8ac9947fd5",
    name: "Freak on a Leash",
    duration: "4:15",
    artist: "Korn",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/b/2/5/0/b25f9b7820bbf473f89520aefbe4d56c.mp3?hdnea=exp=1739814024~acl=/api/1/1/b/2/5/0/b25f9b7820bbf473f89520aefbe4d56c.mp3*~data=user_id=0,application_id=42~hmac=eaa704bf85c39a9ff2d446f29c5d4a47f4043b20e34235b4aa8e42b78de0a2af",
  },
  {
    id: 2,
    image: "https://i.scdn.co/image/ab67616d0000b27317f77fab7e8f18d5f9fee4a1",
    name: "Welcome to the Black Parade",
    duration: "5:11",
    artist: "My Chemical Romance",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/6/3/4/0/6345c2ae4a80adf6c11e50ee66bd62bb.mp3?hdnea=exp=1739814025~acl=/api/1/1/6/3/4/0/6345c2ae4a80adf6c11e50ee66bd62bb.mp3*~data=user_id=0,application_id=42~hmac=135a7fc271f4916ee3c9a83caceedce6050f3eb422c987af716778cd323d5ff8",
  },
  {
    id: 3,
    image: "https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699",
    name: "HUMBLE.",
    duration: "2:57",
    artist: "Kendrick Lamar",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/5/9/c/0/59c7208affd26e5d728f03dd312dc4cd.mp3?hdnea=exp=1739814025~acl=/api/1/1/5/9/c/0/59c7208affd26e5d728f03dd312dc4cd.mp3*~data=user_id=0,application_id=42~hmac=682520f91851756168de6147b2216d04d31f0c12354d28186364f63227508baa",
  },
  {
    id: 4,
    image: "https://i.scdn.co/image/ab67616d0000b273e2f039481babe23658fc719a",
    name: "In the End",
    duration: "3:36",
    artist: "Linkin Park",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/9/b/3/0/9b3b33fa47f00eb43729de30e8027afa.mp3?hdnea=exp=1739814026~acl=/api/1/1/9/b/3/0/9b3b33fa47f00eb43729de30e8027afa.mp3*~data=user_id=0,application_id=42~hmac=9fa2a421f149c08376de2c98f645c88cdadc5110cebb4eb4378a61b707455d83",
  },
  {
    id: 5,
    image: "https://i.scdn.co/image/ab67616d0000b27330d45198d0c9e8841f9a9578",
    name: "Chop Suey!",
    duration: "3:30",
    artist: "System Of A Down",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/d/6/e/0/d6e21047dfd33e0c1f8206940445779c.mp3?hdnea=exp=1739814027~acl=/api/1/1/d/6/e/0/d6e21047dfd33e0c1f8206940445779c.mp3*~data=user_id=0,application_id=42~hmac=55c2cae83e6620f4716770315189372b2b9c7adf4107719f32f2307824da4664",
  },
  {
    id: 6,
    image: "https://i.scdn.co/image/ab67616d0000b27360cf7c8dd93815ccd6cb4830",
    name: "Can You Feel My Heart",
    duration: "3:47",
    artist: "Bring Me The Horizon",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/3/0/9/0/3095c8add85a5be2571768961251548d.mp3?hdnea=exp=1739814027~acl=/api/1/1/3/0/9/0/3095c8add85a5be2571768961251548d.mp3*~data=user_id=0,application_id=42~hmac=0cf7e814daff332c4b8e4104d6c958113d4332d3a257a6efcf5012e16a1f0061",
  },
  {
    id: 7,
    image: "https://i.scdn.co/image/ab67616d0000b2732a7f876dbed7f7ae56edba22",
    name: "Boom Clap",
    duration: "2:50",
    artist: "Charli XCX",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/9/f/a/0/9fa25c406bdb8033532520552263430f.mp3?hdnea=exp=1739814028~acl=/api/1/1/9/f/a/0/9fa25c406bdb8033532520552263430f.mp3*~data=user_id=0,application_id=42~hmac=55ebfafc490451d9049313c47a9623823ac4c15609bb423654bda07b22a82de2",
  },
  {
    id: 8,
    image: "https://i.scdn.co/image/ab67616d0000b2738940ac99f49e44f59e6f7fb3",
    name: "See You Again",
    duration: "3:59",
    artist: "Tyler, The Creator",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/1/5/2/0/152df582229560f1ef355fab43102a1e.mp3?hdnea=exp=1739814028~acl=/api/1/1/1/5/2/0/152df582229560f1ef355fab43102a1e.mp3*~data=user_id=0,application_id=42~hmac=e94b2748f767d3c17a3028797bb537745fe884a0701844734bd86ce1ee528804",
  },
  {
    id: 9,
    image: "https://i.scdn.co/image/ab67616d0000b273e691217483df8798445c82e2",
    name: "Poker Face",
    duration: "3:57",
    artist: "Lady Gaga",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/2/3/3/0/233fe3a96cf1654b2cf30be68cb94624.mp3?hdnea=exp=1739814029~acl=/api/1/1/2/3/3/0/233fe3a96cf1654b2cf30be68cb94624.mp3*~data=user_id=0,application_id=42~hmac=2e482b0246a3ee781b94215a822a829459c115d97057338ca61e53495152d04a",
  },
  {
    id: 10,
    image: "https://i.scdn.co/image/ab67616d0000b273d81a092eb373ded457d94eec",
    name: "California Love",
    duration: "4:45",
    artist: "2Pac",
    audio:
      "https://cdn-preview-2.dzcdn.net/stream/c-2bb510fa8f35070842423e0b11c5e4fe-7.mp3",
  },
  {
    id: 11,
    image: "https://i.scdn.co/image/ab67616d0000b273f831100cdd02b4a705042dfc",
    name: "Persuasive",
    duration: "2:57",
    artist: "Doechii",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/5/3/a/0/53a08fcbb97a65f6b7dfd8ddd0c7f9b3.mp3?hdnea=exp=1739814030~acl=/api/1/1/5/3/a/0/53a08fcbb97a65f6b7dfd8ddd0c7f9b3.mp3*~data=user_id=0,application_id=42~hmac=439e98ba0da56579e423db01dcdff9938a2e6f0e444918975b6e1d513cc6ddb9",
  },
  {
    id: 12,
    image: "https://i.scdn.co/image/ab67616d0000b2733992c7ab57975935b29fa22b",
    name: "Riders on the Storm",
    duration: "7:10",
    artist: "The Doors",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/8/a/0/0/8a04a6b712b770a8feb08582c1952506.mp3?hdnea=exp=1739814031~acl=/api/1/1/8/a/0/0/8a04a6b712b770a8feb08582c1952506.mp3*~data=user_id=0,application_id=42~hmac=c3cf8282f85638cd730f48d73b39a1bd1409ac5586e2642435cb45bd82c46b1f",
  },
  {
    id: 13,
    image: "https://i.scdn.co/image/ab67616d0000b2737aede4855f6d0d738012e2e5",
    name: "Thinkin Bout You",
    duration: "3:21",
    artist: "Frank Ocean",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/7/0/c/0/70c8461cabfd948d382aaed5db2e6ff1.mp3?hdnea=exp=1739814032~acl=/api/1/1/7/0/c/0/70c8461cabfd948d382aaed5db2e6ff1.mp3*~data=user_id=0,application_id=42~hmac=fed37bf6c007e13fd49a2ea149e3fc3cbaac994598d10504223bc1531d7dd412",
  },
  {
    id: 14,
    image: "https://i.scdn.co/image/ab67616d0000b2735c53799f473fa3e1a48c00ed",
    name: "Change (In the House of Flies)",
    duration: "4:59",
    artist: "Deftones",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/1/f/8/0/1f8f0e5ca24b46ba124138f78a919e8b.mp3?hdnea=exp=1739814032~acl=/api/1/1/1/f/8/0/1f8f0e5ca24b46ba124138f78a919e8b.mp3*~data=user_id=0,application_id=42~hmac=3a1dad11595f4c0520031dbcbda6fa578e341155945e5bb2d21b8fef101a2fe3",
  },
  {
    id: 15,
    image: "https://i.scdn.co/image/ab67616d0000b273ada101c2e9e97feb8fae37a9",
    name: "There Is a Light That Never Goes Out",
    duration: "4:05",
    artist: "The Smiths",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/8/1/7/0/817b32b6d4fd896d27dcb757778ef23f.mp3?hdnea=exp=1739814033~acl=/api/1/1/8/1/7/0/817b32b6d4fd896d27dcb757778ef23f.mp3*~data=user_id=0,application_id=42~hmac=0abda5b3b89f2d82f9dd2c70d784c349e2ff23f11d4490952f02554e1ed477a1",
  },
  {
    id: 16,
    image: "https://i.scdn.co/image/ab67616d0000b273e319baafd16e84f0408af2a0",
    name: "Bohemian Rhapsody",
    duration: "5:55",
    artist: "Queen",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/5/a/6/0/5a60df2825cb8c8ed3969c7b8e433328.mp3?hdnea=exp=1739814033~acl=/api/1/1/5/a/6/0/5a60df2825cb8c8ed3969c7b8e433328.mp3*~data=user_id=0,application_id=42~hmac=ab34581beb15966efe2628e51c8789b21d9137262a2e892485451e954ac53ff1",
  },
  {
    id: 17,
    image: "https://i.scdn.co/image/ab67616d0000b273fbc71c99f9c1296c56dd51b6",
    name: "Smells Like Teen Spirit",
    duration: "5:01",
    artist: "Nirvana",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/3/4/b/0/34bad352aa1aa0f8eecbbc9c27a40eaf.mp3?hdnea=exp=1739814034~acl=/api/1/1/3/4/b/0/34bad352aa1aa0f8eecbbc9c27a40eaf.mp3*~data=user_id=0,application_id=42~hmac=758343c14f9e7b94023c373a49cfdd6e9722e762a16c1577dbfb8351cdf91070",
  },
  {
    id: 18,
    image: "https://i.scdn.co/image/ab67616d0000b27319d85a472f328a6ed9b704cf",
    name: "Feel Good Inc.",
    duration: "3:41",
    artist: "Gorillaz",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/6/4/e/0/64e58540dc2ee51544ebfc5f2a33a652.mp3?hdnea=exp=1739814035~acl=/api/1/1/6/4/e/0/64e58540dc2ee51544ebfc5f2a33a652.mp3*~data=user_id=0,application_id=42~hmac=d9db60b5c5d669988c6217a3f658e855e5176b0784f0b062db22e6d7f9e7c129",
  },
  {
    id: 19,
    image: "https://i.scdn.co/image/ab67616d0000b273de114203356c1f7b136960b6",
    name: "Song 2",
    duration: "2:00",
    artist: "Blur",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/b/5/2/0/b52000f4b656776924aeecb6b45eef79.mp3?hdnea=exp=1739814036~acl=/api/1/1/b/5/2/0/b52000f4b656776924aeecb6b45eef79.mp3*~data=user_id=0,application_id=42~hmac=bdf3c72675ec41884e5e7f592d7eb1e52f48808336e9dea190fd48c808c3f9d0",
  },
  {
    id: 20,
    image: "https://i.scdn.co/image/ab67616d0000b273204f41d52743c6a9efd62985",
    name: "Heroes",
    duration: "3:32",
    artist: "David Bowie",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/b/1/f/0/b1fda796e068d4582c854b3ce23af125.mp3?hdnea=exp=1739814036~acl=/api/1/1/b/1/f/0/b1fda796e068d4582c854b3ce23af125.mp3*~data=user_id=0,application_id=42~hmac=6455e4d2b5cedb47495487743adf753e1b0cf75e65059c5bc3cd7aa92e472c43",
  },
  {
    id: 21,
    image: "https://i.scdn.co/image/ab67616d0000b2737153b1cf6ee990c2a9fa46cc",
    name: "Blind",
    duration: "4:18",
    artist: "Korn",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/5/6/4/0/5640e617723e232ebc78ea4dd0a23a87.mp3?hdnea=exp=1739814037~acl=/api/1/1/5/6/4/0/5640e617723e232ebc78ea4dd0a23a87.mp3*~data=user_id=0,application_id=42~hmac=12fce20fd63942a4560a473b26eac3f37600c1316e016ffd743706550fc2c4a0",
  },
  {
    id: 22,
    image: "https://i.scdn.co/image/ab67616d0000b27350d216aebaf98e8ac9947fd5",
    name: "Got the Life",
    duration: "3:45",
    artist: "Korn",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/7/8/a/0/78afc82ae979066817c62c7e1712e050.mp3?hdnea=exp=1739814037~acl=/api/1/1/7/8/a/0/78afc82ae979066817c62c7e1712e050.mp3*~data=user_id=0,application_id=42~hmac=41078030eed8bcae498005fb224fe82c9b6b0e4f1688a94b60964c88b6074c61",
  },
  {
    id: 23,
    image: "https://i.scdn.co/image/ab67616d0000b2731c229cb7c9851fb0c67e2af8",
    name: "Falling Away from Me",
    duration: "4:31",
    artist: "Korn",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/6/c/8/0/6c899b25fdd97795f42021cc3ec075a0.mp3?hdnea=exp=1739814038~acl=/api/1/1/6/c/8/0/6c899b25fdd97795f42021cc3ec075a0.mp3*~data=user_id=0,application_id=42~hmac=d47e22acae5bcb3d5a5040db468581b2dbf2270c8c92acf1c0301f71fcd170aa",
  },
  {
    id: 24,
    image: "https://i.scdn.co/image/ab67616d0000b27367b097c11348179a60c0866d",
    name: "Here to Stay",
    duration: "4:32",
    artist: "Korn",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/6/c/6/0/6c6d12d1b1652f193ee5b8051442308d.mp3?hdnea=exp=1739814039~acl=/api/1/1/6/c/6/0/6c6d12d1b1652f193ee5b8051442308d.mp3*~data=user_id=0,application_id=42~hmac=ed6a222b0c0899fc1cf7db13b57bd232afb38fd6f629c546b0b2c6fd102ffdfb",
  },
  {
    id: 25,
    image: "https://i.scdn.co/image/ab67616d0000b27374c1560b64750a1774495144",
    name: "Coming Undone",
    duration: "3:19",
    artist: "Korn",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/d/1/f/0/d1f3473da6a32fceeeaa4feec97771c2.mp3?hdnea=exp=1739814039~acl=/api/1/1/d/1/f/0/d1f3473da6a32fceeeaa4feec97771c2.mp3*~data=user_id=0,application_id=42~hmac=1068410ea347ee847638a2b7e5a426998c0c9fbc1f86eedaa951dcb174194798",
  },
  {
    id: 26,
    image: "https://i.scdn.co/image/ab67616d0000b27374c1560b64750a1774495144",
    name: "Twisted Transistor",
    duration: "3:08",
    artist: "Korn",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/1/a/1/0/1a15fb6d04c5f85bc059d713e928eecd.mp3?hdnea=exp=1739814040~acl=/api/1/1/1/a/1/0/1a15fb6d04c5f85bc059d713e928eecd.mp3*~data=user_id=0,application_id=42~hmac=54f0a034f5366511666f4ce1b688ffbfed966fe13038200b732259ac78a48151",
  },
  {
    id: 27,
    image: "https://i.scdn.co/image/ab67616d0000b273ad4ca82999655cfc56c86828",
    name: "A.D.I.D.A.S.",
    duration: "2:32",
    artist: "Korn",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/0/5/b/0/05b15dd28d48e564a985c31742494396.mp3?hdnea=exp=1739814040~acl=/api/1/1/0/5/b/0/05b15dd28d48e564a985c31742494396.mp3*~data=user_id=0,application_id=42~hmac=bbe9f540c8bb7a08f8667c67fb3e6ee394f08d1c837820a79c6acc7edc177459",
  },
  {
    id: 28,
    image: "https://i.scdn.co/image/ab67616d0000b2731c229cb7c9851fb0c67e2af8",
    name: "Somebody Someone",
    duration: "3:47",
    artist: "Korn",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/8/c/b/0/8cbde33e5a064d0de91ee96709f9f3d3.mp3?hdnea=exp=1739814041~acl=/api/1/1/8/c/b/0/8cbde33e5a064d0de91ee96709f9f3d3.mp3*~data=user_id=0,application_id=42~hmac=ea4acc536302722f898a41d8fc46e56b8f4febdd6304a03334fed16c96131a58",
  },
  {
    id: 29,
    image: "https://i.scdn.co/image/ab67616d0000b2731c229cb7c9851fb0c67e2af8",
    name: "Make Me Bad",
    duration: "3:55",
    artist: "Korn",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/4/f/b/0/4fb86dee79f6e829802ea609332b8340.mp3?hdnea=exp=1739814042~acl=/api/1/1/4/f/b/0/4fb86dee79f6e829802ea609332b8340.mp3*~data=user_id=0,application_id=42~hmac=89893874682f06c33a53f0fddee2fa8a496e3459a462ada8e4128cfb62434b7e",
  },
  {
    id: 30,
    image: "https://i.scdn.co/image/ab67616d0000b273f3d72bc62b3f0fc059da2e46",
    name: "Did My Time",
    duration: "4:04",
    artist: "Korn",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/f/0/9/0/f09ada442bf7c003a77caaf0a0407961.mp3?hdnea=exp=1739814042~acl=/api/1/1/f/0/9/0/f09ada442bf7c003a77caaf0a0407961.mp3*~data=user_id=0,application_id=42~hmac=c185e67b70fc03cd46bbbdfd64e4891da10545e49bd70998a0fbd785f7e5d225",
  },
  {
    id: 31,
    image: "https://i.scdn.co/image/ab67616d0000b273d81a092eb373ded457d94eec",
    name: "Changes",
    duration: "4:29",
    artist: "2Pac",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/4/f/9/0/4f9e5b02c0124b2deb4c133e6594d0bf.mp3?hdnea=exp=1739814043~acl=/api/1/1/4/f/9/0/4f9e5b02c0124b2deb4c133e6594d0bf.mp3*~data=user_id=0,application_id=42~hmac=4d3a48b812cd1b9653f9041ba50d797744761f51d1e387af403c6b9666351b13",
  },
  {
    id: 32,
    image: "https://i.scdn.co/image/ab67616d0000b27304b9ab6bd4bf6a350ba902ea",
    name: "Dear Mama",
    duration: "4:39",
    artist: "2Pac",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/0/a/3/0/0a30a1705e854bdbfa8cf9a052edd2a2.mp3?hdnea=exp=1739814043~acl=/api/1/1/0/a/3/0/0a30a1705e854bdbfa8cf9a052edd2a2.mp3*~data=user_id=0,application_id=42~hmac=45c274d72c29a40c15a415835bc3df89936324c92d683dea61df7cbfa34aa6ab",
  },
  {
    id: 33,
    image: "https://i.scdn.co/image/ab67616d0000b273d81a092eb373ded457d94eec",
    name: "Hail Mary",
    duration: "5:12",
    artist: "2Pac",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/e/3/9/0/e39009ee4006439c558f7dc5b03702ac.mp3?hdnea=exp=1739814044~acl=/api/1/1/e/3/9/0/e39009ee4006439c558f7dc5b03702ac.mp3*~data=user_id=0,application_id=42~hmac=409f22517036acaa42056e6bbf79c50ca3bf27dc939bc83c90f648dd9f3bc291",
  },
  {
    id: 34,
    image: "https://i.scdn.co/image/ab67616d0000b27378c35340eac7e45824d47830",
    name: "Ghetto Gospel",
    duration: "3:58",
    artist: "2Pac",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/5/b/e/0/5be2ace11efeba24c8e71d99e8aa0141.mp3?hdnea=exp=1739814045~acl=/api/1/1/5/b/e/0/5be2ace11efeba24c8e71d99e8aa0141.mp3*~data=user_id=0,application_id=42~hmac=0dcfefe45da58ac9b71b393dd5325db325decef968ab28dc2912d2746af57ea1",
  },
  {
    id: 35,
    image: "https://i.scdn.co/image/ab67616d0000b273d81a092eb373ded457d94eec",
    name: "Hit 'Em Up",
    duration: "5:12",
    artist: "2Pac",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/0/9/7/0/0979f5ec4da00681a82b8977c4603399.mp3?hdnea=exp=1739814045~acl=/api/1/1/0/9/7/0/0979f5ec4da00681a82b8977c4603399.mp3*~data=user_id=0,application_id=42~hmac=ae49e9bd5248181f88e9aa8c9d8169506f087ba9e97e69224e2e76008953d91a",
  },
  {
    id: 36,
    image: "https://i.scdn.co/image/ab67616d0000b2737f6f6c9e4b492a3d7e910d82",
    name: "I Get Around",
    duration: "4:19",
    artist: "2Pac",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/3/9/d/0/39d1f19eb7a5bc5601abc4b34671c906.mp3?hdnea=exp=1739814046~acl=/api/1/1/3/9/d/0/39d1f19eb7a5bc5601abc4b34671c906.mp3*~data=user_id=0,application_id=42~hmac=2ef9d9eab2e0784ff61de3adc93732667889dfd812c036bf0cbcdd51dde2a4cc",
  },
  {
    id: 37,
    image: "https://i.scdn.co/image/ab67616d0000b2737f6f6c9e4b492a3d7e910d82",
    name: "Keep Ya Head Up",
    duration: "4:22",
    artist: "2Pac",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/7/a/6/0/7a67a8fdd31a44eb99fa05c7f30e89bc.mp3?hdnea=exp=1739814047~acl=/api/1/1/7/a/6/0/7a67a8fdd31a44eb99fa05c7f30e89bc.mp3*~data=user_id=0,application_id=42~hmac=63ccd08398cc6e652bbc2c4d310a594f178e81c0688a4ca582a197d1e938197e",
  },
  {
    id: 38,
    image: "https://i.scdn.co/image/ab67616d0000b273073aebff28f79959d2543596",
    name: "All Eyez on Me",
    duration: "4:46",
    artist: "2Pac",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/a/e/6/0/ae68d3e174fd4ea3319dcd4e2b868b1e.mp3?hdnea=exp=1739814047~acl=/api/1/1/a/e/6/0/ae68d3e174fd4ea3319dcd4e2b868b1e.mp3*~data=user_id=0,application_id=42~hmac=167c0cc5fffafc50eb655b9b720f9e639fb8f23a71f8e9ceb8eca9c0ceb4ea2c",
  },
  {
    id: 39,
    image: "https://i.scdn.co/image/ab67616d0000b27304b9ab6bd4bf6a350ba902ea",
    name: "Me Against the World",
    duration: "4:39",
    artist: "2Pac",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/e/b/b/0/ebbb7a8879bce3089822d5805c852796.mp3?hdnea=exp=1739814048~acl=/api/1/1/e/b/b/0/ebbb7a8879bce3089822d5805c852796.mp3*~data=user_id=0,application_id=42~hmac=c0b3c2320011cd75df88b29869ede233966b288a17ea2df55dcffecb5429404f",
  },
  {
    id: 40,
    image: "https://i.scdn.co/image/ab67616d0000b2732e55bc288d7e0888027e22b7",
    name: "Vampires Will Never Hurt You",
    duration: "5:25",
    artist: "My Chemical Romance",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/5/f/7/0/5f76c88d240597c9ab6f3826219ea7c1.mp3?hdnea=exp=1739814048~acl=/api/1/1/5/f/7/0/5f76c88d240597c9ab6f3826219ea7c1.mp3*~data=user_id=0,application_id=42~hmac=8316346295f2bcddab0f2a2d9afc41c05938d4f2d00747ff13bbfd229e1669b2",
  },
  {
    id: 41,
    image: "https://i.scdn.co/image/ab67616d0000b273cab7ae4868e9f9ce6bdfdf43",
    name: "Helena",
    duration: "3:23",
    artist: "My Chemical Romance",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/d/8/1/0/d814b1850bb92c860c77ab7a7dac1455.mp3?hdnea=exp=1739814049~acl=/api/1/1/d/8/1/0/d814b1850bb92c860c77ab7a7dac1455.mp3*~data=user_id=0,application_id=42~hmac=57a8b42a5a61ffdf2b956355355f26e0b56b2736b690143a14df20cf429e127a",
  },
  {
    id: 42,
    image: "https://i.scdn.co/image/ab67616d0000b27317f77fab7e8f18d5f9fee4a1",
    name: "Teenagers",
    duration: "2:41",
    artist: "My Chemical Romance",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/4/4/d/0/44db5a9875f9745103adb3419b7547d9.mp3?hdnea=exp=1739814050~acl=/api/1/1/4/4/d/0/44db5a9875f9745103adb3419b7547d9.mp3*~data=user_id=0,application_id=42~hmac=609f4b05e8039f41bca611900aaef3868be4e154b5f69b6e03b0e06d6c4f74eb",
  },
  {
    id: 43,
    image: "https://i.scdn.co/image/ab67616d0000b27317f77fab7e8f18d5f9fee4a1",
    name: "Famous Last Words",
    duration: "4:59",
    artist: "My Chemical Romance",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/4/d/e/0/4de50926c4f67093e83d0de3beb79164.mp3?hdnea=exp=1739814050~acl=/api/1/1/4/d/e/0/4de50926c4f67093e83d0de3beb79164.mp3*~data=user_id=0,application_id=42~hmac=0cf8e48a8d30a301e01f3e48bb1f3bc6000c8fc51651a2e9b36c32c4055561ef",
  },
  {
    id: 44,
    image: "https://i.scdn.co/image/ab67616d0000b273cab7ae4868e9f9ce6bdfdf43",
    name: "I'm Not Okay (I Promise)",
    duration: "3:08",
    artist: "My Chemical Romance",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/b/a/d/0/bad956c9a980103195570dd248dfb5e8.mp3?hdnea=exp=1739814051~acl=/api/1/1/b/a/d/0/bad956c9a980103195570dd248dfb5e8.mp3*~data=user_id=0,application_id=42~hmac=0a5fb20af9783a10f8e6cc686b69758a8dff2e2da87c5c3bbeccaec694dcc2b6",
  },
  {
    id: 45,
    image: "https://i.scdn.co/image/ab67616d0000b273cab7ae4868e9f9ce6bdfdf43",
    name: "The Ghost of You",
    duration: "3:23",
    artist: "My Chemical Romance",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/c/8/2/0/c82c4c11a016263f369dda368448e315.mp3?hdnea=exp=1739814051~acl=/api/1/1/c/8/2/0/c82c4c11a016263f369dda368448e315.mp3*~data=user_id=0,application_id=42~hmac=ba5ff9308dcc4efab6fb828f6c306129b9fd4b8574441828ba292bfa1429bd42",
  },
  {
    id: 46,
    image: "https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699",
    name: "DNA.",
    duration: "3:05",
    artist: "Kendrick Lamar",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/8/4/f/0/84f14a899de2d97a98c6fa751379e361.mp3?hdnea=exp=1739814052~acl=/api/1/1/8/4/f/0/84f14a899de2d97a98c6fa751379e361.mp3*~data=user_id=0,application_id=42~hmac=ae9fb2c0240a62ee89c1d7f13370cdb325643fdbf8e42594a4e051e7ab30c1e9",
  },
  {
    id: 47,
    image: "https://i.scdn.co/image/ab67616d0000b273cdb645498cd3d8a2db4d05e1",
    name: "Alright",
    duration: "3:39",
    artist: "Kendrick Lamar",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/1/2/f/0/12fd60e1cc86369ca2153e461ea6f0eb.mp3?hdnea=exp=1739814053~acl=/api/1/1/1/2/f/0/12fd60e1cc86369ca2153e461ea6f0eb.mp3*~data=user_id=0,application_id=42~hmac=ab645c491304195b8ce1363394d157bb555d165bf89ec1f7dc5d9f578a600c00",
  },
  {
    id: 48,
    image: "https://i.scdn.co/image/ab67616d0000b273b5ef185d28724c5573c2ac9c",
    name: "Swimming Pools (Drank)",
    duration: "3:40",
    artist: "Kendrick Lamar",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/f/0/6/0/f06fa179d479343a013f4699449dd429.mp3?hdnea=exp=1739814053~acl=/api/1/1/f/0/6/0/f06fa179d479343a013f4699449dd429.mp3*~data=user_id=0,application_id=42~hmac=6748cfac2eb9eedab20368101702f4a31cc0a6d18d2bdc7f467932f18a0501fd",
  },
  {
    id: 49,
    image: "https://i.scdn.co/image/ab67616d0000b2732cd55246d935a8a77cb4859e",
    name: "Money Trees",
    duration: "6:26",
    artist: "Kendrick Lamar",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/e/8/6/0/e86d6bb045d2e22f78827b7d6da3e81f.mp3?hdnea=exp=1739814054~acl=/api/1/1/e/8/6/0/e86d6bb045d2e22f78827b7d6da3e81f.mp3*~data=user_id=0,application_id=42~hmac=28281ef528917591b99b2bdac139ffe738393ad2a361381e0f38eeccb3d035c0",
  },
  {
    id: 50,
    image: "https://i.scdn.co/image/ab67616d0000b273cdb645498cd3d8a2db4d05e1",
    name: "King Kunta",
    duration: "3:54",
    artist: "Kendrick Lamar",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/0/7/e/0/07e4288dc14434dce20503ee05f2a9f0.mp3?hdnea=exp=1739814054~acl=/api/1/1/0/7/e/0/07e4288dc14434dce20503ee05f2a9f0.mp3*~data=user_id=0,application_id=42~hmac=2a7d3a8e96ca6421aca57d3064751b4f02225c7fd5aa1245d0098d77050a1095",
  },
  {
    id: 51,
    image: "https://i.scdn.co/image/ab67616d0000b2735f1f51d14e8bea89484ecd1b",
    name: "Numb",
    duration: "3:07",
    artist: "Linkin Park",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/4/2/b/0/42b05e42e6f684b6a2de860831cfa91a.mp3?hdnea=exp=1739814055~acl=/api/1/1/4/2/b/0/42b05e42e6f684b6a2de860831cfa91a.mp3*~data=user_id=0,application_id=42~hmac=e88ffc2f1d1bf1500e1471977b932b4f997bc7e779aa462408fb055a6103ce4d",
  },
  {
    id: 52,
    image: "https://i.scdn.co/image/ab67616d0000b273e2f039481babe23658fc719a",
    name: "Crawling",
    duration: "3:29",
    artist: "Linkin Park",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/1/0/5/0/1055fb11b6c86f15f2391db91ba20117.mp3?hdnea=exp=1739814056~acl=/api/1/1/1/0/5/0/1055fb11b6c86f15f2391db91ba20117.mp3*~data=user_id=0,application_id=42~hmac=879f26fdbdf078bd6c7199e0855491a8e97658809eb0040367081c0153819294",
  },
  {
    id: 53,
    image: "https://i.scdn.co/image/ab67616d0000b273e2f039481babe23658fc719a",
    name: "One Step Closer",
    duration: "2:35",
    artist: "Linkin Park",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/e/7/f/0/e7f87ce2bb78a16d6a7fc95d7c8631b5.mp3?hdnea=exp=1739814056~acl=/api/1/1/e/7/f/0/e7f87ce2bb78a16d6a7fc95d7c8631b5.mp3*~data=user_id=0,application_id=42~hmac=d39db6d66b067ad72fadbc5aec943a511b1a3fb17d4c86a68a56f81e4253f3e8",
  },
  {
    id: 54,
    image: "https://i.scdn.co/image/ab67616d0000b2738b5b6fa1326d996181e71dd7",
    name: "Somewhere I Belong",
    duration: "3:34",
    artist: "Linkin Park",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/7/0/7/0/70748cd9030247f2f9063820bc1e5017.mp3?hdnea=exp=1739814057~acl=/api/1/1/7/0/7/0/70748cd9030247f2f9063820bc1e5017.mp3*~data=user_id=0,application_id=42~hmac=64b094eb018cc332441e7a48a01f851f703629fc1012a83ce36158031def8d51",
  },
  {
    id: 55,
    image: "https://i.scdn.co/image/ab67616d0000b2738b5b6fa1326d996181e71dd7",
    name: "Breaking the Habit",
    duration: "3:16",
    artist: "Linkin Park",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/0/4/6/0/046d901f9aaa58a09571d81770610d4c.mp3?hdnea=exp=1739814057~acl=/api/1/1/0/4/6/0/046d901f9aaa58a09571d81770610d4c.mp3*~data=user_id=0,application_id=42~hmac=9ec3fb1d8537de90b64757a06ac7985f1c0017655b1ba43f2a22763eff62e38c",
  },
  {
    id: 56,
    image: "https://i.scdn.co/image/ab67616d0000b2735f1f51d14e8bea89484ecd1b",
    name: "Faint",
    duration: "2:42",
    artist: "Linkin Park",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/0/3/7/0/0377f1a5f8b1dd2dbd4aa7b3c0803f05.mp3?hdnea=exp=1739814058~acl=/api/1/1/0/3/7/0/0377f1a5f8b1dd2dbd4aa7b3c0803f05.mp3*~data=user_id=0,application_id=42~hmac=ea0295113dfc49e02240a26a86e0b62fef60347c2849f3d6d0a5a9e815ff3093",
  },
  {
    id: 57,
    image: "https://i.scdn.co/image/ab67616d0000b2736e996745f2c7b8036abef213",
    name: "Bleed It Out",
    duration: "2:44",
    artist: "Linkin Park",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/7/9/1/0/791ea8ebce5906768bcb58b1c9d398ef.mp3?hdnea=exp=1739814059~acl=/api/1/1/7/9/1/0/791ea8ebce5906768bcb58b1c9d398ef.mp3*~data=user_id=0,application_id=42~hmac=8bb0296df402d12c83efcfdc2c38468b4e547cfaa6e3d3a1123d7a9b0c82631b",
  },
  {
    id: 58,
    image: "https://i.scdn.co/image/ab67616d0000b27330d45198d0c9e8841f9a9578",
    name: "Toxicity",
    duration: "3:39",
    artist: "System of a Down",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/6/8/2/0/682240371ed8bd7757aebc61fa11f274.mp3?hdnea=exp=1739814059~acl=/api/1/1/6/8/2/0/682240371ed8bd7757aebc61fa11f274.mp3*~data=user_id=0,application_id=42~hmac=b7bcb2fedc575f598f6f6786d01bc0c8217847817b9eea8cd73f31a13019ecca",
  },
  {
    id: 59,
    image: "https://i.scdn.co/image/ab67616d0000b273c65f8d04502eeddbdd61fa71",
    name: "B.Y.O.B.",
    duration: "4:15",
    artist: "System of a Down",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/9/e/6/0/9e6bc6855a505c0890cd7bfb37fffba3.mp3?hdnea=exp=1739814060~acl=/api/1/1/9/e/6/0/9e6bc6855a505c0890cd7bfb37fffba3.mp3*~data=user_id=0,application_id=42~hmac=6a7e03dd8f02448a02ad263057ffbf86340a7742bebb3a7c7dbc8f1cbcc0ec90",
  },
  {
    id: 60,
    image: "https://i.scdn.co/image/ab67616d0000b27330d45198d0c9e8841f9a9578",
    name: "Aerials",
    duration: "4:00",
    artist: "System of a Down",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/b/b/1/0/bb12ea111352e42a19823e951f5a961c.mp3?hdnea=exp=1739814060~acl=/api/1/1/b/b/1/0/bb12ea111352e42a19823e951f5a961c.mp3*~data=user_id=0,application_id=42~hmac=8b8352c655582549c19c40ec10c56a350271afa475554283c11c8f80586ba9a5",
  },
  {
    id: 61,
    image: "https://i.scdn.co/image/ab67616d0000b2732dc63e977bd5101072adcef6",
    name: "Sugar",
    duration: "2:33",
    artist: "System of a Down",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/7/7/2/0/77236724433680483bfa25c9d46cd72a.mp3?hdnea=exp=1739814061~acl=/api/1/1/7/7/2/0/77236724433680483bfa25c9d46cd72a.mp3*~data=user_id=0,application_id=42~hmac=1cc85a57cadcad4f45a4e3098d3bc5750327738af867566203fa922fa17cd77a",
  },
  {
    id: 62,
    image: "https://i.scdn.co/image/ab67616d0000b273f5e7b2e5adaa87430a3eccff",
    name: "Lonely Day",
    duration: "2:47",
    artist: "System of a Down",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/0/3/8/0/038eb2b8a8a31e9adee4c09e7197308c.mp3?hdnea=exp=1739814062~acl=/api/1/1/0/3/8/0/038eb2b8a8a31e9adee4c09e7197308c.mp3*~data=user_id=0,application_id=42~hmac=5cd03b7025e6bceaccbc553867139a6d83df4454d243732c15f91a7692741fe9",
  },
  {
    id: 63,
    image: "https://i.scdn.co/image/ab67616d0000b27360cf7c8dd93815ccd6cb4830",
    name: "Sleepwalking",
    duration: "3:50",
    artist: "Bring Me The Horizon",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/c/0/1/0/c015c323d049ae6f0e0ad760118a961d.mp3?hdnea=exp=1739814062~acl=/api/1/1/c/0/1/0/c015c323d049ae6f0e0ad760118a961d.mp3*~data=user_id=0,application_id=42~hmac=48e8673ef0537ec46c803e8738e175fb25c8d87ebe7da10a6f595f2760cdab4b",
  },
  {
    id: 64,
    image: "https://i.scdn.co/image/ab67616d0000b273413697269620e16f4466f543",
    name: "Throne",
    duration: "3:11",
    artist: "Bring Me The Horizon",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/5/9/f/0/59faf007d58cf5aa5265cdf91eb703a7.mp3?hdnea=exp=1739814063~acl=/api/1/1/5/9/f/0/59faf007d58cf5aa5265cdf91eb703a7.mp3*~data=user_id=0,application_id=42~hmac=532259aa9eab7214da887eb3873d8436bec417cfa45a9f4595c1d2bef53af3c7",
  },
  {
    id: 65,
    image: "https://i.scdn.co/image/ab67616d0000b273413697269620e16f4466f543",
    name: "Drown",
    duration: "3:42",
    artist: "Bring Me The Horizon",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/9/b/9/0/9b92e3267e85d62c3b21e89ac5df3c87.mp3?hdnea=exp=1739814064~acl=/api/1/1/9/b/9/0/9b92e3267e85d62c3b21e89ac5df3c87.mp3*~data=user_id=0,application_id=42~hmac=8275df0c50563b60e80d2da628b43f804739c556201733910eec703df0539b6b",
  },
  {
    id: 66,
    image: "https://i.scdn.co/image/ab67616d0000b27360cf7c8dd93815ccd6cb4830",
    name: "Shadow Moses",
    duration: "4:02",
    artist: "Bring Me The Horizon",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/8/e/d/0/8ed291b372d2e3ae654124e39f60658d.mp3?hdnea=exp=1739814064~acl=/api/1/1/8/e/d/0/8ed291b372d2e3ae654124e39f60658d.mp3*~data=user_id=0,application_id=42~hmac=c31c2ede7fd13091873d49a70ab4b9258a81fa4c74dc3538cf7b3d34b1c2e1fa",
  },
  {
    id: 67,
    image: "https://i.scdn.co/image/ab67616d0000b273413697269620e16f4466f543",
    name: "Follow You",
    duration: "3:51",
    artist: "Bring Me The Horizon",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/5/2/d/0/52d4ccdf4e4c4605bab51b78896913dc.mp3?hdnea=exp=1739814065~acl=/api/1/1/5/2/d/0/52d4ccdf4e4c4605bab51b78896913dc.mp3*~data=user_id=0,application_id=42~hmac=542e578bda43d6f27cd9d44f97f40708654a5ec9667a0793d9d60d0971f18076",
  },
  {
    id: 68,
    image: "https://i.scdn.co/image/ab67616d0000b27349e3b7e85829da2fbc68bc46",
    name: "Mantra",
    duration: "3:54",
    artist: "Bring Me The Horizon",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/e/7/1/0/e710b39d7269e27cfdaae3e1d48e701c.mp3?hdnea=exp=1739814065~acl=/api/1/1/e/7/1/0/e710b39d7269e27cfdaae3e1d48e701c.mp3*~data=user_id=0,application_id=42~hmac=a45351751fad97f1f867fe4b08e37f324014ae89175cf1a337aa4570173f26f1",
  },
  {
    id: 69,
    image: "https://i.scdn.co/image/ab67616d0000b2735149c948fde506624246a684",
    name: "Teardrops",
    duration: "3:35",
    artist: "Bring Me The Horizon",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/7/7/5/0/7756d53e680633394694b903b50eab87.mp3?hdnea=exp=1739814066~acl=/api/1/1/7/7/5/0/7756d53e680633394694b903b50eab87.mp3*~data=user_id=0,application_id=42~hmac=73b5aaec91f86d6b086074af8daec9b6f82af6b55156aa63cb9c8318cef86d8e",
  },
  {
    id: 70,
    image: "https://i.scdn.co/image/ab67616d0000b2735149c948fde506624246a684",
    name: "Obey",
    duration: "3:41",
    artist: "Bring Me The Horizon",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/2/f/0/0/2f09514e94659ee510291981899e45f1.mp3?hdnea=exp=1739814066~acl=/api/1/1/2/f/0/0/2f09514e94659ee510291981899e45f1.mp3*~data=user_id=0,application_id=42~hmac=805f54ab67d9e258a8d22370c9d239cc6d1468f932230fe30b9d7e4461485029",
  },
  {
    id: 71,
    image: "https://i.scdn.co/image/ab67616d0000b273c5c6c436a141b53086884863",
    name: "Vroom Vroom",
    duration: "3:13",
    artist: "Charli XCX",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/c/b/b/0/cbb48b075e1cc68fa20dd98d510104cb.mp3?hdnea=exp=1739814067~acl=/api/1/1/c/b/b/0/cbb48b075e1cc68fa20dd98d510104cb.mp3*~data=user_id=0,application_id=42~hmac=997ebefafec8db864a6bedd6efc22a8557c784b82760bfd53edae166382be583",
  },
  {
    id: 72,
    image: "https://i.scdn.co/image/ab67616d0000b273078239f571dc2640d8a169ae",
    name: "Boys",
    duration: "2:42",
    artist: "Charli XCX",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/f/8/8/0/f88174f31d4bed27591f214e18642529.mp3?hdnea=exp=1739814068~acl=/api/1/1/f/8/8/0/f88174f31d4bed27591f214e18642529.mp3*~data=user_id=0,application_id=42~hmac=3e8058989bb9f9f7795dae3ecbbb619ef9dcb571da56aaca199d671e8bb36552",
  },
  {
    id: 73,
    image: "https://i.scdn.co/image/ab67616d0000b273086ca574430eaa107d3e855f",
    name: "Good Ones",
    duration: "2:16",
    artist: "Charli XCX",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/7/8/6/0/786a82a200e6b39feac96e0d1365edb9.mp3?hdnea=exp=1739814069~acl=/api/1/1/7/8/6/0/786a82a200e6b39feac96e0d1365edb9.mp3*~data=user_id=0,application_id=42~hmac=59c56a8bacae450b2f6ac5c2d57f8563672e46b9bbe7121e439082b97e7b4359",
  },
  {
    id: 74,
    image: "https://i.scdn.co/image/ab67616d0000b273086ca574430eaa107d3e855f",
    name: "Used To Know Me",
    duration: "2:25",
    artist: "Charli XCX",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/1/6/c/0/16c2c243dc9491edc2e4def28a533a22.mp3?hdnea=exp=1739814070~acl=/api/1/1/1/6/c/0/16c2c243dc9491edc2e4def28a533a22.mp3*~data=user_id=0,application_id=42~hmac=42d21971cd8a97e31fc3aa5431eae394d1ac3f254962509f8f89a55cb5522bba",
  },
  {
    id: 75,
    image: "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57",
    name: "EARFQUAKE",
    duration: "3:10",
    artist: "Tyler, the Creator",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/5/c/c/0/5ccb6775df9a07a06e8b5f94b9affec1.mp3?hdnea=exp=1739814071~acl=/api/1/1/5/c/c/0/5ccb6775df9a07a06e8b5f94b9affec1.mp3*~data=user_id=0,application_id=42~hmac=68d74c09bd75a914f39203475ebcc300f466d8af9c7320150b9520b1a0717ad9",
  },
  {
    id: 76,
    image: "https://i.scdn.co/image/ab67616d0000b2738940ac99f49e44f59e6f7fb3",
    name: "See You Again (feat. Kali Uchis)",
    duration: "3:00",
    artist: "Tyler, the Creator",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/1/5/2/0/152df582229560f1ef355fab43102a1e.mp3?hdnea=exp=1739814071~acl=/api/1/1/1/5/2/0/152df582229560f1ef355fab43102a1e.mp3*~data=user_id=0,application_id=42~hmac=12c85702edf9e09b8405ff733de2f3defc0242444cde8a694eb6f46885c4ac8e",
  },
  {
    id: 77,
    image: "https://i.scdn.co/image/ab67616d0000b2735ea9799a88c0760ec03ac6b8",
    name: "Yonkers",
    duration: "4:09",
    artist: "Tyler, the Creator",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/2/e/7/0/2e7c98ef50d8c703b81eff5dd1064c20.mp3?hdnea=exp=1739814072~acl=/api/1/1/2/e/7/0/2e7c98ef50d8c703b81eff5dd1064c20.mp3*~data=user_id=0,application_id=42~hmac=368d77c394d58313cf777a9f53f99cdc819e9f6f692994a0a401bbf91fdcbd91",
  },
  {
    id: 78,
    image: "https://i.scdn.co/image/ab67616d0000b27322007a4aa8a55fe7b1de5632",
    name: "IFHY (feat. Pharrell Williams)",
    duration: "5:19",
    artist: "Tyler, the Creator",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/8/1/d/0/81dc81383c912058f9a2045ab12b6768.mp3?hdnea=exp=1739814072~acl=/api/1/1/8/1/d/0/81dc81383c912058f9a2045ab12b6768.mp3*~data=user_id=0,application_id=42~hmac=76cf4d2975768c5f9b2910561d607b250123381909ba4bcbb645ca8c29f698b9",
  },
  {
    id: 79,
    image: "https://i.scdn.co/image/ab67616d0000b273696b4e67423edd64784bfbb4",
    name: "WUSYANAME",
    duration: "2:02",
    artist: "Tyler, the Creator",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/4/e/6/0/4e64f6ec82c4281f20c87210ce6018df.mp3?hdnea=exp=1739814073~acl=/api/1/1/4/e/6/0/4e64f6ec82c4281f20c87210ce6018df.mp3*~data=user_id=0,application_id=42~hmac=ae6021450e6fea6fb9b8d94da68d8ae6b4d6830e5d46988610964c1711dd618f",
  },
  {
    id: 80,
    image: "https://i.scdn.co/image/ab67616d0000b2738940ac99f49e44f59e6f7fb3",
    name: "Who Dat Boy (feat. A$AP Rocky)",
    duration: "3:25",
    artist: "Tyler, the Creator",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/9/e/0/0/9e0b48520ad452e7d30cc234c610d085.mp3?hdnea=exp=1739814073~acl=/api/1/1/9/e/0/0/9e0b48520ad452e7d30cc234c610d085.mp3*~data=user_id=0,application_id=42~hmac=d652ef4f2221eda0c724ac023c476534f48ef2c797f1a56ccfde3d66438f2fb1",
  },
  {
    id: 81,
    image: "https://i.scdn.co/image/ab67616d0000b273e4bf0d3d9e0224a30ca5f665",
    name: "SMUCKERS (feat. Kanye West & Lil Wayne)",
    duration: "5:34",
    artist: "Tyler, the Creator",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/c/d/e/0/cdeab65be7e2a390f5b814bd05594f2c.mp3?hdnea=exp=1739814074~acl=/api/1/1/c/d/e/0/cdeab65be7e2a390f5b814bd05594f2c.mp3*~data=user_id=0,application_id=42~hmac=fbb5959329b7b60083a81f82f5ea2a619fea0095e456381b815d5251625a9537",
  },
  {
    id: 82,
    image: "https://i.scdn.co/image/ab67616d0000b273696b4e67423edd64784bfbb4",
    name: "LUMBERJACK",
    duration: "2:18",
    artist: "Tyler, the Creator",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/0/f/a/0/0fa7575ad45891cd21bd48db39ecd624.mp3?hdnea=exp=1739814075~acl=/api/1/1/0/f/a/0/0fa7575ad45891cd21bd48db39ecd624.mp3*~data=user_id=0,application_id=42~hmac=b9e88dbe38ce147aa1cbd88e59c214783eb9405a36fa0b3f5b69619d2c113df9",
  },
  {
    id: 83,
    image: "https://i.scdn.co/image/ab67616d0000b273696b4e67423edd64784bfbb4",
    name: "RUNITUP (feat. Teezo Touchdown)",
    duration: "3:50",
    artist: "Tyler, the Creator",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/f/c/e/0/fce9cff188ee43ffe90dbe4d40f86c05.mp3?hdnea=exp=1739814075~acl=/api/1/1/f/c/e/0/fce9cff188ee43ffe90dbe4d40f86c05.mp3*~data=user_id=0,application_id=42~hmac=64736e1e1da1fb302f54035dbf2dd7fcb85d38584746d27216865531c5bb3807",
  },
  {
    id: 84,
    image: "https://i.scdn.co/image/ab67616d0000b2735c9890c0456a3719eeecd8aa",
    name: "Bad Romance",
    duration: "4:55",
    artist: "Lady Gaga",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/3/3/b/0/33b5dc7d2b62c0c1fc8a0402adf0c719.mp3?hdnea=exp=1739814076~acl=/api/1/1/3/3/b/0/33b5dc7d2b62c0c1fc8a0402adf0c719.mp3*~data=user_id=0,application_id=42~hmac=eb8c82522e257389e109312937445b50c673413e03a4fcae849ca19e933b9256",
  },
  {
    id: 85,
    image: "https://i.scdn.co/image/ab67616d0000b273b5d4b4ed17ec86c4b3944af2",
    name: "Born This Way",
    duration: "4:20",
    artist: "Lady Gaga",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/5/6/2/0/5627de841bea48ee30cd40ed971b4bbb.mp3?hdnea=exp=1739814078~acl=/api/1/1/5/6/2/0/5627de841bea48ee30cd40ed971b4bbb.mp3*~data=user_id=0,application_id=42~hmac=1fb05ee48f32a3cedb7fc17b08f682d70f7fd15223b18950a05fb9595d813fc5",
  },
  {
    id: 86,
    image: "https://i.scdn.co/image/ab67616d0000b2737da123c944790bfab54b2522",
    name: "Applause",
    duration: "3:32",
    artist: "Lady Gaga",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/b/d/7/0/bd7b6aa81f3dfcd71ed1b70254c1e7ab.mp3?hdnea=exp=1739814079~acl=/api/1/1/b/d/7/0/bd7b6aa81f3dfcd71ed1b70254c1e7ab.mp3*~data=user_id=0,application_id=42~hmac=a8b89ddc3424428af8963fd42992f327b751b87411f25385d5400d1430e953c6",
  },
  {
    id: 87,
    image: "https://i.scdn.co/image/ab67616d0000b273bfd247438980173d32fd5ba8",
    name: "Alejandro",
    duration: "4:34",
    artist: "Lady Gaga",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/9/7/2/0/9723bd43efc4629ba5183c33eefbbdc2.mp3?hdnea=exp=1739814080~acl=/api/1/1/9/7/2/0/9723bd43efc4629ba5183c33eefbbdc2.mp3*~data=user_id=0,application_id=42~hmac=8c7f879b23567f874da02d14444ed083a46c92ea527d40d273a63c253bf26e22",
  },
  {
    id: 88,
    image: "https://i.scdn.co/image/ab67616d0000b273a5d31644260279be8d0c46c0",
    name: "The Edge of Glory",
    duration: "5:21",
    artist: "Lady Gaga",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/a/6/0/0/a60acc9cfcf619e9f8a64faa6a284821.mp3?hdnea=exp=1739814080~acl=/api/1/1/a/6/0/0/a60acc9cfcf619e9f8a64faa6a284821.mp3*~data=user_id=0,application_id=42~hmac=c6481e9aba1fec92adde753d05454e067cf4f5d4f046ebe6bc375a862d51cc29",
  },
  {
    id: 89,
    image: "https://i.scdn.co/image/ab67616d0000b2738093238ec0c71ef7c95c8fb1",
    name: "Million Reasons",
    duration: "3:25",
    artist: "Lady Gaga",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/0/f/5/0/0f55e1ab62f59a77f198a24311fd2a36.mp3?hdnea=exp=1739814081~acl=/api/1/1/0/f/5/0/0f55e1ab62f59a77f198a24311fd2a36.mp3*~data=user_id=0,application_id=42~hmac=b832db1100dc997c052039b0e8ecdea67079ecc65083ae8c776f8ad9ae698bf6",
  },
  {
    id: 90,
    image: "https://i.scdn.co/image/ab67616d0000b273d2295706e5a306b43fa58e60",
    name: "Crazy",
    duration: "2:17",
    artist: "Doechii",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/9/0/2/0/902322cffa33620bcf226bba770b4f54.mp3?hdnea=exp=1739814083~acl=/api/1/1/9/0/2/0/902322cffa33620bcf226bba770b4f54.mp3*~data=user_id=0,application_id=42~hmac=902e5147267cd9a8c19da9fa71536d0bf5ea82c65ddbed73f7187fa38d995cc8",
  },
  {
    id: 91,
    image: "https://i.scdn.co/image/ab67616d0000b27352eacce7a504c41108f35b31",
    name: "Spookie Coochie",
    duration: "2:14",
    artist: "Doechii",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/9/3/0/0/930e2b0b60e74b2f6a1e3040f1fd6899.mp3?hdnea=exp=1739814083~acl=/api/1/1/9/3/0/0/930e2b0b60e74b2f6a1e3040f1fd6899.mp3*~data=user_id=0,application_id=42~hmac=3fdec27911ef6676388c2e3012d1d4cb2ab9db036c9a2ebc0364083c011b00d8",
  },
  {
    id: 92,
    image: "https://i.scdn.co/image/ab67616d0000b27377b52362f96711bc86d0275a",
    name: "Stressed",
    duration: "3:11",
    artist: "Doechii",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/1/6/0/0/160a9c23a19b3ac3803753d85eecaa68.mp3?hdnea=exp=1739814084~acl=/api/1/1/1/6/0/0/160a9c23a19b3ac3803753d85eecaa68.mp3*~data=user_id=0,application_id=42~hmac=b7d9a9dd0d526e05ae4ed029cb2a21a047281a5098b540a87fea7abea6b9b443",
  },
  {
    id: 93,
    image: "https://i.scdn.co/image/ab67616d0000b273f53ee1c95465eeb8662c86ec",
    name: "Bitch I’m Nice",
    duration: "2:06",
    artist: "Doechii",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/6/c/2/0/6c2e459e414dc3e45ed0581da210bb6c.mp3?hdnea=exp=1739814085~acl=/api/1/1/6/c/2/0/6c2e459e414dc3e45ed0581da210bb6c.mp3*~data=user_id=0,application_id=42~hmac=425721faa456e754ad09533c08c9c6289b8b6f061dbcc86a0397422024e080fb",
  },
  {
    id: 94,
    image: "https://i.scdn.co/image/ab67616d0000b2735b96a8c5d61be8878452f8f1",
    name: "Light My Fire",
    duration: "7:06",
    artist: "The Doors",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/5/e/6/0/5e60a73a6b58b1ea1115b9bc3b48ef9e.mp3?hdnea=exp=1739814086~acl=/api/1/1/5/e/6/0/5e60a73a6b58b1ea1115b9bc3b48ef9e.mp3*~data=user_id=0,application_id=42~hmac=2aac525dc19e9991f4cd9462bd4f1b4265ab92422eb6eea8042bfc5d7ea7b339",
  },
  {
    id: 95,
    image: "https://i.scdn.co/image/ab67616d0000b2735b96a8c5d61be8878452f8f1",
    name: "Break On Through (To the Other Side)",
    duration: "2:26",
    artist: "The Doors",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/2/f/6/0/2f638f31edbc34cb74b9b62357eef38e.mp3?hdnea=exp=1739814086~acl=/api/1/1/2/f/6/0/2f638f31edbc34cb74b9b62357eef38e.mp3*~data=user_id=0,application_id=42~hmac=dde7be96a4ccd3f25b3573f6b36fdac55fb8bbfe08b88f52a03117b83702f367",
  },
  {
    id: 96,
    image: "https://i.scdn.co/image/ab67616d0000b27386339e6cd71cc2a167451ee5",
    name: "People Are Strange",
    duration: "2:13",
    artist: "The Doors",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/7/4/d/0/74deb8e7816df19eaabb7c415c17b1d5.mp3?hdnea=exp=1739814087~acl=/api/1/1/7/4/d/0/74deb8e7816df19eaabb7c415c17b1d5.mp3*~data=user_id=0,application_id=42~hmac=7931dff29878a005f86c435ae0131b1209ef45cb0cea103db67051ff835fbf06",
  },
  {
    id: 97,
    image: "https://i.scdn.co/image/ab67616d0000b2735b96a8c5d61be8878452f8f1",
    name: "The End",
    duration: "11:43",
    artist: "The Doors",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/f/9/3/0/f93d9415ddbad6cb422a9811414b6581.mp3?hdnea=exp=1739814088~acl=/api/1/1/f/9/3/0/f93d9415ddbad6cb422a9811414b6581.mp3*~data=user_id=0,application_id=42~hmac=acc1776b3e9c2631215b197212ec663db73a85cf14b6a3ed450996972c0be4f9",
  },
  {
    id: 98,
    image: "https://i.scdn.co/image/ab67616d0000b2733992c7ab57975935b29fa22b",
    name: "L.A. Woman",
    duration: "7:49",
    artist: "The Doors",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/5/a/4/0/5a4a710d33b2d1fb55f5581cd4283465.mp3?hdnea=exp=1739814088~acl=/api/1/1/5/a/4/0/5a4a710d33b2d1fb55f5581cd4283465.mp3*~data=user_id=0,application_id=42~hmac=3f24e4f6ac1bbc6ab47af1049059886b7ba569c4211b0db345df150ce778a5b0",
  },
  {
    id: 99,
    image: "https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526",
    name: "Pink + White",
    duration: "3:04",
    artist: "Frank Ocean",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/5/3/9/0/539d5ac2b897f16027d0aaf22d844f15.mp3?hdnea=exp=1739814089~acl=/api/1/1/5/3/9/0/539d5ac2b897f16027d0aaf22d844f15.mp3*~data=user_id=0,application_id=42~hmac=b33b891c2dcffe608d83d9d706314f26aaa37b505e22b94cd87ad2a88b5e2ac9",
  },
  {
    id: 100,
    image: "https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526",
    name: "Nights",
    duration: "5:07",
    artist: "Frank Ocean",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/5/3/d/0/53d58b41cb6ec79a4f9a17ffa346ed37.mp3?hdnea=exp=1739814090~acl=/api/1/1/5/3/d/0/53d58b41cb6ec79a4f9a17ffa346ed37.mp3*~data=user_id=0,application_id=42~hmac=21d8bdcad7b5a69575b5bb1ecfb508d0e9c58149566f22abc9671f72ac242e28",
  },
  {
    id: 101,
    image: "https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526",
    name: "Self Control",
    duration: "4:09",
    artist: "Frank Ocean",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/7/7/f/0/77f09c9d4707147c6f2b3d26c494f8aa.mp3?hdnea=exp=1739814090~acl=/api/1/1/7/7/f/0/77f09c9d4707147c6f2b3d26c494f8aa.mp3*~data=user_id=0,application_id=42~hmac=a3317b18e3025a1040adb5691de61942a260bef02c85ade3afef149c5df4aa02",
  },
  {
    id: 102,
    image: "https://i.scdn.co/image/ab67616d0000b273ebbff7725d3ce0739be01787",
    name: "Swim Good",
    duration: "4:17",
    artist: "Frank Ocean",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/d/9/1/0/d91978f3248581e111e00ef672f7d55f.mp3?hdnea=exp=1739814091~acl=/api/1/1/d/9/1/0/d91978f3248581e111e00ef672f7d55f.mp3*~data=user_id=0,application_id=42~hmac=5845f0d91d4d3091a8d376a25bfcaa93ea5a889da987101b63fa5da74b176c6b",
  },
  {
    id: 103,
    image: "https://i.scdn.co/image/ab67616d0000b2737aede4855f6d0d738012e2e5",
    name: "Lost",
    duration: "3:54",
    artist: "Frank Ocean",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/a/e/4/0/ae49bd33fe1e7d943453d52d7f4df995.mp3?hdnea=exp=1739814091~acl=/api/1/1/a/e/4/0/ae49bd33fe1e7d943453d52d7f4df995.mp3*~data=user_id=0,application_id=42~hmac=f82d6ed9d949cfc0b8c63c66dff0f97f57b96424dacd6bd7397c533c2fc63eff",
  },
  {
    id: 104,
    image: "https://i.scdn.co/image/ab67616d0000b2737aede4855f6d0d738012e2e5",
    name: "Pyramids",
    duration: "9:52",
    artist: "Frank Ocean",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/d/3/c/0/d3c5453aed213d67f38aeab7333d327a.mp3?hdnea=exp=1739814092~acl=/api/1/1/d/3/c/0/d3c5453aed213d67f38aeab7333d327a.mp3*~data=user_id=0,application_id=42~hmac=67473fbf9351d583792377909eac3ba06e4b031371441a2389ca7b7adb19efb3",
  },
  {
    id: 105,
    image: "https://i.scdn.co/image/ab67616d0000b2730b1129853982ea17845d4eb6",
    name: "My Own Summer (Shove It)",
    duration: "3:35",
    artist: "Deftones",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/e/9/1/0/e91dc3220397008e2877c81c238b595e.mp3?hdnea=exp=1739814093~acl=/api/1/1/e/9/1/0/e91dc3220397008e2877c81c238b595e.mp3*~data=user_id=0,application_id=42~hmac=39385dd1411cf21774023b7de545ce8d529c400475deb636c9c7a6672dd6228c",
  },
  {
    id: 106,
    image: "https://i.scdn.co/image/ab67616d0000b2730b1129853982ea17845d4eb6",
    name: "Be Quiet and Drive (Far Away)",
    duration: "5:08",
    artist: "Deftones",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/d/0/1/0/d01e6e46868ff64ba6cda4debadfdca5.mp3?hdnea=exp=1739814093~acl=/api/1/1/d/0/1/0/d01e6e46868ff64ba6cda4debadfdca5.mp3*~data=user_id=0,application_id=42~hmac=9acb9995d24001ff3dcf15cfb59888c55f431fd399dcc46006c67d34501aa30d",
  },
  {
    id: 107,
    image: "https://i.scdn.co/image/ab67616d0000b2735c53799f473fa3e1a48c00ed",
    name: "Digital Bath",
    duration: "4:15",
    artist: "Deftones",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/e/0/1/0/e0187fcc08f044419834c54405005203.mp3?hdnea=exp=1739814094~acl=/api/1/1/e/0/1/0/e0187fcc08f044419834c54405005203.mp3*~data=user_id=0,application_id=42~hmac=12927380be81da33f00375eab855408fca800713a26961932b8c3508a5712a2c",
  },
  {
    id: 108,
    image: "https://i.scdn.co/image/ab67616d0000b27372c2145d48f68917a7361b15",
    name: "Sextape",
    duration: "4:01",
    artist: "Deftones",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/d/8/4/0/d846aaab794849d34aa448f07c27ccbc.mp3?hdnea=exp=1739814094~acl=/api/1/1/d/8/4/0/d846aaab794849d34aa448f07c27ccbc.mp3*~data=user_id=0,application_id=42~hmac=934b589ac6e123763f37d48f5566b0f0fbe9d69a3b55848c22e5dfebe0f54b1c",
  },
  {
    id: 109,
    image: "https://i.scdn.co/image/ab67616d0000b2735c53799f473fa3e1a48c00ed",
    name: "Knife Prty",
    duration: "4:49",
    artist: "Deftones",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/1/e/d/0/1ed85cecbc73801a89eaf444827ea014.mp3?hdnea=exp=1739814095~acl=/api/1/1/1/e/d/0/1ed85cecbc73801a89eaf444827ea014.mp3*~data=user_id=0,application_id=42~hmac=26ca2f39320a469bf8ccb22ffe4622cd8fb1a3a70cb87ba6e88f4832cc9e5750",
  },
  {
    id: 110,
    image: "https://i.scdn.co/image/ab67616d0000b273a09b231129ab1cb1a6efc57f",
    name: "This Charming Man",
    duration: "2:42",
    artist: "The Smiths",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/c/b/8/0/cb836f510f8aa8c754947b692d480df5.mp3?hdnea=exp=1739814096~acl=/api/1/1/c/b/8/0/cb836f510f8aa8c754947b692d480df5.mp3*~data=user_id=0,application_id=42~hmac=dfa9ad53e3cfc92897c2ee7f924ed7e467b283aa752b6b3c4288627c3c23a99e",
  },
  {
    id: 111,
    image: "https://i.scdn.co/image/ab67616d0000b273ed3953f8af1f764a146b7583",
    name: "Panic",
    duration: "2:19",
    artist: "The Smiths",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/3/9/e/0/39ec3a75b68a5f03c695d9a84bbcb8f3.mp3?hdnea=exp=1739814097~acl=/api/1/1/3/9/e/0/39ec3a75b68a5f03c695d9a84bbcb8f3.mp3*~data=user_id=0,application_id=42~hmac=b57db965c5bc03606385b01725885fca1fcfee8ed8e0dc0c3e78c494c4317163",
  },
  {
    id: 112,
    image: "https://i.scdn.co/image/ab67616d0000b273ada101c2e9e97feb8fae37a9",
    name: "Bigmouth Strikes Again",
    duration: "3:12",
    artist: "The Smiths",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/4/9/d/0/49d603b02c5547c78d66fce973ba3ba3.mp3?hdnea=exp=1739814097~acl=/api/1/1/4/9/d/0/49d603b02c5547c78d66fce973ba3ba3.mp3*~data=user_id=0,application_id=42~hmac=0dc4173e1cbe6f19d38f0a93dfaccfe35060141257a2363c6a75cd6b6643894e",
  },
  {
    id: 113,
    image: "https://i.scdn.co/image/ab67616d0000b273786b44c75ebf915866523f5b",
    name: "Heaven Knows I'm Miserable Now",
    duration: "3:34",
    artist: "The Smiths",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/5/6/8/0/56825f975b32e8fe012674ec980d58fd.mp3?hdnea=exp=1739814098~acl=/api/1/1/5/6/8/0/56825f975b32e8fe012674ec980d58fd.mp3*~data=user_id=0,application_id=42~hmac=616dfb3a7488bcd35707a354912832f7cd66a0a8cf0a3e221ca3ebaf3b4ed7b4",
  },
  {
    id: 114,
    image: "https://i.scdn.co/image/ab67616d0000b273786b44c75ebf915866523f5b",
    name: "Please, Please, Please, Let Me Get What I Want",
    duration: "1:50",
    artist: "The Smiths",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/8/e/e/0/8eed0215a62806df4d34648cfe38b16f.mp3?hdnea=exp=1739814099~acl=/api/1/1/8/e/e/0/8eed0215a62806df4d34648cfe38b16f.mp3*~data=user_id=0,application_id=42~hmac=537afb2713f49ca4cefae0697de1d2409324568806d05c5fcfb68008878bdde8",
  },
  {
    id: 115,
    image: "https://i.scdn.co/image/ab67616d0000b273ada101c2e9e97feb8fae37a9",
    name: "The Boy with the Thorn in His Side",
    duration: "3:15",
    artist: "The Smiths",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/0/5/7/0/0571c8b44eb0862ae8629135c0e138c3.mp3?hdnea=exp=1739814099~acl=/api/1/1/0/5/7/0/0571c8b44eb0862ae8629135c0e138c3.mp3*~data=user_id=0,application_id=42~hmac=5d19b7a6fcab6f953006f9d2e3842648cba6db4dc7d05108719f072cae5bdf8e",
  },
  {
    id: 116,
    image: "https://i.scdn.co/image/ab67616d0000b2737c39dd133836c2c1c87e34d6",
    name: "Don't Stop Me Now",
    duration: "3:29",
    artist: "Queen",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/4/2/4/0/424c67c4ef4d10490bdfad20a9f31c50.mp3?hdnea=exp=1739814100~acl=/api/1/1/4/2/4/0/424c67c4ef4d10490bdfad20a9f31c50.mp3*~data=user_id=0,application_id=42~hmac=a3ae9281cac0812b37f6eb56d1224edb2cdf52b2f54895dc6493baa6d5d27232",
  },
  {
    id: 117,
    image: "https://i.scdn.co/image/ab67616d0000b273056e90910cbaf5c5b892aeba",
    name: "Another One Bites the Dust",
    duration: "3:35",
    artist: "Queen",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/3/e/4/0/3e49a6a7252db65362160dfe7b379c67.mp3?hdnea=exp=1739814100~acl=/api/1/1/3/e/4/0/3e49a6a7252db65362160dfe7b379c67.mp3*~data=user_id=0,application_id=42~hmac=dc1f3eb9092eea877e1120c60c4f7e5970b3686b88bdb803231412f750a4a32a",
  },
  {
    id: 118,
    image: "https://i.scdn.co/image/ab67616d0000b2731f7077ae1018b5fbab08dfa8",
    name: "We Will Rock You",
    duration: "2:02",
    artist: "Queen",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/b/6/e/0/b6e24a417b2dcefe0601a9c577bc4ea9.mp3?hdnea=exp=1739814101~acl=/api/1/1/b/6/e/0/b6e24a417b2dcefe0601a9c577bc4ea9.mp3*~data=user_id=0,application_id=42~hmac=bdca5fb5d581a2398faabab24b790cd87f96a6a614f4b55dd6d6b5faa3a031bb",
  },
  {
    id: 119,
    image: "https://i.scdn.co/image/ab67616d0000b2731f7077ae1018b5fbab08dfa8",
    name: "We Are the Champions",
    duration: "2:59",
    artist: "Queen",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/b/b/7/0/bb7b50b48ed25fc67029e196708da1a5.mp3?hdnea=exp=1739814102~acl=/api/1/1/b/b/7/0/bb7b50b48ed25fc67029e196708da1a5.mp3*~data=user_id=0,application_id=42~hmac=dcc02f06eccb0b44051d86b62aaa278002366b01acc8ad01e34fa2d31ccc5bd1",
  },
  {
    id: 120,
    image: "https://i.scdn.co/image/ab67616d0000b27367bc29c251c777361b17a190",
    name: "Somebody to Love",
    duration: "4:56",
    artist: "Queen",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/0/5/9/0/0590735cffe27dd5fab09020d9e50537.mp3?hdnea=exp=1739814102~acl=/api/1/1/0/5/9/0/0590735cffe27dd5fab09020d9e50537.mp3*~data=user_id=0,application_id=42~hmac=d36ae11be8dbbf79f8a46968b78bd68145d9a79921dfe078dd5243487a80de0a",
  },
  {
    id: 121,
    image: "https://i.scdn.co/image/ab67616d0000b273fbc71c99f9c1296c56dd51b6",
    name: "Come as You Are",
    duration: "3:39",
    artist: "Nirvana",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/2/7/c/0/27c313fdbf4ae7aec1ac264c10e110e2.mp3?hdnea=exp=1739814103~acl=/api/1/1/2/7/c/0/27c313fdbf4ae7aec1ac264c10e110e2.mp3*~data=user_id=0,application_id=42~hmac=f273fbcf693939835e64818e627e8e2237f88537b7558cafbc5ea8c6cb8be73d",
  },
  {
    id: 122,
    image: "https://i.scdn.co/image/ab67616d0000b273fbc71c99f9c1296c56dd51b6",
    name: "Lithium",
    duration: "4:17",
    artist: "Nirvana",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/1/1/7/0/1174a6c09fbc3fe39c1d01e49de8c85b.mp3?hdnea=exp=1739814104~acl=/api/1/1/1/1/7/0/1174a6c09fbc3fe39c1d01e49de8c85b.mp3*~data=user_id=0,application_id=42~hmac=d42c8c6512384bab433889d4dc12c1d3c0d06a037676fbb8cf485651c74a609c",
  },
  {
    id: 123,
    image: "https://i.scdn.co/image/ab67616d0000b273aca059cebc1841277db22d1c",
    name: "Heart-Shaped Box",
    duration: "4:41",
    artist: "Nirvana",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/c/3/9/0/c39f01809050b9080daec9ef63c20e9d.mp3?hdnea=exp=1739814104~acl=/api/1/1/c/3/9/0/c39f01809050b9080daec9ef63c20e9d.mp3*~data=user_id=0,application_id=42~hmac=f8c17bb6a09fee4d22b9b5d0498442f70c0504374b000c61258d8229f9c74e7d",
  },
  {
    id: 124,
    image: "https://i.scdn.co/image/ab67616d0000b273fbc71c99f9c1296c56dd51b6",
    name: "In Bloom",
    duration: "4:14",
    artist: "Nirvana",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/3/2/5/0/325e263266ce02ceac5d0dec47f39754.mp3?hdnea=exp=1739814105~acl=/api/1/1/3/2/5/0/325e263266ce02ceac5d0dec47f39754.mp3*~data=user_id=0,application_id=42~hmac=500669d92c39e6c363972e916a67d37eb16e32b4f34b84eb0bb6cb1bb04db8e3",
  },
  {
    id: 125,
    image: "https://i.scdn.co/image/ab67616d0000b273c4f52ef8782f0e8ede4c1aaf",
    name: "All Apologies",
    duration: "3:51",
    artist: "Nirvana",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/9/9/4/0/994ff8d73fcb296f821772f6124f79f9.mp3?hdnea=exp=1739814105~acl=/api/1/1/9/9/4/0/994ff8d73fcb296f821772f6124f79f9.mp3*~data=user_id=0,application_id=42~hmac=e4c895edad47ed3c8a70e91ff9e57ea5187c8fa47832f29c5394d46d4370ac74",
  },
  {
    id: 126,
    image: "https://i.scdn.co/image/ab67616d0000b273f6c46838e4425ea96e2562fe",
    name: "Clint Eastwood",
    duration: "5:41",
    artist: "Gorillaz",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/d/2/e/0/d2eac3654c6d1e9fed14cb6f22c352ac.mp3?hdnea=exp=1739814106~acl=/api/1/1/d/2/e/0/d2eac3654c6d1e9fed14cb6f22c352ac.mp3*~data=user_id=0,application_id=42~hmac=8bacb2ce55208cdc84705deeb72d5aa21953e48e8f88b9c7f488e9c37ec2cf15",
  },
  {
    id: 127,
    image: "https://i.scdn.co/image/ab67616d0000b273661d019f34569f79eae9e985",
    name: "On Melancholy Hill",
    duration: "3:53",
    artist: "Gorillaz",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/b/1/0/0/b108950ed3d436a8cd7ac42fdea6dd68.mp3?hdnea=exp=1739814107~acl=/api/1/1/b/1/0/0/b108950ed3d436a8cd7ac42fdea6dd68.mp3*~data=user_id=0,application_id=42~hmac=516c3eeb17d2f13a014a4abce20fadb717e346408a8f5523d98d344a9f4d4b85",
  },
  {
    id: 128,
    image: "https://i.scdn.co/image/ab67616d0000b27319d85a472f328a6ed9b704cf",
    name: "DARE",
    duration: "4:04",
    artist: "Gorillaz",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/a/4/3/0/a43aadd39f5c619caddbc87ac3caf3b0.mp3?hdnea=exp=1739814107~acl=/api/1/1/a/4/3/0/a43aadd39f5c619caddbc87ac3caf3b0.mp3*~data=user_id=0,application_id=42~hmac=07532e12f6467fa8b94b4c235e6e589c653a2aa97c8145bd5824528cedcbf8f5",
  },
  {
    id: 129,
    image: "https://i.scdn.co/image/ab67616d0000b27319d85a472f328a6ed9b704cf",
    name: "Dirty Harry",
    duration: "3:43",
    artist: "Gorillaz",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/0/f/6/0/0f6a4c0a1caac734674877e1ce6fa41c.mp3?hdnea=exp=1739814108~acl=/api/1/1/0/f/6/0/0f6a4c0a1caac734674877e1ce6fa41c.mp3*~data=user_id=0,application_id=42~hmac=1f5718bc65f0cf27a0cf4ce8c3275e66ce015d343b5e712ae5d8f74dd63fdf9f",
  },
  {
    id: 130,
    image: "https://i.scdn.co/image/ab67616d0000b273661d019f34569f79eae9e985",
    name: "Stylo (feat. Mos Def & Bobby Womack)",
    duration: "4:30",
    artist: "Gorillaz",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/6/c/d/0/6cd11658b93b82c92416c7045c5aec53.mp3?hdnea=exp=1739814109~acl=/api/1/1/6/c/d/0/6cd11658b93b82c92416c7045c5aec53.mp3*~data=user_id=0,application_id=42~hmac=33bcad55bb21049ccf4a25cc11ac1d88b2a67417eea2a3735a38cac8cdcc2a1c",
  },
  {
    id: 131,
    image: "https://i.scdn.co/image/ab67616d0000b27334cbf7013afccc7df67fa43f",
    name: "Girls & Boys",
    duration: "4:50",
    artist: "Blur",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/5/d/5/0/5d511771e5aca8f0ba4be4ada49b3feb.mp3?hdnea=exp=1739814109~acl=/api/1/1/5/d/5/0/5d511771e5aca8f0ba4be4ada49b3feb.mp3*~data=user_id=0,application_id=42~hmac=f40c802144154cfe4e6189496deec954c6202798903a16c6e6be184efd3abd37",
  },
  {
    id: 132,
    image: "https://i.scdn.co/image/ab67616d0000b2732e4d97729bab58f1c0eabd33",
    name: "Parklife",
    duration: "3:07",
    artist: "Blur",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/a/5/b/0/a5b0f79300487549a0a34af72da2a6d5.mp3?hdnea=exp=1739814110~acl=/api/1/1/a/5/b/0/a5b0f79300487549a0a34af72da2a6d5.mp3*~data=user_id=0,application_id=42~hmac=6304e653428075e2a3cbc003620644f2f4b309488aa24a8566b7b1649464006b",
  },
  {
    id: 133,
    image: "https://i.scdn.co/image/ab67616d0000b27394983882a5effd77742a9f52",
    name: "Coffee & TV",
    duration: "5:58",
    artist: "Blur",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/c/7/a/0/c7a8cd09aa7733e4e2636b27269ad738.mp3?hdnea=exp=1739814110~acl=/api/1/1/c/7/a/0/c7a8cd09aa7733e4e2636b27269ad738.mp3*~data=user_id=0,application_id=42~hmac=ec37555a5bdd35997941b78b31d1f456699cdc4519ae687d5cb4640f253ee534",
  },
  {
    id: 134,
    image: "https://i.scdn.co/image/ab67616d0000b27394983882a5effd77742a9f52",
    name: "Tender",
    duration: "7:41",
    artist: "Blur",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/3/0/c/0/30c0d64507bb23e63a76471753453afb.mp3?hdnea=exp=1739814111~acl=/api/1/1/3/0/c/0/30c0d64507bb23e63a76471753453afb.mp3*~data=user_id=0,application_id=42~hmac=c7250dcdc50a45b95492e0782d47b14dd939e9bd476c4b73c0fa1b8f3286559b",
  },
  {
    id: 135,
    image: "https://i.scdn.co/image/ab67616d0000b273de114203356c1f7b136960b6",
    name: "Beetlebum",
    duration: "5:04",
    artist: "Blur",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/5/8/0/0/580fd9e98534c47a3354975a2882637c.mp3?hdnea=exp=1739814112~acl=/api/1/1/5/8/0/0/580fd9e98534c47a3354975a2882637c.mp3*~data=user_id=0,application_id=42~hmac=be3f34ca20bd60e9c43b4938046a1ae9959f266c7350ab53b729348056c1c1fc",
  },
  {
    id: 136,
    image: "https://i.scdn.co/image/ab67616d0000b273d6edad0d4fc3448ccc61c13c",
    name: "The Universal",
    duration: "4:00",
    artist: "Blur",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/2/3/a/0/23a220bf3c307ef303eae3de93262a7f.mp3?hdnea=exp=1739814112~acl=/api/1/1/2/3/a/0/23a220bf3c307ef303eae3de93262a7f.mp3*~data=user_id=0,application_id=42~hmac=d6ddcf25275541671c70fee2905e1f6a8dfb64b171f4ac062fb0f13eebe85542",
  },
  {
    id: 137,
    image: "https://i.scdn.co/image/ab67616d0000b27372bde512e9cdcace2dec2571",
    name: "She's So High",
    duration: "4:45",
    artist: "Blur",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/8/1/a/0/81aacc768309dd4f04b77d4c6ad84703.mp3?hdnea=exp=1739814113~acl=/api/1/1/8/1/a/0/81aacc768309dd4f04b77d4c6ad84703.mp3*~data=user_id=0,application_id=42~hmac=efa89f8204bc501a381164b25cb1bf95b049b8ec62667ec5c7051dc3b4fed9ee",
  },
  {
    id: 138,
    image: "https://i.scdn.co/image/ab67616d0000b2733395f3e809dfbc2b1101d464",
    name: "Space Oddity",
    duration: "5:14",
    artist: "David Bowie",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/7/d/3/0/7d342da36946904f066ef209124d086e.mp3?hdnea=exp=1739814114~acl=/api/1/1/7/d/3/0/7d342da36946904f066ef209124d086e.mp3*~data=user_id=0,application_id=42~hmac=6017f4395c4053bed70526637ab27eea6564759e50e96ffdc42ff8e34a6ca458",
  },
  {
    id: 139,
    image: "https://i.scdn.co/image/ab67616d0000b273c41f4e1133b0e6c5fcf58680",
    name: "Starman",
    duration: "4:16",
    artist: "David Bowie",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/3/2/e/0/32ec224312fa06b6d87756befc92cc1e.mp3?hdnea=exp=1739814115~acl=/api/1/1/3/2/e/0/32ec224312fa06b6d87756befc92cc1e.mp3*~data=user_id=0,application_id=42~hmac=939601a633fa35023a9fb121194e3479122d31438c61131f4785c64b5a713965",
  },
  {
    id: 140,
    image: "https://i.scdn.co/image/ab67616d0000b273db0917ddd4139153bc1d1a1a",
    name: "Let's Dance",
    duration: "4:08",
    artist: "David Bowie",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/b/4/6/0/b462107309ad7e868cdec1a09aecaa50.mp3?hdnea=exp=1739814115~acl=/api/1/1/b/4/6/0/b462107309ad7e868cdec1a09aecaa50.mp3*~data=user_id=0,application_id=42~hmac=df62dc4e17fc3fd3990b2077b9dde4004be5cb9bc602f8a4137d8abeef3415e3",
  },
  {
    id: 141,
    image: "https://i.scdn.co/image/ab67616d0000b273ad22c83a6e1567f8453c32b3",
    name: "Rebel Rebel",
    duration: "4:30",
    artist: "David Bowie",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/f/b/f/0/fbfd6fd086759473375edefdb032ce70.mp3?hdnea=exp=1739814116~acl=/api/1/1/f/b/f/0/fbfd6fd086759473375edefdb032ce70.mp3*~data=user_id=0,application_id=42~hmac=8b4c3693e0eaf8f5213d8d1321f44c2bc6092f9600c23145ee93cff75f6d64cf",
  },
  {
    id: 142,
    image: "https://i.scdn.co/image/ab67616d0000b273b3bd6493ad6e29dcd2ad5a37",
    name: "Fame",
    duration: "4:12",
    artist: "David Bowie",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/2/b/e/0/2bef384ae831fdb6ffa018c0e1728b5a.mp3?hdnea=exp=1739814117~acl=/api/1/1/2/b/e/0/2bef384ae831fdb6ffa018c0e1728b5a.mp3*~data=user_id=0,application_id=42~hmac=83d8743fbeacb8c488dbd1558a7198b02f138ba81a3a94302a868f7d89eababf",
  },
  {
    id: 143,
    image: "https://i.scdn.co/image/ab67616d0000b27346926e777bd6665f03128d29",
    name: "The Man Who Sold the World",
    duration: "3:57",
    artist: "David Bowie",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/b/e/1/0/be1501d4272c1c8a45b56ee872ec369c.mp3?hdnea=exp=1739814117~acl=/api/1/1/b/e/1/0/be1501d4272c1c8a45b56ee872ec369c.mp3*~data=user_id=0,application_id=42~hmac=b6d35e813a4ad64702ec8cd8586d476a9fef39003aaa85e53dfef8d52592b4bd",
  },
  {
    id: 144,
    image: "https://i.scdn.co/image/ab67616d0000b273c41f4e1133b0e6c5fcf58680",
    name: "Ziggy Stardust",
    duration: "3:13",
    artist: "David Bowie",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/5/e/9/0/5e9ecf657d59f68b63d7ca4358d536e8.mp3?hdnea=exp=1739814118~acl=/api/1/1/5/e/9/0/5e9ecf657d59f68b63d7ca4358d536e8.mp3*~data=user_id=0,application_id=42~hmac=ff131ef9666e7d6f31b348bb3d554b2b50bb471146622bd93105844c17c28e81",
  },
  {
    id: 145,
    image: "https://i.scdn.co/image/ab67616d0000b273db0917ddd4139153bc1d1a1a",
    name: "Modern Love",
    duration: "4:48",
    artist: "David Bowie",
    audio:
      "https://cdnt-preview.dzcdn.net/api/1/1/a/3/4/0/a34432d3c61d086fb842ed5202338e95.mp3?hdnea=exp=1739814118~acl=/api/1/1/a/3/4/0/a34432d3c61d086fb842ed5202338e95.mp3*~data=user_id=0,application_id=42~hmac=30d9493a066aa84ea97759e2eeb04661a98c17205d28ba0de10ab2fba0ff5610",
  },
];*/

import { songsArray } from "../../../api/api.js";
export { songsArray };
