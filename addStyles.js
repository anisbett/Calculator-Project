const bodyClass = "bg-purple-800 bg-gradient-to-br from-blue-300 bg-opacity-25";
const bdy = document.querySelector('body');
bodyClass.split(" ").forEach((cls) => bdy.classList.add(cls));

const calcBodyClass = "max-w-lg rounded overflow-hidden shadow-2xl bg-pink-700 bg-opacity-75 bg-gradient-to-tr from-gray-800 flex";
const calcBody = document.querySelector('.calcBody');
calcBodyClass.split(" ").forEach((cls) => calcBody.classList.add(cls));

const outputClass = "flex flex-col 2-3/4 h-12 justify-center items-end m-1 bg-gray-300 text-gray-900 font-semibold px-2 border border-black hover:border gray-500 rounded";
const output = document.querySelector('.output');
outputClass.split(" ").forEach((cls) => output.classList.add(cls));

const previousNumberClass = "flex max-w-lg h-1/3 pb-5-pt-1 text-gray-600 text-xs";
const previousNumber = document.querySelector('.previousNumber');
previousNumberClass.split(" ").forEach((cls) => previousNumber.classList.add(cls));

const currentNumberClass = "flex max-w-lg h-2/3 pb-2 text-xl";
const currentNumber = document.querySelector('.currentNumber');
currentNumberClass.split(" ").forEach((cls) => currentNumber.classList.add(cls));

const clearClass = "flex w-12 h-12 justify-center items-center m-1 font-bold py-2 px-2 border hover:border-transparent rounded text-white border-2 text-2xl hover:bg-red-500";
const clear = document.querySelector('.clear');
clearClass.split(" ").forEach((cls) => clear.classList.add(cls));