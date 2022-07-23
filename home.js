



























// let signinLS=JSON.parse(localStorage.getItem("signin")) || [];
// let nav=document.getElementById("nav3");
// flag=true;

//  if(signinLS !== null){
//     nav.innerHTML=null;
//     let username=document.createElement("h1");
//     username.style.fontSize="30px";
//     username.style.marginRight="20px";
//     username.innerText="Welcome "+signinLS.name+" !";
//     nav.append(username);
// }








// let arr=[

// ' <div id="slide1">
// <div>
// <img src="https://s3.amazonaws.com/img.mynetdiary.com/images/success-story-julie@1x.png">
// </div>
// <div>
// <h1>Julie Martel</h1>
// <h2>LOST 71 LB (35%) AND MAINTAINED
//   AFTER 492 DAYS.</h2>
// <h3>“My life changed.
//   My life is beautiful!
//   I am beautiful!!!”</h3>
// <button>
//   READ SUCCESS STORY &nbsp; &nbsp;<img
//     src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGwtcnVsZT0nZXZlbm9kZCcgdmlld0JveD0nMCAwIDE0IDIyJyBmaWxsPScjMGJiODUwJyA+PHBhdGggZD0nTTIuMDg2LDEuMjUzIEwxMy40OTksOS45ODggQzE0LjE2NSwxMC40OTkgMTQuMTY1LDExLjQ5MiAxMy40OTksMTIuMDAyIEwyLjA4NiwyMC43MzggQzEuMjQwLDIxLjM4NiAwLjAwOSwyMC43ODkgMC4wMDksMTkuNzMyIEwyLjAwMCwxMS4wMDAgTDAuMDA5LDIuMjU5IEMwLjAwOSwxLjIwMSAxLjI0MCwwLjYwNCAyLjA4NiwxLjI1MyBaJy8+PC9zdmc+"
//     alt="" />
// </button>
// </div>
// </div>',
// "<div id="silde2">
// <div>
// <img src="https://s3.amazonaws.com/img.mynetdiary.com/images/success-story-carrie@1x.png" alt="">
// </div>
// <div>
// <h1>Carrie Hammond</h1>
// <h2>LOST AND MAINTAINED 103 LBS (40%)
//   AFTER 616 DAYS.</h2>
// <h3>“I love having a desire to go out and experience new things without worrying about if I'm too fat to do
//   something.”</h3>
// <button>
//   READ SUCCESS STORY &nbsp; &nbsp;<img
//     src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGwtcnVsZT0nZXZlbm9kZCcgdmlld0JveD0nMCAwIDE0IDIyJyBmaWxsPScjMGJiODUwJyA+PHBhdGggZD0nTTIuMDg2LDEuMjUzIEwxMy40OTksOS45ODggQzE0LjE2NSwxMC40OTkgMTQuMTY1LDExLjQ5MiAxMy40OTksMTIuMDAyIEwyLjA4NiwyMC43MzggQzEuMjQwLDIxLjM4NiAwLjAwOSwyMC43ODkgMC4wMDksMTkuNzMyIEwyLjAwMCwxMS4wMDAgTDAuMDA5LDIuMjU5IEMwLjAwOSwxLjIwMSAxLjI0MCwwLjYwNCAyLjA4NiwxLjI1MyBaJy8+PC9zdmc+"
//     alt="" />
// </button>
// </div>
// </div>",
// <div id="slide3"></div>
// <div>
// <img src="https://s3.amazonaws.com/img.mynetdiary.com/images/success-paul-reynolds@1x.png" alt="">
// </div>
// <div>
// <h1>Paul Reynolds</h1>
// <h2>LOST 50LB (22%) AND MAINTAINED
// AFTER 345 DAYS.</h2>
// <h3>“The ability to track using MyNetDiary has been so important.”</h3>
// <button>
// READ SUCCESS STORY &nbsp; &nbsp;<img
//   src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGwtcnVsZT0nZXZlbm9kZCcgdmlld0JveD0nMCAwIDE0IDIyJyBmaWxsPScjMGJiODUwJyA+PHBhdGggZD0nTTIuMDg2LDEuMjUzIEwxMy40OTksOS45ODggQzE0LjE2NSwxMC40OTkgMTQuMTY1LDExLjQ5MiAxMy40OTksMTIuMDAyIEwyLjA4NiwyMC43MzggQzEuMjQwLDIxLjM4NiAwLjAwOSwyMC43ODkgMC4wMDksMTkuNzMyIEwyLjAwMCwxMS4wMDAgTDAuMDA5LDIuMjU5IEMwLjAwOSwxLjIwMSAxLjI0MCwwLjYwNCAyLjA4NiwxLjI1MyBaJy8+PC9zdmc+"
//   alt="" />
// </button>
// </div>
// </div>
// <div id="slide4"></div>
// <div>
// <img src="https://s3.amazonaws.com/img.mynetdiary.com/images/success-story-joe@1x.png" alt="">
// </div>
// <div>
// <h1>Joe Balfe</h1>
// <h2>LOST 65LB (20%) AND MAINTAINED
// AFTER 216 DAYS.</h2>
// <h3>“MyNetDiary helps me know exactly how many calories I consume.”</h3>
// <button>
// READ SUCCESS STORY &nbsp; &nbsp;<img
// src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGwtcnVsZT0nZXZlbm9kZCcgdmlld0JveD0nMCAwIDE0IDIyJyBmaWxsPScjMGJiODUwJyA+PHBhdGggZD0nTTIuMDg2LDEuMjUzIEwxMy40OTksOS45ODggQzE0LjE2NSwxMC40OTkgMTQuMTY1LDExLjQ5MiAxMy40OTksMTIuMDAyIEwyLjA4NiwyMC43MzggQzEuMjQwLDIxLjM4NiAwLjAwOSwyMC43ODkgMC4wMDksMTkuNzMyIEwyLjAwMCwxMS4wMDAgTDAuMDA5LDIuMjU5IEMwLjAwOSwxLjIwMSAxLjI0MCwwLjYwNCAyLjA4NiwxLjI1MyBaJy8+PC9zdmc+"
// alt="" />
// </button>
// </div>
// </div>
// <div id="slide5"></div>
// <div>
// <img src="https://s3.amazonaws.com/img.mynetdiary.com/images/success-rick-white@1x.png" alt="">
// </div>
// <div>
// <h1>Rick White</h1>
// <h2>LLOST 91 LB (30%) AND MAINTAINED
// AFTER 881 DAYS.</h2>
// <h3>“I went body surfing for 4 hours straight with my 28 year old son and felt great!”</h3>
// <button>
// READ SUCCESS STORY &nbsp; &nbsp;<img
// src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGwtcnVsZT0nZXZlbm9kZCcgdmlld0JveD0nMCAwIDE0IDIyJyBmaWxsPScjMGJiODUwJyA+PHBhdGggZD0nTTIuMDg2LDEuMjUzIEwxMy40OTksOS45ODggQzE0LjE2NSwxMC40OTkgMTQuMTY1LDExLjQ5MiAxMy40OTksMTIuMDAyIEwyLjA4NiwyMC43MzggQzEuMjQwLDIxLjM4NiAwLjAwOSwyMC43ODkgMC4wMDksMTkuNzMyIEwyLjAwMCwxMS4wMDAgTDAuMDA5LDIuMjU5IEMwLjAwOSwxLjIwMSAxLjI0MCwwLjYwNCAyLjA4NiwxLjI1MyBaJy8+PC9zdmc+"
// alt="" />
// </button>
// </div>
// </div>


