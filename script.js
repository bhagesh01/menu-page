

function checkBoxAnim(){
  var checkBox =  document.getElementById("checkbox");
  var spanDiv1Span1 =  document.querySelectorAll(".spandiv1 span")[0];
  var spanDiv1Span2 =  document.querySelectorAll(".spandiv1 span")[1];
  var spanDiv2Span1 =  document.querySelectorAll(".spandiv2 span")[0];
  var spanDiv2Span2 =  document.querySelectorAll(".spandiv2 span")[1];
  var tl = gsap.timeline();
  if(checkBox.checked){
    document.querySelector(".hamburger").style.border = "0.5px solid black";
  // wrapper.style.overflow = "hidden";
   function openMenu(){
           tl
          .to(spanDiv1Span1,{
                  translateX:"105%",
                  durtion:0.01
          })
          .to(spanDiv1Span2,{
                  translateX:"-105%",
                  durtion:0.01
          })
          
          .to(".menupage",{
                  translateY:"100%",
                })
                .fromTo(spanDiv2Span1,{
                  width:0
           },{
                   translateX:"0",
                   width:57,
                   durtion:0.01
           })
  .fromTo(spanDiv2Span2,{
                  width:0,
          },{
                  translateX:"0",
                  width:57,
                  durtion:0.01
          })
        

  }
   openMenu();
  }
  else if(!checkBox.checked){
          function closeMenu(){
            document.querySelector(".hamburger").style.border = "0.5px solid black";
                  tl
                  .to(spanDiv2Span1,{
                          translateX:"-120%",
                          width:0,
                          durtion:0.01
                  })
                  .to(spanDiv2Span2,{
                          translateX:"120%",
                          durtion:0.01,
                          width:0,
                  })
          tl.to(spanDiv1Span1,{
                  translateX:"0",
                  durtion:0.01,
                  delay:.3
          })
          tl.to(spanDiv1Span2,{
                  translateX:"0",
                  durtion:0.01
          })
          gsap.to(".menupage",{
          translateY:"-100%",
          duration:1,
          delay:0.9,
        })
         
          }
          closeMenu();
  }
  loadingMenuPageAnim();
}


// menu js code


function circleMoveAnim(){
  
  var active  = 3;
  var minicircles = document.querySelectorAll(".minicircle");
  var circle = document.querySelector(".circle");
  gsap.to(minicircles[active-1],{
    opacity:.7,
  })
  
  var audio = new Audio("tick.mp3");
  minicircles.forEach((val,index)=>{
  val.addEventListener("click",function(){
  gsap.to(".circle , .menubetween",{
    rotate:((3-(index+1)) * 15),
    onChange:audio.play(),
  })
  greyout();
  gsap.to(this,{
    opacity:0.7,
  })
  })
  
  })
  
  
  function greyout(){
   gsap.to(minicircles,{
    opacity:0.08,
   })
  }
  
  gsap.from(minicircles,{
    y:-50,
    scale:0,
    stagger:.3,
  })
  
  }
  circleMoveAnim()
  


function loadingMenuPageAnim(){
  var tl = gsap.timeline();

tl
.to(".menubetween",{
  opacity:1,
  ease:Expo.easeInOut,
  delay:1.5
})
.to(".circle",{
  rotate:0,
  ease:Expo.easeInOut,
  duration:1.2,
})

}
// loadingMenuPageAnim();

// menu page js code ends here

