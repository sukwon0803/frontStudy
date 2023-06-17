"use strict";

/*

  ES2015의 template literal( 백틱, ` ) 에 대해서 알아본다.
  template literal 의 용도
  1. 다중 문자열 만들 때
  2. 변수 치환
*/
var string1 = '안녕하세요';
var string2 = '반갑습니다';
var str = "\na\n\nb\n\n23\n".concat(string1, ", ").concat(string2, "\n");