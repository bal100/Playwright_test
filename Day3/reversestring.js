
function reversestring(){
    let InstituteName="TESTLEAF"
    let reverse =""
    for (let i=InstituteName.length-1;i>=0;i--){
    reverse = reverse+InstituteName[i];
    }
    console.log("Reversed string:"+reverse)

}
reversestring()