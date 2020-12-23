function autoPlay() {
	var myAuto = document.getElementsById('bgMusic');
	var btn = document.getElementById('audioBtn');
	if (myAuto.paused) {
		myAuto.autoPlay();
		btn.classList.remove("pause");
		btn.classList.add("play");
	}
	else {
		myAuto.pause();
		
		btn.classList.remove("play");
		btn.classList.remove("pause")
	}
}