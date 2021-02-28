import './style.postcss';

window.addEventListener('mousemove', ({ x, y }) => {
  const getSkew = (position, length) => 5 * (position / length - 0.5);
  document.body.style.transform = `perspective(${
    document.body.clientHeight
  }px) rotateX(${getSkew(x, window.innerWidth)}deg) rotateY(${getSkew(
    y,
    window.innerHeight
  )}deg)`;
});
