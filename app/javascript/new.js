console.log('new'); //デバッグのための記述
document.addEventListener('DOMContentLoaded', () => {
  // csrf-tokenを取得
  const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  const LIFF_ID = "2000000141-3XZj8RY5";

  liff
  .init({
    liffId: LIFF_ID,
    // 他のブラウザで開いたときは初期化と一緒にログインもさせる
    withLoginOnExternalBrowser: true
  })
  liff.ready.then(() => {
    const idToken = liff.getIDToken()
    const body =`idToken=${idToken}`
    const request = new Request('/user', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        'X-CSRF-Token': token
      },
      method: 'POST',
      body: body
    });

    fetch(request)
    .then(response => response.json())
    .then(data => {
      data_id = data
    })
    .then(() => {
      window.location = '/'
    })
  })
})
