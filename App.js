const totalProjects = 6;
let revealed = [];

for (let i = 0; i <= totalProjects; i++) {
    revealed.push(false);
}

$(document).ready(function () {
    for (let i = 1; i <= totalProjects; i++) {
        let parentClass = ".project" + i;
        let childClass = "#project-desc" + i;
        $(parentClass).click(function () {
            if (revealed[i]) {
                $(childClass).slideUp("slow");
            }
            else {
                $(childClass).slideDown("slow");
            }
            $("#logo" + i).toggleClass('fa-plus fa-minus');
            revealed[i] = !revealed[i];
        });
    }
});