function scrollCarousel(direction) {
  const carousel = document.getElementById("carousel");
  const scrollAmount = carousel.offsetWidth * 0.8;
  carousel.scrollLeft += direction * scrollAmount;
}
