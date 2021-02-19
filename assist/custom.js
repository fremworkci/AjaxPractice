$(document).ready(function(){
	//for fetch
	function show()
	{
		var url=BASE_URL+'Home/show';
		$.ajax({
			url : url,
			type: 'POST',
			success:function(data)
			{
				var i;
				var sr=0;
				var html="";
				var jdata=JSON.parse(data);
				for(i=0;i<jdata.length;i++)
				{
					sr++;
					var img="<img src='"+BASE_URL+'img/'+jdata[i].pic+"' style='width:80px; height:80px;'>";
					html+="<tr>"+
					"<td>"+sr+"</td>"+
					"<td>"+img+"</td>"+
					"<td>"+jdata[i].name+"</td>"+
					"<td>"+jdata[i].email+"</td>"+
					"<td>"+jdata[i].password+"</td>"+
					"<td><button class='btn btn-success' id='editbtn' data-eid='"+jdata[i].id+"'>Edit</button></td>"+
					"<td><button class='btn btn-info' id='deletebtn' data-did='"+jdata[i].id+"'>Delete</button></td>"+
					"</tr>";
				}
				$("#allrecord").html(html);
			}
		});
	}
	show();


	//for edit
	$(document).on("click","#editbtn",function(){
		$("#modal").show();
		var id=$(this).attr("data-eid");
		var url=BASE_URL+'Home/edit';
		$.ajax({
			url : url,
			type: 'POST',
			dataType:'json',
			data:{id:id},
			success:function(data)
			{
				$("#e_id").val(data[0].id);
				$("#e_name").val(data[0].name);
				$("#e_email").val(data[0].email);
			}
		});
	});


	//for update
	$("#update").click(function(e){
		e.preventDefault();
		var id=$("#e_id").val();
		var name=$("#e_name").val();
		var email=$("#e_email").val();
		var url=BASE_URL+'Home/update';
		$.ajax({
			url : url,
			type:'POST',
			data:{id:id,name:name,email:email},
			success:function(data)
			{
				$("#modal").hide();
				alert("Update success");
				show();
			}
		});
	});

});