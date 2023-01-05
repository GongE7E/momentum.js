const body = document.body;

function Screenresize() {
  const width = window.innerWidth; //이렇게 설정해줘야함..!!
  if (width > 770) {
    body.classList.add("big");
    body.classList.remove("middle", "small");
  } else if (width < 770 && width > 600) {
    body.classList.add("middle");
    body.classList.remove("big", "small");
  } else {
    body.classList.add("small");
    body.classList.remove("big", "middle");
  }
}
window.addEventListener("resize", Screenresize);

/*
add 만 하면 두개가 중첩되서 오류가 났다. 
그래서 remove도 같이 해줘야지 오류가 안 난다.
주의하자!
*/
