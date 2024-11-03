function opensubmenu(button)
{
  button.nextElementSibling.classList.toggle('show');
  button.classList.toggle('rotate');
}

function opensidebar()
{
  let sidebar=document.querySelector('.sidebar_div');
  sidebar.classList.toggle('open');
  let maincontent=document.querySelector('.main_content');
  maincontent.classList.toggle('margin_maincontent')
}