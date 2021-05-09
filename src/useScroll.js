export const useScroll = (ref, option) => {
  window.scrollTo({
    left: 0,
    top: ref.current.getBoundingClientRect().top,
    behavior: option,
  });
};
