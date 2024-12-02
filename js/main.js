$(function () {

// 略歴のスライド
  $(".history-slide").slick({

    autoplay: true,//自動でスライドさせる
    autoplaySpeed: 0,//次の画像に切り替えるまでの時間 今回の場合は0
    speed: 10000,//画像が切り替わるまでの時間 今回の場合は難病で1枚分動くか
    cssEase: 'linear',//動きの種類は等速に
    slidesToShow: 2,//画面に2つ見せる
    centerMode: true, // スライドの中央配置を有効化
    centerPadding: '5%', // 両端に次のスライドが見えるよう調整, 
    arrows: false,//左右に出る矢印を非表示
    swipe: false,//スワイプ禁止
    pauseOnFocus: false,//フォーカスが合っても止めない
    pauseOnHover: false,

    // レスポンシブ
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          centerPadding: '0%',// 両端に次のスライドが見えないよう調整,
        },
      },

      {
        breakpoint: 551,
        settings: {
          slidesToShow: 1,//画面に1つ見せる
          centerPadding: '0%',
        },
      },
    ],
  });
});