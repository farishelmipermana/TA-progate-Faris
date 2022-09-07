AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Operator Administrator Website",
    cardImage: "assets/images/experience-page/code (1).jpg",
    place: "OAW",
    time: "(Sep, 2021 - saat ini)",
    desp: "<li>Membuat tampilan Website.</li> <li>Melakukan penginputan data berupa foto dan file.</li> <li>Mengamankan website Puskesmas Banjarsari.</li>",
  },
  {
    title: "Pentester",
    cardImage: "assets/images/experience-page/code (4).jpg",
    place: "Penetration Tester",
    time: "(juli 2021)",
    desp: "<li>Melakakukan pengujian penetrasi di situs UNJANI.</li><li>Menemukan celah keamanan pada serangan SQL Injection.</li><li>Mengirimkan laporan potensi bahaya keamanan pada website akademik.unjani.ac.id.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
