
const filterDropdown = document.getElementById('category-filter');
const activeFiltersContainer = document.getElementById('active-filters');
let selectedFilters = new Set(); // Prevents duplicate filters

filterDropdown.addEventListener('change', (e) => {
  const value = e.target.value;
  const text = e.target.options[e.target.selectedIndex].text;

  if (value && !selectedFilters.has(value)) {
    addFilterTag(value, text);
    selectedFilters.add(value);
  }
  
  // Reset dropdown to default after selection
  filterDropdown.selectedIndex = 0;
});

function addFilterTag(value, text) {
  const tag = document.createElement('div');
  tag.className = 'tag';
  tag.innerHTML = `
    ${text}
    <span class="close-btn" onclick="removeFilter('${value}', this)">&times;</span>
  `;
  activeFiltersContainer.appendChild(tag);
}

function removeFilter(value, element) {
  selectedFilters.delete(value);
  element.parentElement.remove();
  // Resets filtred results
}
