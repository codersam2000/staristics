function sumArray(array) {
		  let sum = 0;

		  for (let i = 0; i <= array.length-1; i++) {
		    sum += array[i];
		  }
		  return sum;
		}
		function multiplyTwoArray(arr1,arr2){
			let arr = [];
			for(let i = 0; i<=arr1.length-1; i++){
				arr.push(arr1[i]*arr2[i]);
			} 
			return arr;
		}
		function power(x){
			let arr = [];
			for(let i = 0; i<=x.length-1; i++){
				arr.push(Math.pow(x[i],2));
			} 
			return arr;
		}
		function calculate(){

			var inx = document.getElementById('inx').value;
			var iny = document.getElementById('iny').value;

			const x = inx.split(",");//[1,3,5,7,9];
			const y = iny.split(",");//[2,4,6,8,10];

			if( x =='' || y == '' ){
				return alert("Data number must be same lenght of x,y bouth field");
			}
			if( x.length > y.length ){
				for(let i = 0; i<=x.length-1; i++){
					if(y[i] === undefined){
						y.push(0);
					}
				} 
			}else if( x.length < y.length ){
				for(let i = 0; i<=y.length-1; i++){
					if(x[i] === undefined){
						x.push(0);
					}
				} 
			}

			var SUMx = document.getElementById('x');
			var SUMy = document.getElementById('y');
			var SUMxx = document.getElementById('xx');
			var SUMyy = document.getElementById('yy');
			var SUMxy = document.getElementById('xy');

			var powX = power(x);
			var powY = power(y);
			var sumX = sumArray(x);
			var SumY = sumArray(y);
			var sumPawX = sumArray(powX);
			var sumPawY = sumArray(powY);
			var xyList = multiplyTwoArray(x,y);
			var sumXY = sumArray(xyList);

			//table body
			var tbody = document.querySelector('#tbody');
			

			for(let i = 0; i<=x.length-1; i++){
				//create tr
				var trow = document.createElement('tr');

				//create td
				const xtd = document.createElement('td');
			    xtd.innerHTML = x[i];
			    trow.appendChild(xtd);

			    const ytd = document.createElement('td');
			    ytd.innerHTML = y[i];
			    trow.appendChild(ytd);

			    const xxtd = document.createElement('td');
			    xxtd.innerHTML = powX[i];
			    trow.appendChild(xxtd);

			    const yytd = document.createElement('td');
			    yytd.innerHTML = powY[i];
			    trow.appendChild(yytd);

			    const xytd = document.createElement('td');
			    xytd.innerHTML = xyList[i];
			    trow.appendChild(xytd);

			    tbody.appendChild(trow);
			}

			SUMx.textContent=sumX;
			SUMy.textContent=SumY;
			SUMxx.textContent=sumPawX;
			SUMyy.textContent=sumPawY;
			SUMxy.textContent=sumXY;
		}
		var form = document.querySelector('#dataForm');
		form.addEventListener('submit',(e)=>{
			e.preventDefault();
			tbody.innerHTML = '';
			calculate();
		})