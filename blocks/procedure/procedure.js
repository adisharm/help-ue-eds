export default (block) => {
  if(!isAuthor()){
  const ol = document.createElement('ol');
  ol.classList.add('stepList');
  [...block.children].map((child) => {
    const li = document.createElement('li');
    li.classList.add('step');
    li.replaceChildren(...child.children);
    ol.appendChild(li);
    return null;
  });
  block.replaceChildren(ol);
}
};

function isAuthor() {
  var ele = window.location.href.indexOf("author");
  if(ele > -1) {
      return true;
  } else {
      return false;
  }
}