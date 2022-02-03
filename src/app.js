/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let excuseGenerator = () => {
    let who = [
      "A dog ",
      "A barracuda ",
      "Captain Planet ",
      "The Queen of England ",
      "A Capybara "
    ];
    let verb = ["ate ", "ran over ", "trampled ", "stole ", "punched "];
    let what = [
      "my laptop ",
      "my webcam ",
      "my Furby ",
      "my iguana ",
      "my buspass "
    ];
    let when = [
      "last Tuesday!",
      "yesterday!",
      "on Grandma's birthday!",
      "this morning!",
      "last night!"
    ];

    let whoIndex = Math.floor(Math.random() * who.length);
    let verbIndex = Math.floor(Math.random() * verb.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    return who[whoIndex] + verb[verbIndex] + what[whatIndex] + when[whenIndex];
  };
  console.log(excuseGenerator);
  document.querySelector("#my-excuse").innerHTML = excuseGenerator();
};
