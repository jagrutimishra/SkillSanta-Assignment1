
//first question

var array =[0,-1,4]
alert(array.sort())


//second question

var i;
for(i=0;i<5;i++)
{
    if(i%2==0)
    {
        console.log(+i+ "is even");
    }
    
    if(i%2!=0)
    {
        console.log(+i+ "is odd");
    }
}

//third question

for(i=5;i>0;i--)
{
 res="";
 for(j=i;j>0;j--)
 {
  res+="*";
 }
 console.log(res);
}

//fourth question
var email = "eddygrant@example.com";
    var split = email.split("@");
    var split1 = split[0];
    var avg = split1.length / 2;
    split1 = split1.substring(0, (split1.length - avg));
    split2 = split[1];
    console.log(split1 + "...@" + split2);


//fifth question

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }
 
 document.write(titleCase("I'm a little tea pot"));


//sixth question
console.log(('The quick brown fox jumps over the lazy dog').slice(0,19));

//sixth question
function search_word(text, word){
    
    var x = 0, y=0;
   
    for (i=0;i< text.length;i++)
        {
        if(text[i] == word[0])
            {
            for(j=i;j< i+word.length;j++)
               {
                if(text[j]==word[j-i])
                  {
                    y++;
                  }
                if (y==word.length){
                    x++;
                }
            }
            y=0;
        }
    }
   return "'"+word+"' was found "+x+" times.";
}

console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));