document.querySelector('#infoForm').addEventListener('submit', (event) => {
  event.preventDefault();

  // 获取用户输入的个人信息
  const name = document.getElementById('name').value;
  const gender = document.getElementById('gender').value;
  const age = document.getElementById('age').value;
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;

  // 保存用户信息到本地存储
  const userData = {
    name,
    gender,
    age,
    height,
    weight
  };
  localStorage.setItem('userData', JSON.stringify(userData));

  // 跳转到 Profile 页面
  window.location.href = 'personal_profile.html';
});
