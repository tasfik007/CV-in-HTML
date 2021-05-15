$(document).ready(function () {
    const TOTAL_PROJECTS = $(".projects").children().length;
    for (let i = 1; i <= TOTAL_PROJECTS; i++) {
        $(".project" + i).click(function () {
            $("#project-desc" + i).toggle(500);
            $("#logo" + i).toggleClass('fa-plus fa-minus');
        });
    }
    const TOTAL_ACADEMICS = $(".academics").children().length;
    for (let i = 1; i <= TOTAL_ACADEMICS; i++) {
        $("#academic-" + i).click(function () {
            $("#academic-" + i + "-detail").toggle(350);
            $("#academic-" + i + "-logo").toggleClass('fa-angle-down fa-angle-up');
        });
    }
});