const parseCode = (str) => {
  // your code here
	let s="";
	let strArr=[];
	let i=0;
	let flag=true;
	while(i<str.length){
		if(str[i]=='0' && flag==true){
			flag=false;
			strArr.push(s);
			s="";
		}else if(str[i]!='0'){
			s+=str[i];
			flag=true;
		}
		i++;
	}
	strArr.push(s);
	return {firstName:strArr[0],lastName:strArr[1],id:strArr[2]};
	
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
