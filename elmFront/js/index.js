/**
 * 1.使用什么事件
 *      使用onscroll事件，此事件移动端和PC端都有效
 * 2.获取滚动条的位置
 *      获取PC端滚动条位置：document.documentElement.scrollTop
 *      获取移动端滚动条位置：document。body、scrollTop
 * 3。如何获取视口宽度
 *      document.documentElement.clientWidth
 */

window.onload = function () {
    document.onscroll = function () {
        //获取滚动条位置
        let s1 = document.documentElement.scrollTop;
        let s2 = document.body.scrollTop;

        let scroll = s1 == 0 ? s2 : s1;
        //通过是否为0判断是在移动端还是PC端

        let width = document.documentElement.clientWidth;
        //获取视口宽度

        let search = document.getElementById('fixedBox');
        //获取顶端的固定块

        if(scroll>width*0.12){
            search.style.position = 'fixed'
            search.style.left = '0'
            search.style.top = '0'
        }else {
            search.style.position = 'static'

        }




    }
}