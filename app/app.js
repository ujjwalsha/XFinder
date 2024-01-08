let searchBar = document.getElementById('search');
let content = document.getElementById('main');
let item = document.getElementById('search-item');
let loader = document.querySelector('.loader');


async function profileData(users){
	// console.log("entered in profiledata",users);
    const url = `https://twitter241.p.rapidapi.com/user?username=${users}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '35ba56b00bmsh36435757bc31cbdp159ab9jsn761827fac482',
		'X-RapidAPI-Host': 'twitter241.p.rapidapi.com'
	}
};

try{
	const response = await fetch(url, options);
		const raw = await response.json();
	    console.log(raw);
		

		let owner  = raw.result.data.user.result.legacy;
		let ownerExtra = raw.result.data.user.result.professional;
		createCard(owner,ownerExtra);
}	
catch(err){
	console.log("error");
}
		
	// console.log("profile name", owner.name);
	// console.log("profile name", owner.followers_count);
	// console.log("photo", owner.profile_image_url_https);
	// }
loader.style.display = "none";
// content.style.display = "none";
	
}

async function userMedia(){
	console.log("you are entered in user media");

	const url = `https://twitter241.p.rapidapi.com/user-media?user=2455740390&count=20`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '35ba56b00bmsh36435757bc31cbdp159ab9jsn761827fac482',
		'X-RapidAPI-Host': 'twitter241.p.rapidapi.com'
	}
};

	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);

}


function createCard(user, ownerExtra){
	const cardHTML = `<div id="container">
	<div>
		<img src="${user.profile_image_url_https}" alt="${user.name}" class="avatar">
	</div>

	<div class="user-info">
		<h2 style="border-bottom:2px solid whitesmoke">${user.name}</h2>
		
		<ul>
			<li>${user.followers_count} <strong>Followers</strong></li>
			<li>${user.friends_count} <strong>Following</strong></li>
			<li>${user.possibly_sensitive} <strong>Sensitivity</strong></li>
			
		</ul>
		
		<p><strong>Description</strong>: ${user.description}</p>
		<p><strong>Joined</strong>: ${user.created_at} </p>
	</div>

</div>`;

	content.innerHTML = cardHTML;
}






searchBar.addEventListener("submit", (e) =>{
	loader.style.display = "inline-block";

	e.preventDefault();

	let user = item.value;

	if(user){
		profileData(user);	

		item.value = '';
	}

});



















