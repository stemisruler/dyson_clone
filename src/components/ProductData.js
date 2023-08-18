import { random } from 'lodash';

let product = [
  { _id:1, title:'악세사리1', img:'accessary1.jpg', price: random(100, 10000).toString() },
  { _id:2, title:'악세사리2', img:'accessary2.jpg', price: random(100, 10000).toString() },
  { _id:3, title:'악세사리3', img:'accessary3.jpg', price: random(100, 10000).toString() },
  { _id:4, title:'악세사리4', img:'accessary4.jpg', price: random(100, 10000).toString() },
  { _id:5, title:'공기청정기1', img:'air1.png', price: random(100, 10000).toString() },
  { _id:6, title:'공기청정기2', img:'air2.png', price: random(100, 10000).toString() },
  { _id:7, title:'공기청정기3', img:'air3.png', price: random(100, 10000).toString() },
  { _id:8, title:'공기청정기4', img:'air4.png', price: random(100, 10000).toString() },
  { _id:9, title:'청소기1', img:'cleaner1.png', price: random(100, 10000).toString() },
  { _id:10, title:'청소기2', img:'cleaner2.png', price: random(100, 10000).toString() },
  { _id:11, title:'청소기3', img:'cleaner3.png', price: random(100, 10000).toString() },
  { _id:12, title:'청소기4', img:'cleaner4.png', price: random(100, 10000).toString() },
  { _id:13, title:'헤어용1', img:'hair1.png', price: random(100, 10000).toString() },
  { _id:14, title:'헤어용2', img:'hair2.png', price: random(100, 10000).toString() },
  { _id:15, title:'헤어용3', img:'hair3.png', price: random(100, 10000).toString() },
  { _id:16, title:'헤어용4', img:'hair4.png', price: random(100, 10000).toString() },
  { _id:17, title:'조명1', img:'light1.png', price: random(100, 10000).toString() },
  { _id:18, title:'조명2', img:'light2.png', price: random(100, 10000).toString() },
  { _id:19, title:'조명3', img:'light3.png', price: random(100, 10000).toString() },
  { _id:20, title:'조명4', img:'light4.png', price: random(100, 10000).toString() },
];

export default product;