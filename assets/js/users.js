document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems,{});
  });

  const adduserbutton = document.getElementById('add-user-button')
  adduserbutton.addEventListener('click' , ()=>{
    document.querySelector('.add-user-modal').classlist.add('show')
  })