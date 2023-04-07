<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>

    <link rel="stylesheet" href="Decdeli-Activity4.css">
</head>

<body>
    <h1>Registration Form</h1>

    <form action="Decdeli-Activity4-preview.php" method="post">

        <div class="row">
            <label>Name:</label>
            <input type="text" name="name" />
        </div>
        <div class="row">
            <label>Username:</label>
            <input type="text" name="username" />
        </div>
        <div class="row">
            <label>Password</label>
            <input type="password" name="password" />
        </div>
        <div class="row">
            <label>Address:</label>
            <input type="text" name="address" />
        </div>
        <div class="row">
            <label>Country:</label>
            <select name="country" id="country">
                <option value="" disabled selected>(Please select a country)</option>
                <option value="USA">USA</option>
                <option value="Turkey">Turkey</option>
                <option value="England">England</option>
            </select>
        </div>
        <div class="row">
            <label>Zip Code:</label>
            <input type="text" name="zip" />
        </div>
        <div class="row">
            <label>Email:</label>
            <input type="text" name="email" />
        </div>
        <div class="row">
            <label>Sex:</label>
            <input type="radio" id="male" name="sex" value="Male" />Male
            <input type="radio" id="female" name="sex" value="Female">Female
        </div>
        <div class="row">
            <label>Language:</label>
            English<input type="checkbox" name="languages[]" value="english" /> &nbsp;
            French <input type="checkbox" name="languages[]" value="french" />  &nbsp;
            German <input type="checkbox" name="languages[]" value="german" /> &nbsp;
        </div>
        <div class="row">
            <label>About:</label>
            <textarea name="about" id="" cols="30" rows="5"></textarea>
        </div>

        <button type="submit">Submit</button>
    </form>
</body>

</html>