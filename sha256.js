function getCharCode(char){
    for(let i=0;i<255;i++){
        if(String.fromCodePoint(i)==char){
            return i;
        }
    }
}

function binaryConversion(value){
    return Number(value).toString(2).padStart(8, "0");
}

function decimalConversion(str){
    return parseInt(str,2);
}

function rotation(str1,i){
    let str2 = str1.split("");
    let str3 = str2.splice(32-i);
    return str3.concat(str2).join("");
}

function shift(str1,i){
    let str2 = str1.split("");
    let str3 = str2.splice(32-i);
    return Array(str3.length).fill("0").concat(str2).join("");
}

function Ch(e,f,g){
    let str1 = e.map((v)=>{return binaryConversion(v)}).join("");
    let str2 = f.map((v)=>{return binaryConversion(v)}).join("");
    let str3 = g.map((v)=>{return binaryConversion(v)}).join("");
    let str4 = "";
    for (let i = 0; i < 32; i++) {
        str4 += (str1[i]=="1") ? str2[i] : str3[i];
    }
    const array1 = str4.match(/.{8}/g).map(decimalConversion);
    return array1;
}

function Maj(a,b,c){
    let str1 = a.map((v)=>{return binaryConversion(v)}).join("");
    let str2 = b.map((v)=>{return binaryConversion(v)}).join("");
    let str3 = c.map((v)=>{return binaryConversion(v)}).join("");
    let str4 = "";
    for (let i = 0; i < 32; i++) {
        str4 += (Number(str1[i])+Number(str2[i])+Number(str3[i])>=2) ? "1" : "0";
    }
    const array1 = str4.match(/.{8}/g).map(decimalConversion);
    return array1;
}

function add2Arrays(a1,a2){
    let a3 = Array(4).fill(0);
    let overflow = false;
    for (let i = 3; i >= 0; i--) {
        a3[i] = (a1[i] + a2[i] + overflow) % 256;
        overflow = (a1[i] + a2[i] + overflow > 255);
    }
    return a3;
}

function Q0(s){
    let binary = s.map((v)=>{return binaryConversion(v)}).join("");
    let str4 = "";
    const str1 = rotation(binary,7);
    const str2 = rotation(binary,18);
    const str3 = shift(binary,3);
    for (let i = 0; i < 32; i++) {
        str4 += String(Number(str1[i])^Number(str2[i])^Number(str3[i]));
    }
    const array1 = str4.match(/.{8}/g).map(decimalConversion);
    return array1;
};
function Q1(s){
    let binary = s.map((v)=>{return binaryConversion(v)}).join("");
    let str4 = "";
    const str1 = rotation(binary,17);
    const str2 = rotation(binary,19);
    const str3 = shift(binary,10);
    for (let i = 0; i < 32; i++) {
        str4 += String(Number(str1[i])^Number(str2[i])^Number(str3[i]));
    }
    const array1 = str4.match(/.{8}/g).map(decimalConversion);
    return array1;
};

function S0(s){
    let binary = s.map((v)=>{return binaryConversion(v)}).join("");
    let str4 = "";
    const str1 = rotation(binary,2);
    const str2 = rotation(binary,13);
    const str3 = rotation(binary,22);
    for (let i = 0; i < 32; i++) {
        str4 += String(Number(str1[i])^Number(str2[i])^Number(str3[i]));
    }
    const array1 = str4.match(/.{8}/g).map(decimalConversion);
    return array1;
}

function S1(s){
    let binary = s.map((v)=>{return binaryConversion(v)}).join("");
    let str4 = "";
    const str1 = rotation(binary,6);
    const str2 = rotation(binary,11);
    const str3 = rotation(binary,25);
    for (let i = 0; i < 32; i++) {
        str4 += String(Number(str1[i])^Number(str2[i])^Number(str3[i]));
    }
    const array1 = str4.match(/.{8}/g).map(decimalConversion);
    return array1;
}

function SHA256(str){
const buf1 = Array(64).fill(0);

str.split("").forEach((v,i) => {
    buf1[i] = getCharCode(v);
})

buf1[str.length] = 128;

buf1[63] = str.length*8;

let H = [
    Array.from({length: 4},(_,i)=>Number("0x"+"6a09e667".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"bb67ae85".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"3c6ef372".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"a54ff53a".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"510e527f".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"9b05688c".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"1f83d9ab".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"5be0cd19".slice(i*2,i*2+2))),
];

const K = [
    Array.from({length: 4},(_,i)=>Number("0x"+"428a2f98".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"71374491".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"b5c0fbcf".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"e9b5dba5".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"3956c25b".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"59f111f1".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"923f82a4".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"ab1c5ed5".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"d807aa98".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"12835b01".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"243185be".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"550c7dc3".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"72be5d74".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"80deb1fe".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"9bdc06a7".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"c19bf174".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"e49b69c1".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"efbe4786".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"0fc19dc6".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"240ca1cc".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"2de92c6f".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"4a7484aa".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"5cb0a9dc".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"76f988da".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"983e5152".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"a831c66d".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"b00327c8".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"bf597fc7".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"c6e00bf3".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"d5a79147".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"06ca6351".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"14292967".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"27b70a85".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"2e1b2138".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"4d2c6dfc".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"53380d13".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"650a7354".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"766a0abb".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"81c2c92e".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"92722c85".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"a2bfe8a1".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"a81a664b".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"c24b8b70".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"c76c51a3".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"d192e819".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"d6990624".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"f40e3585".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"106aa070".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"19a4c116".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"1e376c08".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"2748774c".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"34b0bcb5".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"391c0cb3".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"4ed8aa4a".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"5b9cca4f".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"682e6ff3".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"748f82ee".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"78a5636f".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"84c87814".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"8cc70208".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"90befffa".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"a4506ceb".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"bef9a3f7".slice(i*2,i*2+2))),
    Array.from({length: 4},(_,i)=>Number("0x"+"c67178f2".slice(i*2,i*2+2))),
];

let N = 1;
let M = Array.from({length: 16},(_, i)=>buf1.slice(i*4, i*4+4));

let W = Array(64).fill(0);

for (let i = 0; i < 64; i++) {
    if(i<16){
        W[i] = M[i];
    }else{
        W[i] = add2Arrays(
            add2Arrays(Q1(W[i-2]),W[i-7]),
            add2Arrays(Q0(W[i-15]),W[i-16])
        );
    }
}

let a = [...H[0]];
let b = [...H[1]];
let c = [...H[2]];
let d = [...H[3]];
let e = [...H[4]];
let f = [...H[5]];
let g = [...H[6]];
let h = [...H[7]];

for (let i = 0; i < 64; i++) {
    const T1 = add2Arrays(h,add2Arrays(S1(e),add2Arrays(Ch(e,f,g),add2Arrays(K[i],W[i]))))
    const T2 = add2Arrays(S0(a),Maj(a,b,c))
    h = [...g]
    g = [...f]
    f = [...e]
    e = add2Arrays([...d],[...T1])
    d = [...c]
    c = [...b]
    b = [...a]
    a = add2Arrays(T1,T2)
}

H[0] = add2Arrays(H[0], a);
H[1] = add2Arrays(H[1], b);
H[2] = add2Arrays(H[2], c);
H[3] = add2Arrays(H[3], d);
H[4] = add2Arrays(H[4], e);
H[5] = add2Arrays(H[5], f);
H[6] = add2Arrays(H[6], g);
H[7] = add2Arrays(H[7], h);

return H.map(v1 => v1.map(v2 => Number(v2).toString(16).padStart(2, '0')).join("")).join("")
}
