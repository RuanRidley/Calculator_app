<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  <title>Frontend Mentor | Calculator app</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="conteiner">
    <div class="title">
      <div class="toggle">
        <h3>Calc</h3>
        <div class="right">
          <p id="one">1</p>
          <p  id="two">2</p>
          <p id="three">3</p>
        </div>
      </div>
      <div class="control">
        <p>theme</p>
        <div class="box">
					<div id="circle"></div>
				</div>
      </div>
    </div>
    <div class="screen">
        <form name="calc">
          <input type="text" name="text" readonly id="screen">
        </form>
    </div>
    <div class="cal-body">
      <div class="btn">
        <button class="num" onclick="document.calc.text.value+='7'">7</button>
        <button class="num" onclick="document.calc.text.value+='8'">8</button>
        <button class="num" onclick="document.calc.text.value+='9'">9</button>
        <button onclick="function del()">DEL</button>
        <button class="num" onclick="document.calc.text.value+='4'">4</button>
        <button class="num" onclick="document.calc.text.value+='5'">5</button>
        <button class="num" onclick="document.calc.text.value+='6'">6</button>
        <button onclick="document.calc.text.value+='+'">+</button>
        <button class="num" onclick="document.calc.text.value+='1'">1</button>
        <button class="num" onclick="document.calc.text.value+='2'">2</button>
        <button class="num" onclick="document.calc.text.value+='3'">3</button>
        <button onclick="document.calc.text.value+='-'">-</button>
        <button onclick="document.calc.text.value+=''">.</button>
        <button class="num" onclick="document.calc.text.value+='0'">0</button>
        <button onclick="document.calc.text.value+='/'">/</button>
        <button onclick="document.calc.text.value+='*'">X</button>
        <button class="reset" onclick="document.calc.text.value+=''">RESET</button>
        <button class="equal" onclick="document.calc.text.value+= eval(calc.text.value)">=</button>
    
      </div>
    </div>
  </div>  
  <script src="calculadora.js"></script>
</body>
</html>