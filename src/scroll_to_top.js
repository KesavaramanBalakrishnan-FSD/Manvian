export const scroll_to_top = () => {
  let e = document.querySelector(".progress"),
    s = document.querySelector(".progress path"),
    o = s.getTotalLength();
  (s.style.transition = s.style.WebkitTransition = "none"),
    (s.style.strokeDasharray = o),
    (s.style.strokeDashoffset = o),
    s.getBoundingClientRect(),
    (s.style.transition = s.style.WebkitTransition =
      "stroke-dashoffset 10ms linear");
  let r = () => {
    let t = window.scrollY,
      r = document.body.offsetHeight,
      i = window.innerHeight;
    (s.style.strokeDashoffset = o - (t * o) / (r - i)),
      t > 50 ? e.classList.add("active") : e.classList.remove("active");
  };
  (e.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }),
    (window.onscroll = () => {
      r();
    }),
    r();
};
