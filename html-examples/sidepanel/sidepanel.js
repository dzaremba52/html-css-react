function closeSide() {

    sb = document.getElementById("sidebar")
    if (sb) sb.style.display="none"
    sc = document.getElementById("sideContainer")
    if (sc) sc.style.width="2px"
    const ra = document.getElementById("right-arrow")
    if (ra) ra.style.display="block";
    const la = document.getElementById("left-arrow")
    if (la)  la.style.display="none";
}
function openSide() {
    const sb = document.getElementById("sidebar")
    if (sb) 
      sb.style.display="block"
    const ra = document.getElementById("right-arrow")
    if (ra)
      ra.style.display="none";
    const la = document.getElementById("left-arrow")
    if (la)
      la.style.display="block";
}