let btn = document.querySelector(".btn");
let demo = document.querySelector(".demo");

btn.addEventListener("click", () => {
  fetch(`data.json`)
    .then((res) => res.json())
    .then((data) => {
        demo.innerHTML=""
        data.forEach(d => {
            demo.insertAdjacentHTML('beforeend',`
                <p>${d.id}</p>
                <p>${d.name}</p>
                <p>${d.age}</p>
            `);  
        })
    });
});
