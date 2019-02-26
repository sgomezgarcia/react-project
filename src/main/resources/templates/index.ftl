<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Spring rocks the web</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
</head>
<body>
Spring rocks the web. YEHA
<div>
    <table class="table">
        <thead>
        <tr>
            <td>Item</td>
            <td>cantidad</td>
            <td>total</td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>normal</td>
            <td>5</td>
            <td>50</td>
        </tr>
        </tbody>
    </table>
<#if restaurantes??>
    <ul>
        <#list restaurantes as item>
            <li>
                <div>
                    <label for="fo-range-${item.name!""}">${item.name!""}</label>
                    <input id="fo-range-${item.name!""}" type="range" name="rangeInput" min="1" max="20"
                           onchange="updateTextInput('fo-value-${item.name!""}',this.value);">
                    <input id="fo-value-${item.name!""}" type="text" value=""/>
                </div>
            </li>
        </#list>
    </ul>
</#if>
</div>
<script language="JavaScript">
    function updateTextInput(input, val) {
        document.getElementById(input).value = val;
    }
</script>
</body>
</html>