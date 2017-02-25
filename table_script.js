function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var description=document.getElementById("Description_row"+no);
 var loe=document.getElementById("LevelofEffort_row"+no);
 var priority=document.getElementById("Priority_row"+no);
 
 var name_data=name.innerHTML;
 var description_data=description.innerHTML;
 var loe_data=loe.innerHTML;
 var priority_data=priority.innerHTML;
 
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 description.innerHTML="<input type='text' id='description_text"+no+"' value='"+description_data+"'>";
 loe.innerHTML="<input type='text' id='loe_text"+no+"' value='"+loe_data+"'>";
 priority.innerHTML="<input type='text' id='priority_text"+no+"' value='"+priority_data+"'>";
}

function save_row(no)
{
 var id_val="";	
 var name_val=document.getElementById("name_text"+no).value;
 var description_val=document.getElementById("description_text"+no).value;
 var loe_val=document.getElementById("loe_text"+no).value;
 var priority_val=document.getElementById("priority_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("description_row"+no).innerHTML=description_val;
 document.getElementById("loe_row"+no).innerHTML=loe_val;
 document.getElementById("priority_row"+no).innerHTML=priority_val;
 
 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{	
 var new_id="";
 var new_name=document.getElementById("new_name").value;
 var new_description=document.getElementById("new_description").value;
 var new_loe=document.getElementById("new_loe").value;
 var new_priority=document.getElementById("new_priority").value;	
 
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='id_row"+table_len+"'>"+new_id+"</td><td id='name_row"+table_len+"'>"+new_name+"</td><td id='Description_row"+table_len+"'>"+new_description+"</td><td id='LevelofEffort_row"+table_len+"'>"+new_loe+"</td><td id='Priority_row"+table_len+"'>"+new_priority+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";
 
 document.getElementById("new_name").value="";
 document.getElementById("new_description").value="";
 document.getElementById("new_loe").value="";
 document.getElementById("new_priority").value="";
}