console.log("abhay is a hacker")
console.log("ram is a hecker")

setTimeout(() => {                //just because of asychronous action it will display last line
    console.log("i am inside settimeout")
}, 0);

setTimeout(() => {              //just because of asychronous action it will display last line
    console.log("i am inside settimeout 2")
}, 2000);
console.log("the end")




const fn = () => {
  console.log("Nothing")
}

const Callback = (arg,fn) => {     //using call_back from here
  console.log(arg)
  fn()
}
const loadScript = (src, Callback) => {
  let sc = document.createElement("script")
  sc.src = src;
  sc.onload = Callback("abhay",fn);
  document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", Callback)