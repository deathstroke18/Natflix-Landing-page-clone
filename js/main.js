const tabItems =document.querySelectorAll('.tab-item');
const tabcontentItems =document.querySelectorAll('.tab-content-item');

  function selectItem(e){
    removeBorder();
    removeshow();
    this.classList.add('tab-border');
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
  }

  function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'))
  }
  function removeshow(){
    tabcontentItems.forEach(item => item.classList.remove('show'))
  }

tabItems.forEach(item => item.addEventListener('click',selectItem));
