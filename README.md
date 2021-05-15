# 과제 설명서
## 1. 공통
### resources
+ css
  + /resources/css/base/_mixin.scss
  + /resources/css/base/_mq.scss
  + /resources/css/base/_mqset.scss
  + /resources/css/base/_reset.scss
+ js
  + /resources/js/lib/jquery-1.12.4.min.js
### 핵심 사용기술
+ SCSS
+ JQuery 
+ BEM 방법론
### 작업 과정
1) 자신있는 기술과 수용할 수 있는 요구범위 내에서 과제 진행
2) SCSS의 경우, 처음 SCSS를 활용한 사이트 구축을 담당했을 때 만들었던 mixin.scss 활용
3) font-size및 일부 여백은 rem으로 작업 (해상도에 적합한 유동적 size) 
4) source상에 상세 주석 명시.


## 2. 상품목록
### HTML
+ product_list/list.html
### resources
+ css
  + /resources/css/product.scss
+ js
  + /resources/js/product.js
### 작업 과정
#### 1) 시멘틱마크업
+ 페이지 전체를 감싸는 container 영역을 main으로 정의
+ container 내 view type과 전체상품등을 나타내는 bar영역을 header로 정의
+ product list를 감싸고 있는 영역을 section으로 정의

#### 2) BEM 방법론
+ 협업시 혼동되지 않을만한 의미론적 class명을 정의하기 위해 고민

#### 3) 자동화
+ main container에 view type에 대한 class 추가시 view type 레이아웃 변경
+ 각 list item에 data-role을 통해 할인률, 실제 가격을 받아와 계산 하여 가격정보 마크업을 뿌려줄수 있도록 설계
+ 해당 item에 class만 추가하면 label이 자동으로 붙도록 css 처리
 
#### 4) 레이아웃
+ 2grid 타입의 경우 768px~ 에서 공간 활용 및 사용성을 판단 하여 3grid로 변경
+ 1grid/landscape 타입의 경우 768px~에서 가격정보 가독성을 위해 할인률 위치 변경
+ thumbnail의 경우 이미지의 height 기준으로 작업 하여 전체컷이 보일 수 있도록 작업


## 3. 쇼케이스
### HTML
+ showcase/showcase.html
### resources
+ css
  + /resources/css/showcase.scss
+ js
  + /resources/js/showcase.js
### 작업 과정
#### 1) psd 해상도
+ main.psd의 guide layer를 참고하여 유실영역(lost area)을 고려한 750px 기준의 해상도 유추

#### 2) 레이아웃
+ main.psd - main
  + 유동적인 해상도에서도 레이아웃 비율 유지를 위해 %로 css 작업
  + absolute로 띄워진 object에 대한 parallax 효과
+ main.psd - intro1
  + 섹션의 높이를 100vh로 설정 후 섹션 내 요소들은 flex로 가운데 정렬
  + scroll시 background parallax 효과
	  + 해당 section에 도달했을 때, 섹션 내의 inner 오브젝트를 fixed, 투명한 hidden-area(height 100vh)를 활성화시킴. (이전에 hidden-area는 height값이 0인 상태)
+ intro2.psd - 1>2>3>4
  + 큼직한 sheos object가 섹션의 위치에 영향을 준다고 생각하여 position을 absolute가 아닌 relative로 설정 후 class 제어하여 margin값 및 opacity로 parallax 표현

#### 3) parallax 직접 구현
+ parallax효과를 구현한 scrip를 함수화 하여 필요한 부분에 독립적으로 사용할 수 있도록 구현
+ objParallax($trigger, $position, $duration) 
  + $trigger : trigger 위치
  + $position : object의 position 상태 
      + absolute : scrollTop에 따라서 object의 top값 변동 (main.psd - main)
      + fixed : backgrond parallax 효과 (main.psd - intro1)
      + relative : ojbect의 position이 relative인 경우 클래스 제어로 효과 제어 (intro2.psd - 1>2>3>4)
  + $duration : $trigger값 + $duration값으로 trigger위치 custom
