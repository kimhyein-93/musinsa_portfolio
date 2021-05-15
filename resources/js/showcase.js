var lastScrollTop = 0;
    
function objParallax($trigger, $position, $duration){
    var trigger=$("#"+$trigger), //애니메이션이 시작되는 trigger
        object=trigger.find(".parallax-object"), //애니메이션의 대상이 되는 object
        objectOffset = object.position().top; //최초 object의 위치값
        
                                                                                        
    $(window).scroll(function(){
        var scrollTop=$(this).scrollTop();//scroll 위치값
        var triggerOffset=Math.ceil(trigger.offset().top + $duration);//애니메이션이 시작되는 trigger 위치값

        //function 실행 시 duration이 정의되지 않았을 경우 값을 0으로 정의 
        if ($duration == undefined) {
            $duration = 0;
        }

        if ( $position == "absolute" && scrollTop < trigger.closest(".section").outerHeight()) {
            //scroll값에 따른 parallax 효과
            if (scrollTop > lastScrollTop){
                // down scroll일 경우 object 애니메이션
                object.css({'top':objectOffset - scrollTop/5});
            } else {
                if(scrollTop <= triggerOffset) {
                    //scroll값이 trigger 위치값보다 작을경우 object 위치 원상복귀
                    object.css({'top':objectOffset});
                } else {
                    // up scroll일 경우 object 애니메이션
                    object.css({'top':objectOffset - scrollTop/5});
                }
            }
            lastScrollTop = scrollTop;
        } else if ( $position == "fixed" ) {
            //parallax background 효과
            
            triggerOffset = trigger.prev().outerHeight();//해당 섹션의 이전 섹션 height값을 triggerOffset으로 지정
            if ( scrollTop > triggerOffset ) {
                //scroll값이 trigger 위치값보다 클 경우

                //해당 섹션의 object를 fixed하고 투명한 hidden-area를 활성화 하여 parallax 효과 표현
                object.css({"position":"fixed","top":0,"left":0});
                object.next('.hidden-area').css('height','100vh');
            } else {
                //scroll값이 trigger 위치값보다 작을 경우

                //해당 섹션의 object를 원상 복귀 하고 투명한 hidden-area를 비활성화
                object.css({"position":"relative","top":"auto","left":"auto"});
                object.next('.hidden-area').css('height',0);
            }
        } else if ( $position == "relative" ) {
            //class 제어를 이용한 parallax 효과
            if (scrollTop >= triggerOffset){
                //scroll값이 trigger 위치값보다 클 경우 object에 on클래스 추가
                object.addClass("on");
            } else {
                //scroll값이 trigger 위치값보다 작을 경우 object에 on클래스 제거
                object.removeClass("on");
            }
        }
        
    });
}