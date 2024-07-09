import './index.html';
import './index.scss';
import code from './img/post12.jpg'
import { mult, sum } from './modules/calc';


const imgWrapper = document.querySelector('.img')
const img = new Image();
img.src = code
imgWrapper.append(img)

console.log(mult(2,4));
console.log(sum(4,4));