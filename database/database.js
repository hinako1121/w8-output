// フォーム要素の取得
const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// 保存されたデータの読み込みと自動入力
window.addEventListener('load', () => {
    const savedEmail = localStorage.getItem('userEmail');
    const savedPassword = localStorage.getItem('userPassword');
    
    if (savedEmail) emailInput.value = savedEmail;
    if (savedPassword) passwordInput.value = savedPassword;
});

// フォーム送信時のデータ保存
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = emailInput.value;
    const password = passwordInput.value;
    
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    
    // ここにログイン処理を追加
    console.log('ログイン情報が保存されました');
});

// リセットボタンの機能
function resetData() {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    emailInput.value = '';
    passwordInput.value = '';
    console.log('保存されたデータがリセットされました');
}
