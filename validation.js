function validation()
		{
			var name,email,msg,male,female,qualification;
			name=document.getElementById("name").value;
			email=document.getElementById("email").value;
			msg=document.getElementById("msg").value;
			male=document.getElementById("male").checked;
			female=document.getElementById("female").checked;
			qualification=document.getElementById("qualification").value;
			h1=document.getElementById("h1").checked;
			h2=document.getElementById("h2").checked;
			h3=document.getElementById("h3").checked;
			if(name==null || name=="")
			{
				alert("enter user name");
				return false;
			}
			else if(email==null || email=="")
			{
				alert("enter email id");
				return false;
			}
			else if(msg==null || msg=="")
			{
				alert("enter address");
				return false;
			}
			else if(male==false && female==false)
			{
				alert("select your gender");
				return false;
			}
			else if(qualification==0)
			{
				alert("select qualification");
				return false;
			}
			else if(h1==false && h2==false && h3==false)
			{
				alert("select your hobby");
				return false;
			}
			else
			{
				return true;
			}
		}