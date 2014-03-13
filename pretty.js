function delete_dom( selector ) {
  var doms = document.querySelectorAll(selector);
  for (i = 0; i < doms.length; i = i +1){
      doms[i].parentNode.removeChild(doms[i]);
  }
}

function add_style( selector ) {
  var doms = document.querySelectorAll(selector);
  for (i = 0; i < doms.length; i = i +1){
      doms[i].childNodes[1].style.width = '120px'
  }
}

delete_dom('th.votes.tablesorter-header');
delete_dom('th.date.tablesorter-header');
delete_dom('th.date.tablesorter-header');
delete_dom('th.date.tablesorter-header.tablesorter-headerAsc');

delete_dom('td.votes');
delete_dom('td.date');

add_style('td.milestone')


