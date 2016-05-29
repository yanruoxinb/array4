'use strict';

function fibonacci_series(n) {
	var arr=new Array();
		var first=0,second=1,sum=0;
		if(n==1){
			arr[0]=0;
			arr[1]=1;
		}
		else{
			arr[0]=0;
			arr[1]=1;
			for(var i=2;i<=n;i++){
				sum=first+second;
				first=second;
				arr.push(sum);
				second=arr[i];
			}
		}
	return arr;
}

module.exports = fibonacci_series;