// <div id="slide6"></div>
// <div>
// <img src="https://s3.amazonaws.com/img.mynetdiary.com/images/success-matthew-warner@1x.png" alt="">
// </div>
// <div>
// <h1>Matthew Warner</h1>
// <h2>LOST 29LB (14%) AND MAINTAINED
// AFTER 379 DAYS.</h2>
// <h3>“I used your product religiously for two years and it made a huge difference in my health and happiness.”</h3>
// <button>
// READ SUCCESS STORY &nbsp; &nbsp;<img
// src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGwtcnVsZT0nZXZlbm9kZCcgdmlld0JveD0nMCAwIDE0IDIyJyBmaWxsPScjMGJiODUwJyA+PHBhdGggZD0nTTIuMDg2LDEuMjUzIEwxMy40OTksOS45ODggQzE0LjE2NSwxMC40OTkgMTQuMTY1LDExLjQ5MiAxMy40OTksMTIuMDAyIEwyLjA4NiwyMC43MzggQzEuMjQwLDIxLjM4NiAwLjAwOSwyMC43ODkgMC4wMDksMTkuNzMyIEwyLjAwMCwxMS4wMDAgTDAuMDA5LDIuMjU5IEMwLjAwOSwxLjIwMSAxLjI0MCwwLjYwNCAyLjA4NiwxLjI1MyBaJy8+PC9zdmc+"
// alt="" />
// </button>
// </div>

