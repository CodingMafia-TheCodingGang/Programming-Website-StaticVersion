
async function myfunction1(params){

    let ans = document.getElementById(params).textContent;
 let response = await fetch('http://localhost:11000/Language', {
    method: 'GET',
    headers: {
        topic:ans
    },
})
      
    response = await response.json();
    ans = response[0];
    console.log(ans.title);
    
    document.getElementById('h1tagofcontent').innerHTML = ans.title;
    document.getElementById('para').innerHTML = ans.about;

     console.log(response);
}