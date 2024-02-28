document.addEventListener("DOMContentLoaded", function() {
    const categoryForm = document.getElementById("categoryForm");
    const checkboxes = categoryForm.querySelectorAll('input[type="checkbox"]');
    const itemList = document.getElementById("itemList");

    categoryForm.addEventListener("change", filterItems);

    function filterItems() {
        const checkedCategories = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        if (checkedCategories.length === 0) {
            Array.from(itemList.children).forEach(item => {
                item.style.display = "block";
            });
        } else {
            
            Array.from(itemList.children).forEach(item => {
                const itemCategories = item.className.split(" ");
                const shouldShow = checkedCategories.every(category => itemCategories.includes(category));
                item.style.display = shouldShow ? "block" : "none";
            });
        }
    }
});
