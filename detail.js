document.addEventListener('DOMContentLoaded',()=>{
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if(user){
        document.querySelector('.name').textContent=`${user.name.first} ${user.name.last}`
        document.querySelector('.image').src= `${user.picture.medium}`
        document.querySelector('.email').textContent=`${user.email}`
        document.querySelector('.age').textContent=`${user.dob.age}`
        document.querySelector('.DOB').textContent=`${user.dob.date}`
        document.querySelector('.phone-number').textContent=`${user.phone}`
        document.querySelector('.location').textContent=`${user.location.city} ,${user.location.country}`;

    }else{
        console.log("No data is found on local storage");
    }
});