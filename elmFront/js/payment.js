window.onload = function () {

    let showDetail = document.getElementById('showDetail');
    let detailInfo = document.getElementById('detailInfo');
    detailInfo.style.display = 'none';

    showDetail.onclick = function () {

        if (detailInfo.style.display == 'none') {
            detailInfo.style.display = 'block';
        } else {
            detailInfo.style.display = 'none';
        }
    }
}