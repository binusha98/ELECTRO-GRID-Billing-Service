<%@page import="com.Bill"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Billing Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-migrate-3.4.0.min.js"></script>
<script src="Components/users.js"></script>
</head>
<body>
<div class="container"><div class="row"><div class="col-6">
<h1>Billing Management</h1>
<form id="formUser" name="formItem">
 User ID:
 <input id="userId" name="userId" type="text"
 class="form-control form-control-sm">
 <br> Unit Usage:
 <input id="units" name="units" type="number"
 class="form-control form-control-sm">
 <br>  Month:
 <input id="month" name="month" type="text"
 class="form-control form-control-sm">
 <br> Year:
 <input id="year" name="year" type="text"
 class="form-control form-control-sm">
 <br>
  <br> Amount:
 <input id="amount" name="amount" type="text"
 class="form-control form-control-sm">
 <br>
 
 <input id="btnSave" name="btnSave" type="button" value="Save"class="btn btn-primary">
 <input type="hidden" id="hidItemIDSave" name="hidItemIDSave" value="">
</form>
<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<br>
<div id="divItemsGrid">
 <%
 Bill billObj = new Bill();
 out.print(billObj.readBill());
 %>
</div>
</div> </div> </div>
</body>
</html>