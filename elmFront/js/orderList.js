window.onload = function(){
    //getElementsByClassName获取一个数组
    let showDetail = document.getElementsByClassName('fa-caret-down');


    let order_detail = document.getElementsByClassName('order_detail');
    //设置默认所有订单明细都隐藏
    for(let i=0;i<order_detail.length;i++){
        order_detail[i].style.display='none';
    }

    for(let i=0;i<order_detail.length;i++){
        //对每个按钮制作onclick事件
        showDetail[i].onclick = function(){
            if(order_detail[i].style.display=='none'){
                order_detail[i].style.display='block';
            }else{
                order_detail[i].style.display='none';
            }
        }
    }
}