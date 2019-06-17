/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1b7a170fc74c5867506c1d822d7df536"
  },
  {
    "url": "about/index.html",
    "revision": "0f7653700f5c5a3707c6af57538e0257"
  },
  {
    "url": "assets/css/0.styles.6ba01dbc.css",
    "revision": "d11c19f89937e6ff1fdea80be1e138ed"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.60c20073.js",
    "revision": "fe51adb3d18de078d3cd8bc7a32f9b06"
  },
  {
    "url": "assets/js/11.98920e80.js",
    "revision": "7cd6e81e4065239f93cc5252b8bb5945"
  },
  {
    "url": "assets/js/12.d4e51d6f.js",
    "revision": "cd74dc7f6284bbe8ed84d3629603855f"
  },
  {
    "url": "assets/js/13.dfc4b2d6.js",
    "revision": "d45c97dd6291568c763e2834b54a0666"
  },
  {
    "url": "assets/js/14.ea8fc426.js",
    "revision": "a7fb49a30a2a9ba2133c91c46e9b9ac9"
  },
  {
    "url": "assets/js/15.cf2b349e.js",
    "revision": "d0684d8cdd3d7923c03f4b3cb9420319"
  },
  {
    "url": "assets/js/16.33c0a334.js",
    "revision": "1dd09a96d21c78d156a651ecf7f1d9a7"
  },
  {
    "url": "assets/js/17.e42d6730.js",
    "revision": "7564812eec0d8d85514c56760924e53a"
  },
  {
    "url": "assets/js/18.a7394282.js",
    "revision": "493d2f191e719331a9e879e4e280d420"
  },
  {
    "url": "assets/js/19.8317b7f6.js",
    "revision": "516cea1bb36bea9cbf8225c76e922bfd"
  },
  {
    "url": "assets/js/2.1b6b2427.js",
    "revision": "b1f0a096318f66d8186d8e62d8085f33"
  },
  {
    "url": "assets/js/20.910e8aff.js",
    "revision": "786c11d39c1474965f3f38d3bcf0dc55"
  },
  {
    "url": "assets/js/3.34049713.js",
    "revision": "a9f4cf4e4876b84d8d39f1bdb5f607a2"
  },
  {
    "url": "assets/js/4.b7049aa0.js",
    "revision": "a31983dc68553b1ded590442c6c86aac"
  },
  {
    "url": "assets/js/5.f5d1abf3.js",
    "revision": "2cdb1a58b7c104277dc89d60209b742e"
  },
  {
    "url": "assets/js/6.2dd8b213.js",
    "revision": "d27641682bb71e1d101413c5ad62ffa9"
  },
  {
    "url": "assets/js/7.92f7f9d5.js",
    "revision": "f76676405b42a135269ccfe9af2e26cf"
  },
  {
    "url": "assets/js/8.9bdabc77.js",
    "revision": "ad42145af728210f38fe66bc8590a307"
  },
  {
    "url": "assets/js/9.093fb946.js",
    "revision": "11285a15df402f7f2b5c4721a5e085f7"
  },
  {
    "url": "assets/js/app.532f7543.js",
    "revision": "3433dd22a02fd098349c505978305753"
  },
  {
    "url": "blueprint/index.html",
    "revision": "3051209c9836fd6fcd9e4f1f11a63be8"
  },
  {
    "url": "buddha2/index.html",
    "revision": "0c95a3d369f713e035a7dbd26e51d6f3"
  },
  {
    "url": "guardian/index.html",
    "revision": "4f268744f05cdbeba2fd1bff1498f286"
  },
  {
    "url": "hydrus/index.html",
    "revision": "13515747fc248ec117766bfb9a1e41f6"
  },
  {
    "url": "img/blueprint/mainui.png",
    "revision": "bc896e9159643fc48a4e8ebe05b09c23"
  },
  {
    "url": "img/buddha2/mainui.png",
    "revision": "61cd66ea884a98da718acb6a3c307eb6"
  },
  {
    "url": "img/buddha2/mathstat.png",
    "revision": "4c16e7f80cf442ac82dbf40f79ddf2bf"
  },
  {
    "url": "img/guardian/kismet.png",
    "revision": "616d00539bcd5692e31b8b02f81bdfa4"
  },
  {
    "url": "img/guardian/mainui.png",
    "revision": "dc366620b0e418628c03fcab54f89ffd"
  },
  {
    "url": "img/hydrus/add-decorator.png",
    "revision": "183c58afddf3d6eeaab5f8caf5523801"
  },
  {
    "url": "img/hydrus/add-selector.png",
    "revision": "ea27d029a4e716a379af7a793ffcd5d0"
  },
  {
    "url": "img/hydrus/blackboard.png",
    "revision": "af22455f92b67ce501a726c7fe35f37a"
  },
  {
    "url": "img/hydrus/control.png",
    "revision": "1c2cbe592b74692cfa15d7f512c9c4dc"
  },
  {
    "url": "img/hydrus/debug.png",
    "revision": "194851ed491e09510b78caf3825e01d8"
  },
  {
    "url": "img/hydrus/demo.png",
    "revision": "56fb86f132d89f7d0b8d41dafce9dfda"
  },
  {
    "url": "img/hydrus/edit-script.png",
    "revision": "70a5562e4e5dc513ca3b3bfa20de7b11"
  },
  {
    "url": "img/hydrus/editor.png",
    "revision": "863be2e36d76566c7d56eab72349d6a8"
  },
  {
    "url": "img/orion2/demo/cat/step1.png",
    "revision": "c8b12dcdf6dd61a3c5c95bfb0c3cec5d"
  },
  {
    "url": "img/orion2/demo/cat/step10.png",
    "revision": "22894a235d103cb9c20917cb15b75eee"
  },
  {
    "url": "img/orion2/demo/cat/step11.png",
    "revision": "acc5566a58c0cea5f2e5613a0bd0058a"
  },
  {
    "url": "img/orion2/demo/cat/step12.png",
    "revision": "4722a17e339ef78c823e87f9e44b1818"
  },
  {
    "url": "img/orion2/demo/cat/step13.png",
    "revision": "b27eb2b3441fcf134fd375ef9f92ae63"
  },
  {
    "url": "img/orion2/demo/cat/step14.png",
    "revision": "ed58777873e2d822c20f97b8566e3eb5"
  },
  {
    "url": "img/orion2/demo/cat/step15.png",
    "revision": "e1cb2f8eb9157a507552498cb3bacbc1"
  },
  {
    "url": "img/orion2/demo/cat/step16.png",
    "revision": "4c9593eeedc661801543e4065495ebea"
  },
  {
    "url": "img/orion2/demo/cat/step17.png",
    "revision": "14387d8ae4eac02b4d2b1d6db50a4bd2"
  },
  {
    "url": "img/orion2/demo/cat/step18.png",
    "revision": "2e45f713d8948f75548d0a1e9fe119ed"
  },
  {
    "url": "img/orion2/demo/cat/step19.png",
    "revision": "b010c37868f0c7baed46d4d2ab331b3c"
  },
  {
    "url": "img/orion2/demo/cat/step2.png",
    "revision": "cbb1821c5be1adb0b53180403b6f7789"
  },
  {
    "url": "img/orion2/demo/cat/step20.png",
    "revision": "8e9b92cb72640256192c814e120aa5e9"
  },
  {
    "url": "img/orion2/demo/cat/step21.png",
    "revision": "8f6ca916a667b87c1bf1bdfa4dba964f"
  },
  {
    "url": "img/orion2/demo/cat/step22.png",
    "revision": "f0eb8fb3573dcd5b565b4fadb18f300b"
  },
  {
    "url": "img/orion2/demo/cat/step23.png",
    "revision": "76a8f36309a17a38441d6ae0298882f7"
  },
  {
    "url": "img/orion2/demo/cat/step24.png",
    "revision": "b9a03caa56fcf75d47b78b8579cefee4"
  },
  {
    "url": "img/orion2/demo/cat/step25.png",
    "revision": "cfed9679e8344503fb4d917dc2005a7d"
  },
  {
    "url": "img/orion2/demo/cat/step26.png",
    "revision": "5b48df6dfb44675d5f80d0f4246223a8"
  },
  {
    "url": "img/orion2/demo/cat/step3.png",
    "revision": "3c447d0223183e093c8d2119900316a8"
  },
  {
    "url": "img/orion2/demo/cat/step4.png",
    "revision": "9b3c3600fecb558953922a8fb670c8e2"
  },
  {
    "url": "img/orion2/demo/cat/step5.png",
    "revision": "a20fa9d19206cb5e9e2419bea7081691"
  },
  {
    "url": "img/orion2/demo/cat/step6.png",
    "revision": "15911aa3bb9156f825d89ed00247cc5f"
  },
  {
    "url": "img/orion2/demo/cat/step7.png",
    "revision": "85003ab5b473fb3d439b8aaf25fbfbf7"
  },
  {
    "url": "img/orion2/demo/cat/step8.png",
    "revision": "7546315f9cac3f01160c4d35f0468232"
  },
  {
    "url": "img/orion2/demo/cat/step9.png",
    "revision": "193f17152755c5ced8d0c35c939cec3e"
  },
  {
    "url": "img/orion2/demo/space/game.png",
    "revision": "38453bc8840b8e6a82a4545afb7c5436"
  },
  {
    "url": "img/orion2/demo/space/start.png",
    "revision": "0d8999ac510d0fd9b499109ecc1a856d"
  },
  {
    "url": "img/orion2/demo/space/step1.png",
    "revision": "d226413551e6cab2a42f0060ecd7a621"
  },
  {
    "url": "img/orion2/demo/space/step10.png",
    "revision": "ec060bcb571d1a49f9e43aa6981f44c7"
  },
  {
    "url": "img/orion2/demo/space/step11.png",
    "revision": "82430938d10b559fe94671ebdb534504"
  },
  {
    "url": "img/orion2/demo/space/step12.png",
    "revision": "32437158cfef35d0582eb0e41f09a424"
  },
  {
    "url": "img/orion2/demo/space/step13.png",
    "revision": "97cde74f3d35a8ebc62bc8ae54658bec"
  },
  {
    "url": "img/orion2/demo/space/step14.png",
    "revision": "ed6ec3a1a580e7b738268a712a10228c"
  },
  {
    "url": "img/orion2/demo/space/step15.png",
    "revision": "5011ff6a9a6e05705d0d7a9513805840"
  },
  {
    "url": "img/orion2/demo/space/step16.png",
    "revision": "3baf3a13018ab6fecb2bfcfad3f0350b"
  },
  {
    "url": "img/orion2/demo/space/step17.png",
    "revision": "1aee7cdd07624fc75f5bc778c10b1d20"
  },
  {
    "url": "img/orion2/demo/space/step2.png",
    "revision": "3935e2fe97a8620afd044ef38c5f2695"
  },
  {
    "url": "img/orion2/demo/space/step3.png",
    "revision": "7048376449521ea6c062099dd65aa899"
  },
  {
    "url": "img/orion2/demo/space/step4.png",
    "revision": "f67888251ae9262f5f7beebb5bbd69c5"
  },
  {
    "url": "img/orion2/demo/space/step5.png",
    "revision": "d87725f2d4e7680bc8a03564c4408aec"
  },
  {
    "url": "img/orion2/demo/space/step6.png",
    "revision": "144d2f0f25def34daf6fbccee45c7830"
  },
  {
    "url": "img/orion2/demo/space/step7.png",
    "revision": "61f2405e3e890df0b18b25fce8c8a28e"
  },
  {
    "url": "img/orion2/demo/space/step8.png",
    "revision": "f4b3cdba29763e95d85eede62b15c25b"
  },
  {
    "url": "img/orion2/demo/space/step9.png",
    "revision": "3d9cd817eefaaf762bad9dcd27c3e11f"
  },
  {
    "url": "img/orion2/gfx.png",
    "revision": "fb2ff34d639060b53aa72cec4e1126c5"
  },
  {
    "url": "img/orion2/mainui.png",
    "revision": "84d9b1011f780942073fcbedca422a47"
  },
  {
    "url": "img/orion2/plugin.png",
    "revision": "2c093bf4cad2aa7117cb7e0961af11b4"
  },
  {
    "url": "img/orion2/publish.png",
    "revision": "0d5c75548ee05f343c38a98710be184f"
  },
  {
    "url": "img/orion2/script.png",
    "revision": "921d94d808959d6ff29e7b4067ac1894"
  },
  {
    "url": "img/orion2/sprite.png",
    "revision": "e71640df3d29366dd95583598e803615"
  },
  {
    "url": "img/smartlab/features.png",
    "revision": "b65c8e6a90b317176aee4bcfe3286237"
  },
  {
    "url": "img/smartlab/framework.png",
    "revision": "a829ebb3944c26399738e2e3b124dda5"
  },
  {
    "url": "img/troll/mainui.png",
    "revision": "34e02216d5f820a75defc32b5b2f7314"
  },
  {
    "url": "img/yuchang/chinese.png",
    "revision": "dd518c8c5c31f647c847e48f99ba8ab7"
  },
  {
    "url": "img/yuchang/command.png",
    "revision": "0711ed1a3755ecb1e4173377f730f2d5"
  },
  {
    "url": "img/yuchang/datatype-diamond.png",
    "revision": "f8f67be82671e6bddcf68f7bb17ab52b"
  },
  {
    "url": "img/yuchang/datatype-enum.png",
    "revision": "ad773fe2a527fb3873026bd457062d43"
  },
  {
    "url": "img/yuchang/datatype-number.png",
    "revision": "babaa516a07f92602a9822c8f62f3917"
  },
  {
    "url": "img/yuchang/datatype-string.png",
    "revision": "fd1b0f43e4de0f052863e80e1eebcb2a"
  },
  {
    "url": "img/yuchang/demo.png",
    "revision": "a673618fb90186e862f72c700fc3f35b"
  },
  {
    "url": "img/yuchang/flow.png",
    "revision": "831c4af868f525136c80c92ef5fe0688"
  },
  {
    "url": "img/yuchang/keras.png",
    "revision": "b8724121625158e2620793aff642e018"
  },
  {
    "url": "img/yuchang/mainui.png",
    "revision": "78327bda84a1f4714e4d9aadac283de0"
  },
  {
    "url": "img/yuchang/shape-cap.png",
    "revision": "5d163a9ce2ec59be35d9370401292838"
  },
  {
    "url": "img/yuchang/shape-cup.png",
    "revision": "6ea3857d49aacab08b6f84d574cd5737"
  },
  {
    "url": "img/yuchang/shape-cuptwo.png",
    "revision": "f95bdb38f5108f041fa8d1d6b332ea28"
  },
  {
    "url": "img/yuchang/shape-diamond.png",
    "revision": "36352f2a7d209f59b013cd0c879b0fac"
  },
  {
    "url": "img/yuchang/shape-hat.png",
    "revision": "e745a3dccec52b5db3a475f85d804308"
  },
  {
    "url": "img/yuchang/shape-round.png",
    "revision": "463f1655a4c17dcba3dc99d24ffb8194"
  },
  {
    "url": "img/yuchang/shape-slot.png",
    "revision": "6c066d5ae1893b9a12cfd6307c12638f"
  },
  {
    "url": "index.html",
    "revision": "8872354dd9d037b090d42acb9756beab"
  },
  {
    "url": "lionet/index.html",
    "revision": "4c6e04cd9757fc790233963d8fa09b73"
  },
  {
    "url": "logo.png",
    "revision": "f29260ca430849ba8b5c72d926e0fc7e"
  },
  {
    "url": "orion2/demo-cat.html",
    "revision": "8dc49431929bf00ff4fe919670b3453c"
  },
  {
    "url": "orion2/demo-space.html",
    "revision": "6e18cc7c2cc66880d675f095535b7c3c"
  },
  {
    "url": "orion2/index.html",
    "revision": "be020b022beda715851adbc4c7a35fab"
  },
  {
    "url": "smartlab/index.html",
    "revision": "b6260407ef8d9dfa7b7473ede3df96fb"
  },
  {
    "url": "troll/index.html",
    "revision": "5a548802237b3b745e31d41896d3c9f3"
  },
  {
    "url": "yuchang/block-category.html",
    "revision": "fe9522eaa343c7942c139ffcdf4b6090"
  },
  {
    "url": "yuchang/block-define.html",
    "revision": "93e7632c9f490f33b5b9bff25fa619fb"
  },
  {
    "url": "yuchang/block-extend.html",
    "revision": "d628d748a655c07e13a6d786a4ae8f5a"
  },
  {
    "url": "yuchang/block-type.html",
    "revision": "c0d788ce9f8714fd4785d0263c20120c"
  },
  {
    "url": "yuchang/index.html",
    "revision": "549cbfe40cf75206a7c1b6db9d1d6636"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
