const numbers = [1,3,5,7,8];

const num1s = numbers.map((n) => {
    return n * 2;
});

const num2s = numbers.filter(n => n === 3);

const locSanPham = (...dssanpham) => {
    return dssanpham.filter(n => n ===1);
};


console.log(locSanPham(1,2,3,4,5,1));
console.log(locSanPham(1,2,3,4,6,3,8,6,9,5,0));


console.log(numbers);
console.log(num1s);
console.log(num2s);