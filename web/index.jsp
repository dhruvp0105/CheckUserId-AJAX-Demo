
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <script src="checkuserid.js" type="text/javascript"></script>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Ajax Demo</title>
    </head>
    <body onload="init()">
        <h1>Kindly fill up details for your registration</h1>
        <form name="registrationForm" action="register">
            <table border="0" cellpadding="5">
                <tr>
                    <td>User Id :</td>
                    <td><input type="text" name="userid" id="userid" onchange="doChecking()"></input></td> 
                    <td><div id="status"></div></td>
                </tr>

                <tr>
                    <td>Name :</td>
                    <td><input type="text" name="name"></td> 
                    <td></td>
                </tr>

                <tr>
                    <td>Semester :</td>
                    <td><input type="text" name="sem"></td> 
                    <td></td>
                </tr>

                <tr>
                    <td></td>
                    <td><input type="submit"></td> 
                    <td></td>
                </tr>
            </table>
        </form>
    </body>
</html>
