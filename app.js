let url="https://randomuser.me/api/?results=4";
async function getdetails() {
    try{
        let res= await fetch(url);
        let data = await res.json();
        const users = data.results;

        const divs = document.querySelectorAll('.container div');

        users.forEach((user,index)=>{
            const userDiv = divs[index];

            const name = userDiv.querySelector('h2');
           const img = userDiv.querySelector('img');
            const button = userDiv.querySelector('button');

            name.textContent= user.name.first, user.name.last;

            img.src= user.picture.medium; 

            button.addEventListener('click' , ()=>{
                localStorage.setItem("currentUser",JSON.stringify(user));
                window.location.href = `detail.html`;
            
            })

        });

    }
    catch (err){
        console.log("error is :",err);

    }
}

getdetails();