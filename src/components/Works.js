import "./styles/Works.css";

const Works = () => {
  return (
    <div className="works" id="works">
      <p className="works__title">WORKS</p>
      <section className="works__gallery">
        <figure class="works__gallery-item works__gallery-item1">
          {/* <img src="img/image-1.jpg" class="gallery__img" alt="Project 1" /> */}
          <span>Project 1</span>
        </figure>
        <figure class="works__gallery-item works__gallery-item2">
          {/* <img src="img/image-2.jpg" class="gallery__img" alt="Project 2" /> */}
          <span>Project 2</span>
        </figure>
        <figure class="works__gallery-item works__gallery-item3">
          {/* <img src="img/image-3.jpg" class="gallery__img" alt="Project 3" /> */}
          <span>Project 3</span>
        </figure>
        <figure class="works__gallery-item works__gallery-item4">
          {/* <img src="img/image-4.jpg" class="gallery__img" alt="Project 4" /> */}
          <span>Project 4</span>
        </figure>
        <figure class="works__gallery-item works__gallery-item5">
          {/* <img src="img/image-5.jpg" class="gallery__img" alt="Project 5" /> */}
          <span>Project 5</span>
        </figure>
        <figure class="works__gallery-item works__gallery-item6">
          {/* <img src="img/image-6.jpg" class="gallery__img" alt="Project 6" /> */}
          <span>Project 6</span>
        </figure>
      </section>
    </div>
  );
};

export default Works;
