function openSideMenu() {
    document.getElementById('side-menu').style.width='250px';
    document.getElementById('main').style.marginLeft='250px';
}
function closeSideMenu() {
    document.getElementById('side-menu').style.width='0';
    document.getElementById('main').style.marginLeft='0';
}
$(document).ready(function() {
    $('#search-icon').click(function() {
        $('#searchBar').css('display', 'block')
    });
});