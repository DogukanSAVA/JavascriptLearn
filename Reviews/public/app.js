const reviews = [
          {
            id: 1,
            name: "Dogukan SAVA",
            job: "React Developer",
            img:
              "https://avatars.githubusercontent.com/u/45499414?v=4",
            text:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          },
          {
            id: 2,
            name: "Dogukan SAVA",
            job: "Web Developer",
            img:
              "https://avatars.githubusercontent.com/u/45499414?v=4",
            text:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          },
          {
            id: 3,
            name: "Dogukan SAVA",
            job: "React Developer",
            img:
              "https://avatars.githubusercontent.com/u/45499414?v=4",
            text:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          },
          {
            id: 4,
            name: "Dogukan SAVA",
            job: "Web Developer",
            img:
              "https://avatars.githubusercontent.com/u/45499414?v=4",
            text:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          },
        ];
       
        const img = document.getElementById("person-img");
        const author = document.getElementById("author");
        const job = document.getElementById("job");
        const info = document.getElementById("info");
        
        const prevBtn = document.querySelector(".prev-btn");
        const nextBtn = document.querySelector(".next-btn");
        const randomBtn = document.querySelector(".random-btn");
        
        
        let currentItem = 0;
        
  
        window.addEventListener("DOMContentLoaded", function () {
          const item = reviews[currentItem];
          img.src = item.img;
          author.textContent = item.name;
          job.textContent = item.job;
          info.textContent = item.text;
        });
        
        // show person based on item
        function showPerson(person) {
          const item = reviews[person];
          img.src = item.img;
          author.textContent = item.name;
          job.textContent = item.job;
          info.textContent = item.text;
        }
        // show next person
        nextBtn.addEventListener("click", function () {
          currentItem++;
          if (currentItem > reviews.length - 1) {
            currentItem = 0;
          }
          showPerson(currentItem);
        });
        // show prev person
        prevBtn.addEventListener("click", function () {
          currentItem--;
          if (currentItem < 0) {
            currentItem = reviews.length - 1;
          }
          showPerson(currentItem);
        });
        // show random person
        randomBtn.addEventListener("click", function () {
          console.log("hello");
        
          currentItem = Math.floor(Math.random() * reviews.length);
          showPerson(currentItem);
        });