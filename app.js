const plays = [];

let randKeys = "";
const line1 = 'Ｉ ｇｏｔ ｎｏｔｈｉｎｇ ｔｏ ｌｏｓｅ';
const line2 = '희수야 그거 아니야';
const indx = {
	19981222: 'test',
	19981223: '민지가 미술 시간에 쓰다 남은 실타래로 실뜨기를 만들어줬다. 하니는 실뜨기를 까먹었다 해서 다시 가르쳐 주었다',
	19981224: '19981224',
	19981225: '오늘은 크리스마스. 우리집에서 촬영도 하고 연습 끝나고 파티도 하기로 했다. 근데 영상 오류가 나서 소리가 없어졌다. 왜지?',
	19981226: '다같이 자전거를 타러 학교 주변 내리막으로 갔다. 혜인이는 아직 커브를 잘 못해서 자꾸 저기서 멈춰선다. 근데 혜인이 자전거.. 저번에는 빨간색 아니었나?',
	19981227: '야자 시간에 몰래 매점에 가니 매점 아저씨가 안 계셨다. 나는 안 된다고 말렸지만 애들은 괜찮다며 과자 이것저것 만지기 시작했다. 언제나 정리는 내 몫...',
	19981228: '요즘 혜인이 공주병이 너무 심하다. 자꾸 유리구두를 어디서 파냐고 묻는데 정말 화가 난다.',
	19981229: '체육시간에 찍은 영상인데 뮤직비디오에 쓸 수 있을지도 모르겠다. 드디어 하니가 핸드폰을 샀다. 근데 전화번호를 잘못 알려준 것 같아.',
	19981230: '19981230',
	19981231: '버전1',
	199812311: '버전1_수정. 드디어 디토 안무 완성. 잘가 1998',
	19990101: '카메라 고쳤는데도 녹음이 안돼',
	19990102: '19990102',
	19990103: '연습은 안하니?',
	19990104: '19990104',
	19990105: '편집하다가 하니가 찍은 영상 발견',
	19990106: '뮤직비디오 완성 되면 애들이 좋아하겠지? 그거면 됐어',
	230107: '아니긴 뭐가 아니야...',
	230108: '오래된 테이프를 보다가 하루가 다 가버렸다.',
	19990109: '오늘은 도서관에서 촬영을 했다. 근데 분명히 민지도 찍었는데... 아무래도 카메라가 정상이 아닌 것 같아.',
	19990110: '가만 보면 혜인이가 제일 나빠.',
	19990111: '아니 숙제를 해야지 왜 실뜨기를 해',
	19990112: '19990112',
	19990113: '이겨내자 IMF 다시 뛰는 대한민국',
	19990114: '오늘 시카고 불스의 마이클 조던 선수가 은퇴했다.',
	19990115: '가위바위보의 여왕, 모지혜. 그보다 혜인이가 져서 씩씩대는 걸 보는 게 더 재미있었다.',
	19990116: '오늘은 토요일이라 찍은 캠코더를 정리하는데, 얘네들 구두는 왜 항상 깨끗하지?',
	19990117: '혜인아... 너 책 거꾸로 들고있어.',
	19990118: '학교에 왜 저런 게 있는 거야...',
	19990119: '애들이 집에 다녀간 이후로 카라멜이 안보인다. 그렇다고 민지를 의심하는 건 아니야.',
	19990120: '민지야 욕은 하지마',
	19990121: '오늘도 공기 내일도 공기 연습은 언제 해?',
	20230122: '보고싶어',
	19990123: '19990123',
	19990124: '19990125',
	19990126: '19990127',
	19990128: '19990128',
	19990129: '19990129',
	20230204: '늦어서 미안해.'
};
const indxKeys = Object.keys(indx);

const h = 1536;
const w = 864;

//오디오 플레이
const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click",function() {
	const audio1 = new Audio("Ditto.mp3");
  	audio1.loop = true; 
  	audio1.volume = 0.4;
  	audio1.play(); 
});

//버튼 숨기기
function hideButton(x){
	x.style.display = 'none';
}

function setup() { 
  createCanvas(windowWidth, windowHeight);
	frameRate(3);
    textSize(20);
} 

function draw() { 
  background(255);
	const play = new Play(random(-600, 800), 20 + random(0, 800));
	plays.push(play);
	for (let i = 0; i < plays.length; i++){
		plays[i].move();
		plays[i].display();
	}
}


function Play(x,y){
  this.x = x;
	this.y = y;
	
	this.display = function(){
		fill(255, 39, 200);
		textSize(20);
		text(line1, this.x, this.y);
		text(line2, this.x, this.y + random(-400,800));
		push();
		rotate(radians(270));
		randKeys = parseInt(random(0, 38));
		text(indxKeys[randKeys], this.x, this.y + random(-100, 200));
		pop();
	}
	this.move = function(){
	this.x = this.x + 0 + random(0,40);
}
}

//클릭시 랜덤 문구 경고창
function mouseClicked(){
		alert(indx[indxKeys[randKeys]]);
	}

// touchstart 이벤트 발생 여부
var bStartEvent = false;
// touchmove 이벤트 발생 여부
var bMoveEvent = false;

function init() {
  document.addEventListener('touchstart', this.onStart.bind(this), false);
  document.addEventListener('touchmove', this.onMove.bind(this), false);
  document.addEventListener('touchend', this.onEnd.bind(this), false);
}

function onStart(e) {
  bStartEvent = true;
}

function onMove(e) {
  if (!bStartEvent) {
    return;
    // touchstart 이벤트가 발생하지 않으면 처리하지 않는다.
  }
  bMoveEvent = true;
  // touchmove 이벤트 발생 여부를 설정한다.
}

function onEnd(e) {
  if(bStartEvent && !bMoveEvent) {
    // 클릭 이벤트로 판단한다.
    alert(indx[indxKeys[randKeys]]);
  }
  // 각 플래그 값을 초기값으로 설정한다.
  bStartEvent = false;
  bMoveEvent = false;
}


//반응형 캔버스
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  }
