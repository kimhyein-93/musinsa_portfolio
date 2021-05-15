var $prdItem = $('.product__item'),
    $productWrap = $('.product-container'),
    $viewTypeBtn = $('.product-header__view-type');
    
$prdItem.each(function(){
    var $this = $(this),
        $thisPrice = $this.find('.product__item--price'), 
        dataRealPrice = $thisPrice.attr('data-real-price'), //data 가격값
        dataDiscntRate = $thisPrice.attr('data-discount-rate'), //data 할인률
        
        priceRate = 1 - (dataDiscntRate*0.01), //할인가격 계산을 위한 변수
        realPrice = parseInt(dataRealPrice).toLocaleString(), //단위마다 콤마를 찍은 실제 가격값
        finalPrice = (dataRealPrice * priceRate).toLocaleString(); //최종 할인된 가격값

    var dataHtml = "";

    //할인률이 존재할 경우의 가격정보 마크업
    if (dataDiscntRate !== undefined){
        dataHtml += "<div class='product__item--final-information'>"
        dataHtml += "   <span class='product__item--final-price'>"+ finalPrice +"원</span>";
        dataHtml += "   <span class='product__item--discount-rate'>"+ dataDiscntRate +"%</span>";
        dataHtml += "</div>"
        dataHtml += "<span class='product__item--real-price'>"+ realPrice +"원</span>";    
    }
    //할인률이 존재하지 않을 경우의 가격정보 마크업
    else {
        dataHtml += "<span class='product__item--final-price'>"+ realPrice +"원</span>";
    }

    //가격정보를 append 시켜줌
    $thisPrice.append(dataHtml);
});


var viewTypeArr = ['grid-two', 'grid-one', 'grid-landscape'],   //view type 배열
    viewTypeIdx = 0, //배열 index 초기값
    viewTypeLen = viewTypeArr.length-1; //view type 배열의 전체 갯수 - 1

//view type 클릭시 grid 변화
$viewTypeBtn.click(function(){
    //기존 view type 클래스 remove
    var preViewType = viewTypeArr[viewTypeIdx];
    $productWrap.removeClass("product-container__"+preViewType);
    //다음 index의 배열값을 가져오기 위해 viewTypeIdx 증가
    if(viewTypeIdx<viewTypeLen){
        viewTypeIdx++;
    } else {
        viewTypeIdx=0;
    }
    //증가한 viewTypeIdx의 배열값 class 추가
    var crrviewType = viewTypeArr[viewTypeIdx];
    $productWrap.addClass("product-container__"+crrviewType);
});