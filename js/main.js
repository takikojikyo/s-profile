$(function () {
  var $historySlide = $(".history-slide").slick({
    autoplay: true, // 自動でスライドさせる
    speed: 2000, // デフォルトのスライド速度
    autoplaySpeed: 13000, // 自動再生間隔を長くする 
    slidesToShow: 2, // 表示するスライド数
    arrows: true, // デフォルトの矢印を表示

    responsive: [

      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1, // 表示するスライド数
          centerMode: true, // スライドの中央配置を有効化
          centerPadding: '0%', // 両端に次のスライドが見えるよう調整, 
          autoplaySpeed: 10000, // 自動再生間隔を長くする 
        },
      },
    ],
  });

  // スライドが停止中かどうかを判定するフラグ
  var isPaused = false;

  // スライダー本体のクリックイベント
  $(".history-slide").on('click', function () {
    if (isPaused) {
      $historySlide.slick('slickPlay'); // スライドを再開
      isPaused = false;
    } else {
      $historySlide.slick('slickPause'); // スライドを停止
      isPaused = true;
    }
  });

  // 矢印ボタンをクリックしたときの処理
  $('.slick-next, .slick-prev').on('click', function () {
    if (isPaused) {
      $historySlide.slick('slickPlay'); // 停止中の場合は再開
      isPaused = false;
    }
    // 矢印のデフォルト動作を妨げずにそのまま動作させる
  });

  // スライド移動後に自動再生を維持
  $(".history-slide").on('afterChange', function () {
    if (!isPaused) {
      $historySlide.slick('slickPlay'); // 自動再生を維持
    }
  });


  function setViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh-offset', `${vh}px`);
  }
  
  window.addEventListener('resize', setViewportHeight);
  window.addEventListener('orientationchange', setViewportHeight);
  setViewportHeight();

});















// $(function () {
//   var autoplay = true; // 自動再生状態を管理

//   // スライダーの初期化
//   $(".history-slide").slick({
//     autoplay: true, // 自動再生を有効化
//     autoplaySpeed: 0, // 自動再生間隔
//     speed: 5000, // スライド速度
//     cssEase: "linear", // 等速スクロール
//     slidesToShow: 2, // 表示するスライド数
//     swipe: true, // スワイプ操作を有効化
//     draggable: true, // マウスドラッグ操作を有効化
//     arrows: false, // 矢印非表示
//     pauseOnFocus: false, // フォーカス時にスライドを停止
//     pauseOnHover: false, // ホバー時には停止させない

//     // レスポンシブ設定
//     responsive: [
//       {
//         breakpoint: 960,
//         settings: {
//           slidesToShow: 2,
//           centerPadding: "0%", // 両端が見えない設定
//         },
//       },
//       {
//         breakpoint: 551,
//         settings: {
//           slidesToShow: 1, // スマホでは1スライド表示
//           centerPadding: "0%", // 両端が見えない設定
//         },
//       },
//     ],
//   });

//   // クリックまたはタップで即座に停止
//   $(".history-slide").on("click touchstart", function () {
//     if (autoplay) {
//       $(".history-slide").slick("slickSetOption", "speed", 0, true); // スライド速度を即座に停止に変更
//       $(".history-slide").slick("slickPause"); // スライダーを停止
//       autoplay = false;
//       console.log("スライダーが即座に停止しました");
//     }
//   });

//   // スワイプ操作確認（ログ用）
//   $(".history-slide").on("swipe", function (event, slick, direction) {
//     console.log("スワイプされた方向:", direction); // スワイプ方向を確認
//   });

//   // 再生の再開（必要な場合）
//   $(".history-slide").on("dblclick", function () {
//     if (!autoplay) {
//       $(".history-slide").slick("slickSetOption", "speed", 5000, true); // 元の速度に戻す
//       $(".history-slide").slick("slickPlay"); // 再生を再開
//       autoplay = true;
//       console.log("スライダーが再開しました");
//     }
//   });
// });






















// $(function () {

// // 略歴のスライド
//   $(".history-slide").slick({

//     autoplay: true,//自動でスライドさせる
//     autoplaySpeed: 0,//次の画像に切り替えるまでの時間 今回の場合は0
//     speed: 10000,//画像が切り替わるまでの時間 今回の場合は難病で1枚分動くか
//     cssEase: 'linear',//動きの種類は等速に
//     slidesToShow: 2,//画面に2つ見せる
//     centerMode: true, // スライドの中央配置を有効化
//     centerPadding: '5%', // 両端に次のスライドが見えるよう調整,
//     arrows: false,//左右に出る矢印を非表示
//     swipe: false,//スワイプ禁止
//     pauseOnFocus: false,//フォーカスが合っても止めない
//     pauseOnHover: false,

//     // レスポンシブ
//     responsive: [
//       {
//         breakpoint: 960,
//         settings: {
//           slidesToShow: 2,
//           centerPadding: '0%',// 両端に次のスライドが見えないよう調整,
//         },
//       },

//       {
//         breakpoint: 551,
//         settings: {
//           slidesToShow: 1,//画面に1つ見せる
//           centerPadding: '0%',
//         },
//       },
//     ],
//   });
// });