var arrNumber = [];

function addArray(){
    var num = Number(document.getElementById("inputNum").value);
    arrNumber.push(num);
    document.getElementById("txtNum").innerHTML = arrNumber;
}
document.querySelector("#btnAdd").onclick = addArray;
/**
 * Bai 1
 */
function tinhTong(){
    var sum = 0;
    for(var i = 0 ; i < arrNumber.length; i++){
        if(arrNumber[i] > 0){
            sum += arrNumber[i];
        }
    }
    document.getElementById("txtSum").innerHTML ="Tong cac so duong: "+ sum;
}
document.getElementById("btnSum").onclick = tinhTong;
/**
 * Bai 2
 */
function demSoDuong(){
    var count = 0;
    for(var i = 0 ; i < arrNumber.length; i++){
        if(arrNumber[i] > 0){
            count++;
        }
    }
    document.getElementById("txtCount").innerHTML ="Cac so duong: "+ count;
}
document.getElementById("btnCount").onclick = demSoDuong;
/**
 * Bai 3
 */
function timMin(){
    var min = arrNumber[0];
    for(var i = 1 ; i < arrNumber.length; i++){
        if(arrNumber[i] < min){
            min = arrNumber[i];
        }
    }
    document.getElementById("txtMin").innerHTML = "So nho nhat: "+min;
}
document.getElementById("btnMin").onclick = timMin;

/**
 * Bai 4
 */
 function timMin2(){
    var arrDuong = [];
    for(var i = 0 ; i < arrNumber.length; i++){
       if ( arrNumber[i]>0){
           arrDuong.push(arrNumber[i]);
       }
    }
    var min = arrDuong[0];
    for(var i = 1 ; i < arrDuong.length; i++){
        if(arrDuong[i] < min){
            min = arrDuong[i];
        }
    }
    document.getElementById("txtMin2").innerHTML = "So duong nho nhat: "+min;
}
document.getElementById("btnMin2").onclick = timMin2;

/**
 * Bai 5
 */
function timChan(){
    var chan = 0;
    for(var i = arrNumber.length ; i > 0; i--){
        if(arrNumber[i] % 2== 0){
            chan = arrNumber[i];
            break;
        }else{
            chan =-1;
        }
    }
    document.getElementById("txtChan").innerHTML = "So chan cuoi cung: " + chan;
}
document.getElementById("btnChan").onclick = timChan;
/**
 * Bai 6
 */

function doiViTri(){
    var viTri1 = document.getElementById("inputPos1").value;
    var viTri2 = document.getElementById("inputPos2").value;
    var tam = 0;
    for ( var i = 0 ; i<= arrNumber.length ; i++){
        tam = arrNumber[viTri1];
        arrNumber[viTri1] = arrNumber[viTri2];
        arrNumber[viTri2] = tam;
        break;
    }
    document.getElementById("txtDoiViTri").innerHTML = "Mang sau khi doi: " +arrNumber;
}
document.getElementById("btnDoiViTri").onclick = doiViTri;
/**
 * Bai 7
 */

 function tangDan(){
    var tam=0;
   var arrTang = [];
   for (var i=0 ; i<arrNumber.length;i++){
       arrTang.push(arrNumber[i]);
   }
    for(var i = 0; i<arrTang.length; i++){
       for(var j=0 ; j< arrTang.length-1 ; j++){
            if(arrTang[j]>arrTang[j+1]){
                tam = arrTang[j];
                arrTang[j] = arrTang[j+1];
                arrTang[j+1]=tam;
            }
       }
    }
    console.log(arrTang);
    document.querySelector("#txtTang").innerHTML  ="Mang sau khi sap xep: " +arrTang;
}
document.querySelector("#btnTang").onclick = tangDan;
/**
 * Bai 8
 */
function kiemTraSNT(snt){
    if(snt < 2){
        return false;
    }
    if(snt == 2){
        return snt;
    }else if(snt == 3){
        return snt;
    }else{
    for(var i =2 ; i< snt/2 ; i++){
        if(snt % i ==0){
            return false;
        }
        return true;
        }
    }
}
 function timSNT(){
    var snt = 0;
    var count = 0;
    for(var i =0 ; i <=arrNumber.length ; i++){
        if(kiemTraSNT(arrNumber[i])){
            snt = arrNumber[i];
            break;
        }
    }
   
    document.getElementById("txtTimSNT").innerHTML ="So nguyen to: "+ snt;
}
document.getElementById("btnTimSNT").onclick = timSNT;
/**
 * Bai 9 
 */
 var arrSoThuc = [];
function themSoThuc(){
    var soThuc = Number(document.getElementById("inputSoThuc").value);
    arrSoThuc.push(soThuc);
    document.getElementById("txtSoThuc").innerHTML = arrSoThuc;
}
document.getElementById("btnSoThuc").onclick = themSoThuc;

function demSoNguyen(){
    var count =0;
    for ( var i=0 ; i<arrSoThuc.length;i++){
        if(Number.isInteger(arrSoThuc[i])){
            count++;
        }
    }
    document.getElementById("txtSoNguyen").innerHTML = "So nguyen: " +count;
}
document.getElementById("btnDemSoNguyen").onclick = demSoNguyen;
/**
 * Bai 10
 */
function soSanh(){
    var soAm = 0;
    var soDuong = 0;
    for(var i =0 ; i<arrNumber.length;i++){
        if(arrNumber[i]>0){
            soDuong++;
        }else{
            soAm++;
        }
    }
    if(soDuong > soAm){
        document.getElementById("txtSoSanh").innerHTML = "So duong > So am";
    }else if(soDuong = soAm){
        document.getElementById("txtSoSanh").innerHTML = "So am = So duong";
    }else{
        document.getElementById("txtSoSanh").innerHTML = "So am > So duong";
    }
}
document.getElementById("btnSoSanh").onclick = soSanh;