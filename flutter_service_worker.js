'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ca76b1f658399e03e36f69e248e5cf4f",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/lib/assets/images/artifacts/Aegis.png": "bf135e73eecabec037f9e52c43f48d63",
"assets/lib/assets/images/artifacts/AmethystStaff.png": "8ac4bc6f054c1e525bdec2cf5b2d5285",
"assets/lib/assets/images/artifacts/AmrbosiaElixir.png": "af018a6ce670552d436e378c72b83c18",
"assets/lib/assets/images/artifacts/ApolloOrb.png": "628290ac5fb34fb5ff680932c845e5b3",
"assets/lib/assets/images/artifacts/AramSpear.png": "85f3b1a84845b7077d667742b183816f",
"assets/lib/assets/images/artifacts/AvianFeather.png": "ac59d3a8250c615aae1c3e28ced0de33",
"assets/lib/assets/images/artifacts/AxeOfMuerte.png": "3a1f1cf5c5a3d239aa28ae803a24b660",
"assets/lib/assets/images/artifacts/BladeOfDamocles.png": "efb7a5b065cd99fa985b1d5d806c0d1a",
"assets/lib/assets/images/artifacts/BookOfProphecy.png": "67aa932af4908777cbc302440f253de6",
"assets/lib/assets/images/artifacts/BookOfShadows.png": "e5c801859dfd697142c415dbc78bae89",
"assets/lib/assets/images/artifacts/BootsOfHermes.png": "1150e3a6ada01e73e11c56860586cc9a",
"assets/lib/assets/images/artifacts/BringerOfRagnarok.png": "1a0b3af2539336ec819bcae4cd48b55e",
"assets/lib/assets/images/artifacts/ChargedCard.png": "b7ebc097c868fbfe6a0f38893c5ca673",
"assets/lib/assets/images/artifacts/CharmOfTheAncient.png": "3af1df054d99cf93a9ceea3586811e80",
"assets/lib/assets/images/artifacts/ChestOfContentment.png": "ac3ebf60e28a75189441690e8e6915b5",
"assets/lib/assets/images/artifacts/CoinsOfEbizu.png": "36ccf88a3c99749df9a551244a3902c7",
"assets/lib/assets/images/artifacts/CorruptedRuneHeart.png": "9db839d114594b8214453c0985d277e7",
"assets/lib/assets/images/artifacts/CrownOfTheConstellation.png": "343436585762eabb46d1d374ffc39bdb",
"assets/lib/assets/images/artifacts/DivineChalice.png": "dfb2145dd4326de3e581dfcb1ec100df",
"assets/lib/assets/images/artifacts/DivineRetribution.png": "4f8d2619417c49efc84c94ce99922769",
"assets/lib/assets/images/artifacts/DrunkenHammer.png": "2d9fe9e6c4efbb9cbd52b90941cdc267",
"assets/lib/assets/images/artifacts/DurendalSword.png": "917fba170e8ccc9fa1dbb987df842bf7",
"assets/lib/assets/images/artifacts/EarringsOfPortara.png": "038d45d19dc9f725a8903f70255797e6",
"assets/lib/assets/images/artifacts/EggOfFortune.png": "e32b0c29d717735ff84b0c2f55c7f2ed",
"assets/lib/assets/images/artifacts/ElizerOfEden.png": "ef0a89d534b1d0190c2a41a8099580ef",
"assets/lib/assets/images/artifacts/EssenceOfTheKitsune.png": "33dc67d0920850186b82770b0229151d",
"assets/lib/assets/images/artifacts/EverGrowingStack.png": "316d2ff8c89a150017062bcda1c7da46",
"assets/lib/assets/images/artifacts/Fagin'sGrip.png": "850c278bb23459716b00245370be3371",
"assets/lib/assets/images/artifacts/FluteOfTheSoloist.png": "d309501b87cb396d7de5942b887bfaea",
"assets/lib/assets/images/artifacts/FolaigeOfTheKeeper.png": "7b05bd260f71b53ef4b7f24c3470a94d",
"assets/lib/assets/images/artifacts/ForbiddenScroll.png": "6d245a20fbebf5e77cb24b308e81ff10",
"assets/lib/assets/images/artifacts/FruitOfEden.png": "51f5d0e1c4e13204823bd77500610fd9",
"assets/lib/assets/images/artifacts/FuriesBow.png": "0cc8915ec0f42bb2af516430f7ed3b0c",
"assets/lib/assets/images/artifacts/GlacialAxe.png": "768e9543c516330e24edb53e1a686125",
"assets/lib/assets/images/artifacts/GloveOfKuma.png": "029e02aea9db6da5bc31b2f6a7cd48e1",
"assets/lib/assets/images/artifacts/GreatFayMedallion.png": "8961d7be77f7595b9a399289b3ea5c3a",
"assets/lib/assets/images/artifacts/HadesOrb.png": "d66a28ef2b07e3b52b83db841c23fc12",
"assets/lib/assets/images/artifacts/HeartOfStorms.png": "c90f412bb43c1aedff2ac83cfadcfb5a",
"assets/lib/assets/images/artifacts/HeavenlySword.png": "ac75425e2da231f80531f46a4cc5f744",
"assets/lib/assets/images/artifacts/HelheimSkull.png": "10e8c4a3370bbc556dfccfcec9680135",
"assets/lib/assets/images/artifacts/HelmetOfMadness.png": "01c2824d50b29540511b11f25573ae6a",
"assets/lib/assets/images/artifacts/HelmOfHermes.png": "e42a4446fd64dc63e194e6a77d3b4564",
"assets/lib/assets/images/artifacts/Hero'sBlade.png": "473935d9cda36806d8ebeae4c1184c11",
"assets/lib/assets/images/artifacts/HeroicShield.png": "c7a2ff60ce305288cb487d84e76ab2fd",
"assets/lib/assets/images/artifacts/HourglassOfTheImpatient.png": "5e5e034b6bc2c5265f75719adb13c05a",
"assets/lib/assets/images/artifacts/Hunter'sOintment.png": "1921d9ee327bb07ad2d900ff1cd98e8f",
"assets/lib/assets/images/artifacts/InfinityPendulum.png": "65dce29fcd155841c867f35852596934",
"assets/lib/assets/images/artifacts/InfluentialElixir.png": "4f45752e692ce91318c0082ebfa28afe",
"assets/lib/assets/images/artifacts/Invader'sGjalarhorn.png": "4d3125861d389098f28e1f7ccd5318ae",
"assets/lib/assets/images/artifacts/Invader'sShield.png": "947f56e77839dc0b50512161a588cb09",
"assets/lib/assets/images/artifacts/KhrysosBowl.png": "7b84cecb2bcb68484b8f7eede546077e",
"assets/lib/assets/images/artifacts/Laborer'sPendant.png": "0562f65cb313f5c42eb82ed9e141031c",
"assets/lib/assets/images/artifacts/LostKing'sMask.png": "ed956fbffd844d25bd0c604075970bf1",
"assets/lib/assets/images/artifacts/LuckyFootOfAl-mi'Raj.png": "bcc9564749eaf07e93b08ab1ce0eb346",
"assets/lib/assets/images/artifacts/MoonlightBracelet.png": "19c15e0ae8897201942b5cdb698977b6",
"assets/lib/assets/images/artifacts/MorgelaiSword.png": "da176e157f48b5596c129a0f4d1f81f9",
"assets/lib/assets/images/artifacts/MysticalBeansOfSenzu.png": "def5848a8c000bc0c0b2a72423b21934",
"assets/lib/assets/images/artifacts/MysticStaff.png": "6478287836033746fa01e1bb53bb4217",
"assets/lib/assets/images/artifacts/NekoSculpture.png": "97c45848f1a357e26806e2f31ccba62c",
"assets/lib/assets/images/artifacts/O'Ryan'sCharm.png": "3d8e27ee0a2b278f130d710f31d0bb24",
"assets/lib/assets/images/artifacts/OakStaff.png": "c3ca858ecabc7936aa84ecea3e831bce",
"assets/lib/assets/images/artifacts/Oath'sBurden.png": "1f68224bf9d8be153508627ec3c47d69",
"assets/lib/assets/images/artifacts/OberonPendant.png": "cce5df0d4464f9640f78ebe2f7596182",
"assets/lib/assets/images/artifacts/OldKing'sStamp.png": "9c32a71124feb65c92ddeee34d5657f4",
"assets/lib/assets/images/artifacts/ParchmentOfForesight.png": "65693a82e6642779546c1260b24c7cac",
"assets/lib/assets/images/artifacts/PhantomTimepiece.png": "cc6a82ba829901503023108cdecabc37",
"assets/lib/assets/images/artifacts/QuillOfScrolls.png": "af3c34b569945c9b2b991eaff3292fa0",
"assets/lib/assets/images/artifacts/RingingStone.png": "0efe79338f67f0ed3c624e8350b07322",
"assets/lib/assets/images/artifacts/RingOfCalisto.png": "7b101d0231a0dee146ee1e6d10189810",
"assets/lib/assets/images/artifacts/RingOfFealty.png": "d61e1afbfda811c8abf0e5051d2c6605",
"assets/lib/assets/images/artifacts/RoyalToxin.png": "81b9c90eccca5b5ecb4eab8eb7bf5d6c",
"assets/lib/assets/images/artifacts/SamosekSword.png": "01fb5247cf0e7535b5a64c10c796b0b0",
"assets/lib/assets/images/artifacts/SigilsOfJudgment.png": "066283abb90a6bb6ea80b9f73a4c2aab",
"assets/lib/assets/images/artifacts/Spearit'sVirgil.png": "78ad143606d6486f6094de8930fb64e1",
"assets/lib/assets/images/artifacts/StaffOfRadiance.png": "ffb04f420dcff00603cbcebc43b7dd0b",
"assets/lib/assets/images/artifacts/StoneOfValrune.png": "d0cc1a1a82eb5dc70ed241a1ea581020",
"assets/lib/assets/images/artifacts/StrangeFruit.png": "441f9123e22f724d70a597c86fb2b209",
"assets/lib/assets/images/artifacts/Stryfe'sPeace.png": "346b3cc6b08004aa44fbd82754a253bf",
"assets/lib/assets/images/artifacts/SwampGauntlet.png": "e9835bcbbf8c01495c96971a9eba0f91",
"assets/lib/assets/images/artifacts/SwordOfTheRoyals.png": "029f986522db9ebc5ec14febeb472060",
"assets/lib/assets/images/artifacts/TheArcanaCloak.png": "779d2d543f7aca6be675d0452fc6a7c0",
"assets/lib/assets/images/artifacts/TheBronzeCompass.png": "042095cf06f1a4d06c5e1d1563486ed1",
"assets/lib/assets/images/artifacts/TheCobaltPlate.png": "0a5364ee0875af132bcfa6d6b8558af6",
"assets/lib/assets/images/artifacts/TheMagnifier.png": "e61081dc83f93dc84909bb0fc54a89e6",
"assets/lib/assets/images/artifacts/TheMasterSword.png": "87d073c90ee53212221af720b46b3811",
"assets/lib/assets/images/artifacts/TheRetaliator.png": "0cd59fcc8dbd96bc98778ee5bd6b622e",
"assets/lib/assets/images/artifacts/TheSwordOfStorms.png": "d3e050abd000beb8e45951002552e2aa",
"assets/lib/assets/images/artifacts/TheTreasureOfFergus.png": "4b94ecd38d67702806025e72d21e1a7d",
"assets/lib/assets/images/artifacts/TheWhiteDwarf.png": "267991c54c681cd5928b78e5c9520bb4",
"assets/lib/assets/images/artifacts/TinyTitanTree.png": "3f4de7c07abea7e17419f540dcf7cbd2",
"assets/lib/assets/images/artifacts/Titan'sMask.png": "a7b5776fff6108a2035dd33477a8f5d7",
"assets/lib/assets/images/artifacts/Titania'sSceptre.png": "9c2e70b43a3a71182e2b86d501b2a7c5",
"assets/lib/assets/images/artifacts/TitaniumPlating.png": "342924dcd60a28e5fffc8950322017dc",
"assets/lib/assets/images/artifacts/TitanSpear.png": "4c6bb64e38f781521b63e85cc5acf4a7",
"assets/lib/assets/images/artifacts/UnboundGauntlet.png": "2b235b63b698ffb8c5b2baf0accdd714",
"assets/lib/assets/images/artifacts/WardOfTheDarkness.png": "9d6faf096a42a647e978a7a55dd23382",
"assets/lib/assets/images/artifacts/ZakynthosCoin.png": "f3ee1ec66901392f87a75d1392d4aa23",
"assets/LICENSE": "28548ae61e5939af0f77b5e500811dad",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "a6a7134665b83291c44be22e66b2fd59",
"/": "a6a7134665b83291c44be22e66b2fd59",
"main.dart.js": "5ec961f2e70fa1e6978f5c40a33db857",
"manifest.json": "2ae2382018e4456b9e8983657cee671e"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
