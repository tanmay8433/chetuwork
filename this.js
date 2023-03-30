
//apply this keyword for refer current obj;
let obj={
    firstname:"tanmay",
    lastname:"agarwal",
    add:"umesh nager kotdwar pauri disct",
    cith:"kotdwar",
    fullAddress:{
        lastname:"kumar",
  getdetail (){
      console.log(this.lastname);
      }
}
     //getdetail(){
  //  console.log(this.lastname);
   // }
}
obj.fullAddress.getdetail()
//obj.getdetail()