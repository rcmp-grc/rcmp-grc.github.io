function renderTags(filters) {
    activeTagEl.innerHTML = '';
    var hasAny = Object.keys(filters).some(function(cat) {
      return filters[cat].length > 0;
    });
    activeTagEl.style.display = hasAny ? '' : 'none';
    if (!hasAny) return;
    Object.keys(filters).forEach(function(cat) {
      if (!filters[cat].length) return;
      var row = document.createElement('div');
      row.className = 're-filter-row';
      var label = document.createElement('span');
      label.className = 're-filter-row-label';
      label.textContent = UI[LANG].catLabel[cat] + ':';
      row.appendChild(label);
      var tagsWrap = document.createElement('span');
      tagsWrap.className = 're-filter-row-tags';
      filters[cat].forEach(function(val, idx) {
        if (idx > 0) {
          var sep = document.createElement('span');
          sep.className = 'wp-filter-tag-sep';
          sep.textContent = LANG === 'fr' ? 'ou' : 'or';
          tagsWrap.appendChild(sep);
        }
		 var tag = document.createElement('span');
        tag.className = 'wp-filter-tag';
        tag.innerHTML = val + ' <button type="button" aria-label="' + (LANG === 'fr' ? 'Supprimer le filtre : ' : 'Remove filter: ') + val + '">\u2715</button>';
        tag.querySelector('button').addEventListener('click', function() {
          var cb = document.querySelector('input[data-filter="' + cat + '"][value="' + val + '"]');
          if (cb) {
            cb.checked = false;
          } else {
            var sel = document.querySelector('select[data-filter="' + cat + '"]');
            if (sel) sel.value = '';
          }
          refresh();
        });
        tagsWrap.appendChild(tag);
      });
      row.appendChild(tagsWrap);
      activeTagEl.appendChild(row);
    });
  }  
