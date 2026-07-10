function setColor() {
  const colors = ["green","blue","red","orange","black","purple","indigo","dark green","brown","dark purple","lavender"]
  const randomIndex = Math.floor(Math.random()* colors.length);
  const selectedColor=colors[randomIndex];
  const color=document.getElementById("text1").style.color=selectedColor;
}
