window.onload = () => {
  const storage = localStorage.getItem('props');
  if (storage !== null) {
    const prop = JSON.parse(storage);
    document.body.style.fontSize = `${prop.fontSize || 15}px`;
    document.body.style.backgroundColor = prop.bgColor;
    document.body.style.color = prop.textColor;
    document.body.style.lineHeight = `${prop.lineHight || 20}px`;
    document.body.style.fontFamily = prop.fontFamily;
  }
};

const fontSize = document.querySelector('#font-size');
const bgColor = document.querySelector('#background-color');
const textColor = document.querySelector('#text-color');
const lineHight = document.querySelector('#line-height');
const fontFamily = document.querySelector('#font-family');
const btn = document.querySelector('#aplicar');
const changePageConfig = () => {
  const prop = {
    fontSize: fontSize.value || 15,
    bgColor: bgColor.value,
    textColor: textColor.value,
    lineHight: lineHight.value,
    fontFamily: fontFamily.value,
  };
  document.body.style.fontSize = `${prop.fontSize || 15}px`;
  document.body.style.backgroundColor = prop.bgColor;
  document.body.style.color = prop.textColor;
  document.body.style.lineHeight = `${prop.lineHight || 20}px`;
  document.body.style.fontFamily = prop.fontFamily;

  localStorage.setItem('props', JSON.stringify(prop));
};

btn.addEventListener('click', changePageConfig);
