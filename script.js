//your JS code here. If required.
const sounds = document.querySelectorAll('.btn')
const stops = document.querySelector('.stop')
sounds.forEach(button => {
	button.addEventListener('click',playsound)
})
stops.addEventListener('click',stopsound)
const playlist = {}
function playsound(e){
	const box = e.target.id
	const audio = new Audio(`sounds/${box}.mp3`)
	playlist[box] = audio;
	stopsound();
	audio.play();
}
function stopsound(){
	for(let key in playlist){
		const audio = playlist[key]
		audio.currentTime = 0;
		audio.pause();
		
	}
}
