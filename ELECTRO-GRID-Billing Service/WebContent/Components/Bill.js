$(document).ready(function()
{
if ($("#alertSuccess").text().trim() == "")
 {
 $("#alertSuccess").hide();
 }
 $("#alertError").hide();
});

//SAVE============================================

$(document).on("click", "#btnSave", function(event)
{
// Clear alerts---------------------
 $("#alertSuccess").text("");
 $("#alertSuccess").hide();
 $("#alertError").text("");
 $("#alertError").hide();
// Form validation-------------------
var status = validateBillForm();
if (status != true)
 {
 $("#alertError").text(status);
 $("#alertError").show();
 return;
 }
// If valid------------------------
var type = ($("#hidItemIDSave").val() == "") ? "POST" : "PUT";
 $.ajax(
 {
 url : "BillAPI",
 type : type,
 data : $("#formBill").serialize(),
 dataType : "text",
 complete : function(response, status)
 {
 onBillSaveComplete(response.responseText, status);
 }
 });
});

// UPDATE==========================================

$(document).on("click", ".btnUpdate", function(event)
{
$("#hidItemIDSave").val($(this).data("id"));
 $("#userId").val($(this).closest("tr").find('td:eq(0)').text());
 $("#units").val($(this).closest("tr").find('td:eq(1)').text());
 $("#month").val($(this).closest("tr").find('td:eq(2)').text());
 $("#year").val($(this).closest("tr").find('td:eq(3)').text());
 $("#amount").val($(this).closest("tr").find('td:eq(4)').text());
});


//REMOVE==============================================

$(document).on("click", ".btnRemove", function(event)
{
 $.ajax(
 {
 url : "BillAPI",
 type : "DELETE",
 data : "id=" + $(this).data("id"),
 dataType : "text",
 complete : function(response, status)
 {
 onUserDeleteComplete(response.responseText, status);
 }
 });
});


// CLIENT-MODEL================================================================
function validateUserForm()
{
// USERID
if ($("#userId").val().trim() == "")
 {
 return "Insert User ID.";
 }
// UNITS
if ($("#units").val().trim() == "")
 {
 return "Insert units.";
 } 
 
// MONTH-------------------------------
if ($("#month").val().trim() == "")
 {
 return "Insert month.";
 }

// YEAR------------------------
if ($("#year").val().trim() == "")
 {
 return "Insert year.";
 }
 
 // AMOUNT------------------------
if ($("#amount").val().trim() == "")
 {
 return "Insert amount.";
 }
return true;
}

function onUserSaveComplete(response, status)
{
if (status == "success")
 {
 var resultSet = JSON.parse(response);
 if (resultSet.status.trim() == "success")
 {
 $("#alertSuccess").text("Successfully saved.");
 $("#alertSuccess").show();
 $("#divItemsGrid").html(resultSet.data);
 } else if (resultSet.status.trim() == "error")
 {
 $("#alertError").text(resultSet.data);
 $("#alertError").show();
 }
 } else if (status == "error")
 {
 $("#alertError").text("Error while saving.");
 $("#alertError").show();
 } else
 {
 $("#alertError").text("Unknown error while saving..");
 $("#alertError").show();
 } 
 14
 $("#hidItemIDSave").val("");
 $("#formBill")[0].reset();
}


function onBillDeleteComplete(response, status)
{
if (status == "success")
 {
 var resultSet = JSON.parse(response);
 if (resultSet.status.trim() == "success")
 {
 $("#alertSuccess").text("Successfully deleted.");
 $("#alertSuccess").show();
 $("#divItemsGrid").html(resultSet.data);
 } else if (resultSet.status.trim() == "error")
 {
 $("#alertError").text(resultSet.data);
 $("#alertError").show();
 }
 } else if (status == "error")
 {
 $("#alertError").text("Error while deleting.");
 $("#alertError").show();
 } else
 {
 $("#alertError").text("Unknown error while deleting..");
 $("#alertError").show();
 }
}