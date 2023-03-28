var sideOpen = true;

function closeSide() {

    sb = document.getElementById("sidebar")
    if (sb) {
      sb.style.width="10px";
      sb.style.color = "blue";
      sb.style.gridTemplateColumns = "8px"
    }
    sc = document.getElementById("sideContainer")
    if (sc) sc.style.display="none"
    const ra = document.getElementById("right-arrow")
    if (ra)
      ra.style.display="block";
    const la = document.getElementById("left-arrow")
    if (la)
      la.style.display="none";
}
function openSide() {
  console.log("open")
    sb = document.getElementById("sidebar")
    if (sb) {
      console.log("sc open")
      sb.style.width="180px"
      sb.style.gridTemplateColumns = "180px 8px"
    }
    sc = document.getElementById("sideContainer")
    if (sc) sc.style.display="block"
    const ra = document.getElementById("right-arrow")
    if (ra)
      ra.style.display="none";
    const la = document.getElementById("left-arrow")
    if (la)
      la.style.display="block";
}
function toggleSide() {
  if (sideOpen) {
    closeSide();
    sideOpen = false;
  } else {
    openSide();
    sideOpen = true;
  }
}