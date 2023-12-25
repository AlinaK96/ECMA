fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {

        data.forEach(user => {
        const userElement = document.createElement('span');
        userElement.textContent = user.name;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', () => {
            userElement.remove();
        });
        userElement.appendChild(deleteButton);
        document.body.appendChild(userElement);
        });
    });


    function renderDogImages() {
        const container = document.getElementById('dog-images-container');
        let count = 0;
        const interval = setInterval(() => {
          if (count < 10) {
            fetch('https://dog.ceo/api/breeds/image/random')
              .then(response => response.json())
              .then(data => {
                const img = document.createElement('img');
                img.src = data.message;
                img.alt = 'Собака';
                container.appendChild(img);
              });
            count++;
          } else {
            clearInterval(interval);
          }
        }, 3000);
      }
      
      // Вызов функции для отрисовки картинок собак
      renderDogImages();