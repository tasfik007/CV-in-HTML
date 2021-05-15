const totalProjects = $(".projects").children().length;
$(document).ready(function () {
    for (let i = 1; i <= totalProjects; i++) {
        let parent = ".project" + i;
        let child = "#project-desc" + i;
        $(parent).click(function () {
            $(child).toggle(500);
            $("#logo" + i).toggleClass('fa-plus fa-minus');
        });
    }
});