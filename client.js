var form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    const data = new FormData(form)
    const name = data.get('name');
    const pass = data.get('password');
    alert('Hi !' + name + 'welcome back to TechFarm')
})