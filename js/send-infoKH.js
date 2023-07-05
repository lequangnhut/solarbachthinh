let form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector('#submit').value = "Submiting...";
    let data = new FormData(form);
    fetch('https://script.google.com/macros/s/AKfycbxdxf03q-jJbkr53pDM3kK3fUu_vhFeJ0Gp4K67m4qLoYwwIvUsH3EEw0TbU_Ar2e7x2A/exec', {
        method: 'POST',
        body: data
    })
        .then(res => res.text())
        .then(data => {
            document.querySelector("#success").innerHTML = data;
            form.reset();
        });
})