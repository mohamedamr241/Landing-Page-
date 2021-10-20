/*some variables*/ 
const ul =document.querySelector('#navbar__list');
let sections = document.querySelectorAll('section');
let arr=[...sections];

/*navbar*/
//first, we will iterate over each section and then add a tag to li tag and then li tag to ul tag 
//second, adding content of data-nav of each section to the content of each a tag
//third, validating the scrolling to each section by clicking on each li tag using scrollIntoView
// some steps for adding style to each a tag and adding class to each a tag
sections.forEach(section=>{
    let li =document.createElement('li');
    let a1 =document.createElement('a');
    let name =section.getAttribute('data-nav');
    a1.textContent=name;
    li.addEventListener('click', ()=>{
        const limit = section.getBoundingClientRect().top + window.pageYOffset + (-70);  
        window.scrollTo({top: limit, behavior: 'smooth'});  
        
    });
    li.appendChild(a1);
    a1.classList.add('menu__link');
    a1.setAttribute('style','float: left;');
    ul.appendChild(li);
});
    

/*active navigation*/
//first of all add id of each section to each li tag
let navli = document.querySelectorAll('nav ul li');
let counter=0; 
navli.forEach(li=>{

    let id1=arr[counter].getAttribute('id');
    if(counter===0){
        li.classList.add(id1);
        counter++;
    }else{
        li.classList.add(id1);
        counter++;
    } 
});
//then check the posittion of each section and add active class the corresponding li tag which have same id of the section
window.addEventListener('scroll',()=>{
    let current = '';
    sections.forEach( section=> {
        
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset>= (sectionTop - sectionHeight )){
            current = section.getAttribute('id');
        }
        
    })
    navli.forEach( li=>{
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active');
        }
    })
});

/*active sectons using getBoundClientReact*/
//first of all we will iterate over each section and then get the bounding of each section and adding a class to each section if the if condition is valid

window.addEventListener('scroll',()=>{
    sections.forEach( section=> {
        let secPos= section.getBoundingClientRect();
        if(secPos.top>0 && secPos.top<400){
            if(!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class')
            }
        }else{
            section.classList.remove('your-active-class')
        }
        
    })
});