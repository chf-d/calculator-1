
let val1 = ' ';
let oper = 0;
let val2 = ' ';

function but_val(Bval) {
    if (val1==' ') {
        val1=Bval;
        document.getElementById('input').value=val1;
    }
    else if(oper==0){
        val1+=Bval;
        document.getElementById('input').value=val1;
    }
    else if(val2==' '){
        val2=Bval;
        document.getElementById('input').value=val1+oper+val2;
    }
    else{
        val2+=Bval;
        document.getElementById('input').value=val1+oper+val2;
    }
}

function oper_val(Oval) {

    if (val1!=' ' && val2==0) {
        oper=Oval;
        document.getElementById('input').value=val1+oper;
    }
}


function clear_input() {
    document.getElementById('input').value=' ';
    val1 = ' ';
    oper = 0;
    val2 = ' ';
}

function calcula() {
    let par1 = parseInt(val1);
    let par2 = parseInt(val2);

    if (par1==0 || par2==0) {
        document.getElementById('input').value='error'
    }
    else if (oper=='+') {
        parseInt(document.getElementById('input').value=par1+par2);
    }
    else if (oper=='-') {
        parseInt(document.getElementById('input').value=par1-par2);
    }
    else if (oper=='*') {
        parseInt(document.getElementById('input').value=par1*par2);
    }
    else if (oper=='/') {
        parseInt(document.getElementById('input').value=par1/par2);
    }
    val1 = ' ';
    oper = 0;
    val2 = ' ';
}
