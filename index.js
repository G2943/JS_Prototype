let a = {
    nm : 'Keshav',
    run : ()=>{
        console.log("run in a")
    }
}


let p = {
    run: ()=> {
      alert("run")
    }
  }

  p.__proto__ = {
    name2: "Jackie"
  }

  a.__proto__  = p;

console.log(a.name2);

